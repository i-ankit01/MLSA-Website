"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Users, CalendarDays, GraduationCap } from 'lucide-react'
import mlsamiet from "../assets/mlsamietlogo1.webp"

const BRAND_PRIMARY = "#1F3B61"
const BRAND_SECONDARY = "#0179D4"

export default function Hero() {
  return (
    <section id="volunteer" className="relative overflow-hidden">
      {/* Decorative background */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-200px] h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-20"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${BRAND_SECONDARY}, ${BRAND_PRIMARY})`,
          }}
          aria-hidden="true"
        />
      </div> */}

      <div className="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-2 md:gap-12 md:py-24">
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 self-start rounded-full border px-3 py-1 text-xs font-medium text-slate-600">
            Microsoft Learn Student Ambassadors · MIET · Event Page
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Build. Learn. Lead. Together at MLSA MIET.
          </h1>
          <p className="mt-4 max-w-prose text-slate-600 md:text-lg">
            Join a vibrant community of learners, builders, and leaders. We host hands-on workshops, hackathons, and
            speaker sessions to level up your skills while giving back.
          </p>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row">
              <Link href={"/register"}
                className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white shadow-lg cursor-pointer transition hover:shadow-xl"
                style={{ backgroundColor: BRAND_SECONDARY }}
              >
                <span className="absolute -inset-1 rounded-full bg-[#0179D4]/25 blur-md transition group-hover:bg-[#0179D4]/35" aria-hidden="true" />
                <span className="relative">Become a Volunteer</span>
              </Link>
            <Button
              variant="outline"
              asChild
              className="rounded-full border-slate-300 px-6 py-6 text-base font-semibold transition hover:bg-slate-50"
            >
              <Link href="#events">Explore Events</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            <Stat icon={<Users className="h-4 w-4 text-white" />} label="Active Members" value="250+" />
            <Stat icon={<CalendarDays className="h-4 w-4 text-white" />} label="Events Hosted" value="40+" />
            <Stat icon={<GraduationCap className="h-4 w-4 text-white" />} label="Workshops" value="25+" />
          </div>
        </div>

        <div className="">
          <div className=" overflow-hidden md:ml-17 rounded-2xl w-2/3 border shadow-xl">
            <Image
              src={mlsamiet}
              width={500}
              height={500}
              alt="MLSA MIET"
              className=" object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl border bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
      role="region"
      aria-label={label}
    >
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
        style={{ background: `linear-gradient(135deg, ${BRAND_PRIMARY}0D, ${BRAND_SECONDARY}12)` }} aria-hidden="true" />
      <div className="relative flex items-center gap-3">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-md" style={{ backgroundColor: BRAND_PRIMARY }}>
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold text-slate-900">{value}</div>
          <div className="text-xs text-slate-500">{label}</div>
        </div>
      </div>
    </div>
  )
}
