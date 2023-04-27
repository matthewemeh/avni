import { StaticImageData } from 'next/image';

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

export interface Article {
  id: number;
  title: string;
  article: string;
  createdAt: string;
  updatedAt: string;
  image: StaticImageData;
}

export interface ProductCategory {
  id: number;
  bgImage: string;
  categoryName: string;
}

export interface ThemeSale {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

export interface SpaceIdea {
  id: number;
  title: string;
  bgImage: string;
}

export interface Service {
  href: string;
  title: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  image: StaticImageData;
}

export interface Furniture {
  text: string;
  bgImage: string;
}

export interface FocalPoint {
  href: string;
  title: string;
}

export interface SlideData {
  id: number;
  video: any;
  title: string;
  themeColor: string;
  focalPoints: FocalPoint[];
  image: StaticImageData | null;
  thumbnail?: StaticImageData | null;
}

export interface Room {
  href: string;
  text: string;
  bgImage: string;
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
