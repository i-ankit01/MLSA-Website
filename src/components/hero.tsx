"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, CalendarDays, GraduationCap } from "lucide-react";
import mlsamiet from "../assets/mlsamietlogo1.webp";
import { motion } from "framer-motion";

const BRAND_PRIMARY = "#1F3B61";
const BRAND_SECONDARY = "#0179D4";

export default function Hero() {
  return (
    <div className=" w-full relative bg-white">
      <section
        id="volunteer"
        className="relative overflow-hidden md:px-12 px-3 bg-gradient-to-r from-secondary/10 via-transparent to-secondary/10 "
      >
        <div className="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-2 md:gap-12 md:py-24">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }} className="md:hidden overflow-hidden ml-12 rounded-2xl w-2/3 border shadow-xl">
              <Image
                src={mlsamiet}
                width={500}
                height={500}
                alt="MLSA MIET"
                className=" object-cover"
              />
            </motion.div>
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h1 className="md:mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Build. Learn. Lead. Together at MLSA MIET.
            </h1>
            <p className="mt-4 text-sm max-w-prose text-slate-600 md:text-lg">
              Join a vibrant community of learners, builders, and leaders. We
              host hands-on workshops, hackathons, and speaker sessions to level
              up your skills while giving back.
            </p>

            <div className="mt-6 flex flex-col gap-5 sm:flex-row">
              <Link
                href={"/register"}
                className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white shadow-lg cursor-pointer transition hover:shadow-xl"
                style={{ backgroundColor: BRAND_SECONDARY }}
              >
                <span
                  className="absolute -inset-1 rounded-full bg-gradient-to-b from-primary/50 to-secondary/30 text-white blur-md transition group-hover:bg-[#0179D4]/35"
                  aria-hidden="true"
                />
                <span className="relative">Join MLSA MIET</span>
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
              <Stat
                icon={<Users className="h-4 md:w-4 w-8 text-white" />}
                label="Community Reach"
                value="5k+"
              />
              <Stat
                icon={<CalendarDays className="h-4 w-4 text-white" />}
                label="Events Hosted"
                value="40+"
              />
              <Stat
                icon={<GraduationCap className="h-4 w-4 text-white" />}
                label="Workshops"
                value="25+"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:block hidden"
          >
            <div className=" overflow-hidden md:ml-17 rounded-2xl w-2/3 border shadow-xl">
              <Image
                src={mlsamiet}
                width={500}
                height={500}
                alt="MLSA MIET"
                className=" object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl border bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
      role="region"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${BRAND_PRIMARY}0D, ${BRAND_SECONDARY}12)`,
        }}
        aria-hidden="true"
      />
      <div className="relative">
        <div className="flex items-center mb-2 gap-3 justify-center">
          <div
            className="inline-flex h-8 w-8 items-center justify-center rounded-md"
            style={{ backgroundColor: BRAND_PRIMARY }}
          >
            {icon}
          </div>

          <div className="md:text-2xl text-xl font-bold text-slate-900">
            {value}
          </div>
        </div>
        <div>
          <div className="text-xs text-slate-500 text-center">{label}</div>
        </div>
      </div>
    </div>
  );
}
