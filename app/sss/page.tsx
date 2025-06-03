"use client";
import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "Web sitesi yaptırmak istiyorum, nasıl başlıyoruz?",
    answer:
      "İlk olarak ihtiyaçlarını anlamak için seninle kısa bir görüşme yapıyoruz. Ardından teklif sunup onay aldıktan sonra tasarım ve yazılım sürecine başlıyoruz.",
  },
  {
    question: "Fiyatlandırma nasıl belirleniyor?",
    answer: "Proje kapsamı, istenen özellikler ve teslim süresine göre fiyatlandırma yapıyoruz.",
  },
  {
    question: "Web sitem mobil uyumlu olacak mı?",
    answer: "Evet, tüm projelerimiz mobil uyumlu ve responsive olarak geliştirilmektedir.",
  },
  {
    question: "Web sitemi kendim yönetebilir miyim?",
    answer: "Talebinize göre yönetim paneli ekleyebiliriz.",
  },
  {
    question: "SEO (Arama Motoru Optimizasyonu) yapıyor musunuz?",
    answer: "Evet, temel SEO ayarları ve optimizasyonları projeye dahildir.",
  },
  {
    question: "Sadece web sitesi mi yapıyorsunuz?",
    answer: "Hayır, özel yazılım, mobil uygulama ve dijital çözümler de sunuyoruz.",
  },
  {
    question: "Proje ne kadar sürede teslim edilir?",
    answer: "Proje kapsamına göre değişmekle birlikte genellikle 2-6 hafta arası sürmektedir.",
  },
  {
    question: "Hangi teknolojileri kullanıyorsunuz?",
    answer: "React, Next.js, .NET, Tailwind CSS ve modern web teknolojileri kullanıyoruz.",
  },
  {
    question: "Ödeme nasıl yapılır?",
    answer: "Sözleşme sonrası banka havalesi veya EFT ile ödeme alıyoruz.",
  },
  {
    question: "Destek veriyor musunuz?",
    answer: "Evet, teslim sonrası destek ve bakım hizmeti sunuyoruz.",
  },
];

export default function SSS() {
  const [open, setOpen] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fdfa] to-white py-10">
      <div className="max-w-2xl mx-auto w-full px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#295652] text-center mb-8 mt-6 tracking-tight">Sıkça Sorulan Sorular</h1>
        <div className="flex flex-col gap-4">
          {QUESTIONS.map((item, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl shadow-xl border border-[#38b97e]/30 transition-all ${open === i ? "ring-2 ring-[#38b97e]/40" : ""}`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left text-base font-semibold text-[#295652] focus:outline-none"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span className="flex items-center gap-2">
                  <span className="text-red-600 text-xl">❓</span>
                  {item.question}
                </span>
                <span className="text-2xl text-[#295652]">{open === i ? "-" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-8 pb-4 text-gray-700 text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 