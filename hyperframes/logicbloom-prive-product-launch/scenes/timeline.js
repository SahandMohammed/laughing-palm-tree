window.__timelines = window.__timelines || {};

const master = gsap.timeline({
  paused: true,
  defaults: { ease: "power4.out" }
});

const flashAt = (time, peak = 0.88) => {
  master.fromTo(
    "#transition-flash",
    { autoAlpha: 0 },
    { autoAlpha: peak, duration: 0.07, ease: "power2.in" },
    time
  );
  master.to(
    "#transition-flash",
    { autoAlpha: 0, duration: 0.13, ease: "power2.out" },
    time + 0.07
  );
};

const sweepAt = (time) => {
  master.set("#transition-sweep", { x: 0, autoAlpha: 0 }, time);
  master.to(
    "#transition-sweep",
    { x: 2050, autoAlpha: 0.92, duration: 0.28, ease: "expo.in" },
    time + 0.01
  );
  master.to(
    "#transition-sweep",
    { autoAlpha: 0, duration: 0.07, ease: "power2.out" },
    time + 0.27
  );
};

/* Global light atmosphere — slow, continuous, subordinate to content. */
master.fromTo(
  "#ambient-a",
  { x: -30, y: 0, scale: 0.96 },
  { x: 190, y: 260, scale: 1.15, duration: 47.432, ease: "none" },
  0
);
master.fromTo(
  "#ambient-b",
  { x: 30, y: 10, scale: 1 },
  { x: -210, y: -250, scale: 1.20, duration: 47.432, ease: "none" },
  0
);
master.fromTo(
  "#ambient-c",
  { x: 0, y: 0, scale: 1 },
  { x: -150, y: -160, scale: 1.22, duration: 47.432, ease: "none" },
  0
);

/* 01 — A great experience shouldn't end at the door. */
master.from("#scene01 .topline", { y: -18, autoAlpha: 0, duration: 0.42 }, 0.08);
master.from("#cold-title-a", { yPercent: 118, duration: 0.62 }, 0.28);
master.from("#cold-title-b", { yPercent: 118, duration: 0.66 }, 0.42);
master.from("#cold-rule", { scaleX: 0, duration: 0.48, ease: "expo.out" }, 0.72);
master.from("#cold-body", { y: 26, autoAlpha: 0, duration: 0.48 }, 0.80);
master.from("#cold-lens", { x: 250, scale: 0.58, rotate: -20, autoAlpha: 0, duration: 0.90, ease: "expo.out" }, 0.14);
master.from("#cold-mark-wrap", { x: 110, y: 24, scale: 0.62, autoAlpha: 0, duration: 0.62 }, 0.72);
master.to("#cold-lens", { x: -80, y: 130, rotate: 8, scale: 1.10, duration: 1.55, ease: "sine.inOut" }, 0.82);

flashAt(2.62, 0.90);

/* 02 — Privé identity */
master.from("#scene02 .topline", { y: -18, autoAlpha: 0, duration: 0.36 }, 2.77);
master.from("#identity-panel", { y: 150, rotateX: 8, rotateY: -5, scale: 0.91, autoAlpha: 0, duration: 0.86, ease: "expo.out" }, 2.82);
master.from("#identity-panel .eyebrow", { x: -34, autoAlpha: 0, duration: 0.42 }, 3.24);
master.from("#identity-panel .prive-logo", { y: 32, scale: 0.92, autoAlpha: 0, duration: 0.54 }, 3.34);
master.from("#identity-mark", { x: 100, y: 60, scale: 0.82, autoAlpha: 0, duration: 0.64 }, 4.12);
master.from("#identity-caption", { x: -70, autoAlpha: 0, duration: 0.62 }, 4.42);
master.to("#identity-panel", { y: -28, rotateY: 1.6, scale: 1.015, duration: 2.25, ease: "sine.inOut" }, 5.10);
master.to("#identity-mark", { y: -22, rotate: 2.5, duration: 1.65, ease: "sine.inOut" }, 5.42);

flashAt(8.20, 0.96);

