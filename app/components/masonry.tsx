"use client";
import {FC, useState,  useEffect } from "react"
import Image from 'next/image'

const Mansonry:FC = () => {
 const [visibleImages, setVisibleImages] = useState(8)
 const [windowWidth, setWindowWidth] = useState(0)


  const imageUrls = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  ]

 useEffect(() => {
  setWindowWidth(window.innerWidth)
  const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
  if (windowWidth < 768) {
      setVisibleImages(3)
    } else {
      setVisibleImages(8)
    }
  }, [windowWidth])

 const showMoreImages = () => {
    setVisibleImages(8)
  }

 return (
  <section className="flex flex-col bg-gray-200 justify-center items-center">
   <h1 className="text-3xl m-8 font-bold"> Photo</h1>
   <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {imageUrls.slice(0, visibleImages).map((url, index) => (
          <div key={index}>
            <Image className="h-auto max-w-full rounded-lg" src={url} alt="" width={500} height={500} />
          </div>
        ))}
    </div>
      {visibleImages < 8 && windowWidth < 768 && (
        <button className="m-4 p-2 bg-blue-500 text-white rounded" onClick={showMoreImages}>
          さらに見る
        </button>
      )}
   </section>
    )
}

export default Mansonry
