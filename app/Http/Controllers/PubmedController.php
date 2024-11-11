<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PubmedController extends Controller
{
    protected $BASE_URL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/";
    protected $SEARCH_ENDPOINT = "esearch.fcgi?db=pubmed&retmode=json&sort=pub_date&term=";
    protected $SUMMARY_ENDPOINT = 'esummary.fcgi?db=pubmed&version=2.0&retmode=json&id=';

    protected function getPmids(Request $request)
    {
        //$url = $this->BASE_URL . $this->SEARCH_ENDPOINT .$request->term. '+randomized+controlled+trial[pubt]';
        switch ($request->type) {
            case "rct":
                $url = $this->BASE_URL . $this->SEARCH_ENDPOINT .$request->term. '+randomized+controlled+trial[pubt]';
                break;
            case "review":
                $url = $this->BASE_URL . $this->SEARCH_ENDPOINT .$request->term. '+review[pubt]';
                break;
        }


        $pmids = Http::withHeaders([
            'Content-Type' => 'application/json',
        ])->get($url);

        return $pmids->json()['esearchresult']['idlist'];

    }


   protected function getSummary($pmIds)
   {
      $url = $this->BASE_URL . $this->SUMMARY_ENDPOINT . $pmIds;
        $summary = Http::withHeaders([
            'Content-Type' => 'application/json',
        ])->get($url);

        return $summary;


   }

    public function pubmed(Request $request)
    {
        dd($request);
        $pmids = $this->getPmids($request);
        if (empty($pmids)) {
            return view('rct', ['error' => 'That query returned no results. Try another']);

        }
        $joined = implode(',', $pmids);
        $summary = $this->getSummary($joined);
       //dd($summary['result']);
        // return view('rct', ['result' => $summary['result']]);
        // return view('rct-container', ['result' => $summary['result']]);
        return json_encode(['result' => $summary['result']]);

    }

}

