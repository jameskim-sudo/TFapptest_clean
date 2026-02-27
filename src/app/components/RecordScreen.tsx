import image_9030d15dab537e4ad4d816e28e5ab05b51ab759f from 'figma:asset/9030d15dab537e4ad4d816e28e5ab05b51ab759f.png'
import image_c824d8df631bb947e8c5149a6368662bca277a35 from 'figma:asset/c824d8df631bb947e8c5149a6368662bca277a35.png'
import image_10df07a8a2a07cc7e302d5afdc2f7461aa52a08b from 'figma:asset/10df07a8a2a07cc7e302d5afdc2f7461aa52a08b.png'
import svgPaths from "@/imports/svg-e2ysyc6iuz";
import { ChevronLeft, ChevronRight, Flag, Activity, Footprints } from "lucide-react";
import NavigationBar from "@/app/components/NavigationBar";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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

function TopBar() {
  return (
    <div className="absolute h-[54px] left-0 overflow-clip top-[42px] w-full max-w-[480px]">
      <div className="absolute inset-0 bg-white" />
      <button className="absolute left-[14px] size-[24px] top-[15px]">
        <ChevronLeft className="size-full text-[#272833]" strokeWidth={1.6} />
      </button>
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[normal] left-1/2 -translate-x-1/2 not-italic text-[#2e333a] text-center top-[calc(50%-10px)] tracking-[-0.5px] whitespace-pre font-bold text-[18px]">
        운동 선택하기
      </p>
    </div>
  );
}

interface ExerciseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

function ExerciseCard({ icon, title, description, onClick }: ExerciseCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-[#ff482c] rounded-[16px] h-[72px] w-full flex items-center px-3 gap-5 hover:bg-[#fff5f5] transition-colors"
    >
      <div className="bg-[#f5573f] rounded-full size-[42px] flex items-center justify-center text-white">
        {icon}
      </div>
      <div className="flex-1 text-left">
        <p className="font-['Pretendard:Bold',sans-serif] font-bold text-[17px] text-[#292929] mb-0 tracking-[-0.5px] -ml-[5px]">
          {title}
        </p>
        <p className="font-['Pretendard:Regular',sans-serif] font-normal text-[12px] tracking-[-0.5px] text-[#999999] -ml-[5px]">
          {description}
        </p>
      </div>
      <ChevronRight className="size-5 text-[#ff482c]" strokeWidth={1.4} />
    </button>
  );
}

interface RecordScreenProps {
  onGolfClick?: () => void;
  onPilatesClick?: () => void;
  onRunningClick?: () => void;
  onTabChange?: (tab: string) => void;
}

export default function RecordScreen({ onGolfClick, onPilatesClick, onRunningClick, onTabChange }: RecordScreenProps) {
  const handleTabChange = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="bg-white relative size-full">
      <StatusBar />
      <TopBar />

      {/* Content */}
      <div className="absolute top-[96px] left-0 right-0 px-5">
        <div className="flex flex-col font-['Noto_Sans_CJK',sans-serif] font-medium leading-[23px] not-italic text-[#ff482c] text-[20px] tracking-[1px] mb-2">
          <p className="mb-0 mt-[10px] text-[21px]">어떤 운동을</p>
          <p className="mt-[2px]">분석할까요?</p>
        </div>
        <p className="font-['Noto_Sans_CJK',sans-serif] font-normal leading-[20px] not-italic text-[#292929] text-[14px] tracking-[-0.5px] mb-6">
          맞춤형 AI 코칭이 준비되어 있습니다.
        </p>

        {/* Exercise Cards */}
        <div className="space-y-[10px]">
          <ExerciseCard
            icon={<ImageWithFallback src={image_10df07a8a2a07cc7e302d5afdc2f7461aa52a08b} alt="Golf" className="size-5 object-cover" />}
            title="Golf"
            description="스윙 궤적 및 밸런스 분석"
            onClick={onGolfClick}
          />
          <ExerciseCard
            icon={<ImageWithFallback src={image_c824d8df631bb947e8c5149a6368662bca277a35} alt="Pilates" className="size-5 object-cover" />}
            title="Pilates"
            description="코어 정렬 및 유연성 체크"
            onClick={onPilatesClick}
          />
          <ExerciseCard
            icon={<ImageWithFallback src={image_9030d15dab537e4ad4d816e28e5ab05b51ab759f} alt="Running" className="size-5 object-cover" />}
            title="Running"
            description="주행 폼 및 보폭 분석"
            onClick={onRunningClick}
          />
        </div>
      </div>

      <NavigationBar activeTab="record" onTabChange={handleTabChange} />
    </div>
  );
}