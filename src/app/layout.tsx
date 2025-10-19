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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} antialiased`}
      >
        <AOSProvider>
          {children}
        <ScrollToTop />
        </AOSProvider>
        
      </body>
    </html>
  );
}
