<?php

namespace App\Helper;

class FileHelper
{

    static public function handleUploadFile($file, $old = null)
    {
        if ($file) {
            $filename = $file->getClientOriginalName();
            $filename = preg_replace('/\s/', '_', $filename);
            $fileNameToStore = $filename . '_' . time() . '.' . $file->getClientOriginalExtension();
            $destinationPath = public_path('uploads');
            $file->move($destinationPath, $fileNameToStore);
            if ($old !== null) {
                $oldPath = $destinationPath . $old;
                if (file_exists($oldPath))
                    @unlink($oldPath);
            }
            return $fileNameToStore;
        }
    }

    static public function hasImage($fileName)
    {
        $filePath = public_path('/uploads/') . $fileName;
        return is_file($filePath) && true;
    }

    static public function getFile($fileName)
    {
        if (self::hasImage($fileName)) {
            return asset('/uploads/' . $fileName);
        }
        return asset('/assets/plugins/images') . '/noImage.png';
    }

    static public function removeImage($fileName)
    {
        if (self::hasImage($fileName)) {
            return @unlink(public_path('/uploads/' . $fileName)) && true;
        }
        return false;
    }
}
