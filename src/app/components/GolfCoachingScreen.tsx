import { useState, useEffect } from "react";
import svgPaths from "@/imports/svg-mp0oyanjv4";
import { ChevronLeft, Camera, X, Calendar, ChevronRight } from "lucide-react";
import { getRandomQuestions, Question } from "@/data/questionData";

interface GolfCoachingScreenProps {
  onBackClick: () => void;
  onComplete: () => void;
}

function StatusBar() {
  return (
    <div className="absolute h-[42px] left-0 overflow-clip top-0 w-full max-w-[480px]">
      <div className="absolute h-[28.797px] left-0 top-0 w-full" />
      <div className="absolute h-[13.438px] left-[313.34px] top-[15.36px] w-[66.227px]">
        {/* Network Signal */}
        <div className="absolute content-stretch flex flex-col h-[13.438px] items-start left-0 top-0 w-[19.195px]">
          <div className="h-[13.438px] overflow-clip relative shrink-0 w-full">
            <div className="absolute contents inset-[14.88%_3.65%_10.71%_10.42%]">
              <div className="absolute inset-[29.76%_27.08%_10.71%_57.29%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.99927 7.99851">
                  <path clipRule="evenodd" d={svgPaths.pa808400} fill="black" fillRule="evenodd" />
                </svg>
              </div>
              <div className="absolute inset-[44.64%_50.52%_10.71%_33.85%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.99927 5.99888">
                  <path clipRule="evenodd" d={svgPaths.p1ab19300} fill="black" fillRule="evenodd" />
                </svg>
              </div>
              <div className="absolute inset-[55.8%_73.95%_10.71%_10.42%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4.5">
                  <path clipRule="evenodd" d={svgPaths.p741b500} fill="black" fillRule="evenodd" />
                </svg>
              </div>
              <div className="absolute inset-[14.88%_3.65%_10.71%_80.73%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.99927 9.99814">
                  <path clipRule="evenodd" d={svgPaths.p244fa400} fill="white" fillOpacity="0.18" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* WiFi Signal */}
        <div className="absolute content-stretch flex flex-col h-[13.438px] items-start left-[23.03px] top-0 w-[15.359px]">
          <div className="h-[13.438px] overflow-clip relative shrink-0 w-full">
            <div className="absolute contents inset-[14.88%_0.71%_10.72%_6.51%]">
              <div className="absolute inset-[66.51%_32.88%_10.71%_38.66%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.37185 3.06042">
                  <path d={svgPaths.p1826e200} fill="black" />
                </svg>
              </div>
              <div className="absolute inset-[40.7%_16.76%_34.64%_22.56%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.31983 3.31425">
                  <path d={svgPaths.p5b74400} fill="black" />
                </svg>
              </div>
              <div className="absolute inset-[14.88%_0.71%_52.95%_6.51%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 4.32259">
                  <path d={svgPaths.p9a59500} fill="white" fillOpacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Battery */}
        <div className="absolute content-stretch flex flex-col h-[13.438px] items-start left-[42.23px] top-0 w-[24px]">
          <div className="h-[13.438px] overflow-clip relative shrink-0 w-full">
            <div className="absolute contents inset-[7.44%_0_3.27%_0]">
              <div className="absolute inset-[7.44%_36%_3.27%_32%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.68 11.9978">
                  <path d={svgPaths.p2c936580} fill="black" />
                </svg>
              </div>
              <div className="absolute inset-[7.44%_51.47%_3.27%_0]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6464 11.9978">
                  <path d={svgPaths.p3f7a8d00} fill="black" fillOpacity="0.6" />
                </svg>
              </div>
              <div className="absolute inset-[7.44%_8%_3.27%_47.47%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6876 11.9978">
                  <path d={svgPaths.p340fd800} fill="black" fillOpacity="0.6" />
                </svg>
              </div>
              <div className="absolute inset-[37.2%_0_33.04%_96%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.96 3.99926">
                  <path d={svgPaths.p21e46e80} fill="black" fillOpacity="0.6" />
                </svg>
              </div>
              <div className="absolute inset-[22.32%_58.2%_18.15%_8%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.11286 7.99851">
                  <path d={svgPaths.p357400} fill="#34C759" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Time Display */}
      <div className="absolute content-stretch flex flex-col h-[20.156px] items-start left-[20.16px] overflow-clip pl-[10.992px] pr-[7.844px] pt-[2.992px] rounded-[19.2px] top-[11.52px] w-[51.836px]">
        <div className="content-stretch flex flex-col h-[15px] items-start relative shrink-0 w-full">
          <div className="h-[15px] overflow-clip relative shrink-0 w-full">
            <div className="absolute contents inset-[13.33%_7.8%_12.74%_6.06%]">
              <div className="absolute inset-[13.33%_69.24%_12.74%_6.06%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.1519 11.0889">
                  <path d={svgPaths.p18998b00} fill="black" />
                </svg>
              </div>
              <div className="absolute inset-[34.57%_56.32%_13.42%_36.58%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.3437 7.80026">
                  <path d={svgPaths.p39256600} fill="black" />
                </svg>
              </div>
              <div className="absolute inset-[15.09%_25.73%_14.45%_48.81%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.4009 10.5688">
                  <path d={svgPaths.p3976f00} fill="black" />
                </svg>
              </div>
              <div className="absolute inset-[15.09%_7.8%_14.45%_78.13%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6436 10.5688">
                  <path d={svgPaths.p7f1ea00} fill="black" />
                </svg>
              </div>
            </div>
          </div>
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
      <p className="absolute font-['Noto_Sans_CJK',sans-serif] leading-[normal] left-1/2 -translate-x-1/2 not-italic text-[#2e333a] text-center top-[calc(50%-10px)] tracking-[-0.5px] whitespace-pre font-bold text-[18px]">
        AI 코칭 LOG
      </p>
    </div>
  );
}

