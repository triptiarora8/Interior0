import { Cormorant_Garamond, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Interior0 — Spaces Designed for Living",
    template: "%s — Interior0",
  },
  description: "Interior0 is a boutique interior design studio crafting warm, timeless residential and commercial spaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <div className="loader" aria-hidden="true">
          <span>Interior0</span>
        </div>
        <Header />
        {children}
        <Footer />
        <ScrollEffects />
      </body>
    </html>
  );
}
