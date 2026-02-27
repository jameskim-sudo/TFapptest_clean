import svgPaths from "./svg-jbcm7dpwih";

function Notch() {
  return <div className="absolute h-[28.8px] left-0 right-0 top-0" data-name="Notch" />;
}

function NetworkSignalLight() {
  return (
    <div className="h-[13.44px] relative shrink-0 w-[19.2px]" data-name="Network Signal / Light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 13.44">
        <g id="Network Signal /Â Light">
          <path clipRule="evenodd" d={svgPaths.p8f19e00} fill="var(--fill-0, black)" fillRule="evenodd" id="Path" />
          <path clipRule="evenodd" d={svgPaths.p27baaf80} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_2" />
          <path clipRule="evenodd" d={svgPaths.p2fc1a980} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_3" />
          <path clipRule="evenodd" d={svgPaths.p18332100} fill="var(--fill-0, white)" fillOpacity="0.18" fillRule="evenodd" id="Empty Bar" />
          <path clipRule="evenodd" d={svgPaths.p8f19e00} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_4" />
          <path clipRule="evenodd" d={svgPaths.p27baaf80} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_5" />
          <path clipRule="evenodd" d={svgPaths.p2fc1a980} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_6" />
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
          <path d={svgPaths.p19abb700} fill="var(--fill-0, black)" id="Path" />
          <path d={svgPaths.p3a35ec00} fill="var(--fill-0, black)" id="Path_2" />
          <path d={svgPaths.p531280} fill="var(--fill-0, white)" fillOpacity="0.3" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function BatteryLight() {
  return (
    <div className="h-[13.44px] relative shrink-0 w-[24px]" data-name="Battery / Light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 13.44">
        <g id="Battery / Light">
          <path d={svgPaths.p6b52b40} fill="var(--fill-0, black)" id="ô¦" />
          <g id="Subtract">
            <path d={svgPaths.p19f34500} fill="var(--fill-0, black)" fillOpacity="0.6" />
            <path d={svgPaths.p1b281d40} fill="var(--fill-0, black)" fillOpacity="0.6" />
          </g>
          <path d={svgPaths.p1fdeb300} fill="var(--fill-0, black)" fillOpacity="0.6" id="Rectangle 23" />
          <g id="Battery">
            <path d={svgPaths.p2f30f680} fill="var(--fill-0, #34C759)" id="50" />
          </g>
        </g>
      </svg>
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
    <div className="absolute h-[14.4px] left-[calc(50%+0.56px)] top-[calc(50%-0.56px)] translate-x-[-50%] translate-y-[-50%] w-[31.68px]" data-name="9:41">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.68 14.4">
        <g id="9:41">
          <g id="9:41_2">
            <path d={svgPaths.p56f4b80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2cf17600} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2346bb30} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2fe2ed80} fill="var(--fill-0, black)" />
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
    <div className="relative shrink-0 size-[16.818px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8184 16.8184">
        <g clipPath="url(#clip0_1_5271)" id="Icon">
          <path d={svgPaths.pec052a0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.40154" />
          <path d={svgPaths.p1a536000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.40154" />
        </g>
        <defs>
          <clipPath id="clip0_1_5271">
            <rect fill="white" height="16.8184" width="16.8184" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f5573f] relative rounded-[21498358px] shrink-0 size-[33.637px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[20.182px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[19.221px] left-0 text-[#101828] text-[12.814px] top-[-1.73px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          베스트 샷 영상 찾는 중
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[33.637px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10.091px] items-center relative size-full">
          <Container />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16.018px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0176 16.0176">
        <g id="Icon">
          <path d={svgPaths.p24be4180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3348" />
          <path d={svgPaths.p4bc5540} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3348" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#e5e7eb] relative rounded-[21498358px] shrink-0 size-[32.035px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] h-[19.221px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[19.221px] left-0 text-[#99a1af] text-[12.814px] top-[-1.76px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          평균보다 높은 기록 찾는 중
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[9.611px] h-[32.035px] items-center relative shrink-0 w-[256.281px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16.018px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0176 16.0176">
        <g id="Icon">
          <path d={svgPaths.p3dca1a00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3348" />
          <path d="M13.3484 1.3345V4.00409" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3348" />
          <path d="M14.6829 2.66956H12.0134" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3348" />
          <path d={svgPaths.p3bd07c80} id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3348" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#e5e7eb] relative rounded-[21498358px] shrink-0 size-[32.035px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] h-[19.221px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[19.221px] left-0 text-[#99a1af] text-[12.814px] top-[-1.76px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          스토리 만드는 중
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[9.611px] h-[32.035px] items-center relative shrink-0 w-[256.281px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[45px] top-[359.21px] w-[269.547px]">
      <Container2 />
      <Container5 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return <div className="bg-[#f5573f] h-[6.407px] rounded-[21498358px] shrink-0 w-full" data-name="Container" />;
}

function Container10() {
  return (
    <div className="absolute bg-[#e5e7eb] content-stretch flex flex-col h-[6.407px] items-start left-[51.86px] overflow-clip pl-0 pr-[150.044px] py-0 rounded-[21498358px] top-[507.37px] w-[256.281px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[16.018px] left-[51.86px] top-[520.18px] w-[256.281px]" data-name="Container">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16.018px] left-[128.27px] not-italic text-[#6a7282] text-[11.212px] text-center top-[-0.96px] translate-x-[-50%] whitespace-pre">46%</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative size-[52.427px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.4271 52.4271">
        <g id="Icon">
          <path d={svgPaths.p15719640} id="Vector" stroke="var(--stroke-0, #F5573F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.36893" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#f49b90] content-stretch flex items-center justify-center left-[141.56px] opacity-[0.53] rounded-[21498358px] size-[76.884px] top-[171px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 size-[71.5px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[60.346deg]">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[17px] relative shrink-0 w-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[22.425px] left-0 not-italic text-[#0a0a0a] text-[16.018px] top-[-1.76px] whitespace-pre">🎥</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[199.22px] pl-0 pr-[0.01px] py-0 rounded-[21498358px] shadow-[0px_8.009px_12.013px_-2.403px_rgba(0,0,0,0.1),0px_3.204px_4.805px_-3.204px_rgba(0,0,0,0.1)] size-[25.628px] top-[228.66px]" data-name="Container">
      <Container13 />
    </div>
  );
}

export default function Component360X() {
  return (
    <div className="bg-white relative size-full" data-name="360x640">
      <StatusBar />
      <Component />
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[22.425px] left-[179.74px] not-italic text-[#0a0a0a] text-[16.018px] text-center top-[271.75px] translate-x-[-50%] whitespace-pre">AI 일기 생성 중</p>
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[19.221px] left-[181.04px] not-italic text-[#6a7282] text-[12.814px] text-center top-[300.58px] translate-x-[-50%] whitespace-pre">잠시만 기다려주세요</p>
      <Frame />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container14 />
    </div>
  );
}