'use client';
import React, { useState } from 'react';
import PortfolioItem from '../../components/PortfolioItem';

const projeler = [
  {
    title: 'E-Ticaret Platformu',
    description: 'Modern ve kullanıcı dostu bir e-ticaret platformu.',
    imageUrl: '/images/portfolio/ecommerce.jpg',
    category: 'Web Geliştirme',
  },
  {
    title: 'Mobil Uygulama',
    description: 'iOS ve Android için fitness takip uygulaması.',
    imageUrl: '/images/portfolio/mobile-app.jpg',
    category: 'Mobil Uygulama',
  },
  {
    title: 'Kurumsal Web Sitesi',
    description: 'Şirket için modern ve profesyonel web sitesi.',
    imageUrl: '/images/portfolio/corporate.jpg',
    category: 'Web Tasarım',
  },
  {
    title: 'Sosyal Medya Kampanyası',
    description: 'Başarılı bir sosyal medya pazarlama kampanyası.',
    imageUrl: '/images/portfolio/social.jpg',
    category: 'Dijital Pazarlama',
  },
];

const kategoriler = ['Tümü', 'Web Geliştirme', 'Mobil Uygulama', 'Web Tasarım', 'Dijital Pazarlama'];

export default function PortfolyoPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const filteredProjeler = selectedCategory === 'Tümü'
    ? projeler
    : projeler.filter(proje => proje.category === selectedCategory);

  return (
    <main className="min-h-screen py-10 bg-gradient-to-b from-[#f8fdfa] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#295652] mb-4 tracking-tight">Portfolyo</h1>
          <p className="text-lg text-gray-700 mb-6">Gerçekleştirdiğimiz projelerle markaların dijitalde nasıl büyüdüğünü keşfedin. Sizin için de benzer başarı hikayeleri yazabiliriz!</p>
          <a href="/iletisim" className="inline-block px-8 py-3 bg-[#38b97e] text-white rounded-full font-semibold shadow hover:bg-[#295652] transition-all duration-300 text-base">Projenizi Anlatın</a>
        </div>
        {/* Kategori Filtreleri */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {kategoriler.map((kategori) => (
            <button
              key={kategori}
              onClick={() => setSelectedCategory(kategori)}
              className={`px-5 py-2 rounded-full border font-semibold transition-all duration-200 text-base shadow-sm
                ${selectedCategory === kategori
                  ? 'bg-[#38b97e] text-white border-[#38b97e] scale-105'
                  : 'bg-gray-100 text-[#295652] border-gray-200 hover:bg-[#e6f7f0]'}
              `}
            >
              {kategori}
            </button>
          ))}
        </div>
        {/* Projeler Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjeler.map((proje, index) => (
            <PortfolioItem
              key={index}
              title={proje.title}
              description={proje.description}
              imageUrl={proje.imageUrl}
              category={proje.category}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 mb-4">Projelerimiz ilginizi çektiyse, sizin için de özel bir çözüm üretelim.</p>
          <a href="/iletisim" className="inline-block px-8 py-3 bg-[#295652] text-white rounded-full font-semibold shadow hover:bg-[#38b97e] transition-all duration-300 text-base">Hemen İletişime Geçin</a>
        </div>
      </div>
    </main>
  );
} 