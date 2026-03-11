import { Box, Container, Stack, Typography } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import { colors } from '../../../theme';
import { barSx, scrollRowSx, labelSx, dividerSx, chipSx, countSx } from './styles';

const CATS = ['All', 'Management', 'Safety', 'Business', 'Technology'];
const LEVELS = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

export default function FiltersBar({ category, level, count, onCategory, onLevel }) {
    return (
        <Box sx={barSx}>
            <Container maxWidth="xl">
                <Box sx={scrollRowSx}>
                    <Stack direction="row" alignItems="center" gap={1} sx={{ flexShrink: 0, pr: 2, borderRight: `1px solid ${colors.divider}` }}>
                        <TuneIcon sx={{ fontSize: 17, color: colors.text.secondary }} />
                        <Typography sx={labelSx}>Filter</Typography>
                    </Stack>

                    {CATS.map(cat => (
                        <Box key={cat} sx={chipSx(category === cat, colors.primary.main)} onClick={() => onCategory(cat)}>{cat}</Box>
                    ))}

                    <Box sx={dividerSx} />

                    {LEVELS.map(lv => (
                        <Box key={lv} sx={chipSx(level === lv, colors.secondary.main)} onClick={() => onLevel(lv)}>{lv}</Box>
                    ))}

                    <Box sx={{ ml: 'auto', flexShrink: 0 }}>
                        <Typography sx={countSx}>{count} {count === 1 ? 'course' : 'courses'}</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}