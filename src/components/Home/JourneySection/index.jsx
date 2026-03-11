import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { colors, typography } from '../../../theme';
import { SectionLabel, SectionHeading } from '../../../components/common';
import {
  keyframes, wrapSx, orbSx, ghostNumSx, circleSx, ringSx,
  connectorSx, connFillSx, stepLabelSx, stepTitleSx, stepDescSx,
  tagSx, particleSx, mobileCircleSx, mobileVlineSx, mobileContentSx,
} from './styles';

const STEPS = [
  { num: '01', Icon: SearchIcon, color: colors.secondary.main, title: 'Browse & Choose', desc: 'Explore 8+ professional programmes and find the perfect fit for your career goals.', tag: 'Start Here', particles: [['20%', 0, 2.5], ['60%', .9, 3], ['80%', 1.8, 2.8]] },
  { num: '02', Icon: PlayCircleIcon, color: colors.accent.teal, title: 'Enrol & Learn', desc: 'Get instant lifetime access to video lessons. Learn at your own pace, anywhere.', tag: 'Self-Paced', particles: [['30%', .3, 3], ['50%', 1.2, 2.6], ['75%', 2.1, 3.2]] },
  { num: '03', Icon: EmojiEventsIcon, color: colors.accent.purple, title: 'Get Certified', desc: 'Complete assessments and earn an internationally recognised certificate employers trust.', tag: 'Accredited', particles: [['25%', .6, 2.8], ['55%', 1.5, 3.1], ['85%', 2.4, 2.5]] },
  { num: '04', Icon: RocketLaunchIcon, color: colors.accent.green, title: 'Level Up', desc: 'Join 12,000+ graduates who landed promotions and 40% average salary increases.', tag: 'Career Growth', particles: [['15%', .2, 3.2], ['45%', 1.1, 2.7], ['70%', 2, 3]] },
];

const CONNECTORS = [
  `linear-gradient(90deg,${colors.secondary.main},${colors.accent.teal})`,
  `linear-gradient(90deg,${colors.accent.teal},${colors.accent.purple})`,
  `linear-gradient(90deg,${colors.accent.purple},${colors.accent.green})`,
];

const DesktopStep = ({ step, idx, vis }) => {
  const { Icon, color, num, title, desc, tag, particles } = step;
  return (
    <Box sx={{ flex: 1, position: 'relative', px: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      {idx < 3 && (
        <Box sx={connectorSx}>
          <Box sx={connFillSx(CONNECTORS[idx], vis, 0.5 + idx * 0.25)} />
        </Box>
      )}

      <Typography sx={{ ...ghostNumSx(color), opacity: vis ? undefined : 0, animation: vis ? `jrn_ghost 4s ease-in-out ${idx * .6}s infinite` : 'none' }}>
        {num}
      </Typography>

      {particles.map(([left, delay, dur], pi) => (
        <Box key={pi} sx={particleSx(color, left, delay + idx * .3, dur)} />
      ))}

      <Box sx={{ ...circleSx(color), opacity: vis ? 1 : 0, animation: vis ? `jrn_popIn .7s cubic-bezier(.34,1.2,.64,1) ${.3 + idx * .18}s both` : 'none' }}>
        <Box sx={ringSx(color, `${idx * .3}s`)} />
        <Box sx={ringSx(color, `${idx * .3 + .8}s`)} />
        <Icon sx={{ fontSize: 30, color: 'white', zIndex: 1, position: 'relative', animation: `jrn_rock ${3.5 + idx * .3}s ease-in-out ${idx * .5}s infinite` }} />
      </Box>

      <Box sx={{ mt: 3, zIndex: 2, position: 'relative', opacity: vis ? 1 : 0, animation: vis ? `jrn_slideUp .6s ease ${.6 + idx * .18}s both` : 'none' }}>
        <Typography sx={stepLabelSx(color)}>Step {num}</Typography>
        <Typography sx={stepTitleSx}>{title}</Typography>
        <Typography sx={stepDescSx}>{desc}</Typography>
        <Box sx={tagSx(color, vis, .9 + idx * .18)}>{tag}</Box>
      </Box>
    </Box>
  );
};

const MobileStep = ({ step, idx, vis, isLast }) => {
  const { Icon, color, num, title, desc, tag } = step;
  return (
    <Stack direction="row" gap={2.5} sx={{ mb: isLast ? 0 : 1 }}>
      <Stack alignItems="center" flexShrink={0}>
        <Box sx={mobileCircleSx(color, vis, idx * .15)}>
          <Icon sx={{ fontSize: 22, color: 'white' }} />
        </Box>
        {!isLast && <Box sx={mobileVlineSx(CONNECTORS[idx])} />}
      </Stack>
      <Box sx={mobileContentSx(vis, .1 + idx * .15)}>
        <Typography sx={{ ...stepLabelSx(color), fontSize: '.58rem' }}>Step {num}</Typography>
        <Typography sx={{ ...stepTitleSx, fontSize: typography.fontSize.base }}>{title}</Typography>
        <Typography sx={{ ...stepDescSx, maxWidth: 'none', mx: 0 }}>{desc}</Typography>
        <Box sx={tagSx(color, vis, .3 + idx * .15)}>{tag}</Box>
      </Box>
    </Stack>
  );
};

const JourneySection = () => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: .1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <GlobalStyles styles={keyframes} />
      <Box ref={ref} sx={wrapSx}>
        <Box sx={orbSx('-12%', undefined, '-4%', undefined, `${colors.secondary.main}15`, '0s')} />
        <Box sx={orbSx(undefined, '-4%', undefined, '-10%', `${colors.accent.teal}12`, '2s')} />
        <Box sx={orbSx('35%', undefined, undefined, '40%', `${colors.accent.purple}10`, '4s')} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 7, md: 11 } }}>
            <Box sx={{ opacity: vis ? 1 : 0, animation: vis ? 'jrn_slideUp .6s ease both' : 'none' }}><SectionLabel>How It Works</SectionLabel></Box>
            <SectionHeading light sx={{ maxWidth: 540, mx: 'auto', opacity: vis ? 1 : 0, animation: vis ? 'jrn_slideUp .7s ease .1s both' : 'none' }}>
              Your Journey from Zero to Certified
            </SectionHeading>
            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: 'rgba(255,255,255,.4)', mt: 2, maxWidth: 360, mx: 'auto', lineHeight: 1.8, opacity: vis ? 1 : 0, animation: vis ? 'jrn_slideUp .7s ease .2s both' : 'none' }}>
              Four steps. One transformation.
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'flex-start', justifyContent: 'space-between', position: 'relative', px: 2 }}>
            {STEPS.map((s, i) => <DesktopStep key={s.num} step={s} idx={i} vis={vis} />)}
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            {STEPS.map((s, i) => <MobileStep key={s.num} step={s} idx={i} vis={vis} isLast={i === STEPS.length - 1} />)}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default JourneySection;