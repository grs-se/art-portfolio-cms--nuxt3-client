import { defineStore } from 'pinia';

import defaultSetting from '@/setting';
import {
  LayoutMode,
  PageAnim,
  SideTheme,
  ThemeMode,
  DeviceType,
} from '../types';

import { useChangeMenuWidth } from '@/hooks/useMenuWidth';
useChangeMenuWidth(defaultSetting.sideWidth);

const useAppConfigStore = defineStore('app-config', {
  state: () => {
    return defaultSetting;
  },
  getters: {
    getLayoutMode(state) {
      return state.layoutMode;
    },
  },
  actions: {
    changeTheme(theme: ThemeMode) {
      this.theme = theme;
    },
    changeLayoutMode(mode: LayoutMode) {
      this.layoutMode = mode;
    },
    changeDevice(deviceType: DeviceType) {
      this.deviceType = deviceType;
    },
    changeSideWidth(sideWidth: number) {
      this.sideWidth = sideWidth;
      const r = document.querySelector(':root') as HTMLElement;
      r.style.setProperty('--menu-width', sideWidth + 'px');
    },
    toggleCollapse(isCollapse: boolean) {
      this.isCollapse = isCollapse;
    },
  },
  persist: {
    enable: true,
    resetToState: true,
  },
});

export default useAppConfigStore;
