import { Box, Container, Typography, Stack } from '@mui/material';
import SchoolIcon        from '@mui/icons-material/School';
import FacebookIcon      from '@mui/icons-material/Facebook';
import InstagramIcon     from '@mui/icons-material/Instagram';
import LinkedInIcon      from '@mui/icons-material/LinkedIn';
import YouTubeIcon       from '@mui/icons-material/YouTube';
import TwitterIcon       from '@mui/icons-material/Twitter';
import PhoneIcon         from '@mui/icons-material/Phone';
import EmailIcon         from '@mui/icons-material/Email';
import LocationOnIcon    from '@mui/icons-material/LocationOn';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TrendingUpIcon    from '@mui/icons-material/TrendingUp';
import GroupsIcon        from '@mui/icons-material/Groups';
import { Link }          from 'react-router-dom';
import { colors, typography } from '../../theme';

const css = `
  @keyframes ft_pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.5)} }

  .ft-link {
    display:flex; align-items:center; gap:8px;
    text-decoration:none; color:rgba(255,255,255,.4);
    font-size:.8rem; font-family:'Inter',sans-serif;
    padding:5px 0; transition:color .22s, gap .2s;
  }
  .ft-link:hover { color:#F97316; gap:13px; }
  .ft-link-dot {
    width:5px; height:5px; border-radius:50%;
    background:rgba(249,115,22,.35); flex-shrink:0;
    transition:background .22s, transform .22s;
  }
  .ft-link:hover .ft-link-dot { background:#F97316; transform:scale(1.6); }

  .ft-social {
    width:36px; height:36px; border-radius:9px;
    border:1px solid rgba(255,255,255,.08);
    background:rgba(255,255,255,.03);
    color:rgba(255,255,255,.38);
    display:flex; align-items:center; justify-content:center;
    cursor:pointer; text-decoration:none;
    transition:all .26s cubic-bezier(.34,1.3,.64,1);
  }
  .ft-social:hover {
    background:#F97316; border-color:#F97316; color:white;
    transform:translateY(-4px) scale(1.1);
    box-shadow:0 8px 22px rgba(249,115,22,.32);
  }

  .ft-input {
    width:100%; box-sizing:border-box; padding:10px 14px;
    background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.09);
    border-radius:9px; color:white;
    font-size:.78rem; font-family:'Inter',sans-serif;
    outline:none; transition:border-color .2s, background .2s;
  }
  .ft-input::placeholder { color:rgba(255,255,255,.22); }
  .ft-input:focus { border-color:#F97316; background:rgba(255,255,255,.08); }

  .ft-sub {
    width:100%; padding:10px; border:none; border-radius:9px; cursor:pointer;
    background:linear-gradient(130deg,#EA580C,#F97316,#FBBF24);
    color:white; font-family:'Plus Jakarta Sans',sans-serif;
    font-size:.78rem; font-weight:700; letter-spacing:.3px;
    transition:transform .26s cubic-bezier(.34,1.3,.64,1), box-shadow .22s;
    position:relative; overflow:hidden;
  }
  .ft-sub:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(249,115,22,.35); }
  .ft-sub::after {
    content:''; position:absolute; top:0; left:-80%; bottom:0; width:60%;
    background:linear-gradient(105deg,transparent,rgba(255,255,255,.22),transparent);
    transition:left .42s ease;
  }
  .ft-sub:hover::after { left:130%; }

  .ft-stat {
    background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.07);
    border-radius:13px; padding:16px 18px;
    display:flex; align-items:center; gap:13px;
    transition:border-color .22s, background .22s;
  }
  .ft-stat:hover { background:rgba(249,115,22,.05); border-color:rgba(249,115,22,.16); }
`;

const COURSES = [
  { label:'Human Resources Management',      path:'/courses/1' },
  { label:'Project Management Professional', path:'/courses/2' },
  { label:'Health Safety & Environment',     path:'/courses/3' },
  { label:'Customer Relations Management',   path:'/courses/6' },
  { label:'Business Management Professional',path:'/courses/7' },
  { label:'Information Security Management', path:'/courses/10' },
];

const LINKS = [
  { label:'Home',        path:'/' },
  { label:'All Courses', path:'/courses' },
  { label:'About Us',    path:'/about' },
  { label:'Contact',     path:'/contact' },
];

const SOCIALS = [
  { Icon:FacebookIcon,  href:'#', label:'Facebook'  },
  { Icon:TwitterIcon,   href:'#', label:'Twitter'   },
  { Icon:InstagramIcon, href:'#', label:'Instagram' },
  { Icon:LinkedInIcon,  href:'#', label:'LinkedIn'  },
  { Icon:YouTubeIcon,   href:'#', label:'YouTube'   },
];

