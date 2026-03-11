import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { colors } from '../../theme';

const css = `
  @keyframes stt_in  { from{opacity:0;transform:translateY(16px) scale(.7)} to{opacity:1;transform:translateY(0) scale(1)} }
  @keyframes stt_out { from{opacity:1;transform:translateY(0) scale(1)} to{opacity:0;transform:translateY(16px) scale(.7)} }
  @keyframes stt_ring { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(2);opacity:0} }
  @keyframes stt_arrow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
  @keyframes stt_shimmer {
    0%{background-position:200% center}
    100%{background-position:-200% center}
  }

  .stt-btn {
    position:fixed; bottom:28px; right:28px; z-index:9999;
    width:48px; height:48px; border-radius:14px; border:none; cursor:pointer;
    background:linear-gradient(135deg, #EA580C, #F97316, #FB923C);
    background-size:300% auto;
    color:white; display:flex; align-items:center; justify-content:center;
    box-shadow: 0 6px 24px rgba(249,115,22,.4), 0 2px 8px rgba(0,0,0,.2);
    transition: transform .28s cubic-bezier(.34,1.4,.64,1), box-shadow .24s;
    overflow:hidden;
  }
  .stt-btn:hover {
    transform:translateY(-4px) scale(1.08);
    box-shadow: 0 14px 36px rgba(249,115,22,.5), 0 4px 12px rgba(0,0,0,.2);
    animation:stt_shimmer 2s linear infinite;
  }
  .stt-btn:active { transform:scale(.94); }

  .stt-btn::before {
    content:''; position:absolute; top:0; left:-80%; bottom:0; width:55%;
    background:linear-gradient(105deg,transparent,rgba(255,255,255,.28),transparent);
    transition:left .4s ease;
  }
  .stt-btn:hover::before { left:130%; }

  .stt-arrow-icon { animation:stt_arrow 1.8s ease infinite; position:relative; z-index:2; }

  .stt-ring {
    position:absolute; inset:0; border-radius:14px;
    border:2px solid rgba(249,115,22,.6);
    animation:stt_ring 1.8s ease-out infinite;
    pointer-events:none;
  }

  .stt-visible { animation:stt_in .35s cubic-bezier(.34,1.3,.64,1) both; }
  .stt-hidden  { animation:stt_out .28s ease both; pointer-events:none; }

  /* progress ring around the button */
  .stt-progress {
    position:fixed; bottom:22px; right:22px; z-index:9998;
    width:60px; height:60px; pointer-events:none;
    transform:rotate(-90deg);
  }
  .stt-progress-track { fill:none; stroke:rgba(255,255,255,.08); stroke-width:2; }
  .stt-progress-bar   { fill:none; stroke:#F97316; stroke-width:2; stroke-linecap:round;
    transition:stroke-dashoffset .1s linear; }

  @media(max-width:600px){
    .stt-btn { bottom:20px; right:16px; width:44px; height:44px; border-radius:12px; }
    .stt-progress { bottom:14px; right:10px; }
  }
`;

/* scroll % → stroke offset */
const CIRC = 2 * Math.PI * 26; // r=26

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const [mounted, setMounted] = useState(false);

    /* reset scroll on route change */
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    /* track scroll for visibility + progress ring */
    useEffect(() => {
        const onScroll = () => {
            const scrolled = window.scrollY;
            const total = document.documentElement.scrollHeight - window.innerHeight;
            const pct = total > 0 ? scrolled / total : 0;
            setProgress(pct);
            setVisible(scrolled > 300);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* delay mount so stt_out doesnt flash on load */
    useEffect(() => { const t = setTimeout(() => setMounted(true), 500); return () => clearTimeout(t); }, []);

    const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!mounted) return null;

    const offset = CIRC * (1 - progress);

    return (
        <>
            <style>{css}</style>

            {/* SVG progress ring */}
            {visible && (
                <svg className="stt-progress" viewBox="0 0 60 60">
                    <circle className="stt-progress-track" cx="30" cy="30" r="26" />
                    <circle
                        className="stt-progress-bar"
                        cx="30" cy="30" r="26"
                        strokeDasharray={CIRC}
                        strokeDashoffset={offset}
                    />
                </svg>
            )}

            {/* Button */}
            <button
                className={`stt-btn ${visible ? 'stt-visible' : 'stt-hidden'}`}
                onClick={handleClick}
                aria-label="Scroll to top"
            >
                <div className="stt-ring" />
                <KeyboardArrowUpIcon className="stt-arrow-icon" sx={{ fontSize: 24 }} />
            </button>
        </>
    );
}