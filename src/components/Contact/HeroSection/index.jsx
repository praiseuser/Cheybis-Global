import { Box, Container, Typography } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import { colors, typography } from '../../../theme';
import { keyframes, gridBgSx, orbSx } from '../shared.jsx';
import {
    heroSx, badgeSx, badgeDotSx, heroHeadSx, heroGradSx, subtitleSx,
    decoRingWrapSx, ring1Sx, ring2Sx, ringDotSx, stepBoxSx,
    imgWrapSx, imgRing1Sx, imgRing2Sx, imgGlowSx, imgSx, imgShadowSx,
} from './styles';

const STEPS = [
    { num: '01', label: 'Fill the form', color: colors.secondary.main },
    { num: '02', label: 'We read it same day', color: colors.accent.teal },
    { num: '03', label: 'Reply in 2 hrs', color: colors.accent.purple },
];

const HeroWave = () => (
    <Box sx={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 2 }}>
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', display: 'block' }}>
            <path d="M0,36 C360,72 720,0 1080,44 C1260,64 1380,24 1440,36 L1440,72 L0,72 Z" fill="rgba(255,255,255,.07)" />
            <path d="M0,52 C300,16 700,72 1000,40 C1200,20 1360,58 1440,52 L1440,72 L0,72 Z" fill={colors.background.default} />
        </svg>
    </Box>
);

export default function ContactHero() {
    return (
        <>
            <GlobalStyles styles={keyframes} />
            <Box sx={heroSx}>
                <Box sx={gridBgSx} />
                <Box sx={orbSx('-10%', '-5%', undefined, undefined, { xs: 240, md: 480 }, `${colors.secondary.main}20`, '0s')} />
                <Box sx={orbSx(undefined, undefined, '-12%', '-4%', { xs: 160, md: 360 }, `${colors.accent.teal}15`, '2s')} />
                <Box sx={orbSx('30%', undefined, undefined, '40%', { xs: 0, md: 220 }, `${colors.accent.purple}10`, '4s')} />

                <Box sx={decoRingWrapSx}>
                    <Box sx={ring1Sx}><Box sx={ringDotSx(colors.secondary.main, '-5px', undefined)} /></Box>
                    <Box sx={ring2Sx}><Box sx={ringDotSx(colors.accent.teal, undefined, '-4px')} /></Box>
                </Box>

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 4 }, alignItems: 'center' }}>

                        <Box>
                            <Box sx={{ mb: 3, animation: 'ct_rise .6s cubic-bezier(.34,1.2,.64,1) both' }}>
                                <Box sx={badgeSx}>
                                    <Box sx={badgeDotSx} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: 600, color: colors.secondary.main }}>
                                        Get in Touch
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography sx={heroHeadSx}>We Would Love</Typography>
                            <Typography sx={{ ...heroHeadSx, animationDelay: '.15s', mb: 2 }}>
                                <Box component="span" sx={heroGradSx}>to Hear From You.</Box>
                            </Typography>
                            <Typography sx={subtitleSx}>
                                Have a question about a course, need enrolment support, or want to explore corporate training? Our team is ready.
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', animation: 'ct_rise .7s ease .35s both' }}>
                                {STEPS.map((s, i) => (
                                    <Box key={s.num} sx={{ display: 'flex', alignItems: 'center', gap: 1.2, animation: `ct_stepIn .5s cubic-bezier(.34,1.2,.64,1) ${.35 + i * .1}s both` }}>
                                        <Box sx={stepBoxSx(s.color)}>
                                            <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: '.65rem', fontWeight: 900, color: s.color }}>{s.num}</Typography>
                                        </Box>
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '.78rem', fontWeight: 600, color: 'rgba(255,255,255,.6)' }}>{s.label}</Typography>
                                        {i < STEPS.length - 1 && <Box sx={{ width: 18, height: 1, bgcolor: 'rgba(255,255,255,.15)', flexShrink: 0 }} />}
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', py: 2 }}>
                            <Box sx={imgWrapSx}>
                                <Box sx={imgRing1Sx} /><Box sx={imgRing2Sx} /><Box sx={imgGlowSx} />
                                <Box component="img" src="/contact.png" alt="Contact Cheybis Global Resources" sx={imgSx} />
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