import { categories, serviceModes } from "@/data/appData";
import { AuthUser } from "@/lib/authClient";
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

type TImgbbImage = {
  filename: string;
  name: string;
  mime: string;
  extension: string;
  url: string;
};

type TImgbbResponse = {
  data: {
    id: string;
    title: string;
    url_viewer: string;
    url: string;
    display_url: string;
    width: number;
    height: number;
    size: number;
    time: number;
    expiration: number;
    image: TImgbbImage;
    thumb: TImgbbImage;
    medium?: TImgbbImage; // only present for larger images
    delete_url: string;
  };
  success: boolean;
  status: number;
};

type TCategorySlug = (typeof categories)[number]["slug"];
type TServiceModeSlug = (typeof serviceModes)[number]["slug"];
type TServiceStatus = "active" | "inactive";
type TServiceApproval = "approved" | "pending" | "rejected";

type TService = {
  _id: string;
  title: string;
  slug: string;
  category: TCategorySlug;
  description: string;
  image: string;
  imageDeleteUrl: string;
  basePrice: number;
  estimatedDuration: string;
  serviceMode: TServiceModeSlug;
  serviceArea: string;
  userId: string;
  userDetails?: AuthUser;
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
  TImgbbImage,
  TImgbbResponse,
  TServiceStatus,
  TServiceApproval,
  TService,
  TServiceInput,
};
