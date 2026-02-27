import svgPaths from "@/imports/svg-jbcm7dpwih";
import { ChevronLeft } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onBackClick: () => void;
}

function StatusBar() {
  return (
    <div className="absolute h-[42px] left-0 overflow-clip top-0 w-[360px]">
      <div className="absolute h-[28.8px] left-0 right-0 top-0" />
      <div className="absolute content-stretch flex gap-[3.84px] items-center right-[13.44px] top-[15.36px]">
        <div className="h-[13.44px] relative shrink-0 w-[19.2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 13.44">
            <g>
              <path clipRule="evenodd" d={svgPaths.p8f19e00} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p27baaf80} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2fc1a980} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p18332100} fill="white" fillOpacity="0.18" fillRule="evenodd" />
            </g>
          </svg>
        </div>
        <div className="h-[13.44px] relative shrink-0 w-[15.36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.36 13.44">
            <g>
              <path d={svgPaths.p19abb700} fill="black" />
              <path d={svgPaths.p3a35ec00} fill="black" />
              <path d={svgPaths.p531280} fill="white" fillOpacity="0.3" />
            </g>
          </svg>
        </div>
        <div className="h-[13.44px] relative shrink-0 w-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 13.44">
            <g>
              <path d={svgPaths.p6b52b40} fill="black" />
              <path d={svgPaths.p19f34500} fill="black" fillOpacity="0.6" />
              <path d={svgPaths.p1b281d40} fill="black" fillOpacity="0.6" />
              <path d={svgPaths.p1fdeb300} fill="black" fillOpacity="0.6" />
              <path d={svgPaths.p2f30f680} fill="#34C759" />
            </g>
          </svg>
        </div>
      </div>
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

