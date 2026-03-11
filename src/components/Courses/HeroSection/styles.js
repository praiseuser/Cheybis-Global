import { colors, typography } from "../../../theme";

export const keyframes = {
  "@keyframes cp_rise": {
    from: { opacity: 0, transform: "translateY(44px) scale(0.96)" },
    to: { opacity: 1, transform: "none" },
  },
  "@keyframes cp_orb": {
    "0%,100%": { opacity: 0.3, transform: "scale(1)" },
    "50%": { opacity: 0.6, transform: "scale(1.12)" },
  },
  "@keyframes cp_pulse": {
    "0%,100%": { boxShadow: "0 0 0 0 rgba(249,115,22,.5)" },
    "50%": { boxShadow: "0 0 0 9px rgba(249,115,22,0)" },
  },
  "@keyframes cp_spin": { to: { transform: "rotate(360deg)" } },
  "@keyframes cp_imgFloat": {
    "0%,100%": { transform: "translateY(0) rotate(-2deg)" },
    "50%": { transform: "translateY(-18px) rotate(2deg)" },
  },
  "@keyframes cp_imgGlow": {
    "0%,100%": { opacity: 0.4, transform: "scale(1)" },
    "50%": { opacity: 0.75, transform: "scale(1.08)" },
  },
  "@keyframes cp_imgIn": {
    from: { opacity: 0, transform: "translateX(60px) scale(0.88)" },
    to: { opacity: 1, transform: "none" },
  },
  "@keyframes cp_shadowPulse": {
    "0%,100%": { transform: "scaleX(1)", opacity: 0.35 },
    "50%": { transform: "scaleX(.7)", opacity: 0.18 },
  },
};

export const heroSx = {
  background: `linear-gradient(140deg,${colors.primary.dark} 0%,#0D2D4F 50%,${colors.primary.main} 100%)`,
  pt: { xs: 14, md: 16 },
  pb: { xs: 7, md: 9 },
  position: "relative",
  overflow: "hidden",
};

export const gridBgSx = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  backgroundImage: `radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px)`,
  backgroundSize: "32px 32px",
};

export const orbSx = (top, right, bottom, left, clr, delay = "0s") => ({
  position: "absolute",
  top,
  right,
  bottom,
  left,
  pointerEvents: "none",
  width: { xs: 260, md: 480 },
  height: { xs: 260, md: 480 },
  borderRadius: "50%",
  background: `radial-gradient(circle,${clr} 0%,transparent 70%)`,
  animation: `cp_orb 5s ease ${delay} infinite`,
});

export const decoRingWrapSx = {
  position: "absolute",
  top: "8%",
  right: "4%",
  width: { xs: 0, md: 160 },
  height: { xs: 0, md: 160 },
  display: { xs: "none", md: "block" },
  pointerEvents: "none",
};

export const decoRing1Sx = {
  position: "absolute",
  inset: 0,
  borderRadius: "50%",
  border: "1px dashed rgba(249,115,22,.22)",
  animation: "cp_spin 18s linear infinite",
};

export const decoRing2Sx = {
  position: "absolute",
  inset: 18,
  borderRadius: "50%",
  border: "1px dashed rgba(14,165,233,.18)",
  animation: "cp_spin 11s linear infinite reverse",
};

export const ringDotSx = (color, top, bottom) => ({
  position: "absolute",
  top,
  bottom,
  left: "46%",
  width: 9,
  height: 9,
  borderRadius: "50%",
  bgcolor: color,
  boxShadow: `0 0 10px ${color}`,
});

export const badgeSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  bgcolor: "rgba(249,115,22,.1)",
  border: "1px solid rgba(249,115,22,.3)",
  borderRadius: "100px",
  px: 2.2,
  py: 0.8,
  backdropFilter: "blur(8px)",
};

export const badgeDotSx = {
  width: 7,
  height: 7,
  borderRadius: "50%",
  bgcolor: colors.secondary.main,
  animation: "cp_pulse 1.8s ease infinite",
};

