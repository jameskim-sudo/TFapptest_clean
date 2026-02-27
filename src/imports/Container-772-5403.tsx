function Container2() {
  return <div className="absolute border-[#e5e5e5] border-[0.5px] border-solid h-[94.625px] left-0 rounded-[14px] top-0 w-[112.32px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] left-[calc(50%-12.95px)] not-italic text-[#292929] text-[22px] top-1/2 w-[25px]">
        <p className="leading-[36px] whitespace-pre-wrap">12</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[28px] items-center justify-center left-1/2 top-[20px] w-[25.898px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] left-[calc(50%-18.5px)] not-italic text-[#999] text-[12px] top-0">총 기록</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[21px] items-start left-[36.26px] top-[52.8px] w-[39.805px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white h-[94.625px] left-0 rounded-[14px] top-0 w-[112.32px]" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return <div className="absolute border-[#e5e5e5] border-[0.5px] border-solid h-[94.625px] left-0 rounded-[14px] top-0 w-[112.32px]" data-name="Container" />;
}

function Paragraph2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[15px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] left-[calc(50%-7.5px)] not-italic text-[#292929] text-[22px] top-1/2 w-[15px]">
        <p className="leading-[36px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[28px] items-center justify-center left-1/2 top-[20px] w-[15.328px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] left-[26px] not-italic text-[#999] text-[12px] text-center top-0">운동 종목</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[21px] items-start left-[30.21px] top-[52.8px] w-[51.906px]" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[94.625px] left-1/2 rounded-[14px] top-0 w-[112.32px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return <div className="absolute border-[#e5e5e5] border-[0.5px] border-solid h-[94.625px] left-0 rounded-[14px] top-0 w-[112.32px]" data-name="Container" />;
}

function Paragraph4() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] left-[calc(50%-7px)] not-italic text-[#292929] text-[22px] top-1/2 w-[14px]">
          <p className="leading-[36px] whitespace-pre-wrap">7</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[28px] items-center justify-center left-1/2 top-[20px] w-[13.813px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] left-[2px] not-italic text-[#999] text-[12px] top-0">연속 일수</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[21px] items-start left-1/2 top-[52.8px] w-[51.906px]" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-white h-[94.625px] left-[240.68px] rounded-[14px] top-0 w-[112.32px]" data-name="Container">
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container1 />
      <Container5 />
      <Container9 />
    </div>
  );
}