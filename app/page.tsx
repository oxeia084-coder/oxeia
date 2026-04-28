"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Brain,
  Database,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Clock,
  Mail,
  ChevronDown,
  Zap,
  Users,
  TrendingUp,
  Headphones,
} from "lucide-react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// ========== CONFIGURAÇÃO — EDITE AQUI ==========
const CONFIG = {
  whatsapp: "5511999999999", // Substitua pelo número com DDD e código do país
  whatsappMessage: "Olá OXEIA! Gostaria de saber mais sobre suas soluções.",
  email: "contato@oxeia.com.br",
  linkedin: "https://linkedin.com/company/oxeia",
  cnpj: "XX.XXX.XXX/0001-XX",
};
// ===============================================

const cases = [
  {
    icon: Clock,
    segment: "Saúde",
    title: "Agendamento Inteligente — Clínica Médica",
    description:
      "Sistema de IA que reduziu drasticamente as ausências ao automatizar lembretes e reagendamentos via WhatsApp.",
    metric: "-68%",
    metricLabel: "em no-shows",
    tags: ["IA", "WhatsApp", "Automação"],
    color: "#67E8F9",
  },
  {
    icon: Users,
    segment: "Educação",
    title: "Gestão Acadêmica — Escola Particular",
    description:
      "Plataforma integrada que automatizou comunicados, matrículas e acompanhamento pedagógico.",
    metric: "12h",
    metricLabel: "economizadas/semana por professor",
    tags: ["Education", "CRM", "Automação"],
    color: "#A78BFA",
  },
  {
    icon: Headphones,
    segment: "E-commerce",
    title: "Atendimento Automatizado com IA",
    description:
      "Agente de IA que resolve dúvidas, rastreia pedidos e escalona casos complexos sem intervenção humana.",
    metric: "89%",
    metricLabel: "resolvidos no 1º contato",
    tags: ["AI Agent", "NLP", "B2C"],
    color: "#8B5CF6",
  },
  {
    icon: TrendingUp,
    segment: "Franquias",
    title: "CRM Customizado — Rede de Franquias",
    description:
      "CRM multi-tenant com pipelines específicos por unidade e dashboards consolidados para a matriz.",
    metric: "4x",
    metricLabel: "mais leads qualificados",
    tags: ["CRM", "Analytics", "Multi-tenant"],
    color: "#C4B5FD",
  },
];

function WhatsAppLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[rgba(139,92,246,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight text-white">
          OX<span className="text-[#8B5CF6]">EIA</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#A1A1AA]">
          <a href="#solucoes" className="hover:text-white transition-colors">
            Soluções
          </a>
          <a href="#cases" className="hover:text-white transition-colors">
            Cases
          </a>
          <a href="#contato" className="hover:text-white transition-colors">
            Contato
          </a>
        </div>
        <WhatsAppLink className="hidden md:flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
          <MessageCircle size={15} />
          Falar no WhatsApp
        </WhatsAppLink>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-pulse-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#8B5CF6] opacity-10 blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-[#6D28D9] opacity-5 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="opacity-0 animate-fade-up inline-flex items-center gap-2 bg-[#1C1C26] border border-[rgba(139,92,246,0.3)] text-[#C4B5FD] text-sm font-medium px-4 py-2 rounded-full mb-8">
          <Zap size={14} className="text-[#8B5CF6]" />
          Inteligência Artificial para Negócios
        </div>

        <h1 className="opacity-0 animate-fade-up delay-100 text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Transformamos operações em{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#C4B5FD]">
            inteligência viva.
          </span>
        </h1>

        <p className="opacity-0 animate-fade-up delay-200 text-lg md:text-xl text-[#A1A1AA] mb-10 max-w-2xl mx-auto leading-relaxed">
          Agentes de IA, CRM customizado e automações que pensam como sua empresa. Feitos sob
          medida para escolas, clínicas e negócios B2B.
        </p>

        <div className="opacity-0 animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <WhatsAppLink className="flex items-center justify-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] text-base">
            <MessageCircle size={20} />
            Falar no WhatsApp
          </WhatsAppLink>
          <a
            href="#solucoes"
            className="flex items-center justify-center gap-2 bg-[#1C1C26] border border-[rgba(139,92,246,0.3)] hover:border-[rgba(139,92,246,0.6)] text-white font-semibold px-8 py-4 rounded-xl transition-all text-base"
          >
            Ver soluções
            <ChevronDown size={18} />
          </a>
        </div>

        <div className="opacity-0 animate-fade-up delay-400 flex items-center justify-center gap-2 mt-10 text-sm text-[#71717A]">
          <span>Escolas</span>
          <span className="w-1 h-1 rounded-full bg-[#8B5CF6]" />
          <span>Clínicas</span>
          <span className="w-1 h-1 rounded-full bg-[#8B5CF6]" />
          <span>Empresas B2B</span>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solucoes" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossas soluções</h2>
          <p className="text-[#A1A1AA] text-lg max-w-xl mx-auto">
            Não adaptamos seu negócio ao software. Construímos o que você precisa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Brain,
              title: "Consultoria em IA Estratégica",
              description:
                "Mapeamos processos, identificamos oportunidades e implementamos IA onde gera retorno real. Do diagnóstico à operação.",
              bullets: [
                "Diagnóstico de processos",
                "Roadmap personalizado",
                "Implementação assistida",
                "Treinamento de equipes",
              ],
            },
            {
              icon: Database,
              title: "CRM sob medida para seu negócio",
              description:
                "Não adaptamos seu negócio ao software. Construímos o CRM que reflete exatamente seu fluxo, com IA embarcada.",
              bullets: [
                "Pipelines personalizados",
                "Automações inteligentes",
                "Integração com WhatsApp",
                "Dashboards em tempo real",
              ],
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative bg-[#13131A] border border-[rgba(139,92,246,0.1)] hover:border-[rgba(139,92,246,0.35)] rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.08)]"
              >
                <div className="w-12 h-12 bg-[#1C1C26] border border-[rgba(139,92,246,0.2)] rounded-xl flex items-center justify-center mb-6">
                  <Icon size={24} className="text-[#8B5CF6]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-[#A1A1AA] mb-6 leading-relaxed">{card.description}</p>
                <ul className="space-y-3">
                  {card.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[#A1A1AA] text-sm"
                    >
                      <CheckCircle2 size={16} className="text-[#8B5CF6] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CasesSection() {
  return (
    <section id="cases" className="py-28 px-6 bg-[#13131A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Resultados reais</h2>
          <p className="text-[#A1A1AA] text-lg max-w-xl mx-auto">
            Cada projeto é único. Estes são alguns dos resultados que entregamos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cases.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="bg-[#0A0A0F] border border-[rgba(139,92,246,0.1)] hover:border-[rgba(139,92,246,0.3)] rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: `${c.color}15` }}
                    >
                      <Icon size={20} style={{ color: c.color }} />
                    </div>
                    <span className="text-xs font-medium text-[#71717A] bg-[#1C1C26] px-2 py-1 rounded-full">
                      {c.segment}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: c.color }}>
                      {c.metric}
                    </div>
                    <div className="text-xs text-[#71717A]">{c.metricLabel}</div>
                  </div>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-[#71717A] text-sm leading-relaxed mb-4">{c.description}</p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#A1A1AA] bg-[#1C1C26] px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[400px] h-[400px] rounded-full bg-[#8B5CF6] opacity-5 blur-[100px]" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-[#71717A]">Online — respondemos em até 1h</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vamos conversar sobre seu próximo projeto?
            </h2>
            <p className="text-[#A1A1AA] text-lg mb-10">
              Sem compromisso. Entendemos seu negócio e mostramos onde a IA pode gerar resultado
              real.
            </p>
            <WhatsAppLink className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all hover:shadow-[0_0_40px_rgba(34,197,94,0.35)]">
              <MessageCircle size={24} />
              Iniciar conversa no WhatsApp
              <ArrowRight size={20} />
            </WhatsAppLink>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-[#71717A]">
              <a
                href={`mailto:${CONFIG.email}`}
                className="flex items-center gap-2 hover:text-[#A1A1AA] transition-colors"
              >
                <Mail size={15} />
                {CONFIG.email}
              </a>
              <span className="hidden sm:block">·</span>
              <span>Seg–Sex, 9h–18h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[rgba(139,92,246,0.1)] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xl font-bold text-white">
            OX<span className="text-[#8B5CF6]">EIA</span>
          </span>
          <p className="text-xs text-[#71717A] mt-1">CNPJ: {CONFIG.cnpj}</p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-[#71717A]">
          <a href="#solucoes" className="hover:text-white transition-colors">
            Soluções
          </a>
          <a href="#cases" className="hover:text-white transition-colors">
            Cases
          </a>
          <a href="#contato" className="hover:text-white transition-colors">
            Contato
          </a>
          <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">
            Política de Privacidade
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#71717A] hover:text-white transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${CONFIG.email}`}
            className="text-[#71717A] hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-6 text-center text-xs text-[#71717A]">
        © {new Date().getFullYear()} OXEIA. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <CasesSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
