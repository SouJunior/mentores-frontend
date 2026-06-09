'use server';

import { UserLoginResponse } from '@/features/auth/types/IUserLoginService';
import { SetNewPasswordDTO } from '@/features/auth/types/IUserSetNewPassword';
import { safeFetch } from '@/shared/lib/fetch';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type LoginFormData = {
  email: string;
  password: string;
};

type RegisterFormData = {
  fullName: string;
  email: string;
  dateOfBirth: string;
  emailConfirm: string;
  password: string;
  passwordConfirmation: string;
};

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

export async function login(formData: LoginFormData) {
  const response = await safeFetch(`/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: formData.email,
      password: formData.password,
      type: 'mentor',
    }),
  });

  if (!response.ok) {
    return { error: await readErrorMessage(response) };
  }

  const { token, info }: UserLoginResponse = await response.json();

  const cookieStore = await cookies();
  const isProd = process.env.NODE_ENV === 'production';

  cookieStore.set('token', token, {
    httpOnly: true,
    secure: isProd,
    sameSite: 'lax',
    path: '/',
  });

  cookieStore.set(
    'session',
    JSON.stringify({
      id: String(info.id),
      fullName: info.fullName,
      profile: info.profile,
      profileKey: info.profileKey,
      registerComplete: info.registerComplete,
      createdAt: info.createdAt,
      updatedAt: info.updatedAt,
      deactivatedDays: info.deactivatedDays,
      deactivatedAt: info.deactivatedAt,
      calendlyName: info.calendlyName,
    }),
    {
      httpOnly: false,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
    }
  );

  console.log(cookieStore.get('session')?.value);

  if (!info.registerComplete) redirect('/onBoarding');
  redirect('/');
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('token');
  cookieStore.delete('session');
  redirect('/login');
}

export async function register(formData: RegisterFormData) {
  const response = await safeFetch(`/mentor`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    return { error: await readErrorMessage(response) };
  }

  return {};
}

export async function sendPasswordResetLink(email: string) {
  const response = await safeFetch(
    `/mentor/restoreAccount/${encodeURIComponent(email)}`,
    { method: 'POST' }
  );

  if (!response.ok) {
    return { error: await readErrorMessage(response) };
  }

  return {};
}

export async function setNewPassword(
  data: SetNewPasswordDTO,
  { code, email }: { code: string; email: string }
) {
  const params = new URLSearchParams({ code, email });
  const response = await safeFetch(
    `/mentor/restoreAccount/redefinePass?${params.toString()}`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password: data.password,
        confirmPassword: data.confirmPassword,
      }),
    }
  );

  if (!response.ok) {
    return { error: await readErrorMessage(response) };
  }

  return {};
}
