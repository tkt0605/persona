"use client";

import { useState } from "react";
import { AuthCard } from "@/components/persona/AuthCard";
import { SignInWithGoogle } from "@/components/persona/SigninWithGoogle";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthCard title="ログイン" subtitle="おかえりなさい。">
      <div className="space-y-5">

        {/* Email */}
        <div className="space-y-1 text-sm">
          <label className="text-xs text-slate-400">E-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="メールアドレス"
            className="w-full rounded-xl border border-white/10 bg-slate-900/40 px-3 py-2 text-sm outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400 transition"
          />
        </div>

        {/* Password */}
        <div className="space-y-1 text-sm">
          <label className="text-xs text-slate-400">Password</label>
          <input
            value={password}
            placeholder="パスワード"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full rounded-xl border border-white/10 bg-slate-900/40 px-3 py-2 text-sm outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400 transition"
          />
        </div>

        {/* Login Button */}
        <button
          className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-cyan-500/40 to-blue-500/40 border border-cyan-400/40 text-cyan-200 text-sm font-semibold hover:from-cyan-500/60 hover:to-blue-500/60 transition-all"
        >
          ログイン
        </button>
        {/* Link */}
        <p className="text-center text-xs text-slate-500 mt-4">
          アカウントがありませんか？{" "}
          <a href="/auth/signup" className="text-cyan-300 hover:underline">
            登録する
          </a>
        </p>
        <div className="flex items-center gap-2 text-[11px] text-slate-500">
          <div className="flex-1 h-px bg-white/10"></div>
          or
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* Google Login */}
        <SignInWithGoogle/> 
      </div>
    </AuthCard>
  );
}
