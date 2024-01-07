"use client"

import React from 'react'
import Image from 'next/image'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from './work'

export const AboutConcept = () => {
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
                                <h1 className=' font-extrabold text-5xl md:text-3xl lg:text-4xl xl:text-5xl  my-3    text-transparent bg-clip-text bg-gradient-to-r from-cyan-50 to-stone-700'>中小企業の悩み</h1>
                                <p className='text-xl md:text-xl lg:text-2xl  xl:text-3xl tracking-tight'>ホームページやSNSを使って<br />自社の認知を広めたいが<br />自信を持って表に出せる<br/>宣伝素材がなく<br/>結果、手付かずになる</p>
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
                                <h1 className='font-extrabold text-5xl md:text-3xl lg:text-4xl xl:text-5xl  my-3     text-transparent bg-clip-text bg-gradient-to-r from-cyan-50 to-stone-700'>我々の解決できる事</h1>
                                <p className='text-xl md:text-xl lg:text-2xl  xl:text-3xl tracking-tight'>貴社の目的をヒアリングした上で<br />最適な表現方法を選定<br />スピーディーにご提供</p>

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
                                <h1 className='font-extrabold text-5xl md:text-3xl lg:text-4xl xl:text-5xl  my-3     text-transparent bg-clip-text bg-gradient-to-r from-cyan-50 to-stone-700'>共に目指す場所</h1>
                                <p className='text-xl md:text-xl lg:text-2xl  xl:text-3xl tracking-tight'>企業イメージのアップから<br />事業の告知や実際の集客<br />皆様のビジネスの結果に繋がるクリエイティブを目指します</p>

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
