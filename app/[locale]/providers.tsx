"use client";

import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
  locale: string;
}

export function Providers({ children }: ProvidersProps) {
  return <>{children}</>;
}
