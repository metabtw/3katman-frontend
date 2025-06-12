"use client";
import React from "react";
import Image from "next/image";

interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export default function PortfolioItem({
  title,
  description,
  imageUrl,
  category,
}: PortfolioItemProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="relative h-56 group-hover:scale-105 transition-transform duration-300">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">Görsel Yok</div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="text-sm text-[#38b97e] font-semibold mb-1">
          {category}
        </span>
        <h3 className="text-xl font-bold mt-1 mb-2 text-[#295652]">{title}</h3>
        <p className="text-gray-600 mb-5 flex-1">{description}</p>
        <a
          href="/iletisim"
          className="mt-auto px-6 py-2 bg-[#38b97e] text-white rounded-full font-semibold shadow hover:bg-[#295652] transition-all duration-300 text-base group-hover:scale-105 text-center"
        >
          Benzer Proje İstiyorum
        </a>
      </div>
    </div>
  );
}
