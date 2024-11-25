<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AddressController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/address-cleaning-usps', [AddressController::class, 'show'])->name('address.show');
Route::post('/address-cleaning-usps', [AddressController::class, 'validate'])->name('address.validate');

Route::get('/pubmed-api', function() {
    return Inertia::render('Pubmed');
});

Route::get('/randomized-controlled-trials', function () {
    return Inertia::render('WhatIsRct');
});


Route::get('/pubmed-randomized-controlled-trial', function () {
    return Inertia::render('Rct');
});

Route::get('/llm-models-with-coding', function () {
    return Inertia::render('LlmCoding');
});

Route::get('/bm25-algorithm', function () {
    return Inertia::render('Bm25');
});

// Route::post('/validate-address', [AddressController::class, 'validate']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
