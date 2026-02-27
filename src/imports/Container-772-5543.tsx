function Paragraph() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-1/2 not-italic text-[#292929] text-[16px] text-center top-[-1px] tracking-[-0.5px]">벙커 탈출 실패</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex h-[52px] items-center justify-center px-[21px] py-px relative rounded-[8px] shrink-0 w-[171px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ff482c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-1/2 not-italic text-[#292929] text-[16px] text-center top-[-1px] tracking-[-0.5px]">어프로치 실수</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex h-[52px] items-center justify-center px-[21px] py-px relative rounded-[8px] shrink-0 w-[171px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ff482c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Paragraph1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%+1px)] not-italic text-[#292929] text-[16px] text-center top-0 tracking-[-0.5px]">퍼팅 난조</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex h-[52px] items-center justify-center px-[21px] py-px relative rounded-[8px] shrink-0 w-[171px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ff482c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-1/2 not-italic text-[#292929] text-[16px] text-center top-0 tracking-[-0.5px]">기타</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch flex h-[52px] items-center justify-center px-[21px] py-px relative rounded-[8px] shrink-0 w-[171px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ff482c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Paragraph3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative size-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}