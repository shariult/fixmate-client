"use client";

import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  useEffect,
  useState,
} from "react";
import { MoonSVG, SunSVG } from "./SVGIcons";

type TTheme = "brand" | "brand-dark";
type TThemeToggleProps = {
  className?: string;
} & ComponentPropsWithoutRef<"label">;

function ThemeToggle(props: TThemeToggleProps) {
  const { className, ...rest } = props;

  const [theme, setTheme] = useState<TTheme>(function () {
    if (typeof window === "undefined") return "brand-dark";

    const saved = localStorage.getItem("theme");
    if (saved === "brand" || saved === "brand-dark") {
      return saved;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "brand-dark"
      : "brand";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function themeChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setTheme(e.target.checked ? "brand-dark" : "brand");
  }

  return (
    <label
      className={`swap swap-rotate md:mr-4 ${className ? className : ""}`}
      {...rest}
    >
      <input
        type="checkbox"
        checked={theme === "brand-dark"}
        onChange={themeChangeHandler}
      />
      <SunSVG className="swap-off h-5 w-5 md:h-6 md:w-6 fill-current" />
      <MoonSVG className="swap-on h-5 w-5 md:h-6 md:w-6 fill-current" />
    </label>
  );
}

export default ThemeToggle;
