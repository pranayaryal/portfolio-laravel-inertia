import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Home() {
    return (
        <MainLayout>
            <Head>
                <title>Pranay Aryal</title>
                <meta name="description" content="Pranay Aryal's blog about software engineering"/>
                <link rel="canonical" href="https://pranaysite.com" />
            </Head>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                <Link href="/randomized-controlled-trials"
                    className="flex items-start gap-4 rounded-lg bg-white p-6 ring-1 ring-white/[0.05] transition duration-300  hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 ">


                    <div>
                        <h2 className="text-md md:text-xl font-semibold text-black">What is a Randomized Controlled Trial</h2>

                        <p className="mt-2 text-xs lg:text-sm text-black/70">Learn about Randomized Controlled Trials</p>
                    </div>

                </Link>
                <Link href="/pubmed-randomized-controlled-trial"
                    className="flex flex-col items-start justify-center gap-4 rounded-lg bg-white p-6  ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none">

                    <div>
                        <h2 className="text-sm md:text-md lg:text-xl font-semibold text-black">Search PubMed</h2>

                        <p className="mt-2 text-xs text-black/70 md:text-md">Search PubMed for a Randomized Controlled Trial</p>
                    </div>

                </Link>
                <Link href="/address-cleaning-usps" id="docs-card"
                    className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6  ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:p-10 lg:pb-10">

                    <div className="relative flex items-center gap-6 lg:items-end">
                        <div id="docs-card-content" className="flex items-start gap-6 lg:flex-col">

                            <div>
                                <h2 className="text-sm md:text-md lg:text-xl font-semibold text-black">Address Cleaning with USPS API</h2>

                                <p className="mt-2 text-xs text-black/70 md:text-md">
                                    Address Cleaning with USPS API
                                </p>
                            </div>
                        </div>

                    </div>
                </Link>


                <Link href="/pubmed-api"
                    className="flex items-start gap-4 rounded-lg bg-white p-6 ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 ">
                    <div>
                        <h2 className="text-md md:text-xl font-semibold text-black">PubMed Api</h2>

                        <p className="mt-2 text-xs lg:text-sm text-black/70">How to use pubMed Api</p>
                    </div>

                </Link>
                <Link href="/llm-models-with-coding"
                    className="flex items-start gap-4 rounded-lg bg-white p-6 ring-1 ring-white/[0.05] transition duration-300  hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 ">
                    <div>
                        <h2 className="text-md md:text-xl font-semibold text-black">Set Up a Code Editor with LLMs</h2>
                        <p className="mt-2 text-xs lg:text-sm text-black/70">How to use Neovim with Large Language Models</p>
                    </div>

                </Link>

                <Link href="/bm25-algorithm"
                    className="flex items-start gap-4 rounded-lg bg-white p-6 ring-1 ring-white/[0.05] transition duration-300  hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 ">

                    <div>
                        <h2 className="text-md md:text-xl font-semibold text-black">BM25 Algorithm</h2>

                        <p className="mt-2 text-xs lg:text-sm text-black/70">What is BM25 Algorithm</p>
                    </div>

                </Link>

            </div>

        </MainLayout>
    );
}
