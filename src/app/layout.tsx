import type { Metadata, Viewport } from "next";
import { Manrope, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F6F4EF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://morgan-entrepreneur.com"),
  title: "Morgan Bocovo : Entrepreneur & Conseiller en Projets d'Importation",
  description:
    "Portfolio professionnel de Morgan Bocovo. Sécurisation intégrale de vos approvisionnements et circuits d'importation depuis la Chine et la France vers le Bénin.",
  keywords: [
    "Morgan Bocovo",
    "Conseil Importation Bénin",
    "Sourcing Chine Bénin",
    "Sécurisation Alipay WeChat",
    "Transit Cotonou",
    "GDIZ Bénin",
    "Commerce international Afrique de l'Ouest",
  ],
  authors: [{ name: "Morgan Bocovo" }],
  creator: "Morgan Bocovo",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://morgan-entrepreneur.com",
    title: "Morgan Bocovo : Entrepreneur & Conseiller en Projets d'Importation",
    description:
      "Sécuriser chaque étape de vos approvisionnements pour transformer vos projets d'import en réussites durables.",
    siteName: "Morgan Bocovo",
    images: [
      {
        url: "/images/portrait-original.jpeg",
        width: 1366,
        height: 2048,
        alt: "Portrait professionnel de Morgan Bocovo",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${dmSans.variable} ${cormorant.variable}`}
    >
      <body className="bg-ivoire text-encre antialiased selection:bg-cuivre/20 selection:text-encre font-sans">
        {children}
      </body>
    </html>
  );
}
