import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { useState, useEffect } from 'react';

export default function Rct() {
    const baseUrl = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/";
    const searchEndpt = "esearch.fcgi?db=pubmed&retmode=json&sort=pub_date&term=";
    const summaryEndpt = 'esummary.fcgi?db=pubmed&version=2.0&retmode=json&id=';
    const [type, setType] = useState('rct')
    const [query, setQuery] = useState('')
    const [pmResults, setPmResults] = useState([])
    const [ error, setError ] = useState('');


    // useEffect(() => {
    //     console.log(Object.values(pmResults))

    // }, [pmResults])

    const validateInput = (input) => {
        if (typeof input !== 'string') {
            setError('Only string input allowed');
            return;
        }

        const cleanedQuery = input.replace('/&/g', '&amp;')
                    .replace('/</g', '&lt;')
                    .replace('/>/g', '&gt;')
                    .replace('/"/g', '&quot;')
                   .replace(/'/g, '&#x27;')
                    .replace(/\//g, '&#x2F;');
        setQuery(cleanedQuery);

    }

    const clearError = (input) => {
        setError('');
        setQuery(input);

    }

    const handlSubmit = async () => {
        try {
            if (!query) {
                setError('input is required');
                setPmResults([])
                return;
            }
            const cleaned = validateInput(query)
            const url = type === 'rct' ?
                `${baseUrl}${searchEndpt}${query}+randomized+controlled+trial[pubt]`
                :
                `${baseUrl}${searchEndpt}${query}+review[pubt]`


            const pmids = await fetch(url, {
                method: 'GET'
            })

            const { esearchresult: { idlist } } = await pmids.json();

            if (idlist == undefined || idlist.length === 0) {
                setError('No results found')
                setPmResults([])
                return;
            }

            const summary = await fetch(`${baseUrl}${summaryEndpt}${idlist}`)
            const { result } = await summary.json()
            if (!result) {
                setError('No results found')
                setPmResults([])
                return;
            }
            setPmResults(Object.values(result))
        } catch (e) {
            setError(`There was an error ${e}`);
        }


    }

    return (
        <MainLayout>
            <Head title="About" />
            <div className="min-h-screen">
                <div className="text-center">
                    <div className="text-center">
                        <div className="mx-auto max-w-[700px]">
                            { error && <p className='text-xs text-red-500 text-left mb-2'>{error}</p> }
                            <div className="flex items-center">
                                <input autoFocus type="text"
                                    onChange={(e) => clearError(e.target.value)}
                                    name="term"
                                    className="w-full h-12 px-12 rounded-full border border-gray-300 focus:outline-none shadow-sm text-base"
                                    placeholder="Search Pubmed for a Randomized Controlled Trial or Review"
                                    value={query} />
                            </div>

                            <div className="flex items-center space-x-8 mt-4">
                                <div className="flex items-center">
                                    <input checked={type === 'rct'} onChange={() => setType('rct')} id="default-radio-1"
                                        type="radio" value="rct" name="choice"
                                        className="outline-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <p
                                     onClick={() => setType('rct')}
                                     className="cursor-pointer ms-2 text-sm font-medium text-gray-500">Randomized
                                        Controlled Trial</p>
                                </div>
                                <div className="flex items-center">
                                    <input checked={type === 'review'} onChange={() => setType('review')} type="radio" value="review" name="choice"
                                        className="outline-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <p
                                     onClick={() => setType('review')}
                                     className="cursor-pointer ms-2 text-sm font-medium text-gray-500">Review</p>
                                </div>
                                <a className="text-xs text-blue-500" href="/randomized-controlled-trials">What is a Randomized
                                    Controlled Trial?</a>
                            </div>


                            <div className="flex justify-center mt-4 space-x-4" id="print-result">
                                <button
                                    onClick={handlSubmit}
                                    className="px-4 py-2 bg-gray-100 text-gray-800 text-sm rounded hover:shadow-md" id="pubmedSearch">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                { pmResults &&
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {Object.values(pmResults).map(val => {
                            if (!val.uid){
                                return;
                            }
                            return <a key={val.uid} className="mb-8" href={`https://pubmed.ncbi.nlm.nih.gov/${val.uid}`} target="__blank">
                                <div className="text-sm text-left md:text-md text-blue-800 mb-1">{ val.title }</div>
                                <div className='flex items-center justify-between mt-2'>
                                    <p className="text-xs text-gray-600 hover:underline mb-1 text-right">{`${val.lastauthor} et al` }</p>
                                    <p className="text-right text-xs text-gray-700 italic">{ `${val.source} - ${val.pubdate}`}</p>
                                </div>
                            </a>;

                        })}
                </div>

                }
            </div>


        </MainLayout>
    );
}
