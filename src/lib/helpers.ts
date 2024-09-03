import { clamp } from "lodash";

export const toValidYear = (year: number): string =>
    String(clamp(Math.round(year), 1901, new Date().getFullYear()));

export const printFile = (fileName: string) => {
    const pdfWindow = window.open(fileName, "_blank");

    if (pdfWindow) {
      pdfWindow.addEventListener("load", () => {
        pdfWindow.print();
      });
    }
  }

export const pdfUrl = new URL("/cv.pdf?url", import.meta.url).href;