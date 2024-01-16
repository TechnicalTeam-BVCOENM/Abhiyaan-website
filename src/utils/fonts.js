import { Oswald, Quattrocento } from 'next/font/google';

export const oswald_init = Oswald({
  weight: ['400', '300', '700', '600'],
  variable: '--font-oswald',
  display: 'swap',
  subsets: ['latin-ext'],
});
export const quattrocento_init = Quattrocento({
  weight: ['400', '700'],
  variable: '--font-quattrocento',
  display: 'swap',
  subsets: ['latin-ext'],
});

export const oswald = 'var(--font-oswald)';
export const quattrocento = 'var(--font-quattrocento)';

// Method
// 1. Create font utils in src/utils/fonts.js (this file)
// 2. Create font config in tailwind.config.js
// 3. Import font utils in src/app/layout.js
// 4. Use wherever you want 🎉
