export default function CopyAddress(props) {
    return (
        <div
           {...props}
            id='addressDisplay' className='hidden text-xs border px-4 py-4 border-indigo-400 rounded relative'>
            <button onClick={copyText} className='absolute top-1 right-2 text-xs bg-green-200 px-2 py-1 rounded'>Copy</button>
            <div id='addressSection'>
                <p className="mt-3" id="line1Display">{address.street.value}</p>
                <div className='flex space-x-3'>
                    <span id="cityDisplay">{address.city.value}</span>
                    <span id="stateDisplay">{address.state.value}</span>
                    <span id="zipDisplay">{address.zip.value}</span>
                </div>

            </div>
        </div>
    );
}
