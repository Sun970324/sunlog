import Footer from '@/components/footer';
import TopBar from '@/components/top-bar';
import Hero from '@/components/sections/hero';
import Work from '@/components/sections/work';
import AiWorkflow from '@/components/sections/ai-workflow';
import OtherProjects from '@/components/sections/other-projects';
import Skills from '@/components/sections/skills';
import Career from '@/components/sections/career';
import Contact from '@/components/sections/contact';

export default function Home() {

  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <section id='work' className='section-fill'>
          <Work />
        </section>
        <section className='section-fill'>
          <OtherProjects />
        </section>
        <section className='section-fill'>
          <AiWorkflow />
        </section>
        <section id='skills' className='section-fill'>
          <Skills />
        </section>
        <section id='career' className='section-fill'>
          <Career />
        </section>
        <section id='contact' className='section-fill'>
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
