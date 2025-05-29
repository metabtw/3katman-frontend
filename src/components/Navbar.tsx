"use client";

// Navbar bileşeni
// Tüm sayfalarda kullanılacak navigasyon menüsü
// SOLID prensiplerine uygun, sade ve optimize edilmiş kod

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo/3katmanBuyuk.png"
              alt="3Katman Digital Logo"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-[#38b97e] transition-colors duration-300">
              Anasayfa
            </a>
            <a href="/hakkimizda" className="text-gray-700 hover:text-[#38b97e] transition-colors duration-300">
              Hakkımızda
            </a>
            <a href="/hizmetler" className="text-gray-700 hover:text-[#38b97e] transition-colors duration-300">
              Hizmetler
            </a>
            <a href="/portfolyo" className="text-gray-700 hover:text-[#38b97e] transition-colors duration-300">
              Portfolyo
            </a>
            <a href="/sss" className="text-gray-700 hover:text-[#38b97e] transition-colors duration-300">
              SSS
            </a>
            <a href="/iletisim" className="text-gray-700 hover:text-[#38b97e] transition-colors duration-300">
              İletişim
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Menüyü Aç/Kapat"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 right-0 bg-white z-40 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
      >
        <div className="py-4 px-6 space-y-4">
          <a
            href="/"
            className="block text-gray-700 hover:text-[#38b97e] transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Anasayfa
          </a>
          <a
            href="/hakkimizda"
            className="block text-gray-700 hover:text-[#38b97e] transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Hakkımızda
          </a>
          <a
            href="/hizmetler"
            className="block text-gray-700 hover:text-[#38b97e] transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Hizmetler
          </a>
          <a
            href="/portfolyo"
            className="block text-gray-700 hover:text-[#38b97e] transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolyo
          </a>
          <a
            href="/sss"
            className="block text-gray-700 hover:text-[#38b97e] transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            SSS
          </a>
          <a
            href="/iletisim"
            className="block text-gray-700 hover:text-[#38b97e] transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            İletişim
          </a>
        </div>
      </div>
    </nav>
  );
} 