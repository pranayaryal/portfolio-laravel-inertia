import { CodeAmber, CodeViolet, CodeSky } from './CodeColors';
//import JavascriptToken from './JavascriptToken';
import { useState } from 'react';



export default function AddressLanguages() {
    const [activeTab, setActiveTab] = useState('javascript');

    const tabContents = {
        javascript: <div>
            <p><CodeViolet>const</CodeViolet>{` config = {`}</p>
            <p className='ml-4'>{`headers: {`}</p>
            <p class="text-green-300 ml-6">{`'Authorization': 'Bearer YOUR_ACCESS_TOKEN',`}</p>
            <p class="text-green-300 ml-6">{`'Content-Type': 'application/json',`}</p>
            <p className="ml-4">{`}`}</p>
            <p className="mb-4">{`};`}</p>
            <CodeAmber>{`axios.`}</CodeAmber><CodeViolet>get</CodeViolet><span className="text-pink-300">{`('https://api.usps.com/addresses/v3/address?`}</span>
            <div className='ml-4'>
                <p className="text-pink-300">{`streetAddress=<street>&city=<city>'`}</p>
                <p className="text-pink-300">{`&state=<state>&ZIPCode=<zip>'`}<span className="text-white">,config)</span></p>
            </div>
            <p><CodeViolet>.then(function</CodeViolet>{`(response) {`}</p>
            <p className="ml-4 text-green-300 text-xs">{`// Do something with the response`}</p>
            <p className="ml-4 text-green-300 text-xs">{`// which should have a cleaned address`}</p>
            <p>{`})`}</p>
            <p><CodeViolet>.catch(function</CodeViolet>{`(error) {`}</p>
            <p className="ml-4 text-green-200 text-xs">// Handle the error</p>
            <p>{`})`}</p>
        </div>,
        python: <div>
            <p>import <CodeViolet>requests</CodeViolet></p>
            <p className='mt-4'>url = <span className='text-green-300'>"https://api.usps.com/oauth2/v3/addresses?</span></p>
            <p className='text-green-300'>streetAddress=[street]&city=[city]&state=[state]</p>
            <p className='text-green-300'>&ZIPCode=[city]";</p>
            <p className='mt-4'>headers = <CodeAmber>{`{`}</CodeAmber></p>
            <div className='ml-4'>
                <p>'Content-Type': <span class='text-pink-300'>{`'application/json',`}</span></p>
                <p>'Authorization': <span class='text-pink-300'>{`'Bearer <token>',`}</span></p>
            </div>
            <p><CodeAmber>{`}`}</CodeAmber></p>
            <p className='mt-4'>response = <CodeViolet>requests.</CodeViolet><CodeAmber>get(</CodeAmber>url, headers=headers)</p>
        </div>,
        PHP: <div className='mt-4'>
            <p className='text-xs text-green-200'>// This is using Laravel</p>
            <p className='mt-4'>$url = <span className='text-green-300'>"https://api.usps.com/oauth2/v3/addresses?</span></p>
            <p className='text-green-300'>streetAddress=[street]&city=[city]&state=[state]</p>
            <p className='text-green-300'>&ZIPCode=[city]";</p>
            <p className='mt-4'>$response = <CodeSky>Http::<CodeViolet>withHeaders([</CodeViolet></CodeSky></p>
            <p className='ml-4'>'Content-Type' => <span className='text-green-300'>'application/json'</span></p>
            <p className='ml-4'>'Authorization' => <span className='text-green-300'>'Bearer [token]'</span></p>
            <p>{`->`}<CodeViolet>get</CodeViolet>($url);</p>
        </div>
    };
    return (
        <pre className="bg-[#232635] w-full text-white rounded-md overflow-hidden">
            <div className='flex justify-between'>
                {Object.keys(tabContents).map(tab => (
                    <button
                        key={tab}
                        className={`px-4 py-2 ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-100'}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}

            </div>
            <div className="mt-4">
                {tabContents[activeTab]}
            </div>

        </pre>
    );
}
