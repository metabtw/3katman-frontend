// İletişim Sayfası – 3Katman Digital
// Modern, responsive, 2 sütunlu layout ve API entegrasyonu

"use client";
import { useState } from "react";
import { sendContactForm } from "../../lib/api";

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
    name: "",
    email: "",
    phone: "",
    subject: konular[0],
    message: "",
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
    if (!form.name || !form.email || !form.message) {
      setHata("Lütfen zorunlu alanları doldurun.");
      return;
    }
    setGonderiliyor(true);
    setHata("");
    setBasari(false);
    try {
      await sendContactForm({
        name: form.name,
        email: form.email,
        message: form.message + (form.phone ? `\nTelefon: ${form.phone}` : "") + (form.subject ? `\nKonu: ${form.subject}` : ""),
      });
      setBasari(true);
      setForm({ name: "", email: "", phone: "", subject: konular[0], message: "" });
    } catch {
      setHata("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
    setGonderiliyor(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fdfa] to-white py-10">
      <div className="max-w-4xl mx-auto w-full px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#295652] text-center mb-10 mt-5 tracking-tight">İletişim</h1>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Sol: İletişim Formu */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col gap-3"
          >
            <h2 className="text-xl font-semibold text-[#295652] mb-2">Bize Mesaj Gönderin</h2>
            <input
              type="text"
              name="name"
              placeholder="Ad Soyad*"
              value={form.name}
              onChange={handleChange}
              className="border border-[#abf0d6] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#38b97e] placeholder:text-[#295652] text-[#295652]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-posta*"
              value={form.email}
              onChange={handleChange}
              className="border border-[#abf0d6] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#38b97e] placeholder:text-[#295652] text-[#295652]"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefon (isteğe bağlı)"
              value={form.phone}
              onChange={handleChange}
              className="border border-[#abf0d6] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#38b97e] placeholder:text-[#295652] text-[#295652]"
            />
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="border border-[#abf0d6] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#38b97e] text-[#295652]"
            >
              {konular.map((k, i) => (
                <option key={i} value={k}>{k}</option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder="Mesajınız*"
              value={form.message}
              onChange={handleChange}
              className="border border-[#abf0d6] rounded-lg px-4 py-2 min-h-[110px] focus:outline-none focus:ring-2 focus:ring-[#38b97e] placeholder:text-[#295652] text-[#295652] resize-none"
              required
            />
            {hata && <div className="text-red-600 text-sm mt-1">{hata}</div>}
            {basari && <div className="text-green-600 text-sm mt-1 whitespace-pre-line">Teşekkürler! Mesajınız bize ulaştı, en kısa sürede sizinle iletişime geçeceğiz.</div>}
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
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-[#295652] mb-2">İletişim Bilgilerimiz</h2>
            <div className="space-y-3">
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
            {/* Sosyal medya ve iletişim butonları: Alt alta ve aynı boyutta */}
            <div className="flex flex-col gap-3 mt-3 w-full">
              <a
                href="https://wa.me/905xxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full min-w-[180px] px-0 py-3 bg-[#38b97e] text-white rounded-full shadow-md hover:bg-[#295652] transition-all duration-300 text-base font-semibold"
              >
                <span className="text-xl">💬</span> WhatsApp'tan Yaz
              </a>
              <a
                href="https://instagram.com/3katman.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full min-w-[180px] px-0 py-3 rounded-full shadow-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold hover:opacity-90 transition-all duration-300 text-base"
              >
                <span className="text-xl">📸</span> Instagram'da Takip Et
              </a>
              <a
                href="https://linkedin.com/company/3katman-digital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full min-w-[180px] px-0 py-3 rounded-full shadow-md bg-[#0077b5] text-white font-semibold hover:bg-[#005983] transition-all duration-300 text-base"
              >
                <span className="text-xl">💼</span> LinkedIn'de Takip Et
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 