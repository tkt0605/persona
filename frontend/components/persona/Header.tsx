"use client";

import { useState } from "react";


export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-3 z-30  backdrop-blur-md border-b border-white/5">
      {/* Left: App Name */}
      <h1 className="text-2xl md:text-2xl font-extrabold tracking-tight text-blue-500  drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
        Persona
      </h1>

      {/* Right: User Menu */}
      <div className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          className="p-2 rounded-full "
        >
          {/* シンプルな user アイコン */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 p-3 rounded-lg border border-white/10 bg-gray-200/30 backdrop-blur-lg text-xs shadow-xl animate-fade-in">
            {/* Email */}
            <div className="px-3 py-3 border-b border-white/5">
              <div className="text-[11px] mb-0.5">
                サインイン中
              </div>
              <div className="truncate">Emailアドレス</div>
            </div>

            {/* Logout */}
            <button
              onClick={() => alert("TODO: logout")}
              className="w-full px-3 py-2 text-left text-red-300 hover:bg-white/5 transition"
            >
              ログアウト
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
