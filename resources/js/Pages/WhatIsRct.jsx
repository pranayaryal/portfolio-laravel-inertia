import MainLayout from '@/Layouts/MainLayout';
import NejmLogo from '@/Components/NejmLogo';
import BaseTable from '@/Components/BaseTable';
import { Head } from '@inertiajs/react';

export default function WhatIsRct() {
return (
<MainLayout>

    <Head>
        <title>What is a Randomized Controlled Trial in Research?</title>
        <meta name="description"
            content="An explanation about Randomized Controlled Trials (RCT) of how they are designed and the source of biases" />
    </Head>
    <div className="max-w-[600px] mx-auto">
        <NejmLogo />
        <h1 className="text-2xl font-bold mb-8">Randomized Controlled Trials</h1>
        <span className="leading-7 tracking-loose mt-12 border-b border-green-400">Definition:</span><span> This is a prospective
            experiment.  There is a test group and a control group. The word 'randomized' in the title means that all
            study participants have and equal chance of being in either the experimental group or the control group. The
            word 'controlled' means that there is a control group to compare against.</span>
        <h1 class="text-md md:text-xl font-bold text-left mt-8 text-gray-900">
            Table of contents:
        </h1>
        <div class="mt-2 leading-6 md:leading-7">
            <p>1. Why Randomize?</p>
            <p>2. Why do we need a control group</p>
            <p>3. Let's see an example.</p>
            <p>3. What is the population studied?</p>
        </div>
        <p className='mt-4'>You can search for Randomized Controlled Trials <a className='text-blue-600'
                href="/pubmed-randomized-controlled-trial">here</a></p>

        <h1 className="text-xl font-bold mt-8">Why Randomize?</h1>
        <p className="mt-4 leading-7">We randomize so that the experimental and the study groups are similar. If we
            don't randomize, we may end up having
            an imbalance in the groups. The experimental group may have healthier patients than the control group or
            vice versa.</p>
        <div className="mt-[-50px]">
            <img src="/dice.svg" className="ml-24 md:ml-44 h-52 p-0" />
            <div className="flex justify-between mt-[-150px] relative">
                <img src="./arrowLeft.svg" className="absolute top-20 left-20 md:top-20 md:left-20" />
                <img src="./arrowRight.svg" className="absolute top-20 right-40 md:right-60" />
                <img className="w-16" src="/groupOfPeopleModified.svg" />
                <img src="/manAndDog.svg" />
            </div>
        </div>

        <h1 className="text-xl font-bold mt-8">Let's See An Example</h1>
        <p className="mt-4 leading-7">In this <a target="__blank"
                href="https://www.nejm.org/doi/full/10.1056/NEJMoa2021436" class="text-blue-500">NEJM</a> study,
            hospitalized COVID-19 patients were randomized to either receive steroids (dexamethasone), or the usual
            treatment</p>
        <p className="mt-4">This is how the groups ended up after randomization. Ignore the total number in each group
            just now but just see the percentages, the numbers inside the parentheses. They match up between groups
            which is what we want. Note that this is before the experiment was done.</p>


        <div>
            <BaseTable />
            <p className="mt-8">All RCTs publish this baseline table, we should carefully look at it. Sometimes studies
                leave out important baseline
                characteristics. Your domain expertise should be able to catch that.</p>
            <p className="mt-2">The difference in that baseline parameter that was left out might
                have influenced the results of the study.</p>


            <h1 className="mt-8 font-bold text-2xl">What Was The Population Studied?</h1>
            <p className="mt-4">This is an important question to ask. We need to look at the demographics.</p>
            <p className="mt-4">Was the study done only on males that it cannot be generalized to females?</p>
            <p className="mt-4">Is the mean age of the population is much smaller than what I would encounter in my
                practice?</p>
            <p className="mt-4">Are they of a different race or ethnic group?</p>

            <h1 className="mt-8 font-bold text-2xl">What Was the Outcome of Interest?</h1>
            <p className="mt-4">The primary outcome that was being measured was the all-cause mortality within 28 days.
            </p>
            <p className="mt-4">This seems like a reasonable outcome in this study as it is meaningful to patients.</p>
            <p className="mt-4">Sometimes you may encounter studies that have a radiological outcome.</p>
            <p className="mt-4">For example, the study may be trying to see if a tumor shrinks in size with treatment.
                But this may not be a patient-centered outcome as it may not be clear that tumor shrinkage corrrelates
                with better survival. It may sound plausible that shrinkage correlates with better survival but when
                these patients are followed up, this may not be the case.</p>
            <p className="mt-4">This is like a start-up that is trying to improve their Search Engine Optimization
                metrics when it may not be clear that improving these metrics might make them more profitable, although
                a study could well prove that improvement of these metrics correlates with profits. But until this study
                is done, this is still uncertain.</p>

            <h1 className="mt-8 font-bold text-2xl">What Did The Study Find?</h1>
            <p className="mt-4">Mortality at 28 days was significantly lower in the dexamethasone group than in the
                usual care group, with deaths reported in 482 of 2104 patients (22.9%) and in 1110 of 4321 patients
                (25.7%)</p>
            <p className="mt-4">An astute reader of the study may try to question this and you should. Can the
                difference in outcomes between the two groups be explained by something else?</p>
            <p className="mt-4">This is when you should look at the baseline table that I showed above. Have the study
                authors deliberately not explained (and this happens) an importan baseline variable?</p>
            <h1 className="mt-8 font-bold text-2xl">This was a Practice-Changing Study</h1>
            <p className="mt-4">Dexamethasone is a cheap drug and is widely available. This study proved that sick
                Covid-19 patients are less likely to die while taking this drug. Many doctors and hospitals have now
                adopted this drug.</p>
        </div>
        <h1 className="mt-8 font-bold text-2xl">What is the Funding Source of the Study?</h1>
        <p className="mt-4">A profit-based funding might bring some bias in the study. If the study was conducted by the
            same body that sells the product/medicine, it might be a huge bias.</p>
        <h1 className="mt-8 font-bold text-2xl">Don't Just Read the Abstract</h1>
        <p className="mt-4">Don't just read the extract. Abstracts are like PR for the study. They are mostly
            click-bait. Time and again authors leave out important nuance in the study. Nuances that are big enough to
            invalidate the study. Also reading the abstract might bias your view so just skip the abstract and read the
            details.</p>

    </div>

</MainLayout>

);
}
