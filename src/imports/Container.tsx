import svgPaths from "./svg-3xiz39lqrk";

function Group() {
  return (
    <div className="h-[34px] relative shrink-0 w-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 34">
        <g id="Group 518618">
          <circle cx="15.5" cy="8" fill="var(--fill-0, #FFEFEF)" id="Ellipse 786" r="8" />
          <path d={svgPaths.p3ce0b080} fill="var(--fill-0, #FFEFEF)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f5573f] relative rounded-[33554400px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Group />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] top-0 tracking-[-0.4395px] whitespace-pre">운동하는 사람</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#525252] text-[14px] top-0 tracking-[-0.1504px] whitespace-pre">까먹지마와 함께한지 7일</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[52px] relative shrink-0 w-[136.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-center relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

export default function Container3() {
  return (
    <div className="bg-[#ffefef] content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative rounded-[16px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fedbdb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container2 />
    </div>
  );
}