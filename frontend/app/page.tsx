// app/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useReducer, useEffect } from "react";

export default function IndexPage() {
  const router = useRouter();
  const handleStart = () => {
    // TODO: ログイン状態を見て /persona/factory or /home に振り分け
    router.push("/persona/factory");
  };

  return (
    <main className="min-h-screen  flex items-center justify-center px-6">
      <section className="text-center max-w-3xl mx-auto">
        
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-blue-500  drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
          Persona
        </h1>

        {/* Catch Copy */}
        <p className="mt-6 text-xl text-slate-300 leading-relaxed font-light">
          あなたのデジタルアイデンティティを、  
          <span className="text-cyan-300 font-normal"> 美しくシンプルに。</span>
        </p>

        {/* Description */}
        <p className="mt-4 text-sm text-slate-400 leading-relaxed">
          Persona は、あなたの “デジタル上の自分” を整理し、  
          明確にし、表現するための Identity Platform です。
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button onClick={()=> router.push('/home')} className="px-6 py-2 rounded-full border border-cyan-400/30 text-cyan-300 hover:bg-cyan-600/10 transition-all duration-300 backdrop-blur">
            はじめる
          </button>
        </div>
      </section>
    </main>


  );
}
