import { Anton, Teko } from 'next/font/google';

export const teko_init = Teko({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-teko',
  display: 'swap',
});
export const anton_init = Anton({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

export const teko = teko_init.variable;
export const anton = anton_init.variable;

// Method
// 1. Create font utils in src/utils/fonts.js (this file)
// 2. Create font config in tailwind.config.js
// 3. Import font utils in src/app/layout.js
// 4. Use wherever you want 🎉
