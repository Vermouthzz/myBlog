import { useRef, useState } from "react";

export function Items() {
  const moveItem = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 560, height: 315 });

  // 处理图片拖动
  const clickStart = (e: React.MouseEvent) => {
    const startX = e.clientX;
    const startY = e.clientY;
    const moveElement = moveItem.current;

    if (!moveElement) return;

    const startLeft = parseInt(
      window.getComputedStyle(moveElement).left || "0",
      10
    );
    const startTop = parseInt(
      window.getComputedStyle(moveElement).top || "0",
      10
    );

    const onMouseMove = (moveEvent: MouseEvent) => {
      const offsetX = moveEvent.clientX - startX;
      const offsetY = moveEvent.clientY - startY;

      moveElement.style.left = `${startLeft + offsetX}px`;
      moveElement.style.top = `${startTop + offsetY}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  // 处理缩放图片
  const handleResize = (direction: string) => {
    if (direction === "increase") {
      setImageSize((prev) => ({
        width: prev.width + 20,
        height: prev.height + 10,
      }));
    } else if (direction === "decrease") {
      setImageSize((prev) => ({
        width: prev.width - 20,
        height: prev.height - 10,
      }));
    }
  };

  return (
    <div className="shadow-sm border-[#999] rounded-[5px] border w-[748px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="flex justify-between items-center border-b border-[rgb(243, 243, 243)] p-[10px] text-[13px]">
        <span>编辑头像</span>
      </div>
      <div className="bg-white p-[22px] flex">
        {/* 大图 */}
        <div className="w-[560px] h-[380px] relative flex items-center justify-center">
          <div className="bg-[#000] opacity-50 w-full h-full absolute left-0 top-0"></div>
          <img src="/image/avator.jpg" alt="" className="w-full" />

          <div
            ref={moveItem}
            className="absolute"
            style={{
              width: `${200}px`,
              height: `${200}px`,
            }}
            onMouseDown={clickStart}
          >
            <span
              className="outline outline-1 block outline-[#39f]"
              style={{
                width: `${200}px`,
                height: `${200}px`,
              }}
            >
              <img src="/image/avator.jpg" className="w-full h-full" alt="" />
            </span>

            {/* 竖向 */}
            <div className="absolute top-0 left-1/3 border-l border-r border-dashed w-1/3 h-full opacity-50 border-[#eee]"></div>
            {/* 横向 */}
            <div className="absolute opacity-50 border-t border-b border-dashed left-0 top-1/3 w-full h-1/3 border-[#eee]"></div>

            {/* 允许缩放的四个角 */}
            <span
              className="cursor-e-resize bg-[#39f] absolute w-[5px] h-full -right-[3px] top-0 opacity-10"
              onMouseDown={(e) => {
                e.preventDefault();
                setIsResizing(true);
              }}
            ></span>
            <span
              className="cursor-s-resize bg-[#39f] absolute h-[5px] w-full -bottom-[3px] left-0 opacity-10"
              onMouseDown={(e) => {
                e.preventDefault();
                setIsResizing(true);
              }}
            ></span>
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
