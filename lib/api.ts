import axios from "axios";

const API_BASE = "http://localhost:5042/api";

interface Category {
  id: number;
  name: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const getCategories = async (): Promise<Category[]> => (await axios.get<Category[]>(`${API_BASE}/Category`)).data;
export const addCategory = async (data: any): Promise<Category> => (await axios.post<Category>(`${API_BASE}/Category`, data)).data;
export const getServices = async (): Promise<Service[]> => (await axios.get<Service[]>(`${API_BASE}/Service`)).data;
export const addService = async (data: Omit<Service, 'id'>): Promise<Service> => (await axios.post<Service>(`${API_BASE}/Service`, data)).data;
export const deleteService = async (id: number): Promise<void> => { await axios.delete(`${API_BASE}/Service/${id}`); };
export const getPortfolio = async (): Promise<PortfolioItem[]> => (await axios.get<PortfolioItem[]>(`${API_BASE}/Project`)).data;
export const addPortfolio = async (data: Omit<PortfolioItem, 'id'>): Promise<PortfolioItem> => (await axios.post<PortfolioItem>(`${API_BASE}/Project`, data)).data;
export const deletePortfolio = async (id: number): Promise<void> => { await axios.delete(`${API_BASE}/Project/${id}`); };
export const getTestimonials = async (): Promise<any[]> => (await axios.get<any[]>(`${API_BASE}/Testimonial`)).data;

export const sendContactForm = async (data: ContactFormData): Promise<void> => {
  await axios.post(`${API_BASE}/contact`, data);
}; 