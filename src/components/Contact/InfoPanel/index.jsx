import { Box, Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { colors } from '../../../theme';
import { panelSx, infoCardSx, iconSx, floatSx, infoTitleSx, infoValueSx, socialLabelSx, socialBtnSx, headingSx, labelSx, replyBadgeSx } from './styles';

const INFO = [
    { icon: EmailIcon, color: colors.secondary.main, title: 'Email Us', lines: ['info@cheybis.com', 'support@cheybis.com'] },
    { icon: PhoneIcon, color: colors.accent.teal, title: 'Call Us', lines: ['+234 (0) 801 234 5678', 'Mon – Fri, 9am – 6pm WAT'] },
    { icon: LocationOnIcon, color: colors.accent.purple, title: 'Find Us', lines: ['12 Admiralty Way, Lekki Phase 1', 'Lagos, Nigeria'] },
];

export default function InfoPanel({ vis }) {
    return (
        <Box sx={{ opacity: vis ? 1 : 0, animation: vis ? 'ct_left .7s cubic-bezier(.34,1.2,.64,1) both' : 'none' }}>
            <Typography sx={labelSx}>Contact Info</Typography>
            <Typography sx={headingSx}>Let's Start a Conversation</Typography>

            <Stack direction="row" alignItems="center" gap={1} sx={replyBadgeSx}>
                <AccessTimeIcon sx={{ fontSize: 15, color: colors.accent.green }} />
                <Typography sx={{ fontFamily: 'inherit', fontSize: '.75rem', color: colors.accent.green, fontWeight: 600 }}>
                    Typically replies within 2 business hours
                </Typography>
            </Stack>

            <Box sx={panelSx}>
                {INFO.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <Box key={item.title} sx={infoCardSx}>
                            <Stack direction="row" alignItems="center" gap={2}>
                                <Box className="ct-info-icon" sx={{ ...iconSx(item.color), ...floatSx[i] }}>
                                    <Icon sx={{ fontSize: 20, color: item.color }} />
                                </Box>
                                <Box>
                                    <Typography sx={infoTitleSx}>{item.title}</Typography>
                                    {item.lines.map(l => <Typography key={l} sx={infoValueSx}>{l}</Typography>)}
                                </Box>
                            </Stack>
                        </Box>
                    );
                })}
                
                <Box sx={{ pt: 1, borderTop: '1px solid rgba(255,255,255,.08)' }}>
                    <Typography sx={socialLabelSx}>Follow Us</Typography>
                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                        {['LinkedIn', 'Twitter', 'Instagram'].map(s => (
                            <Box key={s} sx={socialBtnSx}>
                                <Typography sx={{ fontFamily: 'inherit', fontSize: '.68rem', fontWeight: 700, color: 'rgba(255,255,255,.55)' }}>{s}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}