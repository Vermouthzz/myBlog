interface Props {
  top?: boolean;
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
  center?: boolean;
  extra?: boolean;
}

export function MoveBlockItem({
  left,
  top,
  right,
  bottom,
  center,
  extra,
}: Props) {
  return (
    <span
      className={`absolute z-10 bg-[#39f]
          ${left && top ? "-top-[3px]  -left-[3px] cursor-nw-resize" : ""}
          ${
            right && bottom ? "-right-[3px] -bottom-[3px] cursor-se-resize" : ""
          }
          ${bottom && left ? "-bottom-[3px] -left-3[px] cursor-sw-resize" : ""}
          ${top && right ? "-top-[3px] cursor-ne-resize -right-[3px]" : ""}
          ${
            center && top
              ? " left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 cursor-n-resize"
              : ""
          }
          ${
            center && bottom
              ? " left-1/2 -translate-x-1/2 -bottom-[3px] cursor-s-resize"
              : ""
          }
          ${
            center && left
              ? "top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-w-resize"
              : ""
          }
          ${
            center && right
              ? "top-1/2 -translate-y-1/2 -right-[3px] -translate-x-1/2 cursor-e-resize"
              : ""
          }
          ${extra ? "w-[20px] h-[20px]" : "w-[5px] h-[5px] "}
          `}
    ></span>
  );
}
