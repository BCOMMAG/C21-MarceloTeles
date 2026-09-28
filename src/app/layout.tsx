import type { Metadata } from "next";
import { Raleway, Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://marceloteles.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Marcelo Teles Advocacia | Direito Cível, Trabalhista, Previdenciário e Consumidor - Guaíra SP",
    template: "%s | Marcelo Teles Advocacia",
  },
  description:
    "Marcelo Teles Advocacia. Assessoria jurídica com atuação estratégica e foco em resultados em Direito Cível, Trabalhista, Previdenciário e do Consumidor. Atendimento presencial em Guaíra/SP e online para todo o Brasil.",
  keywords: [
    "advogado guaira sp",
    "marcelo teles advogado",
    "marcelo teles advocacia",
    "advogado trabalhista guaira",
    "advogado direito civil guaira sp",
    "advogado previdenciario inss guaira",
    "advogado consumidor guaira sp",
    "advocacia guaira sp",
  ],
  authors: [{ name: "Dr. Marcelo Teles" }],
  creator: "Dr. Marcelo Teles",
  publisher: "Marcelo Teles Advocacia",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Marcelo Teles Advocacia | Direito Cível, Trabalhista, Previdenciário e Consumidor - Guaíra SP",
    description:
      "Assessoria jurídica estratégica e foco em resultados. Atendimento presencial no centro de Guaíra/SP e online por videoconferência e WhatsApp para todo o Brasil.",
    siteName: "Marcelo Teles Advocacia",
    images: [
      {
        url: "/og-image_1_optimized_300.jpg",
        width: 1200,
        height: 630,
        alt: "Marcelo Teles Advocacia - Direito Cível, Trabalhista, Previdenciário e Consumidor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcelo Teles Advocacia | Guaíra SP",
    description:
      "Atuação estratégica em Direito Cível, Trabalhista, Previdenciário e Consumidor. Sede em Guaíra/SP e atendimento online em todo o Brasil.",
    images: ["/og-image_1_optimized_300.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-apple-touch-icon18x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${raleway.variable} ${merriweather.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body selection:bg-[var(--accent)] selection:text-white">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}