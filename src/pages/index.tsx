import Footer from '@/components/footer';
import Header from '@/components/header';
import HomeSection from '@/components/sections/home';
import { useRef, useState } from 'react';
import { GetServerSideProps } from 'next';
import { getDeviceType } from '@/common/funtion';
import MenuBar from '@/components/menu-bar';
import TechSkills from '@/components/sections/tech-skills';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';

interface Props {
  isDesktop: boolean;
}
export default function Home({ isDesktop }: Props) {
  const scrollRef = useRef<HTMLDivElement[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navHeight = 72;
  const handleClickMenu = (idx: number) => {
    console.log(scrollRef.current[idx].offsetTop);
    window.scrollTo({
      top: scrollRef.current[idx].offsetTop - navHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className='w-full overflow-clip'>
      <Header handleClickMenu={handleClickMenu} isDesktop={isDesktop} />
      <MenuBar
        handleClickMenu={handleClickMenu}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div>
        <div ref={ref => (ref ? (scrollRef.current[0] = ref) : null)}>
          <HomeSection isDesktop={isDesktop} handleClickMenu={handleClickMenu} />
        </div>
        <div ref={ref => (ref ? (scrollRef.current[1] = ref) : null)}>
          <TechSkills isDesktop={isDesktop} />
        </div>
        <div ref={ref => (ref ? (scrollRef.current[2] = ref) : null)}>
          <Projects isDesktop={isDesktop} />
        </div>
        <div ref={ref => (ref ? (scrollRef.current[3] = ref) : null)}>
          <Contact isDesktop={isDesktop} />
        </div>
        <div>
          <Footer isDesktop={isDesktop} />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
  const device = getDeviceType(req);
  const isDesktop = device === 'desktop';

  return { props: { isDesktop } };
};
