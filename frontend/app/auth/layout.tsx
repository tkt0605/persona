import { main } from "framer-motion/client";

export default function AuthLayout({children} : {children: React.ReactNode}){
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0a0c14] to-[#05060a] flex items-center justify-center">
        {children}
        </main>
    );
}