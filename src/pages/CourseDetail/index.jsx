import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Container, Typography, Stack, Divider } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LockIcon from '@mui/icons-material/Lock';
import CloseIcon from '@mui/icons-material/Close';
import { colors, typography } from '../../theme';
import { cdCSS, heroSx, gridBgSx, orbSx, bodySx } from './styles';
import COURSES_DATA, { SLUG_MAP } from './Data';

const useReveal = (t = 0.07) => {
    const ref = useRef(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: t });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, vis];
};

const Stars = ({ rating, size = 16 }) => (
    <Stack direction="row" gap={.3}>
        {[1, 2, 3, 4, 5].map(i => (
            <StarIcon key={i} sx={{ fontSize: size, color: i <= Math.floor(rating) ? colors.accent.yellow : i - 0.5 <= rating ? colors.accent.yellow : colors.divider }} />
        ))}
    </Stack>
);

const PayModal = ({ course, onClose }) => {
    const [form, setForm] = useState({ name: '', email: '' });
    const [step, setStep] = useState('form');
    const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
    const valid = form.name && form.email;

    const handlePay = () => {
        if (!valid) return;
        setStep('paying');
        setTimeout(() => setStep('success'), 2200);
    };

    return (
        <Box className="cd-modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
            <Box className="cd-modal">
                {/* Top bar */}
                <Box sx={{ height: 4, background: `linear-gradient(90deg,${colors.secondary.dark},${colors.secondary.main},#FB923C,#FCD34D)` }} />

                {step === 'success' ? (
                    <Box sx={{ p: 4, textAlign: 'center' }}>
                        <CheckCircleIcon sx={{ fontSize: 76, color: colors.accent.green, mb: 2 }} />
                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: '1.5rem', fontWeight: 800, color: colors.text.primary, mb: 1 }}>
                            Enrolment Confirmed! 
                        </Typography>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.8, mb: 1 }}>
                            Welcome to <strong>{course.title}</strong>. Check your email at <strong>{form.email}</strong> for your access link and course materials.
                        </Typography>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '.8rem', color: colors.text.disabled, mb: 3 }}>
                            Your ProLearn Academy certificate will be issued upon completion.
                        </Typography>
                        <Box onClick={onClose} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: colors.primary.main, color: 'white', px: 3.5, py: 1.5, borderRadius: '12px', cursor: 'pointer', fontFamily: typography.fontFamily.heading, fontWeight: 700, fontSize: typography.fontSize.sm, transition: 'all .25s', '&:hover': { bgcolor: colors.primary.light } }}>
                            Back to Course
                        </Box>
                    </Box>
                ) : (
                    <Box sx={{ p: { xs: 3, sm: 4 } }}>
                        {/* Header */}
                        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>
                            <Box>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: '1.3rem', fontWeight: 800, color: colors.text.primary, lineHeight: 1.2 }}>
                                    Enrol in {course.short}
                                </Typography>
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.secondary, mt: .4 }}>
                                    {course.title}
                                </Typography>
                            </Box>
                            <Box onClick={onClose} sx={{ cursor: 'pointer', color: colors.text.secondary, '&:hover': { color: colors.text.primary } }}>
                                <CloseIcon />
                            </Box>
                        </Stack>
                        <Box sx={{ bgcolor: colors.background.default, borderRadius: '14px', p: 2, mb: 3, border: `1px solid ${colors.divider}` }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary }}>
                                    {course.title} · {course.dur}
                                </Typography>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: '1.2rem', fontWeight: 800, color: course.color }}>
                                    {course.price}
                                </Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" gap={.6} sx={{ mt: 1 }}>
                                <WorkspacePremiumIcon sx={{ fontSize: 13, color: colors.accent.green }} />
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '.72rem', color: colors.accent.green, fontWeight: 600 }}>
                                    Internationally recognised certificate included
                                </Typography>
                            </Stack>
                        </Box>

                        <Stack spacing={2} sx={{ mb: 3 }}>
                            <Box>
                                <label className="cd-m-label">Full Name *</label>
                                <input className="cd-m-input" placeholder="John Doe" value={form.name} onChange={set('name')} />
                            </Box>
                            <Box>
                                <label className="cd-m-label">Email Address *</label>
                                <input className="cd-m-input" type="email" placeholder="john@example.com" value={form.email} onChange={set('email')} />
                            </Box>
                        </Stack>

                        <button className="cd-pay-btn" onClick={handlePay} disabled={!valid || step === 'paying'}>
                            {step === 'paying' ? (
                                <>Processing payment…</>
                            ) : (
                                <>
                                    <LockIcon sx={{ fontSize: 18 }} />
                                    Pay {course.price} with Paystack
                                </>
                            )}
                        </button>

                        <Stack direction="row" justifyContent="center" alignItems="center" gap={1} sx={{ mt: 2 }}>
                            <LockIcon sx={{ fontSize: 13, color: colors.text.disabled }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '.7rem', color: colors.text.disabled }}>
                                Secured by Paystack · Cards, Bank Transfer & USSD accepted
                            </Typography>
                        </Stack>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

