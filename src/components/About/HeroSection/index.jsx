import { Box, Container, Typography } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import { colors, typography } from '../../../theme';
import { keyframes, gridBgSx, orbSx } from '../shared';
import { heroSx, badgeSx, badgeDotSx, heroHeadSx, heroGradSx, subtitleSx, decoRingWrapSx, ring1Sx, ring2Sx, ringDotSx, imgWrapSx, imgRing1Sx, imgRing2Sx, imgGlowSx, imgSx, imgShadowSx } from './styles';

const HeroWave = () => (
    <Box sx={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 2 }}>
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', display: 'block' }}>
            <path d="M0,36 C360,72 720,0 1080,44 C1260,64 1380,24 1440,36 L1440,72 L0,72 Z" fill="rgba(255,255,255,.07)" />
            <path d="M0,52 C300,16 700,72 1000,40 C1200,20 1360,58 1440,52 L1440,72 L0,72 Z" fill="white" />
        </svg>
    </Box>
);

export default function AboutHero() {
    return (
        <>
            <GlobalStyles styles={keyframes} />
            <Box sx={heroSx}>
                <Box sx={gridBgSx} />
                <Box sx={orbSx('-10%', '-5%', undefined, undefined, { xs: 260, md: 500 }, `${colors.secondary.main}20`, '0s')} />
                <Box sx={orbSx(undefined, undefined, '-12%', '-4%', { xs: 180, md: 380 }, `${colors.accent.teal}15`, '2s')} />
                <Box sx={orbSx('30%', undefined, undefined, '40%', { xs: 0, md: 240 }, `${colors.accent.purple}10`, '4s')} />

                <Box sx={decoRingWrapSx}>
                    <Box sx={ring1Sx}><Box sx={ringDotSx(colors.secondary.main, '-5px', undefined)} /></Box>
                    <Box sx={ring2Sx}><Box sx={ringDotSx(colors.accent.teal, undefined, '-4px')} /></Box>
                </Box>

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 4 }, alignItems: 'center' }}>

                        <Box>
                            <Box sx={{ mb: 3, animation: 'ab_rise .6s cubic-bezier(.34,1.2,.64,1) both' }}>
                                <Box sx={badgeSx}>
                                    <Box sx={badgeDotSx} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: 600, color: colors.secondary.main }}>
                                        Our Story
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography sx={heroHeadSx}>We Exist to</Typography>
                            <Typography sx={{ ...heroHeadSx, animationDelay: '.15s', mb: 2 }}>
                                <Box component="span" sx={heroGradSx}>Transform Careers.</Box>
                            </Typography>
                            <Typography sx={subtitleSx}>
                                Cheybis Global Resources Nig. Ltd was built on one belief — that professional growth shouldn't be a privilege. Since 2018 we've been delivering world-class certifications that are accessible, practical, and career-defining.
                            </Typography>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', py: 2 }}>
                            <Box sx={imgWrapSx}>
                                <Box sx={imgRing1Sx} /><Box sx={imgRing2Sx} /><Box sx={imgGlowSx} />
                                <Box component="img" src="/about.png" alt="About Cheybis Global Resources" sx={imgSx} />
                                <Box sx={imgShadowSx} />
                            </Box>
                        </Box>

                    </Box>
                </Container>
                <HeroWave />
            </Box>
        </>
    );
}