"use client";

import { ThemeProvider } from "next-themes";
import { ChildrenType } from "@/types/global";

export const ProviderTheme = ({ children }: ChildrenType) => {
  return (
    <ThemeProvider enableSystem disableTransitionOnChange attribute="class">
      {children}
    </ThemeProvider>
  );
};
