import { colors, typography } from "../../../theme";

export const wrapSx = {
  background: `linear-gradient(120deg,${colors.secondary.dark} 0%,${colors.secondary.main} 45%,#FB923C 75%,#FCD34D 100%)`,
  py: { xs: 8, md: 11 },
  position: "relative",
  overflow: "hidden",
};

export const dotGridSx = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  backgroundImage: `radial-gradient(rgba(255,255,255,.1) 1px,transparent 1px)`,
  backgroundSize: "22px 22px",
};

export const blobSx = (top, left, right, bottom, size, opacity) => ({
  position: "absolute",
  borderRadius: "50%",
  pointerEvents: "none",
  top,
  left,
  right,
  bottom,
  width: size,
  height: size,
  background: `rgba(255,255,255,${opacity})`,
  filter: "blur(50px)",
});

export const headingSx = {
  fontFamily: typography.fontFamily.heading,
  fontWeight: 900,
  color: "white",
  fontSize: { xs: "1.9rem", md: "2.8rem" },
  lineHeight: 1.1,
  mb: 2,
};

export const subSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.base,
  color: "rgba(255,255,255,.8)",
  mb: 4,
  maxWidth: 400,
  mx: "auto",
  lineHeight: 1.8,
};

export const primaryBtnSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  bgcolor: "white",
  color: colors.secondary.dark,
  px: 4,
  py: 1.7,
  borderRadius: "12px",
  textDecoration: "none",
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.base,
  fontWeight: 800,
  boxShadow: "0 10px 30px rgba(0,0,0,.18)",
  transition: "all .3s cubic-bezier(.34,1.2,.64,1)",
  "&:hover": {
    transform: "translateY(-4px) scale(1.04)",
    boxShadow: "0 20px 40px rgba(0,0,0,.22)",
  },
};

export const secondaryBtnSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  bgcolor: "rgba(255,255,255,.16)",
  color: "white",
  border: "1.5px solid rgba(255,255,255,.4)",
  px: 4,
  py: 1.7,
  borderRadius: "12px",
  textDecoration: "none",
  backdropFilter: "blur(8px)",
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.base,
  fontWeight: 700,
  transition: "all .3s ease",
  "&:hover": {
    bgcolor: "rgba(255,255,255,.26)",
    transform: "translateY(-4px)",
  },
};
