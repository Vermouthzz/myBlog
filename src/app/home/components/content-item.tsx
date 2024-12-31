import { CommonUser } from "@/app/components/common-user";

export function ContentItem() {
  return (
    <div className="w-[610px] p-[12px]">
      {/* 头部内容 */}
      <CommonUser></CommonUser>
      {/* 主体内容 */}
      <div>
        <div className="line-clamp-4">哈哈哈哈哈哈哈哈哈哈</div>
        {/* 图片内容 */}
        <div className="flex">
          <img
            src="/image/main-bg.webp"
            className="w-[200px] h-[200px] img-item mr-[1px]"
          />
          <img
            src="/image/main-bg.webp"
            className="w-[200px] h-[200px] img-item mr-[1px]"
          />
          <img
            src="/image/main-bg.webp"
            className="w-[200px] h-[200px] img-item"
          />
        </div>
        {/* 视频内容 */}
        {/* <div>
          <video src=""></video>
        </div> */}
      </div>
    </div>
  );
}

// 349a709i
// 908255051
