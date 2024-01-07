"use client"

import { FC } from 'react'
import { ClientLogs } from './client-logs'
import s from '../styles/trustedby.module.css'

export const TrustedBy: FC = () => {
    return (
        <section className={`bg-gray-200 flex flex-col justify-center `}>
            <div className="flex-1"></div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-3xl  mt-5 lg:mt-10 font-bold">
                    <span className='whitespace-nowrap'>TrustedCompany</span>{''}
                </h3>
                <ClientLogs />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="container mx-auto lg:max-w-[70%] lg:px-10">

                </div>
            </div>
        </section>
    )
}
