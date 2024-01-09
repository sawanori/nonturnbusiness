"use client"


import { FC } from 'react'
import { Carousel } from './carousel'
import { CarouselItem } from './carousel-item'
import {Products} from './products'

export const MovieList: FC = () => {
    return (
    <section className='flex flex-col bg-white justify-center items-center'>  
      <h1 className="text-3xl  mt-5 lg:mt-10 font-bold">Movie</h1>

        <Carousel className="bg-white text-white">
            <CarouselItem index={0}>
                <Products id='1'
                          title="株式会社 フロンティアハウス様" 
                          description="業種:不動産/ジャンル:オフィスツアー" 
                          link="https://www.youtube.com/watch?v=doCZ0piJClw&t=21s" 
                />
            </CarouselItem>
            <CarouselItem index={1}>
                <Products id='2' 
                          title="株式会社一(はじめ) 様" 
                          description="業種:人材/ジャンル:採用動画" 
                          link="https://vimeo.com/manage/videos/628806211" 
                />
            </CarouselItem>
            <CarouselItem index={2}>
                <Products id='3' 
                          title="株式会社パンフォーユー様" 
                      description="業種:DX/ジャンル:採用動画" 
                          link="https://vimeo.com/manage/videos/688687980" 
                />
            </CarouselItem>
            <CarouselItem index={3}>
                <Products id='4' 
                          title="株式会社ArtLand様" 
                          description="業種:製造業/ジャンル:ブランディング" 
                          link="https://www.youtube.com/watch?v=xuyEFOxLCmk&t=402s" 
                />
            </CarouselItem>
             <CarouselItem index={4}>
                <Products id='5' 
                          title="真砂茶寮様" 
                          description="業種:飲食/ジャンル:ブランディング" 
                          link="https://www.youtube.com/watch?v=oAb-cI93XlE" 
                />
            </CarouselItem>
           
        </Carousel>
    </section >
    )
}
