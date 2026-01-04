import type { Metadata } from "next";
import { Roboto, Ropa_Sans, Cinzel } from "next/font/google";
import "./globals.css";

// Cinzel as alternative to Kapakana for artsy, elegant headers
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Roboto for standard headers
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["700"],
});

// Ropa Sans for paragraph text
const ropaSans = Ropa_Sans({
  variable: "--font-ropa-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "To Brown and Her People",
  description: "A memorial and community platform for Brown University students to share their stories, find support, and honor those affected by the December 13, 2025 tragedy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${roboto.variable} ${ropaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
