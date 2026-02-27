const image_a1b0bb6dd882c17cbb3396c01a5b82fb28bb31b2 =
  "https://via.placeholder.com/150x150.png?text=Report+BG";
import { useState } from "react";
import svgPaths from "@/imports/svg-w6qmt4whw1";
import logoSvgPaths from "@/imports/svg-2p1hjomycv";
const imgCharacter =
  "https://via.placeholder.com/150x150.png?text=Character";
const imgBird =
  "https://via.placeholder.com/150x150.png?text=Bird";
import { ChevronLeft, ChevronRight, Home, PenLine, BarChart3, User } from "lucide-react";
import { useCoachTone } from "@/app/contexts/CoachToneContext";
import NavigationBar from "@/app/components/NavigationBar";
import ImportedStatusBar from "@/imports/Container-754-36";

interface ReportScreenProps {
  exerciseType: "golf" | "pilates" | "running";
  onBackClick: () => void;
  onTabChange?: (tab: string) => void;
}

function Logo() {
  return (
    <div className="h-[23px] w-[28.703px]">
      <div className="absolute inset-[0_0_-5.84%_-23.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.3801 24.3434">
          <g>
            <g>
              <circle cx="4.03218" cy="4.03218" fill="#004FE8" r="4.03218" transform="matrix(0.707132 -0.707082 0.707132 0.707082 6.67801 11.595)" />
              <rect fill="#004FE8" height="8.06437" transform="matrix(0.707132 -0.707082 0.707132 0.707082 9.52993 14.4457)" width="8.06437" />
            </g>
            <g filter="url(#filter0_d_logo_report)">
              <path d={logoSvgPaths.p1524ca80} fill="#FF482C" />
            </g>
            <g>
              <circle cx="4.03218" cy="4.03218" fill="#FF482C" r="4.03218" transform="matrix(0.707132 -0.707082 0.707132 0.707082 12.3783 17.2971)" />
              <circle cx="4.03218" cy="4.03218" fill="#FF482C" r="4.03218" transform="matrix(0.707132 -0.707082 0.707132 0.707082 23.975 5.70308)" />
              <rect fill="#FF482C" height="8.06437" transform="matrix(0.707132 -0.707082 0.707132 0.707082 15.2302 14.4464)" width="16.3975" />
            </g>
            <path d={logoSvgPaths.p1524ca80} fill="#FF482C" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22.8483" id="filter0_d_logo_report" width="25.1299" x="2.38419e-07" y="1.49515">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-3" dy="-3" />
              <feGaussianBlur stdDeviation="3.55" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_logo_report" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_logo_report" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function LogoSection({ onBackClick }: { onBackClick: () => void }) {
  return (
    <>
      <div className="absolute h-[23px] left-[20px] top-[62px] w-[28.703px]">
        <Logo />
      </div>
      <div className="absolute flex flex-col font-['Pilseung_Gothic',sans-serif] justify-center leading-[0] left-[58px] text-[#ff482c] text-[20px] top-[72px] tracking-[1px] translate-y-[-50%] whitespace-nowrap">
        <p className="leading-[20px] whitespace-pre">까먹지마</p>
      </div>
    </>
  );
}

export default function ReportScreen({ exerciseType, onBackClick, onTabChange }: ReportScreenProps) {
  const [showDetail, setShowDetail] = useState(false);
  const [activeTab] = useState("report");
  const { tone } = useCoachTone();

  const handleTabChange = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  // 운동 타입별, 톤별 코치어드바이스 정의
  const coachAdvices = {
    golf: {
      simple: [
        "해저드 공포를 줄이기 위해 안전한 목표 지점을 정하고 프리샷 루틴을 립하세요.",
        "피로할 때는 연습량을 줄이고 정교한 임팩트 연습에 집중하세요.",
        "퍼팅 거리 감각 향상을 위해 백스윙 크기와 거리 관계를 반복 연습하세요.",
        "파 5홀에서는 공격보다 안전한 레이업 전략으로 보기를 줄이세요.",
        "러프에서는 무리하지 말고 페어웨이 복귀를 우선하세요."
      ],
      empathy: [
        "해저드 앞에서 긴장되시죠? 공이 아닌 안전한 지점에만 집중하는 루틴을 만들어보세요. 마음이 훨씬 편안해질 거예요.",
        "몸이 피곤하면 스윙이 무너지기 쉬워요. 무리하지 마시고 임팩트 감각만 다듬는 게 더 효과적입니다.",
        "퍼팅 거리 감각은 하루아침에 생기지 않아요. 백스윙 크기별로 얼마나 가는지 천천히 익혀가세요.",
        "파 5홀에서 욕심내기 쉽죠? 하지만 안전한 플레이가 결국 더 좋은 스코어를 만들어줍니다.",
        "러프에 빠졌을 때 당황스럽지만, 한 번에 탈출하려 하지 마세요. 안전하게 나가는 게 현명한 선택이에요."
      ],
      passionate: [
        "해저드 따위 두려워 마세요! 공이 아닌 목표 지점에 집중하는 프리샷 루틴으로 자신감을 폭발시키세요!",
        "피로는 챔피언의 적입니다! 무리한 연습보다 정교한 임팩트 훈련으로 퀄리티를 끌어올리세요!",
        "퍼팅의 달인이 되고 싶다면 지금부터! 백스윙과 거리의 완벽한 조화를 몸에 새기세요!",
        "파 5홀은 인내의 게임! 공격적 욕심을 버리고 전략적 플레이로 승리를 쟁취하세요!",
        "러프는 기회입니다! 무리한 도전보다 확실한 페어웨이 복귀로 다음 샷을 준비하세요!"
      ]
    },
    pilates: {
      simple: [
        "호흡과 동작 싱크를 맞추기 위해 시작 전 호흡 패턴을 인지하고 천천히 움직이세요.",
        "코어 강화를 위해 데드 버그 동작을 홈 트레이닝에 추가하세요. 하루 10회 3세트면 충분합니다.",
        "척추 중립 유지 능력을 키우기 위해 일상에서도 골반 위치를 의식적으로 체크하세요.",
        "유연성 향상을 위해 수업 후 5-10분 추가 스트레칭을 진행하세요.",
        "어깨와 목 긴장 완화를 위해 수업 전 어깨 롤링과 목 스트레칭을 습관화하세요."
      ],
      empathy: [
        "호흡과 동작이 안 맞아서 답답하셨죠? 서두르지 마시고 호흡을 먼저 느낀 후 천천히 따라가 보세요.",
        "코어가 약하다고 느껴지시나요? 데드 버그 동작을 집에서 가볍게 해보세요. 부담 없이 10회 3세트로 시작해요.",
        "올바른 자세 유지가 어렵죠? 일상생활에서 앉을 때, 설 때 골반 위치를 잠깐씩만 체크해보세요. 변화가 느껴질 거예요.",
        "몸이 뻣뻣하게 느껴지시나요? 수업 끝나고 5분만 더 스트레칭하면 훨씬 부드러워질 거예요.",
        "어깨와 목이 자주 뭉치시죠? 수업 전에 간단히 풀어주는 습관만 들여도 큰 차이가 난답니다."
      ],
      passionate: [
        "호흡은 필라테스의 생명! 동작 전 호흡을 완벽히 인지하고 하나가 되어 움직이세요!",
        "강철 코어를 원한다면 지금 당장! 데드 버그로 하루 10회 3세트, 당신의 한계를 돌파하세요!",
        "완벽한 자세는 완벽한 의식에서! 매 순간 골반 위치를 체크하며 몸의 중심을 장악하세요!",
        "유연성은 곧 자유! 수업 후 단 5분의 스트레칭으로 당신의 가능성을 확장하세요!",
        "긴장은 적! 수업 전 어깨와 목을 완전히 풀어내고 최고의 컨디션으로 시작하세요!"
      ]
    },
    running: {
      simple: [
        "보폭을 일정하게 유지하기 위해 메트로놈 앱이나 리듬감 있는 음악을 활용하세요. 분당 180보를 목표로 하세요.",
        "지구력 향상을 위해 주 1회 LSD 러닝으로 장거리 페이스 감각을 키우세요.",
        "러닝 후 스트레칭과 폼롤러로 종아리와 허벅지 근육을 이완하세요.",
        "언덕 인터벌 트레이닝을 주 1회 추가하여 다리 근력과 심폐 지구력을 향상시키세요.",
        "러닝화 상태를 체크하고 500km 이상 사용 시 교체하세요."
      ],
      empathy: [
        "보폭이 들쭉날쭉해서 힘드시죠? 음악 리듬에 맞춰 뛰어보세요. 분당 180보 정도로 일정하게 유지하면 한결 편해질 거예요.",
        "장거리가 부담스러우시죠? 주 1회 천천히 오래 뛰는 LSD 러닝을 해보세요. 속도보다 거리에 집중하면 됩니다.",
        "달리고 나면 다리가 뻐근하시죠? 러닝 후 스트레칭과 폼롤러로 종아리, 허벅지를 꼭 풀어주세요. 다음 날이 훨씬 가벼워요.",
        "평지만 달리면 지루하시죠? 가끔 언덕을 뛰어보세요. 다리도 튼튼해지고 심폐력도 좋아집니다.",
        "신발이 헌 것 같은데 계속 신고 계시나요? 500km 넘으면 부상 위험이 커져요. 발을 위해 새 신발로 바꿔주세요."
      ],
      passionate: [
        "리듬은 러너의 무기! 메트로놈이나 음악으로 분당 180보를 완벽히 새기고 페이스를 지배하세요!",
        "진정한 러너는 거리를 두려워하지 않습니다! 주 1회 LSD 러닝으로 당신의 한계를 확장하세요!",
        "회복은 곧 성장! 러닝 후 스트레칭과 폼롤러로 근육을 완벽히 케어하며 더 강해지세요!",
        "언덕은 강자의 훈련장! 주 1회 언덕 인터벌로 다리 근력과 심폐력을 폭발적으로 끌어올리세요!",
        "최고의 도구로 최고의 퍼포먼스를! 500km 넘은 신발은 과감히 교체하고 부상 없는 러닝을 완성하세요!"
      ]
    }
  };

  // 운동 타입별 콘텐츠 정의
  const reportContent = {
    golf: {
      badge: "아쉬운 마음은 뒤로 !",
      score: "20 SCORE",
      detail: {
        title: "AI 상세 회고",
        paragraphs: [
          "오늘 라운드에서는 전반적으로 안정적인 경기 운영을 보여주셨습니다. 특히 드라이버 샷의 방향이 지난 주 대비 15% 향상되었습니다.",
          "하지만 3퍼트가 2회 발생했으며, 이는 주로 긴 거리의 퍼팅에서 나타났습니다. 백스윙의 템포를 조금 더 안정적으로 유지하면 개선될 것으로 보입니다.",
          "심리적으로는 해저드 앞에서 약간의 불안감이 감지되었습니다. 프리샷 루틴을 통해 이를 극복하는 연습이 필요합니다.",
          "다음 라운드까지 짧은 퍼팅 연습에 집중하시면 스코어 향상이 기대됩니다!"
        ]
      },
      advices: coachAdvices.golf[tone]
    },
    pilates: {
      badge: "한 걸음 더 성장했어요 !",
      score: "19 SCORE",
      detail: {
        title: "AI 상세 회고",
        paragraphs: [
          "오늘 필라테스 세션에서는 코어 안정성이 지난주 대비 20% 향상되었습니다. 특히 플랭크 자세에서 복부 근육의 활성화가 눈에 띄게 좋아졌습니다.",
          "하지만 호흡과 동작의 싱크가 완벽하지 않아 일부 동작에서 효율이 떨어졌습니다. 천천히 호흡에 집중하며 움직이는 연습이 필요합니다.",
          "척추 중립 자세를 유지하는 능력이 향상되었으며, 이는 장기적으로 자세 교정에 큰 도움이 될 것입니다.",
          "다음 세션에서는 하체 근력 강화 동작을 추가하면 전신 밸런스가 더욱 좋아질 것으로 예상됩니다!"
        ]
      },
      advices: coachAdvices.pilates[tone]
    },
    running: {
      badge: "멋진 페이스였어요 !",
      score: "18 SCORE",
      detail: {
        title: "AI 상세 회고",
        paragraphs: [
          "오늘 러닝에서는 평균 페이스가 5분 30초로 목표 페이스를 정확히 유지했습니다. 특히 후반부에서도 속도가 떨어지지 않은 점이 인상적입니다.",
          "심박수 데이터를 보면 유산소 구간을 잘 유지했으며, 이는 지구력 향상에 매우 긍정적인 신호입니다.",
          "하지만 보폭이 약간 불규칙했으며, 이로 인해 에너지 효율이 떨어질 수 있습니다. 리듬감 있는 보폭 연습이 필요합니다.",
          "전반적으로 훌륭한 컨디션 관리를 보여주셨습니다. 다음 러닝에서는 거리를 조금 더 늘려보는 것을 추천합니다!"
        ]
      },
      advices: coachAdvices.running[tone]
    }
  };

  const content = reportContent[exerciseType];

  return (
    <div className="bg-white relative size-full">
      <div className="absolute h-[42px] left-0 right-0 overflow-clip top-0 w-full">
        <ImportedStatusBar />
      </div>
      <LogoSection onBackClick={onBackClick} />

      {/* Scrollable content area */}
      <div className="absolute top-[105px] left-0 right-0 bottom-[61.875px] overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="relative min-h-full px-[20px]">
          {/* Main gradient box */}
          <div className="absolute bg-gradient-to-b from-[#e8ebf3] h-[239px] left-[20px] right-[20px] rounded-[18px] to-[#eaedf4] top-0 via-[#ebeff5] via-[49.038%]" />

          {/* Navigation arrows */}
          <button
            onClick={() => setShowDetail(false)}
            className="absolute left-[35px] size-[20px] top-[110px] z-20"
          >
            <div className="rotate-180">
              <ChevronRight className="size-full text-[#292929]" strokeWidth={1.4} />
            </div>
          </button>

          <button
            onClick={() => setShowDetail(true)}
            className="absolute right-[35px] size-[20px] top-[110px] z-20"
          >
            <ChevronRight className="size-full text-[#292929]" strokeWidth={1.4} />
          </button>

          {/* Always show character */}
          <div className={`absolute h-[131px] left-1/2 top-[67px] -translate-x-1/2 w-[109px] transition-opacity duration-300 ${showDetail ? 'opacity-0' : 'opacity-100'}`}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img 
                alt="Bird Character" 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-auto object-contain" 
                src={image_a1b0bb6dd882c17cbb3396c01a5b82fb28bb31b2}
              />
            </div>
          </div>

          {/* Badge and speech bubble - always visible */}
          <div className={`absolute bg-[rgba(255,72,44,0.5)] h-[33px] left-1/2 -translate-x-1/2 rounded-[20px] top-[26px] w-[122px] z-10 transition-opacity duration-300 ${showDetail ? 'opacity-0' : 'opacity-100'} bg-[#8192e880]`} />
          <p className={`absolute font-['Noto_Sans_CJK_KR',sans-serif] font-medium leading-[20px] left-1/2 -translate-x-1/2 text-[12px] top-[32px] tracking-[-0.5px] whitespace-pre z-10 transition-opacity duration-300 ${showDetail ? 'opacity-0' : 'opacity-100'} text-[#ffffff]`}>
            {content.badge}
          </p>
          <div className={`absolute flex items-center justify-center left-1/2 translate-x-[45px] size-[14px] top-[55.49px] z-10 transition-opacity duration-300 ${showDetail ? 'opacity-0' : 'opacity-100'}`}>
            <div className="rotate-180">
              <div className="relative size-[14px]">
                <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                  {/* SVG removed */}
                </div>
              </div>
            </div>
          </div>

          {/* Score text - always visible */}
          <p className={`absolute font-['Noto_Sans_CJK_KR',sans-serif] font-bold leading-[normal] left-1/2 text-[#292929] text-[8px] text-center top-[221px] tracking-[-0.5px] -translate-x-1/2 -translate-y-full whitespace-pre z-10 transition-opacity duration-300 ${showDetail ? 'opacity-0' : 'opacity-100'}`}>
            {content.score}
          </p>

          {/* AI Detail overlay */}
          {showDetail && (
            <div className="absolute left-[40px] right-[40px] top-[14px] h-[200px] z-15">
              <div className="p-4 h-full overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <h3 className="font-['Noto_Sans_CJK_KR',sans-serif] font-bold text-[14px] text-[#ff482c] mb-3 tracking-[-0.5px]">
                  {content.detail.title}
                </h3>
                <div className="space-y-3 font-['Noto_Sans_CJK_KR',sans-serif] text-[12px] text-[#292929] leading-[18px] tracking-[-0.5px]">
                  {content.detail.paragraphs.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Level section */}
          <div className="absolute bg-[#f5573f] h-[70px] left-[20px] right-[20px] rounded-[8px] top-[259px]" />

          {/* Level circles */}
          <div className="absolute left-[33px] size-[22px] top-[294px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <circle cx="11" cy="11" fill="white" r="11" />
            </svg>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 size-[28px] top-[291px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <circle cx="14" cy="14" fill="white" r="14" />
            </svg>
          </div>
          <div className="absolute right-[33px] size-[22px] top-[294px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <circle cx="11" cy="11" fill="white" r="11" />
            </svg>
          </div>

          {/* Connecting lines */}
          <div className="absolute bg-white h-[5px] left-[48px] top-[303px] w-[calc(50%-62px)]" />
          <div className="absolute h-0 left-1/2 translate-x-[14px] top-[307px] right-[48px]">
            <div className="absolute inset-[-3px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 3">
                <line stroke="white" strokeDasharray="6 6" strokeWidth="3" x1="0" x2="100%" y1="1.5" y2="1.5" />
              </svg>
            </div>
          </div>

          {/* Current position indicators */}
          <div className="absolute right-[35px] size-[18px] top-[296px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <circle cx="9" cy="9" fill="#FFFFFF" r="9" />
            </svg>
          </div>
          <div className="absolute left-[35px] size-[18px] top-[296px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <circle cx="9" cy="9" fill="#FFFFFF" r="9" />
            </svg>
          </div>

          {/* Character at center */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[293px] w-[24.029px] h-[23px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0293 23">
              <g>
                <circle cx="11" cy="12" fill="#4F4F4F" r="11" />
                <circle cx="8" cy="10.3604" fill="black" r="1" />
                <path d="M8 7.03809L10.312 10.3604" stroke="black" />
                <path d={svgPaths.p21031400} fill="white" />
                <circle cx="14.123" cy="13.5801" fill="black" r="1" />
                <path d={svgPaths.p256cff00} stroke="black" />
                <path d={svgPaths.p1216d00} fill="#FFAF2E" />
                <rect
                  fill="#F5573F"
                  height="3.16122"
                  rx="0.5"
                  transform="rotate(30.6846 7.61328 0)"
                  width="19.0886"
                  x="7.61328"
                />
              </g>
            </svg>
          </div>

          {/* Decorative elements */}
          <div className="absolute h-[2.5px] left-1/2 -translate-x-1/2 translate-x-[-2.5px] top-[307.5px] w-[5px]">
            <div className="absolute inset-[-20%_-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 3.5">
                <path d={svgPaths.p9c4ce80} fill="white" stroke="black" />
              </svg>
            </div>
          </div>

          <div className="absolute h-[6px] left-1/2 -translate-x-1/2 translate-x-[7px] top-[287px] w-[4px]">
            <div className="absolute inset-[-9.25%_-20.8%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.6641 7.1094">
                <path d={svgPaths.p70118c0} stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <p className="absolute font-['Noto_Sans_CJK_KR',sans-serif] leading-[normal] left-[40px] text-[14px] text-white top-[287px] tracking-[-0.5px] translate-y-[-100%] whitespace-pre">
            LEVEL
          </p>

          {/* Coach advice section */}
          <div className="absolute left-[30px] top-[349px] flex items-center gap-[8px]">
            <p className="font-['Noto_Sans_CJK_KR',sans-serif] font-bold leading-[20px] text-[#292929] text-[14px] tracking-[-0.5px] whitespace-pre">
              코치 어드바이스
            </p>
            <svg className="size-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>

          {/* Advice cards */}
          {content.advices.map((advice, index) => {
            const topPosition = 384 + (index * 80);
            
            return (
              <div key={index} className="absolute left-[20px] right-[20px] h-[70px]" style={{ top: `${topPosition}px` }}>
                <div className="relative bg-white border border-[#ff482c] border-solid h-full rounded-[12px] flex items-center px-[20px] gap-[12px]">
                  <div className="bg-[#ff482c] rounded-full size-[23px] flex items-center justify-center flex-shrink-0">
                    <p className="font-['Noto_Sans_CJK_KR',sans-serif] text-[14px] text-white leading-[normal] tracking-[-0.5px]">
                      {index + 1}
                    </p>
                  </div>
                  <div className="font-['Noto_Sans_CJK_KR',sans-serif] leading-[18px] text-[#292929] text-[12px] tracking-[-0.5px] flex items-center">
                    <p className="mb-0 whitespace-normal break-words overflow-wrap-anywhere">{advice}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Bottom padding for scroll */}
          <div className="h-[50px]" />
        </div>
      </div>

      <NavigationBar activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}