import type { Metadata } from "next";
import "./globals.css";

//fonts
import { Instrument_Sans } from "next/font/google";

const instrument_sans = Instrument_Sans({
  variable: "--font-instrument_sans",
});

export const metadata: Metadata = {
  title: "Tyler | @tylrvx",
  description: "Artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrument_sans.variable}`}>{children}</body>
    </html>
  );
}
