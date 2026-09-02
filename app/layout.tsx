import type { Metadata } from "next";
import { Hind, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
});

const hind = Hind({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Breash Supplies | Reliable Medical Supplies Uganda", template: "%s | Breash Supplies" },
  description: "Quality medical equipment, consumables, laboratory supplies and healthcare solutions for organisations across Uganda.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${hind.variable} antialiased`}><Header />{children}<Footer /></body>
    </html>
  );
}
