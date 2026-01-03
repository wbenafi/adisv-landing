import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ProjectsTimeline from '@/components/sections/ProjectsTimeline';
import Team from '@/components/sections/Team';
import Gallery from '@/components/sections/Gallery';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectsTimeline />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
