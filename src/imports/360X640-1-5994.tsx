import svgPaths from "./svg-y06p47y0na";
import imgGeminiGeneratedImageYt4Drtyt4Drtyt4D from "figma:asset/4c6c84f5e10ffcbb42261d87d4cb3590ee3989e2.png";

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

function Component() {
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
      <Component />
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
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[19.286px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-11.11%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.42857 8.83929">
              <path d={svgPaths.p13efe180} id="Vector" stroke="var(--stroke-0, #F5573F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.34%_12.5%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.26%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0714 16.8746">
              <path d={svgPaths.p2c1ff100} id="Vector" stroke="var(--stroke-0, #F5573F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[12.857px] relative shrink-0 w-[8.35px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Pretendard:Medium',sans-serif] leading-[12.857px] not-italic relative shrink-0 text-[#f5573f] text-[9.643px] text-center whitespace-pre">홈</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[35.357px] relative shrink-0 w-[19.286px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.214px] items-center relative size-full">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[19.286px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.33%_8.33%_8.33%_8.34%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6786 17.6786">
              <path d={svgPaths.p2f6a1b60} id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[33.34%] right-[33.33%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.8px_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.03571 1.60714">
              <path d="M0.803571 0.803571H7.23214" id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[33.33%] left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-0.8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.60714 8.03571">
              <path d="M0.803571 0.803571V7.23214" id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[12.857px] relative shrink-0 w-[33.373px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[12.857px] not-italic relative shrink-0 text-[#a1a1a1] text-[9.643px] text-center whitespace-pre">기록하기</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[35.357px] relative shrink-0 w-[33.373px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.214px] items-center relative size-full">
        <Icon1 />
        <Text1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[19.286px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0714 16.0714">
              <path d={svgPaths.p25b38640} id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[29.17%] left-3/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-0.8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.60714 8.03571">
              <path d="M0.803571 7.23214V0.803571" id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[20.83%_45.83%_29.17%_54.17%]" data-name="Vector">
          <div className="absolute inset-[-8.33%_-0.8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.60714 11.25">
              <path d="M0.803571 10.4464V0.803571" id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_66.67%_29.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-33.33%_-0.8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.60714 4.01786">
              <path d="M0.803571 3.21429V0.803571" id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[12.857px] relative shrink-0 w-[25.024px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[12.857px] not-italic relative shrink-0 text-[#a1a1a1] text-[9.643px] text-center whitespace-pre">리포트</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[35.357px] relative shrink-0 w-[25.024px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.214px] items-center relative size-full">
        <Icon2 />
        <Text2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[19.286px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8571 6.42857">
              <path d={svgPaths.p2c149600} id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.03571 8.03571">
              <path d={svgPaths.p3e6d0600} id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60714" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[12.857px] relative shrink-0 w-[16.687px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[12.857px] not-italic relative shrink-0 text-[#a1a1a1] text-[9.643px] text-center whitespace-pre">마이</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[35.357px] relative shrink-0 w-[19.286px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.214px] items-center relative size-full">
        <Icon3 />
        <Text3 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[61.071px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[47.335px] pr-[47.36px] py-0 relative size-full">
          <Button />
          <Button1 />
          <Button2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[61.875px] items-start left-0 pb-0 pt-[0.804px] px-0 top-[578px] w-[360px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[0.804px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[23px] left-[20px] top-[62px] w-[28.703px]">
      <div className="absolute inset-[0_0_-5.84%_-23.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.3801 24.3434">
          <g id="Group 518605">
            <g id="Group 518602">
              <circle cx="4.03218" cy="4.03218" fill="var(--fill-0, #004FE8)" id="Ellipse 775" r="4.03218" transform="matrix(0.707132 -0.707082 0.707132 0.707082 6.67801 11.595)" />
              <rect fill="var(--fill-0, #004FE8)" height="8.06437" id="Rectangle 44420" transform="matrix(0.707132 -0.707082 0.707132 0.707082 9.52993 14.4457)" width="8.06437" />
            </g>
            <g filter="url(#filter0_d_1_2665)" id="Vector 4">
              <path d={svgPaths.p1524ca80} fill="var(--fill-0, #FF482C)" />
            </g>
            <g id="Group 518603">
              <circle cx="4.03218" cy="4.03218" fill="var(--fill-0, #FF482C)" id="Ellipse 776" r="4.03218" transform="matrix(0.707132 -0.707082 0.707132 0.707082 12.3783 17.2971)" />
              <circle cx="4.03218" cy="4.03218" fill="var(--fill-0, #FF482C)" id="Ellipse 777" r="4.03218" transform="matrix(0.707132 -0.707082 0.707132 0.707082 23.975 5.70308)" />
              <rect fill="var(--fill-0, #FF482C)" height="8.06437" id="Rectangle 44419" transform="matrix(0.707132 -0.707082 0.707132 0.707082 15.2302 14.4464)" width="16.3975" />
            </g>
            <path d={svgPaths.p1524ca80} fill="var(--fill-0, #FF482C)" id="Vector 3" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22.8483" id="filter0_d_1_2665" width="25.1299" x="2.38419e-07" y="1.49515">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-3" dy="-3" />
              <feGaussianBlur stdDeviation="3.55" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2665" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2665" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[20px] top-[62px]">
      <Group />
      <div className="absolute flex flex-col font-['Pilseung_Gothic:Basic',sans-serif] justify-center leading-[0] left-[calc(50%-127px)] not-italic text-[#ff482c] text-[20px] top-[72px] tracking-[1px] translate-y-[-50%] whitespace-nowrap">
        <p className="leading-[20px] whitespace-pre">까먹지마</p>
      </div>
    </div>
  );
}

export default function Component360X() {
  return (
    <div className="bg-white relative size-full" data-name="360x640">
      <StatusBar />
      <Navigation />
      <Group1 />
      <div className="absolute bg-gradient-to-b from-[#e8ebf3] h-[239px] left-[20px] rounded-[18px] to-[#eaedf4] top-[105px] via-[#ebeff5] via-[49.038%] w-[320px]" />
      <div className="absolute h-[160.593px] left-[calc(50%+0.27px)] top-[144.2px] translate-x-[-50%] w-[133.451px]" data-name="Gemini_Generated_Image_yt4drtyt4drtyt4d">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.12%] left-[-5.39%] max-w-none top-0 w-[191.24%]" src={imgGeminiGeneratedImageYt4Drtyt4Drtyt4D} />
        </div>
      </div>
      <div className="absolute bg-[rgba(255,72,44,0.5)] h-[19px] left-[126px] rounded-[20px] top-[125px] w-[107px]" />
      <div className="absolute flex flex-col font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] justify-end leading-[0] left-[calc(50%-35px)] not-italic text-[12px] text-white top-[142px] tracking-[-0.5px] translate-y-[-100%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">기록한지 n일차</p>
      </div>
    </div>
  );
}