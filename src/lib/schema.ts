import { OFFICE_INFO, LAWYER_PROFILE } from "./data";

export function getLegalServiceSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://marceloteles.pages.dev";

  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#legalservice`,
    name: OFFICE_INFO.name,
    alternateName: OFFICE_INFO.shortName,
    description:
      "Escritório de advocacia com sede no centro de Guaíra/SP, especializado em Direito Cível, Trabalhista, Previdenciário e Consumidor. Atendimento presencial e online em processos estratégicos com foco em resultados.",
    url: siteUrl,
    telephone: `+${OFFICE_INFO.whatsapp}`,
    priceRange: "$$",
    image: `${siteUrl}/og-image_1_optimized_300.jpg`,
    logo: `${siteUrl}/logo_sem_fundo_usarnomodoclaro.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. 23, 621 - Centro",
      addressLocality: "Guaíra",
      addressRegion: "SP",
      postalCode: "14790-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -20.3181,
      longitude: -48.3128,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "11:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "13:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      OFFICE_INFO.instagramUrl,
      OFFICE_INFO.facebookUrl,
    ],
    employee: [
      {
        "@type": "Person",
        name: LAWYER_PROFILE.name,
        jobTitle: LAWYER_PROFILE.role,
        description: `${LAWYER_PROFILE.experience}, ${LAWYER_PROFILE.graduation}`,
      },
    ],
  };
}