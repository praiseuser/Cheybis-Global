import { Box, Container, Typography } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { colors, typography } from '../../../theme';
import {
    keyframes, heroSx, gridBgSx, orbSx, decoRingWrapSx,
    decoRing1Sx, decoRing2Sx, ringDotSx, badgeSx, badgeDotSx,
    titleLine1Sx, titleLine2Sx, subtitleSx, searchWrapSx, searchInputSx,
    imgWrapSx, imgRing1Sx, imgRing2Sx, imgGlowSx, imgSx, imgShadowSx,
} from './styles';

const HeroWave = () => (
    <Box sx={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 2 }}>
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', display: 'block' }}>
            <path d="M0,36 C360,72 720,0 1080,44 C1260,64 1380,24 1440,36 L1440,72 L0,72 Z" fill="rgba(255,255,255,.07)" />
            <path d="M0,52 C300,16 700,72 1000,40 C1200,20 1360,58 1440,52 L1440,72 L0,72 Z" fill={colors.background.default} />
        </svg>
    </Box>
);

export default function CoursesHero({ search, onSearch }) {
    return (
        <>
            <GlobalStyles styles={keyframes} />
            <Box sx={heroSx}>
                <Box sx={gridBgSx} />
                <Box sx={orbSx('-8%', '-4%', undefined, undefined, `${colors.secondary.main}22`, '0s')} />
                <Box sx={orbSx(undefined, undefined, '-15%', '-5%', `${colors.accent.teal}18`, '1.5s')} />

                {/* deco rings */}
                <Box sx={decoRingWrapSx}>
                    <Box sx={decoRing1Sx}><Box sx={ringDotSx(colors.secondary.main, '-5px', undefined)} /></Box>
                    <Box sx={decoRing2Sx}><Box sx={ringDotSx(colors.accent.teal, undefined, '-4px')} /></Box>
                </Box>

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 4 }, alignItems: 'center' }}>

                        {/* left */}
                        <Box>
                            <Box sx={{ mb: 3, animation: 'cp_rise .6s cubic-bezier(.34,1.2,.64,1) both' }}>
                                <Box sx={badgeSx}>
                                    <Box sx={badgeDotSx} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: 600, color: colors.secondary.main }}>
                                        10 Professional Programmes
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography sx={titleLine1Sx}>Find Your Next</Typography>
                            <Typography sx={titleLine2Sx}>Certification.</Typography>
                            <Typography sx={subtitleSx}>Explore industry-recognised programmes built for ambitious professionals.</Typography>

                            <Box sx={searchWrapSx}>
                                <SearchIcon sx={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', fontSize: 20, color: 'rgba(255,255,255,.35)', pointerEvents: 'none' }} />
                                <Box component="input" placeholder="Search e.g. HRM, PMP, HSE…"
                                    value={search} onChange={e => onSearch(e.target.value)}
                                    sx={searchInputSx} />
                            </Box>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', py: 2 }}>
                            <Box sx={imgWrapSx}>
                                <Box sx={imgRing1Sx} /><Box sx={imgRing2Sx} /><Box sx={imgGlowSx} />
                                <Box component="img" src="/courses.png" alt="Courses" sx={imgSx} />
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