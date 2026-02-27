import svgPaths from "./svg-zq93d3vowe";
import { IMAGE_URLS } from "../config/imageUrls";

function Group1() {
  return (
    <div className="absolute h-[78px] left-1/2 -translate-x-1/2 top-[108px] w-[98px]">
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
      <svg className="block size-full relative top-[2px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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
      <p className="font-['Noto_Sans_KR',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.5px]">잊기 전에 기록하기</p>
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
    <div className="bg-[#f5573f] hover:bg-[#d94930] col-1 content-stretch flex h-[52px] items-center justify-center ml-0 mt-0 px-[32px] py-[16px] relative rounded-[30px] row-1 w-full max-w-[353px] cursor-pointer transition-colors duration-200">
      <Group />
    </div>
  );
}

function Btn() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="BTN">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[20px] right-[20px] bottom-[80px] max-w-[calc(100%-40px)] z-20">
      <Btn />
    </div>
  );
}

export default function Intro() {
  return (
    <div className="relative w-[393px] h-[852px] overflow-hidden bg-[#00000000]" data-name="intro">
      {/* 배경 이미지 - 전체 */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img alt="배경" className="w-full h-full object-cover" src={IMAGE_URLS.INTRO_BACKGROUND} />
      </div>
      
      <div className="absolute flex flex-col font-['Pilseung_Gothic',sans-serif] justify-center leading-[0] left-1/2 -translate-x-1/2 not-italic text-[#ff482c] text-[45px] top-[202px] tracking-[2.25px] whitespace-nowrap z-10">
        <p className="leading-[45px]">까먹지마</p>
      </div>
      <p className="absolute font-['Noto_Sans_KR',sans-serif] leading-[1.5] left-1/2 -translate-x-1/2 not-italic font-light text-center top-[256px] z-10 text-[#676767] text-[16px]">DON'T FORGET</p>
      <div className="relative z-10">
        <Group1 />
      </div>
      <Frame1 />
    </div>
  );
}