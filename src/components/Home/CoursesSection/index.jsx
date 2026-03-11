import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Link } from 'react-router-dom';
import { colors, typography } from '../../../theme';
import { CTAButton, SectionLabel, SectionHeading, TagChip } from '../../../components/common';
import { keyframes, wrapSx, cardSx, topBarSx, bannerSx, orbSx, shortTextSx, priceSx, arrowBtnSx, bodySx, titleSx, descSx, metaSx, enrolSx } from './styles';

const COURSES = [
    { id: 1, slug: 'human-resources-management', title: 'Human Resources Management', short: 'HRM', tag: 'orange', dur: '6 Wks', students: '1,240', rating: 4.9, level: 'Intermediate', price: '₦45k', color: '#F97316', bg: 'linear-gradient(135deg,#FEF3C7,#FED7AA)', desc: 'Master people management, recruitment, performance appraisals and HR strategy for modern organisations.' },
    { id: 2, slug: 'project-management-professional', title: 'Project Management Professional', short: 'PMP', tag: 'primary', dur: '8 Wks', students: '2,100', rating: 4.8, level: 'Advanced', price: '₦65k', color: colors.primary.main, bg: 'linear-gradient(135deg,#DBEAFE,#BFDBFE)', desc: 'Industry-recognised PMP certification prep covering agile, waterfall and hybrid project frameworks.' },
    { id: 3, slug: 'health-safety-environment-i', title: 'Health Safety & Environment', short: 'HSE', tag: 'green', dur: '5 Wks', students: '980', rating: 4.7, level: 'Beginner', price: '₦35k', color: colors.accent.green, bg: 'linear-gradient(135deg,#DCFCE7,#BBF7D0)', desc: 'Levels 1–3: workplace safety, risk assessment and environmental compliance for every workplace.' },
    { id: 4, slug: 'customer-relations-management', title: 'Customer Relations Management', short: 'CRM', tag: 'teal', dur: '4 Wks', students: '760', rating: 4.8, level: 'Intermediate', price: '₦38k', color: colors.accent.teal, bg: 'linear-gradient(135deg,#E0F2FE,#BAE6FD)', desc: 'Build exceptional customer experiences, retention strategies and CRM system mastery.' },
];

/* ── course card ── */
const CourseCard = ({ course, idx, vis }) => (
    <Box
        className="cs-card"
        component={Link}
        to={`/courses/${course.slug}`}
        sx={{
            ...cardSx(idx * 0.5),
            opacity: vis ? 1 : 0,
            transform: vis ? undefined : 'translateY(70px) scale(0.92)',
            transition: `opacity .6s ease ${idx * 0.12}s, transform .6s cubic-bezier(.34,1.2,.64,1) ${idx * 0.12}s`,
        }}
    >
        {/* top accent bar */}
        <Box sx={topBarSx(course.color)} />

        {/* banner */}
        <Box sx={bannerSx(course.bg)}>
            <Box sx={orbSx(80, -10, -10, undefined, undefined, course.color, '0s')} />
            <Box sx={orbSx(50, undefined, undefined, 20, 10, course.color, '1.3s')} />
            <Box sx={orbSx(35, '40%', '30%', undefined, undefined, course.color, '2.6s')} />

            <Typography sx={shortTextSx(course.color)}>{course.short}</Typography>

            <Box sx={{ position: 'absolute', top: 12, left: 14, zIndex: 5 }}>
                <TagChip label={course.level} color={course.tag} />
            </Box>
            <Box sx={priceSx(course.color)}>
                <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: '.68rem', fontWeight: 800, color: 'white' }}>{course.price}</Typography>
            </Box>

            {/* stars */}
            <Stack direction="row" alignItems="center" gap={.3} sx={{ position: 'absolute', bottom: 14, left: 14, zIndex: 5 }}>
                {[...Array(5)].map((_, i) => <StarIcon key={i} sx={{ fontSize: 11, color: colors.accent.yellow }} />)}
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '.64rem', fontWeight: 700, color: colors.text.primary, ml: .6 }}>{course.rating}</Typography>
            </Stack>

            <Box sx={arrowBtnSx(course.color)}>
                <ArrowForwardIcon sx={{ fontSize: 15, color: 'white' }} />
            </Box>
        </Box>

        {/* body */}
        <Box sx={bodySx}>
            <Typography sx={titleSx}>{course.title}</Typography>
            <Typography sx={descSx}>{course.desc}</Typography>

            <Stack direction="row" gap={2} sx={{ mt: 'auto' }}>
                {[
                    [AccessTimeIcon, course.dur],
                    [PeopleIcon, course.students],
                    [WorkspacePremiumIcon, 'Certificate'],
                ].map(([Icon, label]) => (
                    <Stack key={label} direction="row" alignItems="center" gap={.5}>
                        <Icon sx={{ fontSize: 12, color: colors.text.disabled }} />
                        <Typography sx={metaSx}>{label}</Typography>
                    </Stack>
                ))}
            </Stack>

            <Box sx={enrolSx(course.color)}>
                <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: '.78rem', fontWeight: 800, color: 'white' }}>Enrol Now</Typography>
                <ArrowForwardIcon sx={{ fontSize: 14, color: 'white' }} />
            </Box>
        </Box>
    </Box>
);

/* ── section ── */
const CoursesSection = () => {
    const ref = useRef(null);
    const [vis, setVis] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
            { threshold: 0.06 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <>
            <GlobalStyles styles={keyframes} />
            <Box ref={ref} sx={wrapSx}>
                <Container maxWidth="xl">

                    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                        <SectionLabel>Our Programmes</SectionLabel>
                        <SectionHeading sx={{ maxWidth: 520, mx: 'auto' }}>
                            Certifications That Actually Move Careers
                        </SectionHeading>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, mt: 2, maxWidth: 460, mx: 'auto', lineHeight: 1.8 }}>
                            Every course is crafted with employers in mind — practical, concise, and career-defining.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4,1fr)' }, gap: { xs: 3, md: 2.5 }, alignItems: 'stretch' }}>
                        {COURSES.map((c, i) => <CourseCard key={c.id} course={c} idx={i} vis={vis} />)}
                    </Box>

                    <Box sx={{ textAlign: 'center', mt: 7 }}>
                        <CTAButton href="/courses" size="lg">View All Courses</CTAButton>
                    </Box>

                </Container>
            </Box>
        </>
    );
};

export default CoursesSection;