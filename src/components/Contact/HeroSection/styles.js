import { colors, typography } from "../../../theme";

export const heroSx = {
  background: `linear-gradient(150deg,${colors.primary.dark} 0%,#0D2D4F 55%,${colors.primary.main} 100%)`,
  pt: { xs: 14, md: 17 },
  pb: { xs: 7, md: 10 },
  position: "relative",
  overflow: "hidden",
};

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
  animation: "ct_pulse 1.8s ease infinite",
};

export const heroHeadSx = {
  fontFamily: typography.fontFamily.accent,
  fontWeight: 900,
  color: "white",
  fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4rem" },
  lineHeight: 1.06,
  letterSpacing: "-1.5px",
  animation: "ct_rise .7s cubic-bezier(.34,1.2,.64,1) .1s both",
};

export const heroGradSx = {
  background: `linear-gradient(120deg,${colors.secondary.main},${colors.secondary.light},#FCD34D)`,
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: "ct_grad 5s ease infinite",
};

export const subtitleSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: { xs: ".95rem", md: "1.08rem" },
  color: "rgba(255,255,255,.48)",
  lineHeight: 1.9,
  maxWidth: 460,
  mb: 4,
  animation: "ct_rise .7s ease .25s both",
};

export const decoRingWrapSx = {
  position: "absolute",
  top: "8%",
  right: "5%",
  width: { xs: 0, md: 170 },
  height: { xs: 0, md: 170 },
  display: { xs: "none", md: "block" },
  pointerEvents: "none",
};

export const ring1Sx = {
  position: "absolute",
  inset: 0,
  borderRadius: "50%",
  border: "1px dashed rgba(249,115,22,.22)",
  animation: "ct_spin 20s linear infinite",
};

export const ring2Sx = {
  position: "absolute",
  inset: 20,
  borderRadius: "50%",
  border: "1px dashed rgba(14,165,233,.16)",
  animation: "ct_spinR 13s linear infinite",
};

export const ringDotSx = (color, top, bottom) => ({
  position: "absolute",
  top,
  bottom,
  left: "46%",
  width: top ? 9 : 7,
  height: top ? 9 : 7,
  borderRadius: "50%",
  bgcolor: color,
  boxShadow: `0 0 10px ${color}`,
});

export const stepBoxSx = (color) => ({
  width: 32,
  height: 32,
  borderRadius: "10px",
  flexShrink: 0,
  background: `${color}22`,
  border: `1px solid ${color}44`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const imgWrapSx = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: "ct_imgIn .9s cubic-bezier(.34,1.2,.64,1) .3s both",
};

export const imgRing1Sx = {
  position: "absolute",
  width: "110%",
  height: "110%",
  borderRadius: "50%",
  border: "1px dashed rgba(14,165,233,.15)",
  animation: "ct_spin 25s linear infinite",
  pointerEvents: "none",
};

export const imgRing2Sx = {
  position: "absolute",
  width: "85%",
  height: "85%",
  borderRadius: "50%",
  border: "1px dashed rgba(249,115,22,.12)",
  animation: "ct_spinR 18s linear infinite",
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
    "radial-gradient(circle,rgba(14,165,233,.2) 0%,rgba(249,115,22,.14) 50%,transparent 75%)",
  animation: "ct_imgGlow 4s ease-in-out infinite",
};

export const imgSx = {
  width: { md: "88%", lg: "92%" },
  maxWidth: 420,
  height: "auto",
  position: "relative",
  zIndex: 2,
  animation: "ct_imgFloat 5s ease-in-out infinite",
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
  animation: "ct_shadowPulse 5s ease-in-out infinite",
};
