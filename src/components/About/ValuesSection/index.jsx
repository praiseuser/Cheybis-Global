import { Box, Container, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VerifiedIcon from '@mui/icons-material/Verified';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { colors } from '../../../theme';
import { Label, useReveal, gridBgSx, orbSx } from '../shared';
import { wrapSx, sectionTitleSx, cardSx, iconSx, valTitleSx, valDescSx } from './styles';

const VALUES = [
    { icon: LightbulbIcon, color: colors.secondary.main, title: 'Excellence', desc: 'We hold every programme to the highest academic and industry standards — no shortcuts.' },
    { icon: FavoriteIcon, color: colors.accent.teal, title: 'Empathy', desc: 'We design for real people with real constraints — flexible, affordable, and human.' },
    { icon: VerifiedIcon, color: colors.accent.purple, title: 'Integrity', desc: 'Every certificate we issue is earned, credible, and backed by genuine learning.' },
    { icon: RocketLaunchIcon, color: colors.accent.green, title: 'Impact', desc: 'We measure success by careers changed, salaries raised, and lives transformed.' },
];

export default function ValuesSection() {
    const [ref, vis] = useReveal();
    return (
        <Box ref={ref} sx={wrapSx}>
            <Box sx={gridBgSx} />
            <Box sx={orbSx('-15%', '-5%', undefined, undefined, { xs: 0, md: 460 }, `${colors.secondary.main}15`, '0s')} />
            <Box sx={orbSx(undefined, undefined, '-10%', '-4%', { xs: 0, md: 340 }, `${colors.accent.teal}12`, '2.5s')} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 9 }, opacity: vis ? 1 : 0, animation: vis ? 'ab_rise .6s ease both' : 'none' }}>
                    <Label>Our Values</Label>
                    <Typography sx={sectionTitleSx}>The Principles Behind Every Decision</Typography>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4,1fr)' }, gap: 2.5 }}>
                    {VALUES.map((v, i) => {
                        const Icon = v.icon;
                        return (
                            <Box key={v.title} sx={{ ...cardSx, opacity: vis ? 1 : 0, animation: vis ? `ab_rise .6s cubic-bezier(.34,1.2,.64,1) ${i * .12}s both` : 'none' }}>
                                <Box className="val-icon" sx={iconSx(v.color)}><Icon sx={{ fontSize: 26, color: v.color }} /></Box>
                                <Typography sx={valTitleSx}>{v.title}</Typography>
                                <Typography sx={valDescSx}>{v.desc}</Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
}