import { useRouter, useState } from '#app';
import { useLocalStorage } from './useLocalStorage';
import { ISession } from '~/types/ISession';
import { IUser } from '~/types/IUser';
import { useAlertStore } from '~~/stores/alert';
import consolaGlobalInstance from 'consola';

export const useAuthCookie = () => useCookie('auth_token');

export async function useUser(): Promise<IUser | null> {
  const authCookie = useAuthCookie().value;
  const user = useState<IUser | null>('user');

  if (authCookie && !user.value) {
    const cookieHeaders = useRequestHeaders(['cookie']);

    const { data } = await useFetch<IUser>(`/api/auth/getByAuthToken`, {
      headers: cookieHeaders as HeadersInit,
    });

    user.value = data.value;
  }

  return user.value;
}

export async function useLoggedIn() {
  const user = await useUser();

  if (!user) {
    return false;
  }

  if (user?.id == null) {
    return false;
  }

  return true;
}

export async function userLogout() {
  await useFetch('/api/auth/logout');
  useState('user').value = null;
  await useRouter().push('/');
}

export async function registerWithEmail(
  username: string,
  name: string,
  email: string,
  password: string
): Promise<FormValidation | undefined> {
  try {
    const { data, error } = await useFetch<ISession>('/api/auth/register', {
      method: 'POST',
      body: { data: { username, name, email, password } },
      server: false,
      key: username + name + email + password,
    });

    if (error.value) {
      type ErrorData = {
        data: ErrorData;
      };

      const errorData = error.value as unknown as ErrorData;
      const errors = errorData.data.data as unknown as string;
      const res = JSON.parse(errors);
      const errorMap = new Map<string, { check: InputValidation }>(
        Object.entries(res)
      );

      return { hasErrors: true, errors: errorMap };
    }

    if (data) {
      useState('user').value = data;
      await useRouter().push('/topics');
    }
  } catch (e: any) {
    console.log('error: ' + e.toString());
  }
}

export async function login(
  usernameOrEmail: string,
  password: string
): Promise<boolean> {
  const { $api } = useNuxtApp();
  try {
    const user = await $api.auth.login({
      usernameOrEmail: usernameOrEmail,
      password: password,
    });
    useState('user').value = user;
    useLocalStorage('user');
    await useRouter().push('/gallery');
    return true;
  } catch (error) {
    const alertStore = useAlertStore();
    alertStore.error(error);
    console.log(error);
    return false;
  }
}

//  // redirect to previous url or default to home page
//  // router.push(this.returnUrl || "/auth");
