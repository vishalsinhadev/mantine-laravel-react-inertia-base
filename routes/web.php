<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\JobPostController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SiteController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/Index');
});

// Route::get('/', [SiteController::class, 'index'])->name('site.index');
Route::get('/service', [ServiceController::class, 'index'])->name('service.index');
Route::get('/service/{slug}', [ServiceController::class, 'view'])->name('service.view');

Route::get('/portfolio', [SiteController::class, 'portfolio'])->name('site.portfolio');
Route::get('/career', [SiteController::class, 'career'])->name('site.career');
Route::get('/contact-us', [SiteController::class, 'contactUs'])->name('site.contact-us');
Route::get('/about', [SiteController::class, 'about'])->name('site.about');

/**
 * BLog Route
 */
Route::get('/blog/{category?}', [BlogController::class, 'blog'])->name('site.blog');
Route::get('/blog/{slug}/{id}', [BlogController::class, 'view'])->name('blog.view');
/**
 * Contact Routes
 */
Route::post('/contact/store', [ContactController::class, 'store'])->name('contact.store');

/**
 * JobPost Routes
 */
Route::post('/job-post/store-application/{id}', [JobPostController::class, 'storeApplication'])->name('job-post.store-application');
