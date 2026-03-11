import { Box, Container } from '@mui/material';
import { colors } from '../../theme';
import { useReveal } from '../../components/Contact/shared.jsx';
import ContactHero from '../../components/Contact/HeroSection';
import InfoPanel from '../../components/Contact/InfoPanel';
import ContactForm from '../../components/Contact/ContactForm';

export default function ContactPage() {
    const [bodyRef, bodyVis] = useReveal();

    return (
        <>
            <ContactHero />

            <Box ref={bodyRef} sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.65fr' }, gap: { xs: 5, md: 6 }, alignItems: 'start' }}>
                        <InfoPanel vis={bodyVis} />
                        <ContactForm vis={bodyVis} />
                    </Box>
                </Container>
            </Box>
        </>
    );
}