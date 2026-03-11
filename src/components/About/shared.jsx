import { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { colors, typography } from '../../theme';

/* ── shared keyframes (inject once via GlobalStyles in HeroSection) ── */
export const keyframes = {
  '@keyframes ab_rise': { from: { opacity: 0, transform: 'translateY(50px) scale(0.95)' }, to: { opacity: 1, transform: 'none' } },
  '@keyframes ab_left': { from: { opacity: 0, transform: 'translateX(-50px)' }, to: { opacity: 1, transform: 'none' } },
  '@keyframes ab_right': { from: { opacity: 0, transform: 'translateX(50px)' }, to: { opacity: 1, transform: 'none' } },
  '@keyframes ab_orb': { '0%,100%': { opacity: .3, transform: 'scale(1)' }, '50%': { opacity: .6, transform: 'scale(1.14)' } },
  '@keyframes ab_spin': { to: { transform: 'rotate(360deg)' } },
  '@keyframes ab_spinR': { to: { transform: 'rotate(-360deg)' } },
  '@keyframes ab_float': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
  '@keyframes ab_pulse': { '0%,100%': { boxShadow: '0 0 0 0 rgba(249,115,22,.5)' }, '50%': { boxShadow: '0 0 0 9px rgba(249,115,22,0)' } },
  '@keyframes ab_ring': { '0%': { transform: 'scale(1)', opacity: .5 }, '100%': { transform: 'scale(2)', opacity: 0 } },
  '@keyframes ab_grad': { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
  '@keyframes ab_statIn': { from: { opacity: 0, transform: 'translateY(18px)' }, to: { opacity: 1, transform: 'none' } },
  '@keyframes ab_draw': { from: { width: 0 }, to: { width: '100%' } },
  '@keyframes ab_sweep': { from: { left: '-80%' }, to: { left: '130%' } },
  '@keyframes ab_imgFloat': { '0%,100%': { transform: 'translateY(0) rotate(-2deg)' }, '50%': { transform: 'translateY(-18px) rotate(2deg)' } },
  '@keyframes ab_imgGlow': { '0%,100%': { opacity: .4, transform: 'scale(1)' }, '50%': { opacity: .75, transform: 'scale(1.08)' } },
  '@keyframes ab_imgIn': { from: { opacity: 0, transform: 'translateX(60px) scale(0.88)' }, to: { opacity: 1, transform: 'none' } },
  '@keyframes ab_shadowPulse': { '0%,100%': { transform: 'scaleX(1)', opacity: .35 }, '50%': { transform: 'scaleX(.7)', opacity: .18 } },
};

/* ── useReveal hook ── */
export const useReveal = (threshold = 0.08) => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
};

/* ── Section label ── */
export const Label = ({ children }) => (
  <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 2 }}>
    <Box sx={{ width: 28, height: 3, borderRadius: 2, bgcolor: colors.secondary.main }} />
    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: colors.secondary.main }}>
      {children}
    </Typography>
  </Box>
);


export const Counter = ({ target, vis, delay = 0 }) => {
  const [val, setVal] = useState('0');
  const suffix = target.replace(/[0-9.]/g, '');
  const num = parseFloat(target.replace(/[^0-9.]/g, ''));
  useEffect(() => {
    if (!vis) return;
    let start = null;
    const tid = setTimeout(() => requestAnimationFrame(function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1300, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(`${Number.isInteger(num) ? Math.round(e * num) : (e * num).toFixed(1)}${suffix}`);
      if (p < 1) requestAnimationFrame(step);
    }), delay * 1000);
    return () => clearTimeout(tid);
  }, [vis]);
  return <>{val}</>;
};

/* ── shared grid dot bg ── */
export const gridBgSx = {
  position: 'absolute', inset: 0, pointerEvents: 'none',
  backgroundImage: `radial-gradient(rgba(255,255,255,.045) 1px,transparent 1px)`,
  backgroundSize: '32px 32px',
};

/* ── shared orb helper ── */
export const orbSx = (top, right, bottom, left, size, clr, delay = '0s') => ({
  position: 'absolute', top, right, bottom, left,
  width: size, height: size, borderRadius: '50%', pointerEvents: 'none',
  background: `radial-gradient(circle,${clr} 0%,transparent 70%)`,
  animation: `ab_orb 6s ease ${delay} infinite`,
});