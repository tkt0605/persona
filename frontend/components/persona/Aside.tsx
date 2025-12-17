// components/persona/Sidebar.tsx
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
export function Aside() {
  const pathname = usePathname();

  const items = [
    { href: "/home", label: "Home" },
    { href: "/profile", label: "Profile" },
    { href: "/editor", label: "Editor" },
  ];

  return (
    <aside className="hidden md:flex md:w-50 flex-col h-screen border-r border-gray-200 dark:border-gray-700  bg-white-950/80">
      <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href + item.label}
              href={item.href}
              className={`block rounded-md px-3 py-2 text-sm ${active
                  ? "bg-gray-200 dark:bg-gray-800"
                  : " hover:bg-gray-200/70 dark:hover:bg-gray-800/70"
                }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
