import MainLayout from "@/Layouts/MainLayout"
import TextInput from "@/Components/TextInput"
import InputLabel from "@/Components/InputLabel"
import { states } from "@/Components/states"

export default function AddressClean() {
    console.log(states.KY)
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

                        </div>

                    </div>

                </div>
            </div>
        </div>

        </MainLayout >


    )
}