/* 03 — in the right hands */
master.from("#right-hands-card", { scale: 0.90, y: 46, autoAlpha: 0, duration: 0.56, ease: "expo.out" }, 8.30);
master.from("#right-hands-card .prive-logo", { scale: 0.92, autoAlpha: 0, duration: 0.38 }, 8.45);
master.from("#right-hands-copy", { y: 24, autoAlpha: 0, duration: 0.36 }, 8.66);
master.to("#right-hands-card", { scale: 1.025, duration: 1.02, ease: "sine.inOut" }, 8.82);

sweepAt(10.00);

/* 04 — new digital presence */
master.from("#scene04 .topline", { y: -18, autoAlpha: 0, duration: 0.30 }, 10.14);
master.from("#presence-title", { yPercent: 115, duration: 0.48 }, 10.22);
master.from("#presence-copy .eyebrow", { y: 18, autoAlpha: 0, duration: 0.30 }, 10.20);
master.from("#presence-browser", { y: 210, rotateX: 10, rotateY: -9, scale: 0.78, autoAlpha: 0, duration: 0.78, ease: "expo.out" }, 10.36);
master.to("#presence-browser", { y: -24, rotateX: 0, rotateY: 0, scale: 1.02, duration: 1.38, ease: "sine.inOut" }, 11.08);

flashAt(12.44, 0.84);

/* 05 — real website */
master.from("#website-full", { y: 100, scale: 0.94, autoAlpha: 0, duration: 0.58, ease: "expo.out" }, 12.55);
master.from("#website-caption", { x: -40, autoAlpha: 0, duration: 0.34 }, 12.82);
master.from("#website-float", { x: 90, y: 30, scale: 0.86, autoAlpha: 0, duration: 0.46 }, 12.90);
master.to("#website-shot-full", { y: -165, duration: 1.78, ease: "power1.inOut" }, 12.74);
master.to("#website-float", { y: -18, rotate: 1.2, duration: 1.08, ease: "sine.inOut" }, 13.64);

flashAt(14.86, 0.92);

/* 06 — invitation experience */
master.from("#scene06 .topline", { y: -16, autoAlpha: 0, duration: 0.30 }, 14.98);
master.from("#invite-ghost-a", { x: -90, y: 70, rotate: -15, autoAlpha: 0, duration: 0.48 }, 15.04);
master.from("#invite-ghost-b", { x: 90, y: 70, rotate: 15, autoAlpha: 0, duration: 0.48 }, 15.10);
master.from("#invite-card", { y: 150, rotateX: 10, scale: 0.88, autoAlpha: 0, duration: 0.72, ease: "expo.out" }, 15.12);
master.to("#invite-card", { y: -28, rotateY: 2, duration: 1.40, ease: "sine.inOut" }, 15.82);
master.to("#invite-ghost-a", { x: -30, rotate: -4, duration: 1.18, ease: "sine.inOut" }, 15.88);
master.to("#invite-ghost-b", { x: 30, rotate: 4, duration: 1.18, ease: "sine.inOut" }, 15.88);

sweepAt(17.56);

/* 07 — infrastructure */
master.from("#scene07 .topline", { y: -18, autoAlpha: 0, duration: 0.30 }, 17.68);
master.from("#infra-title", { yPercent: 115, duration: 0.50 }, 17.76);
master.from("#infra-core", { scale: 0.62, autoAlpha: 0, duration: 0.58, ease: "expo.out" }, 18.02);
master.from(["#infra-web","#infra-system","#infra-devices","#infra-ops"], { scale: 0.84, y: 36, autoAlpha: 0, stagger: 0.10, duration: 0.44 }, 18.14);
master.from(["#infra-line-a","#infra-line-b","#infra-line-c","#infra-line-d"], { scaleX: 0, stagger: 0.07, duration: 0.38, ease: "expo.out" }, 18.34);
master.to("#infra-core", { scale: 1.05, duration: 1.15, ease: "sine.inOut" }, 18.92);
master.to(["#infra-web","#infra-devices"], { y: -16, duration: 0.95, ease: "sine.inOut" }, 19.02);
master.to(["#infra-system","#infra-ops"], { y: 16, duration: 0.95, ease: "sine.inOut" }, 19.02);

