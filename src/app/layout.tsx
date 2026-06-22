import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "DNA da Liderança | Izabela Holanda",
  description:
    "Descubra as 3 habilidades que todo líder de sucesso desenvolveu para engajar o time e entregar resultados. Método criado por psicóloga e Mestra pela UFC.",
  openGraph: {
    title: "DNA da Liderança | Izabela Holanda",
    description:
      "Descubra as 3 habilidades que todo líder de sucesso desenvolveu para engajar o time e entregar resultados.",
    images: ["/hero-dna.webp"],
    type: "website",
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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