function ProgressBar({ currentStep }: { currentStep: number }) {
  return (
    <div className="absolute flex gap-[5px] left-[20px] right-[20px] top-[111px] max-w-[calc(100%-40px)]">
      {[0, 1, 2, 3, 4, 5].map((step) => (
        <div
          key={step}
          className={`h-[4px] flex-1 ${
            step === currentStep ? "bg-[#f5573f]" : "bg-[#d1d1d1]"
          }`}
        />
      ))}
    </div>
  );
}

function ClockIcon() {
  return (
    <div className="size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g>
          <path d={svgPaths.pc390800} fill="white" />
          <g>
            <path d={svgPaths.p2be027a0} fill="#4F4F4F" />
            <path d={svgPaths.p39bde000} fill="black" />
            <path d={svgPaths.p1c001480} stroke="black" />
            <path d={svgPaths.p20108700} fill="white" />
            <path d={svgPaths.p39bde000} fill="black" />
            <path d={svgPaths.p1a080980} stroke="black" />
            <path d={svgPaths.p15af0c00} fill="#FFAF2E" />
            <path d={svgPaths.p34c7ed80} fill="#F5573F" />
          </g>
        </g>
      </svg>
    </div>
  );
}

interface OptionButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  showClock?: boolean;
}

function OptionButton({ label, isSelected, onClick, showClock }: OptionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative h-[52px] w-full rounded-[12px] border border-[#ff482c] flex items-center px-[25px] ${
        isSelected ? "bg-[#f5573f]" : "bg-white"
      }`}
    >
      <p
        className={`font-['Noto_Sans_CJK',sans-serif] ${
          isSelected ? 'font-bold' : 'font-normal'
        } text-[16px] tracking-[-0.5px] whitespace-nowrap overflow-hidden text-ellipsis ${
          isSelected ? "text-white" : "text-[#292929]"
        }`}
      >
        {label}
      </p>
      {isSelected && showClock && (
        <div className="absolute right-[12px]">
          <ClockIcon />
        </div>
      )}
    </button>
  );
}

interface MultiOptionButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  showClock?: boolean;
}

function MultiOptionButton({ label, isSelected, onClick, showClock }: MultiOptionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative h-[52px] w-[171px] rounded-[8px] border border-[#ff482c] flex items-center justify-center px-4 ${
        isSelected ? "bg-[#f5573f]" : "bg-white"
      }`}
    >
      <p
        className={`font-['Noto_Sans_CJK',sans-serif] ${
          isSelected ? 'font-bold' : 'font-normal'
        } text-[16px] tracking-[-0.5px] whitespace-nowrap overflow-hidden text-ellipsis ${
          isSelected ? "text-white" : "text-[#292929]"
        }`}
      >
        {label}
      </p>
      {isSelected && showClock && (
        <div className="absolute right-[8px]">
          <ClockIcon />
        </div>
      )}
    </button>
  );
}

