import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

//fonts
import { Nunito_Sans, Audiowide, IBM_Plex_Mono } from "next/font/google";

const nunito_sans = Nunito_Sans({
  variable: "--font-nunito_sans",
});

const audiowide = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
});

const ibm_plex_mono = IBM_Plex_Mono({
  weight: "400",
  variable: "--font-ibm_plex_mono",
});

export const metadata: Metadata = {
  title: "@tylrvx",
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
        className={`${nunito_sans.variable} ${audiowide.variable} ${ibm_plex_mono.variable}`}
      >
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
