import React, { forwardRef } from "react";

interface Props {
  top?: boolean;
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
}

export const MoveLineItem = forwardRef<HTMLSpanElement, Props>(
  ({ left, top, right, bottom }, ref) => {
    // console.log(ref);

    const resizeBox = (e: React.MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation();
      if (right) {
      }
    };
    return (
      <span
        ref={ref}
        // onClick={resizeBox}
        className={`"bg-[#39f] absolute opacity-10 z-10" 
        ${left ? "h-full w-[5px] -left-[3px] top-0 cursor-w-resize" : ""}
        ${right ? "h-full w-[5px] -right-[3px] top-0 cursor-e-resize" : ""}
        ${bottom ? "bottom-0 w-full h-[5px] cursor-s-resize" : ""}
        ${top ? "w-full h-[5px] top-0 cursor-n-resize" : ""}
        `}
      ></span>
    );
  }
);
