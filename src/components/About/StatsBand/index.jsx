import { Box, Container, Typography } from '@mui/material';
import { colors } from '../../../theme';
import { Counter, useReveal } from '../shared';
import { wrapSx, floatSx, valSx, lblSx } from './styles';

const STATS = [
    { val: '2018', lbl: 'Year Founded' },
    { val: '12000+', lbl: 'Graduates Worldwide' },
    { val: '10+', lbl: 'Programmes Offered' },
    { val: '4.8', lbl: 'Average Rating' },
];

export default function StatsBand() {
    const [ref, vis] = useReveal();
    return (
        <Box ref={ref} sx={wrapSx}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4,1fr)' }, gap: { xs: 4, md: 0 } }}>
                    {STATS.map((s, i) => (
                        <Box key={s.lbl} sx={{
                            ...floatSx[i], textAlign: 'center', px: { md: 4 },
                            borderRight: i < 3 ? { md: `1px solid ${colors.divider}` } : 'none',
                            opacity: vis ? 1 : 0,
                            animation: vis ? `ab_statIn .55s ease ${i * .1}s both` : 'none',
                        }}>
                            <Typography sx={valSx}><Counter target={s.val} vis={vis} delay={i * .1} /></Typography>
                            <Typography sx={lblSx}>{s.lbl}</Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}