import svgPaths from "./svg-icudxm7ac5";
import { IMAGE_URLS } from "../config/imageUrls";

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

function Component() {
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

function Group1() {
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

function Group2() {
  return (
    <div className="absolute contents left-[20px] top-[62px]">
      <Group1 />
      <div className="absolute css-g0mm18 flex flex-col font-['Pilseung_Gothic:Basic',sans-serif] justify-center leading-[0] left-[calc(50%-127px)] not-italic text-[#ff482c] text-[20px] top-[72px] tracking-[1px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">까먹지마</p>
      </div>
    </div>
  );
}

function Icon() {
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
    <div className="col-1 content-stretch flex items-start ml-0 mt-0 relative row-1">
      <p className="css-ew64yg font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.5px]">운동 기록 시작하기</p>
      <Icon />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f5573f] col-1 content-stretch flex h-[52px] items-center justify-center ml-0 mt-0 px-[127px] py-[16px] relative rounded-[30px] row-1 w-[320px]">
      <Group />
    </div>
  );
}

function Btn() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="BTN">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center left-[20px] top-[520px] w-[320px]">
      <Btn />
    </div>
  );
}

function B() {
  return (
    <div className="absolute h-[158px] left-[116px] overflow-clip top-[162px] w-[127px]" data-name="B">
      <div className="absolute h-[160.593px] left-[calc(50%+0.23px)] top-[-3px] translate-x-[-50%] w-[133.451px]" data-name="Gemini_Generated_Image_yt4drtyt4drtyt4d">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[100.13%] left-[-5.39%] max-w-none top-0 w-[191.22%]"
            src={IMAGE_URLS.COACH_CHARACTER_ALT}
          />
        </div>
      </div>
    </div>
  );
}

export default function Component360X() {
  return (
    <div className="bg-white relative size-full" data-name="360x640">
      <div className="absolute bg-gradient-to-b from-[#e8ebf3] h-[239px] left-[20px] rounded-[18px] to-[#eaedf4] top-[105px] via-[#ebeff5] via-[49.038%] w-[320px]" />
      <StatusBar />
      <Group2 />
      <div className="absolute css-g0mm18 flex flex-col font-['Pilseung_Gothic:Basic',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#ff482c] text-[25px] text-center top-[404px] tracking-[1px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Smart AI Coach</p>
      </div>
      <Frame1 />
      <div className="absolute css-g0mm18 font-['Pretendard:Medium',sans-serif] leading-[0] left-1/2 not-italic text-[#292929] text-[0px] text-[14px] text-center top-[437px] tracking-[-0.5px] translate-x-[-50%]">
        <p className="css-ew64yg leading-[20px] mb-0">골프 · 필라테스 · 러닝</p>
        <p className="css-ew64yg">
          <span className="font-['Pretendard:SemiBold',sans-serif] leading-[20px] not-italic">AI 기반</span>
          <span className="leading-[20px]">{` 정밀 모션 분석`}</span>
        </p>
      </div>
      <p className="absolute css-ew64yg font-['Pretendard:Medium',sans-serif] leading-[0] left-[calc(50%+0.5px)] not-italic text-[#292929] text-[12px] text-center top-[592px] tracking-[-0.5px] translate-x-[-50%]">
        <span className="leading-[18px]">{`이미 계정이 있으신가요?  `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid font-['Pretendard:Bold',sans-serif] leading-[18px] text-[#ff482c] underline">로그인</span>
      </p>
      <B />
    </div>
  );
}