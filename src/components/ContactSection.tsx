"use client";

import { useRef } from "react";
import { OFFICE_INFO } from "@/lib/data";
import { Phone, MapPin, Clock, MessageSquare, Navigation, ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsColRef = useRef<HTMLDivElement>(null);
  const mapColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. Animação de entrada dos cards de contato
      if (cardsColRef.current) {
        const contactCards = cardsColRef.current.querySelectorAll(".contact-info-card");
        if (contactCards.length > 0) {
          gsap.fromTo(
            contactCards,
            { x: -35, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsColRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 3. Animação de revelação suave do mapa
      if (mapColRef.current) {
        gsap.fromTo(
          mapColRef.current,
          { scale: 0.94, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mapColRef.current,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo (Bronze / Dourado) */}
      <GeometricLines variant="contact" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
                07 / Canais Oficiais de Atendimento
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Contato & Localização
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Sede física em Guaíra/SP com estrutura completa para atendimento presencial e suporte online para clientes em todo o território nacional.
          </p>
        </div>

        {/* Grid: Informações à Esquerda + Google Maps à Direita */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Coluna 1: Informações e Ações */}
          <div ref={cardsColRef} className="lg:col-span-5 flex flex-col justify-between space-y-5 will-change-transform">
            <div className="space-y-4">
              {/* Card WhatsApp */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)]/40 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)] text-[#1E2229] flex items-center justify-center flex-shrink-0 shadow-xs font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    WhatsApp & Telefone Direto
                  </span>
                  <a
                    href={OFFICE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-lg font-bold text-[var(--text-main)] hover:underline"
                  >
                    {OFFICE_INFO.phone}
                  </a>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Atendimento ágil para esclarecimento inicial de dúvidas e orientações preliminares.
                  </p>
                </div>
              </div>

              {/* Card Endereço com Botão de Rota Traçada */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Endereço da Sede
                  </span>
                  <p className="font-body text-sm font-semibold text-[var(--text-main)]">
                    {OFFICE_INFO.address}
                  </p>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Guaíra - São Paulo • CEP 14790-000
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)]/25">
                    <a
                      href={OFFICE_INFO.mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[var(--accent)] hover:text-[#b5952f] transition-colors group/route"
                    >
                      <Navigation className="w-3.5 h-3.5 transition-transform group-hover/route:rotate-12 text-[var(--accent)]" />
                      <span>Traçar rota no GPS</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/route:translate-x-0.5 group-hover/route:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Redes Sociais Oficiais */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Redes Oficiais
                  </span>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <a
                      href={OFFICE_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs font-semibold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                    >
                      <InstagramIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>{OFFICE_INFO.instagramHandle}</span>
                      <ArrowUpRight className="w-3 h-3 text-[var(--accent)]" />
                    </a>
                    <a
                      href={OFFICE_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs font-semibold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                    >
                      <FacebookIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>Facebook</span>
                      <ArrowUpRight className="w-3 h-3 text-[var(--accent)]" />
                    </a>
                  </div>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1.5">
                    Acompanhe informativos e novidades do mundo jurídico.
                  </p>
                </div>
              </div>

              {/* Card Horário de Funcionamento */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Horário de Atendimento
                  </span>
                  <p className="font-body text-xs sm:text-sm text-[var(--text-main)] font-semibold">
                    {OFFICE_INFO.schedule.weekdays}
                  </p>
                  <p className="font-body text-xs text-[var(--text-muted)] mt-0.5">
                    Sábado: {OFFICE_INFO.schedule.saturday} • Domingo: {OFFICE_INFO.schedule.sunday}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 gap-2 shadow-[0_4px_20px_rgba(37,211,102,0.35)] text-sm sm:text-base cursor-pointer hover-lift transition-all flex items-center justify-center font-bold"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Falar com um advogado no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Google Maps Interativo com Badge e Barra Flutuante de Rota */}
          <div ref={mapColRef} className="lg:col-span-7 flex flex-col justify-between will-change-transform">
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden border border-[var(--border-subtle)]/40 shadow-md">
              <iframe
                title="Localização do Escritório Marcelo Teles Advocacia em Guaíra SP"
                src={OFFICE_INFO.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[15%] contrast-[1.05]"
              />

              {/* Badge de Identificação no Topo do Mapa */}
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[var(--bg-card)]/95 backdrop-blur-md border border-[var(--border-subtle)]/30 text-xs shadow-md">
                <span className="font-heading font-bold text-[var(--text-main)] block">
                  {OFFICE_INFO.name}
                </span>
                <span className="text-[var(--text-muted)] font-body">
                  {OFFICE_INFO.addressShort}
                </span>
              </div>

              {/* Botão de Rota Traçada Flutuante na Base do Mapa */}
              <div className="absolute bottom-4 inset-x-4 sm:left-auto sm:right-4 p-2 sm:p-2.5 rounded-2xl bg-[var(--bg-card)]/95 backdrop-blur-md border border-[var(--border-subtle)]/40 shadow-xl flex items-center justify-between sm:justify-start gap-3">
                <div className="hidden sm:block pl-2 pr-1">
                  <span className="font-heading text-xs font-bold text-[var(--text-main)] block">
                    Como Chegar
                  </span>
                  <span className="text-[0.6875rem] text-[var(--text-muted)] font-body block">
                    Guaíra/SP e região
                  </span>
                </div>
                <a
                  href={OFFICE_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[var(--accent)] hover:bg-[#b5952f] hover:scale-105 text-[#1E2229] py-2.5 px-4 text-xs font-bold gap-2 shadow-md inline-flex items-center justify-center w-full sm:w-auto transition-all cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#1E2229]" />
                  <span>Traçar Rota no Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}