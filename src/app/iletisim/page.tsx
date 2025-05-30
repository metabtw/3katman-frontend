// İletişim Sayfası – 3Katman Digital
// SOLID prensiplerine uygun, sade ve optimize edilmiş kod
// Modern, responsive, 2 sütunlu layout

"use client";
import { useState } from "react";

const iletisimBilgileri = [
  { ikon: "📍", baslik: "Adres", icerik: "Kütahya, Türkiye" },
  { ikon: "📞", baslik: "Telefon", icerik: "+90 5xx xxx xx xx" },
  { ikon: "✉️", baslik: "E-posta", icerik: "iletisim@3katman.digital" },
  { ikon: "⏰", baslik: "Çalışma Saatleri", icerik: "Hafta içi 09:00 - 18:00" },
];

const konular = [
  "Web Sitesi",
  "Mobil Uygulama",
  "Fiyat Teklifi",
  "Diğer",
];

export default function Iletisim() {
  // Form state
  const [form, setForm] = useState({
    ad: "",
    email: "",
    telefon: "",
    konu: konular[0],
    mesaj: "",
  });
  const [hata, setHata] = useState("");
  const [basari, setBasari] = useState(false);
  const [gonderiliyor, setGonderiliyor] = useState(false);

  // Form input değişikliği
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setHata("");
  };

  // Form gönderimi
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basit validasyon
    if (!form.ad || !form.email || !form.mesaj) {
      setHata("Lütfen zorunlu alanları doldurun.");
      return;
    }
    setGonderiliyor(true);
    setHata("");
    setBasari(false);
    // Backend'e gönderim (dummy endpoint)
    try {
      await new Promise((res) => setTimeout(res, 1200)); // Simülasyon
      setBasari(true);
      setForm({ ad: "", email: "", telefon: "", konu: konular[0], mesaj: "" });
    } catch {
      setHata("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
    setGonderiliyor(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fdfa] to-white py-20">
      <div className="max-w-4xl mx-auto w-full px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#295652] text-center mb-10 mt-20">İletişim</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sol: İletişim Formu */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col gap-4"
          >
            <h2 className="text-xl font-semibold text-[#295652] mb-2">Bize Mesaj Gönderin</h2>
            <input
              type="text"
              name="ad"
              placeholder="Ad Soyad*"
              value={form.ad}
              onChange={handleChange}
              className="border-2 border-[#38b97e] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#38b97e] placeholder:text-[#295652] text-[#295652] font-medium"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-posta*"
              value={form.email}
              onChange={handleChange}
              className="border-2 border-[#38b97e] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#38b97e] placeholder:text-[#295652] text-[#295652] font-medium"
              required
            />
            <input
              type="tel"
              name="telefon"
              placeholder="Telefon (isteğe bağlı)"
              value={form.telefon}
              onChange={handleChange}
              className="border-2 border-[#38b97e] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#38b97e] placeholder:text-[#295652] text-[#295652] font-medium"
            />
            <select
              name="konu"
              value={form.konu}
              onChange={handleChange}
              className="border-2 border-[#38b97e] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#38b97e] text-[#295652] font-medium"
            >
              <option value="" disabled hidden>Konu Seçiniz*</option>
              {konular.map((k, i) => (
                <option key={i} value={k}>{k}</option>
              ))}
            </select>
            <textarea
              name="mesaj"
              placeholder="Mesajınız*"
              value={form.mesaj}
              onChange={handleChange}
              className="border-2 border-[#38b97e] rounded-lg px-4 py-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-[#38b97e] placeholder:text-[#295652] text-[#295652] font-medium"
              required
            />
            {hata && <div className="text-red-600 text-sm">{hata}</div>}
            {basari && <div className="text-green-600 text-sm">Teşekkürler! Mesajınız bize ulaştı, en kısa sürede sizinle iletişime geçeceğiz.</div>}
            <button
              type="submit"
              className="mt-2 bg-[#295652] hover:bg-[#38b97e] text-white font-semibold rounded-full px-8 py-3 shadow-lg transition-all duration-300 disabled:opacity-60"
              disabled={gonderiliyor}
            >
              {gonderiliyor ? "Gönderiliyor..." : "Gönder"}
            </button>
            <a
              href="/sss"
              className="text-[#38b97e] text-sm mt-2 hover:underline inline-block"
            >
              Sıkça Sorulan Sorular
            </a>
          </form>

          {/* Sağ: İletişim Bilgileri */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col gap-4 justify-between">
            <h2 className="text-xl font-semibold text-[#295652] mb-2">İletişim Bilgilerimiz</h2>
            <div className="space-y-4">
              {iletisimBilgileri.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[#295652]">
                  <span className="text-2xl">{item.ikon}</span>
                  <div>
                    <div className="font-semibold">{item.baslik}</div>
                    <div className="text-gray-700">{item.icerik}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://wa.me/905xxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#38b97e] text-white rounded-full shadow-md hover:bg-[#295652] transition-all duration-300 w-full"
              >
                <span className="text-xl">💬</span> WhatsApp'tan Yaz
              </a>
              <a
                href="https://instagram.com/3katman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E1306C] text-white rounded-full shadow-md hover:bg-[#C13584] transition-all duration-300 w-full"
              >
                <span className="text-xl">📸</span> Instagram
              </a>
              <a
                href="https://linkedin.com/company/3katman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-full shadow-md hover:bg-[#005582] transition-all duration-300 w-full"
              >
                <span className="text-xl">💼</span> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 