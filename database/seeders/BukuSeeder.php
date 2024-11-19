<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BukuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('buku_tabel')->insert([
            [
                'title' => 'Atomic Habits',
                'genre' => 'Self-Improvement',
                'author' => 'James Clear',
                'image' => '/storage/atomichabbits.png',
            ],
            [
                'title' => 'Filosofi Teras',
                'genre' => 'Philosophy',
                'author' => 'Henry Manampiring',
                'image' => '/storage/filositeras.png',
            ],
            [
                'title' => 'The Psychology of Money',
                'genre' => 'Finance',
                'author' => 'Morgan Housel',
                'image' => '/storage/psychologyofmoney.png',
            ],
            [
                'title' => 'The Infinite Game',
                'genre' => 'Business',
                'author' => 'Simon Sinek',
                'image' => '/storage/infinatethegame.png',
            ],
            [
                'title' => 'Laut Bercerita',
                'genre' => 'Fiction',
                'author' => 'Leila S. Chudori',
                'image' => '/storage/lautbercerita.png',
            ],
        ]);
    }
}
