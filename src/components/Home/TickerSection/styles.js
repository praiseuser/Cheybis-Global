import { colors, typography } from "../../../theme";

export const tickerKeyframes = {
  "@keyframes ticker_move": {
    from: { transform: "translateX(0)" },
    to: { transform: "translateX(-50%)" },
  },
};

export const wrapSx = {
  bgcolor: colors.primary.dark,
  py: 2,
  overflow: "hidden",
  borderTop: "1px solid rgba(255,255,255,0.06)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  position: "relative",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 120,
    zIndex: 2,
    pointerEvents: "none",
  },
  "&::before": {
    left: 0,
    background: `linear-gradient(90deg, ${colors.primary.dark}, transparent)`,
  },
  "&::after": {
    right: 0,
    background: `linear-gradient(-90deg, ${colors.primary.dark}, transparent)`,
  },
};

export const trackSx = {
  display: "flex",
  whiteSpace: "nowrap",
  animation: "ticker_move 26s linear infinite",
};

export const itemSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1.2,
  px: 3.5,
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.sm,
  fontWeight: 600,
  color: "rgba(255,255,255,0.42)",
  whiteSpace: "nowrap",
  transition: "color .2s",
  "&::after": {
    content: '""',
    display: "inline-block",
    width: 4,
    height: 4,
    borderRadius: "50%",
    bgcolor: "rgba(249,115,22,0.35)",
    ml: 3.5,
  },
};

export const iconSx = {
  fontSize: 13,
  color: colors.secondary.main,
  opacity: 0.8,
  flexShrink: 0,
};
