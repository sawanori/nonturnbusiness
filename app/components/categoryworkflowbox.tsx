
import React, { FC } from 'react'
import Image from 'next/image'


interface workflowbox {
    image: string
    worktitle: string
    readtime: string
    flow1: string
    section1: string
    section2: string
    section3: string
}

export const CategoryWorkFlowBox: FC<workflowbox> = ({ image, worktitle, readtime, flow1, section1, section2, section3}) => {
    return (
        <div className="">

            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto py-7 border-black   border-b-[.8px]">

                <div className="md:h-80 flex flex-col items-center sm:flex-row overflow-hidden">

                    <div className='flex w-full sm:w-1/2 lg:w-2/5 h-48 sm:h-auto order-first sm:border-none'  >
                        <Image src={image} layout="intrinsic" width='350' height='250' objectFit="contain" alt='ponchan' />
                    </div>



                    <div className="w-full sm:w-1/2 lg:w-3/5 flex flex-col p-4 sm:p-8 ">

                        <div className="flex flex-col sm:flex-row items-center">
                            <h2 className="text-gray-800 text-xl md:text-2xl lg:text-4xl font-bold mb-6">{worktitle}</h2>
                            <div className='transform -translate-y-2'>
                                {readtime ? <span className='text-white bg-pink-300 px-3 py-2 rounded-3xl ml-3 '>約{readtime}</span> : ''}
                            </div>
                        </div>
                        <section className="flex flex-col xs:flex-col sm:flex-col md:flex-row justify-start ">
                            <div className="mr-6 ">
                                <div className='text-red-500 text-xl mb-2 mr-2'>
                                    <h2 className='font-bold '>{flow1}</h2>
                                </div>
                                <ol className='list-disc transform translate-x-6'>
                                    <li className='mb-4'>{section1}</li>
                                    <li className='mb-4'>{section2}</li>
                                    <li className='mb-4'>{section3}</li>
                                </ol>
                            </div>
                        </section>
                    </div>
                </div>



            </div>
        </div >
    )
}
