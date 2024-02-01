<?php

namespace App\Support\Helpers\Traits;

use Carbon\Carbon;
use Carbon\CarbonPeriod;

trait DateHelpers
{
    public function carbonDbDate($timezone = false)
    {
        if (! $timezone) {
            $timezone = $this->defaultTimezone();
        }

        return Carbon::now()->setTimezone($timezone)->format('Y-m-d H:i:s');
    }

    public function defaultTimezone()
    {
        return config('app.timezone', 'UTC');
    }

    public function carbonNow($timezone = false)
    {
        if (! $timezone) {
            $timezone = $this->defaultTimezone();
        }

        return Carbon::now()->setTimezone($timezone);
    }

    public function carbonDateDefault($date, $timezone = false)
    {
        if (! $timezone) {
            $timezone = $this->defaultTimezone();
        }

        return Carbon::parse($date)->setTimezone($timezone);
    }

    public function carbonDate($date, $timezone = false)
    {
        if (! $timezone) {
            $timezone = $this->defaultTimezone();
        }

        return Carbon::parse($date)->setTimezone($timezone);
    }

    public function carbon($string, $format = 'Y-m-d H:i:s', $timezone = false)
    {
        if (! $timezone) {
            $timezone = $this->defaultTimezone();
        }

        return Carbon::parse($string)->setTimezone($timezone)->format($format);
    }

    public function carbonUtcDate($string, $format = 'Y-m-d H:i:s')
    {
        return Carbon::parse($string, 'UTC')->format($format);
    }

    public function carbonUtcNow()
    {
        return Carbon::now('UTC');
    }

    public function carbonDiff($future_date, $past_date, $period = 'seconds', $timezone = false)
    {
        if (! $timezone) {
            $timezone = $this->defaultTimezone();
        }
        $s_date = Carbon::parse($this->carbon($future_date))->setTimezone($timezone);
        $e_date = Carbon::parse($this->carbon($past_date))->setTimezone($timezone);
        $diff = [
            'seconds' => $s_date->diffInSeconds($e_date),
            'minutes' => $s_date->diffInMinutes($e_date),
            'hours' => $s_date->diffInHours($e_date),
            'days' => $s_date->diffInDays($e_date),
            'weeks' => $s_date->diffInWeeks($e_date),
            'months' => $s_date->diffInMonths($e_date),
            'years' => $s_date->diffInYears($e_date),
        ];

        return ($period == '') ? $diff : $diff[$period];
    }

    public function carbonDiffNow($past_date, $period = 'seconds')
    {
        $timezone = $this->defaultTimezone();
        $s_date = Carbon::parse($this->carbon(date('Y-m-d H:i:s')))->setTimezone($timezone);
        $e_date = Carbon::parse($this->carbon($past_date))->setTimezone($timezone);
        $diff = [
            'seconds' => $s_date->diffInSeconds($e_date),
            'minutes' => $s_date->diffInMinutes($e_date),
            'hours' => $s_date->diffInHours($e_date),
            'days' => $s_date->diffInDays($e_date),
            'weeks' => $s_date->diffInWeeks($e_date),
            'months' => $s_date->diffInMonths($e_date),
            'years' => $s_date->diffInYears($e_date),
        ];

        return ($period == '') ? $diff : $diff[$period];
    }

    public function carbonIntervals($start_date, $end_date, $interval, $format)
    {
        $start_date = $this->carbonDate($start_date)->startOfDay()->format('Y-m-d h:i a');
        $end_date = $this->carbonDate($end_date)->endOfDay()->format('Y-m-d h:i a');
        if ($interval == '1 week') {
            $end_date = $this->carbonDate($end_date)->addWeek(1)->endOfDay()->format('Y-m-d h:i a');
        }
        $period = new CarbonPeriod($start_date, $interval, $end_date);
        $return = [];
        foreach ($period as $date) {
            $return[] = $date->format($format);
        }

        return $return;
    }

    public function carbonIsoConvert($date)
    {
        $timezone = $this->defaultTimezone();
        $dt = Carbon::createFromFormat('Y-m-d H:i:s', $date)->setTimezone($timezone);

        return $dt->toIso8601ZuluString();
    }
}
