import { createTheme } from '@mui/material/styles';

export const colors = {
    primary: {
        main: '#0A2540',
        light: '#1A3A5C',
        dark: '#061828',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#F97316',
        light: '#FB923C',
        dark: '#EA6C0A',
        contrastText: '#FFFFFF',
    },
    accent: {
        teal: '#0EA5E9',
        green: '#22C55E',
        purple: '#8B5CF6',
        yellow: '#EAB308',
    },
    background: {
        default: '#F8FAFC',
        paper: '#FFFFFF',
        dark: '#061828',
        subtle: '#EFF6FF',
    },
    text: {
        primary: '#0F172A',
        secondary: '#475569',
        disabled: '#94A3B8',
        light: '#FFFFFF',
    },
    divider: '#E2E8F0',
};

export const typography = {
    fontFamily: {
        heading: '"Plus Jakarta Sans", "Inter", sans-serif',
        body: '"Inter", "Helvetica Neue", sans-serif',
        accent: '"Sora", "Inter", sans-serif',
        mono: '"JetBrains Mono", monospace',
    },
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
        '4xl': '3rem',
        '5xl': '3.75rem',
    },
    fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
    },
};

const theme = createTheme({
    palette: {
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.background,
        text: colors.text,
        divider: colors.divider,
    },
    typography: {
        fontFamily: typography.fontFamily.body,
        h1: { fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize['5xl'], fontWeight: typography.fontWeight.black, lineHeight: 1.1 },
        h2: { fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize['4xl'], fontWeight: typography.fontWeight.extraBold, lineHeight: 1.15 },
        h3: { fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize['3xl'], fontWeight: typography.fontWeight.bold, lineHeight: 1.2 },
        h4: { fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, lineHeight: 1.25 },
        h5: { fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.semiBold, lineHeight: 1.3 },
        h6: { fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.semiBold, lineHeight: 1.4 },
        body1: { fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, lineHeight: 1.7 },
        body2: { fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, lineHeight: 1.65 },
        button: { fontFamily: typography.fontFamily.body, fontWeight: typography.fontWeight.semiBold, textTransform: 'none', letterSpacing: 0.3 },
    },
    shape: { borderRadius: 12 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: { borderRadius: '10px', padding: '10px 24px', fontWeight: 600, boxShadow: 'none', '&:hover': { boxShadow: 'none' } },
                containedSecondary: {
                    background: `linear-gradient(135deg, #FB923C, #F97316)`,
                    '&:hover': { background: `linear-gradient(135deg, #F97316, #EA6C0A)` },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: { borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: { borderRadius: '6px', fontWeight: 600, fontSize: '0.7rem' },
            },
        },
    },
});

export default theme;