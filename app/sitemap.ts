import { MetadataRoute } from "next/types";



export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://muscle-levels.vercel.app";
  const currentDate = new Date().toISOString();

  // Static routes with locale support
  const locales = ["fr", "en", "es", "pt", "ru", "zh-CN"];

  const staticRoutes = [
    // Home page (root)
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    // Home pages for all locales
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    })),
    // Tools pages for all locales
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/tools`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    // Calorie calculator hub pages for all locales
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/tools/calorie-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    // Calorie calculator formula pages for all locales
    ...locales.flatMap((locale) =>
      [
        `${baseUrl}/${locale}/tools/calorie-calculator`,
        `${baseUrl}/${locale}/tools/calorie-calculator/mifflin-st-jeor-calculator`,
        `${baseUrl}/${locale}/tools/calorie-calculator/harris-benedict-calculator`,
        `${baseUrl}/${locale}/tools/calorie-calculator/katch-mcardle-calculator`,
        `${baseUrl}/${locale}/tools/calorie-calculator/cunningham-calculator`,
        `${baseUrl}/${locale}/tools/calorie-calculator/oxford-calculator`,
        `${baseUrl}/${locale}/tools/calorie-calculator/calorie-calculator-comparison`,
      ].map((url) => ({
        url,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.85,
      })),
    ),

    // Heart rate calculator pages for all locales
    ...locales.flatMap((locale) =>
      [`${baseUrl}/${locale}/tools/heart-rate-zones`].map((url) => ({
        url,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.85,
      })),
    ),

    // BMI calculator
    ...locales.flatMap((locale) =>
      [`${baseUrl}/${locale}/tools/bmi-calculator`].map((url) => ({
        url,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.85,
      })),
    ),
    // Auth pages (lower priority as they're functional pages)
    {
      url: `${baseUrl}/auth/signin`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/auth/signup`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    // About pages for all locales
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Tools pages for all locales
    {
      url: `${baseUrl}/tools`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },

    // Legal pages
    {
      url: `${baseUrl}/legal/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
    {
      url: `${baseUrl}/legal/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
    {
      url: `${baseUrl}/legal/sales-terms`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
    // Legal pages for all locales
    ...locales.flatMap((locale) => [
      {
        url: `${baseUrl}/${locale}/legal/privacy`,
        lastModified: currentDate,
        changeFrequency: "yearly" as const,
        priority: 0.2,
      },
      {
        url: `${baseUrl}/${locale}/legal/terms`,
        lastModified: currentDate,
        changeFrequency: "yearly" as const,
        priority: 0.2,
      },
      {
        url: `${baseUrl}/${locale}/legal/sales-terms`,
        lastModified: currentDate,
        changeFrequency: "yearly" as const,
        priority: 0.2,
      },
    ]),
  ];

  // Simplified sitemap without dynamic data
  return staticRoutes;
}

