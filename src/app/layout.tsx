import type { Metadata } from "next";
import "@/styles/globals.css";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "Maral Shop",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
