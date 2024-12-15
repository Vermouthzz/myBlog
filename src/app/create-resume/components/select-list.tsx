interface Props {
  list: { text: string; type: string | number }[];
  classname?: string;
}

export function SelectList({ list, classname }: Props) {
  return (
    <ul
      className={`${classname} absolute w-full p-[10px] shadow-xl bg-white h-[200px] hidden overflow-scroll`}
    >
      {list.map((item) => (
        <li className="p-[10px] li-item" key={item.type}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}
