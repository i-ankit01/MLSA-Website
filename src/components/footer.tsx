import Link from "next/link"
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

const BRAND_PRIMARY = "#1F3B61"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} MLSA MIET. All rights reserved.
        </div>
        <nav className="flex items-center gap-3">
          <Social href="https://github.com" label="GitHub"><Github className="h-4 w-4" /></Social>
          <Social href="https://twitter.com" label="Twitter"><Twitter className="h-4 w-4" /></Social>
          <Social href="https://www.linkedin.com" label="LinkedIn"><Linkedin className="h-4 w-4" /></Social>
          <Social href="https://instagram.com" label="Instagram"><Instagram className="h-4 w-4" /></Social>
        </nav>
      </div>
      <div className="pb-6 text-center text-xs text-slate-500">
        Built with Next.js + Tailwind CSS and shadcn/ui.
      </div>
    </footer>
  )
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border text-slate-600 transition hover:text-slate-900"
      style={{ borderColor: `${BRAND_PRIMARY}22` }}
    >
      {children}
    </Link>
  )
}
