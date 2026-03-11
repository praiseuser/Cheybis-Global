import { colors, typography } from "../../../theme";

export const keyframes = {
  "@keyframes jrn_popIn": {
    "0%": { opacity: 0, transform: "scale(0) rotate(-90deg)" },
    "65%": { transform: "scale(1.2) rotate(6deg)" },
    "100%": { opacity: 1, transform: "scale(1) rotate(0deg)" },
  },
  "@keyframes jrn_slideUp": {
    from: { opacity: 0, transform: "translateY(28px)" },
    to: { opacity: 1, transform: "none" },
  },
  "@keyframes jrn_ghost": {
    "0%,100%": { opacity: 0.12, transform: "translateX(-50%) scale(1)" },
    "50%": { opacity: 0.22, transform: "translateX(-50%) scale(1.04)" },
  },
  "@keyframes jrn_rock": {
    "0%,100%": { transform: "rotate(-7deg) scale(1)" },
    "50%": { transform: "rotate(7deg) scale(1.08)" },
  },
  "@keyframes jrn_ring": {
    "0%": { transform: "scale(1)", opacity: 0.55 },
    "100%": { transform: "scale(2)", opacity: 0 },
  },
  "@keyframes jrn_drift": {
    "0%": { transform: "translateY(0) translateX(0)", opacity: 0.8 },
    "100%": { transform: "translateY(-70px) translateX(12px)", opacity: 0 },
  },
  "@keyframes jrn_glow": {
    "0%,100%": { opacity: 0.35 },
    "50%": { opacity: 0.9 },
  },
  "@keyframes jrn_tag": {
    "0%": { transform: "scale(0) rotate(-10deg)", opacity: 0 },
    "65%": { transform: "scale(1.12) rotate(2deg)" },
    "100%": { transform: "scale(1) rotate(0)", opacity: 1 },
  },
  "@keyframes jrn_connDraw": { from: { width: "0%" }, to: { width: "100%" } },
};

export const wrapSx = {
  background: `linear-gradient(160deg, ${colors.primary.dark} 0%, #0D2D4F 60%, ${colors.primary.main} 100%)`,
  py: { xs: 9, md: 15 },
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage: `radial-gradient(rgba(255,255,255,.045) 1px, transparent 1px)`,
    backgroundSize: "32px 32px",
  },
};

export const orbSx = (top, left, right, bottom, clr, delay = "0s") => ({
  position: "absolute",
  top,
  left,
  right,
  bottom,
  pointerEvents: "none",
  width: { xs: 0, md: 420 },
  height: { xs: 0, md: 420 },
  borderRadius: "50%",
  background: `radial-gradient(circle, ${clr} 0%, transparent 70%)`,
  animation: `jrn_glow 6s ease-in-out ${delay} infinite`,
});

export const ghostNumSx = (color) => ({
  position: "absolute",
  top: -28,
  left: "50%",
  fontFamily: typography.fontFamily.accent,
  fontSize: "7rem",
  fontWeight: 900,
  lineHeight: 1,
  color,
  pointerEvents: "none",
  userSelect: "none",
  animation: "jrn_ghost 4s ease-in-out infinite",
});

export const circleSx = (color) => ({
  width: 80,
  height: 80,
  borderRadius: "50%",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  zIndex: 2,
  background: `linear-gradient(135deg, ${color}CC, ${color})`,
  boxShadow: `0 0 0 8px ${color}18, 0 16px 40px ${color}50`,
  transition: "transform .35s cubic-bezier(.34,1.2,.64,1), box-shadow .3s",
  "&:hover": { transform: "scale(1.18) rotate(-6deg)" },
});

export const ringSx = (color, delay = "0s") => ({
  position: "absolute",
  inset: -10,
  borderRadius: "50%",
  border: `2px solid ${color}`,
  animation: `jrn_ring 2.4s ease-out ${delay} infinite`,
  pointerEvents: "none",
});

export const connectorSx = {
  position: "absolute",
  top: 40,
  right: "-50%",
  width: "100%",
  height: 2,
  zIndex: 0,
  pointerEvents: "none",
};

export const connFillSx = (gradient, visible, delay) => ({
  height: "100%",
  borderRadius: 2,
  background: gradient,
  width: visible ? "100%" : "0%",
  transition: visible ? `width 1s cubic-bezier(.4,0,.2,1) ${delay}s` : "none",
  boxShadow: visible ? "0 0 12px rgba(249,115,22,.4)" : "none",
  animation: "jrn_glow 2.5s ease-in-out infinite",
});

export const stepLabelSx = (color) => ({
  fontFamily: typography.fontFamily.body,
  fontSize: ".6rem",
  fontWeight: 700,
  color,
  letterSpacing: 2.5,
  textTransform: "uppercase",
  mb: 0.6,
});

export const stepTitleSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.md,
  fontWeight: 800,
  color: "white",
  mb: 1,
  lineHeight: 1.2,
};

export const stepDescSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.sm,
  color: "rgba(255,255,255,.52)",
  lineHeight: 1.8,
  mb: 1.5,
  maxWidth: 200,
  mx: "auto",
};

export const tagSx = (color, visible, delay) => ({
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "100px",
  px: 1.8,
  py: 0.5,
  fontFamily: typography.fontFamily.body,
  fontSize: ".6rem",
  fontWeight: 700,
  letterSpacing: 1.5,
  textTransform: "uppercase",
  bgcolor: `${color}18`,
  border: `1px solid ${color}40`,
  color,
  opacity: visible ? 1 : 0,
  animation: visible
    ? `jrn_tag .6s cubic-bezier(.34,1.2,.64,1) ${delay}s both`
    : "none",
});

export const particleSx = (color, left, delay, dur) => ({
  position: "absolute",
  width: 5,
  height: 5,
  borderRadius: "50%",
  bgcolor: `${color}80`,
  left,
  top: "30%",
  pointerEvents: "none",
  animation: `jrn_drift ${dur}s ease-out ${delay}s infinite`,
});

export const mobileCircleSx = (color, visible, delay) => ({
  width: 52,
  height: 52,
  borderRadius: "50%",
  flexShrink: 0,
  background: `linear-gradient(135deg, ${color}CC, ${color})`,
  boxShadow: `0 0 0 5px ${color}18, 0 8px 24px ${color}44`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: visible ? 1 : 0,
  animation: visible
    ? `jrn_popIn .6s cubic-bezier(.34,1.2,.64,1) ${delay}s both`
    : "none",
});

export const mobileVlineSx = (gradient) => ({
  width: 2,
  flex: 1,
  minHeight: 32,
  borderRadius: 2,
  background: gradient,
  animation: "jrn_glow 2.5s ease-in-out infinite",
});

export const mobileContentSx = (visible, delay) => ({
  pb: 3,
  pt: 0.4,
  flex: 1,
  opacity: visible ? 1 : 0,
  transform: visible ? "none" : "translateX(-20px)",
  transition: `opacity .6s ease ${delay}s, transform .6s cubic-bezier(.34,1.2,.64,1) ${delay}s`,
});
