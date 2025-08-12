"use client";

import type React from "react";

import Image from "next/image";
import {  Users, Award, Rocket, Medal, CheckCircle } from "lucide-react";
import useInView from "@/hooks/use-in-view";
import mietgroupmlsa from "../assets/mietgroupmlsa.webp"
import devgathering from "../assets/devgathering.webp"
import msoffice from "../assets/msofficephoto.webp"
import eventphoto from "../assets/eventphoto.webp"

const BRAND_PRIMARY = "#1F3B61";
const BRAND_SECONDARY = "#0179D4";

type Benefit = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    id: "skills",
    icon: <CheckCircle className="h-4 w-4 text-white" />,
    title: "Real World Experiences",
    description: "Engage in industry visits for practical learning.",
  },
  {
    id: "network",
    icon: <Users className="h-4 w-4 text-white" />,
    title: "Professional Networking",
    description: "Connect with industry experts and peers.",
  },
  {
    id: "recognition",
    icon: <Award className="h-4 w-4 text-white" />,
    title: "Resume Growth",
    description: "Build skills in event planning, outreach, community engagement.",
  },
  {
    id: "leadership",
    icon: <Rocket className="h-4 w-4 text-white" />,
    title: "Mentorship",
    description: "Gain feedback and guidance from experienced professionals.",
  },
  {
    id: "community",
    icon: <Medal className="h-4 w-4 text-white" />,
    title: "Certifications & Recognition",
    description: "Receive certificates to enhance your resume.",
  },
];

const showcaseImages = [
  mietgroupmlsa,
  devgathering,
  msoffice,
  eventphoto,
];

export default function WhyJoinSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-slate-50 md:px-12 py-12">
      <div className="container mx-auto px-4">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Left Side - Compact Content */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why join us ?
            </h2>
            <p className="text-slate-600 mb-6">
              Join a thriving community where innovation meets opportunity.
            </p>

            {/* Benefits  */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.id}
                  className={`group relative overflow-hidden rounded-lg border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, ${BRAND_PRIMARY}08, ${BRAND_SECONDARY}12)`,
                    }}
                  />
                  <div className="relative">
                    <div
                      className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md"
                      style={{ backgroundColor: BRAND_PRIMARY }}
                    >
                      {benefit.icon}
                    </div>
                    <h3 className="mb-1 text-sm font-semibold text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Compact Images */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-3">
              {showcaseImages.map((src, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ transitionDelay: `${(index + 2) * 80}ms` }}
                >
                  <div className=" overflow-hidden">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`MLSA MIET showcase ${index + 1}`}
                      width={300}
                      height={300}
                      className=" w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
