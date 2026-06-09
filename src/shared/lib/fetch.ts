import { cookies } from 'next/headers';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000';

type ServerFetchOptions = RequestInit & {
  tags?: string[];
};

async function buildHeaders(
  token?: string,
  extra?: HeadersInit
): Promise<HeadersInit> {
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...extra,
  };
}

export async function safeFetch(
  path: string,
  options: RequestInit = {}
): Promise<Response> {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const { headers, ...rest } = options;

  return fetch(`${API_URL}${path}`, {
    ...rest,
    headers: await buildHeaders(token, headers),
  });
}

export async function serverFetch<T>(
  path: string,
  options: ServerFetchOptions = {}
): Promise<T> {
  const { tags, headers, ...rest } = options;

  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  const response = await fetch(`${API_URL}${path}`, {
    ...rest,
    headers: await buildHeaders(token, headers),
    next: tags ? { tags } : undefined,
  });

  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`);
  }

  const text = await response.text();
  if (!text) return undefined as T;

  return JSON.parse(text) as T;
}
