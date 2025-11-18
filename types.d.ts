// Global type declarations for better module resolution
declare module '@/components/ui/button' {
  export const Button: any;
  export const buttonVariants: any;
}

declare module '@/components/ui/badge' {
  export const Badge: any;
  export const badgeVariants: any;
}

declare module '@/shared/lib/server-url' {
  export function getServerUrl(): string;
}

declare module '@/shared/config/site-config' {
  export const SiteConfig: any;
}

declare module '@/components/PromoBanner' {
  const PromoBanner: any;
  export default PromoBanner;
}

declare module '@/shared/lib/utils' {
  export function cn(...args: any[]): string;
}

declare module '@/shared/lib/structured-data' {
  export function generateStructuredData(options: any): any;
  export const StructuredDataScript: any;
}

declare module '@/shared/config/localized-metadata' {
  export function getLocalizedMetadata(locale: string): any;
}

declare module '@/features/workout-session/ui/workout-sessions-synchronizer' {
  export const WorkoutSessionsSynchronizer: any;
}

declare module '@/features/workout-builder/model/favorite-exercises-synchronizer' {
  export const FavoriteExercisesSynchronizer: any;
}

declare module '@/features/theme/ui/ThemeSynchronizer' {
  export const ThemeSynchronizer: any;
}

declare module '@/env' {
  export const env: any;
}

declare module '@/components/version' {
  export const Version: any;
}

declare module '@/components/utils/TailwindIndicator' {
  export const TailwindIndicator: any;
}

declare module '@/components/ui/next-top-loader' {
  export const NextTopLoader: any;
}

declare module '@/components/pwa/ServiceWorkerRegistration' {
  export const ServiceWorkerRegistration: any;
}

declare module '@/components/ads' {
  export const AdBlockerForPremium: any;
  export const HorizontalBottomBanner: any;
  export const HorizontalTopBanner: any;
}

declare module '@/shared/lib/prisma' {
  export const prisma: any;
}

declare module '@/shared/lib/gamification' {
  export const GamificationService: any;
}

declare module 'locales/server' {
  export function getI18n(): any;
  export function getScopedI18n(): any;
  export function getStaticParams(): any;
}

declare module 'geist/font/sans' {
  export const GeistSans: any;
}

declare module 'geist/font/mono' {
  export const GeistMono: any;
}

declare module 'better-auth/cookies' {
  export function getSessionCookie(request: any): any;
}

// Suppress D3 and other library type definition errors
declare module 'd3-array';
declare module 'd3-color';
declare module 'd3-ease';
declare module 'd3-interpolate';
declare module 'd3-path';
declare module 'd3-scale';
declare module 'd3-shape';
declare module 'd3-time';
declare module 'd3-timer';
declare module 'debug';
declare module 'estree-jsx';
declare module 'hast';
declare module 'mdast';
declare module 'mdx';
declare module 'ms';
declare module 'unist';
declare module 'use-sync-external-store';

// Global variables
declare global {
  var process: {
    env: Record<string, string>;
    NODE_ENV: string;
  };
  
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}