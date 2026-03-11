import { colors, typography } from "../../theme";

export const footerCss = `
  .footer-link {
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    color: rgba(255,255,255,0.5);
    font-size: 0.85rem;
    font-family: 'Inter', sans-serif;
    transition: color 0.2s ease;
    padding: 3px 0;
    cursor: pointer;
  }
  .footer-link:hover { color: #F97316; }
  .footer-link:hover .footer-arrow { opacity: 1; transform: translateX(3px); }
  .footer-arrow {
    font-size: 12px !important;
    opacity: 0;
    transform: translateX(-4px);
    transition: all 0.2s ease;
  }
  .social-btn {
    width: 36px; height: 36px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.1);
    background: transparent;
    color: rgba(255,255,255,0.5);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    transition: all 0.25s ease;
    text-decoration: none;
  }
  .social-btn:hover {
    background: #F97316;
    border-color: #F97316;
    color: white;
    transform: translateY(-3px);
  }
`;

export const footerWrapperSx = {
  bgcolor: colors.primary.dark,
  pt: { xs: 8, md: 12 },
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, transparent)`,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: `radial-gradient(${colors.primary.light}10 1px, transparent 1px)`,
    backgroundSize: "30px 30px",
    pointerEvents: "none",
  },
};

export const brandNameSx = {
  fontFamily: typography.fontFamily.heading,
  fontWeight: 800,
  color: "white",
  lineHeight: 1,
  fontSize: typography.fontSize.lg,
};

export const brandSubSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: "0.55rem",
  color: colors.secondary.main,
  letterSpacing: 2,
  textTransform: "uppercase",
  fontWeight: 600,
};

export const footerLogoBoxSx = {
  width: 40,
  height: 40,
  borderRadius: "10px",
  background: `linear-gradient(135deg, ${colors.secondary.main}, ${colors.secondary.dark})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const footerDescSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.sm,
  color: "rgba(255,255,255,0.45)",
  lineHeight: 1.8,
  mb: 3,
  maxWidth: 300,
};

export const colHeadingSx = {
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.sm,
  fontWeight: 700,
  color: "white",
  mb: 2.5,
  letterSpacing: 1,
  textTransform: "uppercase",
};

export const newsletterDescSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.xs,
  color: "rgba(255,255,255,0.4)",
  lineHeight: 1.7,
  mb: 2,
};

export const emailInputSx = {
  bgcolor: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  px: 2,
  py: 1.2,
  color: "white",
  fontSize: "0.8rem",
  fontFamily: typography.fontFamily.body,
  outline: "none",
  width: "100%",
  transition: "border-color 0.2s ease",
  "&:focus": { borderColor: colors.secondary.main },
};

export const subscribeButtonSx = {
  bgcolor: colors.secondary.main,
  border: "none",
  borderRadius: "8px",
  px: 2,
  py: 1.2,
  color: "white",
  fontSize: "0.8rem",
  fontWeight: 600,
  fontFamily: typography.fontFamily.body,
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": { bgcolor: colors.secondary.dark },
};

export const bottomBarTextSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.xs,
  color: "rgba(255,255,255,0.25)",
};

export const bottomLinkSx = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.xs,
  color: "rgba(255,255,255,0.25)",
  cursor: "pointer",
  transition: "color 0.2s ease",
  "&:hover": { color: colors.secondary.main },
};
