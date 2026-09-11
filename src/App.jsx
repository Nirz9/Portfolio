import { useState } from 'react';
import LoadingScreen  from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import About          from './components/About';
import Skills         from './components/Skills';
import Projects       from './components/Projects';
import Education      from './components/Education';
import Achievements   from './components/Achievements';
import WhyMe          from './components/WhyMe';
import Testimonials   from './components/Testimonials';
import Contact        from './components/Contact';
import FinalCTA       from './components/FinalCTA';
import Footer         from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {loaded && (
        <>
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Achievements />
            <WhyMe />
            <Testimonials />
            <Contact />
            <FinalCTA />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
