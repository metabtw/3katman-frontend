'use client';
import React, { useEffect, useState } from 'react';
import PortfolioItem from '../../components/PortfolioItem';
import { getProjects, getCategories, Project, Category } from '@/lib/api';

// Kategori isimlerini normalize eden yardımcı fonksiyon
const normalizeCategory = (categoryName: string | undefined | null): string => {
  if (!categoryName) return '';
  return categoryName.toLowerCase().trim();
};

export default function PortfolyoPage() {
  const [projeler, setProjeler] = useState<Project[]>([]);
  const [kategoriler, setKategoriler] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [projelerRes, kategorilerRes] = await Promise.all([
          getProjects(),
          getCategories()
        ]);
        console.log('Projeler:', projelerRes); // Debug için
        console.log('Kategoriler:', kategorilerRes); // Debug için
        setProjeler(projelerRes);
        setKategoriler(kategorilerRes);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
        setProjeler([]);
        setKategoriler([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredProjeler = selectedCategory === 'Tümü'
    ? projeler
    : projeler.filter(proje => {
        const categoryName = kategoriler.find(cat => cat.id === proje.CategoryID)?.name; // CategoryID kullanarak kategori adını bul
        return normalizeCategory(categoryName) === normalizeCategory(selectedCategory);
      });

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
          <div key="kategori-tumu">
            <button
              onClick={() => setSelectedCategory('Tümü')}
              className={`px-5 py-2 rounded-full border font-semibold transition-all duration-200 text-base shadow-sm
                ${selectedCategory === 'Tümü'
                  ? 'bg-[#38b97e] text-white border-[#38b97e] scale-105'
                  : 'bg-gray-100 text-[#295652] border-gray-200 hover:bg-[#e6f7f0]'
              }`}
            >
              Tümü
            </button>
          </div>
          {kategoriler.map((kategori) => (
            <div key={`kategori-${kategori.id}`}>
              <button
                onClick={() => setSelectedCategory(kategori.name)}
                className={`px-5 py-2 rounded-full border font-semibold transition-all duration-200 text-base shadow-sm
                  ${normalizeCategory(selectedCategory) === normalizeCategory(kategori.name)
                    ? 'bg-[#38b97e] text-white border-[#38b97e] scale-105'
                    : 'bg-gray-100 text-[#295652] border-gray-200 hover:bg-[#e6f7f0]'
                }`}
              >
                {kategori.name}
              </button>
            </div>
          ))}
        </div>
        {/* Projeler Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {loading ? (
            <div key="loading" className="col-span-full text-center py-10 text-gray-600">Yükleniyor...</div>
          ) : filteredProjeler.length === 0 ? (
            <div key="no-projects" className="col-span-full text-center py-10 text-gray-600">
              {selectedCategory === 'Tümü' 
                ? 'Henüz proje bulunmuyor.' 
                : 'Bu kategoride henüz proje bulunmuyor.'}
            </div>
          ) : (
            filteredProjeler.map((proje) => (
              <PortfolioItem
                key={proje.id}
                title={proje.title}
                description={proje.description}
                imageUrl={''} // Backend Project modelinde Images alanı JsonIgnore olduğu için doğrudan gelmiyor. Geçici olarak boş bırakıyoruz.
                category={kategoriler.find(cat => cat.id === proje.CategoryID)?.name || 'Kategorisiz'} // CategoryID kullanarak kategori adını buluyoruz
              />
            ))
          )}
        </div>
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 mb-4">Projelerimiz ilginizi çektiyse, sizin için de özel bir çözüm üretelim.</p>
          <a href="/iletisim" className="inline-block px-8 py-3 bg-[#295652] text-white rounded-full font-semibold shadow hover:bg-[#38b97e] transition-all duration-300 text-base">Hemen İletişime Geçin</a>
        </div>
      </div>
    </main>
  );
} 