import { Box, Typography } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import { tickerKeyframes, wrapSx, trackSx, itemSx, iconSx } from './styles';

const ITEMS = [
    'Human Resources Management', 'Project Management Professional',
    'Health Safety & Environment', 'Customer Relations Management',
    'Business Management', 'Information Security', 'DHIS2 & Health Informatics',
    'Entrepreneurship Management',
];
const TRACK = [...ITEMS, ...ITEMS];

const TickerSection = () => (
    <>
        <GlobalStyles styles={tickerKeyframes} />
        <Box sx={wrapSx}>
            <Box sx={{ overflow: 'hidden' }}>
                <Box sx={trackSx}>
                    {TRACK.map((label, i) => (
                        <Box key={i} sx={itemSx}>
                            <BoltIcon sx={iconSx} />
                            <Typography component="span" sx={{ fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' }}>
                                {label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    </>
);

export default TickerSection;