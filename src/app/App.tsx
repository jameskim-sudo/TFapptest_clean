import { useState, useEffect, useCallback } from "react";
import Intro from "@/imports/Intro";
import SplashScreen from "@/app/components/SplashScreen";
import AnimatedOnboardingScreen from "@/app/components/AnimatedOnboardingScreen";
import LoginScreen from "@/app/components/LoginScreen";
import HomeScreen from "@/app/components/HomeScreen";
import RecordScreen from "@/app/components/RecordScreen";
import GolfCoachingScreen from "@/app/components/GolfCoachingScreen";
import PilatesCoachingScreen from "@/app/components/PilatesCoachingScreen";
import RunningCoachingScreen from "@/app/components/RunningCoachingScreen";
import LoadingScreen from "@/app/components/LoadingScreen";
import ReportScreen from "@/app/components/ReportScreen";
import ReportListScreen from "@/app/components/ReportListScreen";
import MyScreen from "@/app/components/MyScreen";
import GoalSettingScreen from "@/app/components/GoalSettingScreen";
import { CoachToneProvider } from "@/app/contexts/CoachToneContext";

type Screen = "intro" | "splash" | "onboarding" | "login" | "home" | "record" | "golfCoaching" | "pilatesCoaching" | "runningCoaching" | "loading" | "report" | "reportList" | "my" | "goalSetting";
type ExerciseType = "golf" | "pilates" | "running";

const TAB_TO_SCREEN: Record<string, Screen> = {
  home: "home",
  record: "record",
  report: "reportList",
  my: "my",
} as const;

function ScreenLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col flex-1 min-h-0 overflow-hidden">{children}</div>;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("intro");
  const [currentExerciseType, setCurrentExerciseType] = useState<ExerciseType>("golf");

  const navigate = useCallback((screen: Screen) => {
    setCurrentScreen(screen);
  }, []);

  // Auto-advance from splash to onboarding after 2 seconds
  useEffect(() => {
    if (currentScreen === "splash") {
      const timer = setTimeout(() => navigate("onboarding"), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen, navigate]);

  // Auto-advance from loading to report after 3 seconds
  useEffect(() => {
    if (currentScreen === "loading") {
      const timer = setTimeout(() => navigate("report"), 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen, navigate]);

  const handleTabChange = useCallback(
    (tab: string) => {
      const screen = TAB_TO_SCREEN[tab];
      if (screen) setCurrentScreen(screen);
    },
    []
  );

  const handleExerciseClick = useCallback((type: ExerciseType) => {
    setCurrentExerciseType(type);
    setCurrentScreen(`${type}Coaching` as Screen);
  }, []);

  return (
    <CoachToneProvider>
      <div className="w-full min-h-dvh min-h-[100vh] mx-auto bg-gray-100 flex items-center justify-center" style={{ height: '100dvh', minHeight: '100vh' }}>
        <div
          className="w-full max-w-[393px] relative bg-white flex flex-col overflow-hidden h-full"
          style={{
            height: '100dvh',
            maxHeight: '100dvh',
            minHeight: 0,
            paddingTop: 'env(safe-area-inset-top, 0px)'
          }}
        >
          {currentScreen === "intro" && (
            <ScreenLayout>
              <div onClick={() => navigate("home")}>
                <Intro />
              </div>
            </ScreenLayout>
          )}
          {currentScreen === "splash" && (
            <ScreenLayout>
              <SplashScreen />
            </ScreenLayout>
          )}
          {currentScreen === "onboarding" && (
            <ScreenLayout>
              <AnimatedOnboardingScreen
                onStartClick={() => navigate("home")}
                onLoginClick={() => navigate("login")}
              />
            </ScreenLayout>
          )}
          {currentScreen === "login" && (
            <ScreenLayout>
              <LoginScreen
                onBackClick={() => navigate("onboarding")}
                onLoginSuccess={() => navigate("home")}
              />
            </ScreenLayout>
          )}
          {currentScreen === "home" && (
            <ScreenLayout>
              <HomeScreen onTabChange={handleTabChange} onGoalSettingClick={() => navigate("goalSetting")} />
            </ScreenLayout>
          )}
          {currentScreen === "record" && (
            <ScreenLayout>
              <RecordScreen
                onTabChange={handleTabChange}
                onGolfClick={() => handleExerciseClick("golf")}
                onPilatesClick={() => handleExerciseClick("pilates")}
                onRunningClick={() => handleExerciseClick("running")}
              />
            </ScreenLayout>
          )}
          {currentScreen === "golfCoaching" && (
            <ScreenLayout>
              <GolfCoachingScreen onBackClick={() => navigate("record")} onComplete={() => navigate("loading")} />
            </ScreenLayout>
          )}
          {currentScreen === "pilatesCoaching" && (
            <ScreenLayout>
              <PilatesCoachingScreen onBackClick={() => navigate("record")} onComplete={() => navigate("loading")} />
            </ScreenLayout>
          )}
          {currentScreen === "runningCoaching" && (
            <ScreenLayout>
              <RunningCoachingScreen onBackClick={() => navigate("record")} onComplete={() => navigate("loading")} />
            </ScreenLayout>
          )}
          {currentScreen === "loading" && (
            <ScreenLayout>
              <LoadingScreen onBackClick={() => navigate("record")} />
            </ScreenLayout>
          )}
          {currentScreen === "report" && (
            <ScreenLayout>
              <ReportScreen exerciseType={currentExerciseType} onBackClick={() => navigate("record")} onTabChange={handleTabChange} />
            </ScreenLayout>
          )}
          {currentScreen === "reportList" && (
            <ScreenLayout>
              <ReportListScreen onTabChange={handleTabChange} onReportClick={() => navigate("report")} />
            </ScreenLayout>
          )}
          {currentScreen === "my" && (
            <ScreenLayout>
              <MyScreen onTabChange={handleTabChange} />
            </ScreenLayout>
          )}
          {currentScreen === "goalSetting" && (
            <ScreenLayout>
              <GoalSettingScreen onBackClick={() => navigate("home")} />
            </ScreenLayout>
          )}
        </div>
      </div>
    </CoachToneProvider>
  );
}
