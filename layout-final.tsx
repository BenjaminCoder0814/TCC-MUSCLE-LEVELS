import type { ReactElement } from "react";
import type { Metadata } from "next";
import { Providers } from "./providers";
import "../../src/shared/styles/globals-clean.css";
import { cn } from "../../src/shared/lib/utils";
import { generateStructuredData, StructuredDataScript } from "../../src/shared/lib/structured-data";
import { getServerUrl } from "../../src/shared/lib/server-url";
import { SiteConfig } from "../../src/shared/config/site-config";
import { getLocalizedMetadata } from "../../src/shared/config/localized-metadata";
import { WorkoutSessionsSynchronizer } from "../../src/features/workout-session/ui/workout-sessions-synchronizer";
import { FavoriteExercisesSynchronizer } from "../../src/features/workout-builder/model/favorite-exercises-synchronizer";
import { ThemeSynchronizer } from "../../src/features/theme/ui/ThemeSynchronizer";
import { env } from "../../src/env";
import { Version } from "../../src/components/version";
import { TailwindIndicator } from "../../src/components/utils/TailwindIndicator";
import { NextTopLoader } from "../../src/components/ui/next-top-loader";
import { ServiceWorkerRegistration } from "../../src/components/pwa/ServiceWorkerRegistration";
import { AdBlockerForPremium } from "../../src/components/ads";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const localizedData = getLocalizedMetadata(locale);

  return {
    title: {
      default: localizedData.title,
      template: `%s | ${localizedData.title}`,
    },
    description: localizedData.description,
    keywords: localizedData.keywords as unknown as string[],
    applicationName: localizedData.applicationName,
    category: localizedData.category,
    classification: localizedData.classification,
    metadataBase: new URL(getServerUrl()),
    manifest: "/manifest.json",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : locale === "es" ? "es_ES" : locale === "pt" ? "pt_PT" : "fr_FR",
      images: [
        {
          url: `${getServerUrl()}/images/default-og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${SiteConfig.title} - Modern fitness platform`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: localizedData.title,
      description: localizedData.description,
      images: [`${getServerUrl()}/images/default-og-image.jpg`],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}): Promise<ReactElement> {
  const { locale } = await params;

  const websiteStructuredData = generateStructuredData("website", {
    name: SiteConfig.title,
    url: getServerUrl(),
    description: SiteConfig.description,
  });

  const organizationStructuredData = generateStructuredData("organization", {
    name: SiteConfig.title,
    url: getServerUrl(),
    logo: `${getServerUrl()}/images/muscle-levels-logo.png`,
  });

  const webAppStructuredData = generateStructuredData("webapp", {
    name: SiteConfig.title,
    url: getServerUrl(),
    description: SiteConfig.description,
  });

  return (
    <>
      <html lang={locale} suppressHydrationWarning>
        <head>
          <StructuredDataScript data={websiteStructuredData} />
          <StructuredDataScript data={organizationStructuredData} />
          <StructuredDataScript data={webAppStructuredData} />
        </head>

        <body
          className={cn(
            "min-h-screen w-full bg-base-200 dark:bg-[#18181b] dark:text-gray-200 antialiased",
            "bg-hero-light dark:bg-hero-dark font-sans"
          )}
          suppressHydrationWarning
        >
          <Providers locale={locale}>
            <ServiceWorkerRegistration />
            <FavoriteExercisesSynchronizer />
            <WorkoutSessionsSynchronizer />
            <ThemeSynchronizer />
            {process.env.NODE_ENV === "production" && <AdBlockerForPremium />}
            <NextTopLoader color="#FF5722" delay={100} showSpinner={false} />

            <div className="flex flex-col w-full">
              <div className="flex justify-center items-start w-full">
                {children}
              </div>
            </div>
            <Version />

            <TailwindIndicator />
          </Providers>
        </body>
      </html>
    </>
  );
}
