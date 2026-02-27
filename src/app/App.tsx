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
      <div className="w-full h-screen mx-auto bg-gray-100 overflow-hidden flex items-center justify-center">
        <div className="w-[393px] h-[852px] relative bg-white overflow-hidden" style={{
          maxHeight: '100dvh' // Dynamic viewport height for mobile browsers, falls back to 100vh if not supported
        }}>
          {currentScreen === "intro" && (
            <div onClick={handleIntroButtonClick}>
              <Intro />
            </div>
          )}
          {currentScreen === "splash" && <SplashScreen />}
          {currentScreen === "onboarding" && (
            <AnimatedOnboardingScreen 
              onStartClick={handleStartClick} 
              onLoginClick={handleLoginClick} 
            />
          )}
          {currentScreen === "login" && (
            <LoginScreen 
              onBackClick={handleBackToOnboarding} 
              onLoginSuccess={handleLoginSuccess} 
            />
          )}
          {currentScreen === "home" && <HomeScreen onTabChange={handleTabChange} onGoalSettingClick={handleGoalSettingClick} />}
          {currentScreen === "record" && (
            <RecordScreen 
              onTabChange={handleTabChange} 
              onGolfClick={handleGolfClick}
              onPilatesClick={handlePilatesClick}
              onRunningClick={handleRunningClick}
            />
          )}
          {currentScreen === "golfCoaching" && (
            <GolfCoachingScreen onBackClick={handleBackToRecord} onComplete={handleCoachingComplete} />
          )}
          {currentScreen === "pilatesCoaching" && (
            <PilatesCoachingScreen onBackClick={handleBackToRecord} onComplete={handleCoachingComplete} />
          )}
          {currentScreen === "runningCoaching" && (
            <RunningCoachingScreen onBackClick={handleBackToRecord} onComplete={handleCoachingComplete} />
          )}
          {currentScreen === "loading" && <LoadingScreen onBackClick={handleBackFromLoading} />}
          {currentScreen === "report" && <ReportScreen exerciseType={currentExerciseType} onBackClick={handleBackFromReport} onTabChange={handleReportTabChange} />}
          {currentScreen === "reportList" && <ReportListScreen onTabChange={handleReportTabChange} onReportClick={handleReportClick} />}
          {currentScreen === "my" && <MyScreen onTabChange={handleTabChange} />}
          {currentScreen === "goalSetting" && <GoalSettingScreen onBackClick={handleBackFromGoalSetting} />}
        </div>
      </div>
    </CoachToneProvider>
  );
}