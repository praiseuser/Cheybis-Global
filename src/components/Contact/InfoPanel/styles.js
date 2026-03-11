import { colors, typography } from "../../../theme";

export const panelSx = {
  background: `linear-gradient(150deg,${colors.primary.dark},#0D2D4F 70%,${colors.primary.main})`,
  borderRadius: "24px",
  p: 2.5,
  display: "flex",
  flexDirection: "column",
  gap: 1.8,
};

export const infoCardSx = {
  borderRadius: "18px",
  p: "22px",
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.1)",
  backdropFilter: "blur(14px)",
  position: "relative",
  overflow: "hidden",
  transition:
    "transform .35s cubic-bezier(.34,1.2,.64,1), box-shadow .3s, border-color .3s",
  "&:hover": {
    transform: "translateY(-6px) scale(1.02)",
    boxShadow: "0 22px 50px rgba(0,0,0,.3)",
    borderColor: "rgba(255,255,255,.22)",
  },
  "&:hover .ct-info-icon": { transform: "scale(1.18) rotate(-6deg)" },
};

export const iconSx = (color) => ({
  width: 46,
  height: 46,
  borderRadius: "14px",
  flexShrink: 0,
  background: `linear-gradient(135deg,${color}30,${color}12)`,
  border: `1.5px solid ${color}40`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform .35s cubic-bezier(.34,1.2,.64,1)",
});

export const floatSx = [
  { animation: "ct_float 5s ease-in-out infinite" },
  { animation: "ct_float 6s ease-in-out infinite .5s" },
  { animation: "ct_float 4.5s ease-in-out infinite 1s" },
];

export const infoTitleSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.sm,
  fontWeight: 800,
  color: "white",
  mb: 0.4,
};

export const infoValueSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: ".8rem",
  color: "rgba(255,255,255,.55)",
  lineHeight: 1.7,
};

export const socialLabelSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: ".68rem",
  fontWeight: 700,
  color: "rgba(255,255,255,.3)",
  letterSpacing: 2,
  textTransform: "uppercase",
  mb: 1.5,
};

export const socialBtnSx = {
  flex: 1,
  py: 0.9,
  borderRadius: "10px",
  textAlign: "center",
  cursor: "pointer",
  bgcolor: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.1)",
  transition: "all .25s ease",
  "&:hover": {
    bgcolor: "rgba(249,115,22,.15)",
    borderColor: "rgba(249,115,22,.35)",
    transform: "translateY(-2px)",
  },
};

export const replyBadgeSx = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  mb: 3.5,
};

export const headingSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: { xs: "1.6rem", md: "2rem" },
  fontWeight: 900,
  color: colors.text.primary,
  lineHeight: 1.15,
  mb: 1,
};

export const labelSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.xs,
  fontWeight: 700,
  letterSpacing: 2.5,
  textTransform: "uppercase",
  color: colors.secondary.main,
  mb: 1,
};
