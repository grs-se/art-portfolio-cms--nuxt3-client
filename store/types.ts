export enum LayoutMode {
  LTR = 'ltr',
  LCR = 'lcr',
  TTB = 'ttb',
}

export enum DeviceType {
  PC = 'pc',
  PAD = 'pad',
  MOBILE = 'mobile',
}

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum SideTheme {
  DARK = 'dark',
  WHITE = 'white',
}

export enum GalleryMode {
  GRID = 'grid',
  MASONRY = 'masonry',
  CAROUSEL = 'carousel',
  LIGHTBOX = 'lightbox',
}

export enum PageAnim {
  FADE = 'fade',
  OPACITY = 'opacity',
  DOWN = 'down',
  SCALE = 'scale',
}

export enum ResPerPage {}

export interface UserState {
  userId: number;
  token: string;
  roleId: number;
  roles: string[] | null;
  userName: string;
  avatar: string;
}

export interface AppConfigState {
  projectName: string;
  theme: ThemeMode;
  sideTheme: SideTheme;
  themeColor: string;
  layoutMode: LayoutMode;
  deviceType: DeviceType;
  sideWidth: number;
  pageAnim: PageAnim;
  galleryMode: GalleryMode;
  isFixedNavBar: boolean;
  isCollapse: boolean;
  isShowAside: boolean;
  actionBar: {
    isShowSearch: boolean;
    isShowMessage: boolean;
    isShowRefresh: boolean;
    isShowFullScreen: boolean;
  };
}
