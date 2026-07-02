import { CookieSession } from '@/shared/types/Auth';

export function parseSession(raw: string | undefined): CookieSession | null {
  if (!raw) return null;
  try {
    return JSON.parse(decodeURIComponent(raw)) as CookieSession;
  } catch {
    return null;
  }
}
