'use client';
import React from 'react';
import Link from 'next/link';
import AdminNavbar from '../../../components/AdminNavbar';

export default function AdminDashboardPage() {
  return (
    <>
      <AdminNavbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-[#1a2a2a]">Admin Paneli</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Hizmetler Kartı */}
            <Link
              href="/admin/dashboard/hizmetler"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="text-4xl text-[#38b97e] mb-4">🎯</div>
              <h2 className="text-xl font-semibold mb-2 text-[#1a2a2a]">Hizmetler</h2>
              <p className="text-gray-700">
                Hizmetlerinizi yönetin, yeni hizmetler ekleyin veya mevcut hizmetleri düzenleyin.
              </p>
            </Link>

            {/* Portfolyo Kartı */}
            <Link
              href="/admin/dashboard/portfolyo"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="text-4xl text-[#38b97e] mb-4">📁</div>
              <h2 className="text-xl font-semibold mb-2 text-[#1a2a2a]">Portfolyo</h2>
              <p className="text-gray-700">
                Projelerinizi yönetin, yeni projeler ekleyin veya mevcut projeleri düzenleyin.
              </p>
            </Link>

            {/* Mesajlar Kartı */}
            <Link
              href="/admin/dashboard/mesajlar"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="text-4xl text-[#38b97e] mb-4">✉️</div>
              <h2 className="text-xl font-semibold mb-2 text-[#1a2a2a]">Mesajlar</h2>
              <p className="text-gray-700">
                İletişim formundan gelen mesajları görüntüleyin ve yönetin.
              </p>
            </Link>
          </div>

          {/* İstatistikler */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-[#1a2a2a]">İstatistikler</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-2xl font-bold text-[#38b97e] mb-2">12</div>
                <div className="text-gray-700">Aktif Hizmet</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-2xl font-bold text-[#38b97e] mb-2">24</div>
                <div className="text-gray-700">Portfolyo Projesi</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-2xl font-bold text-[#38b97e] mb-2">8</div>
                <div className="text-gray-700">Yeni Mesaj</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 