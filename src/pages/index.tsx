import { useEffect, useState } from 'react';
import Footer from '@/components/footer';
import TopBar from '@/components/top-bar';
import Container from '@/components/elements/container';
import Hero from '@/components/sections/hero';
import Work from '@/components/sections/work';
import Skills from '@/components/sections/skills';
import Career from '@/components/sections/career';
import { caseStudies } from '@/common/datas';
import { readSelectedCase, saveSelectedCase } from '@/common/selected-case';

export default function Home() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const index = caseStudies.findIndex(item => item.id === readSelectedCase());
    if (index >= 0) setSelected(index);
  }, []);

  const select = (index: number) => {
    setSelected(index);
    saveSelectedCase(caseStudies[index].id);
  };

  const viewCase = (caseId: string) => {
    const index = caseStudies.findIndex(item => item.id === caseId);
    if (index < 0) return;
    select(index);
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <section id='work'>
          <Work selected={selected} onSelect={select} />
        </section>
        <section id='career' className='pb-16 md:pb-24'>
          <Container
            wide
            className='grid gap-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-14'
          >
            <Career onView={viewCase} />
            <div id='skills'>
              <Skills />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
