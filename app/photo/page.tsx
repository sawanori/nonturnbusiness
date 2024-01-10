"use client"
import {FC} from "react"
import Mansonry from "../components/masonry"
import { Concept } from "../components/concept"
import PhotoTop from "../components/phototop"
import { CategoryWorkflow } from "../components/categoryworkflow"
import PriceCard from "../components/pricecard"
import { CategoryWorkFlowBox } from "../components/categoryworkflowbox"

const Product:FC = () => {
return (
    <>
     <PhotoTop/>
      <CategoryWorkflow
      textcolor1="テキストカラー1"
      textcolor2="テキストカラー2"
      toColor="背景色"
     >
         <CategoryWorkFlowBox
         image="/mtg.png"
         worktitle="ヒアリング"
         readtime="３日以内"
         flow1="撮影の目的や内容をヒアリングした上で、必要な撮影拘束時間の設定とそれに価格費用感をお伝えさせていただきます。"
         section1="22,000/Hをベースにしたお見積もりの作成となります。"
         section2=""
         section3="見積もり作成"
        />
        <CategoryWorkFlowBox
         image="/still.png"
         worktitle="撮影"
         readtime="３日以内"
         flow1="ご指定の場所・日時にカメラマンが必要機材を持ち込み、撮影を行います"
         section1="「このような写真を撮影したい」といった簡単なリストを頂けますと助かります。例えば、「インタビュー中の写真」「ポートレート（3名）」「働いている様子（一人3カット、5名分）」などと言った形です。"
         section2="撮影時部屋の内観などを撮影される場合があります場合、映り込む可能性のある場所の片付けを事前にお願いできますと撮影当日非常にスムーズです。"
         section3="　撮影中は必ずご担当者様に同席頂き、ご確認いただきながら進めていただきますようお願いします。"
        />
        <CategoryWorkFlowBox
         image="/finish.png"
         worktitle="納品"
         readtime="３日以内"
         flow1="データ便（ex:ギガファイル便）を利用した納品をさせていただきます。"
         section1="セキュリティ対策等の理由により納品用のシステムに指定がある場合、事前にご相談ください。ご対応いたします。 "
         section2="DVDでの納品は対応しておりません。（USBメモリーやSSD等は対応可能ですのでご相談お願い致します。）"
         section3="当社での納品データのバックアップ保証期間は撮影日より1ヶ月となります"
        />

        </CategoryWorkflow>

      <PriceCard
       title="イベント写真撮影プラン" 
       price="1H:￥20,000※２Hからご予約可能"
       description="結婚式二次会などのイベントの空気感をそのまま写真に切り取ります！撮影日から３日以内のスピード納品！現像まで行うプランです、凝ったレタッチのご対応は出来かねます。 "
       imageUrl="/photo.jpg"
       imageAlt="画像の説明" 
      />

      <PriceCard
       title="商品撮影プラン" 
       price="2H:￥50,000"
       description="あなたが魅力的に見せたい商品（ex:料理、ECショップ商品）をより魅力的に写真に納めます。撮影日から１週間以内の納品！現像まで行うプランです。表示は税抜です。"
       imageUrl="/photo.jpg"
       imageAlt="画像の説明" 
      />
    </>
  )
}

export default Product
