//app/(app)/layout.tsx

"use client";
import type { ReactNode } from "react";
import { Header } from "@/components/persona/Header";
import { Aside } from "@/components/persona/Aside";
import Head from "next/head";

interface DashboardLayoutProps {
    children: React.ReactNode;
}
export default function DashboardLayout({children}: DashboardLayoutProps){
    return(
        <div className="">
            <Header/>
            <div className="flex">
                <Aside/>
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
}