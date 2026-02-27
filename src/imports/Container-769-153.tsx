function Paragraph() {
  return (
    <div className="absolute h-[23px] left-0 top-0 w-[140.625px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[23px] left-0 not-italic text-[#ff482c] text-[20px] top-[-0.5px]">게임 즐거움 정도</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Paragraph />
    </div>
  );
}