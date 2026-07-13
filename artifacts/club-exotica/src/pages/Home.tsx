import { NavBar } from '@/components/layout/NavBar';
import { Hero } from '@/components/sections/Hero';
import { Destinations } from '@/components/sections/Destinations';
import { Memberships } from '@/components/sections/Memberships';
import { Experiences } from '@/components/sections/Experiences';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-[#C7A45D]/30 selection:text-primary">
      <NavBar />
      <main>
        <Hero />
        <Destinations />
        <Experiences />
        <Gallery />
        <Memberships />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
