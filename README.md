# 3KATMAN PROJESİ – FULLSTACK (Frontend + Backend)

<p align="center">
  <a href="https://github.com/metabtw/3katman-frontend/stargazers">
    <img src="https://img.shields.io/github/stars/metabtw/3katman-frontend?style=for-the-badge" alt="GitHub Stars"/>
  </a>
  <a href="https://github.com/metabtw/3katman-frontend/network/members">
    <img src="https://img.shields.io/github/forks/metabtw/3katman-frontend?style=for-the-badge" alt="GitHub Forks"/>
  </a>
  <a href="https://github.com/metabtw/3katman-frontend/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/metabtw/3katman-frontend?style=for-the-badge" alt="License"/>
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/build-passing-green?style=for-the-badge" alt="Build Passing"/>
  </a>
</p>

---

## 🔧 Kullanılan Teknolojiler (Tech Stack)

### 🌐 Frontend

<p align="left">
  <a href="https://nextjs.org/" target="_blank"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/></a>
  <a href="https://reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/></a>
  <a href="https://redux-toolkit.js.org/" target="_blank"><img src="https://img.shields.io/badge/Redux_Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit"/></a>
  <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/></a>
  <a href="https://sass-lang.com/" target="_blank"><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass"/></a>
</p>

### 💾 Backend

<p align="left">
  <img src="https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt=".NET" />
  <img src="https://img.shields.io/badge/ASP.NET_Core-512BD4?style=for-the-badge&logo=.net&logoColor=white" alt="ASP.NET Core"/>
  <img src="https://img.shields.io/badge/Entity_Framework_Core-6DB33F?style=for-the-badge&logo=entity-framework&logoColor=white" alt="EF Core"/>
  <img src="https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white" alt="SQL Server"/>
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger"/>
</p>

---

## 📑 İçindekiler (Table of Contents)

- [Proje Tanımı](#proje-tanımı)
- [Frontend Kurulum](#frontend-kurulum)
- [Backend Kurulum](#backend-kurulum)
- [Kullanım](#kullanım)
- [API Endpoint Listesi](#api-endpoint-listesi)
- [Test](#test)

---

## 📌 Proje Tanımı

**3Katman**; modern web teknolojileriyle hazırlanmış, kurumsal düzeyde bir proje vitrin ve iletişim platformudur. Teknofest sürecinde geliştirilen bu proje, kurumsal kimlik sunumu ve iletişim taleplerini API aracılığıyla yönetmeyi amaçlar.

---

## 🚀 Frontend Kurulum

### Gereksinimler

- Node.js v16+
- npm veya yarn

### Adımlar

```bash
# 1. Repo'yu klonla
git clone https://github.com/metabtw/3katman-frontend.git

# 2. Dizine gir
cd 3katman-frontend

# 3. Bağımlılıkları yükle
npm install
# veya
yarn install

# 4. Geliştirme sunucusunu başlat
npm run dev
# veya
yarn dev

⚙️ Backend Kurulum
Gereksinimler
.NET 7 SDK

SQL Server

Adımlar

# 1. Backend dizinine geç
cd 3KatmanDigital_API

# 2. NuGet paketlerini yükle
dotnet restore

# 3. Veritabanı migrasyonu yap
dotnet ef database update

# 4. API'yi başlat
dotnet run
Swagger Arayüzü
Projeyi çalıştırdıktan sonra https://localhost:5001/swagger (veya port numaranıza göre) adresinde tüm API uçlarını test edebilirsiniz.

🔄 Kullanım
Frontend üzerinden iletişim formu doldurulduğunda, bilgiler aşağıdaki formatta backend API’ye gönderilir:

json
{
  "nameSurname": "Muhammed Emin",
  "email": "ornek@example.com",
  "phone": "05301234567",
  "message": "Proje hakkında bilgi almak istiyorum.",
  "categoryID": "45CD5629-8784-4D78-900D-E0B01728E7C1",
  "isActive": true,
  "createdTime": "2025-07-04T10:00:00.000Z",
  "updatedTime": "2025-07-04T10:00:00.000Z"
}

📡 API Endpoint Listesi
Metot	Route	Açıklama

GET	/api/ProjectRequest	Tüm proje isteklerini getirir
GET	/api/ProjectRequest/{id}	Belirli bir proje isteğini getirir
POST	/api/ProjectRequest	Yeni proje isteği oluşturur
PUT	/api/ProjectRequest/{id}	Proje isteğini günceller
DELETE	/api/ProjectRequest/{id}	Proje isteğini siler
GET	/api/ProjectRequest/category/{id}	Belirli kategoriye ait istekleri getirir

✅ Test
Frontend Test
Proje Jest ve Testing Library desteğiyle gelir:

npm run test
# veya
yarn test
Backend Test (Swagger Üzerinden)
API uçlarını test etmek için Swagger UI arayüzünü kullanabilirsiniz:
https://localhost:5001/swagger
