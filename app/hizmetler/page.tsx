'use client';
import React, { useEffect, useState } from 'react';
import HizmetCard from '../../components/HizmetCard';
import { getServices } from '@/lib/api';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function HizmetlerPage() {
  const [hizmetler, setHizmetler] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHizmetler = async () => {
      setLoading(true);
      try {
        const res = await getServices();
        setHizmetler(res as Service[]);
      } catch {
        setHizmetler([]);
      } finally {
        setLoading(false);
      }
    };
    fetchHizmetler();
  }, []);

  return (
    <main className="min-h-screen py-10 bg-gradient-to-b from-[#f8fdfa] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#295652] mb-4 tracking-tight">Hizmetlerimiz</h1>
          <p className="text-lg text-gray-700 mb-6">İşinizi dijitalde büyütmek için sunduğumuz profesyonel hizmetlerle tanışın. Her biri, markanızı bir adım öteye taşımak için tasarlandı.</p>
          <a href="/iletisim" className="inline-block px-8 py-3 bg-[#38b97e] text-white rounded-full font-semibold shadow hover:bg-[#295652] transition-all duration-300 text-base">Hemen Teklif Al</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {loading ? (
            <div>Yükleniyor...</div>
          ) : (
            hizmetler.map((hizmet, index) => (
            <HizmetCard
                key={hizmet.id || index}
              title={hizmet.title}
              description={hizmet.description}
              icon={hizmet.icon}
            />
            ))
          )}
        </div>
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 mb-4">Hizmetlerimiz hakkında daha fazla bilgi almak veya özel bir çözüm için bize ulaşın.</p>
          <a href="/iletisim" className="inline-block px-8 py-3 bg-[#295652] text-white rounded-full font-semibold shadow hover:bg-[#38b97e] transition-all duration-300 text-base">Bize Ulaşın</a>
        </div>
      </div>
    </main>
  );
} 