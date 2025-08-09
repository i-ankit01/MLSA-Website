"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, Clock } from "lucide-react";
import RegistrationDialog from "@/components/registration-dialog";
import useInView from "@/hooks/use-in-view";
import Link from "next/link";

const BRAND_PRIMARY = "#1F3B61";
const BRAND_SECONDARY = "#0179D4";

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  link?: string;
};

const upcoming: Event[] = [
  {
    id: "registration",
    title: "Volunteer Registrations Open",
    date: "Aug 30, 2025",
    time: "5 days",
    location: "Online",
    description:
      "Register now to be a begin your journey and join the MLSA MIET team as a volunteer.",
    link: "/route",
  }
];

const past: Event[] = [
  {
    id: "tech-challenge",
    title: "60 sec Tech Video Challenge",
    date: "Aug 3, 2025",
    time: "24 hrs",
    location: "Online",
    description: "Show case your skills by explaining any microsoft technology under 60 sec.",
    link: "#",
  },
  {
    id: "dsa",
    title: "DSA Level Up Session",
    date: "June 21, 2025",
    time: "07:00 PM - 9:00 PM",
    location: "Online",
    description: "How to start your dsa journey and make the learning feel approachable and achievable.",
    link: "#",
  },
  {
    id: "devgathering",
    title: "Dev Gathering 2k25",
    date: "May 16, 2025",
    time: "2 days",
    location: "MIET Schroff Block",
    description:
      "An overnight hackathon with 100+ participants and 30+ projects.",
    link: "#",
  }
];

export default function EventsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="events"
      ref={ref}
      className="container mx-auto px-4 py-16 md:py-24"
    >
      <div
        className={`mx-auto mb-8 max-w-2xl text-center transition-all ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Events
        </h2>
        <p className="mt-2 text-slate-600">
          Explore our upcoming sessions and relive highlights from past events.
        </p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <div className="flex items-center justify-center">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger className="cursor-pointer" value="upcoming">
              Upcoming
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="past">
              Past
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="upcoming" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((e) => (
              <EventCard key={e.id} event={e} isUpcoming />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {past.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

function EventCard({
  event,
  isUpcoming = false,
}: {
  event: Event;
  isUpcoming?: boolean;
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {/* Hover background overlay */}
      <div
        className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${BRAND_PRIMARY}0D, ${BRAND_SECONDARY}12)`,
        }}
      />

      {/* Card Header */}
      <div className="p-4 relative z-10">
        <h3 className="text-lg font-semibold text-slate-900">{event.title}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-slate-600 text-sm">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" /> {event.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> {event.time}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> {event.location}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 relative z-10 border-t h-18 border-gray-100">
        <p className="text-sm text-slate-600">{event.description}</p>
      </div>

      {/* Card Footer */}
      <div className="flex items-center gap-3 p-4 relative z-10">
        {isUpcoming ? (
          <Link
            href={event.link || "#"}
            className="rounded-full w-28 h-9 flex items-center justify-center gap-1 font-semibold text-white cursor-pointer"
            style={{ backgroundColor: BRAND_SECONDARY }}
          >
            Register <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        ) : (
          <Link
            href={event.link || "#"}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-green-500 bg-green-100 hover:bg-green-300 px-4 h-9 flex items-center justify-center gap-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
          >
            Results <ExternalLink className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
