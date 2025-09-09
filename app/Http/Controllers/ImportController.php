<?php

/**
 * @author : Vishal Kumar Sinha <vishalsinhadev@gmail.com>
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Import;
use App\Jobs\ProcessImportJob;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ImportController extends Controller
{
    public function index()
    {
        // Just return the Inertia view
        return Inertia::render('Import/Index');
    }
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
    public function show($id)
    {
        $import = Import::findOrFail($id);

        // return meta info + file link
        return response()->json([
            'id' => $import->id,
            'status' => $import->status,
            'processed_rows' => $import->processed_rows,
            'total_rows' => $import->total_rows,
            'file_url' => $import->file_url, // public link
        ]);
    }
    public function download($id)
    {
        $import = Import::findOrFail($id);

        return Storage::download($import->file_path);
    }
}
