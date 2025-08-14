"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const BRAND_PRIMARY = "#1F3B61";
const BRAND_SECONDARY = "#0179D4";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#events", label: "Events" },
    { href: "#about", label: "About" },
    { href: "#members", label: "Members" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-5 z-50 border drop-shadow-2xl bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 md:w-2/3 w-80 mx-auto rounded-lg"
    >
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
            className="rounded-full px-5 font-semibold text-white shadow-lg hidden md:block transition hover:shadow-xl"
            style={{ backgroundColor: BRAND_SECONDARY }}
          >
            <Link className="bg-gradient-to-b from-primary/50 to-secondary text-white" href="#volunteer">Go to MLSA MIET</Link>
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border border-slate-200 rounded-lg shadow-lg mx-4 mt-2">
          <nav className="flex flex-col p-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-slate-700 mb-2 border bg-slate-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
