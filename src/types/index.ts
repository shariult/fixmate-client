import { categories, serviceModes } from "@/data/appData";
import { AuthUser } from "@/lib/authClient";
import { IconType } from "react-icons";

type TBreadCrumbs = {
  id: number;
  label: string;
  slug?: string;
};

type TPagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
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
  approvalStatus: TServiceApproval;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
};
type TServiceInput = Omit<
  TService,
  | "_id"
  | "slug"
  | "userId"
  | "approvalStatus"
  | "isAvailable"
  | "createdAt"
  | "updatedAt"
>;

type TBookingStatus =
  | "requested"
  | "accepted"
  | "in-progress"
  | "completed"
  | "cancelled"
  | "rejected";
type TBooking = {
  _id: string;
  serviceId: string;
  serviceDetails?: TService;
  technicianId: string;
  technicianDetails?: AuthUser;
  customerId: string;
  customerDetails?: AuthUser;
  basePrice: number;
  finalAmount?: number;
  customerPhone: string;
  preferredDate: string;
  address: string;
  problemDescription: string;
  paymentId?: string;
  paymentDate?: string;
  status: TBookingStatus;
  createdAt: string;
  updatedAt: string;
};
type TBookingInput = Omit<
  TBooking,
  | "_id"
  | "customerId"
  | "technicianId"
  | "paymentId"
  | "status"
  | "createdAt"
  | "updatedAt"
>;

type TPayment = {
  _id?: string;
  serviceId: string;
  serviceDetails?: TService;
  bookingId: string;
  bookingDetails?: string;
  technicianId: string;
  technicianDetails?: AuthUser;
  customerId: string;
  customerDetails?: AuthUser;
  amount: number;
  currency: string;
  transactionId: string;
  stripeSessionId: string;
  paymentStatus: "paid" | "unpaid";
  paidAt: string;
};

export type {
  TBreadCrumbs,
  TPagination,
  TCategory,
  TServiceMode,
  TUserInput,
  TImgbbImage,
  TImgbbResponse,
  TServiceApproval,
  TService,
  TServiceInput,
  TBookingStatus,
  TBooking,
  TBookingInput,
  TPayment,
};
