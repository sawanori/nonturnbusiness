"use client"
import React from 'react';

interface PriceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
  price: string
}

const PriceCard: React.FC<PriceCardProps> = ({ title, description, imageUrl, imageAlt, buttonText, buttonLink, price }) => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">

      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
          {/* image */}
          <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img src={imageUrl} loading="lazy" alt={imageAlt} className="h-full w-full object-cover object-center" />
          </div>

          {/* content */}
          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">{title}</h2>
            <h3 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">{price}</h3>
            <p className="mb-8 max-w-md text-gray-600">{description}</p>
          //  <div className="mt-auto">
          //  <a href={buttonLink} className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">{buttonText}</a>
          // </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
