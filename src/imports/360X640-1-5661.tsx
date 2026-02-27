import svgPaths from "./svg-w6qmt4whw1";
import { IMAGE_URLS } from "../config/imageUrls";

function Notch() {
  return <div className="absolute h-[28.8px] left-0 right-0 top-0" data-name="Notch" />;
}

function NetworkSignalLight() {
  return (
    <div className="h-[13.44px] relative shrink-0 w-[19.2px]" data-name="Network Signal / Light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 13.44">
        <g id="Network Signal /Â Light">
          <path clipRule="evenodd" d={svgPaths.p1f162900} fill="var(--fill-0, black)" fillRule="evenodd" id="Path" />
          <path clipRule="evenodd" d={svgPaths.p1d5dbe40} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_2" />
          <path clipRule="evenodd" d={svgPaths.p18019e00} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_3" />
          <path clipRule="evenodd" d={svgPaths.p342c3400} fill="var(--fill-0, white)" fillOpacity="0.18" fillRule="evenodd" id="Empty Bar" />
          <path clipRule="evenodd" d={svgPaths.p1f162900} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_4" />
          <path clipRule="evenodd" d={svgPaths.p1d5dbe40} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_5" />
          <path clipRule="evenodd" d={svgPaths.p18019e00} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_6" />
        </g>
      </svg>
    </div>
  );
}

