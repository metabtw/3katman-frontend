'use client';
import React, { useState, useEffect } from 'react';
import { getProjects, addProject, deleteProject, updateProject, getCategories, Category, Project } from '@/lib/api';
import AdminNavbar from '../../../../components/AdminNavbar';

// Proje ekleme/düzenleme formu için veri arayüzü
interface ProjectFormData {
  title: string;
  description: string;
  imageUrl: string;
  categoryId: string; // Kategori ID'si olarak güncellendi
}

const AdminPortfolyoPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    description: '',
    imageUrl: '',
    categoryId: '',
  });
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Verileri çekme fonksiyonu
  const fetchData = async () => {
    setLoading(true);
    try {
      const [projectsData, categoriesData] = await Promise.all([
        getProjects(),
        getCategories()
      ]);
      setProjects(projectsData);
      setCategories(categoriesData);
    } catch (error) {
      console.error('Veriler çekilirken hata oluştu:', error);
      setError('Veriler yüklenirken bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Formu sıfırla
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      categoryId: '',
    });
    setEditingProject(null);
    setError(null);
  };

  // Proje ekle
  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.title?.trim() || !formData.description?.trim() || !formData.categoryId?.trim()) {
      setError('Lütfen tüm zorunlu alanları doldurun (Başlık, Açıklama ve Kategori).');
      return;
    }

    try {
      const projectData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        CategoryID: formData.categoryId.trim(), // Backend'in beklediği Guid formatında ID
      };

      console.log('Gönderilen veri:', projectData);
      const response = await addProject(projectData);
      console.log('API yanıtı:', response);

      resetForm();
      fetchData();
    } catch (err: any) {
      console.error('Tam hata detayı:', err.response?.data);
      let errorMessage = 'Proje eklenirken bir hata oluştu.';
      if (err.response?.data?.errors) {
        const validationErrors = Object.entries(err.response.data.errors)
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n');
        errorMessage = `Validasyon hataları:\n${validationErrors}`;
      } else if (err.response?.data) {
        errorMessage = `API Hatası: ${JSON.stringify(err.response.data)}`;
      } else if (err.message) {
        errorMessage = `Hata: ${err.message}`;
      }
      setError(errorMessage);
    }
  };

  // Proje düzenle
  const handleEditProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;
    
    setError(null);
    try {
      // Veri doğrulama
      if (!formData.title?.trim() || !formData.description?.trim() || !formData.categoryId?.trim()) {
        setError('Lütfen tüm zorunlu alanları doldurun (Başlık, Açıklama ve Kategori).');
        return;
      }

      // API'nin beklediği veri yapısı
      const projectData = {
        id: editingProject.id,
        title: formData.title.trim(),
        description: formData.description.trim(),
        CategoryID: formData.categoryId.trim(), // Backend'in beklediği Guid formatında ID
      };

      console.log('Gönderilen veri:', projectData);
      
      // API çağrısı
      const response = await updateProject(editingProject.id, projectData);
      console.log('API yanıtı:', response);

      // Başarılı güncelleme
      resetForm();
      fetchData();
    } catch (err: any) {
      console.error('Tam hata detayı:', err.response?.data);
      
      // Hata mesajını belirle
      let errorMessage = 'Proje güncellenirken bir hata oluştu.';
      
      if (err.response?.data?.errors) {
        const validationErrors = Object.entries(err.response.data.errors)
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n');
        errorMessage = `Validasyon hataları:\n${validationErrors}`;
      } else if (err.response?.data) {
        errorMessage = `API Hatası: ${JSON.stringify(err.response.data)}`;
      } else if (err.message) {
        errorMessage = `Hata: ${err.message}`;
      }
      
      setError(errorMessage);
    }
  };

  // Düzenleme modunu başlat
  const startEditing = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title || '',
      description: project.description || '',
      imageUrl: '', // Images backend Project modelinde JsonIgnore olduğu için doğrudan Project objesinden gelmiyor. Boş başlatıyoruz.
      categoryId: project.CategoryID || '', // CategoryID kullanıyoruz
    });
  };

  // Form değişikliklerini yönet
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: value || ''
      };
      console.log('Form verisi güncellendi:', newData);
      return newData;
    });
  };

  // Proje sil
  const handleDeleteProject = async (id: string) => {
    if (window.confirm('Bu projeyi silmek istediğinizden emin misiniz?')) {
      try {
        await deleteProject(id);
        fetchData();
      } catch (error) {
        console.error('Proje silinirken hata oluştu:', error);
        setError('Proje silinirken bir hata oluştu.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <AdminNavbar />
      <div className="container mx-auto p-6 flex-grow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Portfolyo Yönetimi</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Hata!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">{editingProject ? 'Proje Düzenle' : 'Yeni Proje Ekle'}</h2>
          <form onSubmit={editingProject ? handleEditProject : handleAddProject}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-900 mb-2">Başlık *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b97e]"
                  placeholder="Proje Başlığı"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-900 mb-2">Açıklama *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b97e]"
                  rows={4}
                  placeholder="Proje Açıklaması"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-900 mb-2">Kategori *</label>
                <select
                  name="categoryId"
                  value={formData.categoryId}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b97e]"
                  required
                >
                  <option value="">Kategori Seçiniz</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-900 mb-2">Görsel URL (Opsiyonel)</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b97e]"
                placeholder="https://drive.google.com/file/d/..."
                pattern="https?://.*"
                title="Geçerli bir URL giriniz (http:// veya https:// ile başlamalı)"
              />
              <p className="mt-1 text-sm text-gray-500">
                Google Drive linkini yapıştırın. Link formatı: https://drive.google.com/file/d/[FILE_ID]/view?usp=sharing
                Not: Google Drive dosyasının "Herkes erişebilir" olarak ayarlandığından emin olun.
                Boş bırakırsanız varsayılan bir görsel kullanılacaktır.
              </p>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="submit"
                className="bg-[#38b97e] text-white px-6 py-3 rounded-lg hover:bg-[#2fa06a] focus:outline-none focus:ring-2 focus:ring-[#38b97e] focus:ring-opacity-50 transition duration-300"
              >
                {editingProject ? 'Değişiklikleri Kaydet' : 'Proje Ekle'}
              </button>
              {editingProject && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300"
                >
                  İptal
                </button>
              )}
            </div>
          </form>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Mevcut Projeler</h2>
        {loading ? (
          <p>Projeler yükleniyor...</p>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            {projects.length === 0 ? (
              <p>Henüz hiç proje yok.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Başlık</th>
                      <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Açıklama</th>
                      <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Kategori</th>
                      <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Görsel</th>
                      <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">İşlemler</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr key={project.id} className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{project.title}</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900 line-clamp-2 max-w-xs">{project.description}</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">
                          {categories.find(cat => cat.id === project.CategoryID)?.name || 'Bilinmiyor'}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">
                          {/* Backend Project modelinde Images alanı JsonIgnore olduğu için doğrudan Project objesinden gelmez.
                              Bu nedenle görseli görüntülemek için bir Placeholder veya başka bir mekanizma gerekebilir.
                              Şimdilik boş bırakıyoruz veya varsayılan bir görsel gösteriyoruz. */}
                          <span>Görsel Yönetimi Ayrı</span>
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">
                          <button
                            onClick={() => startEditing(project)}
                            className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 mr-2"
                          >
                            Düzenle
                          </button>
                          <button
                            onClick={() => handleDeleteProject(project.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
                          >
                            Sil
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPortfolyoPage;