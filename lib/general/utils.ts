import { type ClassValue,clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

/** Two-digit frame number for lists and cards: 1 -> "01". */
export const frameNumber = (value: number) => String(value).padStart(2, "0")
