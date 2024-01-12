"use client"

import { valibotResolver } from "@hookform/resolvers/valibot"
import axios from "axios"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

import { ContactSchema, ContactType } from "@/schema/contact"

import { Spinner } from "./spinner"

export const ContactForm = () => {
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

  <div className="bg-gray-900 text-white flex flex-col justify-center items-center  min-h-screen">
   <div className="flex-1 flex flex-col justify-center items-center">
    <h2 className='text-4xl font-bold'>Contact Us</h2>
    <form
      method="post"
      onSubmit={onSubmit}
      className="flex w-[300px] flex-col items-center justify-center gap-3"
    >
      <div className="w-full">
        <label htmlFor="name" className="text-sm text-gray-600">
          お名前
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          placeholder="company name"
          className="bg-gray-900 text-white outline-none border-2 border-white rounded-3xl  px-8 py-2 "  
        />
        {errors.name && (
          <span className="self-start text-xs text-red-500">{errors.name.message}</span>
        )}
      </div>
      <div className="w-full">
        <label htmlFor="email" className="text-sm text-gray-600">
          メールアドレス
        </label>
        <input
          type="text"
          id="email"
          {...register("email")}
          placeholder="mail@example.com"
           className="bg-gray-900 text-white outline-none border-2 border-white rounded-3xl  px-8 py-2 " 
        />
        {errors.email && (
          <span className="self-start text-xs text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="w-full">
        <label htmlFor="message" className="text-sm text-gray-600">
          メッセージ
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="お問い合わせ内容を入力してください"
          rows={6}
           className="bg-gray-900 text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
        ></textarea>
        <div className="pr-1 text-right text-xs text-gray-400">{messageLength}/300</div>
        {errors.message && (
          <span className="self-start text-xs text-red-500">{errors.message.message}</span>
        )}
      </div>
      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className={`w-full rounded bg-lime-600 p-3 text-white transition ${
          !isValid || isSubmitting ? "cursor-not-allowed opacity-60" : "hover:bg-lime-700"
        }`}
      >
        {isSubmitting ? <Spinner /> : "送信"}
      </button>
    </form>
     </div>
    </div>
  )
}
