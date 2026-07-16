import { NavBar }      from '@/components/layout/NavBar';
import { Footer }      from '@/components/layout/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Hero }          from '@/components/sections/Hero';
import { About }         from '@/components/sections/About';
import { Destinations }  from '@/components/sections/Destinations';
import { Experiences }   from '@/components/sections/Experiences';
import { Gallery }       from '@/components/sections/Gallery';
import { Blog }          from '@/components/sections/Blog';
import { Memberships }   from '@/components/sections/Memberships';
import { Testimonials }  from '@/components/sections/Testimonials';
import { CTA }           from '@/components/sections/CTA';
import { Contact }       from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] cursor-none">
      <CustomCursor />
      <ScrollProgress />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Destinations />
        <Experiences />
        <Gallery />
        <Blog />
        <Memberships />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
