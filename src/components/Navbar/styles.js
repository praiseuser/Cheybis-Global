import { colors, typography } from "../../theme";

export const navCss = `
  .nav-link {
    position: relative;
    text-decoration: none;
    padding: 6px 4px;
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: rgba(255,255,255,0.75);
    transition: color 0.2s ease;
    cursor: pointer;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: #F97316;
    border-radius: 2px;
    transform: scaleX(0);
    transition: transform 0.25s ease;
    transform-origin: center;
  }
  .nav-link:hover { color: #fff; }
  .nav-link:hover::after { transform: scaleX(1); }
  .nav-link.active { color: #fff; font-weight: 600; }
  .nav-link.active::after { transform: scaleX(1); }
`;

export const navbarSx = (scrolled) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1200,
  bgcolor: scrolled ? `${colors.primary.dark}F5` : "transparent",
  backdropFilter: scrolled ? "blur(16px)" : "none",
  borderBottom: scrolled
    ? `1px solid rgba(255,255,255,0.08)`
    : "1px solid transparent",
  transition: "all 0.35s ease",
  boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.25)" : "none",
});

export const logoBoxSx = {
  width: 36,
  height: 36,
  borderRadius: "10px",
  background: `linear-gradient(135deg, ${colors.secondary.main}, ${colors.secondary.dark})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: `0 4px 14px ${colors.secondary.main}55`,
};

export const logoTextSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.base,
  fontWeight: typography.fontWeight.extraBold,
  color: "white",
  lineHeight: 1,
};

export const logoSubSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: "0.55rem",
  fontWeight: 600,
  color: colors.secondary.main,
  letterSpacing: 2,
  textTransform: "uppercase",
};

export const drawerPaperSx = {
  width: 280,
  bgcolor: colors.primary.dark,
};

export const drawerTitleSx = {
  fontFamily: typography.fontFamily.heading,
  fontWeight: 800,
  color: "white",
  fontSize: typography.fontSize.lg,
};

export const drawerLinkSx = {
  borderRadius: "10px",
  mb: 0.5,
  textDecoration: "none",
  "&:hover": { bgcolor: "rgba(255,255,255,0.06)" },
};

export const drawerLinkTextSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.sm,
  fontWeight: 500,
  color: "rgba(255,255,255,0.8)",
};
