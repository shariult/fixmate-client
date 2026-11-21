import { categories, serviceModes } from "@/data/appData";
import { TImgbbImage, TImgbbResponse } from "@/types";

type TSendRequest<T> =
  | {
      isSuccess: true;
      data: T;
    }
  | {
      isSuccess: false;
      error: {
        message: string;
        status: number;
      };
    };

async function sendRequest<T>(
  urlPath: string,
  options: RequestInit = {},
): Promise<TSendRequest<T>> {
  try {
    const res = await fetch(`${urlPath}`, options);

    if (!res.ok) {
      let message = `Request failed (${res.status})`;
      const body = await res.json();
      message = body.message || message;
      return {
        isSuccess: false,
        error: {
          message,
          status: res.status,
        },
      };
    }

    return {
      isSuccess: true,
      data: (await res.json()) as T,
    };
  } catch (err) {
    console.error(err);
    return {
      isSuccess: false,
      error: {
        message: "Something went wrong!",
        status: 500,
      },
    };
  }
}

async function uploadImageToImgBB(file: File) {
  const body = new FormData();
  body.append("image", file);

  const res = await sendRequest<TImgbbResponse>(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
    { method: "POST", body },
  );
  return res;
}

async function deleteFromImgBB(url: string) {
  const res = await sendRequest(
    `${url}?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
  );
  return res;
}

function delay(ms: number) {
  const dummyPromise = new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
  return dummyPromise;
}

function formatPrice(value: number) {
  return `$${value.toLocaleString("en-US")}`;
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function isValidStr(
  str: string,
  minLength?: number,
  maxLength?: number,
): boolean {
  if (typeof str !== "string") {
    return false;
  }
  const data = str.trim();
  if (str.length === 0) {
    return false;
  }
  if (minLength !== undefined && data.length < minLength) {
    return false;
  }
  if (maxLength !== undefined && data.length > maxLength) {
    return false;
  }
  return true;
}

function isValidNum(num: number, min?: number, max?: number): boolean {
  if (typeof num !== "number" || isNaN(num)) {
    return false;
  }
  if (min !== undefined && num < min) {
    return false;
  }
  if (max !== undefined && num > max) {
    return false;
  }
  return true;
}

function isValidEmail(str: string): boolean {
  if (typeof str !== "string") {
    return false;
  }
  const data = str.trim();
  return data.length > 0 && data.includes("@");
}

function isValidPassword(password: string): boolean {
  const minLength = 6;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);

  return password.length >= minLength && hasUppercase && hasLowercase;
}

function isValidHttpsUrl(value: string) {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

function toBanglaNum(num: number | string) {
  const toNum = Number(num);
  const bnNumber = new Intl.NumberFormat("bn-BD");
  return bnNumber.format(toNum);
}

function getCategoryFromSlug(slug: string) {
  return categories.filter((item) => item.slug === slug)[0];
}

function getServiceModeFromSlug(slug: string) {
  return serviceModes.filter((item) => item.slug === slug)[0];
}

export {
  sendRequest,
  uploadImageToImgBB,
  deleteFromImgBB,
  delay,
  isValidStr,
  isValidNum,
  isValidEmail,
  isValidPassword,
  formatPrice,
  formatDate,
  isValidHttpsUrl,
  toBanglaNum,
  getCategoryFromSlug,
  getServiceModeFromSlug,
};
