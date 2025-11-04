import presetWebFonts from '@unocss/preset-web-fonts';
import presetWind4 from '@unocss/preset-wind4';
import { DEFAULT_LAYERS, defineConfig } from 'unocss';

export default defineConfig({
  presets: [
    presetWind4(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'MomoTrustSans',
        mono: 'JetBrains Mono',
      },
    }),
  ],
  theme: {
    colors: {
      peat: {
        50: '#fffdea',
        100: '#fff7c5',
        200: '#fff085',
        300: '#ffe246',
        DEFAULT: '#ffaf00',
        500: '#ffaf00',
        600: '#e28500',
        700: '#bb5d02',
        800: '#984708',
        900: '#7c3b0b',
        950: '#481d00',
      },
      accent: {
        50: '#f6f7f9',
        100: '#edeef1',
        200: '#d6dbe1',
        300: '#b3bcc6',
        400: '#8997a7',
        500: '#6b7b8c',
        600: '#566273',
        700: '#46505e',
        800: '#3c4550',
        900: '#363c44',
        DEFAULT: '#1d2025',
      },
    },
  },
  safelist: [
    // Prose classes
    'prose',
    'prose-lg',
    'prose-xl',
    'max-w-none',
    // Layout classes
    'max-w-4xl',
    'max-w-5xl',
    'max-w-7xl',
    'max-w-[65ch]',
  ],
});
