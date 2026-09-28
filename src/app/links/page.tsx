"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import {
  MessageSquare,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Briefcase,
  FileCheck2,
  Scale,
  ShoppingBag,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function LinksPage() {
  const quickLinks = [
    {
      id: "whatsapp",
      title: "WhatsApp Oficial com Advogado",
      subtitle: "Atendimento imediato e orientações preliminares",
      href: OFFICE_INFO.whatsappUrl,
      icon: WhatsAppIcon,
      highlight: true,
    },
    {
      id: "website",
      title: "Website Institucional",
      subtitle: "Conheça nossa estrutura, áreas e diferenciais",
      href: "/",
      icon: Globe,
      highlight: false,
    },
    {
      id: "civel",
      title: "Direito Cível & Contratos",
      subtitle: "Indenizações, contratos e inventários",
      href: `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
        "Olá, Dr. Marcelo Teles! Gostaria de consultoria sobre questões de Direito Cível."
      )}`,
      icon: Scale,
      highlight: false,
    },
    {
      id: "trabalhista",
      title: "Direito do Trabalho",
      subtitle: "Rescisão, horas extras, verbas e direitos",
      href: `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
        "Olá, Dr. Marcelo Teles! Gostaria de uma análise sobre os meus direitos trabalhistas."
      )}`,
      icon: Briefcase,
      highlight: false,
    },
    {
      id: "previdenciario",
      title: "Direito Previdenciário & INSS",
      subtitle: "Aposentadorias, auxílios e benefícios",
      href: `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
        "Olá, Dr. Marcelo Teles! Gostaria de orientações sobre benefícios do INSS e aposentadoria."
      )}`,
      icon: FileCheck2,
      highlight: false,
    },
    {
      id: "consumidor",
      title: "Direito do Consumidor",
      subtitle: "Cobranças indevidas e danos morais",
      href: `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
        "Olá, Dr. Marcelo Teles! Gostaria de consultoria jurídica sobre Direito do Consumidor."
      )}`,
      icon: ShoppingBag,
      highlight: false,
    },
    {
      id: "instagram",
      title: "Instagram Institucional",
      subtitle: `${OFFICE_INFO.instagramHandle} • Conteúdo jurídico diário`,
      href: OFFICE_INFO.instagramUrl,
      icon: InstagramIcon,
      highlight: false,
    },
    {
      id: "facebook",
      title: "Facebook Oficial",
      subtitle: "Informativos e atualizações do escritório",
      href: OFFICE_INFO.facebookUrl,
      icon: FacebookIcon,
      highlight: false,
    },
  ];

  const specialties = [
    "Direito Cível",
    "Direito do Trabalho",
    "Direito Previdenciário",
    "Direito do Consumidor",
  ];

  return (
    <main className="min-h-[100dvh] lg:h-screen lg:max-h-screen lg:overflow-hidden w-screen max-w-full bg-[#FDFBF5] text-[#1E2229]">
      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50 - Sem Scroll - Estilo C08-Sloane) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
        
        {/* LADO ESQUERDO: Fundo Escuro com Logo DOBRADA e Identidade Visual */}
        <div className="relative bg-[#1E2229] text-white flex flex-col justify-between p-8 xl:p-12 h-full overflow-hidden border-r border-[#D4AF37]/20">
          <div className="absolute inset-0 pointer-events-none opacity-15">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-links-desktop" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#D4AF37" strokeWidth="0.75" />
                  <circle cx="0" cy="0" r="1.5" fill="#D4AF37" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-links-desktop)" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#15181E]/80 backdrop-blur-md text-xs font-heading tracking-wider text-[#D4AF37]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Advocacia Estratégica & Resolutiva</span>
            </div>
            <span className="text-[0.6875rem] font-heading uppercase tracking-widest text-[#D4AF37]">
              Guaíra/SP • Presencial e Online
            </span>
          </div>

          {/* Logo Dobrada no Lado Esquerdo (Clique volta para a Home) */}
          <div className="relative z-10 my-auto py-2 flex flex-col items-center text-center w-full">
            <Link
              href="/"
              className="w-full max-w-[540px] xl:max-w-[620px] block mx-auto cursor-pointer group focus:outline-none mb-4"
              aria-label="Ir para a página inicial"
            >
              <div className="relative w-full h-56 xl:h-64 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo_sem_fundo_usarnomodoescuro.png"
                  alt={OFFICE_INFO.name}
                  fill
                  priority
                  className="object-contain object-center drop-shadow-md"
                  sizes="(min-width: 1280px) 620px, 540px"
                />
              </div>
            </Link>

            <div className="h-0.5 w-16 bg-[#D4AF37]/40 mb-4" />

            <h1 className="font-heading text-lg xl:text-xl font-semibold max-w-md leading-snug text-white">
              {OFFICE_INFO.tagline}
            </h1>

            <p className="font-body text-xs xl:text-sm text-gray-300 max-w-sm mt-3 leading-relaxed">
              Atuação jurídica personalizada, técnica e resolutiva em Direito Cível, Trabalhista, Previdenciário e do Consumidor.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-gray-400 font-body pt-3 border-t border-white/10">
            <p>{OFFICE_INFO.addressShort}</p>
            <p className="text-[0.6875rem] text-[#D4AF37]/80">Provimento 205/2021 CFOAB</p>
          </div>
        </div>

        {/* LADO DIREITO: Fundo Claro com Logo + Canais de Atendimento */}
        <div className="bg-[#FDFBF5] flex flex-col justify-between p-6 xl:p-8 h-full overflow-y-auto">
          <div className="max-w-md mx-auto w-full flex flex-col justify-center my-auto space-y-2.5 xl:space-y-3 py-3">
            
            {/* Header com Logo no Lado Direito (Clique volta para a Home) */}
            <div className="flex flex-col items-center text-center w-full">
              <Link
                href="/"
                className="w-full max-w-[420px] xl:max-w-[460px] block mx-auto cursor-pointer group focus:outline-none mb-1.5"
                aria-label="Ir para a página inicial"
              >
                <div className="relative w-full h-28 xl:h-32 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/logo_sem_fundo_usarnomodoclaro.png"
                    alt={OFFICE_INFO.name}
                    fill
                    priority
                    className="object-contain object-center drop-shadow-xs"
                    sizes="(min-width: 1280px) 460px, 420px"
                  />
                </div>
              </Link>
              <span className="font-heading uppercase text-[0.6875rem] tracking-widest text-[#85714D] block mb-0.5 font-bold">
                Acesso Imediato
              </span>
              <h2 className="font-heading text-xl xl:text-2xl font-bold text-[#1E2229]">
                Canais Oficiais de Atendimento
              </h2>
              <p className="font-body text-xs text-gray-600 mt-0.5">
                Escolha o canal desejado para se comunicar diretamente com nossa equipe jurídica.
              </p>
            </div>

            {/* Lista de Links */}
            <div className="space-y-1.5">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                const isInternal = item.href.startsWith("/");
                const buttonClasses = `w-full p-2.5 xl:p-3 rounded-xl flex items-center justify-between group transition-all duration-300 border ${
                  item.highlight
                    ? "bg-[#25D366] hover:bg-[#20ba59] text-white border-transparent shadow-sm hover:shadow-md"
                    : "bg-white text-[#1E2229] border-[#85714D]/25 hover:border-[#D4AF37] shadow-2xs hover:shadow-xs"
                }`;

                const content = (
                  <>
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          item.highlight ? "bg-white/20 text-white" : "bg-[#F5F2EB] text-[#85714D]"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left">
                        <span className="font-heading text-xs sm:text-sm font-bold block leading-tight">
                          {item.title}
                        </span>
                        <span
                          className={`font-body text-[0.6875rem] block truncate max-w-[260px] ${
                            item.highlight ? "text-white/90" : "text-gray-500"
                          }`}
                        >
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        item.highlight ? "text-white" : "text-[#85714D] group-hover:text-[#1E2229]"
                      }`}
                    />
                  </>
                );

                return isInternal ? (
                  <Link key={item.id} href={item.href} className={buttonClasses}>
                    {content}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses}
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            {/* Caixa de Especialidades */}
            <div className="p-2.5 rounded-xl border border-[#85714D]/30 bg-white/70">
              <div className="flex items-center gap-1.5 text-[0.6875rem] uppercase tracking-wider font-heading text-[#1E2229] font-bold mb-1">
                <Briefcase className="w-3.5 h-3.5 text-[#85714D]" />
                <span>Especialidades Jurídicas</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md text-[0.6875rem] font-body bg-[#F5F2EB] text-[#1E2229] border border-[#85714D]/25 font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="text-center text-[0.6875rem] font-body text-gray-500 pt-2 border-t border-gray-200">
            {OFFICE_INFO.address} • © {new Date().getFullYear()} {OFFICE_INFO.name}
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE (100% Fit Sem Scroll + Logo Dobrada Centralizada) ===================== */}
      <div className="lg:hidden relative flex flex-col justify-between h-[100dvh] max-h-[100dvh] w-full px-4 py-2.5 sm:py-3 overflow-hidden bg-gradient-to-b from-[#FDFBF5] via-[#FAF7F0] to-[#F5F2EB]">
        {/* Linhas Geométricas Sutis de Fundo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="goldGeomGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#85714D" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#85714D" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            {/* Linhas Diagonais */}
            <line x1="-15%" y1="15%" x2="115%" y2="40%" stroke="url(#goldGeomGrad1)" strokeWidth="1" />
            <line x1="-15%" y1="80%" x2="115%" y2="55%" stroke="url(#goldGeomGrad1)" strokeWidth="1" />
            <circle cx="90%" cy="15%" r="70" fill="none" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.2" strokeDasharray="3 3" />
            <circle cx="10%" cy="85%" r="80" fill="none" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.2" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Topo Mobile - Logo Dobrada Centralizada (Clique volta para a Home) */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center pt-1 pb-1">
          <Link
            href="/"
            className="w-[88vw] max-w-[320px] block mx-auto cursor-pointer group focus:outline-none mb-1"
            aria-label="Ir para a página inicial"
          >
            <div className="relative w-full h-20 sm:h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo_sem_fundo_usarnomodoclaro.png"
                alt={OFFICE_INFO.name}
                fill
                priority
                className="object-contain object-center drop-shadow-xs"
                sizes="(max-width: 768px) 320px, 280px"
              />
            </div>
          </Link>

          {/* Áreas de Atuação em uma Linha Pequena Compacta */}
          <div className="flex flex-wrap items-center justify-center gap-1 max-w-sm mx-auto px-1">
            {specialties.map((spec, i) => (
              <span
                key={i}
                className="text-[0.625rem] px-2 py-0.5 rounded-full bg-white text-[#1E2229] font-body border border-[#85714D]/25 font-semibold shadow-2xs"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Links Mobile - Distribuídos harmoniosamente ocupando o espaço */}
        <div className="relative z-10 w-full flex-1 flex flex-col justify-between py-1.5 max-w-md mx-auto">
          {quickLinks.slice(0, 7).map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center justify-between px-3 py-2 rounded-xl border transition-all duration-200 active:scale-[0.98] ${
                  item.highlight
                    ? "bg-[#25D366] text-white border-transparent shadow-[0_3px_12px_rgba(37,211,102,0.3)]"
                    : "bg-white/95 backdrop-blur-xs hover:bg-white border-[#85714D]/25 text-[#1E2229] shadow-2xs"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.highlight ? "bg-white/20 text-white" : "bg-[#F5F2EB] border border-[#85714D]/20 text-[#85714D]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-heading font-bold text-xs leading-tight truncate">{item.title}</h2>
                    <p
                      className={`text-[0.625rem] font-body truncate ${
                        item.highlight ? "text-white/90" : "text-gray-500"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-current flex-shrink-0 ml-1.5" />
              </a>
            );
          })}
        </div>

        {/* Rodapé Mobile Compacto */}
        <div className="relative z-10 text-center text-[0.625rem] text-gray-500 font-body pt-1 pb-0.5">
          <p>{OFFICE_INFO.addressShort} • © {new Date().getFullYear()} {OFFICE_INFO.name}</p>
        </div>
      </div>
    </main>
  );
}