export function ProjectItem() {
  return (
    <div className="project-block bg-white p-[18px]">
      <form className="flex-1">
        <div className="mb-[20px] flex flex-col">
          <label for="school" className="text-[14px] mb-[10px] require">
            项目名称
          </label>
          <input
            type="text"
            placeholder="hhhhh哈哈哈哈哈"
            id="school"
            className="common-input"
          />
        </div>
        <div className="mb-[20px] flex flex-col">
          <label for="school" className="text-[14px] mb-[10px] require">
            项目角色
          </label>
          <input
            type="text"
            placeholder="hhhhh哈哈哈哈哈"
            id="school"
            className="common-input"
          />
        </div>
        <div>
          <label for="school" className="text-[14px] mb-[10px] require">
            起止时间
          </label>
          <div className="flex">
            <div
              className="date-select flex-1 h-[36px] "
              style={{ borderRadius: "5px 0 0 5px" }}
            ></div>
            <div
              className="date-select flex-1 h-[36px]"
              style={{ borderRadius: "0 5px 5px ;" }}
            ></div>
          </div>
        </div>
        <div className="mb-[20px] flex flex-col">
          <label for="school" className="text-[14px] mb-[10px] require">
            项目链接
          </label>
          <input
            type="text"
            placeholder="hhhhh哈哈哈哈哈"
            id="school"
            className="common-input"
          />
        </div>
        <div className="mb-[20px] flex flex-col">
          <label for="school" className="text-[14px] mb-[10px]">
            项目描述
          </label>
          <textarea className="common-textarea"></textarea>
        </div>
        <div className="flex">
          <span className="ml-[auto]">删除</span>
        </div>
      </form>
    </div>
  );
}
