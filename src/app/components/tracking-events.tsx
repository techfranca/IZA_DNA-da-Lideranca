'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/track';

const BUTTON_MAP: Record<string, string> = {
  'QUERO SER UM LÍDER DE VERDADE →': 'Botao1',
  'QUERO MUDAR ISSO AGORA →': 'Botao2',
  'VER TODO O CONTEÚDO': 'Botao3',
  'QUERO TER ACESSO AO CONTEÚDO →': 'Botao4',
  'QUERO O MESMO RESULTADO →': 'Botao5',
  'QUERO APRENDER COM ELA →': 'Botao6',
  'GARANTIR OFERTA': 'Botao7',
  'QUERO COMEÇAR AGORA →': 'Botao8',
};

export function TrackingEvents() {
  useEffect(() => {
    const fired = new Set<string>();

    function handleScroll() {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = (scrolled / total) * 100;

      if (pct >= 25 && !fired.has('Scroll25')) { fired.add('Scroll25'); trackEvent('Scroll25'); }
      if (pct >= 50 && !fired.has('Scroll50')) { fired.add('Scroll50'); trackEvent('Scroll50'); }
      if (pct >= 75 && !fired.has('Scroll75')) { fired.add('Scroll75'); trackEvent('Scroll75'); }
      if (pct >= 100 && !fired.has('Scroll100')) { fired.add('Scroll100'); trackEvent('Scroll100'); }
    }

    function handleClick(e: MouseEvent) {
      const el = (e.target as Element).closest('a, button');
      if (!el) return;
      const text = el.textContent?.trim().toUpperCase() || '';
      const eventName = BUTTON_MAP[text];
      if (eventName) trackEvent(eventName);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
