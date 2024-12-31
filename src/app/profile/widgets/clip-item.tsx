import { Dispatch, useEffect, useRef, useState } from "react";
import { MoveBlockItem } from "../components/move-block-item";
import { MoveLineItem } from "../components/move-line-item";
import { ImageItem } from "../components/image-item";

const initialImgInfo = [
  {
    type: "big",
    max_width: 560,
    max_height: 380,
    width: 0,
    height: 0,
    init_x: 0,
    init_y: 0,
  },
  {
    type: "normal",
    max_height: 148.05,
    width: 0,
    height: 0,
    init_x: 0,
    init_y: 0,
  },
  {
    type: "middle",
    max_height: 72.45,
    width: 0,
    height: 0,
    init_x: 0,
    init_y: 0,
  },
  {
    type: "small",
    max_height: 44.1,
    width: 0,
    height: 0,
    init_x: 0,
    init_y: 0,
  },
];

type ImgInfo = {
  type: string;
  max_height: number;
  height: number;
  width: number;
  init_x: number;
  init_y: number;
}[];

export function ClipItem({ imgUrl = "/image/avator.jpg" }: { imgUrl: string }) {
  const clipRect = {
    width: 200,
    height: 200,
    x: 50,
    y: 50,
  };
  const [imgInfo, setImgInfo] = useState<ImgInfo>(initialImgInfo);

  return (
    <div className="shadow-sm border-[#999] rounded-[5px] border w-[748px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="flex bg-white justify-between items-center border-b border-[rgb(243, 243, 243)] p-[10px] text-[13px]">
        <span>编辑头像</span>
      </div>
      <div className="bg-white p-[22px] flex">
        {/* 大图 */}
        <div className="w-[560px] h-[380px]">
          <img src="/image/avator.jpg" style={{ display: "none" }} alt="" />
          <MoveItem
            imgInfo={imgInfo}
            updateInfo={setImgInfo}
            imgUrl={imgUrl}
          ></MoveItem>
        </div>

        {/* 小图 */}
        <PreviewBlock imgInfo={imgInfo} imgUrl={imgUrl}></PreviewBlock>
      </div>
      <Footer></Footer>
    </div>
  );
}

