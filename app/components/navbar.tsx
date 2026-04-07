"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
] as const;

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const lastY = lastScrollYRef.current;

      setIsScrolled(y > 8);

      if (y < 24) {
        setIsHidden(false);
      } else if (y > lastY + 10) {
        setIsHidden(true);
      } else if (y < lastY - 10) {
        setIsHidden(false);
      }

      lastScrollYRef.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      data-hidden={isHidden ? "true" : "false"}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-all duration-500 ease-out data-[hidden=true]:-translate-y-6 data-[hidden=true]:opacity-0 data-[hidden=false]:translate-y-0 data-[hidden=false]:opacity-100 motion-reduce:transition-none motion-reduce:transform-none"
    >
      <nav
        data-scrolled={isScrolled ? "true" : "false"}
        aria-label="Navegación principal"
        className="flex items-center gap-1 rounded-full border border-zinc-950/10 bg-white/80 p-2 shadow-lg shadow-black/5 backdrop-blur ring-1 ring-black/5 transition-all duration-500 ease-out data-[scrolled=true]:bg-white/90 data-[scrolled=true]:shadow-xl dark:border-white/15 dark:bg-black/55 dark:ring-white/10 dark:data-[scrolled=true]:bg-black/70 motion-reduce:transition-none"
      >
        <Link
          href="/"
          className="rounded-full px-3 py-2 text-sm font-extrabold tracking-tight text-zinc-950 transition-colors hover:bg-zinc-950/5 dark:text-zinc-50 dark:hover:bg-white/10"
        >
          ORCA
        </Link>

        <span className="mx-1 hidden h-6 w-px bg-zinc-950/10 dark:bg-white/15 sm:block" />

        <div className="hidden items-center gap-1 sm:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-950/5 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href="mailto:contacto@transportesorca.com"
          className="ml-1 inline-flex h-9 items-center justify-center rounded-full bg-zinc-950 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          Contáctanos
        </a>
      </nav>
    </div>
  );
}
