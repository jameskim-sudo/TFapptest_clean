import { useCoachTone, CoachTone } from "@/app/contexts/CoachToneContext";
import { X } from "lucide-react";

interface CoachToneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CoachToneModal({ isOpen, onClose }: CoachToneModalProps) {
  const { tone, setTone } = useCoachTone();

  if (!isOpen) return null;

  const tones: { value: CoachTone; label: string; description: string }[] = [
    {
      value: 'simple',
      label: '담백한 톤',
      description: '간결하고 명확한 정보 전달'
    },
    {
      value: 'empathy',
      label: '공감형 톤',
      description: '따뜻하고 공감하는 피드백'
    },
    {
      value: 'passionate',
      label: '열정적인 코치 톤',
      description: '에너지 넘치는 동기부여'
    }
  ];

  const handleSelectTone = (selectedTone: CoachTone) => {
    setTone(selectedTone);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-[20px] w-[340px] mx-auto p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Title */}
        <h2 className="font-['Pretendard:Bold',sans-serif] text-[20px] text-[#292929] mb-2 tracking-[-0.5px]">
          AI 회고 톤 설정
        </h2>
        <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#737373] mb-6 tracking-[-0.3px]">
          원하는 코칭 스타일을 선택하세요
        </p>

        {/* Tone options */}
        <div className="space-y-3">
          {tones.map((toneOption) => (
            <button
              key={toneOption.value}
              onClick={() => handleSelectTone(toneOption.value)}
              className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                tone === toneOption.value
                  ? 'border-[#ff482c] bg-[#fff5f5]'
                  : 'border-[#e5e5e5] bg-white hover:border-[#ffb3a8]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className={`font-['Pretendard:Bold',sans-serif] text-[16px] tracking-[-0.3px] mb-1 ${
                    tone === toneOption.value ? 'text-[#ff482c]' : 'text-[#292929]'
                  }`}>
                    {toneOption.label}
                  </p>
                  <p className="font-['Pretendard:Regular',sans-serif] text-[12px] text-[#737373] tracking-[-0.3px]">
                    {toneOption.description}
                  </p>
                </div>
                {tone === toneOption.value && (
                  <div className="ml-3 w-6 h-6 rounded-full bg-[#ff482c] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Confirm button */}
        <button
          onClick={onClose}
          className="w-full mt-6 bg-[#ff482c] text-white rounded-[12px] py-3 font-['Pretendard:Bold',sans-serif] text-[16px] tracking-[-0.3px] hover:bg-[#e63f26] transition-colors"
        >
          확인
        </button>
      </div>
    </div>
  );
}
