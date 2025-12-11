export function AuthCard({
    title,
    subtitle,
    children
  }: {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
  }) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0c14] to-[#05060a]">
        <div className="relative w-full mx-auto px-8 py-10 rounded-3xl border border-white/10 bg-slate-950/40 shadow-[0_0_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">
  
          {/* 背面グロウ */}
          <div className="absolute inset-x-0 -top-12 h-32 bg-cyan-400/20 blur-3xl opacity-30"></div>
  
          <h1 className="text-center text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">
            {title}
          </h1>
  
          {subtitle && (
            <p className="text-center text-sm text-slate-400 mb-8">
              {subtitle}
            </p>
          )}
  
          {children}
        </div>
      </main>
    );
  }
  