interface MediaFile {
  id: string;
  file: File;
  preview: string;
  type: 'image' | 'video';
}

export default function GolfCoachingScreen({ onBackClick, onComplete }: GolfCoachingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(string | string[] | number)[]>([null, null, null, null]);
  const [detailInput, setDetailInput] = useState("");
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(0);

  useEffect(() => {
    const randomQuestions = getRandomQuestions('golf');
    setQuestions(randomQuestions);
  }, []);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      setDetailInput("");
    } else {
      console.log('Golf coaching answers:', { selectedDate, questions, answers, mediaFiles });
      onComplete();
    }
  };

  const handleSingleSelect = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep - 1] = value;
    setAnswers(newAnswers);
  };

  const handleMultiSelect = (value: string) => {
    const newAnswers = [...answers];
    const currentAnswer = (newAnswers[currentStep - 1] as string[]) || [];
    
    if (currentAnswer.includes(value)) {
      newAnswers[currentStep - 1] = currentAnswer.filter((item) => item !== value);
    } else {
      newAnswers[currentStep - 1] = [...currentAnswer, value];
    }
    setAnswers(newAnswers);
  };

  const handleScaleSelect = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep - 1] = value;
    setAnswers(newAnswers);
  };

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const fileType = file.type.startsWith('image/') ? 'image' : 'video';
      const preview = URL.createObjectURL(file);
      
      setMediaFiles((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(7),
          file,
          preview,
          type: fileType,
        },
      ]);
    });
    
    e.target.value = '';
  };

  const handleRemoveMedia = (id: string) => {
    setMediaFiles((prev) => {
      const fileToRemove = prev.find((f) => f.id === id);
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prev.filter((f) => f.id !== id);
    });
  };

  useEffect(() => {
    return () => {
      mediaFiles.forEach((file) => {
        URL.revokeObjectURL(file.preview);
      });
    };
  }, []);

  if (questions.length === 0) {
    return (
      <div className="bg-white relative size-full">
        <StatusBar />
        <TopBar onBackClick={onBackClick} />
      </div>
    );
  }

  const currentQuestion = questions[currentStep - 1];
  const currentAnswer = answers[currentStep - 1];

  const canProceed = () => {
    if (currentStep === 0) {
      return selectedDate !== null;
    }
    
    if (currentStep === 5) {
      return true;
    }
    
    if (currentQuestion.type === 'multi') {
      return Array.isArray(currentAnswer) && currentAnswer.length > 0;
    }
    return currentAnswer !== null && currentAnswer !== undefined;
  };

  const generateDates = () => {
    const dates = [];
    const today = new Date(2026, 0, 29);
    const year = currentYear;
    const month = currentMonth;
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();

    for (let i = 0; i < startDayOfWeek; i++) {
      dates.push(null);
    }

    for (let date = 1; date <= daysInMonth; date++) {
      const currentDate = new Date(year, month, date);
      const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][currentDate.getDay()];
      const isToday = currentDate.toDateString() === today.toDateString();
      const isPastDate = currentDate < today && !isToday;
      const dateString = `${year}.${String(month + 1).padStart(2, '0')}.${String(date).padStart(2, '0')}`;
      
      let dayColor = '#292929';
      if (currentDate.getDay() === 0) dayColor = '#ff482c';
      if (currentDate.getDay() === 6) dayColor = '#004fe8';
      
      dates.push({
        date,
        dayOfWeek,
        isToday,
        isPastDate,
        dateString,
        dayColor,
        displayDate: date.toString()
      });
    }

    return dates;
  };

  const dates = generateDates();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="bg-white relative size-full">
      <StatusBar />
      <TopBar onBackClick={onBackClick} />
      <ProgressBar currentStep={currentStep} />

      {currentStep === 0 ? (
        <>
          <div className="absolute flex flex-col font-['Noto_Sans_CJK',sans-serif] font-bold justify-center leading-[0] left-[20px] not-italic text-[#ff482c] text-[20px] top-[156.5px] tracking-[1px] translate-y-[-50%] whitespace-nowrap">
            <p className="leading-[23px] whitespace-pre text-[21px] font-normal tracking-[-0.25px]">운동 날짜 선택</p>
          </div>
          <p className="absolute font-['Noto_Sans_CJK',sans-serif] font-normal leading-[20px] left-[20px] not-italic text-[#292929] text-[14px] top-[174px] tracking-[-0.5px] whitespace-pre">
            기록할 운동의 날짜를 선택해주세요
          </p>

          <div className="absolute left-[20px] right-[20px] top-[218px] max-w-[calc(100%-40px)]">
            <div className="bg-white border border-[#ff482c] py-[22px] px-[12px] rounded-[16px]">
              <div className="flex items-center justify-between gap-[8px] mb-[12px]">
                <button 
                  onClick={handlePrevMonth}
                  className="flex items-center justify-center size-[24px] text-[#ff482c] hover:bg-[#fff5f4] rounded-full transition-colors"
                >
                  <ChevronLeft className="size-[20px]" strokeWidth={2} />
                </button>
                <p className="font-['Noto_Sans_CJK',sans-serif] font-bold text-[#292929] text-[16px] mb-[4px]">
                  {currentYear}년 {currentMonth + 1}월
                </p>
                <button 
                  onClick={handleNextMonth}
                  className="flex items-center justify-center size-[24px] text-[#ff482c] hover:bg-[#fff5f4] rounded-full transition-colors"
                >
                  <ChevronRight className="size-[20px]" strokeWidth={2} />
                </button>
              </div>
              
              <div className="grid grid-cols-7 gap-[6px] mb-[6px]">
                {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
                  <div key={day} className="flex items-center justify-center">
                    <span 
                      className="font-['Noto_Sans_CJK',sans-serif] font-normal text-[11px]"
                      style={{ 
                        color: index === 0 ? '#ff482c' : index === 6 ? '#004fe8' : '#292929' 
                      }}
                    >
                      {day}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-[4px] mt-[2px]">
                {dates.map((dateInfo, index) => {
                  if (!dateInfo) {
                    return <div key={index} />;
                  }
                  
                  return (
                    <button
                      key={index}
                      onClick={() => !dateInfo.isPastDate && setSelectedDate(dateInfo.dateString)}
                      disabled={dateInfo.isPastDate}
                      className={`flex flex-col items-center justify-center py-[4px] rounded-[8px] transition-all ${
                        dateInfo.isPastDate ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'
                      }`}
                    >
                      <div className={`flex items-center justify-center w-[26px] h-[26px] rounded-full transition-all ${
                        dateInfo.isToday && !selectedDate
                          ? 'bg-[#292929]'
                          : selectedDate === dateInfo.dateString
                          ? 'bg-[#ff482c]'
                          : ''
                      }`}>
                        <span 
                          className={`font-['Noto_Sans_CJK',sans-serif] font-bold text-[13px] ${
                            dateInfo.isToday && !selectedDate
                              ? 'text-white'
                              : selectedDate === dateInfo.dateString
                              ? 'text-white'
                              : ''
                          }`}
                          style={{ 
                            color: (!dateInfo.isToday && selectedDate !== dateInfo.dateString) ? dateInfo.dayColor : undefined 
                          }}
                        >
                          {dateInfo.displayDate}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {selectedDate && (
              <div className="mt-[12px] rounded-[8px] py-[12px] px-[15px] flex items-center justify-between bg-[#f7f7f7]">
                  <p className="font-['Noto_Sans_CJK',sans-serif] font-normal text-[13px] text-[#292929]">
                    선택된 날짜
                  </p>
                  <p className="font-['Noto_Sans_CJK',sans-serif] font-bold text-[13px] text-[#ff482c]">
                    {selectedDate}
                  </p>
              </div>
            )}
          </div>
        </>
      ) : currentStep === 5 ? (
        <>
          <div className="absolute flex flex-col font-['Noto_Sans_CJK',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-160px)] not-italic text-[#ff482c] text-[20px] top-[156.5px] tracking-[1px] translate-y-[-50%] whitespace-nowrap">
            <p className="leading-[23px] whitespace-pre font-normal">운동 사진/영상</p>
          </div>
          <p className="absolute font-['Noto_Sans_CJK',sans-serif] font-medium leading-[20px] left-[calc(50%-160px)] not-italic text-[#292929] text-[14px] top-[178px] tracking-[-0.5px] whitespace-pre">
            오늘의 운동을 기록해보세요 (선택사항)
          </p>

          <label className="absolute left-[20px] right-[20px] top-[228px] max-w-[calc(100%-40px)] h-[100px] border-2 border-dashed border-[#ff482c] rounded-[8px] flex flex-col items-center justify-center cursor-pointer hover:bg-[#fff5f4] transition-colors">
            <input
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={handleMediaUpload}
              className="hidden"
            />
            <Camera className="size-[32px] text-[#ff482c] mb-2" />
            <p className="font-['Noto_Sans_CJK',sans-serif] font-medium text-[14px] text-[#ff482c] tracking-[-0.5px]">
              사진/영상 추가하기
            </p>
          </label>

          {mediaFiles.length > 0 && (
            <div className="absolute left-[20px] right-[20px] top-[348px] max-w-[calc(100%-40px)] max-h-[170px] overflow-y-auto">
              <div className="grid grid-cols-3 gap-2">
                {mediaFiles.map((media) => (
                  <div key={media.id} className="relative aspect-square rounded-[8px] overflow-hidden bg-gray-100">
                    {media.type === 'image' ? (
                      <img
                        src={media.preview}
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={media.preview}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <button
                      onClick={() => handleRemoveMedia(media.id)}
                      className="absolute top-1 right-1 size-[20px] bg-black/60 rounded-full flex items-center justify-center hover:bg-black/80"
                    >
                      <X className="size-[14px] text-white" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="absolute h-[23px] left-[25px] top-[145px]">
            <p className="font-['Noto_Sans_CJK',sans-serif] font-normal leading-[23px] not-italic text-[#ff482c] text-[20px]">
              {currentQuestion.title}
            </p>
          </div>
          <p className="absolute font-['Noto_Sans_CJK',sans-serif] font-medium leading-[20px] left-[25px] not-italic text-[#292929] text-[14px] top-[178px] tracking-[-0.5px]">
            {currentQuestion.description}
          </p>

          {currentQuestion.type === 'single' && (
            <div className="absolute left-[20px] right-[20px] top-[228px] max-w-[calc(100%-40px)] space-y-[10px]">
              {currentQuestion.options?.map((option, index) => (
                <OptionButton
                  key={option.value}
                  label={option.label}
                  isSelected={currentAnswer === option.value}
                  onClick={() => handleSingleSelect(option.value)}
                  showClock={currentAnswer === option.value}
                />
              ))}
            </div>
          )}

          {currentQuestion.type === 'scale' && (
            <div className="absolute left-[20px] right-[20px] top-[228px] max-w-[calc(100%-40px)] space-y-[10px]">
              {currentQuestion.scaleRange?.labels?.map((label, index) => (
                <OptionButton
                  key={index + 1}
                  label={label}
                  isSelected={currentAnswer === index + 1}
                  onClick={() => handleScaleSelect(index + 1)}
                  showClock={currentAnswer === index + 1}
                />
              ))}
            </div>
          )}

          {currentQuestion.type === 'multi' && (
            <>
              <div className="absolute left-[20px] right-[20px] top-[228px] max-w-[calc(100%-40px)]">
                {currentQuestion.options && currentQuestion.options.length === 4 && (
                  <>
                    <div className="flex gap-[10px] mb-[10px]">
                      <MultiOptionButton
                        label={currentQuestion.options[0].label}
                        isSelected={Array.isArray(currentAnswer) && currentAnswer.includes(currentQuestion.options[0].value)}
                        onClick={() => handleMultiSelect(currentQuestion.options[0].value)}
                        showClock={Array.isArray(currentAnswer) && currentAnswer.includes(currentQuestion.options[0].value)}
                      />
                      <MultiOptionButton
                        label={currentQuestion.options[1].label}
                        isSelected={Array.isArray(currentAnswer) && currentAnswer.includes(currentQuestion.options[1].value)}
                        onClick={() => handleMultiSelect(currentQuestion.options[1].value)}
                        showClock={Array.isArray(currentAnswer) && currentAnswer.includes(currentQuestion.options[1].value)}
                      />
                    </div>
                    <div className="flex gap-[10px]">
                      <MultiOptionButton
                        label={currentQuestion.options[2].label}
                        isSelected={Array.isArray(currentAnswer) && currentAnswer.includes(currentQuestion.options[2].value)}
                        onClick={() => handleMultiSelect(currentQuestion.options[2].value)}
                        showClock={Array.isArray(currentAnswer) && currentAnswer.includes(currentQuestion.options[2].value)}
                      />
                      <MultiOptionButton
                        label={currentQuestion.options[3].label}
                        isSelected={Array.isArray(currentAnswer) && currentAnswer.includes(currentQuestion.options[3].value)}
                        onClick={() => handleMultiSelect(currentQuestion.options[3].value)}
                        showClock={Array.isArray(currentAnswer) && currentAnswer.includes(currentQuestion.options[3].value)}
                      />
                    </div>
                  </>
                )}
              </div>

              {(currentStep === 3 || currentStep === 4) && Array.isArray(currentAnswer) && currentAnswer.includes('기타') && (
                <>
                  <p className="absolute font-['Noto_Sans_CJK',sans-serif] font-medium leading-[20px] left-[20px] not-italic text-[#292929] text-[14px] top-[372px] tracking-[-0.5px] whitespace-pre">
                    상세 내용 입력 (최대 100자)
                  </p>
                  <div className="absolute left-[20px] right-[20px] top-[402px] max-w-[calc(100%-40px)]">
                    <div className="relative bg-white border border-[#ff482c] rounded-[8px] h-[111px] p-4">
                      <textarea
                        value={detailInput}
                        onChange={(e) => {
                          if (e.target.value.length <= 100) {
                            setDetailInput(e.target.value);
                          }
                        }}
                        placeholder="상세 내용을 입력해주세요"
                        className="w-full h-full resize-none bg-transparent font-['Noto_Sans_CJK',sans-serif] font-medium text-[12px] text-[#292929] tracking-[-0.5px] outline-none placeholder:text-[#999]"
                      />
                    </div>
                    <p className="font-['Noto_Sans_CJK',sans-serif] font-medium text-[12px] text-[#292929] tracking-[-0.5px] text-right mt-2">
                      {detailInput.length} / 100
                    </p>
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}

      <button
        onClick={handleNext}
        disabled={!canProceed()}
        className={`absolute bg-[#f5573f] h-[52px] left-[20px] right-[20px] rounded-[30px] max-w-[calc(100%-40px)] flex items-center justify-center transition-opacity ${
          !canProceed() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#e04a35] cursor-pointer'
        }`}
        style={{
          top: currentStep === 0 && selectedDate ? '590px' : '548px'
        }}
      >
        <p className="font-['Noto_Sans_CJK',sans-serif] font-medium text-[16px] text-white tracking-[-0.5px]">
          {currentStep < 4 ? '다음' : '완료'}
        </p>
      </button>
    </div>
  );
}