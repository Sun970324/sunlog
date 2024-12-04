import Slick from '../elements/slick';

interface Props {
  isDesktop: boolean;
}

const Career = ({ isDesktop }: Props) => {
  if (isDesktop) {
    return (
      <div className='w-fit h-fit relative'>
        <div className='h-[500px] w-[100%]'>
          <Slick isDesktop={true} />
        </div>
      </div>
    );
  }
  return (
    <div className='w-fit h-fit relative'>
      <div className='h-[500px] w-[100%]'>
        <Slick isDesktop={false} />
      </div>
    </div>
  );
};

export default Career;