function MoveItem({
  imgUrl,
  imgInfo,
  updateInfo,
}: {
  imgUrl: string;
  imgInfo: ImgInfo;
  updateInfo: Function;
}) {
  const moveItem = useRef<HTMLSpanElement>(null);
  const moveParent = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const resizeLeft = useRef<HTMLSpanElement>(null);
  const resizeRight = useRef<HTMLSpanElement>(null);
  const resizeTop = useRef<HTMLSpanElement>(null);
  const resizeBottom = useRef<HTMLSpanElement>(null);
  const isClick = useRef(false);
  // const isResize = useRef(false);
  const init_trans_x = useRef(0);
  const init_trans_y = useRef(0);
  const subX = useRef(0);
  const subY = useRef(0);

  const start_move_x = useRef(0);
  const start_move_y = useRef(0);

  const initCanvas = () => {
    if (canvas.current?.getContext) {
      const ctx = canvas.current.getContext("2d")!;
      const img = new Image();
      img.onload = function () {
        const naturalWidth = img.naturalWidth;
        const naturalHeight = img.naturalHeight;
        const ratio = naturalWidth / naturalHeight;
        const imgWidth = naturalWidth >= 560 ? 560 : naturalWidth;
        const imgHeight = imgWidth / ratio >= 380 ? 380 : imgWidth / ratio;
        init_trans_y.current = imgHeight >= 380 ? 0 : (380 - imgHeight) / 2;
        init_trans_x.current = imgWidth >= 560 ? 0 : (560 - imgWidth) / 2;
        updateInfo((prevInfo: ImgInfo) => {
          return prevInfo.map((item) => {
            const height =
              naturalHeight > item.max_height ? item.max_height : naturalHeight;
            const width = height * ratio;
            const init_x = 1;
            const init_y = 1;
            return { ...item, width, height, init_x, init_y };
          });
        });

        canvas.current!.width = imgWidth; // 设置绘图区域的宽度
        canvas.current!.height = imgHeight; // 设置绘图区域的高度
        canvas.current!.style.transform = `translate(${init_trans_x.current}px, ${init_trans_y.current}px)`;
        ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
      };
      img.src = imgUrl;
    }
  };

  function mouseDownParent(e: MouseEvent) {
    const startX = e.clientX;
    const startY = e.clientY;
    let startLeft = moveParent.current!.offsetLeft;
    let startTop = moveParent.current!.offsetTop;
    subX.current = startLeft - startX;
    subY.current = startTop - startY;
  }

  const clickStart = (e: MouseEvent) => {
    let target = e.target;
    isClick.current = true;

    if (target === moveItem.current) {
      mouseDownParent(e);
    } else if (target === resizeRight.current) {
      // isResize.current = true;
      start_move_x.current = e.clientX;
      start_move_y.current = e.clientY;
    }
  };

  const mouseup = () => {
    isClick.current = false;
    // isResize.current = false;
  };
  const moveChange = (e: MouseEvent) => {
    if (!isClick.current) return;
    if (e.target === moveItem.current) {
      parentMove(e);
    }
  };

  const parentMove = (e: MouseEvent) => {
    const parent = moveItem.current!.parentElement;
    let left = e.clientX + subX.current;
    let top = e.clientY + subY.current;

    if (left <= 0) left = 0;
    if (top <= 0) top = 0;
    if (left >= 360) left = 360;
    if (top >= 180) top = 180;

    parent!.style.left = left + "px";
    parent!.style.top = top + "px";

    // 移动canvas
    window.requestAnimationFrame(() => {
      canvas.current!.style.top = -top + "px";
      canvas.current!.style.left = -left + "px";
    });
  };

  useEffect(() => {
    initCanvas();
    window.addEventListener("mouseup", mouseup);
    window.addEventListener("mousemove", moveChange);
    window.addEventListener("mousedown", clickStart);

    return () => {
      window.removeEventListener("mouseup", mouseup);
      window.addEventListener("mousemove", moveChange);
      window.addEventListener("mousedown", clickStart);
    };
  }, []);
  return (
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
        <span className="w-full h-full relative overflow-hidden outline outline-1 block outline-[#39f] ">
          <canvas ref={canvas} className="absolute" id="canvas"></canvas>
        </span>
        {/* 竖向 */}
        <div className="absolute top-0 left-1/3 border-l border-r border-dashed w-1/3 h-full opacity-50 border-[#eee]"></div>
        {/* 横向 */}
        <div className="absolute opacity-50 border-t border-b border-dashed left-0 top-1/3 w-full h-1/3 border-[#eee]"></div>

        <span
          ref={moveItem}
          className="cursor-move bg-white opacity-10 absolute left-0 top-0 w-full h-full"
        ></span>
        <MoveLineItem top ref={resizeTop}></MoveLineItem>
        <MoveLineItem left ref={resizeLeft}></MoveLineItem>
        <MoveLineItem bottom ref={resizeBottom}></MoveLineItem>
        <MoveLineItem right ref={resizeRight}></MoveLineItem>
        <MoveBlockItem top left></MoveBlockItem>
        <MoveBlockItem top right></MoveBlockItem>
        <MoveBlockItem bottom left></MoveBlockItem>
        <MoveBlockItem bottom right extra></MoveBlockItem>
        <MoveBlockItem top center></MoveBlockItem>
        <MoveBlockItem bottom center></MoveBlockItem>
        <MoveBlockItem left center></MoveBlockItem>
        <MoveBlockItem right center></MoveBlockItem>
      </div>
    </div>
  );
}

function PreviewBlock({
  imgInfo,
  imgUrl,
}: {
  imgInfo: ImgInfo;
  imgUrl: string;
}) {
  return (
    <div className="bg-[#ddd] w-[140px] flex flex-col pl-[16px] pt-[20px] border-l border-[rgb(85,85,85)] ml-[1px]">
      <span className="text-[#666] mb-[12px] text-[14px]">预览</span>
      <ImageItem
        style={{
          width: imgInfo[1].width,
          height: imgInfo[1].height,
          // transform: `translate(3px, 3px)`,
        }}
        src={imgUrl}
        className="w-[100px] h-[100px] border-[3px]"
      ></ImageItem>
      <div className="flex items-end mt-[12px]">
        <ImageItem
          style={{
            width: imgInfo[2].width,
            height: imgInfo[2].height,
            // transform: `translate(2px, 2px)`,
          }}
          src={imgUrl}
          className="w-[50px] h-[50px] border-[2px]"
        ></ImageItem>
        <ImageItem
          style={{
            width: imgInfo[3].width,
            height: imgInfo[3].height,
            // transform: `translate(1px, 1px)`,
          }}
          src={imgUrl}
          className="w-[30px] h-[30px] border-[1px]"
        ></ImageItem>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex justify-between mb-[20px] mr-[22px]">
      <div className="ml-auto text-white bg-[#3370FF] rounded-[2px] px-[15px] py-[5px] text-[14px] cursor-pointer">
        确定
      </div>
      <div className="ml-[10px] bg-[#f1f1f1] border border-[#dedede] rounded-[2px] px-[15px] py-[5px] text-[14px] cursor-pointer">
        取消
      </div>
    </div>
  );
}
