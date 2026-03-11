import { colors, typography } from "../../theme";

export const cdCSS = `
  @keyframes cd_rise  { from{opacity:0;transform:translateY(40px) scale(.97)} to{opacity:1;transform:none} }
  @keyframes cd_left  { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:none} }
  @keyframes cd_right { from{opacity:0;transform:translateX(40px)}  to{opacity:1;transform:none} }
  @keyframes cd_orb   { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.6;transform:scale(1.14)} }
  @keyframes cd_spin  { to{transform:rotate(360deg)} }
  @keyframes cd_spinR { to{transform:rotate(-360deg)} }
  @keyframes cd_pulse { 0%,100%{box-shadow:0 0 0 0 rgba(249,115,22,.5)} 50%{box-shadow:0 0 0 10px rgba(249,115,22,0)} }
  @keyframes cd_grad  { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
  @keyframes cd_float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes cd_sweep { 0%{left:-80%} 100%{left:130%} }
  @keyframes cd_bar   { from{width:0} to{width:var(--w)} }
  @keyframes cd_statIn{ from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:none} }

  /* badge */
  .cd-badge { display:inline-flex;align-items:center;gap:8px;background:rgba(249,115,22,.1);border:1px solid rgba(249,115,22,.3);border-radius:100px;padding:6px 18px;backdrop-filter:blur(8px) }
  .cd-badge-dot { width:7px;height:7px;border-radius:50%;background:#F97316;animation:cd_pulse 1.8s ease infinite }

  /* deco rings */
  .cd-ring-spin  { animation:cd_spin  20s linear infinite }
  .cd-ring-spinr { animation:cd_spinR 13s linear infinite }

  /* sticky enrol card */
  .cd-enrol-card {
    background:#fff;border-radius:24px;
    border:1px solid ${colors.divider};
    box-shadow:0 20px 60px rgba(10,37,64,.12);
    overflow:hidden;position:sticky;top:88px;
  }

  /* enrol button */
  .cd-enrol-btn {
    display:flex;align-items:center;justify-content:center;gap:8px;
    width:100%;padding:16px 24px;border:none;cursor:pointer;border-radius:14px;
    background:linear-gradient(135deg,${colors.secondary.dark},${colors.secondary.main},#FB923C);
    background-size:200% 200%;animation:cd_grad 3s ease infinite;
    color:white;font-family:'Sora',sans-serif;font-size:1.05rem;font-weight:800;
    position:relative;overflow:hidden;
    transition:transform .3s cubic-bezier(.34,1.2,.64,1),box-shadow .3s;
  }
  .cd-enrol-btn::before {
    content:'';position:absolute;top:0;bottom:0;width:50%;
    background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,.28) 50%,transparent 70%);
    left:-80%;pointer-events:none;
  }
  .cd-enrol-btn:hover { transform:translateY(-3px) scale(1.02);box-shadow:0 18px 42px rgba(249,115,22,.45) }
  .cd-enrol-btn:hover::before { animation:cd_sweep .55s ease forwards }

  /* curriculum item */
  .cd-cur-item {
    border-radius:14px;border:1px solid ${colors.divider};
    background:#fff;overflow:hidden;
    transition:border-color .25s,box-shadow .25s;
  }
  .cd-cur-item:hover { border-color:rgba(249,115,22,.3);box-shadow:0 6px 24px rgba(10,37,64,.08) }
  .cd-cur-item-head {
    display:flex;align-items:center;justify-content:space-between;
    padding:16px 20px;cursor:pointer;user-select:none;
  }
  .cd-cur-body { padding:0 20px 16px; }

  /* review card */
  .cd-review {
    background:#fff;border-radius:18px;border:1px solid ${colors.divider};
    padding:24px;
    transition:transform .3s cubic-bezier(.34,1.2,.64,1),box-shadow .25s;
  }
  .cd-review:hover { transform:translateY(-6px);box-shadow:0 20px 50px rgba(10,37,64,.1) }

  /* modal overlay */
  .cd-modal-overlay {
    position:fixed;inset:0;background:rgba(10,37,64,.7);backdrop-filter:blur(8px);
    z-index:1300;display:flex;align-items:center;justify-content:center;padding:20px;
    animation:cd_rise .3s ease both;
  }
  .cd-modal {
    background:#fff;border-radius:28px;width:100%;max-width:500px;
    box-shadow:0 40px 100px rgba(0,0,0,.3);overflow:hidden;
    animation:cd_rise .35s cubic-bezier(.34,1.2,.64,1) both;
  }

  /* modal input */
  .cd-m-input {
    width:100%;padding:13px 16px;
    background:${colors.background.default};
    border:1.5px solid ${colors.divider};border-radius:12px;
    font-family:'Inter',sans-serif;font-size:.9rem;color:${colors.text.primary};
    outline:none;box-sizing:border-box;
    transition:border-color .2s,box-shadow .2s;
  }
  .cd-m-input:focus { border-color:${colors.secondary.main};box-shadow:0 0 0 4px rgba(249,115,22,.1) }
  .cd-m-input::placeholder { color:${colors.text.disabled} }
  .cd-m-label { display:block;font-family:'Inter',sans-serif;font-size:.76rem;font-weight:700;color:${colors.text.primary};margin-bottom:6px }

  /* paystack button */
  .cd-pay-btn {
    width:100%;padding:15px;border:none;cursor:pointer;border-radius:14px;
    background:linear-gradient(135deg,#00C3A5,#00B48A);
    color:white;font-family:'Plus Jakarta Sans',sans-serif;font-size:1rem;font-weight:800;
    display:flex;align-items:center;justify-content:center;gap:10px;
    transition:transform .3s cubic-bezier(.34,1.2,.64,1),box-shadow .3s;
    position:relative;overflow:hidden;
  }
  .cd-pay-btn:hover { transform:translateY(-3px);box-shadow:0 16px 40px rgba(0,195,165,.4) }
  .cd-pay-btn:disabled { opacity:.6;cursor:not-allowed;transform:none }

  /* rating bar */
  .cd-rating-bar {
    height:8px;border-radius:4px;background:${colors.divider};overflow:hidden;flex:1;
  }
  .cd-rating-fill {
    height:100%;border-radius:4px;
    background:linear-gradient(90deg,${colors.accent.yellow},#FB923C);
    animation:cd_bar .8s ease both;
  }
`;

export const heroSx = {
  background: `linear-gradient(150deg,${colors.primary.dark} 0%,#0D2D4F 55%,${colors.primary.main} 100%)`,
  pt: { xs: 13, md: 16 },
  pb: { xs: 8, md: 11 },
  position: "relative",
  overflow: "hidden",
};

export const gridBgSx = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  backgroundImage: `radial-gradient(rgba(255,255,255,.045) 1px,transparent 1px)`,
  backgroundSize: "32px 32px",
};

export const orbSx = (top, right, bottom, left, size, clr, delay = "0s") => ({
  position: "absolute",
  top,
  right,
  bottom,
  left,
  width: size,
  height: size,
  borderRadius: "50%",
  pointerEvents: "none",
  background: `radial-gradient(circle,${clr} 0%,transparent 70%)`,
  animation: `cd_orb 6s ease infinite ${delay}`,
});

export const bodySx = {
  bgcolor: colors.background.default,
  py: { xs: 6, md: 10 },
};
