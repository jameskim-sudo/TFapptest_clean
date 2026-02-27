import { createContext, useContext, useState, ReactNode } from 'react';

export type CoachTone = 'simple' | 'empathy' | 'passionate';

interface CoachToneContextType {
  tone: CoachTone;
  setTone: (tone: CoachTone) => void;
}

const CoachToneContext = createContext<CoachToneContextType | undefined>(undefined);

export function CoachToneProvider({ children }: { children: ReactNode }) {
  const [tone, setTone] = useState<CoachTone>('simple');

  return (
    <CoachToneContext.Provider value={{ tone, setTone }}>
      {children}
    </CoachToneContext.Provider>
  );
}

export function useCoachTone() {
  const context = useContext(CoachToneContext);
  if (context === undefined) {
    throw new Error('useCoachTone must be used within a CoachToneProvider');
  }
  return context;
}
