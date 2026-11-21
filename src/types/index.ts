import { categories, serviceModes } from "@/data/appData";
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

type TCategoryTitle = (typeof categories)[number]["title"];
type TCategorySlug = (typeof categories)[number]["slug"];
type TServiceModeTitle = (typeof serviceModes)[number]["title"];
type TServiceModeSlug = (typeof serviceModes)[number]["slug"];
type TServiceStatus = "approved" | "pending" | "rejected";
type TServiceApproval = "approved" | "pending" | "rejected";

type TService = {
  _id: string;
  title: string;
  slug: string;
  category: TCategoryTitle;
  categorySlug: TCategorySlug;
  description: string;
  image: string;
  basePrice: number;
  estimatedDuration: string;
  serviceMode: TServiceModeTitle;
  serviceModeSlug: TServiceModeSlug;
  serviceArea: string;
  userId: string;
  approval: TServiceApproval;
  status: TServiceStatus;
  createdAt: string;
  updatedAt: string;
};
type TServiceInput = Omit<
  TService,
  "_id" | "slug" | "userId" | "approval" | "status" | "createdAt" | "updatedAt"
>;

export type {
  TBreadCrumbs,
  TCategory,
  TServiceMode,
  TUserInput,
  TServiceStatus,
  TServiceApproval,
  TService,
  TServiceInput,
};
