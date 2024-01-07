
import React, { Children, FC } from 'react'

import { CategoryWorkFlowBox } from './categoryworkflowbox';
import PriceCard from './pricecard';

interface props {
    image: string
    worktitle: string
    readtime: string
    flow1: string
    flow2: string
    section1: string
    section2: string
    section3: string
    section4: string
    section5: string
    section6: string
    textcolor1: string
    textcolor2: string
    toColor: string
    Children: React.ReactNode
}

export const CategoryWorkflow: FC<props> = ({ image, worktitle, flow1, flow2, readtime, section1, section2, section3, section4, section5, section6, textcolor1, textcolor2, toColor, children }) => {
    return (
        <section className='bg-white min-h-full pb-20'>

            <section className={`bg-gradient-to-b from-white via-white  ${toColor} py-6 sm:py-8 lg:py-12 rounded-3xl mx-8 md:mx-12 lg:mx-30 `} >
                <span className='flex flex-col sm:flex-row items-center justify-start'>
                    <h1 className={`${textcolor1} text-4xl md:text-[70px] ml-0 md:-ml-21 font-extrabold`}>Frow</h1>
                    <h1 className={`ml-0  sm:ml-4 transition translate-y-2 border-b-4 ${textcolor2} `}>フローについて</h1>
                </span>
                {children}
            </section >

        </section >
    )
}
