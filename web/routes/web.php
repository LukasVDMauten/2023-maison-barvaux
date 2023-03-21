<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/accommodation', function () {
    $images = array();

    foreach (\App\Models\Image::all() as $img){
        $img->media = $img->getMedia('categories');
        $images[] = $img;
    }

    return Inertia::render('Accommodation', [
        'images' => $images,
    ]);
});

Route::get('/info', function () {
    return Inertia::render('Info');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/prices', function () {
    $events = \App\Models\Event::all();
    $prices = \App\Models\Price::all();
    return Inertia::render('Prices', ['events' => $events, 'prices' => $prices]);
});

Route::get('/success', function () {
    return Inertia::render('ContactSuccess');
});

Route::post("/send-mail", [\App\Http\Controllers\MailController::class, "SendMail"]);
