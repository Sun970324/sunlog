type Props = { items: string[] };

/* 스택, 스킬 같은 짧은 이름 묶음. */
export default function Chips({ items }: Props) {
  return (
    <ul className='m-0 flex list-none flex-wrap gap-1.5 p-0'>
      {items.map(item => (
        <li
          key={item}
          className='whitespace-nowrap rounded-full border border-line bg-subtle px-2.5 py-1 text-[12px] leading-none'
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
