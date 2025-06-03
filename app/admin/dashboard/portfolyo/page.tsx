'use client';
import React, { useState } from 'react';
import { getPortfolio } from '@/lib/api';
import AdminNavbar from '../../../../components/AdminNavbar';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export default function AdminPortfolyoPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    imageUrl: '',
    category: '',
  });

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    // API çağrısı yapılacak
    setIsAdding(false);
    setNewProject({ title: '', description: '', imageUrl: '', category: '' });
  };

  return (
    <>
      <AdminNavbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#1a2a2a]">Portfolyo</h1>
            <button
              onClick={() => setIsAdding(true)}
              className="bg-[#38b97e] text-white px-4 py-2 rounded-lg hover:bg-[#2d9c6a] transition"
            >
              Yeni Proje Ekle
            </button>
          </div>

          {/* Yeni Proje Formu */}
          {isAdding && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-[#1a2a2a]">Yeni Proje Ekle</h2>
              <form onSubmit={handleAddProject} className="space-y-4">
                <div>
                  <label className="block text-gray-900 mb-2">Başlık</label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) =>
                      setNewProject({ ...newProject, title: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b97e]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-900 mb-2">Açıklama</label>
                  <textarea
                    value={newProject.description}
                    onChange={(e) =>
                      setNewProject({ ...newProject, description: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b97e]"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-900 mb-2">Görsel URL</label>
                  <input
                    type="text"
                    value={newProject.imageUrl}
                    onChange={(e) =>
                      setNewProject({ ...newProject, imageUrl: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b97e]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-900 mb-2">Kategori</label>
                  <select
                    value={newProject.category}
                    onChange={(e) =>
                      setNewProject({ ...newProject, category: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b97e]"
                    required
                  >
                    <option value="">Kategori Seçin</option>
                    <option value="Web Geliştirme">Web Geliştirme</option>
                    <option value="Mobil Uygulama">Mobil Uygulama</option>
                    <option value="Web Tasarım">Web Tasarım</option>
                    <option value="Dijital Pazarlama">Dijital Pazarlama</option>
                  </select>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsAdding(false)}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50 text-gray-700"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="bg-[#38b97e] text-white px-4 py-2 rounded-lg hover:bg-[#2d9c6a]"
                  >
                    Kaydet
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Projeler Listesi */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Görsel
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Başlık
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Kategori
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Açıklama
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-bold text-gray-900 uppercase tracking-wider">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="h-12 w-12 object-cover rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#1a2a2a]">
                      {project.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {project.category}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">
                        {project.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-[#38b97e] hover:text-[#2d9c6a] mr-4">
                        Düzenle
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Sil
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
} 