import svgPaths from "@/imports/svg-ghdg66m0v2";
import imgGeminiGeneratedImageYt4Drtyt4Drtyt4D from "figma:asset/2cc215f0d18d8ab1402f656cde1ddfad7b46a3f1.png";
import { useState } from "react";
import NavigationBar from "@/app/components/NavigationBar";
import CharacterVideo from "@/app/components/CharacterVideo";

interface HomeScreenProps {
  onTabChange?: (tab: string) => void;
  onGoalSettingClick?: () => void;
}

function StatusBar() {
  return (
    <div className="absolute h-[42px] left-0 overflow-clip top-0 w-full max-w-[480px]">
      <div className="absolute h-[28.8px] left-0 right-0 top-0" />
      <div className="absolute content-stretch flex gap-[3.84px] items-center right-[13.44px] top-[15.36px]">
        {/* Network Signal */}
        <div className="h-[13.44px] relative shrink-0 w-[19.2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 13.44">
            <g>
              <path clipRule="evenodd" d={svgPaths.p1f162900} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1d5dbe40} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p18019e00} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p342c3400} fill="white" fillOpacity="0.18" fillRule="evenodd" />
            </g>
          </svg>
        </div>
        {/* WiFi Signal */}
        <div className="h-[13.44px] relative shrink-0 w-[15.36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.36 13.44">
            <g>
              <path d={svgPaths.p3dc48e00} fill="black" />
              <path d={svgPaths.p3b3c95f0} fill="black" />
              <path d={svgPaths.p932c700} fill="white" fillOpacity="0.3" />
            </g>
          </svg>
        </div>
        {/* Battery */}
        <div className="h-[13.44px] relative shrink-0 w-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13.44">
            <g>
              <path d={svgPaths.p693fb00} fill="black" />
              <path d={svgPaths.p38366500} fill="black" fillOpacity="0.6" />
              <path d={svgPaths.p9a22600} fill="black" fillOpacity="0.6" />
              <path d={svgPaths.p5709d00} fill="black" fillOpacity="0.6" />
              <path d={svgPaths.p1fcc0380} fill="#34C759" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute h-[20.16px] left-[20.16px] overflow-clip rounded-[19.2px] top-[11.52px] w-[51.84px]">
        <div className="absolute h-[15px] left-[calc(50%+1.58px)] top-[calc(50%+0.42px)] translate-x-[-50%] translate-y-[-50%] w-[33px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 15">
            <g>
              <path d={svgPaths.p309cf100} fill="black" />
              <path d={svgPaths.p1285b880} fill="black" />
              <path d={svgPaths.pa9bea00} fill="black" />
              <path d={svgPaths.p1d3f77f0} fill="black" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[23px] w-[28.703px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.3801 24.3434">
        <g>
          <g>
            <circle cx="4.03218" cy="4.03218" fill="#004FE8" r="4.03218" transform="matrix(0.707132 -0.707082 0.707132 0.707082 6.67801 11.595)" />
            <rect fill="#004FE8" height="8.06437" transform="matrix(0.707132 -0.707082 0.707132 0.707082 9.52993 14.4457)" width="8.06437" />
          </g>
          <g filter="url(#filter0_d_logo)" id="Vector4">
            <path d={svgPaths.p1524ca80} fill="#FF482C" />
          </g>
          <g>
            <circle cx="4.03218" cy="4.03218" fill="#FF482C" r="4.03218" transform="matrix(0.707132 -0.707082 0.707132 0.707082 12.3783 17.2971)" />
            <circle cx="4.03218" cy="4.03218" fill="#FF482C" r="4.03218" transform="matrix(0.707132 -0.707082 0.707132 0.707082 23.975 5.70308)" />
            <rect fill="#FF482C" height="8.06437" transform="matrix(0.707132 -0.707082 0.707132 0.707082 15.2302 14.4464)" width="16.3975" />
          </g>
          <path d={svgPaths.p1524ca80} fill="#FF482C" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22.8483" id="filter0_d_logo" width="25.1299" x="2.38419e-07" y="1.49515">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-3" dy="-3" />
            <feGaussianBlur stdDeviation="3.55" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_logo" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_logo" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default function HomeScreen({ onTabChange, onGoalSettingClick }: HomeScreenProps) {
  const [activeTab, setActiveTab] = useState("home");
  const [recordDays] = useState(7); // Days since starting to record
  const [bannerClosed, setBannerClosed] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="bg-white relative size-full overflow-hidden">
      <StatusBar />
      
      {/* Scrollable Content */}
      <div className="absolute top-[42px] left-0 right-0 bottom-[61.875px] overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="pb-4">
          {/* Logo and App Name */}
          <div className="absolute left-[20px] top-[20px] flex items-center gap-2">
            <div className="h-[23px] w-[28.703px]">
              <Logo />
            </div>
            <span className="font-[Pilseung_Gothic] text-[20px] text-[#ff482c] tracking-[1px] leading-[20px]">
              까먹지마
            </span>
          </div>

          {/* Main Card */}
          <div className="mx-[20px] mt-[63px] mb-6 max-w-[calc(100%-40px)] h-[239px] relative">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#e8ebf3] via-[#ebeff5] via-[49.038%] to-[#eaedf4] rounded-[18px]" />
            
            {/* Badge */}
            <div className="absolute left-1/2 top-[25px] -translate-x-1/2 bg-[rgba(255,72,44,0.5)] rounded-[20px] px-4 py-1 z-10 bg-[#799ed580]">
              <p className="font-['Noto_Sans_CJK',sans-serif] font-normal text-[12px] text-white tracking-[0] whitespace-nowrap relative top-[1px]">
                기록한지 {recordDays}일차
              </p>
            </div>

            {/* AI Coach Video/Image */}
            <div className="absolute left-1/2 top-[55px] -translate-x-1/2 w-[160px] h-[170px] z-0">
              <CharacterVideo 
                videoSrc="/_videos/v1/dc4faad930f9a9fdaf0a59307069515d06d0e09c" 
                imageSrc={imgGeminiGeneratedImageYt4Drtyt4Drtyt4D}
              />
            </div>
          </div>

          {/* Additional Content Area */}
          <div className="mx-[20px]">
            <div className="space-y-4">
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gradient-to-br from-[#fff5f5] to-[#ffe5e5] rounded-[12px] p-3 text-center">
                  <p className="font-['Noto_Sans_CJK',sans-serif] text-[20px] font-bold relative top-[2px] text-[#e6462c]">12</p>
                  <p className="font-['Noto_Sans_CJK',sans-serif] text-[10px] text-[#666] mt-1 tracking-[-0.5px]">총 운동</p>
                </div>
                <div className="bg-gradient-to-br from-[#f0f5ff] to-[#e0ebff] rounded-[12px] p-3 text-center">
                  <p className="font-['Noto_Sans_CJK',sans-serif] text-[20px] font-bold relative top-[2px] text-[#264d9a]">3.2</p>
                  <p className="font-['Noto_Sans_CJK',sans-serif] text-[10px] text-[#666] mt-1 tracking-[-0.5px]">평균 시간</p>
                </div>
                <div className="bg-gradient-to-br from-[#fff8f0] to-[#ffeed9] rounded-[12px] p-3 text-center">
                  <p className="font-['Noto_Sans_CJK',sans-serif] text-[20px] text-[#ff8c42] font-bold relative top-[2px]">85%</p>
                  <p className="font-['Noto_Sans_CJK',sans-serif] text-[10px] text-[#666] mt-1 tracking-[-0.5px]">
                    목표 달성
                  </p>
                </div>
              </div>

              {/* Today's Goal */}
              <div className="bg-white rounded-[16px] p-4 border border-[#f0f0f0]" style={{ boxShadow: '0 0 2px rgba(137, 137, 137, 0.2)' }}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-['Noto_Sans_CJK',sans-serif] font-bold text-[16px] text-[#292929] tracking-[-0.5px]">
                    오늘의 목표
                  </h3>
                  <button 
                    onClick={onGoalSettingClick}
                    className="font-['Noto_Sans_CJK',sans-serif] font-normal text-[12px] tracking-[-0.5px] underline hover:underline text-[#9e9e9e]"
                  >
                    목표 변경하기
                  </button>
                </div>
                <div className="flex items-center justify-between mb-2 relative top-[2px]">
                  <div className="flex-1 bg-[#f5f5f5] rounded-full h-2 mr-3">
                    <div className="bg-gradient-to-r from-[#ff482c] to-[#ff6b54] h-2 rounded-full transition-all duration-300" style={{ width: '66%' }} />
                  </div>
                  <span className="font-['Noto_Sans_CJK',sans-serif] font-bold text-[14px] text-[#ff482c] tracking-[-0.5px] whitespace-nowrap">66%</span>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                {/* Recap Banner */}
                {!bannerClosed && (
                  <div 
                    className="rounded-[12px] p-3 mb-3 flex items-center justify-between relative cursor-pointer hover:opacity-90 transition-opacity bg-[#fafafa] border border-[#F0F0F0]"
                    style={{ boxShadow: '0 0 2px rgba(137, 137, 137, 0.2)' }}
                    onClick={() => window.open('https://youtube.com/shorts/H-Y2JWM6XNk?si=AK2PDxuGzF9e1DSO', '_blank', 'width=600,height=800')}
                  >
                    <p className="font-['Noto_Sans_CJK',sans-serif] font-bold text-[14px] text-white tracking-[-0.5px] text-[#fc4d42]">
                      나의 Recap 보기
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setBannerClosed(true);
                      }}
                      className="w-5 h-5 flex items-center justify-center text-[#000000] hover:bg-gray-100 rounded-full transition-colors"
                      aria-label="배너 닫기"
                    >
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                )}
                
                <h3 className="font-['Noto_Sans_CJK',sans-serif] font-bold text-[14px] text-[#292929] mb-2 tracking-[-0.5px]">
                  최근 활동
                </h3>
                <div className="space-y-2">
                  <div className="bg-white rounded-[12px] p-3 border border-[#f0f0f0] flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#ff482c] to-[#ff6b54] rounded-full flex items-center justify-center text-xl">⛳</div>
                    <div className="flex-1">
                      <p className="font-['Noto_Sans_CJK',sans-serif] font-bold text-[12px] text-[#292929] tracking-[-0.5px]">
                        골프 스윙 분석
                      </p>
                      <p className="font-['Noto_Sans_CJK',sans-serif] font-medium text-[10px] text-[#999] tracking-[-0.5px]">
                        2시간 전
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-['Noto_Sans_CJK',sans-serif] font-bold text-[12px] text-[#ff482c]">92점</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-[12px] p-3 border border-[#f0f0f0] flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#004fe8] to-[#3d7cff] rounded-full flex items-center justify-center text-xl">🏃</div>
                    <div className="flex-1">
                      <p className="font-['Noto_Sans_CJK',sans-serif] font-bold text-[12px] text-[#292929] tracking-[-0.5px]">
                        러닝 기록
                      </p>
                      <p className="font-['Noto_Sans_CJK',sans-serif] font-medium text-[10px] text-[#999] tracking-[-0.5px]">
                        5시간 전
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-['Noto_Sans_CJK',sans-serif] font-bold text-[12px] text-[#004fe8]">88점</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-[12px] p-3 border border-[#f0f0f0] flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#9b59b6] to-[#c39bd3] rounded-full flex items-center justify-center text-xl">🧘</div>
                    <div className="flex-1">
                      <p className="font-['Noto_Sans_CJK',sans-serif] font-bold text-[12px] text-[#292929] tracking-[-0.5px]">
                        필라테스
                      </p>
                      <p className="font-['Noto_Sans_CJK',sans-serif] font-medium text-[10px] text-[#999] tracking-[-0.5px]">
                        어제
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-['Noto_Sans_CJK',sans-serif] font-bold text-[12px] text-[#9b59b6]">90점</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-[12px] p-3 border border-[#f0f0f0] flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#27ae60] to-[#52c77e] rounded-full flex items-center justify-center text-xl">⛳</div>
                    <div className="flex-1">
                      <p className="font-['Noto_Sans_CJK',sans-serif] font-bold text-[12px] text-[#292929] tracking-[-0.5px]">
                        골프 연습
                      </p>
                      <p className="font-['Noto_Sans_CJK',sans-serif] font-medium text-[10px] text-[#999] tracking-[-0.5px]">
                        2일 전
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-['Noto_Sans_CJK',sans-serif] font-bold text-[12px] text-[#27ae60]">86점</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NavigationBar activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}