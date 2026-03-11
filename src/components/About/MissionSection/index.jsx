import { Box, Container, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PublicIcon from '@mui/icons-material/Public';
import { colors, typography } from '../../../theme';
import { Label, useReveal } from '../shared';
import { wrapSx, headingSx, underlineSx, bodySx, featureCardSx, iconBoxSx, featureTitleSx, featureSubSx } from './styles';

const FEATURES = [
    { icon: SchoolIcon, color: colors.secondary.main, title: 'Curriculum built by practitioners', sub: "Not academics — people who've done the work." },
    { icon: EmojiEventsIcon, color: colors.accent.teal, title: 'Globally recognised certificates', sub: 'Accepted by employers across Africa and beyond.' },
    { icon: PublicIcon, color: colors.accent.purple, title: 'Learn from anywhere in the world', sub: '100% online with lifetime access to all content.' },
];

export default function MissionSection() {
    const [ref, vis] = useReveal();
    return (
        <Box ref={ref} sx={wrapSx}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 10 }, alignItems: 'center' }}>

                    {/* left */}
                    <Box sx={{ opacity: vis ? 1 : 0, animation: vis ? 'ab_left .7s cubic-bezier(.34,1.2,.64,1) both' : 'none' }}>
                        <Label>Our Mission</Label>
                        <Typography sx={headingSx}>
                            Making Professional{' '}
                            <Box component="span" sx={underlineSx} className={vis ? 'ab-underline ab-drawn' : 'ab-underline'}>
                                Certification
                            </Box>{' '}
                            Accessible to All
                        </Typography>
                        <Typography sx={bodySx}>
                            Too many talented professionals are held back not by ability, but by access. We built Cheybis Global Resources to remove that barrier — delivering internationally recognised qualifications at a fraction of traditional costs, on a schedule that fits real life.
                        </Typography>
                        <Typography sx={{ ...bodySx, mb: 0 }}>
                            Every programme is designed by industry veterans, validated by employers, and built for one purpose: getting you to the next level of your career.
                        </Typography>
                    </Box>

                    <Box sx={{ opacity: vis ? 1 : 0, animation: vis ? 'ab_right .7s cubic-bezier(.34,1.2,.64,1) .15s both' : 'none', display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {FEATURES.map(item => {
                            const Icon = item.icon;
                            return (
                                <Box key={item.title} sx={featureCardSx}>
                                    <Box sx={iconBoxSx(item.color)}><Icon sx={{ fontSize: 22, color: item.color }} /></Box>
                                    <Box>
                                        <Typography sx={featureTitleSx}>{item.title}</Typography>
                                        <Typography sx={featureSubSx}>{item.sub}</Typography>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>

                </Box>
            </Container>
        </Box>
    );
}