function WiFiSignalLight() {
  return (
    <div className="h-[13.44px] relative shrink-0 w-[15.36px]" data-name="WiFi Signal / Light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.36 13.44">
        <g id="WiFi Signal / Light">
          <path d={svgPaths.p3dc48e00} fill="var(--fill-0, black)" id="Path" />
          <path d={svgPaths.p3b3c95f0} fill="var(--fill-0, black)" id="Path_2" />
          <path d={svgPaths.p932c700} fill="var(--fill-0, white)" fillOpacity="0.3" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function BatteryLight() {
  return (
    <div className="h-[13.44px] relative shrink-0 w-[24px]" data-name="Battery / Light">
      <div className="absolute inset-[0_-4.17%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13.44">
          <g id="Battery / Light">
            <path d={svgPaths.p693fb00} fill="var(--fill-0, black)" id="ô¦" />
            <g id="Subtract">
              <path d={svgPaths.p38366500} fill="var(--fill-0, black)" fillOpacity="0.6" />
              <path d={svgPaths.p9a22600} fill="var(--fill-0, black)" fillOpacity="0.6" />
            </g>
            <path d={svgPaths.p5709d00} fill="var(--fill-0, black)" fillOpacity="0.6" id="Rectangle 23" />
            <g id="Battery">
              <path d={svgPaths.p1fcc0380} fill="var(--fill-0, #34C759)" id="50" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function StatusIcons() {
  return (
    <div className="absolute content-stretch flex gap-[3.84px] items-center right-[13.44px] top-[15.36px]" data-name="Status Icons">
      <NetworkSignalLight />
      <WiFiSignalLight />
      <BatteryLight />
    </div>
  );
}

function Indicator() {
  return (
    <div className="absolute right-[68.16px] size-[5.76px] top-[7.68px]" data-name="Indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.76 5.76">
        <g id="Indicator"></g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[15px] left-[calc(50%+1.58px)] top-[calc(50%+0.42px)] translate-x-[-50%] translate-y-[-50%] w-[33px]" data-name="9:41">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 15">
        <g id="9:41">
          <g id="9:41_2">
            <path d={svgPaths.p309cf100} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1285b880} fill="var(--fill-0, black)" />
            <path d={svgPaths.pa9bea00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1d3f77f0} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TimeLight() {
  return (
    <div className="absolute h-[20.16px] left-[20.16px] overflow-clip rounded-[19.2px] top-[11.52px] w-[51.84px]" data-name="Time / Light">
      <Component1 />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute h-[42px] left-0 overflow-clip top-0 w-[360px]" data-name="Status Bar">
      <Notch />
      <StatusIcons />
      <Indicator />
      <TimeLight />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[14px] size-[24px] top-[15px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_3907)" id="icon">
          <g id="Rectangle 3316"></g>
          <path d={svgPaths.p80ba990} id="Vector" stroke="var(--stroke-0, #272833)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_1_3907">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[54px] left-0 overflow-clip top-[42px] w-[360px]" data-name="00_상단">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 54">
        <path clipRule="evenodd" d="M0 0H360V54H0V0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="ìë¨_BG" />
      </svg>
      <Icon />
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[normal] left-[40.28%] not-italic right-[40%] text-[#2e333a] text-[16px] text-center top-[calc(50%-10px)] tracking-[-0.5px] whitespace-pre">코칭 레포트</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[305px] size-[20px] top-[215px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Rectangle 3316"></g>
          <path d="M7.5 5L12.5 10L7.5 15" id="Vector 26" stroke="var(--stroke-0, #292929)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Rectangle 3316"></g>
          <path d="M7.5 5L12.5 10L7.5 15" id="Vector 26" stroke="var(--stroke-0, #292929)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[23px] left-[108px] top-[398px] w-[24.029px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0293 23">
        <g id="Group 518615">
          <circle cx="11" cy="12" fill="var(--fill-0, #4F4F4F)" id="Ellipse 779" r="11" />
          <circle cx="8" cy="10.3604" fill="var(--fill-0, black)" id="Ellipse 784" r="1" />
          <path d="M8 7.03809L10.312 10.3604" id="Vector 5" stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p21031400} fill="var(--fill-0, white)" id="Vector 7" />
          <circle cx="14.123" cy="13.5801" fill="var(--fill-0, black)" id="Ellipse 785" r="1" />
          <path d={svgPaths.p256cff00} id="Vector 8" stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p1216d00} fill="var(--fill-0, #FFAF2E)" id="Polygon 4" />
          <rect fill="var(--fill-0, #F5573F)" height="3.16122" id="Rectangle 44429" rx="0.5" transform="rotate(30.6846 7.61328 0)" width="19.0886" x="7.61328" />
        </g>
      </svg>
    </div>
  );
}

export default function Component360X() {
  return (
    <div className="bg-white relative size-full" data-name="360x640">
      <StatusBar />
      <Component />
      <div className="absolute bg-gradient-to-b from-[#e8ebf3] h-[239px] left-[20px] rounded-[8px] to-[#eaedf4] top-[105px] via-[#ebeff5] via-[49.038%] w-[320px]" />
      <Icon1 />
      <div className="absolute flex items-center justify-center left-[35px] size-[20px] top-[215px]">
        <div className="flex-none rotate-[180deg]">
          <Icon2 />
        </div>
      </div>
      <div className="absolute h-[131px] left-[calc(50%+0.5px)] top-[172px] translate-x-[-50%] w-[109px]" data-name="Gemini_Generated_Image_yt4drtyt4drtyt4d">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[100.12%] left-[-5.39%] max-w-none top-0 w-[191.24%]"
            src={IMAGE_URLS.COACH_CHARACTER_MAIN}
          />
        </div>
      </div>
      <div className="absolute bg-[#f5573f] h-[70px] left-[20px] rounded-[8px] top-[364px] w-[320px]" />
      <div className="absolute h-[2.5px] left-[122px] top-[412.5px] w-[5px]">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 3.5">
            <path d={svgPaths.p9c4ce80} fill="var(--fill-0, white)" id="Vector 6" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,72,44,0.5)] h-[33px] left-[119px] rounded-[20px] top-[131px] w-[122px]" />
      <div className="absolute flex flex-col font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] justify-end leading-[0] left-[calc(50%-0.5px)] not-italic text-[#292929] text-[14px] text-center top-[326px] tracking-[-0.5px] translate-x-[-50%] translate-y-[-100%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">20 SCORE</p>
      </div>
      <div className="absolute flex flex-col font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] justify-end leading-[0] left-[calc(50%-147px)] not-italic text-[14px] text-white top-[392px] tracking-[-0.5px] translate-y-[-100%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">LEVEL</p>
      </div>
      <div className="absolute flex items-center justify-center left-[200px] size-[14px] top-[160.49px]">
        <div className="flex-none rotate-[180deg]">
          <div className="relative size-[14px]">
            <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1244 10.5">
                <path d={svgPaths.p14e53400} fill="var(--fill-0, #FF482C)" fillOpacity="0.5" id="Polygon 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[calc(50%-45px)] not-italic text-[#292929] text-[12px] top-[137px] tracking-[-0.5px] whitespace-pre">아쉬운 마음은 뒤로 !</p>
      <div className="absolute left-[33px] size-[22px] top-[399px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <circle cx="11" cy="11" fill="var(--fill-0, white)" id="Ellipse 778" r="11" />
        </svg>
      </div>
      <div className="absolute left-[105px] size-[28px] top-[396px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <circle cx="14" cy="14" fill="var(--fill-0, white)" id="Ellipse 783" r="14" />
        </svg>
      </div>
      <div className="absolute left-[305px] size-[22px] top-[399px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <circle cx="11" cy="11" fill="var(--fill-0, white)" id="Ellipse 778" r="11" />
        </svg>
      </div>
      <div className="absolute bg-white h-[5px] left-[48px] top-[408px] w-[67px]" />
      <div className="absolute h-0 left-[129px] top-[412px] w-[180px]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 3">
            <line id="Line 17" stroke="var(--stroke-0, white)" strokeDasharray="6 6" strokeWidth="3" x2="180" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[307px] size-[18px] top-[401px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="var(--fill-0, #004FE8)" id="Ellipse 781" r="9" />
        </svg>
      </div>
      <div className="absolute left-[35px] size-[18px] top-[401px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="var(--fill-0, #004FE8)" id="Ellipse 781" r="9" />
        </svg>
      </div>
      <Group />
      <div className="absolute h-[6px] left-[131px] top-[392px] w-[4px]">
        <div className="absolute inset-[-9.25%_-20.8%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.6641 7.1094">
            <path d={svgPaths.p70118c0} id="Vector 9" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[5.417px] items-center justify-center left-[98.03px] top-[394.97px] w-[6.831px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[255deg]">
          <div className="h-[6px] relative w-[4px]">
            <div className="absolute inset-[-9.25%_-20.8%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.6641 7.1094">
                <path d={svgPaths.p70118c0} id="Vector 11" stroke="var(--stroke-0, white)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[4.683px] items-center justify-center left-[133.5px] top-[395.66px] w-[4.005px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.361deg]">
          <div className="h-[4px] relative w-[3px]">
            <div className="absolute inset-[-11.25%_-20%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.2 4.9">
                <path d="M3.6 0.45L0.6 4.45" id="Vector 10" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[3.094px] items-center justify-center left-[101.66px] top-[392.94px] w-[4.07px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[271.361deg]">
          <div className="h-[4px] relative w-[3px]">
            <div className="absolute inset-[-11.25%_-20%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.2 4.9">
                <path d="M3.6 0.45L0.6 4.45" id="Vector 12" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[20px] left-[calc(50%-160px)] not-italic text-[#292929] text-[14px] top-[454px] tracking-[-0.5px] whitespace-pre">코치 어드바이스</p>
      <div className="absolute bg-white border border-[#ff482c] border-solid h-[70px] left-[20px] rounded-[8px] top-[489px] w-[320px]" />
      <div className="absolute bg-white border border-[#ff482c] border-solid h-[70px] left-[20px] rounded-[8px] top-[569px] w-[320px]" />
      <div className="absolute bg-[#ff482c] left-[32px] rounded-[6px] size-[23px] top-[504px]" />
      <div className="absolute bg-[#ff482c] left-[32px] rounded-[6px] size-[23px] top-[584px]" />
      <div className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[62px] not-italic text-[#292929] text-[12px] top-[504px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">헤저드에 대한 시각적 공포를 줄이기 위해 공포의 대상이</p>
        <p className="mb-0">아닌 공을 보낼 안전한 지점에만 집중하는 프리샷 루틴을</p>
        <p>확립하세요.</p>
      </div>
      <div className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[62px] not-italic text-[#292929] text-[12px] top-[584px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">신체적 피로감이 있는 상태에서는 스윙 폼이 무너지기 쉬</p>
        <p className="mb-0">우므로, 연습량을 줄이고 정교한 임팩트 연습에만 집중하</p>
        <p>는 것이 효율적입니다.</p>
      </div>
      <div className="absolute flex flex-col font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] justify-end leading-[0] left-[39px] not-italic text-[14px] text-white top-[525px] tracking-[-0.5px] translate-y-[-100%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">1</p>
      </div>
      <div className="absolute flex flex-col font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] justify-end leading-[0] left-[39px] not-italic text-[14px] text-white top-[605px] tracking-[-0.5px] translate-y-[-100%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">2</p>
      </div>
    </div>
  );
}