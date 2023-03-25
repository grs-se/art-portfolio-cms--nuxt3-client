import { defineStore } from 'pinia'
// import { IAlert } from '@/types/IAlert'

export const useAlertStore = defineStore({
  id: 'alert',
  state: () => ({
    alert: null,
  }),
  actions: {
    success(message: string) {
      this.alert = { message, type: 'alert-success' }
    },
    error(message: string) {
      this.alert = { message, type: 'alert-danger' }
    },
    clear() {
      this.alert = null
    },
  },
})
