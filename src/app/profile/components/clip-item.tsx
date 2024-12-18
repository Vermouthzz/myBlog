import { useEffect, useRef, useState } from "react";

export function ClipItem() {
  const moveItem = useRef<HTMLSpanElement>(null);
  const moveParent = useRef<HTMLDivElement>(null);
  const isClick = useRef(false);
  const subX = useRef(0);
  const subY = useRef(0);
  const initCanvas = () => {
    const canvas: HTMLCanvasElement = document.getElementById(
      "canvas"
    ) as HTMLCanvasElement;
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d")!;
      const img = new Image();
      img.onload = function () {
        let y = (380 - 315) / 2;
        ctx.drawImage(img, 0, y, 580, 315);
      };
      img.src = "/image/avator.jpg";
    }
  };

  const mouseup = () => {
    isClick.current = false;
  };
  const moveChange = (e: MouseEvent) => {
    if (e.target !== moveItem.current || !isClick.current) return;
    const parent = moveItem.current!.parentElement;
    console.dir(e.target);

    const endX = e.clientX;
    const endY = e.clientY;
    parent!.style.left = endX + subX.current + "px";
    parent!.style.top = endY + subY.current + "px";

    // 移动canvas
  };

  useEffect(() => {
    initCanvas();
    window.addEventListener("mouseup", mouseup);
    window.addEventListener("mousemove", moveChange);

    return () => {
      window.removeEventListener("mouseup", mouseup);
      window.addEventListener("mousemove", moveChange);
    };
  }, []);

  const clickStart = (e: React.MouseEvent<HTMLSpanElement>) => {
    isClick.current = true;
    const startX = e.clientX;
    const startY = e.clientY;
    let startLeft = moveParent.current!.offsetLeft;
    let startTop = moveParent.current!.offsetTop;

    subX.current = startLeft - startX;
    subY.current = startTop - startY;
  };
  return (
    <div className="shadow-sm border-[#999] rounded-[5px] border w-[748px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="flex justify-between items-center border-b border-[rgb(243, 243, 243)] p-[10px] text-[13px]">
        <span>编辑头像</span>
      </div>
      <div className="bg-white p-[22px] flex">
        {/* 大图 */}
        <div className="w-[560px] h-[380px]">
          <img src="/image/avator.jpg" style={{ display: "none" }} alt="" />
          <div className="w-[560px] h-[380px] relative touch-none">
            <div className="overflow-hidden absolute top-0 left-0 w-full h-full">
              <div className="w-[560px] h-[315px] absolute top-1/2 -translate-y-1/2">
                <img
                  style={{ width: "560px", height: "315px", transform: "none" }}
                  src="/image/avator.jpg"
                />
              </div>
            </div>
            {/* 遮罩层 */}
            <div className="bg-[#000] opacity-50 w-full h-full absolute left-0 top-0"></div>

            <div className="w-[200px] h-[200px] absolute" ref={moveParent}>
              <span className="w-full h-full overflow-hidden outline outline-1 block outline-[#39f] ">
                <canvas width="560px" height="315px" id="canvas"></canvas>
              </span>
              {/* 竖向 */}
              <div className="absolute top-0 left-1/3 border-l border-r border-dashed w-1/3 h-full opacity-50 border-[#eee]"></div>
              {/* 横向 */}
              <div className="absolute opacity-50 border-t border-b border-dashed left-0 top-1/3 w-full h-1/3 border-[#eee]"></div>

              <span
                ref={moveItem}
                onMouseDown={clickStart}
                className="cursor-move bg-white opacity-10 absolute left-0 top-0 w-full h-full"
              ></span>
              <span className="bg-[#39f] absolute w-[5px] h-full cursor-e-resize -right-[3px] top-0 opacity-10"></span>
              <span className="bg-[#39f] absolute w-[5px] h-full -left-[3px] cursor-w-resize top-0 opacity-10"></span>
              <span className="bg-[#39f] h-[5px] w-full cursor-n-resize -top-[3px] absolute opacity-10"></span>
              <span className="bg-[#39f] h-[5px] w-full cursor-s-resize -bottom-[3px] absolute opacity-10"></span>
            </div>
          </div>
        </div>

        {/* 小图 */}
        <div className="bg-[#ddd] w-[140px] flex flex-col pl-[16px] pt-[20px] border-l border-[rgb(85,85,85)] ml-[1px]">
          <span className="text-[#666] mb-[12px] text-[14px]">预览</span>
          <div className="p-[3px] bg-white w-[100px] rounded-[2px]">
            <img
              src="/image/avator.jpg"
              className="w-[94px] h-[94px] rounded-[2px]"
              alt=""
            />
          </div>
          <div className="flex items-end mt-[12px]">
            <div className="p-[2px] bg-white rounded-[2px]">
              <img
                src="/image/avator.jpg"
                className=" w-[50px] h-[50px] rounded-[2px]"
                alt=""
              />
            </div>
            <div className="bg-white rounded-[2px] p-[1px] ml-[8px]">
              <img
                src="/image/avator.jpg"
                className=" w-[30px] h-[30px] rounded-[2px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-[20px] mr-[22px]">
        <div className="ml-auto text-white bg-[#3370FF] rounded-[2px] px-[15px] py-[5px] text-[14px] cursor-pointer">
          确定
        </div>
        <div className="ml-[10px] bg-[#f1f1f1] border border-[#dedede] rounded-[2px] px-[15px] py-[5px] text-[14px] cursor-pointer">
          取消
        </div>
      </div>
    </div>
  );
}
