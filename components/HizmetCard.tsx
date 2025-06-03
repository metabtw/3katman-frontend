'use client';
import React from 'react';

interface HizmetCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function HizmetCard({ title, description, icon }: HizmetCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-7 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group border-t-4 border-[#38b97e]">
      <div className="text-5xl mb-4 text-[#38b97e] group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-[#295652]">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <a
        href="/iletisim"
        className="mt-auto px-6 py-2 bg-[#38b97e] text-white rounded-full font-semibold shadow hover:bg-[#295652] transition-all duration-300 text-base group-hover:scale-105"
      >
        Teklif Al
      </a>
    </div>
  );
} 