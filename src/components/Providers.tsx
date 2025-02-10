"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export function Providers(props: PropsWithChildren) {
  const { children } = props;
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
