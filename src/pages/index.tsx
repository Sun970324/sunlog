import Footer from '@/components/footer';
import Header from '@/components/header';
import HomeSection from '@/components/sections/home';
import { useRef, useState } from 'react';
import { NAV_HEIGHT } from '@/common/constants';
import MenuBar from '@/components/menu-bar';
import TechSkills from '@/components/sections/tech-skills';
import Career from '@/components/sections/career';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import { DeviceProvider } from '@/context/DeviceContext';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClickMenu = (idx: number) => {
    window.scrollTo({
      top: scrollRef.current[idx].offsetTop - NAV_HEIGHT,
      behavior: 'smooth',
    });
  };

  return (
    <DeviceProvider>
      <div className='w-full overflow-clip'>
        <Header handleClickMenu={handleClickMenu} setIsMenuOpen={setIsMenuOpen} />
        <MenuBar
          handleClickMenu={handleClickMenu}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <div>
          <div ref={ref => (ref ? (scrollRef.current[0] = ref) : null)}>
            <HomeSection handleClickMenu={handleClickMenu} />
          </div>
          <div ref={ref => (ref ? (scrollRef.current[1] = ref) : null)}>
            <TechSkills />
          </div>
          <div ref={ref => (ref ? (scrollRef.current[2] = ref) : null)}>
            <Career />
          </div>
          <div ref={ref => (ref ? (scrollRef.current[3] = ref) : null)}>
            <Projects />
          </div>
          <div ref={ref => (ref ? (scrollRef.current[4] = ref) : null)}>
            <Contact />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </DeviceProvider>
  );
}
