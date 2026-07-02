import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { PixelInit } from "./components/pixel-init";
import { TrackingEvents } from "./components/tracking-events";
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
      <head>
        <Script id="fb-pixel" strategy="beforeInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <PixelInit />
        <TrackingEvents />
      </body>
    </html>
  );
}
