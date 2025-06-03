'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const adminMenu = [
  { href: '/admin/dashboard', label: 'Dashboard' },
  { href: '/admin/dashboard/hizmetler', label: 'Hizmetler' },
  { href: '/admin/dashboard/portfolyo', label: 'Portfolyo' },
  { href: '/admin/dashboard/mesajlar', label: 'Mesajlar' },
];

export default function AdminNavbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-white shadow sticky top-0 z-40 border-b">
      <div className="max-w-7xl mx-auto flex items-center gap-2 px-4 py-3 overflow-x-auto">
        <span className="font-bold text-[#295652] text-lg mr-6">Admin Paneli</span>
        {adminMenu.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap
                ${isActive ? 'bg-[#38b97e] text-white shadow font-bold' : 'text-[#295652] hover:bg-[#e6f7f0] hover:text-[#38b97e]'}
              `}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
} 