'use client';
import React, { useState, useEffect } from 'react';
import { getServices, addService, deleteService, updateService } from '@/lib/api';
import AdminNavbar from '../../../../components/AdminNavbar';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function AdminHizmetlerPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [newService, setNewService] = useState({ title: '', description: '', icon: '' });
  const [editService, setEditService] = useState({ id: 0, title: '', description: '', icon: '' });
  const [loading, setLoading] = useState(false);

  // API'den hizmetleri çek
  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await getServices();
      setServices(res as Service[]);
    } catch {
      // error handling
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchServices();
  }, []);

  // Hizmet ekle
  const handleAddService = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addService(newService);
      setIsAdding(false);
      setNewService({ title: '', description: '', icon: '' });
      fetchServices();
    } catch {
      // error handling
    }
    setLoading(false);
  };

  // Hizmet sil
  const handleDelete = async (id: number) => {
    if (!confirm('Bu hizmeti silmek istediğinize emin misiniz?')) return;
    setLoading(true);
    try {
      await deleteService(id);
      fetchServices();
    } catch {
      // error handling
    }
    setLoading(false);
  };

  // Hizmet düzenle başlat
  const startEdit = (service: Service) => {
    setIsEditing(service.id);
    setEditService(service);
  };

  // Hizmet düzenle kaydet
  const handleEditService = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateService(editService.id, editService);
      setIsEditing(null);
      fetchServices();
    } catch {
      // error handling
    }
    setLoading(false);
  };

  return (
    <>
      <AdminNavbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#1a2a2a]">Hizmetler</h1>
            <button
              onClick={() => setIsAdding(true)}
              className="bg-[#38b97e] text-white px-4 py-2 rounded-lg hover:bg-[#2d9c6a] transition"
            >
              Yeni Hizmet Ekle
            </button>
          </div>
          {loading && <div className="mb-4 text-[#38b97e]">Yükleniyor...</div>}
          {/* Yeni Hizmet Formu */}
          {isAdding && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-[#1a2a2a]">Yeni Hizmet Ekle</h2>
              <form onSubmit={handleAddService} className="space-y-4">
                <div>
                  <label className="block text-gray-900 mb-2">Başlık</label>
                  <input
                    type="text"
                    value={newService.title}
                    onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b97e] bg-white text-[#1a2a2a] placeholder:text-gray-400"
                    placeholder="Hizmet başlığı girin"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-900 mb-2">Açıklama</label>
                  <textarea
                    value={newService.description}
                    onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b97e] bg-white text-[#1a2a2a] placeholder:text-gray-400"
                    placeholder="Açıklama girin"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-900 mb-2">İkon</label>
                  <input
                    type="text"
                    value={newService.icon}
                    onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b97e] bg-white text-[#1a2a2a] placeholder:text-gray-400"
                    placeholder="Emoji veya ikon kodu"
                    required
                  />
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
          {/* Hizmetler Listesi */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">İkon</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Başlık</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Açıklama</th>
                  <th className="px-6 py-3 text-right text-xs font-bold text-gray-900 uppercase tracking-wider">İşlemler</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {services.map((service) => (
                  <tr key={service.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-2xl">{service.icon}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#1a2a2a]">
                      {isEditing === service.id ? (
                        <input
                          type="text"
                          value={editService.title}
                          onChange={(e) => setEditService({ ...editService, title: e.target.value })}
                          className="w-full px-2 py-1 border rounded bg-white text-[#1a2a2a] placeholder:text-gray-400"
                          placeholder="Başlık"
                        />
                      ) : (
                        service.title
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {isEditing === service.id ? (
                        <textarea
                          value={editService.description}
                          onChange={(e) => setEditService({ ...editService, description: e.target.value })}
                          className="w-full px-2 py-1 border rounded bg-white text-[#1a2a2a] placeholder:text-gray-400"
                          placeholder="Açıklama"
                          rows={2}
                        />
                      ) : (
                        <div className="text-sm text-gray-700">{service.description}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {isEditing === service.id ? (
                        <>
                          <button
                            className="text-[#38b97e] hover:text-[#2d9c6a] mr-2"
                            onClick={handleEditService}
                          >Kaydet</button>
                          <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={() => setIsEditing(null)}
                          >İptal</button>
                        </>
                      ) : (
                        <>
                          <button className="text-[#38b97e] hover:text-[#2d9c6a] mr-4" onClick={() => startEdit(service)}>Düzenle</button>
                          <button className="text-red-600 hover:text-red-900" onClick={() => handleDelete(service.id)}>Sil</button>
                        </>
                      )}
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