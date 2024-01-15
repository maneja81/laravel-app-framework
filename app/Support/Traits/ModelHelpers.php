<?php

namespace App\Support\Traits;

use Illuminate\Support\Facades\Schema;

trait ModelHelpers
{
    public function getColumns()
    {
        $table_name = $this->getTable();
        return Schema::getColumnListing($table_name);
    }

    public function hasColumn($name)
    {
        $columns = $this->getColumns();
        return in_array($name, $columns);
    }

    public function getFillableFields($ignore = [])
    {
        $columns = $this->getColumns();
        $hidden_fields = [];
        if (!is_null($this->getHidden())) {
            $hidden_fields = $this->getHidden();
        }
        $ignore_columns = array_merge(['id', 'meta', 'created_at', 'updated_at', 'deleted_at'], $ignore, $hidden_fields);
        $return = [];
        foreach ($columns as $column) {
            if (!in_array($column, $ignore_columns)) {
                $return[] = $column;
            }
        }
        return $return;
    }

    public function create($data)
    {
        if ($this->hasColumn('meta')) {
            $meta_data = [];
        }
        $created = parent::create($data);
        $created->updateInfo($meta_data);
        $created->updateInfo($data);
        return $created;
    }

    public function getByField(mixed $field, mixed $value, bool $transformed = false, $includes = [])
    {
        $result = $this->where($field, $value)->first();

        return ($transformed) ? $result->transformed($includes) : $result;
    }

    public function getByFields(array $conditions, bool $transformed = false, $includes = [])
    {
        $where = [];
        foreach ($conditions as $key => $value) {
            $where[] = [
                $key, '=', $value,
            ];
        }
        $result = $this->where($where)->first();
        if (!$result) {
            return [];
        }

        if ($transformed) {
            return $result->transformed($includes);
        }

        return $result;
    }

    public function getMeta($key = null, $default = '')
    {
        if (!$this->hasColumn('meta')) {
            throw new \Exception('Meta column does not exist on this model.', 500);
        }
        $return = [];
        $meta_data = $this->meta;
        if (!is_null($meta_data)) {
            $return = $meta_data;
        }

        return (is_null($key)) ? $return : $return[$key] ?? $default;
    }

    public function updateMeta($key, $value)
    {
        if (!$this->hasColumn('meta')) {
            throw new \Exception('Meta column does not exist on this model.', 500);
        }
        $meta_data = $this->meta;
        $meta_data[$key] = $value;
        $this->update(['meta' => $meta_data]);
        return $this->refresh();
    }

    public function deleteMeta($key)
    {
        if (!$this->hasColumn('meta')) {
            throw new \Exception('Meta column does not exist on this model.', 500);
        }
        $meta_data = $this->meta;
        unset($meta_data[$key]);
        $this->meta = $meta_data;
        $this->save();
        return $this->refresh();
    }

    public function updateInfo(array $items)
    {
        $fillable_fields = $this->getFillableFields();
        $fillable_data = [];
        $meta_data = [];
        $hidden_fields = $this->getHidden();
        foreach ($items as $key => $value) {
            if (in_array($key, $fillable_fields)) {
                $fillable_data[$key] = $value;
            } else {
                if (!in_array($key, $hidden_fields)) {
                    $meta_data[$key] = $value;
                }
            }
        }
        $this->update($fillable_data);
        if ($this->hasColumn('meta')) {
            $existing_meta_data = $this->meta ?? [];
            $update_meta_data = array_merge($existing_meta_data, $meta_data);
            $this->update(['meta' => $update_meta_data]);
        }

        return $this->refresh();
    }
}
