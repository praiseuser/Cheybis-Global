import { Box, Container, Typography, Stack } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StarIcon from '@mui/icons-material/Star';
import { colors, typography } from '../../../theme';
import { CTAButton, OutlineButton } from '../../../components/common';
import {
    heroKeyframes, wrapSx, gridDotsSx, orbSx, blobSx,
    ringWrapSx, ring1Sx, ring2Sx, ring3Sx, ringDotSx,
    badgeSx, badgeDotSx, h1Sx, h2Sx, subSx, ctaShineWrapSx,
    cardASx, cardBSx, pillSx,
} from './styles';

const TRUST_ITEMS = ['Internationally Certified', '100% Online', 'Lifetime Access', 'Career Support'];

const HeroBadge = () => (
    <Box sx={{ mb: 3.5, animation: 'hero_rise 0.6s cubic-bezier(.34,1.2,.64,1) both' }}>
        <Box sx={badgeSx}>
            <Box sx={badgeDotSx} />
            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: 600, color: colors.secondary.main }}>
                Nigeria&apos;s #1 Professional Certification Platform
            </Typography>
        </Box>
    </Box>
);

const HeroRings = () => (
    <Box sx={ringWrapSx}>
        <Box sx={ring1Sx}><Box sx={ringDotSx('-5px', '46%', colors.secondary.main)} /></Box>
        <Box sx={ring2Sx}><Box sx={ringDotSx('46%', '-5px', colors.accent.teal)} /></Box>
        <Box sx={ring3Sx} />
    </Box>
);

const TrustRow = () => (
    <Stack direction="row" justifyContent="center" gap={{ xs: 2, sm: 4 }} flexWrap="wrap"
        sx={{ animation: 'hero_rise 0.7s cubic-bezier(.34,1.2,.64,1) 0.55s both' }}>
        {TRUST_ITEMS.map(t => (
            <Stack key={t} direction="row" alignItems="center" gap={0.8}>
                <CheckCircleIcon sx={{ fontSize: 14, color: colors.accent.green }} />
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
                    {t}
                </Typography>
            </Stack>
        ))}
    </Stack>
);

const FloatingCardA = () => (
    <Box sx={cardASx}>
        <Stack direction="row" alignItems="center" gap={1.2} sx={{ mb: 1.5 }}>
            <Box sx={{ width: 38, height: 38, borderRadius: '10px', background: `linear-gradient(135deg,${colors.secondary.main},${colors.secondary.dark})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <WorkspacePremiumIcon sx={{ fontSize: 20, color: 'white' }} />
            </Box>
            <Box>
                <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.sm, fontWeight: 800, color: colors.text.primary }}>PMP Certified</Typography>
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.68rem', color: colors.text.secondary }}>8-week programme</Typography>
            </Box>
        </Stack>
        <Box sx={{ height: 5, bgcolor: '#F1F5F9', borderRadius: 3, mb: 1 }}>
            <Box sx={{ height: 5, width: '72%', background: `linear-gradient(90deg,${colors.secondary.main},${colors.secondary.light})`, borderRadius: 3 }} />
        </Box>
        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.65rem', color: colors.text.secondary }}>72% complete — keep going!</Typography>
    </Box>
);

const FloatingCardB = () => (
    <Box sx={cardBSx}>
        <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 1.5 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: colors.accent.green, boxShadow: `0 0 8px ${colors.accent.green}`, animation: 'hero_pulseDot 2s ease infinite' }} />
            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.68rem', color: 'rgba(255,255,255,0.55)' }}>New enrolment</Typography>
        </Stack>
        <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.sm, fontWeight: 700, color: 'white', mb: 0.5 }}>HSE Level 3</Typography>
        <Stack direction="row" gap={0.3} alignItems="center">
            {[...Array(5)].map((_, i) => <StarIcon key={i} sx={{ fontSize: 11, color: colors.accent.yellow }} />)}
            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.62rem', color: 'rgba(255,255,255,0.45)', ml: 0.5 }}>4.9 (980)</Typography>
        </Stack>
    </Box>
);

const HeroWave = () => (
    <Box sx={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 2 }}>
        <svg viewBox="0 0 1440 110" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <path d="M0,60 C240,110 480,0 720,55 C960,110 1200,10 1440,60 L1440,110 L0,110 Z" fill={colors.background.default} opacity="0.15" />
            <path d="M0,80 C300,20 600,100 900,50 C1100,20 1300,80 1440,70 L1440,110 L0,110 Z" fill={colors.background.default} opacity="0.25" />
            <path d="M0,95 C360,50 720,110 1080,65 C1260,45 1380,90 1440,95 L1440,110 L0,110 Z" fill={colors.background.default} />
        </svg>
    </Box>
);

const HeroSection = () => (
    <>
        <GlobalStyles styles={heroKeyframes} />
        <Box sx={wrapSx}>
            <Box sx={gridDotsSx} />

            <Box sx={orbSx('-10%', undefined, '-4%', undefined, { xs: 280, md: 500 }, `${colors.secondary.main}20`, '0s')} />
            <Box sx={orbSx(undefined, '-6%', undefined, '-12%', { xs: 220, md: 380 }, `${colors.accent.teal}18`, '1.5s')} />
            <Box sx={orbSx('30%', '40%', undefined, undefined, { xs: 0, md: 200 }, `${colors.accent.purple}12`, '3s')} />
            <Box sx={blobSx} />
            <HeroRings />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <HeroBadge />

                <Typography sx={h1Sx}>Unlock Your Full</Typography>
                <Typography sx={h2Sx}>Professional Potential</Typography>
                <Typography sx={subSx}>
                    Industry-recognised certifications in HRM, PMP, HSE, CRM and more — built for ambitious professionals ready to level up.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="center" gap={2}
                    sx={{ mb: 4, animation: 'hero_rise 0.7s cubic-bezier(.34,1.2,.64,1) 0.45s both' }}>
                    <Box sx={ctaShineWrapSx}>
                        <CTAButton href="/courses" size="lg" sx={{ fontWeight: 800, px: 5 }}>Explore All Courses</CTAButton>
                    </Box>
                    <OutlineButton href="/about" light sx={{ py: 1.8, px: 4 }}>How It Works</OutlineButton>
                </Stack>

                <TrustRow />

                <Box sx={{ position: 'relative', height: { xs: 0, lg: 120 } }}>
                    <FloatingCardA />
                    <FloatingCardB />
                    <Box sx={pillSx}>
                        <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.sm, fontWeight: 800, color: 'white' }}>
                            12,000+ Graduates 🎓
                        </Typography>
                    </Box>
                </Box>
            </Container>

            <HeroWave />
        </Box>
    </>
);

export default HeroSection;