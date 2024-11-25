import MainLayout from '@/Layouts/MainLayout';
import NejmLogo from '@/Components/NejmLogo';
import BaseTable from '@/Components/BaseTable';
import { Head } from '@inertiajs/react';

export default function Bm25() {
    return (
        <MainLayout>
            <Head>
                <title>What is BM25 Algorithm (Best Match 25)</title>
                <meta name="description" content="BM25 (Best Match 25) is a search method thanks ranks documents based on a search query" />
            </Head>
            <div class="max-w-[567px] mx-auto py-16">
                <h1 class="tracking-tight leading-6 font-semibold text-lg md:text-4xl">What is BM25 Algorithm</h1>
                <div class="mt-12">
                    <p class="leading-7 tracking-loose">BM25 (Best match 25) is search algorithm that, given a search term, it helps retrieve relevant documents.  It is used by search engines in one form or another.  It improves upon the TF-IDF (Term Frequency, Inverse Document Frequency) algorithm by making a few adjustments in the formula.</p>
                </div>
                <h1 class="mt-16 tracking-tight leading-6 font-semibold text-lg md:text-2xl">
                    Let's First Learn About TF-IDF (Term Frequency, Inverse Document Frequency) algorithm
                </h1>
                <p class='mt-8 leading-7'>Let's say you have these three documents.  For a given search query, you want the most relevant document.</p>
                <div class='flex space-x-4 items-center mt-4 justify-start'>
                    <div class='border px-3 py-2 border-nice-blue w-full md:w-1/3 h-8 rounded'>
                        <p class='text-xs text-gray-100'>Enter your search term</p>
                    </div>
                    <button
                        class="text-black bg-indigo-300 max-w-1/4 px-2 py-2 border border-gray-500  rounded-md font-bold text-xs"
                    >Submit</button>
                </div>
                <p class='mt-4 leading-6'>Documents could also mean three different websites, or three different recipes, or three different text files in your computer, or three different pages of a book, verses in the Bible, etc.</p>
                <div class='flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:justify-between mt-8'>
                    <div class='flex flex-col p-4 border border-gray-300 rounded w-full md:w-1/3'>
                        <p class="text-sm">The Impact of Climate Change on Coastal Cities</p>
                        <p class='mt-2 text-xs text-black/80'>Rising sea levels and more frequent natural disasters are putting coastal cities around the world at risk. According to scientists, climate change is causing these issues due to the melting of polar ice caps and glaciers. As a result, cities like Miami and New York are seeing increased flooding and erosion, posing significant threats to infrastructure and public health.</p>
                    </div>
                    <div class='flex flex-col p-4 border border-gray-300 rounded w-full md:w-1/3'>
                        <p class="text-sm">The Benefits of Meditation</p>
                        <p class='text-black/80 mt-2 text-xs'>Meditation has been shown to have numerous benefits for both physical and mental health. Studies have found that regular meditation practice can reduce stress and anxiety, improve sleep quality, and even boost the immune system. Additionally, meditation has been linked to increased focus and attention, making it a valuable tool for students and professionals alike.</p>
                    </div>
                    <div class='flex flex-col p-4 border border-gray-300 rounded w-full md:w-1/3'>
                        <p class="text-sm">The Evolution of Artificial Intelligence</p>
                        <p class='text-black/80 mt-2 text-xs'>Artificial intelligence (AI) has come a long way since its inception in the mid-20th century. Today, AI is being used in a wide range of applications, from voice assistants like Siri and Alexa to self-driving cars and medical diagnosis tools. As AI technology continues to advance, it's expected that we'll see even more innovative applications and potential benefits, such as increased efficiency and improved decision-making.</p>
                    </div>
                </div>
                <img src="/corpus.svg" class="mt-16 ml-auto mr-auto" />
                <h1 class="mt-16 text-xl font-bold">Term Frequency:</h1>
                <img class="mt-16" src="./termFrequency.svg" />
                <p class="mt-8 leading-7">Each word from your search query is taken.  The term frequency is calculated on a document level.  In other words we want to know how many times the word appears in a document divided by the total number of unique words in the document.</p>
                <p class="mt-4 leading-7">The higher this score for a document, the more relevant that document is to the user's query word.</p>
                <h1 class="mt-16 text-xl font-bold">Inverse Document Frequency:</h1>
                <img src="./idf.svg" class="mt-8" />
                <p class="mt-4 leading-7">where N is the total number of documents in the corpus.</p>
                <p class="mt-4 leading-7">and df is the number of documents containing that term.</p>
                <p class="mt-4 leading-7">We can see that a common word across all documents will have a high value for df and thus will lower the value of IDF.  The higher the denominator the lower is the IDF.</p>
                <p class="mt-4 leading-7">So the common words like 'a', 'and', 'the', etc will have a low score for IDF.</p>
                <p class="mt-4 leading-7">Note that IDF is a corpus-level metric for a search term.</p>

                <p class="mt-4 leading-7">If a word is too common across all documents, it is given a lesser score.  This is a corpus-level metric. This filters out the commonly used words like 'a', 'and' and 'the', etc as they hold no information.</p>
                <p class="mt-4 leading-7">The 1 in the denominator is to prevent the denominator from being 0 for a term that was not found in any document.</p>
                <h4 class='mt-8 text-xl font-bold'>Lets' see an example:</h4>

                <p class="mt-4 leading-7">So for the word <span className='bg-blue-300'>and</span> as a query in above.</p>
                <div class='flex space-x-4 items-center mt-4 justify-start'>
                    <div class='border px-3 py-2 border-nice-blue w-full md:w-1/3 h-8 rounded'>
                        <p class='text-xs text-gray-500'>and</p>
                    </div>
                    <button
                        class="text-black bg-indigo-300 max-w-1/4 px-2 py-2 border border-gray-500  rounded-md font-bold text-xs"
                    >Submit</button>
                </div>
                <p class="mt-4 leading-7">N = 3 here.</p>
                <p class="mt-4 leading-7">We see that the number of documents containing the query 'and' is quite high.</p>
                <p class="mt-4 leading-7">So the denominator for IDF will be high which will make the IDF score low.</p>
                <p class="mt-4 leading-7">In other words, IDF score will be low for common words.</p>
                <div class='flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:justify-between mt-8'>
                    <div class='flex flex-col p-4 border border-gray-300 rounded w-full md:w-1/3'>
                        <p class="text-sm">The Impact of Climate Change on Coastal Cities</p>
                        <p class='mt-2 text-xs text-black/80'>Rising sea levels <span class="bg-blue-300">and</span> more frequent natural disasters are putting coastal cities around the world at risk. According to scientists, climate change is causing these issues due to the melting of polar ice caps <span className='bg-blue-300'>and</span> glaciers. As a result, cities like Miami <span className='bg-blue-300'>and</span> New York are seeing increased flooding and erosion, posing significant threats to infrastructure <span className='bg-blue-300'>and</span> public health.</p>
                    </div>
                    <div class='flex flex-col p-4 border border-gray-300 rounded w-full md:w-1/3'>
                        <p class="text-sm">The Benefits of Meditation</p>
                        <p class='text-black/80 mt-2 text-xs'>Meditation has been shown to have numerous benefits for both physical <span className='bg-blue-300'>and</span> mental health. Studies have found that regular meditation practice can reduce stress <span className='bg-blue-300'>and</span> anxiety, improve sleep quality, <span className='bg-blue-300'>and</span> even boost the immune system. Additionally, meditation has been linked to increased focus <span className='bg-blue-300'>and</span> attention, making it a valuable tool for students <span className='bg-blue-300'>and</span> professionals alike.</p>
                    </div>
                    <div class='flex flex-col p-4 border border-gray-300 rounded w-full md:w-1/3'>
                        <p class="text-sm">The Evolution of Artificial Intelligence</p>
                        <p class='text-black/80 mt-2 text-xs'>Artificial intelligence (AI) has come a long way since its inception in the mid-20th century. Today, AI is being used in a wide range of applications, from voice assistants like Siri <span className='bg-blue-300'>and</span> Alexa to self-driving cars <span className='bg-blue-300'>and</span> medical diagnosis tools. As AI technology continues to advance, it's expected that we'll see even more innovative applications <span className='bg-blue-300'>and</span> potential benefits, such as increased efficiency <span className='bg-blue-300'>and</span> improved decision-making.</p>
                    </div>
                </div>

            </div>

        </MainLayout>

    );
}

