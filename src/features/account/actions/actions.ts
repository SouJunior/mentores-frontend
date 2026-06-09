'use server';

import { FormValuesDeleteAccountDTO } from '@/features/account/types/IUserDeleteAccount';
import {
  UserUpdateDTO,
  UserUpdatePasswordDTO,
} from '@/features/account/types/IUserUpdate';
import { safeFetch } from '@/shared/lib/fetch';
import { ICalendlyUserInfo } from '@/shared/types/IUseUserCalendlyInfoService';
import { parseSession } from '@/shared/utils/parse-session';
import { updateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function getAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const session = parseSession(cookieStore.get('session')?.value);
  return { token, id: session?.id as string | undefined };
}

function authHeaders(token?: string) {
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function readErrorMessage(response: Response): Promise<string> {
  try {
    const data = await response.json();
    return typeof data?.message === 'string'
      ? data.message
      : Array.isArray(data?.message)
        ? data.message.join(', ')
        : 'Algum erro aconteceu. Entre em contato com a gente.';
  } catch {
    return 'Algum erro aconteceu. Entre em contato com a gente.';
  }
}

export async function updateMentorData(data: UserUpdateDTO) {
  const { token, id } = await getAuth();

  const response = await safeFetch(`/mentor`, {
    method: 'PUT',
    headers: authHeaders(token),
    body: JSON.stringify({ id, ...data }),
  });

  if (!response.ok) {
    return { error: await readErrorMessage(response) };
  }

  updateTag('mentor');
  return {};
}

export async function updateCalendlyInfo(data: ICalendlyUserInfo) {
  const { token } = await getAuth();

  const method = data.id ? 'PUT' : 'POST';
  const path = data.id ? '/calendly/mentorInfo' : '/calendly';

  const response = await safeFetch(path, {
    method,
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    return { error: await readErrorMessage(response) };
  }

  updateTag('calendly');
  return {};
}

export async function updatePassword(data: UserUpdatePasswordDTO) {
  const { token } = await getAuth();

  const response = await safeFetch(`/mentor/change_password`, {
    method: 'PUT',
    headers: authHeaders(token),
    body: JSON.stringify({
      oldPassword: data.oldPassword,
      password: data.password,
      confirmPassword: data.confirmPassword,
    }),
  });

  if (!response.ok) {
    return { error: await readErrorMessage(response) };
  }

  return {};
}

export async function accountDeleteFeedback(data: FormValuesDeleteAccountDTO) {
  const { token } = await getAuth();

  const response = await safeFetch(`/account-deletion-feedback`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    return { error: await readErrorMessage(response) };
  }

  return {};
}

export async function deleteAccount() {
  const { token } = await getAuth();

  await safeFetch(`/mentor/delete-mentor`, {
    method: 'PATCH',
    headers: authHeaders(token),
    body: JSON.stringify({}),
  });

  const cookieStore = await cookies();
  cookieStore.delete('token');
  cookieStore.delete('session');
  redirect('/login');
}
