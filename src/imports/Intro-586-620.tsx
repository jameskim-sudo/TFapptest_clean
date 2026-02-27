import svgPaths from "./svg-zq93d3vowe";
import { IMAGE_URLS } from "../config/imageUrls";

function Group1() {
  return (
    <div className="absolute h-[68.979px] left-[136.96px] top-[68.03px] w-[86.081px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.0808 68.9786">
        <g id="Group 518609">
          <g id="Group 518602">
            <circle cx="12.0929" cy="12.0929" fill="var(--fill-0, #004FE8)" id="Ellipse 775" r="12.0929" transform="matrix(0.7071 -0.707113 0.7071 0.707113 0 34.7736)" />
            <rect fill="var(--fill-0, #004FE8)" height="24.1858" id="Rectangle 44420" transform="matrix(0.7071 -0.707113 0.7071 0.707113 8.55273 43.3247)" width="24.1858" />
          </g>
          <g filter="url(#filter0_d_585_487)" id="Vector 4">
            <path d={svgPaths.p37890b80} fill="var(--fill-0, #FF482C)" />
          </g>
          <g id="Group 518603">
            <circle cx="12.0929" cy="12.0929" fill="var(--fill-0, #FF482C)" id="Ellipse 776" r="12.0929" transform="matrix(0.7071 -0.707113 0.7071 0.707113 17.1035 51.8761)" />
            <circle cx="12.0929" cy="12.0929" fill="var(--fill-0, #FF482C)" id="Ellipse 777" r="12.0929" transform="matrix(0.7071 -0.707113 0.7071 0.707113 51.8769 17.1021)" />
            <rect fill="var(--fill-0, #FF482C)" height="24.1858" id="Rectangle 44419" transform="matrix(0.7071 -0.707113 0.7071 0.707113 25.6543 43.3258)" width="49.1778" />
          </g>
          <path d={svgPaths.p37890b80} fill="var(--fill-0, #FF482C)" id="Vector 3" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="40.1382" id="filter0_d_585_487" width="46.9784" x="0.161718" y="24.6743">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-3" dy="-3" />
            <feGaussianBlur stdDeviation="3.55" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_585_487" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_585_487" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Rectangle 3316" />
          <path d="M7.5 5L12.5 10L7.5 15" id="Vector 26" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="col-1 content-stretch flex items-start ml-0 mt-0 relative row-1">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.5px]">잊기 전에 기록하기</p>
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
    <div className="absolute content-stretch flex items-center left-[20px] top-[558px] w-[320px]">
      <Btn />
    </div>
  );
}

export default function Intro() {
  return (
    <div className="relative size-full" data-name="intro">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[640px] left-1/2 top-1/2 w-[360px]" data-name="1스크린샷 2026-01-19 오전 10.21 copy 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[143.74%] left-[-37.64%] max-w-none top-[-43.74%] w-[175.56%]"
            src={IMAGE_URLS.INTRO_BACKGROUND_ALT}
          />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Pilseung_Gothic:Basic',sans-serif] justify-center leading-[0] left-[calc(50%-72px)] not-italic text-[#ff482c] text-[39.452px] top-[164px] tracking-[1.9726px] whitespace-nowrap">
        <p className="leading-[39.452px]">까먹지마</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Noto_Sans_CJK_KR:Medium',sans-serif] leading-[1.5] left-[180px] not-italic text-[#404040] text-[15px] text-center top-[189.57px]">{`Don't Forget`}</p>
      <Group1 />
      <Frame1 />
    </div>
  );
}