function TopBar({ onBackClick }: { onBackClick: () => void }) {
  return (
    <div className="absolute h-[54px] left-0 overflow-clip top-[42px] w-[360px]">
      <div className="absolute inset-0 bg-white" />
      <button onClick={onBackClick} className="absolute left-[14px] size-[24px] top-[15px]">
        <ChevronLeft className="size-full text-[#272833]" strokeWidth={1.6} />
      </button>
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[normal] left-[40.28%] not-italic right-[40%] text-[#2e333a] text-[16px] text-center top-[calc(50%-10px)] tracking-[-0.5px] whitespace-pre">
        코칭 레포트
      </p>
    </div>
  );
}

export default function LoadingScreen({ onBackClick }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev < 100 ? prev + 1 : prev;
        
        // Update current step based on progress
        if (newProgress >= 66) {
          setCurrentStep(2);
        } else if (newProgress >= 33) {
          setCurrentStep(1);
        } else {
          setCurrentStep(0);
        }
        
        return newProgress;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white relative size-full">
      <StatusBar />
      <TopBar onBackClick={onBackClick} />

      {/* Spinning Icon with animation */}
      <motion.div 
        className="absolute left-[141.56px] top-[171px] size-[76.884px] bg-[#f49b90] opacity-[0.53] rounded-full flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.53 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="size-[71.5px] flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="size-[52.427px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.4271 52.4271">
                <g>
                  <path
                    d={svgPaths.p15719640}
                    stroke="#F5573F"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4.36893"
                  />
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Camera emoji badge */}
      <motion.div 
        className="absolute left-[199.22px] top-[228.66px] size-[25.628px] bg-white rounded-full shadow-[0px_8.009px_12.013px_-2.403px_rgba(0,0,0,0.1),0px_3.204px_4.805px_-3.204px_rgba(0,0,0,0.1)] flex items-center justify-center"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
      >
        <p className="font-['Arial:Regular',sans-serif] text-[16.018px] leading-[22.425px]">🎥</p>
      </motion.div>

      {/* Title */}
      <motion.p 
        className="absolute font-['Pretendard:Medium',sans-serif] leading-[22.425px] left-[179.74px] text-[#0a0a0a] text-[16.018px] text-center top-[271.75px] translate-x-[-50%] whitespace-pre"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        AI 일기 생성 중
      </motion.p>

      {/* Subtitle */}
      <motion.p 
        className="absolute font-['Pretendard:Regular',sans-serif] leading-[19.221px] left-[181.04px] text-[#6a7282] text-[12.814px] text-center top-[300.58px] translate-x-[-50%] whitespace-pre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        잠시만 기다려주세요
      </motion.p>

      {/* Progress Steps */}
      <div className="absolute left-[45px] top-[359.21px] w-[269.547px] flex flex-col gap-[12px]">
        {/* Step 1 - Active */}
        <motion.div 
          className="h-[33.637px] flex items-center gap-[10.091px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <motion.div 
            className={`rounded-full size-[33.637px] flex items-center justify-center`}
            animate={{
              backgroundColor: currentStep >= 0 ? "#f5573f" : "#e5e7eb",
              scale: currentStep === 0 ? [1, 1.1, 1] : 1
            }}
            transition={{ 
              backgroundColor: { duration: 0.3 },
              scale: { duration: 0.5, repeat: currentStep === 0 ? Infinity : 0, repeatDelay: 0.5 }
            }}
          >
            <div className="size-[16.818px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8184 16.8184">
                <g>
                  <path
                    d={svgPaths.pec052a0}
                    stroke={currentStep >= 0 ? "white" : "#99A1AF"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.40154"
                  />
                  <path
                    d={svgPaths.p1a536000}
                    stroke={currentStep >= 0 ? "white" : "#99A1AF"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.40154"
                  />
                </g>
              </svg>
            </div>
          </motion.div>
          <motion.p 
            className={`font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12.814px] leading-[19.221px]`}
            animate={{ color: currentStep >= 0 ? "#101828" : "#99a1af" }}
          >
            베스트 샷 영상 찾는 중
          </motion.p>
        </motion.div>

        {/* Step 2 */}
        <motion.div 
          className="h-[32.035px] flex items-center gap-[9.611px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <motion.div 
            className={`rounded-full size-[32.035px] flex items-center justify-center`}
            animate={{
              backgroundColor: currentStep >= 1 ? "#f5573f" : "#e5e7eb",
              scale: currentStep === 1 ? [1, 1.1, 1] : 1
            }}
            transition={{ 
              backgroundColor: { duration: 0.3 },
              scale: { duration: 0.5, repeat: currentStep === 1 ? Infinity : 0, repeatDelay: 0.5 }
            }}
          >
            <div className="size-[16.018px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0176 16.0176">
                <g>
                  <path
                    d={svgPaths.p24be4180}
                    stroke={currentStep >= 1 ? "white" : "#99A1AF"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.3348"
                  />
                  <path
                    d={svgPaths.p4bc5540}
                    stroke={currentStep >= 1 ? "white" : "#99A1AF"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.3348"
                  />
                </g>
              </svg>
            </div>
          </motion.div>
          <motion.p 
            className={`font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12.814px] leading-[19.221px]`}
            animate={{ color: currentStep >= 1 ? "#101828" : "#99a1af" }}
          >
            평균보다 높은 기록 찾는 중
          </motion.p>
        </motion.div>

        {/* Step 3 */}
        <motion.div 
          className="h-[32.035px] flex items-center gap-[9.611px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <motion.div 
            className={`rounded-full size-[32.035px] flex items-center justify-center`}
            animate={{
              backgroundColor: currentStep >= 2 ? "#f5573f" : "#e5e7eb",
              scale: currentStep === 2 ? [1, 1.1, 1] : 1
            }}
            transition={{ 
              backgroundColor: { duration: 0.3 },
              scale: { duration: 0.5, repeat: currentStep === 2 ? Infinity : 0, repeatDelay: 0.5 }
            }}
          >
            <div className="size-[16.018px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0176 16.0176">
                <g>
                  <path
                    d={svgPaths.p3dca1a00}
                    stroke={currentStep >= 2 ? "white" : "#99A1AF"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.3348"
                  />
                  <path
                    d="M13.3484 1.3345V4.00409"
                    stroke={currentStep >= 2 ? "white" : "#99A1AF"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.3348"
                  />
                  <path
                    d="M14.6829 2.66956H12.0134"
                    stroke={currentStep >= 2 ? "white" : "#99A1AF"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.3348"
                  />
                  <path
                    d={svgPaths.p3bd07c80}
                    stroke={currentStep >= 2 ? "white" : "#99A1AF"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.3348"
                  />
                </g>
              </svg>
            </div>
          </motion.div>
          <motion.p 
            className={`font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12.814px] leading-[19.221px]`}
            animate={{ color: currentStep >= 2 ? "#101828" : "#99a1af" }}
          >
            스토리 만드는 중
          </motion.p>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <motion.div 
        className="absolute left-[51.86px] top-[507.37px] w-[256.281px] bg-[#e5e7eb] h-[6.407px] rounded-full overflow-hidden"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{ transformOrigin: "left" }}
      >
        <motion.div 
          className="bg-[#f5573f] h-full rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.div>

      {/* Progress Percentage */}
      <motion.p 
        className="absolute font-['Pretendard:Regular',sans-serif] leading-[16.018px] left-[180.001px] text-[#6a7282] text-[11.212px] text-center top-[520.18px] translate-x-[-50%] whitespace-pre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {progress}%
      </motion.p>
    </div>
  );
}