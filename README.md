# 3Katman Digital - Yazılım Ajansı Web Sitesi

Modern, şık ve kullanıcı dostu bir yazılım ajansı web sitesi.  
Hizmet tanıtımı, portfolyo gösterimi ve müşteri başvuruları için tasarlandı.  
Türkçe dilinde, SEO ve hız optimizasyonuna uygun şekilde geliştirildi.

---

## 🚀 Proje Hedefi

- Yazılım ajansı olarak hizmetlerimizi tanıtmak
- Önceki projeleri sergileyerek güven oluşturmak
- Ziyaretçilerin kolayca iletişime geçmesini sağlamak
- Müşteri başvurularını alıp yönetebilmek

---

## 📄 Sayfa Yapısı

- 🏠 Anasayfa  
- 👥 Hakkımızda  
- 🛠️ Hizmetler  
- 📂 Portfolyo  
- ❓ SSS  
- 📞 İletişim  
- 🔒 Admin Paneli (Giriş ile erişim)  

---

## 🎨 Tasarım ve Marka Renkleri

Modern ve temiz tasarım. Renk paleti:

#295652 | #307869 | #38b97e | #56df9c | #abf0d6

Logo: PNG ve JPEG formatlarında mevcut

---

## 🧱 Kullanılan Teknolojiler

### Frontend
- HTML5 / CSS3 / JavaScript
- Next.js (Component yapısı ve yönlendirme için)
- Mobil uyumlu (responsive) tasarım
- SEO & hız optimizasyonu

### Backend
- C# ile yazılmış RESTful API
- Kullanıcı başvurusu gönderme ve veri yönetimi
- Admin & editör rolleri için yetkilendirme

### Veritabanı
- MySQL
- Tablolar:
  - `users`: Giriş yapan müşteriler
  - `applications`: Müşteri başvuruları
  - `projects`: Portfolyo içerikleri
  - `admins`: Yönetici/editör hesapları

---

## 👥 Kullanıcı Rolleri

- 👤 Ziyaretçi: Siteyi inceler, form doldurabilir
- 👨‍💼 Müşteri: Giriş yapıp geçmiş başvurularını görebilir (isteğe bağlı)
- 🛠️ Editör: İçerik yönetimi yapar
- 🧑‍💻 Yönetici: Tüm panele erişim sağlar

---

## ⚙️ Kurulum

### Geliştirici Ortamı (Yerel)

**Frontend:**
```bash
cd frontend
npm install
npm run dev
Backend:

Visual Studio ile açın

appsettings.json içinde MySQL bağlantı bilgilerini düzenleyin

Uygulamayı çalıştırın

Veritabanı:

MySQL kurulu olmalı

database.sql dosyasını içeri aktarın

