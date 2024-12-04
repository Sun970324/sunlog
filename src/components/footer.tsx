import Image from 'next/image';
import Link from 'next/link';
import FooterImg from './elements/footer-img';

interface Props {
  isDesktop: boolean;
}

const Footer = ({ isDesktop }: Props) => {
  if (isDesktop) {
    return (
      <div className='h-44 pt-12 bg-gray-100 text-center'>
        <div className='flex flex-row justify-center mb-8'>
          <FooterImg logo='assets/git-hub.png' />
          <FooterImg logo='assets/notion.png' />
        </div>
        <div className='text-sm'>© 2024. Sun's log. All rights reserved.</div>
      </div>
    );
  }
  return <div className='w-fit h-fit'></div>;
};

export default Footer;
