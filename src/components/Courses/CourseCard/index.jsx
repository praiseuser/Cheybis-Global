import { Box, Typography, Stack, Divider } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { colors, typography } from '../../../theme';
import { TagChip } from '../../common';
import { keyframes, cardSx, bannerSx, shortSx, catBadgeSx, priceBadgeSx, bodySx, titleSx, descSx, metaSx, enrolSx } from './styles';

export default function CourseCard({ c, delay }) {
    return (
        <>
            <GlobalStyles styles={keyframes} />
            <Box className="cp-card" component={Link} to={`/courses/${c.slug}`} sx={cardSx(delay)}>

                <Box sx={bannerSx(c.bg)}>
                    <Typography sx={shortSx(c.color)}>{c.short}</Typography>
                    <Box sx={{ position: 'absolute', top: 10, left: 12 }}><TagChip label={c.level} color={c.tag} /></Box>
                    <Stack direction="row" alignItems="center" gap={.4} sx={{ position: 'absolute', top: 10, right: 12 }}>
                        <StarIcon sx={{ fontSize: 11, color: colors.accent.yellow }} />
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '.69rem', fontWeight: 700, color: colors.text.primary }}>{c.rating}</Typography>
                    </Stack>
                    <Box sx={catBadgeSx}>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '.58rem', fontWeight: 700, color: c.color }}>{c.category}</Typography>
                    </Box>
                    <Box sx={priceBadgeSx(c.color)}>
                        <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: '.62rem', fontWeight: 800, color: 'white' }}>{c.price}</Typography>
                    </Box>
                </Box>

                <Box sx={bodySx}>
                    <Typography sx={titleSx}>{c.title}</Typography>
                    <Typography sx={descSx}>{c.desc}</Typography>

                    <Stack direction="row" gap={2} sx={{ mt: 2, mb: .5 }}>
                        {[[AccessTimeIcon, c.dur], [PeopleIcon, `${c.students} enrolled`], [WorkspacePremiumIcon, 'Certificate']].map(([Icon, text]) => (
                            <Stack key={text} direction="row" alignItems="center" gap={.5}>
                                <Icon sx={{ fontSize: 12, color: colors.text.disabled }} />
                                <Typography sx={metaSx}>{text}</Typography>
                            </Stack>
                        ))}
                    </Stack>

                    <Divider sx={{ borderColor: colors.divider, my: 1.8 }} />

                    <Box component={Link} to={`/courses/${c.slug}`} sx={enrolSx(c.color)}>
                        Enrol Now <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </Box>
                </Box>

            </Box>
        </>
    );
}