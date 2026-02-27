import image_06d7062251adc7112c0927697c1d74480e9a80c6 from 'figma:asset/06d7062251adc7112c0927697c1d74480e9a80c6.png'
import svgPaths from "@/imports/svg-mbqd2fmnyn";
import NavigationBar from "@/app/components/NavigationBar";
import { useCoachTone } from "@/app/contexts/CoachToneContext";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ImportedStatusBar from "@/imports/Container-753-1617";

interface MyScreenProps {
  onTabChange?: (tab: string) => void;
}

function Container() {
  return <div className="absolute border-[#fedbdb] border-[0.817px] border-solid h-[113.985px] left-0 right-0 rounded-[16px] top-0" data-name="Container" />;
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[0_26.56%_52.94%_23.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9972 15.9994">
          <path d={svgPaths.p2c065e00} fill="var(--fill-0, #FFEFEF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[52.94%_0_0_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9943 15.9994">
          <path d={svgPaths.p21f59f00} fill="var(--fill-0, #FFEFEF)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[33.999px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[33.999px] items-start left-[16px] top-[14.99px] w-[31.994px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute left-0 rounded-full size-[63.989px] top-0 overflow-hidden" data-name="Container">
      <ImageWithFallback
        src={image_06d7062251adc7112c0927697c1d74480e9a80c6}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[27.998px] left-0 top-0 w-[101.013px]" data-name="Paragraph">
      <p className="absolute font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[0.27px] tracking-[-0.4395px] whitespace-pre">라이크 제니</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[20.006px] left-0 top-[31.99px] w-[142.685px]" data-name="Paragraph">
      <p className="absolute font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#525252] text-[14px] top-[-0.18px] tracking-[-0.1504px] w-auto whitespace-nowrap">까먹지마와 함께한지 <span className="font-bold">7일</span></p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[51.988px] left-[79.99px] top-[6px] w-[190.025px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[63.989px] left-[25px] top-[25px] w-[270.011px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#ffefef] h-[113.985px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Container />
      <Container4 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-auto relative shrink-0 w-[25.904px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative h-[28px] w-full">
        <p className="absolute font-['Noto_Sans_CJK',sans-serif] leading-[36px] left-0 not-italic text-[#292929] top-[0.27px] whitespace-pre text-[22px] h-[28px]">12</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[21.002px] relative shrink-0 w-[39.808px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_KR:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#666666] top-[-0.37px] whitespace-pre text-[12px]">총 기록</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[3.996px] h-[94.63px] items-center left-0 px-[0.817px] py-[16.814px] rounded-[14px] top-0 w-[calc(33.33%-5.33px)]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[0.817px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-auto relative shrink-0 w-[15.333px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative h-[28px] w-full">
        <p className="absolute font-['Noto_Sans_KR:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#292929] top-[-0.73px] whitespace-pre text-[22px] h-[28px]">3</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[21.002px] relative shrink-0 w-[51.911px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_KR:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#525252] top-[-0.37px] whitespace-pre text-[12px]">운동 종목</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[3.996px] h-[94.63px] items-center left-[calc(33.33%+2.66px)] px-[0.817px] py-[16.814px] rounded-[14px] top-0 w-[calc(33.33%-5.33px)]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[0.817px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-auto relative shrink-0 w-[13.814px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative h-[28px] flex items-center">
        <p className="font-['Noto_Sans_KR:Bold',sans-serif] leading-[36px] not-italic text-[#292929] whitespace-pre text-[22px] h-[28px]">7</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[21.002px] relative shrink-0 w-[51.911px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_KR:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#525252] top-[-0.37px] whitespace-pre text-[12px]">연속 일수</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[3.996px] h-[94.63px] items-center right-0 px-[0.817px] py-[16.814px] rounded-[14px] top-0 w-[calc(33.33%-5.33px)]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[0.817px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[94.63px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9933 19.9933">
        <g clipPath="url(#clip0_6_391)" id="Icon">
          <path d={svgPaths.p1f7db900} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d={svgPaths.p315c4200} id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
        <defs>
          <clipPath id="clip0_6_391">
            <rect fill="white" height="19.9933" width="19.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[23.989px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Noto_Sans_KR:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#171717] text-[16px] top-[-1.37px] tracking-[-0.3px] whitespace-pre">AI 스타일 선택</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[21.002px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Noto_Sans_KR:Regular',sans-serif] leading-[21px] left-0 not-italic top-[-0.37px] tracking-[-0.3px] whitespace-pre text-[#999999] text-[12px]">담백 / 공감형 / 열정 코치형</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] h-[46.983px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.992px] items-start relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9933 19.9933">
        <g id="Icon">
          <path d={svgPaths.p1154ce0} id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
      </svg>
    </div>
  );
}

function ToneRadioButton({ 
  label, 
  value, 
  currentTone, 
  onChange 
}: { 
  label: string; 
  value: "simple" | "empathy" | "passionate"; 
  currentTone: "simple" | "empathy" | "passionate";
  onChange: (tone: "simple" | "empathy" | "passionate") => void;
}) {
  const isSelected = currentTone === value;
  
  return (
    <button
      onClick={() => onChange(value)}
      className="flex items-center gap-[12px] py-[12px] cursor-pointer hover:bg-gray-50 transition-colors w-full"
    >
      <div className="flex items-center justify-center w-[20px] h-[20px] shrink-0">
        <div className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center transition-colors ${
          isSelected ? 'border-[#ff482c]' : 'border-[#d4d4d4]'
        }`}>
          {isSelected && (
            <div className="w-[10px] h-[10px] rounded-full bg-[#ff482c]" />
          )}
        </div>
      </div>
      <p className={`font-['Noto_Sans_KR:Regular',sans-serif] text-[15px] tracking-[-0.3px] ${
        isSelected ? 'text-[#171717] font-semibold' : 'text-[#525252]'
      }`}>
        {label}
      </p>
    </button>
  );
}

function ToneOptions({ 
  isExpanded, 
  currentTone, 
  onChange 
}: { 
  isExpanded: boolean;
  currentTone: "simple" | "empathy" | "passionate";
  onChange: (tone: "simple" | "empathy" | "passionate") => void;
}) {
  if (!isExpanded) return null;
  
  return (
    <div className="bg-[#f9fafb] rounded-[12px] px-[16px] py-[8px] mt-[8px] w-full">
      <ToneRadioButton 
        label="담백한 톤 - 간결하고 명확하게" 
        value="simple" 
        currentTone={currentTone}
        onChange={onChange}
      />
      <ToneRadioButton 
        label="공감형 톤 - 따뜻하고 공감하며" 
        value="empathy" 
        currentTone={currentTone}
        onChange={onChange}
      />
      <ToneRadioButton 
        label="열정적인 코치 톤 - 에너지 넘치게" 
        value="passionate" 
        currentTone={currentTone}
        onChange={onChange}
      />
    </div>
  );
}

function Button({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div
      onClick={onClick}
      className="bg-white relative rounded-[14px] shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors"
      data-name="Button"
    >
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[0.817px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col">
        <div className="flex flex-row items-center h-[80.611px]">
          <div className="content-stretch flex gap-[15.997px] items-center px-[16.814px] py-[0.817px] relative w-full">
            <Icon1 />
            <Container10 />
            <svg 
              className={`w-[19.993px] h-[19.993px] transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              preserveAspectRatio="none" 
              viewBox="0 0 19.9933 19.9933"
            >
              <g>
                <path d={svgPaths.p1154ce0} stroke="#A1A1A1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9933 19.9933">
        <g clipPath="url(#clip0_6_402)" id="Icon">
          <path d={svgPaths.p3a6ae5c0} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d={svgPaths.p220ec980} id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
        <defs>
          <clipPath id="clip0_6_402">
            <rect fill="white" height="19.9933" width="19.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[23.989px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Noto_Sans_KR:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#171717] text-[16px] top-[-1.37px] tracking-[-0.3px] whitespace-pre">알림 설정</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[21.002px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Noto_Sans_KR:Regular',sans-serif] leading-[21px] left-0 not-italic top-[-0.37px] tracking-[-0.3px] whitespace-pre text-[#999999] text-[12px]">기록 리마인드, 주간 리포트</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] h-[46.983px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.992px] items-start relative size-full">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9933 19.9933">
        <g id="Icon">
          <path d={svgPaths.p1154ce0} id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[80.611px] relative rounded-[14px] shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[0.817px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15.997px] items-center px-[16.814px] py-[0.817px] relative size-full">
          <Icon3 />
          <Container11 />
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9933 19.9933">
        <g clipPath="url(#clip0_6_374)" id="Icon">
          <path d={svgPaths.p3d09bcc0} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d={svgPaths.pe573600} id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d={svgPaths.p2323f300} id="Vector_3" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
        <defs>
          <clipPath id="clip0_6_374">
            <rect fill="white" height="19.9933" width="19.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[23.989px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Noto_Sans_KR:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#171717] text-[16px] top-[-1.37px] tracking-[-0.3px] whitespace-pre">기록 관리</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[21.002px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Noto_Sans_KR:Regular',sans-serif] leading-[21px] left-0 not-italic top-[-0.37px] tracking-[-0.3px] whitespace-pre text-[#999999] text-[12px]">내보내기, 삭제</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] h-[46.983px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.992px] items-start relative size-full">
        <Paragraph12 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9933 19.9933">
        <g id="Icon">
          <path d={svgPaths.p1154ce0} id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[80.611px] relative rounded-[14px] shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[0.817px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15.997px] items-center px-[16.814px] py-[0.817px] relative size-full">
          <Icon5 />
          <Container12 />
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9933 19.9933">
        <g clipPath="url(#clip0_6_395)" id="Icon">
          <path d={svgPaths.pc1ea600} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d="M9.99664 13.3288V9.99664" id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d="M9.99664 6.66442H10.005" id="Vector_3" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
        <defs>
          <clipPath id="clip0_6_395">
            <rect fill="white" height="19.9933" width="19.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[23.989px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Noto_Sans_KR:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#171717] text-[16px] top-[-1.37px] tracking-[-0.3px] whitespace-pre">앱 정보</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[21.002px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Noto_Sans_KR:Regular',sans-serif] leading-[21px] left-0 not-italic top-[-0.37px] tracking-[-0.3px] whitespace-pre text-[#999999] text-[12px]">버전 1.0.0</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] h-[46.983px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.992px] items-start relative size-full">
        <Paragraph14 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9933 19.9933">
        <g id="Icon">
          <path d={svgPaths.p1154ce0} id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[80.611px] relative rounded-[14px] shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[0.817px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15.997px] items-center px-[16.814px] py-[0.817px] relative size-full">
          <Icon7 />
          <Container13 />
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function Container14({ 
  isToneExpanded, 
  onToneToggle, 
  currentTone, 
  onToneChange 
}: { 
  isToneExpanded: boolean;
  onToneToggle: () => void;
  currentTone: "simple" | "empathy" | "passionate";
  onToneChange: (tone: "simple" | "empathy" | "passionate") => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[7.992px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="w-full">
        <Button onClick={onToneToggle} isExpanded={isToneExpanded} />
        <ToneOptions isExpanded={isToneExpanded} currentTone={currentTone} onChange={onToneChange} />
      </div>
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[21.002px] left-[20.81px] top-[20.81px] w-[42.055px]" data-name="Paragraph">
      <p className="absolute font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21px] left-0 not-italic text-[#7b3306] text-[14px] top-[-0.37px] tracking-[0] whitespace-pre">💡 Tip</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[43.995px] left-[20.81px] top-[49.8px] w-[278.387px]" data-name="Paragraph">
      <p className="absolute font-['Noto_Sans_KR:Regular',sans-serif] leading-[22px] left-0 not-italic top-[-0.55px] tracking-[-0.3px] w-[290px] whitespace-pre-wrap text-[13px] text-[#666666]">AI 스타일을 바꾸면 같은 기록도 다르게 느껴질 수 있어요. 나에게 맞는 분위기를 골라보세요.</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-gradient-to-b from-[#fffbeb] h-[114.61px] relative rounded-[16px] shrink-0 to-[#fff7ed] w-full" data-name="Container">
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function Container16({ 
  isToneExpanded, 
  onToneToggle, 
  currentTone, 
  onToneChange 
}: { 
  isToneExpanded: boolean;
  onToneToggle: () => void;
  currentTone: "simple" | "empathy" | "passionate";
  onToneChange: (tone: "simple" | "empathy" | "passionate") => void;
}) {
  return (
    <div className="h-[825.597px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[19.993px] px-0 relative size-full">
        <Container5 />
        <Container9 />
        <Container14 isToneExpanded={isToneExpanded} onToneToggle={onToneToggle} currentTone={currentTone} onToneChange={onToneChange} />
        <Container15 />
      </div>
    </div>
  );
}

function Container17({ 
  isToneExpanded, 
  onToneToggle, 
  currentTone, 
  onToneChange 
}: { 
  isToneExpanded: boolean;
  onToneToggle: () => void;
  currentTone: "simple" | "empathy" | "passionate";
  onToneChange: (tone: "simple" | "empathy" | "passionate") => void;
}) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] overflow-y-auto overflow-x-hidden top-[120px] bottom-[61.071px] scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" data-name="Container">
      <Container16 isToneExpanded={isToneExpanded} onToneToggle={onToneToggle} currentTone={currentTone} onToneChange={onToneChange} />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[14.88%_3.65%_10.71%_10.42%]" data-name="Group">
      <div className="absolute inset-[29.76%_27.08%_10.71%_57.29%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.99827 7.99464">
          <path clipRule="evenodd" d={svgPaths.p39e30600} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[44.64%_50.52%_10.71%_33.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.99827 5.99598">
          <path clipRule="evenodd" d={svgPaths.p1f11a00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.8%_73.96%_10.71%_10.42%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.99827 4.49699">
          <path clipRule="evenodd" d={svgPaths.p228de0} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[14.88%_3.65%_10.71%_80.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.99827 9.9933">
          <path clipRule="evenodd" d={svgPaths.p2cb00df0} fill="var(--fill-0, white)" fillOpacity="0.18" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[13.431px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[13.431px] items-start left-0 top-0 w-[19.189px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[14.88%_0.72%_10.71%_6.51%]" data-name="Group">
      <div className="absolute inset-[66.51%_32.88%_10.71%_38.66%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.37151 3.05837">
          <path d={svgPaths.p3516d0b0} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[40.7%_16.77%_34.64%_22.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.3191 3.31203">
          <path d={svgPaths.pf95d000} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[14.88%_0.72%_52.96%_6.51%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2489 4.3197">
          <path d={svgPaths.p1fe91c80} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[13.431px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[13.431px] items-start left-[23.02px] top-0 w-[15.359px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[7.44%_0_3.27%_0]" data-name="Group">
      <div className="absolute inset-[7.44%_36%_3.27%_32%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.67661 11.992">
          <path d={svgPaths.p22950f80} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.44%_51.47%_3.27%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6413 11.992">
          <path d={svgPaths.p2a3a5f00} fill="var(--fill-0, black)" fillOpacity="0.6" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.44%_8%_3.27%_47.47%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6829 11.992">
          <path d={svgPaths.pfc9240} fill="var(--fill-0, black)" fillOpacity="0.6" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.2%_0_33.04%_96%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.959576 3.99732">
          <path d={svgPaths.p230b7300} fill="var(--fill-0, black)" fillOpacity="0.6" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[22.32%_58.2%_18.15%_8%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.10928 7.99464">
          <path d={svgPaths.pda91b80} fill="var(--fill-0, #34C759)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[13.431px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group3 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[13.431px] items-start left-[42.21px] top-0 w-[23.989px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[13.431px] left-[280.37px] top-[15.36px] w-[66.197px]" data-name="Container">
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[13.33%_7.8%_12.74%_6.06%]" data-name="Group">
      <div className="absolute inset-[13.33%_69.24%_12.74%_6.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.14948 11.0805">
          <path d={svgPaths.pdfa4200} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.57%_56.32%_13.42%_36.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.343 7.79433">
          <path d={svgPaths.p38847400} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[15.09%_25.73%_14.45%_48.81%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.39841 10.5608">
          <path d={svgPaths.p6766b00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[15.09%_7.8%_14.45%_78.13%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.64222 10.5608">
          <path d={svgPaths.p20f24b80} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[14.989px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group4 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col h-[14.989px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20.159px] items-start left-[20.16px] overflow-clip pb-0 pl-[10.992px] pr-[7.852px] pt-[3px] rounded-[19.2px] top-[11.52px] w-[51.834px]" data-name="Container">
      <Container22 />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute h-[42px] left-0 right-0 overflow-clip top-0 w-full" data-name="StatusBar">
      <Container21 />
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col h-[473.123px] items-start left-[20px] right-[20px] overflow-y-auto overflow-x-hidden top-[120px] scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[30.003px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Pilseung_Gothic',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#ff482c] text-[24px] whitespace-pre">MY</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20.006px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[-0.37px] tracking-[-0.3px] whitespace-pre">쌓인 기록이 이야기가 되어요</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.992px] h-[58.001px] items-start left-[20px] right-[20px] top-[62px]" data-name="Container">
      <Container25 />
      <Paragraph18 />
    </div>
  );
}

export default function MyScreen({ onTabChange }: MyScreenProps) {
  const handleTabChange = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const [isToneExpanded, setIsToneExpanded] = useState(false);
  const { tone, setTone } = useCoachTone();

  const toggleTone = () => {
    setIsToneExpanded(!isToneExpanded);
  };

  const changeTone = (newTone: "simple" | "empathy" | "passionate") => {
    setTone(newTone);
  };

  return (
    <div className="bg-white relative w-[393px] h-[852px] mx-auto overflow-hidden" data-name="마이">
      <Container17 isToneExpanded={isToneExpanded} onToneToggle={toggleTone} currentTone={tone} onToneChange={changeTone} />
      <div className="absolute h-[42px] left-0 right-0 overflow-clip top-0 w-full">
        <ImportedStatusBar />
      </div>
      <NavigationBar activeTab="my" onTabChange={handleTabChange} />
      <Container26 />
    </div>
  );
}