import Link from 'next/link';

interface PromoBannerProps {
  title: string;
  description: string;
  href: string;
  ctaText: string;
  iconName: string;
  gradient: string;
}

export function PromoBanner({ 
  title, 
  description, 
  href, 
  ctaText, 
  iconName, 
  gradient 
}: PromoBannerProps) {
  // Ícones simples usando emojis
  const getIcon = (name: string) => {
    switch(name) {
      case 'Dumbbell': return '💪';
      case 'BarChart': return '📊';
      case 'Users': return '👥';
      case 'Zap': return '⚡';
      default: return '💪';
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-8 text-white shadow-xl`}>
      <div className="relative z-10">
        <div className="mb-4">
          <div className="text-4xl">{getIcon(iconName)}</div>
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-white/90 mb-6 leading-relaxed">{description}</p>
        <Link 
          href={href}
          className="inline-block bg-white text-slate-900 hover:bg-white/90 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
        >
          {ctaText}
        </Link>
      </div>
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}
