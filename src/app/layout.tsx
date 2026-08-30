import type { Metadata } from "next";
import "@/styles/globals.css";
import { rayFont as ray } from "@/lib/font";

export const metadata: Metadata = {
  title: "مارال شاپ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={`h-full antialiased ${ray.variable}`}
      lang="fa-IR"
      dir="rtl"
      suppressHydrationWarning
    >
      <body className="max-w-sm min-h-svh max-h-svh mx-auto bg-background">
        {children}
      </body>
    </html>
  );
}
