import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { About } from "@/components/sections/about";
import { PracticeAreas } from "@/components/sections/practice-areas";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { WhatsappFab } from "@/components/shared/whatsapp-fab";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <About />
        <PracticeAreas />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
