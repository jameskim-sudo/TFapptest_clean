import { useState, useEffect, useRef } from "react";
import svgPaths from "@/imports/svg-w6qmt4whw1";
import logoSvgPaths from "@/imports/svg-2p1hjomycv";
import { Home, PenLine, BarChart3, User, Activity, ChevronDown } from "lucide-react";
import NavigationBar from "@/app/components/NavigationBar";

interface ReportListScreenProps {
  onTabChange?: (tab: string) => void;
  onReportClick?: () => void;
}


      function StatusBar() {
  return (
    <div className="absolute h-[42px] left-0 overflow-clip top-0 w-full max-w-[480px]">
      <div className="absolute h-[28.8px] left-0 right-0 top-0" />
      <div className="absolute content-stretch flex gap-[3.84px] items-center right-[13.44px] top-[15.36px]">
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
        <div className="h-[13.44px] relative shrink-0 w-[15.36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.36 13.44">
            <g>
              <path d={svgPaths.p3dc48e00} fill="black" />
              <path d={svgPaths.p3b3c95f0} fill="black" />
              <path d={svgPaths.p932c700} fill="white" fillOpacity="0.3" />
            </g>
          </svg>
        </div>
        <div className="h-[13.44px] relative shrink-0 w-[24px]">
          <div className="absolute inset-[0_-4.17%_0_0]">
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

export default function ReportListScreen({ onTabChange, onReportClick }: ReportListScreenProps) {
  const [activeTab] = useState("report");
  const [selectedTab, setSelectedTab] = useState("weekly");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMonthDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTabChange = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  // Generate dates for calendar (showing 2 weeks range)
  const generateDates = () => {
    const dates = [];
    const today = new Date(2024, 0, 29); // Jan 29, 2024 (Monday)
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 15); // Start from 15 days before

    for (let i = 0; i < 20; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      
      const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][currentDate.getDay()];
      const date = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const isToday = currentDate.toDateString() === today.toDateString();
      const dateString = `2024.${String(month).padStart(2, '0')}.${String(date).padStart(2, '0')}`;
      
      // Determine color based on day of week
      let dayColor = '#292929';
      if (currentDate.getDay() === 0) dayColor = '#ff482c'; // Sunday
      if (currentDate.getDay() === 6) dayColor = '#004fe8'; // Saturday
      
      dates.push({
        dayOfWeek,
        date,
        month,
        isToday,
        dateString,
        dayColor,
        displayDate: date.toString()
      });
    }
    return dates;
  };

  const dates = generateDates();

  // Mock data for exercise records
  const allRecords = [
    // Golf records
    {
      id: 1,
      category: "golf",
      title: "Golf 라운딩",
      date: "2024.01.26",
      duration: "4시간 30분",
      score: 20,
      tags: ["컨디션 좋음", "만족도 높음"],
      color: "#004fe8"
    },
    {
      id: 2,
      category: "golf",
      title: "Golf 라운딩",
      date: "2024.01.23",
      duration: "4시간 15분",
      score: 18,
      tags: ["날씨 좋음", "스코어 개선"],
      color: "#004fe8"
    },
    {
      id: 3,
      category: "golf",
      title: "골프 연습",
      date: "2024.01.20",
      duration: "2시간",
      score: 15,
      tags: ["드라이버 연습", "퍼팅 집중"],
      color: "#004fe8"
    },
    {
      id: 4,
      category: "golf",
      title: "Golf 라운딩",
      date: "2024.01.17",
      duration: "4시간 45분",
      score: 19,
      tags: ["페어웨이 정확도", "버디 2개"],
      color: "#004fe8"
    },
    {
      id: 5,
      category: "golf",
      title: "골프 연습",
      date: "2024.01.14",
      duration: "1시간 30분",
      score: 14,
      tags: ["아이언 연습", "그립 교정"],
      color: "#004fe8"
    },
    // Running records
    {
      id: 6,
      category: "running",
      title: "조깅 러닝",
      date: "2024.01.25",
      duration: "45분",
      score: 18,
      tags: ["5.2km", "평균 페이스 5:30"],
      color: "#9b59b6"
    },
    {
      id: 7,
      category: "running",
      title: "인터벌 러닝",
      date: "2024.01.22",
      duration: "35분",
      score: 17,
      tags: ["4.8km", "고강도 구간"],
      color: "#9b59b6"
    },
    {
      id: 8,
      category: "running",
      title: "LSD 러닝",
      date: "2024.01.19",
      duration: "1시간 10분",
      score: 19,
      tags: ["8.5km", "평균 페이스 6:00"],
      color: "#9b59b6"
    },
    {
      id: 9,
      category: "running",
      title: "아침 조깅",
      date: "2024.01.16",
      duration: "40분",
      score: 16,
      tags: ["5.0km", "좋은 날씨"],
      color: "#9b59b6"
    },
    {
      id: 10,
      category: "running",
      title: "힐 러닝",
      date: "2024.01.13",
      duration: "50분",
      score: 18,
      tags: ["6.2km", "언덕 코스"],
      color: "#9b59b6"
    },
    // Fitness (Pilates) records
    {
      id: 11,
      category: "fitness",
      title: "필라테스 클래스",
      date: "2024.01.24",
      duration: "1시간",
      score: 19,
      tags: ["코어 집중", "차분한 분위기"],
      color: "#ff482c"
    },
    {
      id: 12,
      category: "fitness",
      title: "필라테스 개인 수업",
      date: "2024.01.21",
      duration: "50분",
      score: 20,
      tags: ["자세 교정", "호흡 개선"],
      color: "#ff482c"
    },
    {
      id: 13,
      category: "fitness",
      title: "필라테스 클래스",
      date: "2024.01.18",
      duration: "1시간",
      score: 18,
      tags: ["전신 밸런스", "유연성 향상"],
      color: "#ff482c"
    },
    {
      id: 14,
      category: "fitness",
      title: "필라테스 클래스",
      date: "2024.01.15",
      duration: "1시간",
      score: 17,
      tags: ["하체 근력", "스트레칭"],
      color: "#ff482c"
    },
    {
      id: 15,
      category: "fitness",
      title: "요가 & 필라테스",
      date: "2024.01.12",
      duration: "1시간 20분",
      score: 19,
      tags: ["심신 안정", "복합 수업"],
      color: "#ff482c"
    }
  ];

  // Filter records based on selected category and date
  const filteredRecords = allRecords.filter(record => {
    const categoryMatch = selectedCategory === "all" || record.category === selectedCategory;
    const dateMatch = !selectedDate || record.date === selectedDate;
    return categoryMatch && dateMatch;
  });

  return (
    <div className="bg-white relative size-full overflow-hidden">
      <StatusBar />

      {/* Scrollable content */}
      <div className="absolute top-[42px] left-0 right-0 bottom-[61.875px] overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="px-[20px] pb-[30px] pt-[20px]">
          {/* Title Section */}
          <div className="mb-[12px]">
            <div className="flex items-center gap-[8px] mb-[8px]">
              <h1 className="font-['Pilseung_Gothic',sans-serif] text-[24px] text-[#ff482c] leading-[30px]">
                리포트
              </h1>
            </div>
            <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#666666] leading-[20px] tracking-[-0.3px]">
              쌓인 기록이 이야기가 되어요
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex gap-[8px] mb-[20px]">
            <button
              onClick={() => setSelectedTab("weekly")}
              className={`px-[20px] pt-[11px] pb-[9px] rounded-[20px] font-['Pretendard:Medium',sans-serif] text-[14px] transition-all ${
                selectedTab === "weekly"
                  ? "bg-[#ff482c] text-white"
                  : "bg-[#f5f5f5] text-[#666666]"
              }`}
            >
              주간 리포트
            </button>
            <button
              onClick={() => setSelectedTab("all")}
              className={`px-[20px] pt-[11px] pb-[9px] rounded-[20px] font-['Pretendard:Medium',sans-serif] text-[14px] transition-all ${
                selectedTab === "all"
                  ? "bg-[#ff482c] text-white"
                  : "bg-[#f5f5f5] text-[#666666]"
              }`}
            >
              전체 보기
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex gap-[8px] mb-[20px] mt-[4px]">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-[16px] py-[8px] h-[40px] transition-all ${ selectedCategory === "all" ? "rounded-[0px] text-[#000000] border-b-[1.5px] border-[#000000] text-[17px] font-['Pretendard:Bold',sans-serif]" : "rounded-[16px] bg-white text-[#666666] text-[14px] font-['Pretendard:Medium',sans-serif]" }`}
            >전체</button>
            <button
              onClick={() => setSelectedCategory("golf")}
              className={`px-[16px] py-[8px] h-[40px] transition-all ${ selectedCategory === "golf" ? "rounded-[0px] text-[#000000] border-b-[1.5px] border-[#000000] text-[17px] font-['Pretendard:Bold',sans-serif]" : "rounded-[16px] bg-white text-[#666666] text-[14px] font-['Pretendard:Medium',sans-serif]" }`}
            >골프</button>
            <button
              onClick={() => setSelectedCategory("running")}
              className={`px-[16px] py-[8px] h-[40px] transition-all ${
                selectedCategory === "running"
                  ? "rounded-[0px] text-[#000000] border-b-[1.5px] border-[#000000] text-[17px] font-['Pretendard:Bold',sans-serif]"
                  : "rounded-[16px] bg-white text-[#666666] text-[14px] font-['Pretendard:Medium',sans-serif]"
              }`}
            >
              러닝
            </button>
            <button
              onClick={() => setSelectedCategory("fitness")}
              className={`px-[16px] py-[8px] h-[40px] transition-all ${
                selectedCategory === "fitness"
                  ? "rounded-[0px] text-[#000000] border-b-[1.5px] border-[#000000] text-[17px] font-['Pretendard:Bold',sans-serif]"
                  : "rounded-[16px] bg-white text-[#666666] text-[14px] font-['Pretendard:Medium',sans-serif]"
              }`}
            >
              피트니스
            </button>
          </div>

          {/* Weekly Summary Cards */}
          <div className="grid grid-cols-2 gap-[12px] mb-[16px] -mt-[10px]">
            <div className="bg-gradient-to-br from-[#fff5f5] to-[#ffe5e5] p-[16px] text-center rounded-[12px]">
              <p className="font-['Pretendard:Bold',sans-serif] font-bold leading-[28px] text-[20px] text-[#E6462C]">4회</p>
              <p className="font-['Pretendard:Regular',sans-serif] text-[12px] mt-[4px] text-[#999999]">운동 횟수</p>
            </div>
            <div className="bg-gradient-to-br from-[#f0f5ff] to-[#e0ebff] p-[16px] text-center rounded-[12px]">
              <p className="font-['Pretendard:Bold',sans-serif] font-bold leading-[28px] text-[20px] text-[#264d9a]">6.5h</p>
              <p className="font-['Pretendard:Regular',sans-serif] text-[12px] mt-[4px] text-[#999999]">총 시간</p>
            </div>
          </div>

          {/* Recent Reports List */}
          <div className="mb-[16px] mt-[10px]">
            <h3 className="font-['Pretendard:Medium',sans-serif] font-medium text-[16px] text-[#292929] mb-[12px] mt-[10px]">
              트레이닝 일지 ({filteredRecords.length}개)
            </h3>

            {/* Date Picker moved here */}
            <div className="mb-[16px]">
              {/* Month selector and filter reset */}
              <div className="relative h-[35px] mb-[12px]">
                <button
                  className="absolute left-0 top-0 flex items-center gap-[5px] h-[35px] px-[12px] rounded-[8px] bg-white border border-transparent"
                  onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}
                >
                  <span className="font-['Pretendard:Bold',sans-serif] font-bold text-[16px] text-[#292929]">{selectedMonth}월</span>
                  <ChevronDown className="size-[16px] text-[#666666]" />
                </button>
                {selectedDate && (
                  <button
                    onClick={() => setSelectedDate(null)}
                    className="absolute left-[260px] top-[2.5px] h-[30px] rounded-[8px] font-['Pretendard:Medium',sans-serif] text-[12px] text-[#9E9E9E] underline"
                  >
                    날짜 필터 해제
                  </button>
                )}
                {/* Month dropdown */}
                {isMonthDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 top-[40px] z-10 bg-white border border-[#e8e8e8] rounded-[8px] shadow-lg w-[100px]"
                  >
                    <div className="py-[4px]">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                        <button
                          key={month}
                          className={`block w-full px-[16px] py-[8px] text-left font-['Pretendard:Medium',sans-serif] text-[14px] transition-colors ${
                            selectedMonth === month
                              ? 'bg-[#ff482c] text-white'
                              : 'text-[#292929] hover:bg-[#f5f5f5]'
                          }`}
                          onClick={() => {
                            setSelectedMonth(month);
                            setIsMonthDropdownOpen(false);
                          }}
                        >
                          {month}월
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Horizontal date scroll */}
              <div 
                className="overflow-x-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                <div className="flex gap-[10px] min-w-max pb-[4px] h-[60px]">
                  {dates.map((dateInfo, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(dateInfo.dateString === selectedDate ? null : dateInfo.dateString)}
                      className="flex flex-col items-center justify-center h-[60px] w-[48px] rounded-[12px] transition-all snap-center"
                    >
                      {/* Day of week */}
                      <span 
                        className="font-['Noto_Sans_CJK',sans-serif] font-medium text-[12px] mb-[2px]"
                        style={{ color: dateInfo.dayColor }}
                      >
                        {dateInfo.dayOfWeek}
                      </span>
                      
                      {/* Date */}
                      <div className={`flex items-center justify-center w-[32px] h-[32px] rounded-full transition-all ${
                        dateInfo.isToday && !selectedDate
                          ? 'bg-[#292929]'
                          : selectedDate === dateInfo.dateString
                          ? 'bg-[#ff482c]'
                          : ''
                      }`}>
                        <span 
                          className={`font-['Noto_Sans_CJK',sans-serif] text-[14px] ${
                            dateInfo.isToday && !selectedDate
                              ? 'text-white font-bold'
                              : selectedDate === dateInfo.dateString
                              ? 'text-white font-bold'
                              : 'font-medium'
                          }`}
                          style={{ 
                            color: (!dateInfo.isToday && selectedDate !== dateInfo.dateString) ? dateInfo.dayColor : undefined 
                          }}
                        >
                          {dateInfo.displayDate}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Dynamically render filtered records */}
            {filteredRecords.map((record) => (
              <button
                key={record.id}
                onClick={onReportClick}
                className="w-full bg-white border border-[#e8e8e8] rounded-[16px] p-[16px] mb-[12px] transition-shadow text-left"
                style={{ boxShadow: '0px 0px 2px rgba(137, 137, 137, 0.2)' }}
              >
                <div className="flex items-start justify-between mb-[8px]">
                  <div>
                    <p className="font-['Pretendard:Bold',sans-serif] text-[15px] text-[#292929] mb-[4px] font-bold">
                      {record.title}
                    </p>
                    <p className="font-['Pretendard:Regular',sans-serif] text-[12px] text-[#999999]">
                      {record.date} · {record.duration}
                    </p>
                  </div>
                  <div className="rounded-[12px]">
                    <p className="font-['Noto_Sans_CJK',sans-serif] font-bold text-[12px]" style={{ color: record.color }}>{record.score}점</p>
                  </div>
                </div>
                <div className="flex gap-[8px] flex-wrap">
                  {record.tags.map((tag, index) => (
                    <div key={index} className="bg-[#f5f5f5] px-[10px] py-[4px] rounded-[8px]">
                      <p className="font-['Pretendard:Medium',sans-serif] text-[11px] text-[#666666]">{tag}</p>
                    </div>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <NavigationBar activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}