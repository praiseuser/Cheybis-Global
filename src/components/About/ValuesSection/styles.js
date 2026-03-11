import { colors, typography } from "../../../theme";

export const wrapSx = {
  background: `linear-gradient(150deg,${colors.primary.dark} 0%,#0D2D4F 60%,${colors.primary.main} 100%)`,
  py: { xs: 9, md: 14 },
  position: "relative",
  overflow: "hidden",
};

export const sectionTitleSx = {
  fontFamily: typography.fontFamily.heading,
  fontWeight: 900,
  color: "white",
  fontSize: { xs: "1.9rem", md: "2.8rem" },
  lineHeight: 1.1,
  maxWidth: 480,
  mx: "auto",
};

export const cardSx = {
  borderRadius: "22px",
  border: "1px solid rgba(255,255,255,.1)",
  background: "rgba(255,255,255,.05)",
  backdropFilter: "blur(14px)",
  p: "32px 28px",
  position: "relative",
  overflow: "hidden",
  transition:
    "transform .35s cubic-bezier(.34,1.2,.64,1), box-shadow .3s, border-color .3s",
  "&:hover": {
    transform: "translateY(-10px) scale(1.02)",
    boxShadow: "0 32px 70px rgba(0,0,0,.35)",
    borderColor: "rgba(255,255,255,.22)",
  },
  "&:hover .val-icon": { transform: "scale(1.18) rotate(-6deg)" },
};

export const iconSx = (color) => ({
  width: 56,
  height: 56,
  borderRadius: "18px",
  mb: 3,
  className: "val-icon",
  background: `linear-gradient(135deg,${color}30,${color}12)`,
  border: `1.5px solid ${color}40`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform .35s cubic-bezier(.34,1.2,.64,1)",
});

export const valTitleSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.md,
  fontWeight: 800,
  color: "white",
  mb: 1.5,
};

export const valDescSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.sm,
  color: "rgba(255,255,255,.5)",
  lineHeight: 1.8,
};
