'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/track';

export function PixelInit() {
  useEffect(() => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('init', '1002543129235548');
      trackEvent('PageView');
    }
  }, []);

  return null;
}
