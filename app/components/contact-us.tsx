"use client"
import { FC } from 'react'

import { valibotResolver } from "@hookform/resolvers/valibot"
import axios from "axios"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

import { ContactSchema, ContactType } from "@/schema/contact"

import { Spinner } from "./spinner"



export const ContactUs: FC = () => {
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
                <h2 className='text-4xl font-bold'>Contact US</h2>
                <form 
                   className='flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px] ' 
                   method="post"
                   onSubmit={onSubmit}
                >
                    <input type="text" id="name" name="companyName" required maxLength={128}  placeholder='Company Name' className="bg-gray-900 text-white outline-none border-2 border-white rounded-3xl  px-8 py-2 " />
                    {errors.name && (
                      <span className="self-start text-xs text-red-500">{errors.name.message}</span>
                    )}

                    <input type="text" id="email" {...register("email")} name="email" required maxLength={128}  placeholder='Your Email' className="bg-gray-900 text-white outline-none border-2 border-white rounded-3xl  px-8 py-2 " />
                     {errors.email && (
                     <span className="self-start text-xs text-red-500">{errors.email.message}</span>
                     )}

                    <textarea id="message" {...register("message")} name="message" required maxLength={1048576} placeholder="Adding information" className="bg-gray-900 text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"></textarea>
                    
                    {errors.message && (
                      <span className="self-start text-xs text-red-500">{errors.message.message}</span>
                    )}

                    <div className="text-center mt-10">
                            <button
                             type="submit"
                             disabled={!isValid || isSubmitting}
                             className={`w-full rounded bg-lime-600 p-3 text-white transition ${
                             !isValid || isSubmitting ? "cursor-not-allowed opacity-60" : "hover:bg-lime-700"
                             }`}
                             >
                            {isSubmitting ? <Spinner /> : "送信"}
                            </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
