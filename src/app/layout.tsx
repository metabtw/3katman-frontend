import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
