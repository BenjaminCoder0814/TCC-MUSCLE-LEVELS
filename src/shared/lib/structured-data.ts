interface StructuredDataProps {
  name: string;
  url: string;
  description: string;
  logo?: string;
}

export function generateStructuredData(type: 'website' | 'organization' | 'webapp', data: StructuredDataProps) {
  const baseSchema = {
    '@context': 'https://schema.org',
    name: data.name,
    url: data.url,
    description: data.description,
  };

  switch (type) {
    case 'website':
      return {
        ...baseSchema,
        '@type': 'WebSite',
      };
    case 'organization':
      return {
        ...baseSchema,
        '@type': 'Organization',
        logo: data.logo,
      };
    case 'webapp':
      return {
        ...baseSchema,
        '@type': 'WebApplication',
        applicationCategory: 'HealthApplication',
      };
    default:
      return baseSchema;
  }
}

export function StructuredDataScript({ data }: { data: any }) {
  return null; // Simplified for build
}