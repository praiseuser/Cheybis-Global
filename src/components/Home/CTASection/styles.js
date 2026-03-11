import { colors, typography } from "../../../theme";

export const keyframes = {
  "@keyframes cta_rise": {
    from: { opacity: 0, transform: "translateY(50px) scale(0.96)" },
    to: { opacity: 1, transform: "none" },
  },
  "@keyframes cta_gradShift": {
    "0%,100%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
  },
  "@keyframes cta_badgePop": {
    "0%": { transform: "scale(0) rotate(-10deg)", opacity: 0 },
    "65%": { transform: "scale(1.12) rotate(2deg)" },
    "100%": { transform: "none", opacity: 1 },
  },
  "@keyframes cta_fire": {
    "0%,100%": { transform: "rotate(0) scale(1)" },
    "30%": { transform: "rotate(-14deg) scale(1.25)" },
    "70%": { transform: "rotate(14deg) scale(1.25)" },
  },
  "@keyframes cta_sweep": { from: { left: "-100%" }, to: { left: "150%" } },
  "@keyframes cta_glow": {
    "0%,100%": {
      boxShadow:
        "0 32px 80px rgba(234,107,10,.35), 0 0 0 0 rgba(249,115,22,.3)",
    },
    "50%": {
      boxShadow:
        "0 40px 100px rgba(234,107,10,.5), 0 0 0 16px rgba(249,115,22,0)",
    },
  },
  "@keyframes cta_ring": {
    "0%": { transform: "scale(1)", opacity: 0.55 },
    "100%": { transform: "scale(1.8)", opacity: 0 },
  },
  "@keyframes cta_btnShimmer": { from: { left: "-80%" }, to: { left: "130%" } },
};

export const wrapSx = {
  bgcolor: "white",
  py: { xs: 7, md: 11 },
};

export const cardSx = {
  position: "relative",
  overflow: "hidden",
  borderRadius: "28px",
  background: `linear-gradient(120deg, ${colors.secondary.dark} 0%, ${colors.secondary.main} 40%, #FB923C 72%, #FCD34D 100%)`,
  p: { xs: 5, md: 8 },
  textAlign: "center",
  animation: "cta_glow 4s ease-in-out infinite",
  /* dot grid */
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage: `radial-gradient(rgba(255,255,255,.09) 1px, transparent 1px)`,
    backgroundSize: "22px 22px",
  },
  /* sweep shimmer */
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "40%",
    left: "-100%",
    zIndex: 2,
    pointerEvents: "none",
    background:
      "linear-gradient(105deg,transparent 30%,rgba(255,255,255,.12) 50%,transparent 70%)",
    animation: "cta_sweep 4s ease-in-out 1.5s infinite",
  },
};

export const blobSx = (top, left, right, bottom, size, opacity) => ({
  position: "absolute",
  borderRadius: "50%",
  pointerEvents: "none",
  zIndex: 1,
  width: size,
  height: size,
  filter: "blur(40px)",
  background: `rgba(255,255,255,${opacity})`,
  top,
  left,
  right,
  bottom,
});

export const badgeSx = {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  bgcolor: "rgba(255,255,255,.18)",
  border: "1px solid rgba(255,255,255,.35)",
  backdropFilter: "blur(10px)",
  borderRadius: "100px",
  px: 2.5,
  py: 0.9,
  mb: 3,
};

export const ringSx = (delay = "0s") => ({
  position: "absolute",
  inset: -5,
  borderRadius: "100px",
  border: "1.5px solid rgba(255,255,255,.4)",
  animation: `cta_ring 2s ease-out ${delay} infinite`,
  pointerEvents: "none",
});

export const fireSx = {
  display: "inline-block",
  fontSize: "1rem",
  lineHeight: 1,
  animation: "cta_fire 1.8s ease-in-out infinite",
};

export const headSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: { xs: "1.9rem", sm: "2.6rem", md: "3.2rem" },
  fontWeight: 900,
  lineHeight: 1.08,
  letterSpacing: "-1px",
  mb: 2,
  background: "linear-gradient(120deg,#fff 20%,#FEF9C3 50%,#fff 80%)",
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: "cta_gradShift 4s ease infinite",
};

export const subSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.base,
  color: "rgba(255,255,255,.8)",
  mb: 4.5,
  maxWidth: 420,
  mx: "auto",
  lineHeight: 1.8,
};

export const primaryBtnSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  bgcolor: "white",
  color: colors.secondary.dark,
  px: { xs: 3.5, md: 4 },
  py: 1.7,
  borderRadius: "12px",
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.base,
  fontWeight: 800,
  textDecoration: "none",
  boxShadow: "0 10px 30px rgba(0,0,0,.2)",
  position: "relative",
  overflow: "hidden",
  transition: "transform .3s cubic-bezier(.34,1.2,.64,1), box-shadow .3s",
  "&:hover": {
    transform: "translateY(-4px) scale(1.04)",
    boxShadow: "0 20px 40px rgba(0,0,0,.25)",
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
      "linear-gradient(105deg,transparent 30%,rgba(249,115,22,.3) 50%,transparent 70%)",
  },
  "&:hover::before": { animation: "cta_btnShimmer .55s ease forwards" },
};

export const secondaryBtnSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  bgcolor: "rgba(255,255,255,.16)",
  color: "white",
  border: "1.5px solid rgba(255,255,255,.4)",
  backdropFilter: "blur(8px)",
  px: { xs: 3.5, md: 4 },
  py: 1.7,
  borderRadius: "12px",
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.base,
  fontWeight: 700,
  textDecoration: "none",
  transition: "transform .3s cubic-bezier(.34,1.2,.64,1), background .25s",
  "&:hover": {
    transform: "translateY(-4px) scale(1.03)",
    bgcolor: "rgba(255,255,255,.26)",
  },
};
