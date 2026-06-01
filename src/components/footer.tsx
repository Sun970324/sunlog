import FooterImg from './elements/footer-img';

const Footer = () => {
  return (
    <div className='h-auto md:h-44 pt-8 md:pt-12 pb-6 md:pb-0 bg-zinc-900 md:bg-gray-100 text-center'>
      <div className='flex flex-row justify-center mb-6 md:mb-8'>
        <FooterImg logo='/assets/git-hub.png' />
        <FooterImg logo='/assets/notion.png' />
      </div>
      <div className='text-sm text-gray-200 md:text-gray-700'>
        © 2026. Sun&apos;s log. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
