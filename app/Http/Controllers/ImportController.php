<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Import;
use App\Jobs\ProcessImportJob;
use Illuminate\Support\Facades\Storage;

class ImportController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:csv,txt|max:51200', // 50MB limit
        ]);

        $path = $request->file('file')->store('imports');

        $import = Import::create([
            'file_path' => $path,
            'status' => 'pending',
        ]);

        // Dispatch job to process asynchronously
        ProcessImportJob::dispatch($import);

        return response()->json([
            'message' => 'File uploaded successfully, import started.',
            'import_id' => $import->id,
        ]);
    }

    public function status($id)
    {
        $import = Import::findOrFail($id);

        return response()->json([
            'status' => $import->status,
            'processed_rows' => $import->processed_rows,
            'total_rows' => $import->total_rows,
        ]);
    }
}
