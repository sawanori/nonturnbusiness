"use client"

import React from 'react'
import Image from 'next/image'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from './work'

export const Works = () => {
    return (
        <TileWrapper numOfPages={3}>
            <TileBackground>
                <WorkBackground />
            </TileBackground>
            <TileContent>
                <Tile
                    page={0}
                    renderContent={({ progress }) =>
                        <WorkContainer>
                            <WorkLeft progress={progress}>
                                <h1 className=' font-extrabold text-5xl md:text-3xl lg:text-4xl xl:text-5xl  my-3    text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Movie</h1>
                                <p className='text-xl md:text-xl lg:text-2xl  xl:text-3xl tracking-tight'>企業VPやブランディング動画を<br />メインに企業力が高められる<br />動画の撮影編集を実施</p>
                            </WorkLeft>
                            <WorkRight progress={progress}>
                                <Image src="/verticaal.jpg" layout='responsive' width={100} height={100} />
                            </WorkRight>
                        </WorkContainer>
                    }
                ></Tile>
                <Tile
                    page={1}
                    renderContent={({ progress }) =>
                        <WorkContainer>
                            <WorkLeft progress={progress}>
                                <h1 className='font-extrabold text-5xl md:text-3xl lg:text-4xl xl:text-5xl  my-3     text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Photo</h1>
                                <p className='text-xl md:text-xl lg:text-2xl  xl:text-3xl tracking-tight'>商品・サービス写真から<br />より商品力が伝わり<br />躍動する宣材写真</p>

                            </WorkLeft>
                            <WorkRight progress={progress}>
                                <Image src="/photo.jpg" layout='responsive' width={100} height={100} />
                            </WorkRight>
                        </WorkContainer>

                    }
                ></Tile>
                <Tile
                    page={2}
                    renderContent={({ progress }) =>
                        <WorkContainer>
                            <WorkLeft progress={progress}>
                                <h1 className='font-extrabold text-5xl md:text-3xl lg:text-4xl xl:text-5xl  my-3     text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>WEB production</h1>
                                <p className='text-xl md:text-xl lg:text-2xl  xl:text-3xl tracking-tight'>企業のポテンシャルを<br />魅力的に伝えることができる<br />WEBコンテンツを構築</p>

                            </WorkLeft>
                            <WorkRight progress={progress}>
                                <Image src="/web.jpg" layout='responsive' width={100} height={100} />
                            </WorkRight>
                        </WorkContainer>
                    }
                ></Tile>

            </TileContent>
        </TileWrapper>
    )
}
