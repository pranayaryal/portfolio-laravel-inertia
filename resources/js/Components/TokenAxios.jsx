import { CodeAmber, CodeViolet } from './CodeColors';

export default function TokenAxios() {
    return (
        <div className='overflow-hidden'>
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
        </div>
    );
}
