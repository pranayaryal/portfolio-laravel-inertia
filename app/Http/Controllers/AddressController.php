<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AddressController extends Controller
{
    public function validate(Request $request)
    {
        $url = 'https://api.usps.com/oauth2/v3/token';

        // Get the token
        $response = Http::withHeaders([
            'Content-Type' => 'application/json'
        ])->post($url, [
            'grant_type' => 'client_credentials',
            'client_id' => env('USPS_KEY'),
            'client_secret' => env('USPS_SECRET'),
            'scope' => 'addresses',
            'state' => ""
        ]);

        $response->throw();
        $access_token = $response->json()['access_token'];
        $addrBaseUrl = 'https://api.usps.com/addresses/v3/address?'.
            'streetAddress=' . $request->line1 . '&city='.$request->city.
            '&state='.$request->state. '&ZIPCode='.$request->zip;

        // Call with token
        $response_address = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer '. $access_token,
        ])->get($addrBaseUrl);

        $response_address->throw();
        $address = $response_address->json()['address'];
        return response()->json(['cleanedAddr' => $address]);

    }

}
