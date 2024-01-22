"use client"

import { FC, } from 'react'
import Image from 'next/image'
import { SliderContainer, SliderItem } from './slider'

export const ClientLogs: FC = () => {
    return (
        <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
            <SliderItem width={150}>
                <Image src="/logo_panfor_you.svg" width="150" height="150" alt='ponchan' objectFit="contain" />
            </SliderItem>
            <SliderItem width={150}>
                <Image src="/logo_ashimohu.png" width="150" height="150" alt='ponchan' objectFit="contain" />
            </SliderItem>
            <SliderItem width={150}>
                <Image src="/logo_frontierhouse.png" width="150" height="150" alt='ponchan' objectFit="contain" />
            </SliderItem>
              <SliderItem width={150}>
                <Image src="/logo_hajime.png" width="150" height="150" alt='ponchan' objectFit="contain" />
            </SliderItem>
            <SliderItem width={150}>
                <Image src="/riverbed-logo.webp" width="150" height="150" alt='ponchan' objectFit="contain" />
            </SliderItem>

        </SliderContainer>
    )
}
