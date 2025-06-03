import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3Katman Digital - Yazılım Ajansı",
  description: "Modern, hızlı ve güvenilir yazılım çözümleri ile işinizi dijitale taşıyın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className + " bg-[#f8fdfa] min-h-screen"}>
        <Header />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 