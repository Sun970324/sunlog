import Container from './elements/container';
import { useTheme } from '@/hooks/use-theme';

const Footer = () => {
  const { theme, toggle } = useTheme();

  return (
    <footer className='border-t border-line'>
      <Container className='flex items-center justify-between py-6 text-[13px] text-muted'>
        <span>© 2026 Sun&apos;s log</span>
        <button type='button' onClick={toggle} className='rounded-sm hover:text-fg'>
          {theme === 'dark' ? '라이트 모드' : '다크 모드'}
        </button>
      </Container>
    </footer>
  );
};

export default Footer;
