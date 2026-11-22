import { IconType } from "react-icons/lib";
import {
  PiClipboardTextBold,
  PiCreditCardBold,
  PiPlusBold,
  PiShieldCheckBold,
  PiSquaresFourBold,
  PiUsersBold,
  PiWrenchBold,
} from "react-icons/pi";

type TSideLink = {
  id: number;
  href: string;
  label: string;
  icon: IconType;
};

type TSidebar = {
  role: string;
  links: TSideLink[];
};

const adminSidebarConfig: TSidebar = {
  role: "admin",
  links: [
    {
      id: 1,
      href: "/dashboard/admin",
      label: "Overview",
      icon: PiSquaresFourBold,
    },
    {
      id: 2,
      href: "/dashboard/admin/users",
      label: "Manage Users",
      icon: PiUsersBold,
    },
    {
      id: 3,
      href: "/dashboard/admin/services",
      label: "Service Approval",
      icon: PiShieldCheckBold,
    },
    {
      id: 4,
      href: "/dashboard/admin/bookings",
      label: "All Bookings",
      icon: PiClipboardTextBold,
    },
    {
      id: 5,
      href: "/dashboard/admin/transactions",
      label: "Transactions",
      icon: PiCreditCardBold,
    },
  ],
};

const technicianSidebarConfig: TSidebar = {
  role: "technician",
  links: [
    {
      id: 1,
      href: "/dashboard/technician",
      label: "Overview",
      icon: PiSquaresFourBold,
    },
    {
      id: 2,
      href: "/dashboard/technician/add-service",
      label: "Add Service",
      icon: PiPlusBold,
    },
    {
      id: 3,
      href: "/dashboard/technician/my-services",
      label: "My Services",
      icon: PiWrenchBold,
    },
    {
      id: 4,
      href: "/dashboard/technician/requests",
      label: "Manage Requests",
      icon: PiClipboardTextBold,
    },
  ],
};

const customerSidebarConfig: TSidebar = {
  role: "customer",
  links: [
    {
      id: 1,
      href: "/dashboard/customer",
      label: "Overview",
      icon: PiSquaresFourBold,
    },
    {
      id: 2,
      href: "/dashboard/customer/bookings",
      label: "My Bookings",
      icon: PiClipboardTextBold,
    },
    {
      id: 3,
      href: "/dashboard/customer/payments",
      label: "Payment History",
      icon: PiCreditCardBold,
    },
  ],
};

export {
  adminSidebarConfig,
  technicianSidebarConfig,
  customerSidebarConfig,
  type TSidebar,
  type TSideLink,
};
