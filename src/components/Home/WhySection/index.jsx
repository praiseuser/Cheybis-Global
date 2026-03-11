import { useEffect, useRef, useState, useCallback } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { colors, typography } from '../../../theme';
import { SectionLabel, SectionHeading } from '../../../components/common';
import { keyframes, wrapSx, orbSx, headingSx, cardSx, iconBoxSx, dotSx, titleSx, descSx, statNumSx, statLblSx, trackSx, barSx } from './styles';

const CARDS = [
  { Icon: WorkspacePremiumIcon, color: colors.secondary.main, title: 'Internationally Certified', desc: 'All programmes are globally accredited and recognised by top industry bodies and employers worldwide.', stat: '12k+', statLbl: 'Certified Graduates', pct: 92 },
  { Icon: PlayCircleIcon, color: colors.accent.teal, title: '100% Online & Flexible', desc: 'Learn on your own schedule — lifetime access to all materials from any device, forever.', stat: '100%', statLbl: 'Self-Paced Access', pct: 100 },
  { Icon: GroupsIcon, color: colors.accent.purple, title: 'Expert Instructors', desc: 'Seasoned practitioners with decades of real-world experience guide you every step of the way.', stat: '40+', statLbl: 'Industry Experts', pct: 78 },
  { Icon: TrendingUpIcon, color: colors.accent.green, title: 'Real Career Results', desc: 'Our graduates report an average 40% salary jump within 12 months of completing a course.', stat: '40%', statLbl: 'Avg. Salary Increase', pct: 85 },
];

const Counter = ({ target, vis, delay }) => {
  const [val, setVal] = useState('0');
  const suffix = target.replace(/[0-9]/g, '');
  const num = parseInt(target.replace(/\D/g, ''), 10);

  useEffect(() => {
    if (!vis) return;
    const tid = setTimeout(() => {
      let start = null;
      const tick = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / 1400, 1);
        setVal(`${Math.round((1 - Math.pow(1 - p, 3)) * num)}${suffix}`);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay * 1000 + 300);
    return () => clearTimeout(tid);
  }, [vis]);

  return <span>{val}</span>;
};

const Card = ({ card, idx, vis }) => {
  const ref = useRef(null);
  const { Icon, color, title, desc, stat, statLbl, pct } = card;
  const delay = idx * 0.13;

  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.03)`;
  }, []);

  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = '';
  }, []);

  return (
    <Box ref={ref} className="wy-card" onMouseMove={onMove} onMouseLeave={onLeave}
      sx={{
        ...cardSx(color), opacity: vis ? 1 : 0, transition: `opacity .7s ease ${delay}s, transform .7s cubic-bezier(.34,1.2,.64,1) ${delay}s`,
        transform: vis ? undefined : 'translateY(55px) scale(0.93)'
      }}>

      <Box sx={dotSx(color, '14%', '16%', undefined, 6, '0s')} />
      <Box sx={dotSx(color, '58%', '9%', undefined, 4, '1.4s')} />
      <Box sx={dotSx(color, '38%', undefined, '7%', 5, '2.8s')} />

      {/* icon */}
      <Box sx={{ ...iconBoxSx(color), animation: vis ? `wy_iconSpin .7s cubic-bezier(.34,1.2,.64,1) ${delay + .3}s both` : 'none' }}>
        <Icon sx={{ fontSize: 28, color }} />
      </Box>

      <Typography sx={titleSx}>{title}</Typography>
      <Typography sx={descSx}>{desc}</Typography>

      <Box sx={{ mt: 3 }}>
        <Typography sx={statNumSx(color)}><Counter target={stat} vis={vis} delay={delay} /></Typography>
        <Typography sx={statLblSx}>{statLbl}</Typography>
      </Box>

      <Box sx={trackSx}>
        <Box sx={barSx(color, pct, vis, delay + .4)} />
      </Box>
    </Box>
  );
};

const WhySection = () => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: .07 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <GlobalStyles styles={keyframes} />
      <Box ref={ref} sx={wrapSx}>
        <Box sx={orbSx('-10%', '-5%', undefined, undefined, `${colors.secondary.main}18`, '0s')} />
        <Box sx={orbSx(undefined, undefined, '-15%', '-5%', `${colors.accent.teal}14`, '2s')} />
        <Box sx={orbSx('30%', undefined, undefined, undefined, `${colors.accent.purple}10`, '4s')} />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 9 } }}>
            <Box sx={{ opacity: vis ? 1 : 0, animation: vis ? 'wy_rise .7s cubic-bezier(.34,1.2,.64,1) both' : 'none' }}>
              <SectionLabel light>Why Choose ProLearn</SectionLabel>
            </Box>
            <Typography sx={{ ...headingSx, opacity: vis ? 1 : 0, animation: vis ? 'wy_rise .7s ease .1s both, wy_gradShift 5s ease infinite 1s' : 'none' }}>
              Built Around Your Success
            </Typography>
            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: 'rgba(255,255,255,.45)', maxWidth: 440, mx: 'auto', lineHeight: 1.85, opacity: vis ? 1 : 0, animation: vis ? 'wy_rise .7s ease .2s both' : 'none' }}>
              We obsess over outcomes — not just content. Here&apos;s what sets us apart.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4,1fr)' }, gap: { xs: 3, md: 2.5 }, alignItems: 'stretch' }}>
            {CARDS.map((c, i) => <Card key={c.title} card={c} idx={i} vis={vis} />)}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default WhySection;