import { useEffect, useState } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { colors, typography } from '../../theme';

const css = `
  @keyframes nf_float {
    0%,100%{transform:translateY(0) rotate(-2deg)}
    50%{transform:translateY(-18px) rotate(2deg)}
  }
  @keyframes nf_orbit1 {
    from{transform:rotate(0deg) translateX(90px) rotate(0deg)}
    to{transform:rotate(360deg) translateX(90px) rotate(-360deg)}
  }
  @keyframes nf_orbit2 {
    from{transform:rotate(180deg) translateX(130px) rotate(-180deg)}
    to{transform:rotate(540deg) translateX(130px) rotate(-540deg)}
  }
  @keyframes nf_pulse {
    0%,100%{opacity:.4;transform:scale(1)}
    50%{opacity:.8;transform:scale(1.08)}
  }
  @keyframes nf_rise {
    from{opacity:0;transform:translateY(28px)}
    to{opacity:1;transform:translateY(0)}
  }
  @keyframes nf_glitch {
    0%,90%,100%{transform:translate(0)}
    92%{transform:translate(-4px, 2px)}
    94%{transform:translate(4px,-2px)}
    96%{transform:translate(-2px,0)}
    98%{transform:translate(2px,1px)}
  }
  @keyframes nf_count {
    from{opacity:0;transform:scale(.6) rotate(-8deg)}
    to{opacity:1;transform:scale(1) rotate(0deg)}
  }
  @keyframes nf_shimmer {
    0%{background-position:200% center}
    100%{background-position:-200% center}
  }
  @keyframes nf_spin {
    from{transform:rotate(0deg)} to{transform:rotate(360deg)}
  }
  @keyframes nf_spin_rev {
    from{transform:rotate(0deg)} to{transform:rotate(-360deg)}
  }
  @keyframes nf_blink {
    0%,100%{opacity:1} 50%{opacity:0}
  }

  .nf-wrap {
    min-height:100vh;
    background: linear-gradient(160deg, #061828 0%, #0A2540 45%, #0d2e50 100%);
    display:flex; align-items:center; justify-content:center;
    position:relative; overflow:hidden;
  }

  /* dot grid */
  .nf-wrap::before {
    content:''; position:absolute; inset:0;
    background-image:radial-gradient(rgba(255,255,255,.035) 1px, transparent 1px);
    background-size:28px 28px; pointer-events:none;
  }

  /* ambient orbs */
  .nf-orb1 {
    position:absolute; width:500px; height:500px; border-radius:50%;
    background:radial-gradient(circle, rgba(249,115,22,.12) 0%, transparent 65%);
    top:-100px; right:-100px; pointer-events:none; animation:nf_pulse 5s ease infinite;
  }
  .nf-orb2 {
    position:absolute; width:400px; height:400px; border-radius:50%;
    background:radial-gradient(circle, rgba(14,165,233,.1) 0%, transparent 65%);
    bottom:-80px; left:-80px; pointer-events:none; animation:nf_pulse 6s ease 1s infinite;
  }

  /* the giant 404 */
  .nf-404 {
    font-family:'Sora','Inter',sans-serif;
    font-size:clamp(7rem,22vw,16rem);
    font-weight:900; line-height:1;
    background: linear-gradient(135deg, #F97316 0%, #FBBF24 40%, #F97316 60%, rgba(255,255,255,.15) 100%);
    background-size:300% auto;
    -webkit-background-clip:text; background-clip:text;
    -webkit-text-fill-color:transparent;
    animation:nf_shimmer 4s linear infinite, nf_count .7s cubic-bezier(.34,1.5,.64,1) both;
    letter-spacing:-4px; user-select:none;
  }
  .nf-404-glitch {
    position:relative; display:inline-block;
    animation:nf_glitch 8s ease infinite;
  }

  /* floating card */
  .nf-card {
    position:absolute; background:rgba(255,255,255,.06);
    border:1px solid rgba(255,255,255,.1); border-radius:14px;
    padding:10px 16px; backdrop-filter:blur(8px);
    font-family:'Inter',sans-serif; font-size:.72rem;
    color:rgba(255,255,255,.5); white-space:nowrap;
    pointer-events:none;
  }
  .nf-card-1 { top:18%; left:6%; animation:nf_float 5.5s ease infinite; }
  .nf-card-2 { top:22%; right:7%; animation:nf_float 4.8s ease .8s infinite; }
  .nf-card-3 { bottom:28%; left:5%; animation:nf_float 6s ease .4s infinite; display:none; }

  /* orbit rings */
  .nf-rings {
    position:relative; width:280px; height:280px;
    display:flex; align-items:center; justify-content:center;
    flex-shrink:0;
  }
  .nf-ring {
    position:absolute; border-radius:50%;
    border:1px solid rgba(249,115,22,.18);
  }
  .nf-ring-1 { width:180px; height:180px; animation:nf_spin 18s linear infinite; }
  .nf-ring-2 { width:260px; height:260px; animation:nf_spin_rev 28s linear infinite;
    border-color:rgba(14,165,233,.14); }
  .nf-ring-dot1 {
    position:absolute; width:10px; height:10px; border-radius:50%;
    background:#F97316; box-shadow:0 0 12px #F97316;
    top:-5px; left:50%; transform:translateX(-50%);
  }
  .nf-ring-dot2 {
    position:absolute; width:7px; height:7px; border-radius:50%;
    background:#0EA5E9; box-shadow:0 0 10px #0EA5E9;
    top:-3.5px; left:50%; transform:translateX(-50%);
  }
  .nf-center-icon {
    width:80px; height:80px; border-radius:22px;
    background:linear-gradient(135deg, #EA580C, #F97316);
    display:flex; align-items:center; justify-content:center;
    box-shadow:0 12px 40px rgba(249,115,22,.35);
    position:relative; z-index:2;
  }

  /* content */
  .nf-content { animation:nf_rise .7s ease .1s both; }
  .nf-subtitle { animation:nf_rise .7s ease .2s both; }
  .nf-desc { animation:nf_rise .7s ease .3s both; }
  .nf-actions { animation:nf_rise .7s ease .4s both; }

  /* buttons */
  .nf-btn-primary {
    display:inline-flex; align-items:center; gap:8px;
    background:linear-gradient(135deg,#EA580C,#F97316,#FB923C);
    color:white; text-decoration:none; border:none; cursor:pointer;
    font-family:'Plus Jakarta Sans',sans-serif; font-size:.85rem; font-weight:700;
    padding:13px 26px; border-radius:12px;
    transition:transform .26s cubic-bezier(.34,1.3,.64,1), box-shadow .22s;
    box-shadow:0 8px 28px rgba(249,115,22,.3);
    position:relative; overflow:hidden;
  }
  .nf-btn-primary:hover { transform:translateY(-3px); box-shadow:0 14px 36px rgba(249,115,22,.4); }
  .nf-btn-primary::after {
    content:''; position:absolute; top:0; left:-80%; bottom:0; width:55%;
    background:linear-gradient(105deg,transparent,rgba(255,255,255,.22),transparent);
    transition:left .4s ease;
  }
  .nf-btn-primary:hover::after { left:130%; }

  .nf-btn-outline {
    display:inline-flex; align-items:center; gap:8px;
    background:rgba(255,255,255,.05); color:rgba(255,255,255,.7);
    text-decoration:none; border:1px solid rgba(255,255,255,.14); cursor:pointer;
    font-family:'Plus Jakarta Sans',sans-serif; font-size:.85rem; font-weight:600;
    padding:13px 26px; border-radius:12px;
    transition:all .24s ease;
  }
  .nf-btn-outline:hover {
    background:rgba(255,255,255,.1); border-color:rgba(255,255,255,.28);
    color:white; transform:translateY(-2px);
  }

  /* counter */
  .nf-countdown {
    font-family:'Sora',sans-serif; font-size:.72rem;
    color:rgba(255,255,255,.3); display:flex; align-items:center; gap:5px;
  }
  .nf-countdown-num {
    color:#F97316; font-weight:700; min-width:14px;
    display:inline-block; text-align:center;
  }
  .nf-cursor { display:inline-block; animation:nf_blink 1s step-end infinite; color:#F97316; }

  @media(min-width:900px){.nf-card-3{display:block;}}
`;

