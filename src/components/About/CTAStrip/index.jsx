import { Box, Container, Typography, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { useReveal } from '../shared';
import { wrapSx, dotGridSx, blobSx, headingSx, subSx, primaryBtnSx, secondaryBtnSx } from './styles';

export default function CTAStrip() {
    const [ref, vis] = useReveal();
    return (
        <Box ref={ref} sx={wrapSx}>
            <Box sx={dotGridSx} />
            <Box sx={blobSx('-40%', '-4%', undefined, undefined, 320, .12)} />
            <Box sx={blobSx(undefined, undefined, '-3%', '-30%', 260, .09)} />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <Box sx={{ opacity: vis ? 1 : 0, animation: vis ? 'ab_rise .7s cubic-bezier(.34,1.2,.64,1) both' : 'none' }}>
                    <Typography sx={headingSx}>Ready to Start Your Journey?</Typography>
                    <Typography sx={subSx}>
                        Join thousands of professionals who chose Cheybis Global Resources Nig. Ltd to level up their careers.
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} justifyContent="center">
                        <Box component={Link} to="/courses" sx={primaryBtnSx}>
                            Browse Courses <ArrowForwardIcon sx={{ fontSize: 18 }} />
                        </Box>
                        <Box component={Link} to="/contact" sx={secondaryBtnSx}>
                            Contact Us
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}