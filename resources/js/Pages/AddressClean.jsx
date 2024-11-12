import MainLayout from "@/Layouts/MainLayout"
import TextInput from "@/Components/TextInput"
import InputLabel from "@/Components/InputLabel"
import { states } from "@/Components/states"
import { useState } from "react"

export default function AddressClean({ uspsKey, uspsSec }) {
    const [showCopySection, setShowCopySection] = useState(false)
    const [address, setAddress] = useState({
        street: {
            value: "325 west main streets",
            error: "",
        },
        city: {
            value: "louisville",
            error: "",
        },
        state: {
            value: "KY",
            error: "",
        },
        zip: {
            value: "40202",
            error: "",
        },
    });
    const callValidate = async () => {
        try {
            if (!validateAddress()) {
                return;
            }
            const data = {
                streetAddress: address.street.value,
                city: address.city.value,
                state: address.state.value,
                ZIPCode: address.zip.value,
            }
            const resp = await fetch('/validate-address', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            })

            const respJson = await resp.json();
            console.log(respJson)
            if (respUspsAddJson.hasOwnProperty('error')) {
                const { cleanedAddr: { error: { message } } } = respJson
                const updatedAddress = { ...address }
                updatedAddress.street.error = message
                setAddress({ ...updatedAddress })
                return
            }
            const { cleanedAddr: { address: { streetAddress, city, state, ZIPCode } } } = respJson
            const updatedAddress = { ...address }
            updatedAddress.city.value = city
            updatedAddress.state.value = state
            updatedAddress.zip.value = ZIPCode
            updatedAddress.street.value = streetAddress
            setAddress({ ...updatedAddress })



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

        return true;

    }
    return (
        <MainLayout>
            <div className="min-h-screen">
                <div className="mt-6 relative w-full max-w-2xl lg:max-w-7xl">
                    <img src='./usps.svg' className='w-28 h-28' />
                    <h1 class='text-3xl font-semibold mt-8'>Using the USPS Address Cleaner</h1>
                    <p class='mt-8 text-xs text-black/50'>Enter an address. You can copy from <a class="text-indigo-500" href="https://maps.google.com" target="__blank">Google Maps</a></p>
                    <div class='flex flex-col md:flex-row md:justify-start items-start space-y-8 md:space-y-0 md:space-x-40'>
                        <div className='flex flex-col mt-2 w-[90%] md:w-1/3'>
                            <InputLabel value='Address' className='text-xs text-black/45' />
                            <TextInput className='outline-none' />
                            <span
                                id='line1SmallLabel'
                                className='text-xs text-gray-500'>Street address, P.0 box or military address</span>
                            <div className="flex space-x-4 mt-4 w-[90%]">
                                <div className="w-1/2">
                                    <InputLabel value='Town/City' className='text-xs text-black/45' />
                                    <input name='city'
                                        value=''
                                        id='city'
                                        className='text-xs mt-1 px-4 py-2 border border-gray-400 rounded outline-none' />
                                </div>
                                <div className="w-1/2">
                                    <InputLabel value='Postal Code' className='text-xs text-black/45' />
                                    <input id='zip' name='zip' value=''
                                        className='text-xs mt-1 px-4 py-2 border outline-none border-gray-400' />

                                </div>
                            </div>
                            <div className="flex flex-col mt-4 relative">
                                <InputLabel value='State' className='text-xs text-black/45' />
                                <select
                                    name='state'
                                    id='state'
                                    className='px-3 py-2 bg-white border appearance-none font-sans tracking-wide text-md border-gray-200'>
                                    <option name="state"
                                        value="" class='text-black'>
                                        Select state</option>
                                    {Object.keys(states).map(s => {
                                        return <option name="state"
                                            value={s}
                                            selected={s} class='text-black'>{states[s]}</option>

                                    })}
                                </select>
                                <svg className='h-[26px] absolute right-[8px] top-6 z-20' viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" focusable="false">
                                    <path d="M12 14.9l4.95-4.95.707.707-4.95 4.95-.707.707-5.657-5.657.707-.707L12 14.9z"></path>
                                </svg>

                            </div>
                            <button
                                id='validate-button'
                                className='bg-black text-white w-full md:w-[50%] text-sm py-3 px-3 ml-auto mr-auto mt-8 hover:bg-gray-800'>
                                Validate
                            </button>

                        </div>
                        {showCopySection &&
                            <div id='addressDisplay' className='hidden text-xs border px-4 py-4 border-indigo-400 rounded relative'>
                                <button onclick="copyText()" id="copyButton" className='absolute top-1 right-2 text-xs bg-green-200 px-2 py-1 rounded'>Copy</button>
                                <div id='addressSection'>
                                    <p className="mt-3" id="line1Display">Address Line1</p>
                                    <div className='flex space-x-3'>
                                        <span id="cityDisplay">City </span>
                                        <span id="stateDisplay">state</span>
                                        <span id="zipDisplay">zip</span>
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