const STATS = [
  { Icon:GroupsIcon,           value:'12,000+', label:'Professionals Certified', color:'#F97316' },
  { Icon:WorkspacePremiumIcon, value:'10+',     label:'Certifications Offered',  color:'#0EA5E9' },
  { Icon:TrendingUpIcon,       value:'4.8★',    label:'Average Rating',          color:'#22C55E' },
];

const CONTACTS = [
  { Icon:PhoneIcon,      text:'+234 (0) 801 234 5678' },
  { Icon:EmailIcon,      text:'info@cheybisglobalresources.com' },
  { Icon:LocationOnIcon, text:'12 Admiralty Way, Lagos, Nigeria' },
];

const ColHead = ({ children }) => (
  <Box sx={{ display:'flex', alignItems:'center', gap:1.5, mb:2.5 }}>
    <Typography sx={{
      fontFamily:typography.fontFamily.heading, fontSize:'.63rem', fontWeight:800,
      color:'rgba(255,255,255,.85)', letterSpacing:2.5, textTransform:'uppercase', flexShrink:0,
    }}>
      {children}
    </Typography>
    <Box sx={{ flex:1, height:'1px', background:'rgba(255,255,255,.07)' }} />
  </Box>
);

export default function Footer() {
  return (
    <>
      <style>{css}</style>
      <Box sx={{
        bgcolor: colors.primary.dark,
        position:'relative', overflow:'hidden',
        '&::before': {
          content:'""', position:'absolute', top:0, left:0, right:0, height:2,
          background:`linear-gradient(90deg,transparent,${colors.secondary.main} 30%,#FBBF24 50%,${colors.secondary.main} 70%,transparent)`,
        },
        '&::after': {
          content:'""', position:'absolute', inset:0,
          backgroundImage:`radial-gradient(rgba(255,255,255,.023) 1px,transparent 1px)`,
          backgroundSize:'26px 26px', pointerEvents:'none',
        },
      }}>

        {/* ── STATS BAND ── */}
        <Box sx={{ borderBottom:'1px solid rgba(255,255,255,.05)', position:'relative', zIndex:1 }}>
          <Container maxWidth="lg">
            <Box sx={{ py:3.5, display:'grid', gridTemplateColumns:{xs:'1fr',sm:'repeat(3,1fr)'}, gap:2 }}>
              {STATS.map(({ Icon, value, label, color }) => (
                <Box key={label} className="ft-stat">
                  <Box sx={{ width:40, height:40, borderRadius:'11px', bgcolor:`${color}18`, border:`1px solid ${color}28`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <Icon sx={{ fontSize:18, color }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontFamily:typography.fontFamily.accent, fontSize:'1.15rem', fontWeight:800, color:'white', lineHeight:1 }}>{value}</Typography>
                    <Typography sx={{ fontFamily:typography.fontFamily.body, fontSize:'.67rem', color:'rgba(255,255,255,.35)', mt:.3 }}>{label}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ── MAIN GRID ── */}
        <Container maxWidth="lg" sx={{ position:'relative', zIndex:1 }}>
          <Box sx={{
            pt:{xs:6,md:8},
            display:'grid',
            gridTemplateColumns:{ xs:'1fr', sm:'1fr 1fr', md:'1.6fr 1.25fr 0.9fr 1.35fr' },
            gap:{ xs:5, sm:4, md:'36px' },
          }}>

            {/* COL 1 — Brand */}
            <Box>
              <Stack direction="row" alignItems="center" gap={1.4} sx={{ mb:2.5 }}>
                <Box sx={{
                  width:44, height:44, borderRadius:'13px',
                  background:`linear-gradient(135deg,${colors.secondary.dark},${colors.secondary.main})`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  boxShadow:`0 6px 18px rgba(249,115,22,.26)`,
                }}>
                  <SchoolIcon sx={{ fontSize:22, color:'white' }} />
                </Box>
                <Box>
                  <Typography sx={{ fontFamily:typography.fontFamily.accent, fontWeight:800, color:'white', lineHeight:1, fontSize:'1.1rem' }}>Cheybis</Typography>
                  <Typography sx={{ fontFamily:typography.fontFamily.body, fontSize:'.5rem', color:colors.secondary.main, letterSpacing:2.5, textTransform:'uppercase', fontWeight:700 }}>GLOBAL RESOURCES</Typography>
                </Box>
              </Stack>

              <Typography sx={{ fontFamily:typography.fontFamily.body, fontSize:'.77rem', color:'rgba(255,255,255,.36)', lineHeight:1.85, mb:3, maxWidth:230 }}>
                Empowering professionals across Africa with internationally recognised certifications — flexible, affordable and career-defining.
              </Typography>

              <Stack gap={1.3} sx={{ mb:3 }}>
                {CONTACTS.map(({ Icon, text }) => (
                  <Stack key={text} direction="row" alignItems="flex-start" gap={1.1}>
                    <Box sx={{ width:25, height:25, borderRadius:'7px', bgcolor:'rgba(249,115,22,.09)', border:'1px solid rgba(249,115,22,.16)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, mt:.1 }}>
                      <Icon sx={{ fontSize:11, color:colors.secondary.main }} />
                    </Box>
                    <Typography sx={{ fontFamily:typography.fontFamily.body, fontSize:'.72rem', color:'rgba(255,255,255,.36)', lineHeight:1.55 }}>{text}</Typography>
                  </Stack>
                ))}
              </Stack>

              <Stack direction="row" gap={.85} flexWrap="wrap">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <a key={label} href={href} className="ft-social" aria-label={label}>
                    <Icon style={{ fontSize:15 }} />
                  </a>
                ))}
              </Stack>
            </Box>

            {/* COL 2 — Courses */}
            <Box>
              <ColHead>Courses</ColHead>
              <Stack gap={0}>
                {COURSES.map(({ label, path }) => (
                  <Link key={label} to={path} className="ft-link">
                    <Box className="ft-link-dot" />{label}
                  </Link>
                ))}
              </Stack>
            </Box>

            {/* COL 3 — Navigate */}
            <Box>
              <ColHead>Navigate</ColHead>
              <Stack gap={0}>
                {LINKS.map(({ label, path }) => (
                  <Link key={label} to={path} className="ft-link">
                    <Box className="ft-link-dot" />{label}
                  </Link>
                ))}
              </Stack>

              {/* Live badge */}
              <Box sx={{ mt:3.5, p:1.5, borderRadius:'11px', border:'1px solid rgba(249,115,22,.14)', bgcolor:'rgba(249,115,22,.05)' }}>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Box sx={{ width:7, height:7, borderRadius:'50%', bgcolor:colors.accent.green, animation:'ft_pulse 2s ease infinite', flexShrink:0 }} />
                  <Typography sx={{ fontFamily:typography.fontFamily.body, fontSize:'.62rem', fontWeight:700, color:'rgba(255,255,255,.45)', letterSpacing:.4 }}>Enrolment Open</Typography>
                </Stack>
                <Typography sx={{ fontFamily:typography.fontFamily.body, fontSize:'.66rem', color:'rgba(255,255,255,.25)', mt:.5, lineHeight:1.5 }}>
                  New cohorts every month
                </Typography>
              </Box>
            </Box>

            {/* COL 4 — Newsletter */}
            <Box>
              <ColHead>Stay Updated</ColHead>
              <Typography sx={{ fontFamily:typography.fontFamily.body, fontSize:'.75rem', color:'rgba(255,255,255,.34)', lineHeight:1.8, mb:2.5 }}>
                Get notified about new courses, career tips and exclusive early-bird offers.
              </Typography>
              <Stack gap={1.1}>
                <input className="ft-input" placeholder="Your email address" type="email" />
                <button className="ft-sub">Get Updates →</button>
              </Stack>
              <Typography sx={{ fontFamily:typography.fontFamily.body, fontSize:'.61rem', color:'rgba(255,255,255,.17)', mt:1.2, lineHeight:1.6 }}>
                No spam · Unsubscribe any time
              </Typography>
            </Box>

          </Box>

          {/* ── BOTTOM BAR ── */}
          <Box sx={{ borderTop:'1px solid rgba(255,255,255,.05)', mt:{xs:6,md:8}, py:2.5 }}>
            <Stack direction={{xs:'column',sm:'row'}} alignItems="center" justifyContent="space-between" gap={1.5}>
              <Typography sx={{ fontFamily:typography.fontFamily.body, fontSize:'.69rem', color:'rgba(255,255,255,.17)' }}>
                © {new Date().getFullYear()} Cheybis Global · All rights reserved.
              </Typography>
              <Stack direction="row" gap={3}>
                {['Privacy Policy','Terms of Service'].map(t => (
                  <Typography key={t} sx={{ fontFamily:typography.fontFamily.body, fontSize:'.69rem', color:'rgba(255,255,255,.17)', cursor:'pointer', transition:'color .2s', '&:hover':{ color:colors.secondary.main } }}>
                    {t}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Container>

      </Box>
    </>
  );
}