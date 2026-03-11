import { colors, typography } from "../../../theme";

export const wrapSx = {
  bgcolor: "white",
  py: { xs: 5, md: 7 },
  borderBottom: `1px solid ${colors.divider}`,
};

export const floatSx = [
  { animation: "ab_float 5s ease-in-out infinite" },
  { animation: "ab_float 6s ease-in-out infinite .5s" },
  { animation: "ab_float 4.5s ease-in-out infinite 1s" },
  { animation: "ab_float 5.5s ease-in-out infinite 1.5s" },
];

export const valSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: { xs: "2rem", md: "2.6rem" },
  fontWeight: 900,
  color: colors.primary.main,
  lineHeight: 1,
};

export const lblSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.xs,
  color: colors.text.secondary,
  fontWeight: 500,
  mt: 0.5,
};
