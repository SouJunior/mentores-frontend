import { Session } from '@/shared/types/Auth';
import { create } from 'zustand';

interface SessionState {
  session: Session | null;
  setSession: (session: Session | null) => void;
  clearSession: () => void;
}

export const useSessionStore = create<SessionState>(set => ({
  session: null,
  setSession: session => set({ session }),
  clearSession: () => set({ session: null }),
}));
