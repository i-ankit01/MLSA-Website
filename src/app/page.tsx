import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import EventsSection from "@/components/event-section"
import AboutSection from "@/components/about-section"
import MembersSection from "@/components/members"
import Footer from "@/components/footer"
import WhyJoinSection from "@/components/why-join"

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-gradient-to-r from-secondary/10 via-transparent to-secondary/10 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <EventsSection />
        <AboutSection />
        <WhyJoinSection/>
        <MembersSection />
      </main>
      <Footer />
    </div>
  )
}
