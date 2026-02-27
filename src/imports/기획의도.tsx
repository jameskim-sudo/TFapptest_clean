export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start justify-center pb-[48px] pt-[36px] px-[48px] relative size-full" data-name="기획의도">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[6px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#2e333a] text-[0px] tracking-[-2.47px] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[54px]">
            마이
            <br aria-hidden="true" />
          </span>
          <span className="text-[30px]">개인 설정과 기록 관리</span>
        </p>
      </div>
      <div className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#2e333a] text-[30px] tracking-[-2.47px] whitespace-nowrap">
        <p className="leading-[normal] mb-[2px] whitespace-pre">2Depth</p>
        <ul className="list-disc mb-[2px] whitespace-pre-wrap">
          <li className="mb-0 ms-[45px]">
            <span className="leading-[normal]">프로필</span>
          </li>
          <li className="mb-0 ms-[45px]">
            <span className="leading-[normal]">AI 톤 설정</span>
          </li>
          <li className="mb-0 ms-[45px]">
            <span className="leading-[normal]">기록 관리</span>
          </li>
          <li className="mb-0 ms-[45px]">
            <span className="leading-[normal]">알림 설정</span>
          </li>
          <li className="ms-[45px]">
            <span className="leading-[normal]">
              앱 정보
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </li>
        </ul>
        <p className="leading-[normal] mb-[2px] whitespace-pre">
          항목
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <ol className="list-decimal" start="1">
          <li className="mb-0 ms-[45px] whitespace-pre-wrap">
            <span className="leading-[normal]">AI 회고 톤</span>
          </li>
          <ul className="mb-0">
            <li className="list-disc ms-[90px] whitespace-pre-wrap">
              <span className="leading-[normal]">담백 / 공감 / 코치형</span>
            </li>
          </ul>
          <li className="mb-0 ms-[45px] whitespace-pre-wrap">
            <span className="leading-[normal]">알림</span>
          </li>
          <ul className="list-disc whitespace-pre-wrap">
            <li className="mb-0 ms-[90px]">
              <span className="leading-[normal]">기록 리마인드</span>
            </li>
            <li className="ms-[90px]">
              <span className="leading-[normal]">회고 리포트 알림</span>
            </li>
          </ul>
        </ol>
      </div>
    </div>
  );
}