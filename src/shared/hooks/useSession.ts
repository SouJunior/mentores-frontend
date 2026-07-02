import { useSessionStore } from '@/shared/store/session-store';

export function useSession() {
  return useSessionStore(state => state.session);
}
