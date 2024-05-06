<?php

namespace App\Http\Controllers;

use App\Mail\RentRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class MailController extends Controller
{
    public function SendMail(Request $request) {
        $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'phone' => 'required',
            'countPersons' => 'required',
            'email' => 'required',
            'message' => 'required'
        ]);

        Mail::to("info@maisonbarvaux.be")->send(new RentRequest($request->all()));

        return redirect('/success');
    }
}
