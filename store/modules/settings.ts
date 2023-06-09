/**
 * @Description: app state
 * @Date: 2023-03-28
 */

import { defineStore } from 'pinia';

export interface SettingsState {
  theme: string;
  fixedHeader: boolean;
  showSettings: boolean;
  showTagsView: boolean;
  showSidebar: boolean;
  showAside: boolean;
  galleryMode: string;
  maxResPerPage: number;
  // cardSize: number;
}

export const useSettingsStore = defineStore('settings', () => {
  const state = reactive<SettingsState>({
    theme: '',
    fixedHeader: true,
    showSettings: true,
    showTagsView: true,
    showSidebar: true,
    showAside: true,
    galleryMode: '',
    maxResPerPage: 24,
    // cardSize: 0,
  });

  const showAside = () => {
    state.showAside = !state.showAside;
  };

  return { state, showAside };
});
