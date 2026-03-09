import { useState, useEffect } from "react";
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

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("intro");
  const [currentExerciseType, setCurrentExerciseType] = useState<"golf" | "pilates" | "running">("golf");

  // Auto-advance from splash to onboarding after 2 seconds
  useEffect(() => {
    if (currentScreen === "splash") {
      const timer = setTimeout(() => {
        setCurrentScreen("onboarding");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  // Auto-advance from loading to report after 3 seconds
  useEffect(() => {
    if (currentScreen === "loading") {
      const timer = setTimeout(() => {
        setCurrentScreen("report");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleStartClick = () => {
    setCurrentScreen("home");
  };

  const handleLoginClick = () => {
    setCurrentScreen("login");
  };

  const handleBackToOnboarding = () => {
    setCurrentScreen("onboarding");
  };

  const handleLoginSuccess = () => {
    setCurrentScreen("home");
  };

  const handleTabChange = (tab: string) => {
    if (tab === "home") {
      setCurrentScreen("home");
    } else if (tab === "record") {
      setCurrentScreen("record");
    } else if (tab === "report") {
      setCurrentScreen("reportList");
    } else if (tab === "my") {
      setCurrentScreen("my");
    }
  };

  const handleGolfClick = () => {
    setCurrentScreen("golfCoaching");
    setCurrentExerciseType("golf");
  };

  const handlePilatesClick = () => {
    setCurrentScreen("pilatesCoaching");
    setCurrentExerciseType("pilates");
  };

  const handleRunningClick = () => {
    setCurrentScreen("runningCoaching");
    setCurrentExerciseType("running");
  };

  const handleBackToRecord = () => {
    setCurrentScreen("record");
  };

  const handleCoachingComplete = () => {
    setCurrentScreen("loading");
  };

  const handleBackFromLoading = () => {
    setCurrentScreen("record");
  };

  const handleBackFromReport = () => {
    setCurrentScreen("record");
  };

  const handleReportTabChange = (tab: string) => {
    if (tab === "home") {
      setCurrentScreen("home");
    } else if (tab === "record") {
      setCurrentScreen("record");
    } else if (tab === "report") {
      setCurrentScreen("reportList");
    } else if (tab === "my") {
      setCurrentScreen("my");
    }
  };

  const handleReportClick = () => {
    setCurrentScreen("report");
  };

  const handleMyClick = () => {
    setCurrentScreen("my");
  };

  const handleGoalSettingClick = () => {
    setCurrentScreen("goalSetting");
  };

  const handleBackFromGoalSetting = () => {
    setCurrentScreen("home");
  };

  const handleIntroButtonClick = () => {
    setCurrentScreen("home");
  };

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
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden" onClick={handleIntroButtonClick}>
              <Intro />
            </div>
          )}
          {currentScreen === "splash" && (
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <SplashScreen />
            </div>
          )}
          {currentScreen === "onboarding" && (
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <AnimatedOnboardingScreen 
                onStartClick={handleStartClick} 
                onLoginClick={handleLoginClick} 
              />
            </div>
          )}
          {currentScreen === "login" && (
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <LoginScreen 
                onBackClick={handleBackToOnboarding} 
                onLoginSuccess={handleLoginSuccess} 
              />
            </div>
          )}
          {currentScreen === "home" && (
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <HomeScreen onTabChange={handleTabChange} onGoalSettingClick={handleGoalSettingClick} />
            </div>
          )}
          {currentScreen === "record" && (
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <RecordScreen 
                onTabChange={handleTabChange} 
                onGolfClick={handleGolfClick}
                onPilatesClick={handlePilatesClick}
                onRunningClick={handleRunningClick}
              />
            </div>
          )}
          {currentScreen === "golfCoaching" && (
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <GolfCoachingScreen onBackClick={handleBackToRecord} onComplete={handleCoachingComplete} />
            </div>
          )}
          {currentScreen === "pilatesCoaching" && (
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <PilatesCoachingScreen onBackClick={handleBackToRecord} onComplete={handleCoachingComplete} />
            </div>
          )}
          {currentScreen === "runningCoaching" && (
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <RunningCoachingScreen onBackClick={handleBackToRecord} onComplete={handleCoachingComplete} />
            </div>
          )}
          {currentScreen === "loading" && (
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <LoadingScreen onBackClick={handleBackFromLoading} />
            </div>
          )}
          {currentScreen === "report" && (
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <ReportScreen exerciseType={currentExerciseType} onBackClick={handleBackFromReport} onTabChange={handleReportTabChange} />
            </div>
          )}
          {currentScreen === "reportList" && (
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <ReportListScreen onTabChange={handleReportTabChange} onReportClick={handleReportClick} />
            </div>
          )}
          {currentScreen === "my" && (
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <MyScreen onTabChange={handleTabChange} />
            </div>
          )}
          {currentScreen === "goalSetting" && (
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <GoalSettingScreen onBackClick={handleBackFromGoalSetting} />
            </div>
          )}
        </div>
      </div>
    </CoachToneProvider>
  );
}