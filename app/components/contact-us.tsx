"use client"
import { FC } from 'react'
import Image from 'next/image'


export const ContactUs: FC = () => {
    return (
        <div className="bg-gray-900 text-white flex flex-col justify-center items-center  min-h-screen">
            <div className="flex-1 flex flex-col justify-center items-center">
                <h2 className='text-4xl font-bold'>Contact US</h2>
                <form className='flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px] ' >
                    <input id="companyName" name="companyName" required maxLength={128} type="text" placeholder='Company Name' className="bg-gray-900 text-white outline-none border-2 border-white rounded-3xl  px-8 py-2 " />
                    <input id="email" name="email" required maxLength={128} type="text" placeholder='Your Email' className="bg-gray-900 text-white outline-none border-2 border-white rounded-3xl  px-8 py-2 " />
                    <textarea id="message" name="message" required maxLength={1048576} placeholder="Adding information" className="bg-gray-900 text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"></textarea>
                    <div className="text-center mt-10">
                        <button type='submit' className="bg-white text-black rounded-3xl px-8 py-2">送信</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
