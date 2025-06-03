'use client';
import React from 'react';
import HizmetCard from '../../components/HizmetCard';

const hizmetler = [
  {
    title: 'Web Tasarım & Geliştirme',
    description: 'Modern ve kullanıcı dostu web siteleri tasarlıyor ve geliştiriyoruz.',
    icon: '🌐',
  },
  {
    title: 'Mobil Uygulama Geliştirme',
    description: 'iOS ve Android için native ve cross-platform mobil uygulamalar geliştiriyoruz.',
    icon: '📱',
  },
  {
    title: 'E-Ticaret Çözümleri',
    description: 'Online satış platformları ve e-ticaret sistemleri kuruyoruz.',
    icon: '🛍️',
  },
  {
    title: 'SEO & Dijital Pazarlama',
    description: 'Arama motoru optimizasyonu ve dijital pazarlama stratejileri ile işinizi büyütüyoruz.',
    icon: '📈',
  },
  {
    title: 'UI/UX Tasarım',
    description: 'Kullanıcı odaklı arayüz ve deneyim tasarımları oluşturuyoruz.',
    icon: '🎨',
  },
  {
    title: 'Sosyal Medya Yönetimi',
    description: 'Sosyal medya hesaplarınızı profesyonel şekilde yönetiyoruz.',
    icon: '📱',
  },
];

export default function HizmetlerPage() {
  return (
    <main className="min-h-screen py-10 bg-gradient-to-b from-[#f8fdfa] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#295652] mb-4 tracking-tight">Hizmetlerimiz</h1>
          <p className="text-lg text-gray-700 mb-6">İşinizi dijitalde büyütmek için sunduğumuz profesyonel hizmetlerle tanışın. Her biri, markanızı bir adım öteye taşımak için tasarlandı.</p>
          <a href="/iletisim" className="inline-block px-8 py-3 bg-[#38b97e] text-white rounded-full font-semibold shadow hover:bg-[#295652] transition-all duration-300 text-base">Hemen Teklif Al</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {hizmetler.map((hizmet, index) => (
            <HizmetCard
              key={index}
              title={hizmet.title}
              description={hizmet.description}
              icon={hizmet.icon}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 mb-4">Hizmetlerimiz hakkında daha fazla bilgi almak veya özel bir çözüm için bize ulaşın.</p>
          <a href="/iletisim" className="inline-block px-8 py-3 bg-[#295652] text-white rounded-full font-semibold shadow hover:bg-[#38b97e] transition-all duration-300 text-base">Bize Ulaşın</a>
        </div>
      </div>
    </main>
  );
} 