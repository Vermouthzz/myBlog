import { useRef } from "react"

export default function CreateResumePage() {
    const workDescription = useRef(null)
  return <div className="w-[1064px] mx-auto">
  <div className="flex py-[40px] common-border-btm">
      <div className="flex flex-col w-[40%]">
          <div className="text-[20px] font-medium pb-[5px] relative">
              基础信息
              <div className="absolute w-[26px] h-[4px] bottom-[-2px] bg-[#3370FF]"></div>
          </div>
          <span className="text-[14px] text-gray-500 mt-[20px]">请填写教育经历</span>
      </div>
      <form className="flex-1">
          <div className="mb-[20px] flex flex-col">
              <label for="school" className="text-[14px] mb-[10px] require">姓名</label>
              <input type="text" placeholder="hhhhh哈哈哈哈哈" id="school" className="common-input" />
          </div>
          <div className="mb-[20px] flex flex-col">
              <label for="school" className="text-[14px] mb-[10px] require">手机号码</label>
              <input type="text" placeholder="hhhhh哈哈哈哈哈" id="school" className="common-input" />
          </div>
          <div className="mb-[20px] flex flex-col">
              <label for="school" className="text-[14px] mb-[10px] require">邮箱</label>
              <input type="text" placeholder="hhhhh哈哈哈哈哈" id="school" className="common-input" />
          </div>
      </form>
  </div>
  <div className="py-[40px] common-border-btm">
      <div className="flex pb-[40px]">
          <div className="w-[40%] text-[20px] relative">
              工作经历
              <div className="absolute w-[26px] h-[4px] bottom-[-8px]" style="background-color: #3370FF;"></div>
          </div>
          <input v-model="hasWork" type="checkbox"></input>
          <label for="" className="ml-[15px]">没有工作经历</label>
      </div>
      <div className="flex">
          <div className="w-[40%] text-[14px] text-gray-500">请填写工作经历</div>
          <div className="px-[20px] common-hover flex-1">
              <form className="pt-[25px] border-t border-[#EFF1F1]">
                  <div className="mb-[20px] flex flex-col">
                      <label for="school" className="text-[14px] mb-[10px] require">公司</label>
                      <input type="text" placeholder="hhhhh哈哈哈哈哈" id="school" className="common-input" />
                  </div>
                  <div className="mb-[20px] flex flex-col">
                      <label for="school" className="text-[14px] mb-[10px] require">职位</label>
                      <input type="text" placeholder="hhhhh哈哈哈哈哈" id="school" className="common-input" />
                  </div>
                  <div className="mb-[20px] flex flex-col">
                      <label for="school" className="text-[14px] mb-[10px] require">起止时间</label>
                      <div className="flex">
                          <div className="date-select flex-1 h-[36px]" style="border-radius: 5px 0 0 5px;"></div>
                          <div className="date-select flex-1 h-[36px]" style="border-radius: 0 5px 5px 0;"></div>
                      </div>
                  </div>
                  <div className="flex flex-col">
                      <label for="school" className="text-[14px] mb-[10px]">描述</label>
                      <textarea className="common-textarea" ref="workDescription"
                          @input="onTextareaChange"></textarea>
                  </div>
              </form>
              <div className="flex items-center" style="color: #3370FF;">
                  <span className="text-[30px]">+</span>
                  <span className="ml-[6px]">添加</span>
              </div>
          </div>
      </div>
  </div>
  <div className="flex py-[40px] commoon-block">
      <div className="flex flex-col w-[40%]">
          <div className="text-[20px] font-medium relative">
              教育经历
              <div className="absolute w-[26px] h-[4px] bottom-[-8px]" style="background-color: #3370FF;"></div>
          </div>
          <span className="text-[14px] text-gray-500 mt-[20px]">请填写教育经历</span>
      </div>
      <form className="flex-1 common-hover p-[20px]">
          <div className="mb-[20px] flex flex-col">
              <label for="school" className="text-[14px] mb-[10px] require">学校</label>
              <input type="text" placeholder="hhhhh哈哈哈哈哈" id="school" className="common-input">
          </div>
          <div className="mb-[20px] flex flex-col">
              <label for="school" className="text-[14px] mb-[10px] require">学历</label>
              <input type="text" placeholder="hhhhh哈哈哈哈哈" id="school" className="common-input">
          </div>
          <div className="mb-[20px] flex flex-col">
              <label for="school" className="text-[14px] mb-[10px] require">专业</label>
              <input type="text" placeholder="hhhhh哈哈哈哈哈" id="school" className="common-input">
          </div>
          <div className="flex flex-col">
              <label for="school" className="text-[14px] mb-[10px] require">起止时间</label>
              <div className="flex">
                  <div className="date-select flex-1 h-[36px] relative" style="border-radius: 5px 0 0 5px;">
                      <div>
                          {/* 年 */}
                          <ul>
                              <li></li>
                          </ul>
                          {/* 月 */}
                          <ul>
                              <li></li>
                          </ul>
                      </div>
                  </div>
                  <div className="date-select flex-1 h-[36px]" style="border-radius: 0 5px 5px 0;"></div>
              </div>
          </div>
      </form>
  </div>

  <div className="flex py-[40px] commoon-block">
      <div className="flex flex-col w-[40%]">
          <div className="text-[20px] font-medium relative">
              项目经历
              <div className="absolute w-[26px] h-[4px] bottom-[-8px]" style="background-color: #3370FF;"></div>
          </div>
          <span className="text-[14px] text-gray-500 mt-[20px]">请填写项目经历</span>
      </div>
      <div className="flex-1">
          <project-item></project-item>
      </div>
  </div>

  <div className="flex py-[40px] commoon-block">
      <div className="flex flex-col w-[40%]">
          <div className="text-[20px] font-medium relative">
              语言
              <div className="absolute w-[26px] h-[4px] bottom-[-8px]" style="background-color: #3370FF;"></div>
          </div>
          <span className="text-[14px] text-gray-500 mt-[20px]">请填写语言能力</span>
      </div>
      <div className="p-[10px] flex-1">
          <div className="relative">
              <label for="school" className="text-[14px]">语言</label>
              <div className="felx items-center py-[8px] px-[12px] common-border cursor-pointer"
                  @click="selectLangue">
                  <div v-show="!isFocus">哈哈哈哈哈哈哈</div>
                  <input className="border-none" type="text" v-show="isFocus" ref="langueInput">
                  <div></div>
              </div>
              <ul className="absolute w-full p-[10px] shadow-xl bg-white h-[0px] hidden overflow-scroll ul-list"
                  ref="langueRef">
                  <li className="p-[10px] li-item" v-for="item in langueList" :key="item.text">{{ item.text }}</li>
              </ul>
          </div>
          <div className="relative">
              <label for="school" className="text-[14px]">精通程度</label>
              <div className="felx items-center py-[8px] px-[12px] common-border cursor-pointer"
                  @click="selectLangue">
                  <div v-show="!isFocus">哈哈哈哈哈哈哈</div>
                  <input className="border-none" type="text" v-show="isFocus" ref="langueInput">
                  <div></div>
              </div>
              <ul className="absolute w-full p-[10px] shadow-xl bg-white h-[0px] hidden overflow-scroll ul-list"
                  ref="langueRef">
                  <li className="p-[10px] li-item" v-for="item in jingtList" key={item.text}>{{ item.text }}</li>
              </ul>
          </div>
      </div>
  </div>
  <div className="flex py-[40px]">
      <div className="flex flex-col w-[40%]">
          <div className="text-[20px] font-medium relative">
              自我评价
              <div className="absolute w-[26px] h-[4px] bottom-[-8px]" style="background-color: #3370FF;"></div>
          </div>
          <span className="text-[14px] text-gray-500 mt-[20px]">请填写自我评价</span>
      </div>
      <div className="flex-1 flex flex-col">
          <label for="school" className="text-[14px] mb-[10px]">自我评价</label>
          <textarea ref="myDescription" className="common-textarea" @input="onTextareaChange"></textarea>
      </div>
  </div>
</div>;
}
