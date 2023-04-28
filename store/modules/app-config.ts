import { defineStore } from 'pinia';

import defaultSetting from '@/setting';
import {
  LayoutMode,
  PageAnim,
  SideTheme,
  ThemeMode,
  DeviceType,
  GalleryMode,
  ResPerPage,
} from '../types';

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
    changeSideBarTheme(sideTheme: SideTheme) {
      this.sideTheme = sideTheme;
    },
    changePageAnim(pageAnim: PageAnim) {
      this.pageAnim = pageAnim;
    },
    changeGalleryMode(mode: GalleryMode) {
      this.galleryMode = mode;
    },
    changeSideWidth(sideWidth: number) {
      this.sideWidth = sideWidth;
      const r = document.querySelector(':root') as HTMLElement;
      r.style.setProperty('--menu-width', sideWidth + 'px');
    },
    toggleAsidePanel() {},
    toggleCollapse(isCollapse: boolean) {
      this.isCollapse = isCollapse;
    },
  },
});

export default useAppConfigStore;
