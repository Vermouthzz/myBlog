import { useState } from "react";

const schoolInfo = [
  { name: "毕业院校", value: "华东交通大学" },
  { name: "所在城市", value: "江西赣州" },
  { name: "毕业时间", value: "2025" },
];
const concactList = [
  { name: "QQ", icon: "/src/assets/image/QQ.png", type: 1 },
  { name: "WeiChat", icon: "/src/assets/image/weixin.png", type: 2 },
  { name: "GitHub", icon: "/src/assets/image/githubb.png", type: 3 },
  { name: "稀土掘金", icon: "/src/assets/image/th.png", type: 4 },
];
export function UserInfo({ className }: { className: string }) {
  const [weiChatShow, setWechatShow] = useState(false);
  const handleConcact = (item: any) => {
    if (item == 1) {
    }
  };
  return (
    <div className={`${className} bg-white`}>
      <div className="rounded-[10px] w-[280px] flex flex-col shadow-xl">
        {/* 个人信息 */}
        <div className="profile-block flex flex-col items-center justify-center py-[20px]">
          <img
            src="/image/avator.jpg"
            className="w-[60px] h-[60px] rounded-full"
          />
          <span className="mt-[10px] text-white">工藤新一</span>
        </div>
        {/* 列表 */}
        <div>
          <ul className="flex mt-[16px]">
            {[1, 2, 3].map((item) => (
              <li key={item} className="flex flex-col items-center flex-1">
                <span>1</span>
                <div>说说个数</div>
              </li>
            ))}
          </ul>
          {/* 联系方式 */}
          <ul className="flex items-center justify-evenly my-[16px] relative">
            {concactList.map((item) => (
              <li className="w-[24px] h-[24px]" key={item.type}>
                {item.type == 2 ? (
                  <div className="h-full">
                    <img
                      src={item.icon}
                      className="w-full h-full"
                      onMouseEnter={() => setWechatShow(true)}
                      onMouseLeave={() => setWechatShow(false)}
                    />
                    <img
                      v-show="weiChatShow"
                      className="absolute top-[30px] left-[70px] w-[80px] h-[80px]"
                      src="/src/assets/image/avator.jpg"
                    />
                  </div>
                ) : (
                  <img
                    src={item.icon}
                    className="w-full h-full"
                    onClick={() => handleConcact(item.type)}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* 学历 */}
          <ul className="px-[12px] mb-[20px]">
            {schoolInfo.map((item) => (
              <li
                className="flex items-center justify-between mb-[8px]"
                key={item.name}
              >
                <span>{item.name}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
