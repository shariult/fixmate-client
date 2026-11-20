import { IconType } from "react-icons";

type TBreadCrumbs = {
  id: number;
  label: string;
  slug?: string;
};

type TCategory = {
  id: number;
  title: string;
  slug: string;
  details: string;
  icon: IconType;
};

type TServiceMode = {
  id: number;
  title: string;
  slug: string;
  details: string;
  icon: IconType;
};

export { type TBreadCrumbs, type TCategory, type TServiceMode };
