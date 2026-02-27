import svgPaths from "@/imports/svg-9xsnuh490b";
import { ChevronLeft } from "lucide-react";

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

interface LoginScreenProps {
  onBackClick: () => void;
  onLoginSuccess: () => void;
}

export default function LoginScreen({ onBackClick, onLoginSuccess }: LoginScreenProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div className="bg-white relative size-full">
      <StatusBar />
      
      {/* Back Button */}
      <button
        onClick={onBackClick}
        className="absolute left-[20px] top-[62px] flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
      >
        <ChevronLeft className="w-6 h-6 text-[#292929]" />
      </button>

      {/* Title */}
      <div className="absolute left-[20px] top-[110px]">
        <h1 className="font-['Pilseung_Gothic:Basic',sans-serif] text-[28px] text-[#292929] leading-[1.2] whitespace-pre">
          로그인
        </h1>
        <p className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#666] mt-2 tracking-[-0.5px]">
          까먹지마와 함께 운동 기록을 시작하세요
        </p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="absolute left-[20px] right-[20px] top-[200px]">
        <div className="space-y-4">
          <div>
            <label className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#292929] block mb-2 tracking-[-0.5px]">
              이메일
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full h-[48px] px-4 border border-[#e0e0e0] rounded-[12px] font-['Pretendard:Regular',sans-serif] text-[14px] tracking-[-0.5px] focus:outline-none focus:border-[#ff482c] transition-colors"
            />
          </div>
          
          <div>
            <label className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#292929] block mb-2 tracking-[-0.5px]">
              비밀번호
            </label>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full h-[48px] px-4 border border-[#e0e0e0] rounded-[12px] font-['Pretendard:Regular',sans-serif] text-[14px] tracking-[-0.5px] focus:outline-none focus:border-[#ff482c] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full h-[52px] bg-[#f5573f] rounded-[30px] font-['Pretendard:Medium',sans-serif] text-[16px] text-white tracking-[-0.5px] hover:bg-[#e04a35] transition-colors mt-6"
          >
            로그인
          </button>
        </div>
      </form>

      {/* Footer Links */}
      <div className="absolute left-0 right-0 bottom-[40px] flex justify-center gap-4">
        <button className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#666] tracking-[-0.5px] hover:text-[#ff482c] transition-colors">
          비밀번호 찾기
        </button>
        <span className="text-[#e0e0e0]">|</span>
        <button className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#666] tracking-[-0.5px] hover:text-[#ff482c] transition-colors">
          회원가입
        </button>
      </div>
    </div>
  );
}
