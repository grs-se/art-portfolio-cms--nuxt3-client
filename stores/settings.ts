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
  galleryMode: string;
}

export const useSettingsStore = defineStore('settings', () => {
  const state = ref({
    theme: '',
    fixedHeader: true,
  });

  return state;
});
