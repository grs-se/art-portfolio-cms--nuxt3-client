import { defineStore } from 'pinia';
import { UserState } from '../types';

import Avatar from '@/assets/img_avatar_default.png';

const defaultAvatar = Avatar;

const useUserStore = defineStore('user-info', {
  state: () => {
    return {
      userId: 0,
      roleId: 0,
      token: '',
      userName: '',
      avatar: defaultAvatar,
    };
  },
  actions: {
    saveUser(userInfo: UserState) {
      return new Promise<UserState>((resolve) => {
        this.userId = userInfo.userId;
        this.roleId = userInfo.roleId;
        this.token = userInfo.token;
        this.userName = userInfo.userName;
        this.avatar = userInfo.avatar || defaultAvatar;
        resolve(userInfo);
      });
    },
    isTokenExpire() {
      return !this.token;
    },
    logout() {
      return new Promise<void>((resolve) => {
        this.$reset();
        localStorage.clear();
        sessionStorage.clear();
        resolve();
      });
    },
  },
});

export default useUserStore;
