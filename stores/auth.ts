import { defineStore } from 'pinia';
import { useAlertStore } from './alert';
import { useLocalStorage } from '~/composables/useLocalStorage';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(useLocalStorage('user'));
  const returnUrl = ref(null);

  const LOGIN = async (
    emailUname: string,
    password: string
  ): Promise<boolean> => {
    const { $api } = useNuxtApp();
    try {
      const user = await $api.auth.login({
        emailUname: emailUname,
        password: password,
      });
      user.value = user;
      useLocalStorage('user');
      await useRouter().push('/gallery');
      return true;
    } catch (error) {
      const alertStore = useAlertStore();
      alertStore.error(error);
      console.log(error);
      return false;
    }
  };
  // actions: {
  //   async [LOGIN](username: string, password: string) {
  //     const user = await login(username, password);
  //   },
  const LOGOUT = async () => {
    user.value = null;
    localStorage.removeItem('user');
    await useRouter().push('/');
    // router.push("/auth/login");
  };

  // async [REGISTER_USER](user: IUser) {
  //   await fetchWrapper.post(`${baseUrl}/register`, user)
  // },

  const REGISTER = async (
    account: ICreateAccountInput
  ): Promise<FormValidation | undefined> => {
    try {
      const { $api } = useNuxtApp();
      const user = await $api.auth.register(account);

      user.value = user;
      await useRouter().push('/login');
    } catch (error: any) {
      console.log('error: ' + error.toString());
    }
  };

  return {
    user,
    returnUrl,
    LOGIN,
    LOGOUT,
    REGISTER,
  };
});
