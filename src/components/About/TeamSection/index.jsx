import { Box, Container, Typography } from '@mui/material';
import { colors, typography } from '../../../theme';
import { Label, useReveal } from '../shared';
import { wrapSx, sectionTitleSx, cardSx, avatarSx, rippleSx, nameSx, roleSx } from './styles';

const TEAM = [
    { name: 'Dr. Amina Okafor', role: 'Founder & CEO', initials: 'AO', color: colors.secondary.main },
    { name: 'Chukwudi Eze', role: 'Head of Curriculum', initials: 'CE', color: colors.accent.teal },
    { name: 'Fatima Al-Hassan', role: 'Director of Partnerships', initials: 'FA', color: colors.accent.purple },
    { name: 'James Adeyemi', role: 'Lead Instructor, HSE', initials: 'JA', color: colors.accent.green },
];

export default function TeamSection() {
    const [ref, vis] = useReveal();
    return (
        <Box ref={ref} sx={wrapSx}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 9 }, opacity: vis ? 1 : 0, animation: vis ? 'ab_rise .6s ease both' : 'none' }}>
                    <Label>The Team</Label>
                    <Typography sx={sectionTitleSx}>People Who Believe in Your Growth</Typography>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4,1fr)' }, gap: 3 }}>
                    {TEAM.map((person, i) => (
                        <Box key={person.name} sx={{ ...cardSx, opacity: vis ? 1 : 0, animation: vis ? `ab_rise .6s cubic-bezier(.34,1.2,.64,1) ${i * .1}s both` : 'none' }}>
                            <Box sx={avatarSx(person.color)}>
                                <Box sx={{ ...rippleSx('0s'), color: person.color }} />
                                <Box sx={{ ...rippleSx('.8s'), color: person.color }} />
                                <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: '2rem', fontWeight: 900, color: person.color, zIndex: 1 }}>
                                    {person.initials}
                                </Typography>
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(transparent,rgba(255,255,255,.7))', zIndex: 2 }} />
                            </Box>
                            <Box sx={{ p: 2.5 }}>
                                <Typography sx={nameSx}>{person.name}</Typography>
                                <Typography sx={{ ...roleSx, color: person.color }}>{person.role}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}