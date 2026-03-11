import { colors, typography } from "../../../theme";

export const wrapSx = {
  bgcolor: colors.background.default,
  py: { xs: 9, md: 14 },
};

export const sectionTitleSx = {
  fontFamily: typography.fontFamily.heading,
  fontWeight: 900,
  fontSize: { xs: "1.9rem", md: "2.8rem" },
  color: colors.text.primary,
  lineHeight: 1.1,
};

export const yearSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.xs,
  fontWeight: 700,
  letterSpacing: 2,
  textTransform: "uppercase",
  mb: 0.5,
};

export const titleSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.md,
  fontWeight: 800,
  color: colors.text.primary,
  mb: 0.8,
};

export const descSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.sm,
  color: colors.text.secondary,
  lineHeight: 1.8,
};

export const dotSx = {
  width: 14,
  height: 14,
  borderRadius: "50%",
  flexShrink: 0,
  boxShadow: "0 0 0 4px rgba(249,115,22,.2)",
  animation: "ab_pulse 2s ease infinite",
};

export const lineSx = { width: 2, flex: 1, minHeight: 32, borderRadius: 2 };
