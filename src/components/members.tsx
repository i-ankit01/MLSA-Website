"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import useInView from "@/hooks/use-in-view"

const BRAND_PRIMARY = "#1F3B61"

type Member = {
  id: string
  name: string
  role: string
  img: string
}

const members: Member[] = [
  { id: "1", name: "Aditi Sharma", role: "Lead Ambassador", img: "/placeholder.svg?height=240&width=240" },
  { id: "2", name: "Rahul Verma", role: "Tech Lead, Web", img: "/placeholder.svg?height=240&width=240" },
  { id: "3", name: "Neha Gupta", role: "Design Lead", img: "/placeholder.svg?height=240&width=240" },
  { id: "4", name: "Arjun Singh", role: "ML/AI Lead", img: "/placeholder.svg?height=240&width=240" },
  { id: "5", name: "Simran Kaur", role: "Community Manager", img: "/placeholder.svg?height=240&width=240" },
  { id: "6", name: "Ishaan Mehta", role: "Cloud Lead", img: "/placeholder.svg?height=240&width=240" },
]

export default function MembersSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section id="members" ref={ref} className="container mx-auto px-4 py-16 md:py-24">
      <div className={`mx-auto mb-8 max-w-2xl text-center transition-all ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Core Team</h2>
        <p className="mt-2 text-slate-600">Meet the folks who drive the community forward.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m, i) => (
          <Card
            key={m.id}
            className="group overflow-hidden transition will-change-transform hover:-translate-y-0.5 hover:shadow-md"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <CardHeader className="items-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-2" style={{ borderColor: BRAND_PRIMARY }}>
                <Image
                  src={m.img || "/placeholder.svg"}
                  alt={`${m.name} - ${m.role}`}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardTitle className="mt-3 text-center text-slate-900">{m.name}</CardTitle>
              <CardDescription className="text-center text-slate-600">{m.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-sm text-slate-500">
                Passionate about mentoring and building with the community.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
