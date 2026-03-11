import { colors, typography } from "../../../theme";

export const keyframes = {
  "@keyframes wy_rise": {
    from: { opacity: 0, transform: "translateY(55px) scale(0.94)" },
    to: { opacity: 1, transform: "none" },
  },
  "@keyframes wy_glow": {
    "0%,100%": { opacity: 0.3, transform: "scale(1)" },
    "50%": { opacity: 0.7, transform: "scale(1.12)" },
  },
  "@keyframes wy_gradShift": {
    "0%,100%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
  },
  "@keyframes wy_iconSpin": {
    "0%": { transform: "rotate(-30deg) scale(0.5)", opacity: 0 },
    "60%": { transform: "rotate(10deg) scale(1.15)", opacity: 1 },
    "100%": { transform: "none", opacity: 1 },
  },
  "@keyframes wy_pendulum": {
    "0%,100%": { transform: "translateX(0)" },
    "25%": { transform: "translateX(-7px)" },
    "75%": { transform: "translateX(7px)" },
  },
  "@keyframes wy_barFill": {
    from: { width: "0%" },
    to: { width: "var(--pct)" },
  },
  "@keyframes wy_dot": {
    "0%,100%": { transform: "translate(0,0)", opacity: 0.5 },
    "50%": { transform: "translate(10px,-14px)", opacity: 0.9 },
  },
};

export const wrapSx = {
  background: `linear-gradient(160deg, ${colors.primary.dark} 0%, #0D2D4F 55%, ${colors.primary.main} 100%)`,
  py: { xs: 10, md: 16 },
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage: `radial-gradient(rgba(255,255,255,.045) 1px, transparent 1px)`,
    backgroundSize: "36px 36px",
  },
};

export const orbSx = (top, left, right, bottom, clr, delay = "0s") => ({
  position: "absolute",
  top,
  left,
  right,
  bottom,
  pointerEvents: "none",
  width: { xs: 0, md: 440 },
  height: { xs: 0, md: 440 },
  borderRadius: "50%",
  background: `radial-gradient(circle, ${clr} 0%, transparent 70%)`,
  animation: `wy_glow 6s ease ${delay} infinite`,
});

export const headingSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
  fontWeight: 900,
  lineHeight: 1.1,
  letterSpacing: "-1px",
  mt: 2,
  mb: 2,
  background: `linear-gradient(120deg, white 30%, ${colors.secondary.light}, ${colors.accent.teal}, white 80%)`,
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export const cardSx = (color) => ({
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.11)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  borderRadius: "26px",
  p: { xs: 3.5, md: 4 },
  height: "100%",
  minHeight: 300,
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
  cursor: "default",
  transition: "transform .18s ease, box-shadow .28s",
  "&:hover": {
    transform: "translateY(-6px) scale(1.02)",
    boxShadow: `0 36px 72px rgba(0,0,0,.45), 0 0 0 1px ${color}30`,
    zIndex: 10,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "26px",
    background:
      "linear-gradient(135deg,rgba(255,255,255,.06) 0%,transparent 60%)",
    opacity: 0,
    transition: "opacity .28s",
    pointerEvents: "none",
  },
  "&:hover::after": { opacity: 1 },
});

export const iconBoxSx = (color) => ({
  width: 62,
  height: 62,
  borderRadius: "18px",
  mb: 3,
  flexShrink: 0,
  background: `linear-gradient(135deg, ${color}30, ${color}12)`,
  border: `1.5px solid ${color}40`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform .32s cubic-bezier(.34,1.2,.64,1)",
  ".wy-card:hover &": { transform: "scale(1.18) rotate(-6deg)" },
});

export const dotSx = (color, top, right, left, size, delay) => ({
  position: "absolute",
  borderRadius: "50%",
  pointerEvents: "none",
  width: size,
  height: size,
  bgcolor: `${color}60`,
  top,
  right,
  left,
  animation: `wy_dot 5s ease-in-out ${delay} infinite`,
});

export const titleSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: { xs: typography.fontSize.base, md: typography.fontSize.md },
  fontWeight: 800,
  color: "white",
  mb: 1.5,
  lineHeight: 1.3,
};

export const descSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.sm,
  color: "rgba(255,255,255,.52)",
  lineHeight: 1.85,
  flex: 1,
};

export const statNumSx = (color) => ({
  fontFamily: typography.fontFamily.accent,
  fontWeight: 900,
  fontSize: { xs: "1.8rem", md: "2.2rem" },
  lineHeight: 1,
  mb: 0.4,
  color,
  display: "inline-block",
  animation: "wy_pendulum 3.8s ease-in-out infinite",
});

export const statLblSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.xs,
  color: "rgba(255,255,255,.38)",
  fontWeight: 500,
  letterSpacing: 0.5,
};

export const trackSx = {
  width: "100%",
  height: 3,
  bgcolor: "rgba(255,255,255,.1)",
  borderRadius: 4,
  overflow: "hidden",
  mt: 2.5,
};

export const barSx = (color, pct, visible, delay) => ({
  height: "100%",
  borderRadius: 4,
  background: `linear-gradient(90deg, ${color}, ${color}88)`,
  width: visible ? `${pct}%` : "0%",
  transition: visible ? `width 1.4s cubic-bezier(.4,0,.2,1) ${delay}s` : "none",
});
