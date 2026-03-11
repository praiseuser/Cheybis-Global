import { Box, Container, Stack, Typography, Chip } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { colors } from '../../../theme';
import CourseCard from '../CourseCard';
import { keyframes, wrapSx, activeFiltersSx, chipSx, gridSx, emptyIconSx, emptyTitleSx, emptySubSx, clearBtnSx } from './styles';

export default function CoursesGrid({ courses, vis, search, category, level, onClear, onClearSearch, onClearCategory, onClearLevel }) {
    const hasFilters = search || category !== 'All' || level !== 'All Levels';

    return (
        <>
            <GlobalStyles styles={keyframes} />
            <Box sx={wrapSx}>
                <Container maxWidth="xl">

                    {hasFilters && (
                        <Stack direction="row" gap={1} flexWrap="wrap" alignItems="center" sx={activeFiltersSx}>
                            <Typography sx={{ fontFamily: 'inherit', fontSize: '.75rem', color: colors.text.secondary }}>Active:</Typography>
                            {search && <Chip size="small" label={`"${search}"`} onDelete={onClearSearch} sx={chipSx(colors.primary.main)} />}
                            {category !== 'All' && <Chip size="small" label={category} onDelete={onClearCategory} sx={chipSx(colors.secondary.main)} />}
                            {level !== 'All Levels' && <Chip size="small" label={level} onDelete={onClearLevel} sx={chipSx(colors.accent.teal)} />}
                        </Stack>
                    )}

                    {courses.length > 0 ? (
                        <Box sx={gridSx}>
                            {courses.map((c, i) => <CourseCard key={c.id} c={c} delay={i * 0.055} />)}
                        </Box>
                    ) : (
                        <Box sx={{ textAlign: 'center', py: { xs: 8, md: 14 } }}>
                            <Box sx={emptyIconSx}><SchoolIcon sx={{ fontSize: 68, color: colors.divider }} /></Box>
                            <Typography sx={emptyTitleSx}>No courses found</Typography>
                            <Typography sx={emptySubSx}>Try adjusting your search or filters.</Typography>
                            <Box sx={clearBtnSx} onClick={onClear}>Clear all filters</Box>
                        </Box>
                    )}

                </Container>
            </Box>
        </>
    );
}