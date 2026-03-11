import { useState, useEffect } from 'react';
import { Box, Container, Stack, Typography, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import { Link, useLocation } from 'react-router-dom';
import { CTAButton } from '../common';
import { navCss, navbarSx, logoBoxSx, logoTextSx, logoSubSx, drawerPaperSx, drawerTitleSx, drawerLinkSx, drawerLinkTextSx } from './styles';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/courses' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawer] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <>
            <style>{navCss}</style>
            <Box component="header" sx={navbarSx(scrolled)}>
                <Container maxWidth="xl">
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 2 }}>

                        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.2, textDecoration: 'none' }}>
                            <Box sx={logoBoxSx}>
                                <SchoolIcon sx={{ fontSize: 20, color: 'white' }} />
                            </Box>
                            <Box>
                                <Typography sx={logoTextSx}>Cheybis</Typography>
                                <Typography sx={logoSubSx}>Global Resources</Typography>
                            </Box>
                        </Box>

                        <Stack direction="row" alignItems="center" gap={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {navLinks.map((l) => (
                                <Link key={l.label} to={l.path}
                                    className={`nav-link${location.pathname === l.path || (l.path !== '/' && location.pathname.startsWith(l.path)) ? ' active' : ''}`}
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </Stack>

                        <Stack direction="row" alignItems="center" gap={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <CTAButton href="/courses" sx={{ py: 1, px: 2.5, fontSize: '0.875rem' }}>Browse Courses</CTAButton>
                        </Stack>

                        <IconButton onClick={() => setDrawer(true)} sx={{ display: { xs: 'flex', md: 'none' }, color: 'white' }}>
                            <MenuIcon />
                        </IconButton>
                    </Stack>
                </Container>
            </Box>

            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawer(false)} PaperProps={{ sx: drawerPaperSx }}>
                <Box sx={{ px: 3, py: 2.5 }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
                        <Typography sx={drawerTitleSx}>Cheybis Global Resources</Typography>
                        <IconButton onClick={() => setDrawer(false)} sx={{ color: 'rgba(255,255,255,0.6)' }}><CloseIcon /></IconButton>
                    </Stack>
                    <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 2 }} />
                    <List>
                        {navLinks.map((l) => (
                            <ListItem key={l.label} component={Link} to={l.path} onClick={() => setDrawer(false)} sx={drawerLinkSx}>
                                <ListItemText primary={l.label} primaryTypographyProps={drawerLinkTextSx} />
                            </ListItem>
                        ))}
                    </List>
                    <Box sx={{ mt: 3 }}>
                        <CTAButton href="/courses" sx={{ width: '100%', justifyContent: 'center' }}>Browse Courses</CTAButton>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;