export default function NotFoundPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [countdown, setCountdown] = useState(10);
    const [typed, setTyped] = useState('');
    const fullPath = location.pathname;

    /* auto-redirect countdown */
    useEffect(() => {
        if (countdown <= 0) { navigate('/'); return; }
        const t = setTimeout(() => setCountdown(c => c - 1), 1000);
        return () => clearTimeout(t);
    }, [countdown, navigate]);

    /* typewriter effect for the wrong path */
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i <= fullPath.length) { setTyped(fullPath.slice(0, i)); i++; }
            else clearInterval(interval);
        }, 60);
        return () => clearInterval(interval);
    }, [fullPath]);

    return (
        <>
            <style>{css}</style>
            <div className="nf-wrap">
                {/* ambient orbs */}
                <div className="nf-orb1" /><div className="nf-orb2" />

                {/* floating hint cards */}
                <div className="nf-card nf-card-1">📚 Course not found</div>
                <div className="nf-card nf-card-2">🔍 Let us help you</div>
                <div className="nf-card nf-card-3">🎓 ProLearn Academy</div>

                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, py: 6 }}>
                    <Stack alignItems="center" textAlign="center" gap={0}>

                        {/* Rings + icon */}
                        <Box className="nf-rings" sx={{ mb: 3, animation: 'nf_rise .6s ease both' }}>
                            <div className="nf-ring nf-ring-1"><div className="nf-ring-dot1" /></div>
                            <div className="nf-ring nf-ring-2"><div className="nf-ring-dot2" /></div>
                            <div className="nf-center-icon">
                                <SchoolIcon sx={{ fontSize: 36, color: 'white' }} />
                            </div>
                        </Box>

                        {/* 404 */}
                        <div className="nf-content">
                            <div className="nf-404-glitch">
                                <span className="nf-404">404</span>
                            </div>
                        </div>

                        {/* headline */}
                        <Box className="nf-subtitle" sx={{ mt: 1, mb: 2 }}>
                            <Typography sx={{
                                fontFamily: typography.fontFamily.accent,
                                fontSize: { xs: '1.5rem', md: '2rem' },
                                fontWeight: 800, color: 'white', lineHeight: 1.2,
                            }}>
                                Page not found, brr 👀
                            </Typography>
                        </Box>

                        {/* typed wrong path */}
                        <Box className="nf-desc" sx={{
                            bgcolor: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)',
                            borderRadius: '10px', px: 2.5, py: 1.2, mb: 2,
                            fontFamily: '"JetBrains Mono","Courier New",monospace',
                            fontSize: { xs: '.72rem', md: '.82rem' },
                            color: 'rgba(255,255,255,.45)',
                            display: 'flex', alignItems: 'center', gap: 1,
                        }}>
                            <Box component="span" sx={{ color: 'rgba(249,115,22,.6)', fontWeight: 700 }}>GET</Box>
                            <Box component="span" sx={{ color: 'rgba(255,255,255,.7)' }}>{typed}</Box>
                            <span className="nf-cursor">|</span>
                            <Box component="span" sx={{ ml: 'auto', color: '#ef4444', fontWeight: 700, fontSize: '.7rem' }}>404</Box>
                        </Box>

                        <Box className="nf-desc" sx={{ mb: 4 }}>
                            <Typography sx={{
                                fontFamily: typography.fontFamily.body,
                                fontSize: { xs: '.82rem', md: '.9rem' },
                                color: 'rgba(255,255,255,.42)', lineHeight: 1.8,
                                maxWidth: 380,
                            }}>
                                The page you are looking for does not exist or has been moved. Head back to safety below.
                            </Typography>
                        </Box>

                        {/* Action buttons */}
                        <Stack className="nf-actions" direction={{ xs: 'column', sm: 'row' }} gap={2} sx={{ mb: 3.5 }}>
                            <Link to="/" className="nf-btn-primary">
                                <HomeIcon style={{ fontSize: 18 }} />
                                Back to Home
                            </Link>
                            <Link to="/courses" className="nf-btn-outline">
                                <SearchIcon style={{ fontSize: 18 }} />
                                Browse Courses
                            </Link>
                        </Stack>

                        {/* Countdown */}
                        <Box sx={{ animation: 'nf_rise .7s ease .5s both' }}>
                            <div className="nf-countdown">
                                <span>Redirecting to home in</span>
                                <span className="nf-countdown-num">{countdown}</span>
                                <span>seconds...</span>
                            </div>
                        </Box>

                    </Stack>
                </Container>
            </div>
        </>
    );
}