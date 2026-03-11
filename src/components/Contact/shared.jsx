import { useEffect, useRef, useState } from 'react';
import { colors } from '../../theme';

export const keyframes = {
    '@keyframes ct_rise': { from: { opacity: 0, transform: 'translateY(44px) scale(0.96)' }, to: { opacity: 1, transform: 'none' } },
    '@keyframes ct_left': { from: { opacity: 0, transform: 'translateX(-44px)' }, to: { opacity: 1, transform: 'none' } },
    '@keyframes ct_right': { from: { opacity: 0, transform: 'translateX(44px)' }, to: { opacity: 1, transform: 'none' } },
    '@keyframes ct_orb': { '0%,100%': { opacity: .3, transform: 'scale(1)' }, '50%': { opacity: .6, transform: 'scale(1.14)' } },
    '@keyframes ct_spin': { to: { transform: 'rotate(360deg)' } },
    '@keyframes ct_spinR': { to: { transform: 'rotate(-360deg)' } },
    '@keyframes ct_pulse': { '0%,100%': { boxShadow: '0 0 0 0 rgba(249,115,22,.5)' }, '50%': { boxShadow: '0 0 0 9px rgba(249,115,22,0)' } },
    '@keyframes ct_grad': { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
    '@keyframes ct_sweep': { from: { left: '-80%' }, to: { left: '130%' } },
    '@keyframes ct_float': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
    '@keyframes ct_imgFloat': { '0%,100%': { transform: 'translateY(0) rotate(-2deg)' }, '50%': { transform: 'translateY(-18px) rotate(2deg)' } },
    '@keyframes ct_imgGlow': { '0%,100%': { opacity: .4, transform: 'scale(1)' }, '50%': { opacity: .75, transform: 'scale(1.08)' } },
    '@keyframes ct_imgIn': { from: { opacity: 0, transform: 'translateX(60px) scale(0.88)' }, to: { opacity: 1, transform: 'none' } },
    '@keyframes ct_shadowPulse': { '0%,100%': { transform: 'scaleX(1)', opacity: .35 }, '50%': { transform: 'scaleX(.7)', opacity: .18 } },
    '@keyframes ct_checkPop': { '0%': { transform: 'scale(0) rotate(-30deg)', opacity: 0 }, '65%': { transform: 'scale(1.2) rotate(5deg)' }, '100%': { transform: 'scale(1) rotate(0)', opacity: 1 } },
    '@keyframes ct_stepIn': { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'none' } },
};

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

export const gridBgSx = {
    position: 'absolute', inset: 0, pointerEvents: 'none',
    backgroundImage: `radial-gradient(rgba(255,255,255,.045) 1px,transparent 1px)`,
    backgroundSize: '32px 32px',
};

export const orbSx = (top, right, bottom, left, size, clr, delay = '0s') => ({
    position: 'absolute', top, right, bottom, left,
    width: size, height: size, borderRadius: '50%', pointerEvents: 'none',
    background: `radial-gradient(circle,${clr} 0%,transparent 70%)`,
    animation: `ct_orb 6s ease ${delay} infinite`,
});