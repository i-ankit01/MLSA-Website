import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import EventsSection from "@/components/event-section";
import AboutSection from "@/components/about-section";
import MembersSection from "@/components/members";
import Footer from "@/components/footer";
import WhyJoinSection from "@/components/why-join";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"

export default async function Home() {

  const cookieStore = await cookies(); // because cookies() is async in older next js versions
  // const token = cookies().get("token")?.value;
  const token: string | undefined = cookieStore.get("token")?.value;

  let isRegistered = false;

  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      isRegistered = true;
    } catch {}
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-gradient-to-r from-secondary/10 via-transparent to-secondary/10 text-slate-900">
      <Navbar />
      <main>
        <Hero isRegistered={isRegistered} />
        <EventsSection isRegistered={isRegistered} />
        <AboutSection />
        <WhyJoinSection />
        <MembersSection />
      </main>
      <Footer />
    </div>
  );
}
