import svgPaths from "@/imports/svg-9xsnuh490b";
import { Activity, Calendar, Target, TrendingUp, Dumbbell, Play } from "lucide-react";

function StatusBar() {
  return (
    <div className="absolute h-[42px] left-0 overflow-clip top-0 w-[360px]">
      <div className="absolute h-[20.16px] left-[20.16px] overflow-clip rounded-[19.2px] top-[11.52px] w-[51.84px]">
        <div className="absolute h-[14.4px] left-[calc(50%+0.56px)] top-[calc(50%-0.56px)] translate-x-[-50%] translate-y-[-50%] w-[31.68px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.68 14.4">
            <g>
              <path d={svgPaths.p56f4b80} fill="black" />
              <path d={svgPaths.p2cf17600} fill="black" />
              <path d={svgPaths.p2346bb30} fill="black" />
              <path d={svgPaths.p2fe2ed80} fill="black" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[23px] w-[28.703px]">
      <div className="relative h-full w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.3801 24.3434">
          <g>
            <g>
              <circle cx="4.03218" cy="4.03218" fill="#004FE8" r="4.03218" transform="matrix(0.707132 -0.707082 0.707132 0.707082 6.67801 11.595)" />
              <rect fill="#004FE8" height="8.06437" transform="matrix(0.707132 -0.707082 0.707132 0.707082 9.52993 14.4457)" width="8.06437" />
            </g>
            <g>
              <circle cx="4.03218" cy="4.03218" fill="#FF482C" r="4.03218" transform="matrix(0.707132 -0.707082 0.707132 0.707082 12.3783 17.2971)" />
              <circle cx="4.03218" cy="4.03218" fill="#FF482C" r="4.03218" transform="matrix(0.707132 -0.707082 0.707132 0.707082 23.975 5.70308)" />
              <rect fill="#FF482C" height="8.06437" transform="matrix(0.707132 -0.707082 0.707132 0.707082 15.2302 14.4464)" width="16.3975" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function DashboardScreen() {
  return (
    <div className="bg-white relative size-full">
      <StatusBar />
      
      {/* Header */}
      <div className="absolute left-[20px] top-[62px] flex items-center gap-2">
        <Logo />
        <span className="font-['Pilseung_Gothic:Basic',sans-serif] text-[20px] text-[#ff482c] tracking-[1px]">
          까먹지마
        </span>
      </div>

      {/* Welcome Section */}
      <div className="absolute left-[20px] right-[20px] top-[120px]">
        <h2 className="font-['Noto_Sans_KR',sans-serif] text-[24px] text-[#292929] tracking-[-0.5px] font-bold">
          안녕하세요! 👋
        </h2>
        <p className="font-['Noto_Sans_KR',sans-serif] text-[14px] text-[#666] mt-1 tracking-[-0.5px] font-medium">
          오늘도 목표를 향해 달려볼까요?
        </p>
      </div>

      {/* Stats Cards */}
      <div className="absolute left-[20px] right-[20px] top-[200px] grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-[#ff482c] to-[#ff6b54] rounded-[16px] p-4 h-[100px]">
          <Activity className="w-6 h-6 text-white mb-2" />
          <p className="font-['Noto_Sans_KR',sans-serif] text-[12px] text-white/80 tracking-[-0.5px] font-medium">
            이번 주 운동
          </p>
          <p className="font-['Noto_Sans_KR',sans-serif] text-[24px] text-white mt-1 font-bold">
            5회
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#004fe8] to-[#3d7aff] rounded-[16px] p-4 h-[100px]">
          <Target className="w-6 h-6 text-white mb-2" />
          <p className="font-['Noto_Sans_KR',sans-serif] text-[12px] text-white/80 tracking-[-0.5px] font-medium">
            목표 달성률
          </p>
          <p className="font-['Noto_Sans_KR',sans-serif] text-[24px] text-white mt-1 font-bold">
            83%
          </p>
        </div>
      </div>

      {/* Activity Section */}
      <div className="absolute left-[20px] right-[20px] top-[330px]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-['Noto_Sans_KR',sans-serif] text-[18px] text-[#292929] tracking-[-0.5px] font-bold">
            운동 선택
          </h3>
        </div>

        <div className="space-y-3">
          {/* Golf Card */}
          <button className="w-full bg-gradient-to-b from-[#e8ebf3] to-[#eaedf4] rounded-[16px] p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">⛳</span>
            </div>
            <div className="flex-1 text-left">
              <p className="font-['Noto_Sans_KR',sans-serif] text-[16px] text-[#292929] tracking-[-0.5px] font-bold">
                골프
              </p>
              <p className="font-['Noto_Sans_KR',sans-serif] text-[12px] text-[#666] tracking-[-0.5px] font-medium">
                스윙 분석 및 교정
              </p>
            </div>
            <Play className="w-5 h-5 text-[#ff482c]" fill="#ff482c" />
          </button>

          {/* Pilates Card */}
          <button className="w-full bg-gradient-to-b from-[#e8ebf3] to-[#eaedf4] rounded-[16px] p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">🧘‍♀️</span>
            </div>
            <div className="flex-1 text-left">
              <p className="font-['Noto_Sans_KR',sans-serif] text-[16px] text-[#292929] tracking-[-0.5px] font-bold">
                필라테스
              </p>
              <p className="font-['Noto_Sans_KR',sans-serif] text-[12px] text-[#666] tracking-[-0.5px] font-medium">
                자세 교정 및 코어 강화
              </p>
            </div>
            <Play className="w-5 h-5 text-[#ff482c]" fill="#ff482c" />
          </button>

          {/* Running Card */}
          <button className="w-full bg-gradient-to-b from-[#e8ebf3] to-[#eaedf4] rounded-[16px] p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">🏃‍♂️</span>
            </div>
            <div className="flex-1 text-left">
              <p className="font-['Noto_Sans_KR',sans-serif] text-[16px] text-[#292929] tracking-[-0.5px] font-bold">
                러닝
              </p>
              <p className="font-['Noto_Sans_KR',sans-serif] text-[12px] text-[#666] tracking-[-0.5px] font-medium">
                폼 분석 및 페이스 관리
              </p>
            </div>
            <Play className="w-5 h-5 text-[#ff482c]" fill="#ff482c" />
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-white border-t border-[#f0f0f0] flex items-center justify-around px-[20px]">
        <button className="flex flex-col items-center gap-1">
          <Dumbbell className="w-6 h-6 text-[#ff482c]" />
          <span className="font-['Noto_Sans_KR',sans-serif] text-[10px] text-[#ff482c] tracking-[-0.5px] font-medium">
            운동
          </span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Calendar className="w-6 h-6 text-[#999]" />
          <span className="font-['Noto_Sans_KR',sans-serif] text-[10px] text-[#999] tracking-[-0.5px] font-medium">
            기록
          </span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <TrendingUp className="w-6 h-6 text-[#999]" />
          <span className="font-['Noto_Sans_KR',sans-serif] text-[10px] text-[#999] tracking-[-0.5px] font-medium">
            통계
          </span>
        </button>
      </div>
    </div>
  );
}