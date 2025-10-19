import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/scroll-to-top";
import 'aos/dist/aos.css';
import { AOSProvider } from "@/providers/AOSProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RemoteRecruit – Hire Global Talent With Video",
  description: "Post Jobs For Free Worldwide. Hire Global Talent With Video.",
  authors: [{ name: "RemoteRecruit" }],
  metadataBase: new URL("https://remoterecruit.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://remoterecruit.vercel.app/",
    title: "RemoteRecruit – Hire Global Talent With Video",
    description: "Post Jobs For Free Worldwide. Hire Global Talent With Video.",
    siteName: "RemoteRecruit",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "RemoteRecruit - Hire Global Talent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RemoteRecruit – Hire Global Talent With Video",
    description: "Post Jobs For Free Worldwide. Hire Global Talent With Video.",
    images: ["/og-image.webp"],
    creator: "@RemoteRecruit",
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>
        <AOSProvider>
          {children}
          <ScrollToTop />
        </AOSProvider>
      </body>
    </html>
  );
}