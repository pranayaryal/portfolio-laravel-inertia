import { CodeAmber, CodeViolet, CodeSky } from './CodeColors';
//import JavascriptToken from './JavascriptToken';
import { useState } from 'react';



export default function TokenLanguages() {
    const [activeTab, setActiveTab] = useState('javascript');

    const tabContents = {
        javascript: <div>
            <CodeAmber>{`axios.`}</CodeAmber><CodeViolet>post</CodeViolet><span className="text-pink-300">{`('https://api.usps.com/oauth2/v3/token', {`}</span>
            <div class='ml-2'>
                <p>grant_type: <span class='text-pink-300'>{`'client_credentials',`}</span></p>
                <p>client_id: <span class='text-pink-300'>{`'<your client-id>',`}</span></p>
                <p>client_secret: <span class='text-pink-300'>{`'<your client-secret>',`}</span></p>
                <p>scope: <span class='text-pink-300'>{`'addresses',`}</span></p>
                <p>state:<span className="text-pink-300">''</span></p>
            </div>
            <p>{`})`}</p>
            <p><CodeViolet>.then(function</CodeViolet>{`(response) {`}</p>
            <p className="ml-2 text-green-300">{`//store the token in a variable`}</p>
            <p>{`})`}</p>
            <p><CodeViolet>.catch(function</CodeViolet>{`(error) {`}</p>
            <p className="ml-2 text-green-200">//Do something with your error</p>
            <p>{`})`}</p>
        </div>,
        python: <div>
            <p>import <CodeViolet>requests</CodeViolet></p>
            <p className='mt-4'>url = <CodeAmber>'https://api.usps.com/oauth2/v3/token'</CodeAmber></p>
            <p>data = <CodeAmber>{`{`}</CodeAmber></p>
            <div className='ml-4'>
                <p>'grant_type': <span class='text-pink-300'>{`'client_credentials',`}</span></p>
                <p>'client_id': <span class='text-pink-300'>{`'<client_id>',`}</span></p>
                <p>'client_secret': <span class='text-pink-300'>{`'<client_secret>',`}</span></p>
                <p>'scope': <span class='text-pink-300'>{`'addresses',`}</span></p>
                <p>'state': <span class='text-pink-300'>{`'',`}</span></p>
            </div>
            <p><CodeAmber>{`}`}</CodeAmber></p>
            <p className='mt-4'>response = <CodeViolet>requests.</CodeViolet><CodeAmber>post(</CodeAmber>url, data=data)</p>
            </div>,
        PHP: <div className='mt-4'>
          <p className='text-xs text-green-200'>// This is using Laravel</p>
          <p className='mt-4'>$url = <span className='text-green-300'>"https://api.usps.com/oauth2/v3/token"</span></p>
          <p>$response = <CodeSky>Http::<CodeViolet>withHeaders([</CodeViolet></CodeSky></p>
          <p className='ml-4'>{`'Content-Type' =>`} <span className='text-green-300'>'application/json'</span></p>
          <p>{`->`}<CodeViolet>post</CodeViolet>($url, [</p>
          <p className='ml-4'><span className='text-green-300'>'grant_type' </span><CodeSky>{`=>`}</CodeSky><span className='text-green-300'> 'client_credentials',</span></p>
          <p className='ml-4'><span className='text-green-300'>'client_id' </span><CodeSky>{`=>`}</CodeSky><span className='text-green-300'> <CodeViolet>env</CodeViolet>('USPS_ID'),</span></p>
          <p className='ml-4'><span className='text-green-300'>'client_secret' </span><CodeSky>{`=>`}</CodeSky><span className='text-green-300'> <CodeViolet>env</CodeViolet>('USPS_SECRET'),</span></p>
          <p className='ml-4'><span className='text-green-300'>'scope' </span><CodeSky>{`=>`}</CodeSky><span className='text-green-300'> 'addresses',</span></p>
          <p className='ml-4'><span className='text-green-300'>'state' </span><CodeSky>{`=>`}</CodeSky><span className='text-green-300'> ''</span></p>
          <p>]);</p>
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
