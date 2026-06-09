import { Session } from '@/shared/types/Auth';

export function parseSession(raw: string | undefined): Session | null {
  if (!raw) return null;
  try {
    return JSON.parse(decodeURIComponent(raw)) as Session;
  } catch {
    return null;
  }
}
