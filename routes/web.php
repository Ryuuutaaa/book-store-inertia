<?php

use App\Http\Controllers\BukuController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    // buku
    Route::get("/buku", [BukuController::class, 'index'])->name("buku.root");
    Route::get("/buku/create", [BukuController::class, 'create'])->name("buku.create");
    Route::post("/buku/store", [BukuController::class, 'store'])->name("buku.store");
    Route::get("/buku/{id}", [BukuController::class, 'show'])->name("buku.show");
    Route::get("/buku/{id}/edit", [BukuController::class, 'edit'])->name("buku.edit");
    Route::put("/buku/{id}", [BukuController::class, 'update'])->name("buku.update");
    Route::delete("/buku/{id}", [BukuController::class, 'destroy'])->name("buku.destroy");




    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
