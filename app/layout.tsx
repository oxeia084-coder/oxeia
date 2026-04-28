import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OXEIA — Inteligência Artificial para Negócios B2B",
  description:
    "Consultoria em IA e CRM customizado para escolas, clínicas e empresas. Transformamos operações em inteligência viva.",
  keywords: [
    "IA empresarial",
    "CRM customizado",
    "agentes de IA",
    "automação B2B",
    "consultoria inteligência artificial",
  ],
  openGraph: {
    title: "OXEIA — Inteligência Artificial para Negócios B2B",
    description:
      "Consultoria em IA e CRM customizado para escolas, clínicas e empresas.",
    type: "website",
    locale: "pt_BR",
  },
  // ⚠️ SUBSTITUIR pelo código fornecido pelo Meta Business Manager
  // Exemplo: { name: "facebook-domain-verification", content: "SEU_CODIGO_AQUI" }
  other: {
    "facebook-domain-verification": "COLE_SEU_CODIGO_DE_VERIFICACAO_AQUI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0F] text-[#F5F5F7]">
        {children}
      </body>
    </html>
  );
}
