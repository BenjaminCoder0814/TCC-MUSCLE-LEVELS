'use client';

import React from 'react';
import { VerticalLeftBanner, VerticalRightBanner } from '@/components/ads';
import { useUserSubscription } from '@/features/ads/hooks/useUserSubscription';
import { env } from '@/env';

interface PageWithAdsLayoutProps {
  children: React.ReactNode;
  showLeftAd?: boolean;
  showRightAd?: boolean;
}

export const PageWithAdsLayout: React.FC<PageWithAdsLayoutProps> = ({ 
  children, 
  showLeftAd = true, 
  showRightAd = true 
}) => {
  const { isPremium } = useUserSubscription();
  
  // Usuários premium não veem propagandas
  const hasLeftAd = !isPremium && showLeftAd && env.NEXT_PUBLIC_VERTICAL_LEFT_BANNER_AD_SLOT;
  const hasRightAd = !isPremium && showRightAd && env.NEXT_PUBLIC_VERTICAL_RIGHT_BANNER_AD_SLOT;

  return (
    <div className="flex w-full max-w-7xl mx-auto">
      {/* Propaganda Lateral Esquerda */}
      {hasLeftAd && (
        <div className="hidden xl:block w-40 flex-shrink-0">
          <div className="sticky top-24 pt-4">
            <VerticalLeftBanner />
          </div>
        </div>
      )}

      {/* Conteúdo Principal */}
      <div className="flex-1 min-w-0">
        {children}
      </div>

      {/* Propaganda Lateral Direita */}
      {hasRightAd && (
        <div className="hidden xl:block w-40 flex-shrink-0">
          <div className="sticky top-24 pt-4">
            <VerticalRightBanner />
          </div>
        </div>
      )}
    </div>
  );
};