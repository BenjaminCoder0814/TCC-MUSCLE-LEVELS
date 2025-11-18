export function createI18nProviderClient() {
  return function I18nProviderClient({ 
    children, 
    locale 
  }: { 
    children: React.ReactNode;
    locale: string;
  }) {
    return <>{children}</>;
  };
}

export const I18nProviderClient = createI18nProviderClient();