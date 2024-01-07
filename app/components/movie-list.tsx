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
                          description="2022年12月28日、株式会社東京証券取引所 TOKYO PRO Marketへ株式を上場されました企業様のリクルート向けオフィスツアー動画を撮影いたしました" 
                          link="https://www.youtube.com/watch?v=doCZ0piJClw&t=21s" 
                />
            </CarouselItem>
            <CarouselItem index={1}>
                <Products id='2' 
                          title="株式会社一(はじめ) 様" 
                          description="学生インターンを利用した営業代行業を営む企業様の採用動画の撮影・編集を行いました。
大学生の期間でしっかり学べて成長でき充実した時間を得ることができることをインタビューで説明。
インタビュー撮影では撮影場所が背景バックが灰色で単調感が出やすいと察して照明でできるだけ各カットにキャラクター付けを行い、伸び伸びとした組織体が伝わるブランディングに注力しました。 " 
                          link="https://vimeo.com/manage/videos/628806211" 
                />
            </CarouselItem>
            <CarouselItem index={2}>
                <Products id='3' 
                          title="株式会社パンフォーユー様" 
                          description="パン屋への冷凍パンのシステム導入におけるDX促進、またそれらの冷凍パンを独自のサブスクリプションサービスにてエンドユーザーにお届けするサービスを展開しており、その基盤を支えるシステム開発を行うエンジニア採用におけるブランディングムービーのオーダを請け撮影・編集を行いました。" 
                          link="https://vimeo.com/manage/videos/688687980" 
                />
            </CarouselItem>
            <CarouselItem index={3}>
                <Products id='4' 
                          title="株式会社ArtLand様" 
                          description="発注主のクライアントの商品の海外進出用のイベント(2020年マルセイユJapanExpo)での展示ブースで流す動画を作成しました。
会場に訪れるフランスの消費者をにジャパニーズイメージを植え付けたく往年の日本映画を意識した演色を行いました。" 
                          link="https://www.youtube.com/watch?v=xuyEFOxLCmk&t=402s" 
                />
            </CarouselItem>
             <CarouselItem index={4}>
                <Products id='5' 
                          title="真砂茶寮様" 
                          description="過去、ミシュラン二つ星を獲得した懐石料理屋のプロモーションPVの撮影・編集を行いました。
手の込んだ料理、優美な店内内装と併せて、店主の知識も店舗を彩る魅力と捉えて店主のナレーションを乗せてブランディングを行いました。" 
                          link="https://www.youtube.com/watch?v=oAb-cI93XlE" 
                />
            </CarouselItem>
           
        </Carousel>
    </section >
    )
}
