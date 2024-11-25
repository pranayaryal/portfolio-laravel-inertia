import MainLayout from "@/Layouts/MainLayout"
import { Head } from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel"
import { states } from "@/Components/states"
import { useState } from "react"


export default function AddressClean() {
    const [showCopySection, setShowCopySection] = useState(false)
    const [cp, setCp] = useState('Copy')
    const [address, setAddress] = useState({
        street: {
            value: '325 west main street',
            error: "",
        },
        city: {
            value: 'Louisville',
            error: "",
        },
        state: {
            value: 'KY',
            error: "",
        },
        zip: {
            value: '40202',
            error: "",
        },
    });
    const copyText = () => {
        const divWhoseTextNeedsCopied = document.getElementById('addressSection');

        copyToClipBoard(removeNewLines(divWhoseTextNeedsCopied.textContent));
        setCp('Copied');
        setTimeout(() => {
            setCp('Copy');
        }, 2000);

    }

    const removeNewLines = (str) => {
        //return str.trim().replace(/(\r\n|\n|\r)/gm, "");
        return str
            .replace(/[\n\r\t]/g, '') // Remove newlines and tabs
            .replace(/\s+/g, ' ')     // Replace multiple spaces with a single space
            .trim();
    }

    const copyToClipBoard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => console.log('Text copied to clipboard'))
            .catch(err => console.error(`Failed to copy text: ${err}`))
    }
    const callValidate = async () => {
        try {
            console.log(address.state.value)
            if (!validateAddress()) {
                return;
            }
            const data = {
                streetAddress: address.street.value,
                city: address.city.value,
                state: address.state.value,
                zip: address.zip.value,
            }

            const headers = {
                'Content-Type': 'application/json'
            }

            const resp = await axios.post('/address-cleaning-usps', data)
                .then((response) => {
                    const { data } = response;
                    const { cleanedAddr } = data
                    const { streetAddress, city, state, ZIPCode } = cleanedAddr
                    setShowCopySection(true)
                    setAddress({
                        street: {
                            value: streetAddress,
                            error: "",
                        },
                        city: {
                            value: city,
                            error: "",
                        },
                        state: {
                            value: state,
                            error: "",
                        },
                        zip: {
                            value: ZIPCode,
                            error: "",
                        },
                    })
                })
                .catch(err => console.error(err))

            // if (respUspsAddJson.hasOwnProperty('error')) {
            //     const { cleanedAddr: { error: { message } } } = respJson
            //     const updatedAddress = { ...address }
            //     updatedAddress.street.error = message
            //     setAddress({ ...updatedAddress })
            //     return
            // }
            // const { cleanedAddr: { address: { streetAddress, city, state, ZIPCode } } } = respJson
            // const updatedAddress = { ...address }
            // updatedAddress.city.value = city
            // updatedAddress.state.value = state
            // updatedAddress.zip.value = ZIPCode
            // updatedAddress.street.value = streetAddress
            // setAddress({ ...updatedAddress })



        } catch (error) {
            console.log(error)
        }
    }

    const validateAddress = () => {
        // Validates form and validates address
        let { street, city, state, zip } = address;
        let updatedState = { ...address };
        if (!street.value) {
            updatedState.street.error = "Please enter an address";
            setAddress({ ...updatedState });
            return false;
        }
        if (!city.value) {
            updatedState.city.error = "Please enter a town/city";
            setAddress({ ...updatedState });
            return false;
        }
        if (!zip.value) {
            updatedState.zip.error = "Please enter a postal code (10710)";
            setAddress({ ...updatedState });
            return false;
        }

        var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip.value);
        if (!isValidZip) {
            updatedState.zip.error = "Please enter a valid postal code (10710)";
            setAddress({ ...updatedState });
            return false
        }
        if (!state.value) {
            updatedState.state.error = "Please select a state";
            setAddress({ ...updatedState });
            return false;
        }
        updatedState.street.value = sanitizeInput(updatedState.street.value);
        updatedState.city.value = sanitizeInput(updatedState.city.value);
        updatedState.state.value = sanitizeInput(updatedState.state.value);
        updatedState.zip.value = sanitizeInput(updatedState.zip.value);
        setAddress({ ...updatedState })
        console.log(address)
        return true;

    }

    const sanitizeInput = (input) => {
        return input
            .replace(/>/g, '')
            .replace(/</g, '')
            // Replace quotes with their HTML entities
            .replace(/"/g, '')
            .replace(/'/g, '&#39;')
            // Remove script tags and their content
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            // Remove other potentially dangerous tags
            .replace(/<(|\/)(script|iframe|object|embed|applet)[^>]*>/gi, '');

    }

    const onAddressChangeHandler = (field, value) => {
        let state = {
            [field]: {
                value,
                error: '',
            },
        };

        setAddress({ ...address, ...state });
    };
    return (
        <MainLayout>
            <Head>
                <title>Validate an address using USPS Api</title>
                <meta name="description" content="Use the USPS API to validate an address or to clean up an address in the US" />
            </Head>
            <div className="min-h-screen">
                <div className="mt-6 relative w-full max-w-2xl lg:max-w-7xl">
                    <img src='./usps.svg' className='w-28 h-28' />
                    <h1 className='text-3xl font-semibold mt-8'>Using the USPS Address Cleaner</h1>
                    <p className='mt-8 text-xs text-black/50'>Enter an address. You can copy from <a className="text-indigo-500" href="https://maps.google.com" target="__blank">Google Maps</a></p>
                    <div className='flex flex-col md:flex-row md:justify-start items-start space-y-8 md:space-y-0 md:space-x-40'>
                        <div className='flex flex-col mt-2 w-[90%] md:w-1/3'>
                            <InputLabel value='Address' className='text-xs text-black/45' />
                            <input
                                value={address.street.value}
                                onChange={(e) => onAddressChangeHandler("street", e.target.value)}
                                className={`text-xs mt-1 px-4 py-2 border outline-none ${address.street.error ? 'border-red-300' : 'border-gray-200'}`}
                            />
                            {(!address.street.error) && <span className='text-xs text-gray-500'>Street address, P.0 box or military address</span>}
                            {address.street.error && <span className='text-xs text-red-400'>{address.street.error}</span>}
                            <div className="flex space-x-4 mt-4 w-[90%]">
                                <div className="w-1/2">
                                    <InputLabel value='Town/City' className='text-xs text-black/45' />
                                    <input name='city'
                                        onChange={(e) => onAddressChangeHandler("city", e.target.value)}
                                        value={address.city.value}
                                        className={`text-xs mt-1 px-4 py-2 border outline-none ${address.city.error ? 'border-red-300' : 'border-gray-200'}`} />
                                </div>
                                <div className="w-1/2">
                                    <InputLabel value='Postal Code' className='text-xs text-black/45' />
                                    <input id='zip' name='zip' value={address.zip.value}
                                        onChange={(e) => onAddressChangeHandler("zip", e.target.value)}
                                        className={`text-xs mt-1 px-4 py-2 border outline-none ${address.zip.error ? 'border-red-300' : 'border-gray-200'}`} />

                                </div>
                            </div>
                            <div className="flex flex-col mt-4 relative">
                                <InputLabel value='State' className='text-xs text-black/45' />
                                <select
                                    name='state'
                                    id='state'
                                    className={`px-3 py-2 bg-white border appearance-none font-sans tracking-wide text-md ${address.state.error ? 'border-red-300' : 'border-gray-200'}`}
                                    onChange={(e) => onAddressChangeHandler("state", e.target.value)}>
                                    <option name="state"
                                        value={address.state.value} className='text-black'>{address.state.value}</option>
                                    {Object.keys(states).map(s => {
                                        return <option name="state"
                                            key={s}
                                            value={s}
                                            className='text-black'>{states[s]}</option>

                                    })}
                                </select>
                                <svg className='h-[26px] absolute right-[8px] top-6 z-20' viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" focusable="false">
                                    <path d="M12 14.9l4.95-4.95.707.707-4.95 4.95-.707.707-5.657-5.657.707-.707L12 14.9z"></path>
                                </svg>

                            </div>
                            {address.state.error && <span className='text-xs text-red-400'>{address.state.error}</span>}
                            <button
                                onClick={callValidate}
                                id='validate-button'
                                className='bg-black text-white w-full md:w-[50%] text-sm py-3 px-3 ml-auto mr-auto mt-8 hover:bg-gray-800'>
                                Validate
                            </button>

                        </div>
                        {showCopySection &&
                            <div id='addressDisplay' className='text-xs border px-4 py-4 border-indigo-400 rounded relative'>
                                <button onClick={copyText} className='absolute top-1 right-2 text-xs bg-green-200 px-2 py-1 rounded'>{cp}</button>
                                <div id='addressSection'>
                                    <p className="mt-3" id="line1Display">{address.street.value}</p>
                                    <div className='flex space-x-3'>
                                        <span id="cityDisplay">{address.city.value}</span>
                                        <span id="stateDisplay">{address.state.value}</span>
                                        <span id="zipDisplay">{address.zip.value}</span>
                                    </div>

                                </div>
                            </div>

                        }

                    </div>
                </div>
            </div>

        </MainLayout >


    )
}
