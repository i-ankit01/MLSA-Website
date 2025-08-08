import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import EventsSection from "@/components/event-section"
import AboutSection from "@/components/about-section"
import MembersSection from "@/components/members"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <EventsSection />
        <AboutSection />
        <MembersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
