import { Metadata } from "next";

import { PremiumUpgradeCard } from "@/features/premium/ui/premium-upgrade-card";

export const metadata: Metadata = {
  title: "Planos Premium - Muscle Levels",
  description:
    "Desbloqueie recursos exclusivos e alcance seus objetivos fitness mais rapidamente com nossos planos premium.",
  keywords: ["premium", "fitness", "musculação", "treino", "assinatura", "muscle levels"],
  openGraph: {
    title: "Planos Premium - Muscle Levels 💪",
    description: "Recursos exclusivos para entusiastas do fitness que querem acelerar seus resultados!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planos Premium - Muscle Levels",
    description: "Acelere seus resultados com recursos premium exclusivos!",
  },
};

export default function PremiumPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Main Content */}
      <div className="relative" data-section="pricing">
        <PremiumUpgradeCard />
      </div>

      {/* Mobile Sticky CTA */}
      {/* <MobileStickyCard /> */}
    </div>
  );
}
