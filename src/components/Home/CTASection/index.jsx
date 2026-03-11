import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HeadsetMicIcon   from '@mui/icons-material/HeadsetMic';
import { Link } from 'react-router-dom';
import { typography } from '../../../theme';
import { keyframes, wrapSx, cardSx, blobSx, badgeSx, ringSx, fireSx, headSx, subSx, primaryBtnSx, secondaryBtnSx } from './styles';

const CTASection = () => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <GlobalStyles styles={keyframes} />
      <Box ref={ref} sx={wrapSx}>
        <Container maxWidth="lg">
          <Box sx={{
            ...cardSx,
            opacity:   vis ? 1 : 0,
            transform: vis ? 'none' : 'translateY(50px) scale(0.96)',
            transition: 'opacity .8s ease, transform .8s cubic-bezier(.34,1.2,.64,1)',
          }}>

            <Box sx={blobSx('-30%', '-5%', undefined, undefined, 300, .12)} />
            <Box sx={blobSx(undefined, undefined, '-4%', '-25%', 260, .09)} />

            <Box sx={{ position:'relative', zIndex:3 }}>

              <Box sx={{ display:'flex', justifyContent:'center', mb:3 }}>
                <Box sx={badgeSx}>
                  <Box sx={ringSx('0s')} />
                  <Box sx={ringSx('.7s')} />
                  <Box component="span" sx={fireSx}>🔥</Box>
                  <Typography sx={{ fontFamily:typography.fontFamily.body, fontSize:typography.fontSize.xs, fontWeight:700, color:'white', letterSpacing:2.5, textTransform:'uppercase' }}>
                    Enrolment Now Open
                  </Typography>
                </Box>
              </Box>

              <Typography sx={headSx}>Ready to Invest in Yourself?</Typography>

              <Typography sx={subSx}>
                Join 12,000+ professionals who chose ProLearn Academy —<br />your next chapter starts today.
              </Typography>

              <Stack direction={{ xs:'column', sm:'row' }} gap={2} justifyContent="center">
                <Box component={Link} to="/courses" sx={primaryBtnSx}>
                  Start Learning Today <ArrowForwardIcon sx={{ fontSize:18 }} />
                </Box>
                <Box component={Link} to="/contact" sx={secondaryBtnSx}>
                  <HeadsetMicIcon sx={{ fontSize:18 }} /> Talk to an Advisor
                </Box>
              </Stack>

            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CTASection;