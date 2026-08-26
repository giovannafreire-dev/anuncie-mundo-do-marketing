// Ecosystem infographic — central "M" with all fronts radiating out as a constellation.
// Each front is a labeled node with a short descriptor.

const FRONTS = [
  { id: "portal",    title: "Portal editorial",      sub: "Reportagens, artigos, colunas e editoriais",          tag: "250 mil/mês",     icon: "doc",   ring: 0, angle: -90 },
  { id: "newsletter",title: "Newsletter",            sub: "Pauta diária para CMOs e líderes de marketing",       tag: "254 mil assinantes", ring: 0, angle: -36 },
  { id: "social",    title: "Redes sociais",         sub: "Instagram, LinkedIn, TikTok, YouTube, Facebook",      tag: "1 mi+ impactos/mês", ring: 0, angle: 18 },
  { id: "colunas",   title: "Colunas autorais",      sub: "Customer Engagement, Branding, Performance, CX",      tag: "12 verticais",    ring: 0, angle: 72 },
  { id: "pesquisas", title: "Pesquisas e estudos",   sub: "Guia Salarial, panoramas setoriais e levantamentos",  tag: "Anuais",          ring: 0, angle: 144 },
  { id: "podMM",     title: "Podcast Mundo do Marketing", sub: "Bate-papo com CMOs e fundadores do mercado",     tag: "Semanal",         ring: 1, angle: -126 },
  { id: "podCMO",    title: "Podcast CMO Agenda",    sub: "A agenda estratégica de quem lidera marketing",       tag: "Quinzenal",       ring: 1, angle: -54 },
  { id: "podGreen",  title: "Podcast Green Room",    sub: "Os bastidores das marcas que moldam o mercado",       tag: "Quinzenal",       ring: 1, angle: 18 },
  { id: "cmoSummit", title: "CMO Summit",            sub: "O encontro presencial dos CMOs do Brasil",            tag: "Anual · SP",      ring: 1, angle: 90 },
  { id: "b2bSummit", title: "B2B Summit",            sub: "O palco do marketing B2B brasileiro",                 tag: "Anual · SP",      ring: 1, angle: 162 },
];

function Ecosystem() {
  // SVG-coordinate constellation: build a labeled, two-ring layout around a central diamond.
  // Use polar coordinates -> cartesian, viewbox 1000 wide.
  const W = 1100, H = 780, cx = W/2, cy = H/2;
  const R = [260, 360]; // ring radii

  const pos = FRONTS.map(f => {
    const r = R[f.ring];
    const a = (f.angle * Math.PI)/180;
    return { ...f, x: cx + r*Math.cos(a), y: cy + r*Math.sin(a) };
  });

  return (
    <div style={{ position:"relative", width:"100%", aspectRatio: `${W}/${H}`, maxWidth: 1280, margin:"0 auto" }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" style={{ display:"block" }}>
        <defs>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EF7EF1" stopOpacity=".9"/>
            <stop offset="45%" stopColor="#9836F8" stopOpacity=".6"/>
            <stop offset="100%" stopColor="#291059" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="diamond" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#EF7EF1"/>
            <stop offset="50%" stopColor="#9836F8"/>
            <stop offset="100%" stopColor="#5F34A5"/>
          </linearGradient>
          <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#9836F8" stopOpacity=".0"/>
            <stop offset="50%" stopColor="#9836F8" stopOpacity=".55"/>
            <stop offset="100%" stopColor="#9836F8" stopOpacity=".0"/>
          </linearGradient>
        </defs>

        {/* soft halo behind core */}
        <circle cx={cx} cy={cy} r="340" fill="url(#core)" />

        {/* connector lines */}
        {pos.map(p => (
          <line key={"l-"+p.id} x1={cx} y1={cy} x2={p.x} y2={p.y}
                stroke="url(#line)" strokeWidth="1.2" />
        ))}

        {/* ring guides */}
        <circle cx={cx} cy={cy} r={R[0]} fill="none" stroke="#5F34A5" strokeOpacity=".22" strokeDasharray="2 6"/>
        <circle cx={cx} cy={cy} r={R[1]} fill="none" stroke="#5F34A5" strokeOpacity=".18" strokeDasharray="2 6"/>

        {/* diamond core */}
        <g transform={`translate(${cx},${cy}) rotate(45)`}>
          <rect x="-78" y="-78" width="156" height="156" rx="22" fill="url(#diamond)"/>
        </g>
        <g transform={`translate(${cx},${cy})`}>
          <text textAnchor="middle" y="-6" fontFamily="Satoshi, sans-serif" fontWeight="700" fontSize="17" fill="#fff" letterSpacing="-.02em">mundo do</text>
          <text textAnchor="middle" y="18" fontFamily="Satoshi, sans-serif" fontWeight="700" fontSize="17" fontStyle="italic" fill="#fff" letterSpacing="-.02em">marketing</text>
          <text textAnchor="middle" y="42" fontFamily="Syne, sans-serif" fontSize="11" fill="rgba(255,255,255,.7)" letterSpacing=".18em">ECOSSISTEMA</text>
        </g>

        {/* nodes */}
        {pos.map(p => {
          // figure out anchor side for label so it doesn't run off the canvas
          const left = p.x < cx;
          return (
            <g key={p.id} transform={`translate(${p.x},${p.y})`}>
              <circle r="11" fill="#fff" stroke="#9836F8" strokeWidth="2.2"/>
              <circle r="4"  fill="#9836F8"/>
              <g transform={`translate(${left?-18:18},0)`} textAnchor={left?"end":"start"}>
                <text y="-4" fontFamily="Satoshi, sans-serif" fontWeight="700" fontSize="18" fill="#291059" letterSpacing="-.02em">{p.title}</text>
                <text y="16" fontFamily="Inter, sans-serif" fontSize="12" fill="#555F70">{p.sub}</text>
                <text y="36" fontFamily="Syne, sans-serif" fontSize="11" fill="#9836F8" letterSpacing=".12em">{p.tag?.toUpperCase()}</text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

window.Ecosystem = Ecosystem;
