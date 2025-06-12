import axios from "axios";

const API_URL = "http://localhost:5042/api";

// API istekleri için axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// interface Category kaldırıldı
// interface Service kaldırıldı
// interface PortfolioItem kaldırıldı
// interface ContactFormData kaldırıldı

// Proje arayüzü
export interface Project {
  id: string;
  title: string;
  description: string;
  CategoryID: string;
  createdAt?: string;
  updatedAt?: string;
  isActive?: boolean;
}

// Kategori arayüzü
export interface Category {
  id: string;
  name: string;
}

// Servis arayüzü
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
}

// Projeleri getir
export const getProjects = async (): Promise<Project[]> => {
  try {
    const response = await api.get<Project[]>('/Project');
    return response.data;
  } catch (error) {
    console.error('Projeler getirilirken hata:', error);
    throw error;
  }
};

// Kategorileri getir
export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get<Category[]>('/Category');
    return response.data;
  } catch (error) {
    console.error('Kategoriler getirilirken hata:', error);
    throw error;
  }
};

// Servisleri getir
export const getServices = async (): Promise<Service[]> => {
  try {
    const response = await api.get<Service[]>('/Service');
    return response.data;
  } catch (error) {
    console.error('Servisler getirilirken hata:', error);
    throw error;
  }
};

// Servis ekle
export const addService = async (service: Omit<Service, 'id'>): Promise<Service> => {
  try {
    console.log('API isteği:', {
      url: `${API_URL}/Service`,
      method: 'POST',
      data: service
    });
    
    const response = await api.post<Service>('/Service', service);
    console.log('API yanıtı:', response.data);
    return response.data;
  } catch (error) {
    console.error('Servis eklenirken hata:', error);
    throw error;
  }
};

// Servis güncelle
export const updateService = async (id: number, service: Service): Promise<Service> => {
  try {
    console.log('API isteği:', {
      url: `${API_URL}/Service/${id}`,
      method: 'PUT',
      data: service
    });
    
    const response = await api.put<Service>(`/Service/${id}`, service);
    console.log('API yanıtı:', response.data);
    return response.data;
  } catch (error) {
    console.error('Servis güncellenirken hata:', error);
    throw error;
  }
};

// Servis sil
export const deleteService = async (id: number): Promise<void> => {
  try {
    await api.delete(`/Service/${id}`);
  } catch (error) {
    console.error('Servis silinirken hata:', error);
    throw error;
  }
};

// Proje ekle
export const addProject = async (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>): Promise<Project> => {
  try {
    console.log('API isteği:', {
      url: `${API_URL}/Project`,
      method: 'POST',
      data: project
    });
    
    const response = await api.post<Project>('/Project', project);
    console.log('API yanıtı:', response.data);
    return response.data;
  } catch (error) {
    console.error('Proje eklenirken hata:', error);
    throw error;
  }
};

// Proje güncelle
export const updateProject = async (id: string, project: Omit<Project, 'createdAt' | 'updatedAt' | 'isActive'>): Promise<Project> => {
  try {
    console.log('API isteği:', {
      url: `${API_URL}/Project/${id}`,
      method: 'PUT',
      data: project
    });
    
    const response = await api.put<Project>(`/Project/${id}`, project);
    console.log('API yanıtı:', response.data);
    return response.data;
  } catch (error) {
    console.error('Proje güncellenirken hata:', error);
    throw error;
  }
};

// Proje sil
export const deleteProject = async (id: string): Promise<void> => {
  try {
    await api.delete(`/Project/${id}`);
  } catch (error) {
    console.error('Proje silinirken hata:', error);
    throw error;
  }
};

// Mesajlar / İletişim (ProjectRequest)
export const getMessages = () => axios.get(`${API_URL}/ProjectRequest`).then(r => r.data);
export const addMessage = (data: {
  nameSurname: string;
  email: string;
  phone: string;
  message: string;
  categoryID: string;
  isActive: boolean;
  createdTime: string;
  updatedTime: string;
}) => axios.post(`${API_URL}/ProjectRequest`, data).then(r => r.data);
export const updateMessage = (id: number, data: { name: string; email: string; message: string; isRead?: boolean }) => axios.put(`${API_URL}/ProjectRequest/${id}`, data).then(r => r.data);
export const deleteMessage = (id: number) => axios.delete(`${API_URL}/ProjectRequest/${id}`);

// Belirli bir mesajı getir (opsiyonel)
export const getMessageById = (id: number) => axios.get(`${API_URL}/ProjectRequest/${id}`).then(r => r.data);

export const sendContactForm = async (data: { name: string; email: string; message: string }) => {
  await axios.post(`${API_URL}/contact`, data);
}; 