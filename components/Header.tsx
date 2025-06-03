'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const menu = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/portfolyo', label: 'Portfolyo' },
  { href: '/sss', label: 'SSS' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo/3katmanBuyuk.png" alt="3Katman Logo" width={40} height={40} className="bg-[#295652] rounded p-1" />
        </Link>
        <nav className="hidden md:flex gap-8">
          {menu.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition ${isActive ? 'text-[#38b97e] font-bold' : 'text-[#295652] hover:text-[#38b97e]'}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="sr-only">Menüyü Aç</span>
          <svg width={28} height={28} fill="none" stroke="#295652" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="md:hidden flex flex-col gap-2 px-4 pb-4 bg-white border-b">
          {menu.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium py-2 border-b border-gray-100 last:border-b-0 ${isActive ? 'text-[#38b97e] font-bold' : 'text-[#295652]'}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
} 