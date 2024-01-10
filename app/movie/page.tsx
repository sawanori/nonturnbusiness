"use client"
import {FC} from "react"
import ServiceTop from "../components/servicetop"
import { CategoryWorkflow } from "../components/categoryworkflow"
import PriceCard from "../components/pricecard"
import { CategoryWorkFlowBox } from "../components/categoryworkflowbox"

const Movie:FC = () => {
  return (
    <>
    <ServiceTop/>
    <CategoryWorkflow
      textcolor1="テキストカラー1"
      textcolor2="テキストカラー2"
      toColor="背景色"
    >
     <CategoryWorkFlowBox
        image="/mtg.png"
        worktitle="企画設定"
        readtime="３日以内"
        flow1="動画の目的をヒアリングした上で、進行・演出において撮影の費用感を算出させていただきます。"
        section1="撮影設計"
        section2="絵コンテ作成（案件によってビデオコンテ作成"
        section3="見積もり作成"
      /> 
      <CategoryWorkFlowBox
        image="/shot.png"
        worktitle="撮影"
        readtime="アポイント日決定次第"
        flow1="ロケハン（案件によっては省略）を踏まえて、撮影準備〜撮影をさせていただきます。"
        section1="撮影ディレクション"
        section2="スタジオ撮影"
        section3="クロマキー撮影etc..."
      /> 

     <CategoryWorkFlowBox
        image="/edit.png"
        worktitle="編集"
        readtime="1ヶ月"
        flow1="撮影素材を元により貴社の目的に沿った編集をさせていただきます。"
        section1="カラーグレーディング"
        section2="3Dアニメーション"
        section3="生成AIを駆使した演出"
      /> 

     
     
      <CategoryWorkFlowBox
        image="/finish.png"
        worktitle="納品"
        readtime="1ヶ月"
        flow1="作成した内容をご確認いただき、修正の上納品させていただきます。"
        section1="データ納品（ex:ギガファイル）でのお渡しとなります。"
        section2="DVD等、物理デバイスでのお渡しは別途ご相談ください。"
        section3="データ保管期間は1年間とさせていただきます。"
      /> 
    

    </CategoryWorkflow>
      <PriceCard
       title="動画撮影/編集プラン" 
       price="¥220,000~"
       description="撮影〜編集ワンストップで行うプランです。事前にお打ち合わせを行い、
        狙いたいターゲットに対してどのようなブランディングをしたいのかをすり合わせてから撮影に臨みます。スタジオ撮影の場合は、スタジオレンタル代は別料金となります。別途モデルorエキストラのキャスティングが必要な場合は、別途ご請求させていただきます。交通費は別途お客様のご了承を得た上で別途ご請求いたします。表示は税抜です。"
       imageUrl="/photo.jpg"
       imageAlt="画像の説明" 
      />
    </>
  )
}

export default Movie
