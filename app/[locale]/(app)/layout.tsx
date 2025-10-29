import { ReactElement } from "react";

import Header from "@/components/Header";
import { SiteFooter } from "@/components/layout/SiteFooter";

interface RootLayoutProps {
  params: Promise<{ locale: string }>;
  children: ReactElement;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
