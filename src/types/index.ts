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

type TUserInput = {
  name: string;
  phone?: string | null;
  email: string;
  role: string;
  address?: string | null;
  bio?: string | null;
  image?: string | null;
};

export type { TBreadCrumbs, TCategory, TServiceMode, TUserInput };
