"use client"

import Image from "next/image"
import useInView from "@/hooks/use-in-view"
import microsoftgroupphoto from "../assets/microsoftgroupphoto.webp"

const BRAND_PRIMARY = "#1F3B61"
const BRAND_SECONDARY = "#0179D4"

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-slate-50 md:px-12 px-4">
      <div className="container mx-auto grid items-center gap-10 px-4 md:py-16 py-6 md:grid-cols-2 md:py-24">
        <div className={`transition-all ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
          <div className="flex justify-center">
          <div className="inline-block rounded-full border px-3 py-1 text-xs font-medium text-slate-600">About the Society</div>
          </div>
          <h2 className="mt-4 md:text-3xl text-2xl text-center md:tracking-normal mb-4 tracking-wide md:text-left font-bold tracking-tight text-slate-900 sm:text-4xl">
            Microsoft Learn Student Ambassadors at MIET
          </h2>
          <p className="mt-3 text-slate-600 md:text-lg">
            MLSA MIET is a student community that empowers peers to learn, build, and share. We conduct workshops,
            hackathons, cloud study jams, and speaker series focused on modern technology—spanning Web, AI/ML, Cloud, and Design.
          </p>
          <ul className="mt-5 grid gap-2 text-slate-700">
            <li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND_PRIMARY }} /> Peer-led workshops and mentoring</li>
            <li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND_PRIMARY }} /> Collaboration with industry programs</li>
            <li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND_PRIMARY }} /> Inclusive and beginner-friendly</li>
          </ul>
        </div>

        <div className={`relative transition-all ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
          <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full opacity-20 blur-2xl"
               style={{ background: `linear-gradient(135deg, ${BRAND_PRIMARY}, ${BRAND_SECONDARY})` }} aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl border bg-white shadow-xl">
            <Image
              src={microsoftgroupphoto}
              width={960}
              height={640}
              alt="Students engaging in an MLSA MIET tech talk"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
