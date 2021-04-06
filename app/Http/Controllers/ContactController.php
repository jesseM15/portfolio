<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function submitContactForm(Request $request)
    {
        $request->validate([
            'name' => 'max:255',
            'email' => 'required|email|max:255',
            'message' =>  'required|max:4000',
            'recaptcha_response' => 'required',
        ]);

        if (env('APP_ENV') !== 'local')
        {
            $response = file_get_contents(
                "https://www.google.com/recaptcha/api/siteverify?secret=" . env('RECAPTCHA_SECRET_KEY') . "&response=" . $request->input('recaptcha_response') . "&remoteip=" . $_SERVER['REMOTE_ADDR']
            );
            // use json_decode to extract json response
            $response = json_decode($response);
        
            if ($response->success === false) {
                //Do something with error
                return response(['success' => false]);
            }
            
            //... The Captcha is valid you can continue with the rest of your code
            //... Add code to filter access using $response . score
            if ($response->success==true && $response->score <= 0.5) {
                //Do something to denied access
                return response(['success' => false]);
            }
        }

        $contactForm = new \stdClass();
        $contactForm->name = $request->input('name') ?? '';
        $contactForm->email = $request->input('email');
        $contactForm->message = $request->input('message');

        // NOTE: nearlyfreespeech requires the use of php mail() function
        mail(env('CONTACT_EMAIL_ADDRESS'), 'Personal site contact form submitted', print_r($contactForm, true));

        return response(['success' => true]);
    }
}
