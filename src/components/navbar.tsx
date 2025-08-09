"use client";

import Link from "next/link";
import { Menu, X, Rocket } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const BRAND_PRIMARY = "#1F3B61";
const BRAND_SECONDARY = "#0179D4";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#events", label: "Events" },
    { href: "#about", label: "About" },
    { href: "#members", label: "Members" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border drop-shadow-2xl bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 w-2/3 mx-auto rounded-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="#" className="flex items-center gap-2">
          <span className="font-bold text-slate-800 text-lg">MLSA MIET</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div>
          <Button
            asChild
            className="rounded-full px-5 font-semibold text-white shadow-lg transition hover:shadow-xl"
            style={{ backgroundColor: BRAND_SECONDARY }}
          >
            <Link href="#volunteer">Go to MLSA MIET</Link>
          </Button>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border bg-white text-slate-700"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
          />
          <div className="ml-auto h-full w-80 bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md"
                  style={{ background: BRAND_PRIMARY }}
                >
                  <Rocket className="h-5 w-5 text-white" />
                </span>
                <span className="font-semibold text-slate-800">MLSA MIET</span>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-white text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#volunteer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 font-semibold text-white shadow-lg"
                style={{ backgroundColor: BRAND_SECONDARY }}
              >
                Volunteer
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
