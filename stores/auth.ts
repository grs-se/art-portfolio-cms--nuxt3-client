import { defineStore } from 'pinia'

import { fetchWrapper } from '~/services/fetch-wrapper'
// import { router } from "~/router";
import { useAlertStore } from '~/stores/alert'

const baseUrl = `${import.meta.env.VITE_API_URL}/users`

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null,
  }),
  actions: {
    async [LOGIN](username: string, password: string) {
      try {
        const user = await fetchWrapper.post(`${baseUrl}/authenticate`, {
          username,
          password,
        })

        // update pinia state
        this.user = user
        // this.tokenUser = user;
        console.log('this.user', this.user)

        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user))
        // localStorage.setItem("tokenUser", JSON.stringify(tokenUser));

        // redirect to previous url or default to home page
        // router.push(this.returnUrl || "/auth");
      } catch (error) {
        const alertStore = useAlertStore()
        alertStore.error(error)
        console.log(error)
      }
    },
    [LOGOUT]() {
      this.user = null
      localStorage.removeItem('user')
      // router.push("/auth/login");
    },
  },
})
