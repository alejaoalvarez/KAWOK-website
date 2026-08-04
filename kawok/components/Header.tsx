"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, img } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-parchment/85 backdrop-blur">
      <div className="wrap flex h-[70px] items-center gap-6">
        <Link href="/" className="mr-auto flex items-center gap-3" aria-label="KAWOK — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.turtle} alt="" className="w-[34px]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.word} alt="KAWOK" className="w-[118px]" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-display text-[0.78rem] uppercase tracking-[0.16em] no-underline border-b border-transparent pb-1 hover:border-terracotta"
                  style={{ fontWeight: 500, fontStretch: "100%" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact" className="btn btn-solid hidden py-3 lg:inline-block">
          Contact
        </Link>

        <button
          type="button"
          className="btn btn-ghost px-4 py-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-ink/15 lg:hidden">
          <ul className="wrap py-4">
            {[...nav, { label: "Contact", href: "/contact" }].map((item) => (
              <li key={item.href} className="border-b border-ink/10 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-[0.85rem] uppercase tracking-[0.16em] no-underline"
                  style={{ fontWeight: 500, fontStretch: "100%" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
