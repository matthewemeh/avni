export interface Option {
  href: string;
  option: string;
}

export interface ExtraStyle {
  [key: string]: string | number;
}

export interface AlertProps {
  msg: string;
  zIndex?: string;
  bgColor?: string;
  duration?: number;
  textColor?: string;
}

export interface FocalPoint {
  href: string;
  title: string;
}

export interface SubNavButton {
  top: number;
  text: string;
}

export interface AppContextData {
  menuOpened: boolean;
  screenWidth: number;
  MOBILE_BREAKPOINT: number;
  LAPTOP_BREAKPOINT: number;
  SMALL_MOBILE_BREAKPOINT: number;
  setMenuOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}
