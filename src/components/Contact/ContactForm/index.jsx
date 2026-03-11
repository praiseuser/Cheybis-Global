import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SendIcon from '@mui/icons-material/Send';
import { colors, typography } from '../../../theme';
import { cardSx, rainbowBarSx, formHeadSx, formSubSx, inputSx, textareaSx, labelSx, submitSx, checkIconSx, resetBtnSx, privacySx } from './styles';

const SUBJECTS = ['Course Enquiry', 'Enrolment Support', 'Corporate Training', 'Partnership', 'Other'];
const EMPTY = { name: '', email: '', phone: '', subject: '', message: '' };

export default function ContactForm({ vis }) {
    const [form, setForm] = useState(EMPTY);
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
    const valid = form.name && form.email && form.message;

    const handleSubmit = () => {
        if (!valid) return;
        setSending(true);
        setTimeout(() => { setSending(false); setSent(true); }, 1800);
    };

    return (
        <Box sx={{ ...cardSx, opacity: vis ? 1 : 0, animation: vis ? 'ct_right .7s cubic-bezier(.34,1.2,.64,1) .12s both' : 'none' }}>
            <Box sx={rainbowBarSx} />

            <Box sx={{ p: { xs: 3, md: 4.5 } }}>
                {sent ? (
                    /* ── Success state ── */
                    <Box sx={{ textAlign: 'center', py: 7 }}>
                        <Box sx={checkIconSx}><CheckCircleIcon sx={{ fontSize: 76, color: colors.accent.green }} /></Box>
                        <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: { xs: '1.4rem', md: '1.8rem' }, fontWeight: 900, color: colors.text.primary, mb: 1.5, mt: 3 }}>
                            Message Sent! 🎉
                        </Typography>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, lineHeight: 1.8, mb: 4, maxWidth: 340, mx: 'auto' }}>
                            Thank you for reaching out. A member of our team will get back to you within 2 business hours.
                        </Typography>
                        <Box sx={resetBtnSx} onClick={() => { setSent(false); setForm(EMPTY); }}>
                            Send Another Message <ArrowForwardIcon sx={{ fontSize: 16 }} />
                        </Box>
                    </Box>
                ) : (
                    /* ── Form ── */
                    <>
                        <Typography sx={formHeadSx}>Send Us a Message</Typography>
                        <Typography sx={formSubSx}>Fill in the form and we will get back to you shortly.</Typography>

                        <Stack spacing={2.5}>
                            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5 }}>
                                <Box>
                                    <Box component="label" sx={labelSx}>Full Name *</Box>
                                    <Box component="input" sx={inputSx} placeholder="John Doe" value={form.name} onChange={set('name')} />
                                </Box>
                                <Box>
                                    <Box component="label" sx={labelSx}>Email Address *</Box>
                                    <Box component="input" sx={inputSx} type="email" placeholder="john@example.com" value={form.email} onChange={set('email')} />
                                </Box>
                            </Box>

                            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5 }}>
                                <Box>
                                    <Box component="label" sx={labelSx}>Phone (optional)</Box>
                                    <Box component="input" sx={inputSx} placeholder="+234 801 234 5678" value={form.phone} onChange={set('phone')} />
                                </Box>
                                <Box>
                                    <Box component="label" sx={labelSx}>Subject</Box>
                                    <Box component="select" sx={{ ...inputSx, appearance: 'auto', cursor: 'pointer' }} value={form.subject} onChange={set('subject')}>
                                        <option value="">Select a subject…</option>
                                        {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                                    </Box>
                                </Box>
                            </Box>

                            <Box>
                                <Box component="label" sx={labelSx}>Message *</Box>
                                <Box component="textarea" sx={textareaSx} placeholder="Tell us how we can help…" value={form.message} onChange={set('message')} />
                            </Box>

                            <Box component="button" sx={submitSx} onClick={handleSubmit} disabled={sending || !valid}>
                                {sending ? 'Sending…' : <><span>Send Message</span><SendIcon sx={{ fontSize: 18 }} /></>}
                            </Box>

                            <Typography sx={privacySx}>
                                We respect your privacy. Your information is never shared with third parties.
                            </Typography>
                        </Stack>
                    </>
                )}
            </Box>
        </Box>
    );
}