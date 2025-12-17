// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import { Header } from "@/components/persona/Header";
import { Aside } from "@/components/persona/Aside";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

export const metadata = {
  title: "Persona",
  description: "Persona - Digital Identity",
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
