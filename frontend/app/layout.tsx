// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import { Header } from "@/components/persona/Header";
import { Aside } from "@/components/persona/Aside";
export const metadata = {
  title: "Persona",
  description: "Persona - Digital Identity",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="h-screen">
        <Header/>
        <div className="flex">
          <Aside/>
          <main className="flex-1">
           {children}
          </main>
        </div>
      </body>
    </html>
  );
}
