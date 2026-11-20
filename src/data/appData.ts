import { TCategory, TServiceMode } from "@/types";
import {
  PiDeviceMobile,
  PiLaptop,
  PiSnowflake,
  PiThermometerCold,
  PiTelevision,
  PiWashingMachine,
  PiLightning,
  PiHouseBold,
  PiStorefrontBold,
} from "react-icons/pi";

const categories: TCategory[] = [
  {
    id: 1,
    title: "Smartphone",
    slug: "smartphone",
    details: "Latest smartphones, accessories, and mobile repair parts.",
    icon: PiDeviceMobile,
  },
  {
    id: 2,
    title: "Laptop & PC",
    slug: "laptop-and-pc",
    details: "Laptops, desktops, components, and computer peripherals.",
    icon: PiLaptop,
  },
  {
    id: 3,
    title: "AC",
    slug: "ac",
    details:
      "Split and window air conditioners with installation and servicing.",
    icon: PiSnowflake,
  },
  {
    id: 4,
    title: "Refrigerator",
    slug: "refrigerator",
    details: "Single-door, double-door, and side-by-side refrigerators.",
    icon: PiThermometerCold,
  },
  {
    id: 5,
    title: "TV",
    slug: "tv",
    details: "LED, OLED, and smart TVs in a range of screen sizes.",
    icon: PiTelevision,
  },
  {
    id: 6,
    title: "Washing Machine",
    slug: "washing-machine",
    details: "Top-load, front-load, and semi-automatic washing machines.",
    icon: PiWashingMachine,
  },
  {
    id: 7,
    title: "Electrical",
    slug: "electrical",
    details: "Fans, lights, switches, wiring, and other electrical essentials.",
    icon: PiLightning,
  },
];

const serviceModes: TServiceMode[] = [
  {
    id: 1,
    title: "Home Visit",
    slug: "home-visit",
    details: "You go to the customer",
    icon: PiHouseBold,
  },
  {
    id: 2,
    title: "Shop Drop-off",
    slug: "shop-drop-off",
    details: "Customer brings the device to you",
    icon: PiStorefrontBold,
  },
];

export { categories, serviceModes };
