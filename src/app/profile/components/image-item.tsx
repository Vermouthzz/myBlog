interface Props {
  className: string;
  imgSize: string;
  radius: string;
  p: number | string;
  style: object;
  src: string;
}

export function ImageItem({
  className,
  imgSize,
  radius,
  p,
  style,
  src,
}: Props) {
  return (
    <div
      className={`${className} "bg-white relative" p-[${p}px] rounded-[${radius}px])`}
    >
      <img
        src="/image/avator.jpg"
        style={style}
        className={`${imgSize} rounded-[${radius}px] absolute translate-[${p}px]`}
        alt=""
      />
    </div>
  );
}
