import type { Metadata } from "next";
import "./globals.css";

//fonts
import {
  Nunito_Sans,
  Audiowide,
  IBM_Plex_Mono,
  Instrument_Serif,
  Instrument_Sans,
} from "next/font/google";

const instrument_serif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument_serif",
});

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
      <body
        className={`${instrument_serif.variable} ${instrument_sans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
