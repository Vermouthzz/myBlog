export function ClipItem() {
  const initCanvas = () => {
    // const ctx =
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
          <div className="w-[200px] h-[200px] cursor-move absolute opacity-50 z-[60] bg-white">
            {/* 竖向 */}
            <div className="absolute top-0 left-1/3 border-dashed w-1/3 h-full border-[#eee]"></div>
            {/* 横向 */}
            <div className="absolute border-dashed left-0 top-1/3 w-full h-1/3 border-[#eee]"></div>
          </div>
          <img src="/image/avator.jpg" className="w-full" />
          <div className="absolute">
            <canvas id="canvas"></canvas>
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
