interface Props {
  className: string;
  style: object;
  src: string;
}

export function ImageItem({ className, style, src }: Props) {
  return (
    <div
      className={`${className} rounded-[2px] bg-white border-white overflow-hidden relative)`}
    >
      <img
        src={src}
        style={style}
        className={` block preview-img rounded-[2px]`}
        alt=""
      />
    </div>
  );
}
