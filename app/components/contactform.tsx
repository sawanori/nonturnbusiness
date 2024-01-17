"use client"
import { FC } from "react"
import { valibotResolver } from "@hookform/resolvers/valibot"
import axios from "axios"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

import { ContactSchema, ContactType } from "@/schema/contact"

import { Spinner } from "./spinner"
import Link from "next/link"



export const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ContactType>({
    mode: "onBlur",
    resolver: valibotResolver(ContactSchema),
  })

  const messageValue = watch("message", "")
  const messageLength = messageValue.length

  const onSubmit = handleSubmit(async (data) => {
    try {
      await axios.post("/api/contact", data)
      toast.success(
        "送信が完了いたしました。\n自動返信メールをお送りしておりますのでご確認をお願いいたします。",
      )
      reset()
    } catch (error) {
      console.error("Form submit error", error)
      toast.error("送信時にエラーが発生しました。\n恐れ入りますが後でもう一度お試しください。")
    }
  })

  return (
    <div className="bg-gray-800 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-200 md:mb-6 lg:text-3xl">お問い合わせフォーム</h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-200 md:text-lg">ご相談やお見積もり依頼はこちらからお願い致します。</p>
        </div>

        <form method="post" onSubmit={onSubmit} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
          <div className='sm:col-span-2'>
            <label htmlFor="first-name" className="mb-2 inline-block text-sm text-gray-300 sm:text-base">お名前</label>
            <input type="text"
              id="name"
              {...register("name")}
              placeholder="company name"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            {errors.name && (
              <span className="self-start text-xs text-red-500">{errors.name.message}</span>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email*</label>
            <input
              type="text"
              id="email"
              {...register("email")}
              placeholder="mail@example.com"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            {errors.email && (
              <span className="self-start text-xs text-red-500">{errors.email.message}</span>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">お問い合わせ内容</label>
            <textarea
              className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              id="message"
              {...register("message")}
              placeholder="撮影希望の内容等、問い合わせ内容をご記入ください。"
              rows={6}
            ></textarea>
            <div className="pr-1 text-right text-xs text-gray-400 ">{messageLength}/300</div>
            {errors.message && (
              <span className="self-start text-xs text-red-500">{errors.message.message}</span>
            )}
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={`w-full rounded bg-lime-600 p-3 text-white transition ${!isValid || isSubmitting ? "cursor-not-allowed opacity-60" : "hover:bg-lime-700"
                }`}
            >
              {isSubmitting ? <Spinner /> : "送信"}
            </button>
          </div>

          <p className="text-xs text-gray-400">当フォームにて記入された個人情報は当社のプライバシーポリシー・利用規約に同意の上の送信いただいたとみなします。 
            <Link href="/privacy-policy"  className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                プライバシーポリシー・利用規約
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
