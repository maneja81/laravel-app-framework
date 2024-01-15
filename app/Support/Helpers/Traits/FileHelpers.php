<?php

namespace App\Support\Helpers\Traits;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;


trait FileHelpers
{

    public function createDirectory(string $path)
    {
        if ($this->filesystem->isDirectory($path)) {
            return $path;
        }
        $this->filesystem->makeDirectory($path, 0755, true);
        return $path;
    }

    public function createFile(string $file_path, string $contents, int $cache_for_hours = 0)
    {
        $path = dirname($file_path);
        if (!$this->filesystem->isDirectory($path)) {
            $this->filesystem->makeDirectory($path, 0755, true);
        }

        if (!$this->filesystem->exists($file_path)) {
            $this->filesystem->put($file_path, $contents);
            return [
                'path' => $file_path,
                'contents' => $this->filesystem->get($file_path),
                'info' => $this->getFileInfo($file_path),
            ];
        }
        if ($this->filesystem->exists($file_path) && $cache_for_hours == 0) {
            $this->filesystem->put($file_path, $contents);
            return [
                'path' => $file_path,
                'contents' => $this->filesystem->get($file_path),
                'info' => $this->getFileInfo($file_path),
            ];
        }
        if ($this->filesystem->exists($file_path) && $cache_for_hours > 0) {
            $file_info = helpers()->getFileInfo($file_path);
            if ($file_info['last_modified']->timestamp < helpers()->carbonNow()->subHours($cache_for_hours)->timestamp) {
                $this->filesystem->put($file_path, $contents);
                return [
                    'path' => $file_path,
                    'contents' => $this->filesystem->get($file_path),
                    'info' => $this->getFileInfo($file_path),
                ];
            } else {
                return [
                    'path' => $file_path,
                    'contents' => $this->filesystem->get($file_path),
                    'info' => $this->getFileInfo($file_path),
                ];
            }
        }
        return false;
    }

    public function getFile(string $file_path)
    {
        if ($this->filesystem->exists($file_path)) {
            return [
                'path' => $file_path,
                'contents' => $this->filesystem->get($file_path),
                'info' => $this->getFileInfo($file_path),
            ];
        }
        return false;
    }

    public function deleteFile(string $file_path)
    {
        $file_path = Storage::path($file_path);
        if ($this->filesystem->exists($file_path)) {
            $this->filesystem->delete($file_path);
        }
        return false;
    }

    public function deleteDirectory(string $file_path)
    {
        $file_path = Storage::path($file_path);
        if ($this->filesystem->exists($file_path)) {
            $this->filesystem->deleteDirectory($file_path);
        }
        return false;
    }

    public function getFileInfo(string $file_path)
    {
        if ($this->filesystem->exists($file_path)) {
            return [
                'path' => $file_path,
                'dir' => $this->filesystem->dirname($file_path),
                'basename' => File::basename($file_path),
                'name' => File::name($file_path),
                'extension' => File::extension($file_path),
                'size_bytes' => File::size($file_path),
                'mime_type' => $this->filesystem->mimeType($file_path),
                'last_modified' => helpers()->carbonDate($this->filesystem->lastModified($file_path)),
            ];
        }
        return false;
    }
}
