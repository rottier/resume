import { clamp } from "lodash";

export const toValidYear = (year: number): string =>
    String(clamp(Math.round(year), 1901, new Date().getFullYear()));