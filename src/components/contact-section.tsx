"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { sendContact } from "@/app/actions"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare } from 'lucide-react'

const BRAND_PRIMARY = "#1F3B61"
const BRAND_SECONDARY = "#0179D4"

export default function ContactSection() {
const [state, action] = useActionState(sendContact, { ok: false, message: "" })

return (
  <section id="contact" className="relative overflow-hidden">
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-15" aria-hidden="true"
      style={{ background: `radial-gradient(900px 300px at 20% 0%, ${BRAND_PRIMARY}22, transparent 70%)` }} />
    <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-slate-600">
          <MessageSquare className="h-3.5 w-3.5" /> Get in touch
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-3 text-slate-600 md:text-lg">
          Have questions or want to collaborate? Send us a message and we’ll respond shortly.
        </p>

        <div className="mt-6 inline-flex items-center gap-3 rounded-md bg-white p-3 shadow-sm ring-1 ring-slate-200">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-md" style={{ backgroundColor: BRAND_PRIMARY }}>
            <Mail className="h-4 w-4 text-white" />
          </div>
          <a href="mailto:mlsa@miet.edu" className="text-slate-700 hover:underline">
            mlsa@miet.edu
          </a>
        </div>
      </div>

      <form action={action} className="grid gap-4 rounded-xl border bg-white p-6 shadow-sm">
        <div className="grid gap-2">
          <Label htmlFor="c-name">Name</Label>
          <Input id="c-name" name="name" placeholder="Your name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="c-email">Email</Label>
          <Input id="c-email" name="email" type="email" placeholder="you@college.edu" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="c-message">Message</Label>
          <Textarea id="c-message" name="message" placeholder="How can we help?" required />
        </div>
        <SubmitBtn />
        {state?.message && (
          <p className={`text-sm ${state.ok ? "text-emerald-600" : "text-red-600"}`}>{state.message}</p>
        )}
      </form>
    </div>
  </section>
)
}

function SubmitBtn() {
const { pending } = useFormStatus()
return (
  <Button
    type="submit"
    disabled={pending}
    className="w-full rounded-full font-semibold text-white"
    style={{ backgroundColor: BRAND_SECONDARY }}
  >
    {pending ? "Sending..." : "Send Message"}
  </Button>
)
}
