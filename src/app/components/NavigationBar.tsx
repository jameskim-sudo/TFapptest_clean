import svgPaths from "@/imports/svg-b2roforb9n";

interface NavigationBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function NavigationBar({ activeTab, onTabChange }: NavigationBarProps) {
  const isActive = (tab: string) => activeTab === tab;
  const getColor = (tab: string) => isActive(tab) ? "#F5573F" : "#A1A1A1";

  return (
    <div 
      className="fixed left-0 right-0 bg-white z-50" 
      data-name="Navigation"
      style={{
        bottom: 0,
        paddingBottom: 'env(safe-area-inset-bottom, 0px)'
      }}
    >
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[0.804px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="h-[61.071px] relative w-full" data-name="Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between pl-[47.335px] pr-[47.36px] py-0 relative size-full">
            {/* 홈 버튼 */}
            <button
              onClick={() => onTabChange("home")}
              className="h-[35.357px] w-[19.286px] cursor-pointer transition-opacity hover:opacity-70"
              data-name="Button"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.214px] items-center relative size-full">
                <div className="flex-[1_0_0] min-h-px min-w-px relative w-[19.286px]" data-name="Icon">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
                      <div className="absolute inset-[-11.11%_-16.67%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.42857 8.83929">
                          <path d={svgPaths.p13efe180} stroke={getColor("home")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[8.34%_12.5%_12.5%_12.5%]" data-name="Vector">
                      <div className="absolute inset-[-5.26%_-5.56%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0714 16.8746">
                          <path d={svgPaths.p2c1ff100} stroke={getColor("home")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[12.857px] relative shrink-0 w-[8.35px]" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                    <p className={`font-['Pretendard:Medium',sans-serif] leading-[12.857px] not-italic relative shrink-0 text-[9.643px] text-center whitespace-pre`} style={{ color: getColor("home") }}>홈</p>
                  </div>
                </div>
              </div>
            </button>

            {/* 기록하기 버튼 */}
            <button
              onClick={() => onTabChange("record")}
              className="h-[35.357px] w-[33.373px] cursor-pointer transition-opacity hover:opacity-70"
              data-name="Button"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.214px] items-center relative size-full">
                <div className="flex-[1_0_0] min-h-px min-w-px relative w-[19.286px]" data-name="Icon">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute inset-[8.33%_8.33%_8.33%_8.34%]" data-name="Vector">
                      <div className="absolute inset-[-5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6786 17.6786">
                          <path d={svgPaths.p2f6a1b60} stroke={getColor("record")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-1/2 left-[33.34%] right-[33.33%] top-1/2" data-name="Vector">
                      <div className="absolute inset-[-0.8px_-12.5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.03571 1.60714">
                          <path d="M0.803571 0.803571H7.23214" stroke={getColor("record")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-[33.33%] left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
                      <div className="absolute inset-[-12.5%_-0.8px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.60714 8.03571">
                          <path d="M0.803571 0.803571V7.23214" stroke={getColor("record")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[12.857px] relative shrink-0 w-[33.373px]" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                    <p className={`font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[12.857px] not-italic relative shrink-0 text-[9.643px] text-center whitespace-pre`} style={{ color: getColor("record") }}>기록하기</p>
                  </div>
                </div>
              </div>
            </button>

            {/* 리포트 버튼 */}
            <button
              onClick={() => onTabChange("report")}
              className="h-[35.357px] w-[25.024px] cursor-pointer transition-opacity hover:opacity-70"
              data-name="Button"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.214px] items-center relative size-full">
                <div className="flex-[1_0_0] min-h-px min-w-px relative w-[19.286px]" data-name="Icon">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute inset-[12.5%]" data-name="Vector">
                      <div className="absolute inset-[-5.56%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0714 16.0714">
                          <path d={svgPaths.p25b38640} stroke={getColor("report")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-[29.17%] left-3/4 right-1/4 top-[37.5%]" data-name="Vector">
                      <div className="absolute inset-[-12.5%_-0.8px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.60714 8.03571">
                          <path d="M0.803571 7.23214V0.803571" stroke={getColor("report")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[20.83%_45.83%_29.17%_54.17%]" data-name="Vector">
                      <div className="absolute inset-[-8.33%_-0.8px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.60714 11.25">
                          <path d="M0.803571 10.4464V0.803571" stroke={getColor("report")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[58.33%_66.67%_29.17%_33.33%]" data-name="Vector">
                      <div className="absolute inset-[-33.33%_-0.8px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.60714 4.01786">
                          <path d="M0.803571 3.21429V0.803571" stroke={getColor("report")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[12.857px] relative shrink-0 w-[25.024px]" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                    <p className={`font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[12.857px] not-italic relative shrink-0 text-[9.643px] text-center whitespace-pre`} style={{ color: getColor("report") }}>리포트</p>
                  </div>
                </div>
              </div>
            </button>

            {/* 마이 버튼 */}
            <button
              onClick={() => onTabChange("my")}
              className="h-[35.357px] w-[19.286px] cursor-pointer transition-opacity hover:opacity-70"
              data-name="Button"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.214px] items-center relative size-full">
                <div className="flex-[1_0_0] min-h-px min-w-px relative w-[19.286px]" data-name="Icon">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
                      <div className="absolute inset-[-16.67%_-7.14%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8571 6.42857">
                          <path d={svgPaths.p2c149600} stroke={getColor("my")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
                      <div className="absolute inset-[-12.5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.03571 8.03571">
                          <path d={svgPaths.p3e6d0600} stroke={getColor("my")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[12.857px] relative shrink-0 w-[16.687px]" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                    <p className={`font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[12.857px] not-italic relative shrink-0 text-[9.643px] text-center whitespace-pre`} style={{ color: getColor("my") }}>마이</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}