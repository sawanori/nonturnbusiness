"use client"
import { FC, useContext, useRef } from 'react'
import s from '../styles/skill.module.css'
import { ScrollContext } from '../utils/scroll-observer'


const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo
    if (progress >= 0 && progress < 1) return 1
    return 0.2
}

export const Concept: FC = () => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    const numOfPages = 5
    let progress = 0

    const { current: elContainer } = refContainer
    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY =
            Math.min(
                clientHeight + halfH,
                Math.max(-screenH, scrollY - offsetTop) + halfH
            ) / clientHeight
        progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
    }


    return (
        <div ref={refContainer} className='bg-gradient-to-r from-gray-200 to-gray-100 text-black '>
            <div className='min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold'>
                <div className='leading-[2.7]'>
                    <div><h3 className={`${s.skillText} inline-block after:content-['_']`} style={{ opacity: opacityForBlock(progress, 0) }}>NonTurnは </h3></div>
                    <div><h3 className={`${s.skillText} inline-block after:content-['_']`} style={{ opacity: opacityForBlock(progress, 1) }}>お客様の魅力の発見・発信</h3></div>
                    <div><h3 className={`${s.skillText} inline-block`} style={{ opacity: opacityForBlock(progress, 2) }} >改善可能な負の解消を通し</h3></div>
                    <div><h3 className={`${s.skillText} inline-block`} style={{ opacity: opacityForBlock(progress, 3) }} >お客様をサポートしていく</h3></div>
                    <div> <h3 className={`${s.skillText} inline-block`} style={{ opacity: opacityForBlock(progress, 4) }} >クリエイターカンパニーです。</h3></div>
                </div>
            </div>
        </div >
    )
}

