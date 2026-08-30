import localFont from "next/font/local";

export const yekanFont = localFont({
  src: [
    {
      path: "../../public/fonts/yekan-bakh.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--yekan-font",
  display: "swap",
});
