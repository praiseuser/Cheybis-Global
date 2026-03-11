import { colors, typography } from "../../../theme";

export const keyframes = {
  "@keyframes cp_reveal": {
    from: { opacity: 0, transform: "translateY(36px)" },
    to: { opacity: 1, transform: "none" },
  },
  "@keyframes cp_sweep": { from: { left: "-80%" }, to: { left: "130%" } },
};

export const cardSx = (delay) => ({
  bgcolor: "white",
  borderRadius: "22px",
  border: `1px solid ${colors.divider}`,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  textDecoration: "none",
  animation: `cp_reveal .5s cubic-bezier(.34,1.2,.64,1) ${delay}s both`,
  transition:
    "transform .35s cubic-bezier(.34,1.2,.64,1), box-shadow .3s, border-color .3s",
  "&:hover": {
    transform: "translateY(-14px) scale(1.025)",
    boxShadow: "0 44px 90px rgba(10,37,64,.2)",
    borderColor: "rgba(249,115,22,.4)",
  },
  /* glow overlay */
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "22px",
    opacity: 0,
    pointerEvents: "none",
    background: "linear-gradient(135deg,rgba(249,115,22,.04),transparent)",
    transition: "opacity .3s",
  },
  "&:hover::after": { opacity: 1 },
  /* shimmer */
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "55%",
    left: "-80%",
    zIndex: 10,
    pointerEvents: "none",
    background:
      "linear-gradient(105deg,transparent 30%,rgba(255,255,255,.45) 50%,transparent 70%)",
  },
  "&:hover::before": { animation: "cp_sweep .6s ease forwards" },
});

export const bannerSx = (bg) => ({
  height: 110,
  background: bg,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
});

export const shortSx = (color) => ({
  fontFamily: typography.fontFamily.accent,
  fontSize: "2.8rem",
  fontWeight: 900,
  color,
  opacity: 0.14,
  letterSpacing: -3,
  userSelect: "none",
});

export const catBadgeSx = {
  position: "absolute",
  bottom: 8,
  left: 12,
  bgcolor: "rgba(255,255,255,.88)",
  borderRadius: "7px",
  px: 1.2,
  py: 0.3,
};

export const priceBadgeSx = (color) => ({
  position: "absolute",
  bottom: 8,
  right: 12,
  bgcolor: color,
  borderRadius: "7px",
  px: 1.2,
  py: 0.3,
});

export const bodySx = {
  p: 2.5,
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

export const titleSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.sm,
  fontWeight: 800,
  color: colors.text.primary,
  lineHeight: 1.35,
  mb: 0.8,
};

export const descSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: ".79rem",
  color: colors.text.secondary,
  lineHeight: 1.7,
  flex: 1,
  mb: "auto",
};

export const metaSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: ".69rem",
  color: colors.text.secondary,
};

export const enrolSx = (color) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  bgcolor: color,
  color: "white",
  borderRadius: "12px",
  py: 1.3,
  textDecoration: "none",
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.sm,
  fontWeight: 700,
  transition: "filter .2s, transform .2s",
  "&:hover": { filter: "brightness(1.1)", transform: "translateY(-2px)" },
});
