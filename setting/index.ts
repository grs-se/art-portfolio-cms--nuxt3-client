import {
  AppConfigState,
  DeviceType,
  LayoutMode,
  PageAnim,
  SideTheme,
  ThemeMode,
} from '@/store/types';

export const projectName = 'GRS Art Portfolio + CMS';

export default {
  theme: ThemeMode.LIGHT,
  sideTheme: SideTheme.WHITE,
  themeColor: '#fff',
  layoutMode: LayoutMode.LTR,
  sideWidth: 210,
  deviceType: DeviceType.PC,
  pageAnim: PageAnim.OPACITY,
  isFixedNavBar: true,
  isCollapse: false,
  actionBar: {
    isShowSearch: true,
    isShowMessage: true,
    isShowRefresh: true,
    isShowFullScreen: true,
  },
} as AppConfigState;
