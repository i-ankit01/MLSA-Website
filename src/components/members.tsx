"use client"

import Image from "next/image"
import useInView from "@/hooks/use-in-view"
import { Linkedin } from "lucide-react"
import Link from "next/link"

const BRAND_PRIMARY = "#1F3B61"
const BRAND_SECONDARY = "#0179D4"

type Member = {
  id: string
  name: string
  role: string
  img: string
  linkedin: string
  bio: string
}

const members: Member[] = [
  {
    id: "1",
    name: "XYZ",
    role: "Lead",
    img: "/placeholder.svg?height=240&width=240",
    linkedin: "https://www.linkedin.com/in/aditi-sharma-mlsa/",
    bio: "Passionate about AI/ML and community building",
  },
  {
    id: "2",
    name: "XYZ",
    role: "Head Of Operations",
    img: "/placeholder.svg?height=240&width=240",
    linkedin: "https://www.linkedin.com/in/rahul-verma-webdev/",
    bio: "Full-stack developer and open source contributor",
  },
  {
    id: "3",
    name: "XYZ",
    role: "Tech Head",
    img: "/placeholder.svg?height=240&width=240",
    linkedin: "https://www.linkedin.com/in/neha-gupta-design/",
    bio: "UI/UX designer with a passion for accessibility",
  },
  {
    id: "4",
    name: "XYZ",
    role: "Content Head",
    img: "/placeholder.svg?height=240&width=240",
    linkedin: "https://www.linkedin.com/in/arjun-singh-ai/",
    bio: "Machine learning enthusiast and researcher",
  },
  {
    id: "5",
    name: "XYZ",
    role: "Outreach Head",
    img: "/placeholder.svg?height=240&width=240",
    linkedin: "https://www.linkedin.com/in/simran-kaur-community/",
    bio: "Building bridges between students and industry",
  },
  {
    id: "6",
    name: "XYZ",
    role: "Visuals Head",
    img: "/placeholder.svg?height=240&width=240",
    linkedin: "https://www.linkedin.com/in/ishaan-mehta-cloud/",
    bio: "Azure certified and cloud architecture expert",
  },
]

function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{
        transitionDelay: `${index * 60}ms`,
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
      }}
    >
      {/* Gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `linear-gradient(135deg, ${BRAND_PRIMARY}08, ${BRAND_SECONDARY}12)`,
        }}
      />

      {/* Content */}
      <div className="relative p-6 text-center flex ">
        {/* Profile Image with decorative ring */}
        <div className="mb-4 md:ml-8 ">
          
          <div
            className="relative h-24 w-24 mx-auto overflow-hidden rounded-full border-3 bg-white p-1"
            style={{ borderColor: BRAND_PRIMARY }}
          >
            <Image
              src={member.img || "/placeholder.svg"}
              alt={`${member.name} - ${member.role}`}
              width={160}
              height={160}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        <div className="md:ml-15 ml-10">
        {/* Name and Role */}
        <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
        <p className="text-sm font-medium mb-3" style={{ color: BRAND_SECONDARY }}>
          {member.role}
        </p>


        <Link
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-b from-secondary/90 to-primary/90 rounded-full text-xs font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
        >
          <Linkedin className="h-3.5 w-3.5" />
          Connect
        </Link>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div
        className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${BRAND_SECONDARY}, transparent)`,
          clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)",
        }}
      />
    </div>
  )
}

export default function MembersSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section id="members" ref={ref} className="container mx-auto md:px-12 px-6 md:py-16 py-10 md:py-24">
      <div
        className={`mx-auto mb-8 max-w-2xl text-center transition-all ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
      >
        <h2 className="md:text-3xl font-bold tracking-tight text-slate-900 text-2xl">Core Team</h2>
        <p className="mt-2 md:text-md text-sm text-slate-600">Meet the folks who drive the community forward.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member, i) => (
          <MemberCard key={member.id} member={member} index={i} />
        ))}
      </div>
    </section>
  )
}
