import localFont from "next/font/local";

export const rayFont = localFont({
  src: [
    {
      path: "../../public/fonts/ray.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ray-light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/yay-bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--ray-font",
  display: "swap",
});


