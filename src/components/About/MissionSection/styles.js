import { colors, typography } from "../../../theme";

export const wrapSx = {
  bgcolor: colors.background.default,
  py: { xs: 9, md: 14 },
  position: "relative",
  overflow: "hidden",
};

export const headingSx = {
  fontFamily: typography.fontFamily.accent,
  fontWeight: 900,
  fontSize: { xs: "1.8rem", md: "2.5rem" },
  color: colors.text.primary,
  lineHeight: 1.15,
  mb: 2.5,
};

export const underlineSx = {
  position: "relative",
  display: "inline-block",
  color: colors.secondary.main,
};

export const bodySx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.base,
  color: colors.text.secondary,
  lineHeight: 1.9,
  mb: 3,
};

export const featureCardSx = {
  display: "flex",
  gap: 2,
  alignItems: "flex-start",
  bgcolor: "white",
  borderRadius: "18px",
  p: 3,
  border: `1px solid ${colors.divider}`,
  boxShadow: "0 4px 20px rgba(10,37,64,.06)",
  transition: "transform .3s cubic-bezier(.34,1.2,.64,1)",
  "&:hover": { transform: "translateX(8px)" },
};

export const iconBoxSx = (color) => ({
  width: 46,
  height: 46,
  borderRadius: "14px",
  flexShrink: 0,
  bgcolor: `${color}15`,
  border: `1px solid ${color}25`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const featureTitleSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.sm,
  fontWeight: 800,
  color: colors.text.primary,
  mb: 0.4,
};

export const featureSubSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: ".8rem",
  color: colors.text.secondary,
  lineHeight: 1.7,
};
