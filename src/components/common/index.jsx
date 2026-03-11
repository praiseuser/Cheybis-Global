import { Box, Typography, Button, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors, typography } from '../../theme';



export const SectionLabel = ({ children }) => (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <Box sx={{ width: 28, height: 2, bgcolor: colors.secondary.main, borderRadius: 1 }} />
        <Typography sx={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize.xs,
            fontWeight: typography.fontWeight.bold,
            color: colors.secondary.main,
            letterSpacing: 3,
            textTransform: 'uppercase',
        }}>
            {children}
        </Typography>
    </Box>
);



export const SectionHeading = ({ children, light = false, sx = {} }) => (
    <Typography sx={{
        fontFamily: typography.fontFamily.mono,
        fontSize: { xs: typography.fontSize['2xl'], md: typography.fontSize['3xl'] },
        fontWeight: typography.fontWeight.extraBold,
        color: light ? colors.text.light : colors.text.primary,
        lineHeight: 1.2,
        ...sx,
    }}>
        {children}
    </Typography>
);



export const CTAButton = ({ children, onClick, href, size = 'md', icon = true, sx = {} }) => (
    <Button
        variant="contained"
        color="secondary"
        href={href}
        onClick={onClick}
        endIcon={icon ? <ArrowForwardIcon sx={{ fontSize: 16 }} /> : null}
        sx={{
            px: size === 'lg' ? 4 : 3,
            py: size === 'lg' ? 1.8 : 1.3,
            fontSize: size === 'lg' ? typography.fontSize.base : typography.fontSize.sm,
            fontWeight: typography.fontWeight.bold,
            fontFamily: typography.fontFamily.accent,
            borderRadius: '10px',
            background: `linear-gradient(135deg, ${colors.secondary.light}, ${colors.secondary.main})`,
            boxShadow: `0 8px 24px ${colors.secondary.main}44`,
            transition: 'all 0.25s ease',
            '&:hover': {
                background: `linear-gradient(135deg, ${colors.secondary.main}, ${colors.secondary.dark})`,
                transform: 'translateY(-2px)',
                boxShadow: `0 12px 32px ${colors.secondary.main}55`,
            },
            ...sx,
        }}
    >
        {children}
    </Button>
);



export const OutlineButton = ({ children, onClick, href, light = false, sx = {} }) => (
    <Button
        variant="outlined"
        href={href}
        onClick={onClick}
        sx={{
            px: 3, py: 1.3,
            fontSize: typography.fontSize.sm,
            fontWeight: typography.fontWeight.semiBold,
            fontFamily: typography.fontFamily.accent,
            borderRadius: '10px',
            borderColor: light ? 'rgba(255,255,255,0.3)' : colors.primary.main,
            color: light ? colors.text.light : colors.primary.main,
            transition: 'all 0.25s ease',
            '&:hover': {
                borderColor: light ? 'white' : colors.secondary.main,
                color: light ? 'white' : colors.secondary.main,
                bgcolor: light ? 'rgba(255,255,255,0.08)' : `${colors.secondary.main}0D`,
                transform: 'translateY(-2px)',
            },
            ...sx,
        }}
    >
        {children}
    </Button>
);


export const TagChip = ({ label, color = 'primary' }) => {
    const colorMap = {
        primary: { bg: `${colors.primary.main}15`, text: colors.primary.main },
        orange: { bg: `${colors.secondary.main}15`, text: colors.secondary.main },
        teal: { bg: `${colors.accent.teal}15`, text: colors.accent.teal },
        green: { bg: `${colors.accent.green}15`, text: colors.accent.green },
        purple: { bg: `${colors.accent.purple}15`, text: colors.accent.purple },
    };
    const c = colorMap[color] || colorMap.primary;
    return (
        <Chip
            label={label}
            size="small"
            sx={{
                bgcolor: c.bg,
                color: c.text,
                fontWeight: 700,
                fontFamily: typography.fontFamily.mono,
                fontSize: '0.65rem',
                letterSpacing: 0.5,
                border: `1px solid ${c.text}22`,
                height: 22,
            }}
        />
    );
};


export const StatCard = ({ value, label, icon: Icon, color }) => (
    <Box sx={{ textAlign: 'center' }}>
        {Icon && (
            <Box sx={{ width: 48, height: 48, borderRadius: '12px', bgcolor: `${color || colors.secondary.main}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 1.5 }}>
                <Icon sx={{ fontSize: 24, color: color || colors.secondary.main }} />
            </Box>
        )}
        <Typography sx={{ fontFamily: typography.fontFamily.mono, fontSize: { xs: '1.8rem', md: '2.4rem' }, fontWeight: typography.fontWeight.black, color: color || colors.secondary.main, lineHeight: 1 }}>
            {value}
        </Typography>
        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, mt: 0.5 }}>
            {label}
        </Typography>
    </Box>
);