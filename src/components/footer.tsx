import Link from "next/link"
import { Github, Instagram, Linkedin, MessageCircle, Twitter, Users } from 'lucide-react'

const BRAND_PRIMARY = "#1F3B61"

export default function Footer() {
  return (
    <footer className="border-t bg-white md:px-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div>
          <h1 className="flex flex-col items-center mb-5 text-2xl font-semibold text-primary">Want to connect ?</h1>
        <nav className="flex items-center gap-3">
          <Social href="https://chat.whatsapp.com/DXjoWMoEPsfBeCrVtBJNqc" label="GitHub"><MessageCircle className="h-4 w-4" /></Social>
          <Social href="https://x.com/MlsaMiet" label="Twitter"><Twitter className="h-4 w-4" /></Social>
          <Social href="https://www.linkedin.com/company/mlsa-miet/" label="LinkedIn"><Linkedin className="h-4 w-4" /></Social>
          <Social href="https://www.instagram.com/mlsamiet/#" label="Instagram"><Instagram className="h-4 w-4" /></Social>
          <Social href="https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology" label="Instagram"><Users className="h-4 w-4" /></Social>
        </nav>
        </div>
        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} MLSA MIET. All rights reserved
        </div>
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