export const titleLine1Sx = {
  fontFamily: typography.fontFamily.accent,
  fontWeight: 900,
  color: "white",
  fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem" },
  lineHeight: 1.08,
  letterSpacing: "-1.5px",
  animation: "cp_rise .7s cubic-bezier(.34,1.2,.64,1) .1s both",
};

export const titleLine2Sx = {
  fontFamily: typography.fontFamily.accent,
  fontWeight: 900,
  fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem" },
  lineHeight: 1.08,
  letterSpacing: "-1.5px",
  mb: 2,
  background: `linear-gradient(120deg,${colors.secondary.main},${colors.secondary.light},#FCD34D)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: "cp_rise .7s cubic-bezier(.34,1.2,.64,1) .18s both",
};

export const subtitleSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: { xs: ".95rem", md: "1.08rem" },
  color: "rgba(255,255,255,.5)",
  lineHeight: 1.85,
  maxWidth: 480,
  mb: 4,
  animation: "cp_rise .7s cubic-bezier(.34,1.2,.64,1) .25s both",
};

export const searchWrapSx = {
  position: "relative",
  maxWidth: 460,
  animation: "cp_rise .7s cubic-bezier(.34,1.2,.64,1) .32s both",
};

export const searchInputSx = {
  width: "100%",
  boxSizing: "border-box",
  padding: "13px 20px 13px 48px",
  background: "rgba(255,255,255,.07)",
  border: "1.5px solid rgba(255,255,255,.12)",
  borderRadius: "14px",
  color: "white",
  fontSize: ".9rem",
  fontFamily: "Inter,sans-serif",
  outline: "none",
  backdropFilter: "blur(8px)",
  transition: "border-color .25s, background .25s",
  "&::placeholder": { color: "rgba(255,255,255,.28)" },
  "&:focus": {
    borderColor: "rgba(249,115,22,.55)",
    background: "rgba(255,255,255,.1)",
  },
};

export const imgWrapSx = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: "cp_imgIn .9s cubic-bezier(.34,1.2,.64,1) .3s both",
};

export const imgRing1Sx = {
  position: "absolute",
  width: "110%",
  height: "110%",
  borderRadius: "50%",
  border: "1px dashed rgba(249,115,22,.15)",
  animation: "cp_spin 25s linear infinite",
  pointerEvents: "none",
};

export const imgRing2Sx = {
  position: "absolute",
  width: "85%",
  height: "85%",
  borderRadius: "50%",
  border: "1px dashed rgba(14,165,233,.12)",
  animation: "cp_spin 18s linear infinite reverse",
  pointerEvents: "none",
};

export const imgGlowSx = {
  position: "absolute",
  width: "70%",
  height: "70%",
  borderRadius: "50%",
  pointerEvents: "none",
  zIndex: 1,
  background:
    "radial-gradient(circle,rgba(249,115,22,.22) 0%,rgba(14,165,233,.12) 50%,transparent 75%)",
  animation: "cp_imgGlow 4s ease-in-out infinite",
};

export const imgSx = {
  width: { md: "88%", lg: "92%" },
  maxWidth: 420,
  height: "auto",
  position: "relative",
  zIndex: 2,
  animation: "cp_imgFloat 5s ease-in-out infinite",
  filter:
    "drop-shadow(0 32px 64px rgba(249,115,22,.22)) drop-shadow(0 0 40px rgba(14,165,233,.15))",
};

export const imgShadowSx = {
  position: "absolute",
  bottom: -8,
  left: "50%",
  transform: "translateX(-50%)",
  width: "55%",
  height: 18,
  borderRadius: "50%",
  background: "rgba(0,0,0,.25)",
  filter: "blur(12px)",
  pointerEvents: "none",
  zIndex: 0,
  animation: "cp_shadowPulse 5s ease-in-out infinite",
};
