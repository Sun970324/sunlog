import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/material';
import { useRef, useState } from 'react';

interface Props {
  isDesktop: boolean;
}

const imageList = [
  {
    src: '/assets/AI.jpg',
  },
  {
    src: '/assets/AI.jpg',
  },
  {
    src: '/assets/AI.jpg',
  },
  {
    src: '/assets/AI.jpg',
  },
];

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  position: relative;
  .slick-list {
    width: 100%;
  }
  .slick-track {
  }
  .slick-slider .slick-track span {
  }
  .slick-slide.slick-center {
    opacity: 1;
  }
  .slick-slide {
    opacity: 0.2;
    transition: opacity 0.5s;
  }
  .slick-slide img {
    display: inline;
  }
`;

const Slick = ({ isDesktop }: Props) => {
  const slickRef = useRef<any>(null);
  const [current, setCurrent] = useState(0);
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: isDesktop ? '28%' : '8%',
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    afterChange: (number: number) => setCurrent(number),
  };

  const onClickSlide = (idx: number) => {
    if (current === 3 && idx === 0) {
      slickRef.current?.slickNext();
    } else if (current === 0 && idx === 3) {
      slickRef.current?.slickPrev();
    } else if (current < idx) {
      slickRef.current?.slickNext();
    } else if (current > idx) {
      slickRef.current?.slickPrev();
    }
  };

  return (
    <StyledSlider {...settings} ref={slickRef}>
      {imageList.map((v, idx) => (
        <div key={idx} className='px-[5px]'>
          <div className=' w-fit h-fit hover: cursor-pointer' onClick={() => onClickSlide(idx)}>
            <Image
              src={v.src}
              alt=''
              width={500}
              height={isDesktop ? 500 : 900}
              className='rounded-[10px]'
            />
          </div>
        </div>
      ))}
    </StyledSlider>
  );
};

export default Slick;
