"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getPortfolio, getServices, getTestimonials } from "@/lib/api";

export default function Home() {
  const [projects, setProjects] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        try {
          const projectsRes = await getPortfolio();
          setProjects(projectsRes);
        } catch (err) {
          setProjects([]);
        }
        try {
          const servicesRes = await getServices();
          setServices(servicesRes);
        } catch (err) {
          setServices([]);
        }
        try {
          const testimonialsRes = await getTestimonials();
          setTestimonials(testimonialsRes);
        } catch (err) {
          setTestimonials([]);
        }
      } catch (err) {
        setError('Veriler yüklenirken bir hata oluştu.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero */}
      <section className="w-full bg-[#295652] flex flex-col items-center justify-center py-24 text-white">
        <Image src="/logo/3katmanbeyaz.png" alt="3Katman Digital Logo" width={120} height={120} className="mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-center">3Katman Digital<br /><span className="text-[#abf0d6] text-2xl md:text-3xl">Yazılım Ajansı</span></h1>
        <p className="text-[#abf0d6] text-lg md:text-xl mt-6 text-center max-w-2xl">Modern, hızlı ve güvenilir yazılım çözümleri ile işinizi dijitale taşıyın.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="/iletisim" className="px-8 py-4 bg-[#38b97e] text-white rounded-full font-semibold shadow-lg hover:bg-[#307869] transition-all duration-300">Hemen Başlayın</a>
          <a href="/portfolyo" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">Projelerimiz</a>
        </div>
      </section>
      {/* Hizmetler */}
      <section className="w-full max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-[#295652] text-center mb-12">Hizmetlerimiz</h2>
        {loading ? (
          <div className="text-center">Yükleniyor...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow p-8 flex flex-col items-center border-t-4 border-[#38b97e] hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-[#38b97e]/10 rounded-full flex items-center justify-center mb-6">
                  <img src={service.icon} alt={service.title} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-[#295652] mb-3">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>
      {/* Projeler */}
      <section className="w-full max-w-5xl mx-auto py-20 px-4">
        <div className="bg-gradient-to-r from-[#295652] to-[#307869] rounded-3xl p-12 text-white flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6">Projelerimizi İnceleyin</h2>
          <p className="text-[#abf0d6] text-lg max-w-2xl mb-8 text-center">Önceki projelerimizi görmek ve referanslarımızı incelemek için portfolyo sayfamıza göz atın.</p>
          {loading ? (
            <div className="text-white">Yükleniyor...</div>
          ) : error ? (
            <div className="text-red-300">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {projects.slice(0, 3).map((project) => (
                <div key={project.id} className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-all">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-[#abf0d6] mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, index: number) => (
                        <span key={index} className="px-3 py-1 bg-[#38b97e] rounded-full text-sm">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          <a href="/portfolyo" className="mt-8 px-8 py-4 bg-white text-[#295652] rounded-full font-semibold shadow-lg hover:bg-[#abf0d6] transition-all duration-300">Tüm Projeleri Gör</a>
        </div>
      </section>
      {/* Müşteri Yorumları */}
      <section className="w-full max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-[#295652] text-center mb-12">Müşteri Yorumları</h2>
        {loading ? (
          <div className="text-center">Yükleniyor...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow p-8 border-l-4 border-[#38b97e]">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#295652]">{testimonial.client_name}</h3>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        )}
      </section>
      {/* İletişim CTA */}
      <section className="w-full max-w-2xl mx-auto py-20 px-4">
        <div className="bg-white rounded-3xl shadow p-12 text-center">
          <h2 className="text-3xl font-bold text-[#295652] mb-6">Hemen Başvurun</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">Projeniz için teklif almak veya sorularınızı iletmek için iletişim formumuzu doldurun.</p>
          <a href="/iletisim" className="inline-block px-8 py-4 bg-[#295652] text-white rounded-full font-semibold shadow-lg hover:bg-[#38b97e] transition-all duration-300">İletişime Geçin</a>
        </div>
      </section>
    </div>
  );
} 