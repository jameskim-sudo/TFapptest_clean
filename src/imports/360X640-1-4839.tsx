import svgPaths from "./svg-jszjq61i5e";

function Bottom() {
  return (
    <div className="absolute bottom-0 contents right-0" data-name="bottom">
      <div className="absolute bg-white bottom-0 h-[102px] right-0 shadow-[0px_-1px_5px_0px_rgba(0,0,0,0.08)] w-[360px]" />
    </div>
  );
}

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
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[normal] left-[39.17%] not-italic right-[39.17%] text-[#2e333a] text-[16px] text-center top-[calc(50%-10px)] tracking-[-0.5px] whitespace-pre">AI 코칭 LOG</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute left-[127px] size-[28px] top-[302px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Group 518616">
          <circle cx="14" cy="14" fill="var(--fill-0, white)" id="Ellipse 783" r="14" />
          <g id="Group 518615">
            <circle cx="14" cy="14" fill="var(--fill-0, #4F4F4F)" id="Ellipse 779" r="11" />
            <circle cx="11" cy="12.3604" fill="var(--fill-0, black)" id="Ellipse 784" r="1" />
            <path d="M11 9.03809L13.312 12.3604" id="Vector 5" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p32ca5e80} fill="var(--fill-0, white)" id="Vector 7" />
            <circle cx="17.123" cy="15.5801" fill="var(--fill-0, black)" id="Ellipse 785" r="1" />
            <path d={svgPaths.p204e1980} id="Vector 8" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p31453900} fill="var(--fill-0, #FFAF2E)" id="Polygon 4" />
            <rect fill="var(--fill-0, #F5573F)" height="3.16122" id="Rectangle 44429" rx="0.5" transform="rotate(30.6846 10.6133 2)" width="19.0886" x="10.6133" y="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[20px] top-[290px]">
      <div className="absolute bg-[#f5573f] border border-[#ff482c] border-solid h-[52px] left-[20px] rounded-[8px] top-[290px] w-[155px]" />
      <Group5 />
      <div className="absolute flex flex-col font-['Pretendard:Bold',sans-serif] justify-end leading-[0] left-[44px] not-italic text-[16px] text-white top-[326px] tracking-[-0.5px] translate-y-[-100%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">최고의 날씨</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[185px] top-[228px]">
      <div className="absolute bg-white border border-[#ff482c] border-solid h-[52px] left-[185px] rounded-[8px] top-[228px] w-[155px]" />
      <div className="absolute flex flex-col font-['Pretendard:Bold',sans-serif] justify-end leading-[0] left-[209px] not-italic text-[#292929] text-[16px] top-[264px] tracking-[-0.5px] translate-y-[-100%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">매끄러운 진행</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[20px] top-[228px]">
      <div className="absolute bg-white border border-[#ff482c] border-solid h-[52px] left-[20px] rounded-[8px] top-[228px] w-[155px]" />
      <div className="absolute flex flex-col font-['Pretendard:Bold',sans-serif] justify-end leading-[0] left-[44px] not-italic text-[#292929] text-[16px] top-[264px] tracking-[-0.5px] translate-y-[-100%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">즐거운 대화</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute left-[292px] size-[28px] top-[302px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Group 518616">
          <circle cx="14" cy="14" fill="var(--fill-0, white)" id="Ellipse 783" r="14" />
          <g id="Group 518615">
            <circle cx="14" cy="14" fill="var(--fill-0, #4F4F4F)" id="Ellipse 779" r="11" />
            <circle cx="11" cy="12.3604" fill="var(--fill-0, black)" id="Ellipse 784" r="1" />
            <path d="M11 9.03809L13.312 12.3604" id="Vector 5" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p32ca5e80} fill="var(--fill-0, white)" id="Vector 7" />
            <circle cx="17.123" cy="15.5801" fill="var(--fill-0, black)" id="Ellipse 785" r="1" />
            <path d={svgPaths.p204e1980} id="Vector 8" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p31453900} fill="var(--fill-0, #FFAF2E)" id="Polygon 4" />
            <rect fill="var(--fill-0, #F5573F)" height="3.16122" id="Rectangle 44429" rx="0.5" transform="rotate(30.6846 10.6133 2)" width="19.0886" x="10.6133" y="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[185px] top-[290px]">
      <div className="absolute bg-[#f5573f] border border-[#ff482c] border-solid h-[52px] left-[185px] rounded-[8px] top-[290px] w-[155px]" />
      <div className="absolute flex flex-col font-['Pretendard:Bold',sans-serif] justify-end leading-[0] left-[209px] not-italic text-[16px] text-white top-[326px] tracking-[-0.5px] translate-y-[-100%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">기타</p>
      </div>
      <Group6 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Rectangle 3316"></g>
          <path d="M7.5 5L12.5 10L7.5 15" id="Vector 26" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start ml-0 mt-0 relative">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.5px] whitespace-pre">기록 완료 및 촬영하기</p>
      <Icon1 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="[grid-area:1_/_1] bg-[#f5573f] content-stretch flex h-[52px] items-center justify-center ml-0 mt-0 px-[127px] py-[16px] relative rounded-[30px] w-[320px]">
      <Group />
    </div>
  );
}

function Btn() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="BTN">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#f5573f] content-stretch flex items-center left-[20px] rounded-[30px] top-[558px] w-[320px]">
      <Btn />
    </div>
  );
}

export default function Component360X() {
  return (
    <div className="bg-white relative size-full" data-name="360x640">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[calc(50%+160px)] not-italic text-[#292929] text-[12px] text-right top-[518px] tracking-[-0.5px] translate-x-[-100%] whitespace-pre">17 / 100</p>
      <Bottom />
      <StatusBar />
      <Component />
      <div className="absolute flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] left-[calc(50%-160px)] not-italic text-[#ff482c] text-[20px] top-[156.5px] tracking-[1px] translate-y-[-50%] whitespace-nowrap">
        <p className="leading-[23px] whitespace-pre">라운드 분위기</p>
      </div>
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[calc(50%-160px)] not-italic text-[#292929] text-[14px] top-[178px] tracking-[-0.5px] whitespace-pre">중복 선택이 가능합니다.</p>
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[calc(50%-160px)] not-italic text-[#292929] text-[14px] top-[372px] tracking-[-0.5px] whitespace-pre">상세 내용 입력 (최대 100자)</p>
      <Group1 />
      <Group2 />
      <div className="absolute bg-white border border-[#ff482c] border-solid h-[111px] left-[20px] rounded-[8px] top-[402px] w-[320px]" />
      <Group3 />
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[normal] left-[44px] not-italic text-[#292929] text-[12px] top-[423px] tracking-[-0.5px] w-[272px] whitespace-pre-wrap">{`동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 `}</p>
      <Group4 />
      <Frame1 />
      <div className="absolute bg-[#f49b90] h-[4px] left-[20px] top-[111px] w-[76px]" />
      <div className="absolute bg-[#f5573f] h-[4px] left-[264px] top-[111px] w-[76px]" />
      <div className="absolute bg-[#f49b90] h-[4px] left-[182px] top-[111px] w-[77px]" />
      <div className="absolute bg-[#f49b90] h-[4px] left-[102px] top-[111px] w-[77px]" />
    </div>
  );
}