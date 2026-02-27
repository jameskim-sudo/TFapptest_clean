import { useState } from "react";
import svgPaths from "@/imports/svg-ghdg66m0v2";
import { ChevronLeft, Sparkles } from "lucide-react";

interface GoalSettingScreenProps {
  onBackClick: () => void;
}

function StatusBar() {
  return (
    <div className="absolute h-[42px] left-0 overflow-clip top-0 w-full max-w-[480px]">
      <div className="absolute h-[28.8px] left-0 right-0 top-0" />
      <div className="absolute content-stretch flex gap-[3.84px] items-center right-[13.44px] top-[15.36px]">
        {/* Network Signal */}
        <div className="h-[13.44px] relative shrink-0 w-[19.2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 13.44">
            <g>
              <path clipRule="evenodd" d={svgPaths.p1f162900} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1d5dbe40} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p18019e00} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p342c3400} fill="white" fillOpacity="0.18" fillRule="evenodd" />
            </g>
          </svg>
        </div>
        {/* WiFi Signal */}
        <div className="h-[13.44px] relative shrink-0 w-[15.36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.36 13.44">
            <g>
              <path d={svgPaths.p3dc48e00} fill="black" />
              <path d={svgPaths.p3b3c95f0} fill="black" />
              <path d={svgPaths.p932c700} fill="white" fillOpacity="0.3" />
            </g>
          </svg>
        </div>
        {/* Battery */}
        <div className="h-[13.44px] relative shrink-0 w-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13.44">
            <g>
              <path d={svgPaths.p693fb00} fill="black" />
              <path d={svgPaths.p38366500} fill="black" fillOpacity="0.6" />
              <path d={svgPaths.p9a22600} fill="black" fillOpacity="0.6" />
              <path d={svgPaths.p5709d00} fill="black" fillOpacity="0.6" />
              <path d={svgPaths.p1fcc0380} fill="#34C759" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute h-[20.16px] left-[20.16px] overflow-clip rounded-[19.2px] top-[11.52px] w-[51.84px]">
        <div className="absolute h-[15px] left-[calc(50%+1.58px)] top-[calc(50%+0.42px)] translate-x-[-50%] translate-y-[-50%] w-[33px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 15">
            <g>
              <path d={svgPaths.p309cf100} fill="black" />
              <path d={svgPaths.p1285b880} fill="black" />
              <path d={svgPaths.pa9bea00} fill="black" />
              <path d={svgPaths.p1d3f77f0} fill="black" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TopBar({ onBackClick }: { onBackClick: () => void }) {
  return (
    <div className="absolute h-[54px] left-0 overflow-clip top-[42px] w-full max-w-[480px]">
      <div className="absolute inset-0 bg-white" />
      <button onClick={onBackClick} className="absolute left-[14px] size-[24px] top-[15px]">
        <ChevronLeft className="size-full text-[#272833]" strokeWidth={1.6} />
      </button>
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[normal] left-1/2 -translate-x-1/2 not-italic text-[#2e333a] text-[16px] text-center top-[calc(50%-10px)] tracking-[-0.5px] whitespace-pre">
        목표 설정하기
      </p>
    </div>
  );
}

export default function GoalSettingScreen({ onBackClick }: GoalSettingScreenProps) {
  const [step, setStep] = useState(1); // 1: 입력, 2: AI 분석 결과
  const [sport, setSport] = useState("");
  const [purpose, setPurpose] = useState("");
  const [frequency, setFrequency] = useState("");
  const [target, setTarget] = useState("");

  const handleSubmit = () => {
    if (sport && purpose && frequency && target) {
      setStep(2);
    }
  };

  const canProceed = sport && purpose && frequency && target;

  // AI 분석 결과 (예시)
  const aiResponse = {
    encouragement: "오늘도 훌륭해! 92점이라니 대단한걸?",
    realityCheck: "최근 활동 데이터를 보니 주 3회 목표는 충분히 달성 가능해 보여요. 다만 하루 1시간은 조금 도전적일 수 있어요. 처음엔 40분부터 시작해서 점차 늘려가는 건 어떨까요?",
    actionPlan: [
      {
        step: 1,
        title: "시작하기",
        description: "일주일에 3일, 정확한 요일을 미리 정해두세요. (예: 월/수/금)"
      },
      {
        step: 2,
        title: "습관 만들기",
        description: "같은 시간대에 운동하면 습관이 더 쉽게 만들어져요. 저녁 7시는 어떨까요?"
      },
      {
        step: 3,
        title: "성과 확인하기",
        description: "매주 일요일, 지난 주를 돌아보고 다음 주 목표를 조정해보세요."
      }
    ]
  };

  return (
    <div className="bg-white relative size-full overflow-hidden">
      <StatusBar />
      <TopBar onBackClick={onBackClick} />

      {step === 1 ? (
        <>
          {/* Input Form */}
          <div className="absolute left-[20px] right-[20px] top-[116px] max-h-[calc(100vh-200px)] overflow-y-auto">
            <div className="space-y-6">
              {/* Sport Type */}
              <div>
                <label className="block font-['Pretendard:Bold',sans-serif] text-[14px] text-[#292929] mb-2 tracking-[-0.5px]">
                  운동 종목
                </label>
                <input
                  type="text"
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                  placeholder="예: 골프 스윙 연습, 러닝, 필라테스"
                  className="w-full h-[48px] bg-white border border-[#e0e0e0] rounded-[8px] px-4 font-['Pretendard:Medium',sans-serif] text-[14px] text-[#292929] tracking-[-0.5px] outline-none focus:border-[#ff482c] transition-colors placeholder:text-[#999]"
                />
              </div>

              {/* Purpose */}
              <div>
                <label className="block font-['Pretendard:Bold',sans-serif] text-[14px] text-[#292929] mb-2 tracking-[-0.5px]">
                  최종 목적
                </label>
                <input
                  type="text"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  placeholder="예: 비거리 향상, 체중 감량, 꾸준한 습관 만들기"
                  className="w-full h-[48px] bg-white border border-[#e0e0e0] rounded-[8px] px-4 font-['Pretendard:Medium',sans-serif] text-[14px] text-[#292929] tracking-[-0.5px] outline-none focus:border-[#ff482c] transition-colors placeholder:text-[#999]"
                />
              </div>

              {/* Frequency */}
              <div>
                <label className="block font-['Pretendard:Bold',sans-serif] text-[14px] text-[#292929] mb-2 tracking-[-0.5px]">
                  활동 주기
                </label>
                <input
                  type="text"
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  placeholder="예: 주 3회, 매일"
                  className="w-full h-[48px] bg-white border border-[#e0e0e0] rounded-[8px] px-4 font-['Pretendard:Medium',sans-serif] text-[14px] text-[#292929] tracking-[-0.5px] outline-none focus:border-[#ff482c] transition-colors placeholder:text-[#999]"
                />
              </div>

              {/* Target */}
              <div>
                <label className="block font-['Pretendard:Bold',sans-serif] text-[14px] text-[#292929] mb-2 tracking-[-0.5px]">
                  목표 수치
                </label>
                <input
                  type="text"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  placeholder="예: 하루 1시간, 90점 이상 달성"
                  className="w-full h-[48px] bg-white border border-[#e0e0e0] rounded-[8px] px-4 font-['Pretendard:Medium',sans-serif] text-[14px] text-[#292929] tracking-[-0.5px] outline-none focus:border-[#ff482c] transition-colors placeholder:text-[#999]"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!canProceed}
            className={`absolute bg-[#f5573f] h-[52px] left-[20px] right-[20px] rounded-[30px] bottom-[20px] max-w-[calc(100%-40px)] flex items-center justify-center transition-opacity ${
              !canProceed ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#e04a35] cursor-pointer'
            }`}
          >
            <Sparkles className="size-[20px] text-white mr-2" />
            <p className="font-['Pretendard:Medium',sans-serif] text-[16px] text-white tracking-[-0.5px]">
              AI 분석 받기
            </p>
          </button>
        </>
      ) : (
        <>
          {/* AI Analysis Result */}
          <div className="absolute left-[20px] right-[20px] top-[116px] max-h-[calc(100vh-200px)] overflow-y-auto pb-[80px]">
            <div className="space-y-4">
              {/* Encouragement */}
              <div className="bg-gradient-to-br from-[#fff5f4] to-[#ffe8e6] rounded-[16px] p-4 border border-[#ff482c]/20">
                <div className="flex items-start gap-2 mb-2">
                  <Sparkles className="size-[20px] text-[#ff482c] flex-shrink-0 mt-0.5" />
                  <h3 className="font-['Pretendard:Bold',sans-serif] text-[15px] text-[#ff482c] tracking-[-0.5px]">
                    격려 메시지
                  </h3>
                </div>
                <p className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#292929] leading-[1.6] tracking-[-0.5px]">
                  {aiResponse.encouragement}
                </p>
              </div>

              {/* Reality Check */}
              <div className="bg-white rounded-[16px] p-4 border border-[#e0e0e0]">
                <h3 className="font-['Pretendard:Bold',sans-serif] text-[15px] text-[#292929] mb-2 tracking-[-0.5px]">
                  현실 가능성 체크
                </h3>
                <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#666] leading-[1.6] tracking-[-0.5px]">
                  {aiResponse.realityCheck}
                </p>
              </div>

              {/* Action Plan */}
              <div className="bg-white rounded-[16px] p-4 border border-[#e0e0e0]">
                <h3 className="font-['Pretendard:Bold',sans-serif] text-[15px] text-[#292929] mb-3 tracking-[-0.5px]">
                  세부 액션 플랜
                </h3>
                <div className="space-y-3">
                  {aiResponse.actionPlan.map((plan) => (
                    <div key={plan.step} className="flex gap-3">
                      <div className="flex-shrink-0 w-[24px] h-[24px] bg-[#ff482c] rounded-full flex items-center justify-center">
                        <span className="font-['Pretendard:Bold',sans-serif] text-[12px] text-white">
                          {plan.step}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-['Pretendard:Bold',sans-serif] text-[13px] text-[#292929] mb-1 tracking-[-0.5px]">
                          {plan.title}
                        </h4>
                        <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#666] leading-[1.5] tracking-[-0.5px]">
                          {plan.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Goal Summary */}
              <div className="bg-[#f8f8f8] rounded-[16px] p-4">
                <h3 className="font-['Pretendard:Bold',sans-serif] text-[14px] text-[#292929] mb-3 tracking-[-0.5px]">
                  설정된 목표
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#666] tracking-[-0.5px]">
                      운동 종목
                    </span>
                    <span className="font-['Pretendard:Bold',sans-serif] text-[12px] text-[#292929] tracking-[-0.5px]">
                      {sport}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#666] tracking-[-0.5px]">
                      최종 목적
                    </span>
                    <span className="font-['Pretendard:Bold',sans-serif] text-[12px] text-[#292929] tracking-[-0.5px]">
                      {purpose}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#666] tracking-[-0.5px]">
                      활동 주기
                    </span>
                    <span className="font-['Pretendard:Bold',sans-serif] text-[12px] text-[#292929] tracking-[-0.5px]">
                      {frequency}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#666] tracking-[-0.5px]">
                      목표 수치
                    </span>
                    <span className="font-['Pretendard:Bold',sans-serif] text-[12px] text-[#292929] tracking-[-0.5px]">
                      {target}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Button */}
          <button
            onClick={onBackClick}
            className="absolute bg-[#f5573f] h-[52px] left-[20px] right-[20px] rounded-[30px] bottom-[20px] max-w-[calc(100%-40px)] flex items-center justify-center hover:bg-[#e04a35] cursor-pointer"
          >
            <p className="font-['Pretendard:Medium',sans-serif] text-[16px] text-white tracking-[-0.5px]">
              목표 설정 완료
            </p>
          </button>
        </>
      )}
    </div>
  );
}