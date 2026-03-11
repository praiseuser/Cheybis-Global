import { colors, typography } from "../../../theme";

export const keyframes = {
  "@keyframes cp_bounce": {
    "0%,100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-10px)" },
  },
};

export const wrapSx = {
  bgcolor: colors.background.default,
  pt: { xs: 5, md: 7 },
  pb: { xs: 8, md: 12 },
  minHeight: "60vh",
};

export const activeFiltersSx = { mb: 3.5 };

export const chipSx = (color) => ({
  fontFamily: typography.fontFamily.body,
  fontSize: ".7rem",
  bgcolor: `${color}12`,
  color,
});

export const gridSx = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "1fr 1fr",
    md: "repeat(3,1fr)",
    lg: "repeat(4,1fr)",
  },
  gap: 3,
};

export const emptyIconSx = {
  animation: "cp_bounce 2s ease infinite",
};

export const emptyTitleSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.xl,
  fontWeight: 800,
  color: colors.text.primary,
  mb: 1,
};

export const emptySubSx = {
  fontFamily: typography.fontFamily.body,
  color: colors.text.secondary,
  mb: 3,
};

export const clearBtnSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  bgcolor: colors.primary.main,
  color: "white",
  px: 3,
  py: 1.3,
  borderRadius: "10px",
  cursor: "pointer",
  fontFamily: typography.fontFamily.body,
  fontWeight: 600,
  fontSize: typography.fontSize.sm,
  "&:hover": { bgcolor: colors.primary.light },
};
