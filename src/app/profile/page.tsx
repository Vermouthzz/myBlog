export default function ProfilePage() {
  return (
    <div>
      <div className="w-[1240px] mx-auto bg-yellow-200 h-[200px]">
        <div className="relative w-[140px]">
          <img
            className="w-[140px] h-[140px] rounded-[5px] cursor-pointer"
            src="/image/avator.jpg"
          />
          <div className="text-white rounded-b-[5px] text-center cursor-pointer bg-black opacity-50 absolute w-full bottom-0 left-0 leading-[30px]">
            修改头像
          </div>
        </div>
        <div>
          <ul>
            <li>主页背景</li>
            <li></li>
            <li>主页背景</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
