import Image from 'next/image';
import Link from 'next/link';

interface Props {
  logo: string;
}

const FooterImg = ({ logo }: Props) => {
  return (
    <div className='w-12 h-12 p-[3px] mx-2 rounded-full bg-white cursor-pointer border border-gray-300'>
      <Link
        href={
          logo === '/assets/git-hub.png'
            ? 'https://github.com/Sun970324'
            : 'https://www.notion.so/b45d0a0494c14d98b57b43bc68adc359'
        }
        target='_blank'
        rel='noreferrer'
      >
        <Image src={logo} alt={logo} width={60} height={60} />
      </Link>
    </div>
  );
};

export default FooterImg;