flashAt(20.27, 0.94);

/* 08 — something deeper */
master.from("#deeper-lens", { scale: 0.60, rotate: -13, autoAlpha: 0, duration: 0.66, ease: "expo.out" }, 20.38);
master.from("#deeper-copy .eyebrow", { y: 18, autoAlpha: 0, duration: 0.30 }, 20.42);
master.from("#deeper-title", { yPercent: 120, duration: 0.54 }, 20.47);
master.to("#deeper-lens", { scale: 1.10, rotate: 7, y: -20, duration: 1.18, ease: "sine.inOut" }, 20.90);

sweepAt(22.18);

/* 09 — management system */
master.from("#scene09 .topline", { y: -18, autoAlpha: 0, duration: 0.30 }, 22.30);
master.from("#management-title .eyebrow", { y: 18, autoAlpha: 0, duration: 0.28 }, 22.36);
master.from("#management-heading", { yPercent: 116, duration: 0.50 }, 22.40);
master.from("#management-architecture .system-core", { y: 120, scale: 0.80, autoAlpha: 0, duration: 0.72, ease: "expo.out" }, 22.64);
master.from(["#mod-ops","#mod-services","#mod-customers","#mod-team"], { y: 55, scale: 0.82, autoAlpha: 0, stagger: 0.13, duration: 0.48 }, 23.04);
master.to("#management-architecture .system-core", { y: -24, scale: 1.02, duration: 1.25, ease: "sine.inOut" }, 23.84);
master.to(["#mod-ops","#mod-customers"], { x: -22, duration: 1.05, ease: "sine.inOut" }, 24.08);
master.to(["#mod-services","#mod-team"], { x: 22, duration: 1.05, ease: "sine.inOut" }, 24.08);

flashAt(25.62, 0.82);

/* 10 — connecting operations, services, customers, team */
master.from("#scene10 .topline", { y: -16, autoAlpha: 0, duration: 0.30 }, 25.74);
master.from("#connection-heading", { yPercent: 116, duration: 0.48 }, 25.82);
master.from(["#connect-ops","#connect-services","#connect-customers","#connect-team"], { y: 70, scale: 0.86, autoAlpha: 0, stagger: 0.22, duration: 0.46 }, 26.02);
master.from("#one-experience", { y: 80, scale: 0.92, autoAlpha: 0, duration: 0.52, ease: "expo.out" }, 27.10);
master.to(["#connect-ops","#connect-customers"], { x: 12, y: -10, duration: 1.00, ease: "sine.inOut" }, 27.54);
master.to(["#connect-services","#connect-team"], { x: -12, y: 10, duration: 1.00, ease: "sine.inOut" }, 27.54);
master.to("#one-experience", { scale: 1.025, duration: 0.86, ease: "sine.inOut" }, 28.00);

flashAt(29.00, 0.94);

/* 11 — still building */
master.from("#still-line", { scaleX: 0, duration: 0.36, ease: "expo.out" }, 29.12);
master.from("#still-title", { yPercent: 118, duration: 0.52 }, 29.22);
master.to("#still-title", { scale: 1.018, duration: 0.90, ease: "sine.inOut" }, 29.58);

sweepAt(30.52);

/* 12 — mobile reveal */
master.from("#scene12 .topline", { y: -18, autoAlpha: 0, duration: 0.30 }, 30.65);
master.from("#mobile-reveal-title", { yPercent: 116, duration: 0.52 }, 30.72);
master.from("#mobile-phone", { y: 320, rotateX: 12, rotateY: -14, rotateZ: -4, scale: 0.80, autoAlpha: 0, duration: 0.86, ease: "expo.out" }, 30.88);
master.to("#mobile-phone", { y: -34, rotateX: 0, rotateY: 2, rotateZ: 0, scale: 1.01, duration: 1.52, ease: "sine.inOut" }, 31.72);

flashAt(33.42, 0.84);

