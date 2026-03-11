import { colors, typography } from "../../../theme";

export const keyframes = {
  "@keyframes cs_rise": {
    from: { opacity: 0, transform: "translateY(60px) scale(0.93)" },
    to: { opacity: 1, transform: "translateY(0) scale(1)" },
  },
  "@keyframes cs_float": {
    "0%,100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-12px)" },
  },
  "@keyframes cs_orb": {
    "0%,100%": { transform: "translate(0,0) scale(1)", opacity: 0.45 },
    "50%": { transform: "translate(6px,-10px) scale(1.1)", opacity: 0.65 },
  },
  "@keyframes cs_sweep": { from: { left: "-80%" }, to: { left: "130%" } },
  "@keyframes cs_bar": {
    from: { transform: "scaleX(0)" },
    to: { transform: "scaleX(1)" },
  },
  "@keyframes cs_enrol": {
    from: { opacity: 0, transform: "translateY(8px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
};

export const wrapSx = {
  bgcolor: "white",
  py: { xs: 8, md: 13 },
};

/* card shell — all hover logic via sx */
export const cardSx = (delay) => ({
  textDecoration: "none",
  bgcolor: "white",
  borderRadius: "22px",
  border: `1px solid ${colors.divider}`,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  cursor: "pointer",
  animation: `cs_float ${5 + delay}s ease-in-out ${delay * 0.5}s infinite`,
  transition:
    "transform .35s cubic-bezier(.34,1.2,.64,1), box-shadow .3s, border-color .3s",
  "&:hover": {
    animationPlayState: "paused",
    transform: "translateY(-20px) scale(1.03)",
    boxShadow: `0 48px 88px rgba(10,37,64,.2), 0 0 0 2px rgba(249,115,22,.4)`,
    borderColor: "rgba(249,115,22,.4)",
    zIndex: 10,
  },
  /* shimmer sweep */
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "55%",
    left: "-80%",
    zIndex: 20,
    pointerEvents: "none",
    background:
      "linear-gradient(105deg,transparent 30%,rgba(255,255,255,.5) 50%,transparent 70%)",
  },
  "&:hover::before": { animation: "cs_sweep .65s ease forwards" },
});

export const topBarSx = (color) => ({
  height: 4,
  flexShrink: 0,
  background: `linear-gradient(90deg,${color},${color}66)`,
  transformOrigin: "left",
  animation: "cs_bar .9s cubic-bezier(.34,1.2,.64,1) .15s forwards",
  transform: "scaleX(0)",
});

export const bannerSx = (bg) => ({
  height: 185,
  background: bg,
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    background: "linear-gradient(transparent,rgba(255,255,255,.65))",
  },
});

export const orbSx = (size, top, right, bottom, left, color, delay = "0s") => ({
  position: "absolute",
  width: size,
  height: size,
  borderRadius: "50%",
  background: `radial-gradient(circle,${color}55 0%,transparent 70%)`,
  top,
  right,
  bottom,
  left,
  pointerEvents: "none",
  animation: `cs_orb 4s ease-in-out ${delay} infinite`,
});

export const shortTextSx = (color) => ({
  fontFamily: typography.fontFamily.heading,
  fontSize: "4rem",
  fontWeight: 900,
  color,
  opacity: 0.13,
  letterSpacing: -4,
  userSelect: "none",
  lineHeight: 1,
  position: "relative",
  zIndex: 1,
  animation: "cs_orb 3.5s ease-in-out infinite" /* gentle pulse */,
});

export const priceSx = (color) => ({
  position: "absolute",
  top: 12,
  right: 14,
  zIndex: 5,
  bgcolor: color,
  borderRadius: "8px",
  px: 1.4,
  py: 0.4,
});

export const arrowBtnSx = (color) => ({
  position: "absolute",
  bottom: 10,
  right: 14,
  zIndex: 5,
  width: 28,
  height: 28,
  borderRadius: "8px",
  bgcolor: color,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transform: "scale(0.6) rotate(-45deg)",
  opacity: 0,
  transition: "transform .3s cubic-bezier(.34,1.2,.64,1), opacity .25s",
  ".cs-card:hover &": { transform: "scale(1) rotate(0deg)", opacity: 1 },
});

export const bodySx = {
  p: { xs: 2.5, md: 2.8 },
  display: "flex",
  flexDirection: "column",
  flex: 1,
  minHeight: 230,
};

export const titleSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: ".88rem",
  fontWeight: 800,
  color: colors.text.primary,
  lineHeight: 1.35,
  mb: 1,
};

export const descSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: ".75rem",
  color: colors.text.secondary,
  lineHeight: 1.75,
  flex: 1,
  mb: 2,
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

export const metaSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: ".67rem",
  color: colors.text.secondary,
};

export const enrolSx = (color) => ({
  mt: 2,
  bgcolor: color,
  borderRadius: "12px",
  py: 1.2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 0.8,
  transition: "filter .2s, transform .2s",
  "&:hover": { filter: "brightness(1.1)", transform: "translateY(-2px)" },
});
