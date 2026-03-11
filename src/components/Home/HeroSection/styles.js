import { colors, typography } from "../../../theme";

export const heroKeyframes = {
  "@keyframes hero_rise": {
    from: { opacity: 0, transform: "translateY(60px) scale(0.96)" },
    to: { opacity: 1, transform: "translateY(0) scale(1)" },
  },
  "@keyframes hero_glowOrb": {
    "0%,100%": { opacity: 0.35, transform: "scale(1)" },
    "50%": { opacity: 0.65, transform: "scale(1.08)" },
  },
  "@keyframes hero_floatY": {
    "0%,100%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-14px)" },
  },
  "@keyframes hero_floatSlow": {
    "0%,100%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-8px)" },
  },
  "@keyframes hero_pulseDot": {
    "0%,100%": { transform: "scale(1)", opacity: 0.7 },
    "50%": { transform: "scale(1.5)", opacity: 1 },
  },
  "@keyframes hero_shimmer": {
    "0%": { backgroundPosition: "-700px 0" },
    "100%": { backgroundPosition: "700px 0" },
  },
  "@keyframes hero_spinRing": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
  "@keyframes hero_morphBg": {
    "0%,100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
    "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
  },
  "@keyframes hero_cardPop": {
    from: { opacity: 0, transform: "translateY(50px) rotate(-2deg)" },
    to: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
  },
};

export const wrapSx = {
  minHeight: "100vh",
  background: `linear-gradient(140deg, ${colors.primary.dark} 0%, #0D2D4F 45%, ${colors.primary.main} 100%)`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  pt: { xs: 14, md: 12 },
  pb: 0,
};

export const gridDotsSx = {
  position: "absolute",
  inset: 0,
  backgroundImage: `radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)`,
  backgroundSize: "34px 34px",
  pointerEvents: "none",
};

export const orbSx = (top, left, right, bottom, size, clr, delay = "0s") => ({
  position: "absolute",
  top,
  left,
  right,
  bottom,
  width: size,
  height: size,
  borderRadius: "50%",
  background: `radial-gradient(circle, ${clr} 0%, transparent 70%)`,
  animation: `hero_glowOrb 5s ease infinite ${delay}`,
  pointerEvents: "none",
});

export const ringWrapSx = {
  position: "absolute",
  top: "12%",
  right: "8%",
  width: { xs: 0, md: 320 },
  height: { xs: 0, md: 320 },
  display: { xs: "none", md: "block" },
};
export const ring1Sx = {
  position: "absolute",
  inset: 0,
  border: "1px dashed rgba(249,115,22,0.2)",
  borderRadius: "50%",
  animation: "hero_spinRing 20s linear infinite",
};
export const ring2Sx = {
  position: "absolute",
  inset: 30,
  border: "1px dashed rgba(14,165,233,0.18)",
  borderRadius: "50%",
  animation: "hero_spinRing 14s linear infinite reverse",
};
export const ring3Sx = {
  position: "absolute",
  inset: 60,
  border: "1px dashed rgba(255,255,255,0.08)",
  borderRadius: "50%",
};
export const ringDotSx = (top, left, clr) => ({
  position: "absolute",
  top,
  left,
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: clr,
  boxShadow: `0 0 12px ${clr}`,
});

export const blobSx = {
  position: "absolute",
  top: "50%",
  left: "55%",
  width: { xs: 0, md: 380 },
  height: { xs: 0, md: 380 },
  display: { xs: "none", md: "block" },
  background: `linear-gradient(135deg, ${colors.primary.light}33, ${colors.accent.teal}11)`,
  animation: "hero_morphBg 10s ease infinite, hero_floatSlow 6s ease infinite",
  filter: "blur(1px)",
  pointerEvents: "none",
  transform: "translate(-50%, -50%)",
};

export const badgeSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  bgcolor: "rgba(249,115,22,0.1)",
  border: "1px solid rgba(249,115,22,0.35)",
  borderRadius: "100px",
  px: 2.2,
  py: 0.9,
  backdropFilter: "blur(10px)",
  animation: "hero_rise 0.7s cubic-bezier(.34,1.2,.64,1) both",
};
export const badgeDotSx = {
  width: 8,
  height: 8,
  borderRadius: "50%",
  bgcolor: colors.secondary.main,
  boxShadow: `0 0 8px ${colors.secondary.main}`,
  animation: "hero_pulseDot 1.6s ease infinite",
};
export const h1Sx = {
  fontFamily: typography.fontFamily.body,
  fontSize: { xs: "2.7rem", sm: "3.5rem", md: "4.6rem", lg: "5.2rem" },
  fontWeight: 800,
  color: "white",
  lineHeight: 1,
  letterSpacing: "-2.5px",
  animation: "hero_rise 0.7s cubic-bezier(.34,1.2,.64,1) 0.1s both",
};
export const h2Sx = {
  fontFamily: typography.fontFamily.accent,
  fontSize: { xs: "2.7rem", sm: "3.5rem", md: "4.6rem", lg: "5.2rem" },
  fontWeight: 800,
  lineHeight: 1,
  letterSpacing: "-2.5px",
  animation: "hero_rise 0.7s cubic-bezier(.34,1.2,.64,1) 0.2s both",
  background: `linear-gradient(120deg, ${colors.secondary.main} 0%, ${colors.secondary.light} 50%, #FCD34D 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};
export const subSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: { xs: "1rem", md: "1.15rem" },
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.85,
  maxWidth: 580,
  mx: "auto",
  mt: 2.5,
  mb: 4.5,
  animation: "hero_rise 0.7s cubic-bezier(.34,1.2,.64,1) 0.3s both",
};

export const cardASx = {
  position: "absolute",
  bottom: 100,
  left: 0,
  width: 230,
  bgcolor: "white",
  borderRadius: "18px",
  p: 2.5,
  boxShadow: "0 28px 70px rgba(0,0,0,0.38)",
  animation:
    "hero_cardPop 0.9s cubic-bezier(.34,1.2,.64,1) 0.7s both, hero_floatY 5s ease infinite 1.6s",
  display: { xs: "none", lg: "block" },
};
export const cardBSx = {
  position: "absolute",
  top: 30,
  right: -20,
  width: 210,
  bgcolor: colors.primary.main,
  borderRadius: "18px",
  p: 2.5,
  boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
  animation:
    "hero_cardPop 0.9s cubic-bezier(.34,1.2,.64,1) 0.9s both, hero_floatSlow 6s ease infinite 2s",
  display: { xs: "none", lg: "block" },
};
export const pillSx = {
  position: "absolute",
  bottom: 140,
  right: 10,
  bgcolor: colors.accent.teal,
  borderRadius: "100px",
  px: 2.5,
  py: 1.1,
  boxShadow: `0 12px 32px ${colors.accent.teal}55`,
  animation:
    "hero_cardPop 0.9s cubic-bezier(.34,1.2,.64,1) 1.1s both, hero_floatSlow 7s ease infinite 2.5s",
  display: { xs: "none", lg: "block" },
};

export const ctaShineWrapSx = {
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "55%",
    height: "100%",
    background:
      "linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)",
    animation: "hero_shimmer 2.5s ease infinite",
  },
};
