<?php

namespace App\Jobs;

use App\Models\Import;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessImportJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $import;

    public function __construct(Import $import)
    {
        $this->import = $import;
    }

    public function handle()
    {
        $path = storage_path('app/' . $this->import->file_path);

        $this->import->update(['status' => 'processing']);

        $handle = fopen($path, 'r');
        $header = fgetcsv($handle, 1000, ','); // skip header

        $rows = [];
        $rowCount = 0;
        $batchSize = 1000;

        while (($data = fgetcsv($handle, 1000, ',')) !== FALSE) {
            $rows[] = [
                'name' => $data[0],
                'email' => $data[1],
                'created_at' => now(),
                'updated_at' => now(),
            ];

            $rowCount++;

            if ($rowCount % $batchSize === 0) {
                User::insert($rows);
                $rows = [];

                $this->import->increment('processed_rows', $batchSize);
            }
        }

        // Insert remaining
        if (count($rows)) {
            User::insert($rows);
            $this->import->increment('processed_rows', count($rows));
        }

        fclose($handle);

        $this->import->update([
            'status' => 'completed',
            'total_rows' => $this->import->processed_rows,
        ]);
    }
}
