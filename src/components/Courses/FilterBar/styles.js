import { colors, typography } from "../../../theme";

export const barSx = {
  bgcolor: "white",
  borderBottom: `1px solid ${colors.divider}`,
  position: "sticky",
  top: { xs: 56, md: 72 },
  zIndex: 100,
  boxShadow: "0 4px 20px rgba(10,37,64,.07)",
};

export const scrollRowSx = {
  py: 1.6,
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  overflowX: "auto",
  "&::-webkit-scrollbar": { display: "none" },
};

export const labelSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.xs,
  fontWeight: 700,
  color: colors.text.secondary,
  letterSpacing: 1,
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

export const dividerSx = {
  width: 1,
  height: 26,
  bgcolor: colors.divider,
  mx: 0.5,
  flexShrink: 0,
};

export const chipSx = (active, activeColor) => ({
  display: "inline-flex",
  alignItems: "center",
  px: 2.2,
  py: 0.9,
  borderRadius: "100px",
  cursor: "pointer",
  fontFamily: typography.fontFamily.body,
  fontSize: ".8rem",
  fontWeight: 600,
  border: "1.5px solid",
  whiteSpace: "nowrap",
  userSelect: "none",
  bgcolor: active ? activeColor : "transparent",
  color: active ? "white" : colors.text.secondary,
  borderColor: active ? activeColor : colors.divider,
  transition: "all .22s cubic-bezier(.34,1.2,.64,1)",
  "&:hover": { transform: "translateY(-2px) scale(1.05)" },
});

export const countSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.xs,
  fontWeight: 600,
  color: colors.text.secondary,
  whiteSpace: "nowrap",
};
