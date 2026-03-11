import { Box, Container, Typography } from '@mui/material';
import { colors } from '../../../theme';
import { Label, useReveal } from '../shared';
import { wrapSx, sectionTitleSx, yearSx, titleSx, descSx, dotSx, lineSx } from './styles';

const TIMELINE = [
    { year: '2018', title: 'Cheybis Global Resources Founded', desc: 'Started with a single HSE programme and 40 students in Lagos.', color: colors.secondary.main },
    { year: '2019', title: 'First 500 Graduates', desc: 'Expanded to PMP and HRM; celebrated 500 certified professionals.', color: colors.accent.teal },
    { year: '2021', title: 'Went Fully Online', desc: 'Launched a 100% digital platform enabling learning across Africa.', color: colors.accent.purple },
    { year: '2023', title: '12,000+ Professionals', desc: 'Reached a community of over twelve thousand certified graduates.', color: colors.accent.green },
    { year: '2025', title: '10 Programmes & Growing', desc: 'Expanded catalogue and launched DHIS2 & Health Informatics track.', color: colors.secondary.light },
];

export default function TimelineSection() {
    const [ref, vis] = useReveal();
    return (
        <Box ref={ref} sx={wrapSx}>
            <Container maxWidth="md">
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 9 }, opacity: vis ? 1 : 0, animation: vis ? 'ab_rise .6s ease both' : 'none' }}>
                    <Label>Our Journey</Label>
                    <Typography sx={sectionTitleSx}>From Idea to 12,000 Graduates</Typography>
                </Box>

                <Box sx={{ position: 'relative', pl: { xs: 3, md: 0 } }}>
                    {TIMELINE.map((item, i) => (
                        <Box key={item.year} sx={{
                            display: 'flex', gap: { xs: 3, md: 6 },
                            flexDirection: { xs: 'row', md: i % 2 === 0 ? 'row' : 'row-reverse' },
                            opacity: vis ? 1 : 0,
                            animation: vis ? `${i % 2 === 0 ? 'ab_left' : 'ab_right'} .6s cubic-bezier(.34,1.2,.64,1) ${i * .12}s both` : 'none',
                        }}>
                            <Box sx={{ flex: 1, pb: 5, textAlign: { md: i % 2 === 0 ? 'right' : 'left' } }}>
                                <Typography sx={{ ...yearSx, color: item.color }}>{item.year}</Typography>
                                <Typography sx={titleSx}>{item.title}</Typography>
                                <Typography sx={descSx}>{item.desc}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                                <Box sx={{ ...dotSx, bgcolor: item.color }} />
                                {i < TIMELINE.length - 1 && (
                                    <Box sx={{ ...lineSx, background: `linear-gradient(180deg,${item.color}80,${TIMELINE[i + 1].color}30)` }} />
                                )}
                            </Box>
                            <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }} />
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}