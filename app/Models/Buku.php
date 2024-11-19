<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Buku extends Model
{
    use HasFactory;

    protected $table = 'buku_tabel'; // Nama tabel
    protected $fillable = ['title', 'genre', 'author', 'image']; // Field yang dapat diisi
}