/* ── Curriculum Item ── */
const CurItem = ({ item, idx, vis }) => {
    const [open, setOpen] = useState(idx === 0);
    return (
        <Box className="cd-cur-item" sx={{ opacity: vis ? 1 : 0, animation: vis ? `cd_rise .5s ease ${idx * .07}s both` : 'none' }}>
            <Box className="cd-cur-item-head" onClick={() => setOpen(o => !o)}>
                <Stack direction="row" alignItems="center" gap={1.5}>
                    <Box sx={{ width: 32, height: 32, borderRadius: '10px', bgcolor: `${colors.secondary.main}15`, border: `1px solid ${colors.secondary.main}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: '.65rem', fontWeight: 900, color: colors.secondary.main }}>{String(idx + 1).padStart(2, '0')}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.sm, fontWeight: 800, color: colors.text.primary }}>{item.title}</Typography>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '.73rem', color: colors.text.secondary }}>{item.week} · {item.lessons.length} lessons</Typography>
                    </Box>
                </Stack>
                <ExpandMoreIcon sx={{ color: colors.text.secondary, fontSize: 20, transition: 'transform .25s', transform: open ? 'rotate(180deg)' : 'none' }} />
            </Box>
            {open && (
                <Box className="cd-cur-body">
                    {item.lessons.map((l, i) => (
                        <Stack key={l} direction="row" alignItems="center" gap={1.5} sx={{ py: 1, borderTop: `1px solid ${colors.divider}` }}>
                            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: colors.secondary.main, flexShrink: 0 }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary }}>{l}</Typography>
                        </Stack>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default function CourseDetailPage() {
    const { slug } = useParams();
    const course = Object.values(COURSES_DATA).find(c => c.slug === slug);

    const [overRef, overVis] = useReveal();
    const [curRef, curVis] = useReveal();
    const [revRef, revVis] = useReveal();
    const [modalOpen, setModal] = useState(false);

    useEffect(() => { window.scrollTo(0, 0); }, [slug]);

    if (!course) return (
        <Box sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: '1.5rem', fontWeight: 800, color: colors.text.primary }}>Course not found</Typography>
            <Box component={Link} to="/courses" sx={{ color: colors.secondary.main, fontFamily: typography.fontFamily.body, fontWeight: 600 }}>← Back to courses</Box>
        </Box>
    );

    return (
        <>
            <style>{cdCSS}</style>
            {modalOpen && <PayModal course={course} onClose={() => setModal(false)} />}

            <Box sx={heroSx}>
                <Box sx={gridBgSx} />
                <Box sx={{ ...orbSx('-10%', '-5%', undefined, undefined, { xs: 240, md: 460 }, `${course.color}18`, '0s'), position: 'absolute' }} />
                <Box sx={{ ...orbSx(undefined, undefined, '-12%', '-4%', { xs: 160, md: 340 }, `${colors.accent.teal}12`, '2s'), position: 'absolute' }} />

                {/* Deco rings */}
                <Box sx={{ position: 'absolute', top: '10%', right: '4%', width: { xs: 0, md: 160 }, height: { xs: 0, md: 160 }, display: { xs: 'none', md: 'block' }, pointerEvents: 'none' }}>
                    <Box className="cd-ring-spin" sx={{ position: 'absolute', inset: 0, border: '1px dashed rgba(249,115,22,.2)', borderRadius: '50%' }}>
                        <Box sx={{ position: 'absolute', top: '-4px', left: '46%', width: 8, height: 8, borderRadius: '50%', bgcolor: colors.secondary.main, boxShadow: `0 0 10px ${colors.secondary.main}` }} />
                    </Box>
                    <Box className="cd-ring-spinr" sx={{ position: 'absolute', inset: 18, border: `1px dashed ${course.color}25`, borderRadius: '50%' }}>
                        <Box sx={{ position: 'absolute', bottom: '-4px', left: '46%', width: 7, height: 7, borderRadius: '50%', bgcolor: course.color, boxShadow: `0 0 8px ${course.color}` }} />
                    </Box>
                </Box>

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Box component={Link} to="/courses" sx={{ display: 'inline-flex', alignItems: 'center', gap: .8, color: 'rgba(255,255,255,.45)', fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: 600, textDecoration: 'none', mb: 3, animation: 'cd_rise .5s ease both', transition: 'color .2s', '&:hover': { color: 'rgba(255,255,255,.8)' } }}>
                        <ArrowBackIcon sx={{ fontSize: 15 }} /> All Courses
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr auto' }, gap: { xs: 5, lg: 8 }, alignItems: 'start' }}>

                        <Box>
                            <Stack direction="row" gap={1} flexWrap="wrap" sx={{ mb: 2.5, animation: 'cd_rise .6s ease .05s both' }}>
                                <Box className="cd-badge"><Box className="cd-badge-dot" /><Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: 600, color: colors.secondary.main }}>{course.category}</Typography></Box>
                                <Box sx={{ display: 'inline-flex', alignItems: 'center', px: 2, py: .75, bgcolor: `${course.color}22`, border: `1px solid ${course.color}44`, borderRadius: '100px' }}>
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: 700, color: course.color }}>{course.level}</Typography>
                                </Box>
                            </Stack>

                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' }, fontWeight: 800, color: 'white', lineHeight: 1.05, letterSpacing: '-1.5px', mb: 1.5, animation: 'cd_rise .7s cubic-bezier(.34,1.2,.64,1) .1s both' }}>
                                {course.title}
                            </Typography>
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: { xs: '1rem', md: '1.1rem' }, color: 'rgba(255,255,255,.5)', lineHeight: 1.85, maxWidth: 580, mb: 3, animation: 'cd_rise .7s ease .2s both' }}>
                                {course.tagline}
                            </Typography>

                            <Stack direction="row" gap={3} flexWrap="wrap" sx={{ mb: 3, animation: 'cd_rise .7s ease .28s both' }}>
                                {[
                                    [StarIcon, `${course.rating} (${course.reviewCount} reviews)`, colors.accent.yellow],
                                    [PeopleIcon, `${course.students} enrolled`, 'rgba(255,255,255,.5)'],
                                    [AccessTimeIcon, course.dur, 'rgba(255,255,255,.5)'],
                                    [WorkspacePremiumIcon, 'Certificate included', colors.accent.green],
                                ].map(([Icon, text, clr]) => (
                                    <Stack key={text} direction="row" alignItems="center" gap={.7}>
                                        <Icon sx={{ fontSize: 15, color: clr }} />
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: 600, color: clr }}>{text}</Typography>
                                    </Stack>
                                ))}
                            </Stack>

                            <Stack direction="row" alignItems="center" gap={1.5} sx={{ animation: 'cd_rise .7s ease .34s both' }}>
                                <Box sx={{ width: 38, height: 38, borderRadius: '12px', bgcolor: `${course.color}22`, border: `1px solid ${course.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: '.7rem', fontWeight: 900, color: course.color }}>{course.instructor.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.xs, fontWeight: 700, color: 'white' }}>{course.instructor.name}</Typography>
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '.72rem', color: 'rgba(255,255,255,.4)' }}>{course.instructor.title}</Typography>
                                </Box>
                            </Stack>
                        </Box>
                        <Box sx={{ display: { xs: 'none', lg: 'block' }, width: 320, animation: 'cd_right .7s cubic-bezier(.34,1.2,.64,1) .15s both' }}>
                            <Box className="cd-enrol-card">
                                <Box sx={{ height: 4, background: `linear-gradient(90deg,${colors.secondary.dark},${colors.secondary.main},#FB923C)` }} />
                                <Box sx={{ p: 3 }}>
                                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: '2rem', fontWeight: 800, color: course.color, lineHeight: 1, mb: .4 }}>{course.price}</Typography>
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.secondary, mb: 2.5 }}>One-time payment · Lifetime access</Typography>

                                    <button className="cd-enrol-btn" onClick={() => setModal(true)}>
                                        Enrol Now — Pay with Paystack
                                    </button>

                                    <Divider sx={{ my: 2.5, borderColor: colors.divider }} />

                                    {[
                                        [AccessTimeIcon, course.dur + ' programme'],
                                        [PeopleIcon, course.students + ' students enrolled'],
                                        [WorkspacePremiumIcon, 'Internationally recognised certificate'],
                                        [CheckCircleIcon, 'Lifetime access to materials'],
                                        [LockIcon, 'Secure payment via Paystack'],
                                    ].map(([Icon, text]) => (
                                        <Stack key={text} direction="row" alignItems="center" gap={1.5} sx={{ mb: 1.5 }}>
                                            <Icon sx={{ fontSize: 16, color: colors.accent.green, flexShrink: 0 }} />
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.secondary }}>{text}</Typography>
                                        </Stack>
                                    ))}
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Container>

                {/* Wave */}
                <Box sx={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 2 }}>
                    <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', display: 'block' }}>
                        <path d="M0,36 C360,72 720,0 1080,44 C1260,64 1380,24 1440,36 L1440,72 L0,72 Z" fill="rgba(255,255,255,.07)" />
                        <path d="M0,52 C300,16 700,72 1000,40 C1200,20 1360,58 1440,52 L1440,72 L0,72 Z" fill={colors.background.default} />
                    </svg>
                </Box>
            </Box>

            <Box sx={bodySx}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 340px' }, gap: { xs: 5, lg: 6 }, alignItems: 'start' }}>
                        <Stack spacing={6}>

                          
                            <Box ref={overRef} sx={{ opacity: overVis ? 1 : 0, animation: overVis ? 'cd_rise .6s ease both' : 'none' }}>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: '1.4rem', md: '1.7rem' }, fontWeight: 800, color: colors.text.primary, mb: 2.5 }}>Course Overview</Typography>
                                {course.overview.split('\n\n').map((p, i) => (
                                    <Typography key={i} sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, lineHeight: 1.9, mb: 2 }}>{p}</Typography>
                                ))}

                                <Box sx={{ mt: 3.5, bgcolor: 'white', borderRadius: '20px', p: 3.5, border: `1px solid ${colors.divider}`, boxShadow: '0 4px 20px rgba(10,37,64,.05)' }}>
                                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.md, fontWeight: 800, color: colors.text.primary, mb: 2.5 }}>What You Will Learn</Typography>
                                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5 }}>
                                        {course.outcomes.map((o, i) => (
                                            <Stack key={o} direction="row" alignItems="flex-start" gap={1.5}
                                                sx={{ opacity: overVis ? 1 : 0, animation: overVis ? `cd_rise .5s ease ${.1 + i * .06}s both` : 'none' }}>
                                                <CheckCircleIcon sx={{ fontSize: 18, color: colors.accent.green, flexShrink: 0, mt: .15 }} />
                                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.7 }}>{o}</Typography>
                                            </Stack>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>

                            <Box ref={curRef}>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: '1.4rem', md: '1.7rem' }, fontWeight: 800, color: colors.text.primary, mb: .8, opacity: curVis ? 1 : 0, animation: curVis ? 'cd_rise .6s ease both' : 'none' }}>
                                    Course Curriculum
                                </Typography>
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, mb: 3, opacity: curVis ? 1 : 0, animation: curVis ? 'cd_rise .6s ease .08s both' : 'none' }}>
                                    {course.curriculum.reduce((a, c) => a + c.lessons.length, 0)} lessons across {course.curriculum.length} modules
                                </Typography>
                                <Stack spacing={1.5}>
                                    {course.curriculum.map((item, i) => <CurItem key={item.title} item={item} idx={i} vis={curVis} />)}
                                </Stack>
                            </Box>

                            <Box ref={revRef}>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: '1.4rem', md: '1.7rem' }, fontWeight: 800, color: colors.text.primary, mb: 3, opacity: revVis ? 1 : 0, animation: revVis ? 'cd_rise .6s ease both' : 'none' }}>
                                    Student Reviews
                                </Typography>

                                <Box sx={{ bgcolor: 'white', borderRadius: '20px', p: 3.5, border: `1px solid ${colors.divider}`, mb: 3, opacity: revVis ? 1 : 0, animation: revVis ? 'cd_rise .6s ease .07s both' : 'none' }}>
                                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'auto 1fr' }, gap: 3, alignItems: 'center' }}>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: '3.5rem', fontWeight: 800, color: colors.text.primary, lineHeight: 1 }}>{course.rating}</Typography>
                                            <Stars rating={course.rating} size={20} />
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '.75rem', color: colors.text.secondary, mt: .5 }}>{course.reviewCount} reviews</Typography>
                                        </Box>
                                        <Box>
                                            {course.ratingBreakdown.map((rb, i) => (
                                                <Stack key={rb.stars} direction="row" alignItems="center" gap={1.5} sx={{ mb: .8, opacity: revVis ? 1 : 0, animation: revVis ? `cd_statIn .4s ease ${i * .06}s both` : 'none' }}>
                                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '.75rem', color: colors.text.secondary, width: 8, flexShrink: 0 }}>{rb.stars}</Typography>
                                                    <StarIcon sx={{ fontSize: 13, color: colors.accent.yellow, flexShrink: 0 }} />
                                                    <Box className="cd-rating-bar">
                                                        <Box className="cd-rating-fill" style={{ '--w': `${rb.pct}%`, width: revVis ? `${rb.pct}%` : '0%' }} />
                                                    </Box>
                                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '.75rem', color: colors.text.secondary, width: 28, flexShrink: 0 }}>{rb.pct}%</Typography>
                                                </Stack>
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5 }}>
                                    {course.reviews.map((r, i) => (
                                        <Box key={r.name} className="cd-review" sx={{ opacity: revVis ? 1 : 0, animation: revVis ? `cd_rise .5s ease ${.1 + i * .1}s both` : 'none' }}>
                                            <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 1.5 }}>
                                                <Box sx={{ width: 42, height: 42, borderRadius: '14px', bgcolor: `${r.color}20`, border: `1.5px solid ${r.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: '.7rem', fontWeight: 900, color: r.color }}>{r.avatar}</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.sm, fontWeight: 800, color: colors.text.primary }}>{r.name}</Typography>
                                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '.73rem', color: colors.text.secondary }}>{r.role}</Typography>
                                                </Box>
                                                <Box sx={{ ml: 'auto' }}><Stars rating={r.rating} size={13} /></Box>
                                            </Stack>
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.8, fontStyle: 'italic' }}>
                                                "{r.text}"
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>

                        </Stack>

                        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                            <Box className="cd-enrol-card">
                                <Box sx={{ height: 4, background: `linear-gradient(90deg,${colors.secondary.dark},${colors.secondary.main},#FB923C)` }} />
                                <Box sx={{ p: 3 }}>
                                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: '2rem', fontWeight: 800, color: course.color, lineHeight: 1, mb: .4 }}>{course.price}</Typography>
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.secondary, mb: 2.5 }}>One-time payment · Lifetime access</Typography>

                                    <button className="cd-enrol-btn" onClick={() => setModal(true)}>
                                        Enrol Now — Pay with Paystack
                                    </button>

                                    <Divider sx={{ my: 2.5, borderColor: colors.divider }} />

                                    {[
                                        [AccessTimeIcon, course.dur + ' programme'],
                                        [PeopleIcon, course.students + ' students enrolled'],
                                        [WorkspacePremiumIcon, 'Internationally recognised certificate'],
                                        [CheckCircleIcon, 'Lifetime access to materials'],
                                        [LockIcon, 'Secure payment via Paystack'],
                                    ].map(([Icon, text]) => (
                                        <Stack key={text} direction="row" alignItems="center" gap={1.5} sx={{ mb: 1.5 }}>
                                            <Icon sx={{ fontSize: 16, color: colors.accent.green, flexShrink: 0 }} />
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.secondary }}>{text}</Typography>
                                        </Stack>
                                    ))}
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Container>
            </Box>

            <Box sx={{ display: { xs: 'flex', lg: 'none' }, position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200, bgcolor: 'white', borderTop: `1px solid ${colors.divider}`, p: 2, gap: 2, alignItems: 'center', boxShadow: '0 -8px 30px rgba(10,37,64,.12)' }}>
                <Box>
                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: '1.3rem', fontWeight: 800, color: course.color, lineHeight: 1 }}>{course.price}</Typography>
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '.7rem', color: colors.text.secondary }}>One-time · Lifetime access</Typography>
                </Box>
                <button className="cd-enrol-btn" style={{ flex: 1 }} onClick={() => setModal(true)}>
                    Enrol Now · Paystack
                </button>
            </Box>
        </>
    );
}