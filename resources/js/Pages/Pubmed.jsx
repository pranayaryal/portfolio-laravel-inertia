import MainLayout from '@/Layouts/MainLayout';
import NejmLogo from '@/Components/NejmLogo';
import BaseTable from '@/Components/BaseTable';
import { Head } from '@inertiajs/react';

export default function Pubmed() {
    return (
        <MainLayout>
            <Head>
                <title>How to use the PubMed Api</title>
                <meta name="description" content="An explanation about to use the PubMed Api" />
            </Head>
            <div className="max-w-[600px] mx-auto">
                <h1 className="mt-16 text-2xl md:text-5xl tracking-tight mb-4">Pubmed Api</h1>
                <h3 className="text-xl text-left mt-8 text-gray-900">
                    What is PubMed? </h3>
                <div className='mt-4'>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" className="text-indigo-500">Pubmed</a>
                    <span className="inline"> is a website clinicians and researchers visit to look for research articles.
                        I recently visited the <a className="text-indigo-500" href="https://www.ncbi.nlm.nih.gov/books/NBK25501"
                            target="__blank">API website</a>, only to be disappointed with its outdated design.</span>
                    <p className='mt-4'>I've extracted and emphasized the key points from that information, while also acknowledging some potential gaps. A more detailed account can be found by following the link provided earlier.
                    </p>
                    <p className="mt-4">
                        The <strong>base URI</strong> for the API is
                        <span className="bg-green-100 rounded break-words">https://eutils.ncbi.nlm.nih.gov/entrez/eutils/</span>
                    </p>
                    <div className='mt-4'>
                        <span>See the demo </span>
                        <a href="/pubmed-randomized-controlled-trial" className="text-indigo-400">here</a>
                    </div>
                </div>
                <h3 className="text-lg font-bold text-left mt-16 text-gray-900">
                    Table of contents:
                </h3>
                <div className="mt-2 leading-7">
                    <p>1. API Key</p>
                    <p>2. Basic Searching</p>
                    <p>3. Storing Search Results</p>
                    <p>4. Getting Summaries</p>
                    <p>5. Getting Full Data</p>
                    <p>6. Spelling Suggestions</p>
                    <p>7. Related Articles</p>
                    <p>8. Database Statistics annd Search Terms</p>
                </div>
                <div className='step flex md:items-center space-x-4 py-4 mt-8'>
                    <div
                        className="flex items-center justify-center border border-gray-200 font-extrabold dark:border-gray-900 rounded-full h-8 w-8 text-green-500 text-md">
                        1
                    </div>
                    <h1 className="tracking-tight leading-6 font-semibold text-lg md:text-2xl mb-0">API Key</h1>
                </div>
                <div className="mt-4">
                    API keys can be obtained from
                    <a href="http://www.ncbi.nlm.nih.gov/account" target="_blank" className='break-words text-indigo-500'>
                        http://www.ncbi.nlm.nih.gov/account/</a>
                    after you create an account
                </div>
                <div className="mt-4">
                    Once the key has been generated, users are required to incorporate it into every E-utility request by assigning
                    it to the <span className="bg-pink-100 rounded">api_key</span> parameter.
                </div>
                <div className="mt-4">
                    Example request including an API key:
                </div>
                <p className="mt-4 break-words">
                    esummary.fcgi?db=pubmed&id=123456&api_key=ABCDE12345
                </p>
                <div className='step flex md:items-center space-x-4 py-4 mt-8'>
                    <div
                        className="flex items-center justify-center border border-gray-200 font-extrabold dark:border-gray-900 rounded-full h-8 w-8 text-green-500 text-md">
                        2
                    </div>
                    <h1 className="tracking-tight leading-6 font-semibold text-lg md:text-2xl mb-0">Basic Searching</h1>
                </div>
                <div className="mt-4">
                    <span className='border-b-4 border-green-300'>Endpoint:</span>
                    <span> esearch.fcgi?db=[database]&term=[query]</span>
                </div>
                <p className="mt-4">By utilizing this API endpoint, you can initiate a search for a specific term, and in response,
                    you will receive a collection of UIDs, which serve as unique identifiers for articles.</p>
                <div className="mt-4">
                    <span className='border-b-4 border-green-300'>Functions:</span><span> Provides a list of UIDs matching a text
                        query.</span>
                </div>
                <div className="mt-4">
                    <span className='border-b-4 border-green-300'>UID:</span><span> Unique Identifier</span>
                </div>
                <div className="mt-4">
                    <span className='border-b-4 border-green-300'>Base Url:</span><span class="bg-pink-50">
                        https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed</span>
                </div>
                <div className="mt-4">
                    <span className='border-b-4 border-green-300'>Output:</span><span> List of UIDs matching a query</span>
                </div>
                <div className="mt-4">
                    <span className='border-b-4 border-green-300'>Example:</span><span> Get the PMIDs (PubMed Ids) for articles about
                        breast cancer published in Science 2008</span>
                </div>
                <div className="mt-4">
                    <span className='border-b-4 border-green-300'>URI:</span><a class="overflow-hidden text-indigo-500"
                        href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]&retmode=json"> URI</a>
                </div>
                <pre className="leading-6 text-xs bg-code-background text-white rounded-md px-6 py-6 mt-8">
                    <span class="text-indigo-300">{`{`}</span>
                    <p class="text-orange-500">{`header": {`}</p>
                    <span class="text-orange-500">"type": "esearch",</span>
                    <p class="text-blue-300">{`},`}</p>
                    <p class="text-yellow-500">{`esearchresult: {`}</p>
                    "querykey": "1",
                    <p class="text-orange-500">"idlist": </p>
                    <span class="text-green-500">["19008416",</span>
                    <span class="text-green-500">"19208416",</span>
                    <span class="text-green-500">"18008416",</span>
                    <span class="text-green-500">"16208416"]</span>
                    <p class="text-yellow-500">"translationset": "..."</p>
                    <span class="text-indigo-300">{`}`}</span>
                </pre>
                <div class='step flex md:items-center space-x-4 py-4 mt-8'>
                    <div
                        class="flex items-center justify-center border border-gray-200 font-extrabold dark:border-gray-900 rounded-full h-8 w-8 text-green-500 text-md">
                        3
                    </div>
                    <h1 class="tracking-tight leading-6 font-semibold text-lg md:text-2xl mb-0">Storing Search Results</h1>
                </div>
                <p class="mt-4">Can be used to save your results in the pubmed server.</p>
                <p class="mt-4">Later on, when combining the results as I will explain, it will be necessary for you to utilize
                    this information.</p>
                <p class="bg-pink-50 mt-4">esearch.fcgi?db=[database]&term=[query]&usehistory=y</p>
                <div class="mt-4">
                    <span class='border-b-4 border-green-300'>Input:</span><span> Any query; Entrez database (&db);
                        &usehistory=y</span>
                </div>
                <div class="mt-4">
                    <span class='border-b-4 border-green-300'>Output:</span><span> Web environment (&WebEnv) and query key
                        (&query_key).</span>
                </div>
                <div class="mt-4 mb-4">
                    <span class='border-b-4 border-green-300'>Example:</span><span> Get the PubMed IDs (PMIDs) for articles about
                        breast cancer published in Science in 2008.</span>
                </div>
                <p>Check this <a target="__blank" class="text-indigo-500"
                    href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]&usehistory=y&retmode=json">URI</a>
                </p>
                <p class="mt-4">Use <span class="font-bold">&retmode=json</span> to get the json output</p>
                <p class="mt-4">This will return a <span class="font-bold">WebEnvId</span> in the response</p>
                <p class="mt-4">Use <span class="font-bold">WebEnvId</span> in a subsequent request like this.</p>
                <p class="mt-4">esearch.fcgi?db=[database]&term=[query2]&usehistory=y&WebEnv=$web1</p>
                <p class="mt-4">Use the "epost" endpoint to save the set of UIDs in the database</p>
                <p class="mt-4">https://eutils.ncbi.nlm.nih.gov/entrez/eutils/epost.fcgi?db=gene&id=7173,22018,54314,403521,525013
                </p>
                <p class="mt-4">This will also return a WebEnvId which you can use in a subsequent request.</p>
                <pre className="leading-6 text-xs bg-code-background text-white rounded-md px-6 py-6 mt-8">
                    <span class="text-indigo-300">{`{`}</span>
                    <p class="text-orange-500">{`header": {`}</p>
                    <span class="text-orange-500">"type": "esearch",</span>
                    <p class="text-blue-300">{`},`}</p>
                    <p class="text-yellow-500">{`esearchresult: {`}</p>
                    <p className='text-blue-300'>"querykey": "1"</p>
                    <p className='text-blue-300'>"webEnvId": "MCID_63a5a3e077047a"</p>
                    <p class="text-orange-500">"idlist": </p>
                    <span class="text-green-500">["19008416",</span>
                    <span class="text-green-500">"19208416",</span>
                    <span class="text-green-500">"18008416",</span>
                    <span class="text-green-500">"16208416"]</span>
                    <p class="text-yellow-500">"translationset": "..."</p>
                    <span class="text-indigo-300">{`}`}</span>
                </pre>
                <div class='step flex md:items-center space-x-4 py-4 mt-8'>
                    <div
                        class="flex items-center justify-center border border-gray-200 font-extrabold dark:border-gray-900 rounded-full h-8 w-8 text-green-500 text-md">
                        4
                    </div>
                    <h1 class="tracking-tight leading-6 font-semibold text-lg md:text-2xl mb-0">Getting Summary</h1>
                </div>
                <p class="mt-4">It provides summaries of studies for a given list of pubmed IDs separate by commas.</p>
                <p class="mt-4">
                    <a class="text-indigo-500"
                        href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=16899775,33164953&version=2.0">https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=16899775,33164953&version=2.0</a>
                </p>
                <p class="mt-4">Use <span class="font-bold">&retmode=json</span> to get the json output</p>
                <div class='step flex md:items-center space-x-4 py-4 mt-8'>
                    <div
                        class="flex items-center justify-center border border-gray-200 font-extrabold dark:border-gray-900 rounded-full h-8 w-8 text-green-500 text-md">
                        5
                    </div>
                    <h1 class="tracking-tight leading-6 font-semibold text-lg md:text-2xl mb-0">Getting Full Data</h1>
                </div>

                <div class="mt-4">
                    <span class='border-b-4 border-green-300'>Endpoint:</span><span> efetch.fcgi?db=[database]&id=[uid_list]
                        &rettype=[retrieval_type]&retmode=json</span>
                </div>
                <div class="mt-4">
                    <span class='border-b-4 border-green-300'>Input:</span><span> List of UIDs (&id); Entrez database (&db);
                        Retrieval type (&rettype); Retrieval mode (&retmode)`</span>
                </div>
                <p class="mt-4 text-indigo-500">
                    <a
                        href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=nuccore&id=34577062,24475906&rettype=json&retmode=text">Link</a>
                </p>
                <div class='step flex md:items-center space-x-4 py-4 mt-8'>
                    <div
                        class="flex items-center justify-center border border-gray-200 font-extrabold dark:border-gray-900 rounded-full h-8 w-8 text-green-500 text-md">
                        6
                    </div>
                    <h1 class="tracking-tight leading-6 font-semibold text-lg md:text-2xl mb-0">Spelling Suggestions</h1>
                </div>
                <div class='mt-4'>
                    <span class='border-b-4 border-green-300'>EndPoint:</span>
                    <span class="ml-2 bg-pink-100">espell.fcgi?term=[query]&db=/database/</span>
                </div>
                <div class='mt-4'>
                    <span class='border-b-4 border-green-300'>Input:</span>
                    <span classa="ml-2">
                        Entrez text query (&term); Entrez database (&db)
                    </span>
                </div>
                <div class='mt-4'>
                    <span class='border-b-4 border-green-300'>Output:</span>
                    <span class="ml-2">
                        XML or json containing the original query and spelling suggestions.
                    </span>
                </div>
                <div class='mt-4'>
                    <span class='border-b-4 border-green-300'>Example:</span>
                    <span class="ml-2">
                        Find spelling suggestions for the PubMed Central query ‘fiberblast cell grwth’.
                    </span>
                </div>
                <div class='mt-4'>
                    <a href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/espell.fcgi?term=rhuinitis&db=pubmed" target="_blank"
                        class="text-indigo-400 break-words">https://eutils.ncbi.nlm.nih.gov/entrez/eutils/espell.fcgi?term=rhuinitis&db=pubmed
                    </a>
                </div>
                <div class='step flex md:items-center space-x-4 py-4 mt-8'>
                    <div
                        class="flex items-center justify-center border border-gray-200 font-extrabold dark:border-gray-900 rounded-full h-8 w-8 text-green-500 text-md">
                        7
                    </div>
                    <h1 class="tracking-tight leading-6 font-semibold text-lg md:text-2xl mb-0">Related Articles</h1>
                </div>
                <div class='mt-4'>
                    Responds to a list of UIDs in a given database with either a list of related UIDs (and relevancy scores) in the
                    same database or a list of linked UIDs in another Entrez database
                </div>
                <div class='mt-4'>
                    Batch mode – finds only one set of linked UIDs
                </div>
                <div class='mt-4'>
                    <span class="bg-pink-100 rounded">elink.fcgi?dbfrom=[source_db]&db=[destination_db]&id=uid_list/uid_list</span>
                </div>
                <div class='mt-4'>
                    <span class='border-b-4 border-green-300'>Input:</span>
                    <span class="ml-2">
                        List of UIDs (&id); Source Entrez database (&dbfrom); Destination Entrez database (&db)
                    </span>
                </div>
                <div class='mt-4'>
                    <span class='border-b-4 border-green-300'>Output:</span>
                    <span class="ml-2">
                        XML containing linked UIDs from source and destination databases
                    </span>
                </div>
                <div class='mt-4'>
                    <span class='border-b-4 border-green-300'>Example:</span>
                    <span class="ml-2">
                        Find one set of Gene IDs linked to nuccore GIs 34577062 and 24475906
                    </span>
                </div>
                <div class='mt-4'>
                    <a href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/elink.fcgi?dbfrom=pubmed&db=pubmed&id=34525277"
                        target="_blank"
                        class="text-indigo-400 break-words">https://eutils.ncbi.nlm.nih.gov/entrez/eutils/elink.fcgi?dbfrom=pubmed&db=pubmed&id=34525277
                    </a>
                </div>
                <div class='step flex md:items-center space-x-4 py-4 mt-8'>
                    <div
                        class="flex items-center justify-center border border-gray-200 font-extrabold dark:border-gray-900 rounded-full h-8 w-8 text-green-500 text-md">
                        8
                    </div>
                    <h1 class="tracking-tight leading-6 font-semibold text-lg md:text-2xl mb-0">Optional Parameters</h1>
                </div>
                <div class='mt-4'>
                    <span class='border-b-4 border-green-300'>retmode:</span>
                    <p class="mt-2 ml-4">Set this to json to return in a <strong>json</strong> format </p>
                </div>
                <div class='mt-4'>
                    <span class='border-b-4 border-green-300'>restart:</span>
                        <p class="mt-2 ml-4">Index of first UID to be shown</p>
                    </div>
                        <div class='mt-4'>
                            <span class='border-b-4 border-green-300'>restart:</span>
                            <p class="mt-2 ml-4">Total number of UIDs to be shown</p>
                        </div>
                        <ul class='mt-4'>
                            <span class='border-b-4 border-green-300'>sort:</span>
                            <li class="mt-2 ml-4">Sort by the following:</li>
                            <li class="mt-2 ml-4 text-sm">- relevance (default)</li>
                            <li class="mt-2 ml-4 text-sm">- pub_date (descending order by publication date)</li>
                            <li class="mt-2 ml-4 text-sm">- Author - (by first author)</li>
                            <li class="mt-2 ml-4 text-sm">- JournalName</li>
                        </ul>
                        <div class='mt-4'>
                            <a href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]&retmode=json&sort=pub_date"
                                target="_blank" class="text-indigo-400 break-words">
                                Link
                            </a>
                        </div>
                        <div class='mt-4'>
                            <span>3. </span><span class='border-b-4 border-green-300'>datetype:</span>
                        </div>
                        <ul class='mt-4'>
                            <li class="mt-2 ml-4 text-sm">- &datetype=mdat - modification date</li>
                            <li class="mt-2 ml-4 text-sm">- &datetype=pdat - publication date</li>
                            <li class="mt-2 ml-4 text-sm">- &datetype=edat - entrez date</li>
                        </ul>
                        <div class='mt-4'>
                            <span>3. </span><span class='border-b-4 border-green-300'>mindate, maxdate:</span>
                        </div>
                        <ul class='mt-4'>
                            <li class="mt-2 ml-4 text-sm">- self-explanatory</li>
                            <li class="mt-2 ml-4 text-sm">- format should be yyyy/mm/dd or yyyy or yyyy/mm</li>
                        </ul>
                        <div class='flex md:items-center space-x-4 py-4 mt-8'>
                            <div
                                class="flex items-center justify-center border border-gray-200 font-extrabold dark:border-gray-900 rounded-full h-8 w-8 text-green-500 text-md">
                                8
                            </div>
                            <h1 class="tracking-tight leading-6 font-semibold text-lg md:text-2xl mb-0">Database Statistics and Search
                                Fields</h1>
                        </div>
                        <div class='mt-4'>
                            <span class='border-b-4 border-green-300'>Endpoint:</span>
                            <span class="bg-pink-100 rounded ml-2">einfo.fcgi?db=/database/</span>
                        </div>
                        <div class="mt-4">
                            <span class='border-b-4 border-green-300'>Output:</span>
                            <span class="ml-2">
                                XML containing database statistics
                            </span>
                        </div>
                        <div class='mt-4'>
                            Note: If no database parameter is supplied, einfo will return a list of all valid Entrez databases
                        </div>
                        <div class="mt-4">
                            <span class='border-b-4 border-green-300'>Example:</span>
                            <span class="ml-2">
                                Find database statistics for Entrez Pubmed
                            </span>
                        </div>
                        <div class='mt-4'>
                            <a href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/einfo.fcgi?db=pubmed&retmode=json" target="_blank"
                                class="text-indigo-400 break-words">
                                Link
                            </a>
                        </div>
                        <div class='mt-4'>
                            Use <span class="font-semibold">&retmode=json</span> to get the json output
                        </div>



                </div>

        </MainLayout>

    );
}