/* 13 — mobile customer experience */
master.from("#scene13 .topline", { y: -18, autoAlpha: 0, duration: 0.30 }, 33.54);
master.from("#mobile-features-title", { yPercent: 116, duration: 0.52 }, 33.60);
master.from("#feature-phone", { y: 180, scale: 0.88, rotateY: -6, autoAlpha: 0, duration: 0.72, ease: "expo.out" }, 33.82);
master.from(["#feature-services","#feature-master","#feature-time","#feature-connected"], { x: -26, autoAlpha: 0, stagger: 0.60, duration: 0.38 }, 34.18);
master.from("#mobile-chip-a", { x: -70, scale: 0.82, autoAlpha: 0, duration: 0.36 }, 34.34);
master.from("#mobile-chip-b", { x: 70, scale: 0.82, autoAlpha: 0, duration: 0.36 }, 35.12);
master.from("#mobile-chip-c", { x: -70, scale: 0.82, autoAlpha: 0, duration: 0.36 }, 35.90);
master.to("#feature-phone", { y: -32, rotateY: 1.8, duration: 2.55, ease: "sine.inOut" }, 35.34);
master.to("#mobile-chip-a", { y: -22, duration: 1.60, ease: "sine.inOut" }, 36.02);
master.to("#mobile-chip-b", { y: 20, duration: 1.60, ease: "sine.inOut" }, 36.02);
master.to("#mobile-chip-c", { y: -16, duration: 1.60, ease: "sine.inOut" }, 36.02);

flashAt(38.51, 0.90);

/* 14 — one connected experience */
master.from("#scene14 .topline", { y: -16, autoAlpha: 0, duration: 0.30 }, 38.63);
master.from("#ecosystem-title", { yPercent: 116, duration: 0.50 }, 38.68);
master.from("#eco-web", { y: 80, rotateX: 6, scale: 0.92, autoAlpha: 0, duration: 0.58, ease: "expo.out" }, 38.90);
master.from("#eco-invite", { x: -70, y: 40, rotate: -6, autoAlpha: 0, duration: 0.48 }, 39.18);
master.from("#eco-system", { x: 70, y: 50, rotate: 5, autoAlpha: 0, duration: 0.48 }, 39.30);
master.from("#eco-phone", { y: 90, scale: 0.82, autoAlpha: 0, duration: 0.48 }, 39.42);
master.to("#ecosystem-stage", { scale: 0.95, y: -34, duration: 1.22, ease: "sine.inOut" }, 39.94);

sweepAt(41.50);

/* 15 — designed and built by LogicBloom */
master.from("#creator-lockup .eyebrow", { y: 20, autoAlpha: 0, duration: 0.28 }, 41.63);
master.from("#creator-logo", { y: 32, scale: 0.90, autoAlpha: 0, duration: 0.52, ease: "expo.out" }, 41.67);
master.from("#client-chip", { y: 46, scale: 0.90, autoAlpha: 0, duration: 0.44 }, 41.92);
master.to("#creator-logo", { scale: 1.025, duration: 0.76, ease: "sine.inOut" }, 42.42);

flashAt(43.34, 0.96);

/* 16 — final statement + 1.8s hold */
master.from("#final-logo", { y: 28, scale: 0.92, autoAlpha: 0, duration: 0.50, ease: "expo.out" }, 43.46);
master.from("#final-title-a", { yPercent: 116, duration: 0.52 }, 43.66);
master.from("#final-title-b", { yPercent: 116, duration: 0.56 }, 43.82);
master.from("#final-accent", { scaleX: 0, transformOrigin: "center center", duration: 0.44, ease: "expo.out" }, 44.20);
master.from("#final-sub", { y: 18, autoAlpha: 0, duration: 0.34 }, 44.36);
master.to("#final-logo", { scale: 1.015, y: -8, duration: 2.20, ease: "sine.inOut" }, 44.62);
master.to("#final-copy", { y: -8, duration: 2.20, ease: "sine.inOut" }, 44.62);

/* Explicit hold through the authored composition end. */
master.to({}, { duration: 0.001 }, 47.431);

window.__timelines["logicbloom-prive-launch"] = master;
