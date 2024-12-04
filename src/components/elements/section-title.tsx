interface Props {
  title: String;
}
const SectionTitle = ({ title }: Props) => {
  return <div className='font-bold text-[36px] mx-auto w-fit text-gray-800'>{title}</div>;
};

export default SectionTitle;
