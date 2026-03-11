import { colors, typography } from "../../../theme";

export const wrapSx = { bgcolor: "white", py: { xs: 9, md: 14 } };

export const sectionTitleSx = {
  fontFamily: typography.fontFamily.heading,
  fontWeight: 900,
  fontSize: { xs: "1.9rem", md: "2.8rem" },
  color: colors.text.primary,
  lineHeight: 1.1,
  maxWidth: 460,
  mx: "auto",
};

export const cardSx = {
  borderRadius: "24px",
  overflow: "hidden",
  position: "relative",
  border: `1px solid ${colors.divider}`,
  bgcolor: "white",
  cursor: "default",
  transition: "transform .38s cubic-bezier(.34,1.2,.64,1), box-shadow .3s",
  "&:hover": {
    transform: "translateY(-14px) scale(1.03)",
    boxShadow: "0 40px 80px rgba(10,37,64,.18)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "50%",
    left: "-80%",
    zIndex: 10,
    pointerEvents: "none",
    background:
      "linear-gradient(105deg,transparent 30%,rgba(255,255,255,.45) 50%,transparent 70%)",
  },
  "&:hover::before": { animation: "ab_sweep .6s ease forwards" },
};

export const avatarSx = (color) => ({
  width: "100%",
  aspectRatio: "1",
  background: `linear-gradient(135deg,${color}33,${color}88)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
});

export const rippleSx = (delay = "0s") => ({
  position: "absolute",
  inset: -8,
  borderRadius: "50%",
  border: "2px solid currentColor",
  animation: `ab_ring 2.5s ease-out ${delay} infinite`,
  pointerEvents: "none",
});

export const nameSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.sm,
  fontWeight: 800,
  color: colors.text.primary,
  mb: 0.4,
};

export const roleSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: ".75rem",
  fontWeight: 600,
};
