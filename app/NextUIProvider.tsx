'use client'
import * as React from "react";

import {NextUIProvider} from "@nextui-org/react";

export default function NextUILayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <NextUIProvider>
     {children}
    </NextUIProvider>
  );
}
