import React, { useCallback, useState } from "react"

interface Props {
    list: { url: string, }[]
}

export function PreviewImage({list}: Props) {
    const [showNextPreBtn, setNextPreShow] = useState(false)
    const [preWhite, setPreWhite] = useState(false)
    const [nextWhite, setNextWhite] = useState(false)
    const clickImg = useCallback(() => {}, [])
    const handleNextPre = useCallback((type: string) => {
        
    }, [])
  return <React.Fragment>
    <div className="w-[900px] h-[90vh] px-[100px] bg-black absolute z-10 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2"
        onMouseEnter={() => setNextPreShow(true)} onMouseLeave={() => setNextPreShow(false)}>
        <div>
            关闭
        </div>
        <div onClick={clickImg} className="relative z-[11]">   
            <img className="h-[80vh]" src="/image/main-bg.webp" />
        </div>
        <div className="absolute w-full h-full top-0 left-0" v-show="showNextPreBtn">
            {/* 上一张 */}
            <div className="w-[30%] h-full" onMouseEnter={() => setPreWhite(true)} onMouseLeave={() => () => setPreWhite(false)}>
                <div className="absolute top-[50%] left-[10px] -translate-y-1/2" onClick={() => handleNextPre('pre')}>
                    <svg t="1733193369629" className="icon svg-pre" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="12232" width="30" height="30">
                        <path
                            d="M825.406293 442.368L335.763627 26.453333a101.376 101.376 0 0 0-136.789334 0 86.442667 86.442667 0 0 0 0 128l420.864 357.546667-420.864 357.376a86.442667 86.442667 0 0 0 0 128c37.717333 35.413333 98.986667 35.413333 136.789334 0l489.642666-415.829333c20.394667-19.114667 29.354667-44.544 27.733334-69.632a86.698667 86.698667 0 0 0-27.733334-69.632"
                            fill={preWhite ? '#ffffff' : '#e6e6e6'} p-id="12233"></path>
                    </svg>
                </div>
            </div>
            
            <div className="w-[70%] h-full" onMouseEnter={() => setNextWhite(true)} onMouseLeave={() => setNextWhite(false)}>
                <div className="absolute top-[50%] right-[10px] -translate-y-1/2"
                    onClick={() => handleNextPre('next')}>
                    <svg t="1733193369629" className="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="12232" width="30" height="30">
                        <path
                            d="M825.406293 442.368L335.763627 26.453333a101.376 101.376 0 0 0-136.789334 0 86.442667 86.442667 0 0 0 0 128l420.864 357.546667-420.864 357.376a86.442667 86.442667 0 0 0 0 128c37.717333 35.413333 98.986667 35.413333 136.789334 0l489.642666-415.829333c20.394667-19.114667 29.354667-44.544 27.733334-69.632a86.698667 86.698667 0 0 0-27.733334-69.632"
                            fill={nextWhite ? '#ffffff' : '#e6e6e6'} p-id="12233"></path>
                    </svg>
                </div>
            </div>
        </div>

        <ul className="w-[380px] center mt-[16px] flex relative z-[12px]">
            {[1,2,3].map((item,index) => (
                <li className={`w-[40px] h-[40px] ${index == select ? 'active-li' : ''}`} className="i == select ? ['active-li'] : '[]'" v-for="i in 3" :key="i">
                    <img onClick={() => handelSelectSmallImg(index)} src="/image/avator.jpg" className="w-full h-full">
                </li>
            ))}
        </ul>
    </div>
    <div className="h-screen w-screen bg-black opacity-[0.85] fixed top-0 left-0" onClick={close}>

    </div>
  </React.Fragment>
}
