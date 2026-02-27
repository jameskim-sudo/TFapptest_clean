import svgPaths from "@/imports/svg-y2keatjttf";

function Group() {
  return (
    <div className="w-[106.074px] h-[85px] relative">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.074 85.0003">
        <g id="Group 518605">
          <g id="Group 518602">
            <circle cx="21.0743" cy="42.8504" fill="var(--fill-0, #004FE8)" id="Ellipse 775" r="14.9018" transform="rotate(-45 21.0743 42.8504)" />
            <rect fill="var(--fill-0, #004FE8)" height="29.8036" id="Rectangle 44420" transform="rotate(-45 10.538 53.3877)" width="29.8036" x="10.538" y="53.3877" />
          </g>
          <g filter="url(#filter0_d_1_22)" id="Vector 4">
            <path d={svgPaths.p2b45d380} fill="var(--fill-0, #FF482C)" />
          </g>
          <g id="Group 518603">
            <circle cx="42.1481" cy="63.925" fill="var(--fill-0, #FF482C)" id="Ellipse 776" r="14.9018" transform="rotate(-45 42.1481 63.925)" />
            <circle cx="84.9985" cy="21.0741" fill="var(--fill-0, #FF482C)" id="Ellipse 777" r="14.9018" transform="rotate(-45 84.9985 21.0741)" />
            <rect fill="var(--fill-0, #FF482C)" height="29.8036" id="Rectangle 44419" transform="rotate(-45 31.6118 53.3885)" width="60.6006" x="31.6118" y="53.3885" />
          </g>
          <path d={svgPaths.p2b45d380} fill="var(--fill-0, #FF482C)" id="Vector 3" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.1627" id="filter0_d_1_22" width="54.5924" x="2.54518" y="32.751">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-3" dy="-3" />
            <feGaussianBlur stdDeviation="3.55" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_22" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_22" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default function SplashScreen() {
  return (
    <div className="bg-white relative size-full overflow-hidden" data-name="360x640">
      <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2">
        <Group />
      </div>
      <div className="absolute left-1/2 top-[56.6%] -translate-x-1/2 -translate-y-1/2 flex flex-col font-[Pilseung_Gothic] justify-center leading-[0] not-italic text-[#ff482c] text-[29.041px] tracking-[1.4521px] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">까먹지마</p>
      </div>
    </div>
  );
}