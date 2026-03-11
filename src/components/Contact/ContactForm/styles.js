import { colors, typography } from "../../../theme";

export const cardSx = {
  background: "#fff",
  borderRadius: "28px",
  boxShadow: "0 24px 80px rgba(10,37,64,.1)",
  border: `1px solid ${colors.divider}`,
  overflow: "hidden",
  position: "relative",
};

export const rainbowBarSx = {
  height: 4,
  background: `linear-gradient(90deg,${colors.secondary.dark},${colors.secondary.main},#FB923C,#FCD34D)`,
};

export const formHeadSx = {
  fontFamily: typography.fontFamily.heading,
  fontWeight: 900,
  fontSize: { xs: "1.5rem", md: "1.9rem" },
  color: colors.text.primary,
  mb: 0.6,
};

export const formSubSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.sm,
  color: colors.text.secondary,
  lineHeight: 1.8,
  mb: 3.5,
};

export const inputSx = {
  width: "100%",
  boxSizing: "border-box",
  padding: "14px 18px",
  background: colors.background.default,
  border: `1.5px solid ${colors.divider}`,
  borderRadius: "14px",
  fontFamily: "Inter,sans-serif",
  fontSize: ".9rem",
  color: colors.text.primary,
  outline: "none",
  resize: "none",
  transition: "border-color .25s, background .25s, box-shadow .25s",
  "&::placeholder": { color: colors.text.disabled },
  "&:focus": {
    borderColor: colors.secondary.main,
    background: "#fff",
    boxShadow: "0 0 0 4px rgba(249,115,22,.1)",
  },
};

export const textareaSx = { ...inputSx, minHeight: 130 };

export const labelSx = {
  display: "block",
  fontFamily: "Inter,sans-serif",
  fontSize: ".78rem",
  fontWeight: 700,
  color: colors.text.primary,
  mb: "7px",
  letterSpacing: ".3px",
};

export const submitSx = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  width: "100%",
  padding: "15px 24px",
  border: "none",
  cursor: "pointer",
  background: `linear-gradient(135deg,${colors.secondary.dark},${colors.secondary.main},#FB923C)`,
  backgroundSize: "200% 200%",
  color: "white",
  borderRadius: "14px",
  fontFamily: "Plus Jakarta Sans,sans-serif",
  fontSize: "1rem",
  fontWeight: 800,
  position: "relative",
  overflow: "hidden",
  transition: "transform .3s cubic-bezier(.34,1.2,.64,1), box-shadow .3s",
  animation: "ct_grad 3s ease infinite",
  "&:hover": {
    transform: "translateY(-3px) scale(1.02)",
    boxShadow: "0 16px 40px rgba(249,115,22,.45)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "50%",
    left: "-80%",
    pointerEvents: "none",
    background:
      "linear-gradient(105deg,transparent 30%,rgba(255,255,255,.25) 50%,transparent 70%)",
  },
  "&:hover::before": { animation: "ct_sweep .55s ease forwards" },
  "&:disabled": { opacity: 0.6, cursor: "not-allowed", transform: "none" },
};

export const checkIconSx = {
  animation: "ct_checkPop .5s cubic-bezier(.34,1.2,.64,1) both",
};

export const resetBtnSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  bgcolor: colors.primary.main,
  color: "white",
  px: 3.5,
  py: 1.5,
  borderRadius: "12px",
  cursor: "pointer",
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.sm,
  fontWeight: 700,
  transition: "all .25s ease",
  "&:hover": { bgcolor: colors.primary.light, transform: "translateY(-2px)" },
};

export const privacySx = {
  fontFamily: typography.fontFamily.body,
  fontSize: ".72rem",
  color: colors.text.disabled,
  textAlign: "center",
  lineHeight: 1.7,
};
