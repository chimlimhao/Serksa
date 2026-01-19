/**
 * Design Tokens for Serksa
 * Centralized design system values for consistent styling
 */

export const colors = {
  // Primary Brand Colors
  primary: {
    blue: '#001BB7',
    blueAccent: '#0046FF',
    orange: '#ff5941',
    cream: '#F5F1DC',
  },
  // Semantic Colors (using orange as primary accent)
  accent: {
    primary: '#ff5941', // Orange - main CTA, highlights
    primaryHover: '#FF6951', // Slightly lighter orange for hover
    secondary: '#001BB7', // Blue - secondary actions
    secondaryHover: '#0046FF', // Lighter blue for hover
  },
  // UI Colors
  ui: {
    background: '#FFFFFF',
    surface: '#F5F1DC', // Cream
    border: '#E5E7EB',
    text: {
      primary: '#111827', // Gray-900
      secondary: '#4B5563', // Gray-600
      muted: '#6B7280', // Gray-500
    },
  },
  // Status Colors
  status: {
    success: '#10B981', // Green
    warning: '#F59E0B', // Yellow
    error: '#EF4444', // Red
    info: '#3B82F6', // Blue
  },
  // Difficulty Colors
  difficulty: {
    beginner: {
      bg: '#D1FAE5', // Green-100
      text: '#065F46', // Green-700
    },
    intermediate: {
      bg: '#FEF3C7', // Yellow-100
      text: '#92400E', // Yellow-700
    },
    advanced: {
      bg: '#FEE2E2', // Red-100
      text: '#991B1B', // Red-700
    },
  },
} as const;

export const spacing = {
  xs: '0.5rem', // 8px
  sm: '0.75rem', // 12px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
  '4xl': '6rem', // 96px
} as const;

export const typography = {
  fontFamily: {
    sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'].join(', '),
    mono: ['ui-monospace', 'SFMono-Regular', 'monospace'].join(', '),
  },
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem', // 72px
    '8xl': '6rem', // 96px
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeight: {
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.25rem', // 4px
  md: '0.5rem', // 8px
  lg: '0.75rem', // 12px
  xl: '1rem', // 16px
  '2xl': '1.5rem', // 24px
  '3xl': '2rem', // 32px
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const;

// Tailwind class helpers
export const tw = {
  accent: {
    primary: 'text-[#ff5941]',
    primaryBg: 'bg-[#ff5941]',
    primaryHover: 'hover:bg-[#FF6951]',
    primaryBorder: 'border-[#ff5941]',
    secondary: 'text-[#001BB7]',
    secondaryBg: 'bg-[#001BB7]',
    secondaryHover: 'hover:bg-[#0046FF]',
    secondaryBorder: 'border-[#001BB7]',
  },
} as const;

