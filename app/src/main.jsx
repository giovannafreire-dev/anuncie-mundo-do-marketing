// Auto-gerado: entrada Vite. React/ReactDOM via npm (produção), JSX pré-compilado.
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
const ReactDOM = ReactDOMClient;

/* ============================================================
   ecosystem-infographic.js
   ============================================================ */
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

/* ============================================================
   braze-case-study.js
   ============================================================ */
// Braze case study — visual narrative of how an integrated ABM strategy plays out
// across the Mundo do Marketing ecosystem. 5-act story laid out as a flowing timeline.

const BRAZE_ACTS = [
  {
    n: "01",
    surface: "Customer Engagement",
    title: "Programa de colunistas",
    titleLines: ["Programa", "de colunistas"],
    body: "A Braze ancora a estratégia em uma coluna mensal sobre Customer Engagement. Artigos assinados por executivos da marca e por clientes que viraram referência: Itaú, iFood, Mercado Livre e Pernambucanas.",
    asset: "colunistas",
    metric: "3 artigos por colunista",
  },
  {
    n: "02",
    surface: "Convites a contas-alvo",
    title: "Podcast no Mundo do Marketing",
    titleLines: ["Podcast Customer Engagement", "no Mundo do Marketing"],
    body: "Para cada conta-alvo do funil, o Mundo do Marketing convida o CMO da empresa para gravar um episódio. A pauta é jornalística; o relacionamento, estratégico. O ABM começa antes da primeira reunião comercial.",
    asset: "podcast",
    metric: "1 episódio por conta-alvo",
    podcastMetrics: [
      { value:"1ª",      label:"temporada"    },
      { value:"6",       label:"episódios"    },
      { value:"+15",     label:"convidados"   },
      { value:"+50 mil", label:"visualizações" },
    ],
  },
  {
    n: "03",
    surface: "CMO Meetup · Pasta Experience",
    title: "Eventos de relacionamentos",
    titleLines: ["Eventos de", "relacionamentos"],
    body: "Encontros presenciais curados pelo Mundo do Marketing reúnem o ecossistema: clientes, prospects e influenciadores da marca dividem a mesa. A Braze é a anfitriã, não a patrocinadora.",
    asset: "event",
    metric: "4 encontros/ano",
  },
  {
    n: "04",
    surface: "Portal Mundo do Marketing",
    title: "Matérias Editoriais",
    titleLines: ["Matérias", "Editoriais"],
    body: "Cada novo colunista — sempre um cliente Braze — vira manchete no portal: entrevista de abertura, releitura da carreira, posicionamento como referência do mercado. Conteúdo que constrói marca para o cliente e para a Braze.",
    asset: "article",
    metric: "Top 5 do portal",
  },
  {
    n: "05",
    surface: "Repercussão e amplificação",
    title: "Redes sociais & newsletter",
    titleLines: ["Redes sociais", "& newsletter"],
    body: "Cortes do podcast, citações da coluna e fotos dos eventos circulam por Instagram, LinkedIn, newsletter diária e WhatsApp. Um único projeto editorial gera dezenas de pontos de contato com a base.",
    asset: "social",
    metric: "1 mi+ impressões",
  },
];

// Tiny iconographic illustrations rendered as SVG. Each is a stylized representation
// of the surface — not literal screenshots.
function ActIllustration({ kind }) {
  const common = { viewBox: "0 0 200 120", width: "100%", height: "100%" };
  if (kind === "column") {
    return (
      <svg {...common}>
        <rect x="14" y="12" width="172" height="96" rx="8" fill="#fff" stroke="#E2D8F5"/>
        <rect x="26" y="22" width="64" height="6" rx="3" fill="#9836F8"/>
        <rect x="26" y="34" width="148" height="9" rx="3" fill="#291059"/>
        <rect x="26" y="46" width="120" height="9" rx="3" fill="#291059"/>
        <rect x="26" y="64" width="148" height="4" rx="2" fill="#C7C2D6"/>
        <rect x="26" y="72" width="148" height="4" rx="2" fill="#C7C2D6"/>
        <rect x="26" y="80" width="120" height="4" rx="2" fill="#C7C2D6"/>
        <rect x="26" y="94" width="28" height="6" rx="3" fill="#AB6ED1"/>
      </svg>
    );
  }
  if (kind === "podcast") {
    return (
      <svg {...common}>
        <rect x="14" y="12" width="172" height="96" rx="8" fill="url(#pBg)"/>
        <defs>
          <linearGradient id="pBg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#291059"/>
            <stop offset="100%" stopColor="#9836F8"/>
          </linearGradient>
        </defs>
        <circle cx="100" cy="58" r="22" fill="#fff" opacity=".95"/>
        <polygon points="94,48 94,68 112,58" fill="#291059"/>
        {[0,1,2,3,4,5,6,7,8,9,10].map(i => {
          const h = [6,12,18,10,22,28,18,12,16,8,14][i];
          return <rect key={i} x={26+i*15} y={92-h} width="6" height={h} rx="2" fill="#AB6ED1" opacity={i===4||i===5?1:.6}/>;
        })}
      </svg>
    );
  }
  if (kind === "event") {
    return (
      <svg {...common}>
        <rect x="14" y="12" width="172" height="96" rx="8" fill="#101010"/>
        {/* stage spotlight */}
        <ellipse cx="100" cy="98" rx="68" ry="14" fill="#9836F8" opacity=".4"/>
        {/* silhouettes */}
        {[40,60,80,100,120,140,160].map((x,i) => (
          <g key={i}>
            <circle cx={x} cy={62+(i%2)*4} r="6" fill="#fff" opacity={.5+(i%3)*.15}/>
            <rect x={x-7} y={68+(i%2)*4} width="14" height="22" rx="3" fill="#fff" opacity={.5+(i%3)*.15}/>
          </g>
        ))}
        <rect x="26" y="22" width="40" height="5" rx="2" fill="#AB6ED1"/>
      </svg>
    );
  }
  if (kind === "article") {
    return (
      <svg {...common}>
        <rect x="14" y="12" width="172" height="96" rx="8" fill="#fff" stroke="#E2D8F5"/>
        <rect x="26" y="22" width="72" height="68" rx="6" fill="url(#aImg)"/>
        <defs>
          <linearGradient id="aImg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#5F34A5"/>
            <stop offset="100%" stopColor="#AB6ED1"/>
          </linearGradient>
        </defs>
        <circle cx="62" cy="56" r="14" fill="#fff" opacity=".25"/>
        <rect x="108" y="22" width="40" height="5" rx="2" fill="#9836F8"/>
        <rect x="108" y="34" width="64" height="7" rx="3" fill="#291059"/>
        <rect x="108" y="44" width="56" height="7" rx="3" fill="#291059"/>
        <rect x="108" y="62" width="64" height="3" rx="1.5" fill="#C7C2D6"/>
        <rect x="108" y="70" width="56" height="3" rx="1.5" fill="#C7C2D6"/>
        <rect x="108" y="78" width="48" height="3" rx="1.5" fill="#C7C2D6"/>
      </svg>
    );
  }
  // social
  return (
    <svg {...common}>
      <rect x="14" y="12" width="172" height="96" rx="8" fill="#FBFBFB" stroke="#E2D8F5"/>
      {/* phone */}
      <rect x="24" y="20" width="48" height="80" rx="8" fill="#291059"/>
      <rect x="28" y="28" width="40" height="64" rx="4" fill="#fff"/>
      <circle cx="48" cy="44" r="6" fill="#AB6ED1"/>
      <rect x="32" y="56" width="32" height="3" rx="1.5" fill="#9836F8"/>
      <rect x="32" y="64" width="24" height="3" rx="1.5" fill="#C7C2D6"/>
      <rect x="32" y="72" width="28" height="3" rx="1.5" fill="#C7C2D6"/>
      {/* envelopes */}
      <rect x="82" y="28" width="44" height="30" rx="3" fill="#fff" stroke="#9836F8"/>
      <path d="M82 28 L104 46 L126 28" fill="none" stroke="#9836F8" strokeWidth="1.5"/>
      <rect x="82" y="64" width="44" height="30" rx="3" fill="#fff" stroke="#9836F8"/>
      <path d="M82 64 L104 82 L126 64" fill="none" stroke="#9836F8" strokeWidth="1.5"/>
      {/* feed cards */}
      <rect x="136" y="28" width="44" height="30" rx="3" fill="#9836F8"/>
      <rect x="142" y="36" width="20" height="3" rx="1.5" fill="#fff" opacity=".8"/>
      <rect x="142" y="42" width="30" height="3" rx="1.5" fill="#fff" opacity=".6"/>
      <rect x="142" y="48" width="24" height="3" rx="1.5" fill="#fff" opacity=".6"/>
      <rect x="136" y="64" width="44" height="30" rx="3" fill="#AB6ED1"/>
      <rect x="142" y="72" width="20" height="3" rx="1.5" fill="#fff" opacity=".9"/>
      <rect x="142" y="78" width="30" height="3" rx="1.5" fill="#fff" opacity=".7"/>
      <rect x="142" y="84" width="24" height="3" rx="1.5" fill="#fff" opacity=".7"/>
    </svg>
  );
}

const EVENT_PHOTOS = Array.from({length:18}, (_,i)=>window.__res(`assets/event/event-${String(i+1).padStart(2,'0')}.png`));

function EventCarousel() {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const n = EVENT_PHOTOS.length;
  const go = React.useCallback((d)=> setIdx(p => (p + d + n) % n), [n]);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx(p => (p+1)%n), 4000);
    return () => clearInterval(t);
  }, [paused, n]);

  const arrowBtn = {
    width:44, height:44, borderRadius:999, border:"1px solid rgba(47,19,89,.14)",
    background:"#fff", color:"#291059", cursor:"pointer",
    display:"grid", placeItems:"center", fontSize:18, lineHeight:1,
    transition:"background .15s, color .15s, border-color .15s",
    boxShadow:"0 2px 10px rgba(47,19,89,.06)",
  };
  const onEnter = (e)=>{ e.currentTarget.style.background="#9836F8"; e.currentTarget.style.color="#fff"; e.currentTarget.style.borderColor="#9836F8"; };
  const onLeave = (e)=>{ e.currentTarget.style.background="#fff"; e.currentTarget.style.color="#291059"; e.currentTarget.style.borderColor="rgba(47,19,89,.14)"; };

  return (
    <div onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}>
      {/* moldura */}
      <div style={{
        position:"relative", borderRadius:24, overflow:"hidden",
        aspectRatio:"5/3", background:"#F4EEFF",
        boxShadow:"0 24px 60px rgba(47,19,89,.18)",
      }}>
        {EVENT_PHOTOS.map((src,i) => (
          <img key={i} src={src} alt={`Pasta Experience — foto ${i+1}`} loading="lazy" style={{
            position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover",
            opacity: i===idx?1:0, transition:"opacity .6s ease",
          }}/>
        ))}
      </div>
      {/* controles embaixo */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:18, marginTop:18 }}>
        <button aria-label="Foto anterior" style={arrowBtn} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={()=>go(-1)}>←</button>
        <div style={{ display:"flex", gap:7 }}>
          {EVENT_PHOTOS.map((_,i)=>(
            <button key={i} aria-label={`Ir para foto ${i+1}`} onClick={()=>setIdx(i)} style={{
              width: i===idx?22:7, height:7, borderRadius:999, border:"none", padding:0, cursor:"pointer",
              background: i===idx?"#9836F8":"rgba(47,19,89,.18)",
              transition:"width .25s, background .25s",
            }}/>
          ))}
        </div>
        <button aria-label="Próxima foto" style={arrowBtn} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={()=>go(1)}>→</button>
      </div>
    </div>
  );
}

function BrazeCase() {
  return (
    <div>
      {BRAZE_ACTS.map((act, i) => {
        const flip = i % 2 === 1;
        return (
          <div key={act.n} className="braze-act" style={{
            display:"grid",
            gridTemplateColumns:"1fr 1fr",
            gap:"60px",
            alignItems:"center",
            padding:"56px 0",
            borderTop: i===0?"none":"1px solid rgba(47,19,89,.08)",
          }}>
            {/* text col */}
            <div className="braze-text" style={{ order: flip?2:1 }}>
              <div style={{ marginBottom:16 }}>
                <span className="eyebrow" style={{ color:"#5F34A5", fontSize:13, letterSpacing:".16em" }}>{act.surface}</span>
              </div>
              <h3 className="headline" style={{ fontSize:"clamp(32px,3.6vw,52px)", margin:"0 0 16px", color:"#291059", lineHeight:1.0, letterSpacing:"-.025em" }}>
                {(act.titleLines || [act.title]).map((l, i, a) => (
                  <React.Fragment key={i}>{l}{i < a.length - 1 && <br/>}</React.Fragment>
                ))}
              </h3>
              <p style={{ fontSize:17, lineHeight:1.55, color:"#3A2F4D", margin:"0 0 18px", maxWidth:520 }}>{act.body}</p>

              {act.podcastMetrics && (
                <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"12px 14px", marginTop:4, maxWidth:420 }}>
                  {act.podcastMetrics.map((m,i) => (
                    <div key={i} style={{ background:"rgba(152,54,248,.07)", borderRadius:12, padding:"14px 10px", border:"1px solid rgba(152,54,248,.14)", textAlign:"center" }}>
                      <div className="num" style={{ fontSize:"clamp(20px,2.2vw,26px)", fontWeight:900, color:"#5F34A5", lineHeight:1 }}>{m.value}</div>
                      <div style={{ fontFamily:"var(--font-body)", fontSize:11.5, color:"#555F70", marginTop:5, fontWeight:500, lineHeight:1.3 }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {!act.podcastMetrics && act.metric && (
                <div style={{ display:"inline-flex", alignItems:"center", marginTop:4 }}>
                  <span style={{ fontFamily:"var(--font-accent)", fontWeight:700, fontSize:12.5, color:"#5F34A5", letterSpacing:".1em", textTransform:"uppercase", background:"rgba(95,52,165,.08)", padding:"7px 15px", borderRadius:999, border:"1px solid rgba(95,52,165,.14)" }}>{act.metric}</span>
                </div>
              )}

            </div>
            {/* visual col */}
            <div className="braze-visual" style={{ order: flip?1:2 }}>
              {act.asset === "event" ? (
                <EventCarousel/>
              ) : act.asset === "colunistas" ? (
                <div style={{ display:"flex", alignItems:"center", justifyContent:"center", position:"relative", padding:"16px 0" }}>
                  <img
                    src={window.__res("assets/event/colunistas-group.png")}
                    alt="Colunistas do Mundo do Marketing"
                    loading="lazy"
                    style={{
                      position:"relative",
                      width:"100%", height:"auto",
                      objectFit:"contain",
                    }}
                  />
                </div>
              ) : act.asset === "article" ? (
                <div style={{ aspectRatio:"5/4", display:"grid", placeItems:"center", margin:"-8% -7%" }}>
                  <img src={window.__res("assets/event/portal-tablet.png")} alt="Portal Mundo do Marketing — matéria de novo colunista" loading="lazy" style={{ width:"100%", height:"100%", objectFit:"contain" }}/>
                </div>
              ) : act.asset === "podcast" ? (
                <div style={{
                  borderRadius:24, overflow:"hidden", aspectRatio:"5/3",
                  boxShadow:"0 24px 60px rgba(47,19,89,.18)",
                }}>
                  <img src={window.__res("assets/event/podcast-studio.png")} alt="Estúdio do Podcast Mundo do Marketing" loading="lazy" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
                </div>
              ) : act.asset === "social" ? (
                <div style={{ display:"flex", alignItems:"center", justifyContent:"center", position:"relative", padding:"24px 0" }}>
                  <div style={{
                    position:"absolute", inset:"10% 15%",
                    background:"radial-gradient(ellipse at center, rgba(152,54,248,.38) 0%, transparent 70%)",
                    filter:"blur(32px)", pointerEvents:"none", borderRadius:999,
                  }}/>
                  <img
                    src={window.__res("assets/event/social-post.png")}
                    alt="Post Instagram Mundo do Marketing — Customer Engagement"
                    loading="lazy"
                    style={{
                      position:"relative",
                      width:"62%", height:"auto",
                      borderRadius:20,
                      boxShadow:"0 32px 80px rgba(47,19,89,.28), 0 0 0 1px rgba(255,255,255,.08)",
                    }}
                  />
                </div>
              ) : (
              <div style={{
                borderRadius:24, overflow:"hidden",
                background:"linear-gradient(180deg,#FBFBFB,#F4EEFF)",
                padding:"42px 32px",
                aspectRatio:"5/3",
                display:"grid", placeItems:"center",
                boxShadow:"0 24px 60px rgba(47,19,89,.10)",
                border:"1px solid rgba(47,19,89,.06)",
              }}>
                <ActIllustration kind={act.asset}/>
              </div>
              )}
            </div>
          </div>
        );
      })}
      <CmoSummitAnchor/>
    </div>
  );
}

/* ============================ CMO SUMMIT CAROUSEL ============================ */
const CMO_SUMMIT_PHOTOS = [
  window.__res("assets/event/cmo-summit-01.png"),
  window.__res("assets/event/cmo-summit-02.png"),
  window.__res("assets/event/cmo-summit-03.png"),
  window.__res("assets/event/cmo-summit-04.png"),
  window.__res("assets/event/cmo-summit-05.png"),
  window.__res("assets/event/cmo-summit-06.png"),
];

function CmoSummitCarousel() {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const n = CMO_SUMMIT_PHOTOS.length;
  const go = React.useCallback((d) => setIdx(p => (p + d + n) % n), [n]);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx(p => (p + 1) % n), 4000);
    return () => clearInterval(t);
  }, [paused, n]);

  const arrowBtn = {
    width:44, height:44, borderRadius:999, border:"1px solid rgba(47,19,89,.14)",
    background:"#fff", color:"#291059", cursor:"pointer",
    display:"grid", placeItems:"center", fontSize:18, lineHeight:1,
    transition:"background .15s, color .15s",
    boxShadow:"0 2px 10px rgba(47,19,89,.06)",
  };
  const onEnter = (e) => { e.currentTarget.style.background="#9836F8"; e.currentTarget.style.color="#fff"; };
  const onLeave = (e) => { e.currentTarget.style.background="#fff"; e.currentTarget.style.color="#291059"; };

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div style={{
        position:"relative", borderRadius:24, overflow:"hidden",
        aspectRatio:"4/3", background:"#1F0A47",
        boxShadow:"0 24px 60px rgba(47,19,89,.22)",
      }}>
        {CMO_SUMMIT_PHOTOS.map((src, i) => (
          <img key={i} src={src} alt={`CMO Summit Braze — foto ${i + 1}`} loading="lazy" style={{
            position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover",
            opacity: i === idx ? 1 : 0, transition:"opacity .6s ease",
          }}/>
        ))}
      </div>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:18, marginTop:18 }}>
        <button aria-label="Foto anterior" style={arrowBtn} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={() => go(-1)}>←</button>
        <div className="carousel-dots-wrap" style={{ display:"flex", gap:7 }}>
          {CMO_SUMMIT_PHOTOS.map((_, i) => (
            <button key={i} aria-label={`Ir para foto ${i + 1}`} onClick={() => setIdx(i)} style={{
              width: i === idx ? 22 : 7, height:7, borderRadius:999, border:"none", padding:0, cursor:"pointer",
              background: i === idx ? "#9836F8" : "rgba(47,19,89,.18)",
              transition:"width .25s, background .25s",
            }}/>
          ))}
        </div>
        <button aria-label="Próxima foto" style={arrowBtn} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={() => go(1)}>→</button>
      </div>
    </div>
  );
}

/* ============================ EVENTO ÂNCORA: CMO SUMMIT ============================ */
function CmoSummitAnchor() {
  return (
    <div style={{
      marginTop:56,
      borderTop:"1px solid rgba(47,19,89,.08)",
      paddingTop:56,
    }}>
      <div className="braze-act" style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        gap:60,
        alignItems:"center",
        padding:0,
        borderTop:"none",
      }}>
        {/* Texto */}
        <div className="braze-text" style={{ order:1 }}>
          <div className="eyebrow" style={{ color:"#5F34A5", marginBottom:14 }}>Evento âncora</div>
          <h3 className="headline" style={{ fontSize:"clamp(28px,3vw,42px)", margin:"0 0 16px", color:"#291059", lineHeight:1.05 }}>
            CMO Summit
          </h3>
          <p style={{ fontSize:17, lineHeight:1.55, color:"#3A2F4D", margin:"0 0 20px", maxWidth:520 }}>
            A Braze marcou presença no maior encontro de CMOs do Brasil. O estande concentrou conversas estratégicas de alto valor com tomadores de decisão do marketing nacional, fortalecendo relacionamentos construídos ao longo de toda a estratégia ABM.
          </p>
          <ul style={{ margin:"0 0 20px", paddingLeft:0, listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
            {[["🎤","Palestras","Executivos da Braze no palco principal"],["🏢","Estandes","Ativações com tomadores de decisão de alto nível"],["🤝","Networking","Conexões estratégicas com os maiores CMOs do Brasil"]].map(([icon,title,desc])=>(
              <li key={title} style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
                <span style={{ fontSize:17, lineHeight:1, marginTop:2 }}>{icon}</span>
                <div><strong style={{ fontFamily:"var(--font-body)", fontSize:15, color:"#291059", fontWeight:700 }}>{title}:</strong><span style={{ fontFamily:"var(--font-body)", fontSize:14, color:"#3A2F4D", marginLeft:5 }}>{desc}</span></div>
              </li>
            ))}
          </ul>

        </div>
        {/* Visual */}
        <div className="braze-visual" style={{ order:2 }}>
          <CmoSummitCarousel/>
        </div>
      </div>
    </div>
  );
}

window.CmoSummitAnchor = CmoSummitAnchor;
window.BrazeCase = BrazeCase;

/* ============================================================
   produtos-alcance.js
   ============================================================ */
// Produtos & alcance — editorial product showcase blocks (Redes Sociais + Newsletter)
// Visual style mirrors the brand reference: alternating image/text, big display
// heading, short body, reach stats with platform chips.

function PlatformIcon({ kind }) {
  switch (kind) {
    case "instagram": return (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>
    );
    case "linkedin": return (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3.5 9h3v11h-3zM9 9h2.9v1.5h.04c.4-.76 1.4-1.56 2.86-1.56 3.06 0 3.63 2 3.63 4.6V20h-3v-4.4c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.68 1.14-1.68 2.32V20H9z"/></svg>
    );
    case "whatsapp": return (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-2.8.7.8-2.7-.2-.3A8 8 0 0 1 12 4zm-2.6 4c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.7 4.2 3.6 2 .8 2.5.6 2.9.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3l-1.4-.7c-.2-.1-.4-.1-.5.1l-.6.8c-.1.2-.3.2-.5.1-.7-.3-1.4-.6-2-1.4-.4-.5-.7-1.1-.8-1.3-.1-.2 0-.3.1-.4l.4-.5c.1-.1.1-.3.2-.4 0-.2 0-.3 0-.4l-.6-1.5c-.2-.5-.4-.4-.5-.4z"/></svg>
    );
    case "youtube": return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23 12s0-3.2-.4-4.7c-.2-.8-.9-1.5-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4c-.8.2-1.5.9-1.7 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.8.9 1.5 1.7 1.7 1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.7.4-4.7zM9.7 15.3V8.7l5.7 3.3-5.7 3.3z"/></svg>
    );
    case "x": return (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17.5 3h3l-7 8 8.2 10h-6.4l-5-6.1L8 21H5l7.4-8.5L4.5 3h6.5l4.5 5.6zm-1 16h1.7L8.5 4.8H6.7z"/></svg>
    );
    case "facebook": return (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M14 9V7.2c0-.8.2-1.2 1.3-1.2H17V3h-2.6C11.8 3 11 4.4 11 6.6V9H9v3h2v9h3v-9h2.3l.4-3z"/></svg>
    );
    default: return null;
  }
}

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.2C.6 9 1.6 5.6 4.7 4.8c1.9-.5 3.8.3 4.8 1.8L12 9l2.5-2.4c1-1.5 2.9-2.3 4.8-1.8 3.1.8 4.1 4.2 2.7 7C19.5 16.4 12 21 12 21z"/></svg>
);
const CommentIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z"/></svg>
);
const SaveIcon = () => (
  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2"><rect x="8" y="3" width="13" height="13" rx="2"/><path d="M16 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"/></svg>
);

const SOCIAL_STATS = [
  ["instagram","247 mil","seguidores"],
  ["linkedin","173k","seguidores"],
  ["whatsapp","3k","participantes"],
  ["youtube","9k","inscritos"],
  ["x","168k","seguidores"],
  ["facebook","176k","curtidas"],
];

const POSTS = [
  { id:"sp1", likes:"25,6 mil", comments:"632", head:"Alain Prost brinda a Senna em campanha da Heineken" },
  { id:"sp2", likes:"13,9 mil", comments:"94",  head:"Chilli Beans cria nova coleção da saga Harry Potter" },
  { id:"sp3", likes:"8.980",    comments:"312", head:"Burger King lança BK Taste e oferece gratuitamente para advogados" },
  { id:"sp4", likes:"13,9 mil", comments:"978", head:"Brahma é a mais consumida, mas Heineken é a favorita dos brasileiros" },
];

function SocialCard() {
  return (
    <div className="social-card">
      <div className="social-grid">
        {POSTS.map((p) => (
          <img
            key={p.id}
            className="social-img"
            src={window.__res(`assets/social/${p.id}.png`)}
            alt={p.head}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

function Produtos() {
  return (
    <section id="produtos" style={{ background:"#fff", padding:"100px 32px" }}>
      <div className="container">
        <div className="produtos-intro" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(32px,5vw,80px)", alignItems:"end", marginBottom:54 }}>
          <div>
            <div className="eyebrow" style={{ color:"#9836F8", marginBottom:16 }}>Produtos &amp; alcance</div>
            <h2 className="display" style={{ fontSize:"clamp(38px,4.6vw,64px)", margin:0, color:"#291059", lineHeight:1.05 }}>
              Onde a sua <br/>marca <span style={{ fontStyle:"italic" }}>aparece</span>.
            </h2>
          </div>
          <div>
            <p style={{ fontFamily:"var(--font-body)", fontSize:17, lineHeight:1.65, color:"#3A2F4D", margin:0 }}>
              Temos inúmeras possibilidades de anúncio além das que você vê aqui. O mais interessante é criarmos juntos projetos estratégicos usando o alcance e os formatos do Mundo do Marketing.
            </p>
          </div>
        </div>

        {/* Redes sociais — visual à esquerda, texto à direita */}
        <div className="prod-row">
          <div className="prod-visual"><SocialCard/></div>
          <div className="prod-text">
            <div className="eyebrow" style={{ color:"#9836F8", marginBottom:14 }}>Distribuição &amp; alcance</div>
            <h3 className="prod-h">Redes sociais</h3>
            <p className="prod-body">
              Mais de <strong>1 milhão de pessoas</strong> são atingidas mensalmente nas redes sociais do Mundo do Marketing — canais que amplificam e dão apoio a todas as outras frentes do ecossistema.
            </p>
            <div className="prod-stats">
              {SOCIAL_STATS.map(([k,n,l]) => (
                <div key={k} className="prod-stat">
                  <span className="stat-ic"><PlatformIcon kind={k}/></span>
                  <span><b>{n}</b> {l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Branded Content — imagem à esquerda, texto à direita */}
        <div className="prod-row">
          <div className="prod-visual">
            <div className="bc-showcase">
              <img className="bc-mock" src={window.__res("assets/branded/branded-content-mock.png")} alt="Branded Content no portal Mundo do Marketing" loading="lazy"/>
            </div>
          </div>
          <div className="prod-text">
            <div className="eyebrow" style={{ color:"#9836F8", marginBottom:14 }}>Conteúdo patrocinado</div>
            <h3 className="prod-h">Branded Content</h3>
            <p className="prod-body">
              Uma ativação de conteúdo 100% contextualizada e relevante para a audiência do Mundo do Marketing. Divulgue seu produto ou serviço como artigo do portal — de forma <strong>estratégica e nativa</strong>.
            </p>
            <div style={{ marginTop:28, display:"flex", flexDirection:"column", gap:14 }}>
              <div style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
                <span className="prod-pill" style={{ background:"#7E8597", flexShrink:0, marginTop:2 }}>Sem Redação</span>
                <p className="prod-note" style={{ margin:0, fontSize:14, color:"#3A2F4D", lineHeight:1.5 }}>Texto enviado pelo anunciante. Você entrega o conteúdo pronto; nós publicamos e distribuímos.</p>
              </div>
              <div style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
                <span className="prod-pill" style={{ background:"#9836F8", flexShrink:0, marginTop:2 }}>Com Redação</span>
                <p className="prod-note" style={{ margin:0, fontSize:14, color:"#3A2F4D", lineHeight:1.5 }}>Brife a equipe de redação do Mundo do Marketing e nós cuidamos da produção, publicação e divulgação do seu conteúdo.</p>
              </div>
            </div>
          </div>
        </div>

            </div>
    </section>
  );
}

window.Produtos = Produtos;

/* ============================================================
   landing-page.js
   ============================================================ */
// Anuncie no Mundo do Marketing — landing page (v3 — alterações de conteúdo, responsividade e UX)
const { useState, useRef, useEffect } = React;

/* ============================ NAV ============================ */
function TopBar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Marcas","#marcas"],
    ["Ecossistema","#ecossistema"],
    ["Audiência","#audiencia"],
    ["Vozes","#vozes"],
    ["Case Braze","#case"],
  ];
  return (
    <header style={{
      position:"sticky", top:0, zIndex:50,
      background:"rgba(251,251,251,.86)", backdropFilter:"blur(10px)",
      borderBottom:"1px solid rgba(47,19,89,.08)",
    }}>
      <div className="container topbar-inner" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 32px" }}>
        <a href="#top" style={{ display:"flex", alignItems:"center", gap:12, textDecoration:"none" }}>
          <img src={window.__res("assets/logos/logo-extenso-preto.svg")} alt="Mundo do Marketing" style={{ height:22 }}/>
          <span style={{
            padding:"3px 9px", borderRadius:999,
            background:"#9836F8", color:"#fff",
            fontFamily:"var(--font-accent)", fontSize:11, letterSpacing:".12em",
            textTransform:"uppercase",
          }}>Anuncie</span>
        </a>
        <nav className="topbar-nav" style={{ display:"flex", gap:30 }}>
          {links.map(([l,h]) => (
            <a key={l} href={h} style={{
              fontFamily:"var(--font-body)", fontWeight:500, fontSize:14,
              color:"#291059", textDecoration:"none", opacity:.78,
            }}>{l}</a>
          ))}
        </nav>
        <button onClick={openForm} className="topbar-cta" style={{
          background:"linear-gradient(135deg,#5F34A5,#9836F8)", color:"#fff", border:"none",
          padding:"11px 18px", borderRadius:8, fontWeight:700, fontSize:14,
          fontFamily:"var(--font-body)", letterSpacing:"-.01em", cursor:"pointer",
        }}>Falar com o time →</button>
        <button className="topbar-burger" data-open={open} aria-label="Abrir menu" aria-expanded={open} onClick={()=>setOpen(o=>!o)}>
          <span/><span/><span/>
        </button>
      </div>
      <div className="topbar-mobile" data-open={open}>
        {links.map(([l,h]) => (
          <a key={l} href={h} onClick={()=>setOpen(false)}>{l}</a>
        ))}
        <button className="cta" onClick={()=>{ setOpen(false); openForm(); }}>Falar com o time →</button>
      </div>
    </header>
  );
}

/* ============================ CARGO OPTIONS ============================ */
const CARGO_OPTIONS = [
  "CEO / Fundador(a)",
  "CMO",
  "VP de Marketing",
  "Diretor(a) de Marketing",
  "Head de Marketing",
  "Gerente de Marketing",
  "Coordenador(a) de Marketing",
  "Especialista de Marketing",
  "Analista de Marketing",
  "Consultor(a)",
  "Outro",
];

/* ============================ HERO ============================ */
function Hero() {
  const [formExpanded, setFormExpanded] = useState(false);
  const [form, setForm] = useState({
    nome:"", empresa:"", email:"", cargo:"",
    whatsapp:"",
    investimento:"Até R$ 50 mil",
    objetivo:"Branding e thought leadership", mensagem:""
  });
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const [formErr, setFormErr] = useState({});
  const [sent, setSent] = useState(false);

  return (
    <section id="top" className="hero-sec" style={{
      position:"relative", color:"#fff",
      padding:"96px 32px 110px",
      background:"linear-gradient(135deg,#2F1359 0%, #5F34A5 45%, #9836F8 100%)",
      overflow:"hidden",
    }}>
      {/* animated halo — purple only */}
      <div className="hero-bg" style={{
        position:"absolute", inset:"-20%",
        background:"radial-gradient(at 70% 30%, rgba(171,110,209,.45), transparent 55%), radial-gradient(at 25% 80%, rgba(125,107,225,.5), transparent 60%)",
        pointerEvents:"none",
      }}/>
      <div style={{
        position:"absolute", inset:0,
        background:"url("+window.__res("assets/textures/textura-logos-multiplos-sem-fundo.png")+") center/cover",
        opacity:.05, pointerEvents:"none",
      }}/>

      <div className="container hero-grid" style={{
        position:"relative", display:"grid",
        gridTemplateColumns:"1.15fr .85fr", gap:64, alignItems:"center",
      }}>
        {/* left — pitch */}
        <div>
          <div className="eyebrow" style={{ color:"rgba(255,255,255,.85)", marginBottom:22 }}>
            Mídia · Conteúdo · Eventos · Estratégia
          </div>
          <h1 className="display hero-h1" style={{
            fontSize:"clamp(44px,7vw,104px)",
            margin:0, lineHeight:1.0, color:"#fff",
            letterSpacing:"-.035em",
            textShadow:"0 2px 24px rgba(0,0,0,.18)",
          }}>
            Anuncie onde<br className="hero-br"/>
            o marketing<br className="hero-br"/>
            <span style={{ fontStyle:"italic", color:"#EF7EF1" }}>brasileiro</span> decide
          </h1>
          <p style={{
            fontSize:19, lineHeight:1.5, marginTop:26, maxWidth:520,
            color:"rgba(255,255,255,.92)", fontFamily:"var(--font-body)"
          }}>
            O principal canal de insights para o marketing brasileiro. Portal, podcasts, eventos, newsletter e pesquisas em um único ecossistema editorial.
          </p>
          {/* Mobile CTA — visível apenas em mobile, abre popup */}
          <div className="mobile-form-cta">
            <button onClick={openForm} style={{
              marginTop:28, background:"#fff", color:"#291059",
              padding:"16px 24px", borderRadius:10, border:"none",
              fontFamily:"var(--font-body)", fontWeight:700, fontSize:16,
              width:"100%", cursor:"pointer",
              boxShadow:"0 8px 24px rgba(0,0,0,.25)", minHeight:52,
            }}>Preencher briefing →</button>
          </div>
        </div>

        {/* right — form */}
        <form id="form" onSubmit={(e)=>{
              e.preventDefault();
              const errs = {};
              const ph = form.whatsapp.replace(/\D/g,"");
              if (ph.length < 10) errs.whatsapp = "Informe um número válido, ex: (11) 99999-9999";
              if (Object.keys(errs).length) { setFormErr(errs); return; }
              setFormErr({});
              const phoneE164 = "+55" + ph;
              fetch("/api/add-lead", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ name: form.nome, email: form.email, phone: phoneE164 })
              }).catch(()=>{});
              window.location.href = "/thank-you";
            }}
              className={`hero-form hero-form-collapsible${formExpanded ? " hero-form-open" : ""}`}
              style={{
                background:"#fff", color:"#291059",
                borderRadius:18, padding:"28px 26px 24px",
                boxShadow:"0 40px 100px rgba(0,0,0,.35)",
                border:"1px solid rgba(255,255,255,.4)",
                maxWidth:480, marginLeft:"auto",
              }}>
          <div className="eyebrow" style={{ color:"#9836F8", marginBottom:10 }}>Briefing rápido</div>
          <h2 className="headline" style={{ fontSize:28, margin:"0 0 10px", lineHeight:1.1 }}>
            Vamos desenhar uma estratégia para a sua marca.
          </h2>
          <p style={{ fontSize:13.5, color:"#555F70", margin:"0 0 18px", lineHeight:1.5 }}>
            Conte um pouco do contexto e retornaremos com uma proposta personalizada.
          </p>

          {sent ? (
            <div style={{ padding:"40px 0", textAlign:"center" }}>
              <div style={{ width:56, height:56, borderRadius:99, background:"linear-gradient(135deg,#5F34A5,#9836F8)", display:"grid", placeItems:"center", margin:"0 auto 16px", color:"#fff", fontSize:26, fontWeight:700 }}>✓</div>
              <h3 className="headline" style={{ fontSize:22, margin:"0 0 8px" }}>Briefing recebido, {form.nome.split(" ")[0] || "obrigado"}.</h3>
              <p style={{ fontSize:14, color:"#555F70" }}>Vamos retornar para <strong>{form.email || "seu e-mail"}</strong> em até 1 dia útil.</p>
            </div>
          ) : (
          <>
            <div className="form-row" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              <Field label="Nome" v={form.nome} onChange={set("nome")} placeholder="Maria Souza" required/>
              <Field label="Empresa" v={form.empresa} onChange={set("empresa")} placeholder="Sua marca" required/>
            </div>
            <div className="form-row" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginTop:12 }}>
              <Field label="E-mail corporativo" v={form.email} onChange={set("email")} placeholder="voce@empresa.com" type="email" required/>
              <Select label="Cargo" v={form.cargo} onChange={set("cargo")} placeholder="Selecione" options={CARGO_OPTIONS} required/>
            </div>
            <div style={{ marginTop:12 }}>
              <PhoneField label="WhatsApp" v={form.whatsapp} onChange={(v)=>setForm(f=>({...f,whatsapp:v}))} error={formErr.whatsapp}/>
            </div>
            <div className="form-row" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginTop:12 }}>
              <Select label="Objetivo" v={form.objetivo} onChange={set("objetivo")}
                      options={["Branding e thought leadership","Geração de demanda","Account-based marketing (ABM)","Lançamento de produto","Patrocínio de evento"]}
                      required/>
              <Select label="Investimento disponível" v={form.investimento} onChange={set("investimento")}
                      options={["Até R$ 50 mil","R$ 50–100 mil","R$ 100–250 mil","R$ 250–500 mil","R$ 500 mil +"]}
                      required/>
            </div>
            <div style={{ marginTop:12 }}>
              <Field label="Conte mais sobre seu projeto (opcional)" v={form.mensagem} onChange={set("mensagem")} placeholder="Ex: queremos posicionar a marca junto a CMOs de varejo..." textarea/>
            </div>

            <button type="submit" style={{
              marginTop:18, width:"100%",
              background:"linear-gradient(135deg,#5F34A5,#9836F8)", color:"#fff", border:"none",
              padding:"15px 24px", borderRadius:10,
              fontWeight:700, fontSize:15, fontFamily:"var(--font-body)",
              cursor:"pointer", letterSpacing:"-.01em",
              boxShadow:"0 12px 30px rgba(152,54,248,.35)", minHeight:48,
            }}>Enviar briefing →</button>

            <div style={{ fontSize:11.5, color:"#8B92A1", marginTop:12, textAlign:"center", fontFamily:"var(--font-body)" }}>
              Ao enviar, você concorda com nossa Política de Privacidade.
            </div>
          </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, v, onChange, placeholder, type="text", textarea, required }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <label style={{ display:"block" }}>
      <div style={{ fontFamily:"var(--font-body)", fontSize:12, fontWeight:600, color:"#555F70", marginBottom:6, letterSpacing:".02em" }}>
        {label}{required && <span style={{ color:"#9836F8", marginLeft:2 }}>*</span>}
      </div>
      <Tag type={type} value={v} onChange={onChange} placeholder={placeholder}
        required={required}
        rows={textarea?3:undefined}
        style={{
          width:"100%", padding:"11px 13px",
          border:"1px solid rgba(47,19,89,.16)", borderRadius:8,
          fontSize:14, fontFamily:"var(--font-body)", color:"#291059",
          background:"#FBFBFB", outline:"none", resize:"vertical",
          transition:"border-color .15s, box-shadow .15s",
          minHeight: textarea ? undefined : 44,
        }}
        onFocus={(e)=>{ e.target.style.borderColor="#9836F8"; e.target.style.boxShadow="0 0 0 4px rgba(152,54,248,.12)"; }}
        onBlur={(e)=>{ e.target.style.borderColor="rgba(47,19,89,.16)"; e.target.style.boxShadow="none"; }}
      />
    </label>
  );
}

function PhoneField({ label, v, onChange, error }) {
  const mask = (val) => {
    const d = val.replace(/\D/g,"").slice(0,11);
    if (!d.length) return "";
    if (d.length <= 2) return "("+d;
    if (d.length <= 6) return "("+d.slice(0,2)+") "+d.slice(2);
    if (d.length <= 10) return "("+d.slice(0,2)+") "+d.slice(2,6)+"-"+d.slice(6);
    return "("+d.slice(0,2)+") "+d.slice(2,7)+"-"+d.slice(7);
  };
  return (
    <label style={{ display:"block" }}>
      <div style={{ fontFamily:"var(--font-body)", fontSize:12, fontWeight:600, color:"#555F70", marginBottom:6, letterSpacing:".02em" }}>
        {label}<span style={{ color:"#9836F8", marginLeft:2 }}>*</span>
      </div>
      <input
        type="tel" inputMode="numeric" value={v}
        onChange={(e)=>onChange(mask(e.target.value))}
        placeholder="(11) 99999-9999"
        style={{
          width:"100%", padding:"11px 13px",
          border:"1px solid "+(error?"#e0314b":"rgba(47,19,89,.16)"), borderRadius:8,
          fontSize:14, fontFamily:"var(--font-body)", color:"#291059",
          background:"#FBFBFB", outline:"none",
          minHeight:44, boxSizing:"border-box",
          transition:"border-color .15s, box-shadow .15s",
        }}
        onFocus={(e)=>{ e.target.style.borderColor="#9836F8"; e.target.style.boxShadow="0 0 0 4px rgba(152,54,248,.12)"; }}
        onBlur={(e)=>{ e.target.style.borderColor=error?"#e0314b":"rgba(47,19,89,.16)"; e.target.style.boxShadow="none"; }}
      />
      {error && <div style={{ fontFamily:"var(--font-body)", fontSize:11.5, color:"#e0314b", marginTop:4 }}>{error}</div>}
    </label>
  );
}

function Select({ label, v, onChange, options, required, placeholder }) {
  return (
    <label style={{ display:"block" }}>
      <div style={{ fontFamily:"var(--font-body)", fontSize:12, fontWeight:600, color:"#555F70", marginBottom:6, letterSpacing:".02em" }}>
        {label}{required && <span style={{ color:"#9836F8", marginLeft:2 }}>*</span>}
      </div>
      <select value={v} onChange={onChange} required={required}
        style={{
          width:"100%", padding:"11px 13px",
          border:"1px solid rgba(47,19,89,.16)", borderRadius:8,
          fontSize:14, fontFamily:"var(--font-body)", color:"#291059",
          background:"#FBFBFB", outline:"none", appearance:"none",
          backgroundImage:"linear-gradient(45deg, transparent 50%, #9836F8 50%), linear-gradient(135deg, #9836F8 50%, transparent 50%)",
          backgroundPosition:"calc(100% - 16px) 50%, calc(100% - 11px) 50%",
          backgroundSize:"5px 5px, 5px 5px",
          backgroundRepeat:"no-repeat",
          paddingRight:36,
          minHeight:44,
        }}
        onFocus={(e)=>{ e.target.style.borderColor="#9836F8"; e.target.style.boxShadow="0 0 0 4px rgba(152,54,248,.12)"; }}
        onBlur={(e)=>{ e.target.style.borderColor="rgba(47,19,89,.16)"; e.target.style.boxShadow="none"; }}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}


/* ============================ FORM MODAL ============================ */
function openForm() { window.dispatchEvent(new CustomEvent('openform')); }

function FormModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    nome:"", empresa:"", email:"", cargo:"",
    whatsapp:"",
    investimento:"Até R$ 50 mil",
    objetivo:"Branding e thought leadership", mensagem:""
  });
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const [formErr2, setFormErr2] = useState({});
  const [sent, setSent] = useState(false);
  const close = () => setOpen(false);
  useEffect(() => {
    const h = () => setOpen(true);
    window.addEventListener('openform', h);
    return () => window.removeEventListener('openform', h);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  if (!open) return null;
  return (
    <div style={{ position:"fixed", inset:0, zIndex:9999, background:"rgba(20,8,46,.72)", backdropFilter:"blur(6px)", display:"flex", alignItems:"center", justifyContent:"center", padding:"20px", animation:"mdmFadeIn .2s ease-out" }}
      onClick={(e)=>{ if(e.target===e.currentTarget) close(); }}>
      <div style={{ background:"#fff", borderRadius:20, padding:"36px 32px 28px", maxWidth:540, width:"100%", maxHeight:"90vh", overflowY:"auto", position:"relative", boxShadow:"0 40px 100px rgba(0,0,0,.45)", animation:"mdmSlideUp .25s ease-out" }}>
        <button onClick={close} style={{ position:"absolute", top:14, right:16, background:"none", border:"none", cursor:"pointer", color:"#555F70", fontSize:20, lineHeight:1, padding:"4px 8px", borderRadius:6, minWidth:44, minHeight:44, display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
        <div className="eyebrow" style={{ color:"#9836F8", marginBottom:10 }}>Briefing rápido</div>
        <h2 style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:24, margin:"0 0 8px", lineHeight:1.1, color:"#291059" }}>Vamos desenhar uma estratégia para a sua marca.</h2>
        <p style={{ fontSize:13, color:"#555F70", margin:"0 0 16px", lineHeight:1.5, fontFamily:"var(--font-body)" }}>Conte um pouco do contexto e retornaremos com uma proposta personalizada.</p>
        {sent ? (
          <div style={{ padding:"32px 0", textAlign:"center" }}>
            <div style={{ width:52, height:52, borderRadius:99, background:"linear-gradient(135deg,#5F34A5,#9836F8)", display:"grid", placeItems:"center", margin:"0 auto 14px", color:"#fff", fontSize:24, fontWeight:700 }}>✓</div>
            <h3 style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:20, margin:"0 0 8px", color:"#291059" }}>Briefing recebido, {form.nome.split(" ")[0] || "obrigado"}.</h3>
            <p style={{ fontSize:14, color:"#555F70", fontFamily:"var(--font-body)" }}>Vamos retornar para <strong>{form.email || "seu e-mail"}</strong> em até 1 dia útil.</p>
          </div>
        ) : (
          <form onSubmit={(e)=>{
              e.preventDefault();
              const errs = {};
              const ph = form.whatsapp.replace(/\D/g,"");
              if (ph.length < 10) errs.whatsapp = "Informe um número válido, ex: (11) 99999-9999";
              if (Object.keys(errs).length) { setFormErr2(errs); return; }
              setFormErr2({});
              const phoneE164 = "+55" + ph;
              fetch("/api/add-lead", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ name: form.nome, email: form.email, phone: phoneE164 })
              }).catch(()=>{});
              window.location.href = "/thank-you";
            }}>
            <div className="form-row" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              <Field label="Nome" v={form.nome} onChange={set("nome")} placeholder="Maria Souza" required/>
              <Field label="Empresa" v={form.empresa} onChange={set("empresa")} placeholder="Sua marca" required/>
            </div>
            <div className="form-row" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginTop:12 }}>
              <Field label="E-mail corporativo" v={form.email} onChange={set("email")} placeholder="voce@empresa.com" type="email" required/>
              <Select label="Cargo" v={form.cargo} onChange={set("cargo")} placeholder="Selecione" options={CARGO_OPTIONS} required/>
            </div>
            <div style={{ marginTop:12 }}>
              <PhoneField label="WhatsApp" v={form.whatsapp} onChange={(v)=>setForm(f=>({...f,whatsapp:v}))} error={formErr2.whatsapp}/>
            </div>
            <div className="form-row" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginTop:12 }}>
              <Select label="Objetivo" v={form.objetivo} onChange={set("objetivo")}
                      options={["Branding e thought leadership","Geração de demanda","Account-based marketing (ABM)","Lançamento de produto","Patrocínio de evento"]}
                      required/>
              <Select label="Investimento disponível" v={form.investimento} onChange={set("investimento")}
                      options={["Até R$ 50 mil","R$ 50–100 mil","R$ 100–250 mil","R$ 250–500 mil","R$ 500 mil +"]}
                      required/>
            </div>
            <div style={{ marginTop:12 }}>
              <Field label="Conte mais sobre seu projeto (opcional)" v={form.mensagem} onChange={set("mensagem")} placeholder="Ex: queremos posicionar a marca junto a CMOs de varejo..." textarea/>
            </div>
            <button type="submit" style={{ marginTop:18, width:"100%", background:"linear-gradient(135deg,#5F34A5,#9836F8)", color:"#fff", border:"none", padding:"14px 24px", borderRadius:10, fontWeight:700, fontSize:15, fontFamily:"var(--font-body)", cursor:"pointer", letterSpacing:"-.01em", boxShadow:"0 12px 30px rgba(152,54,248,.35)", minHeight:48 }}>Enviar briefing →</button>
            <div style={{ fontSize:11, color:"#8B92A1", marginTop:10, textAlign:"center", fontFamily:"var(--font-body)" }}>Ao enviar, você concorda com nossa Política de Privacidade.</div>
          </form>
        )}
      </div>
    </div>
  );
}

/* ============================ LOGOS CAROUSEL ============================ */
function LogosCarousel() {
  const brands = [
    { name:"Braze",         logo:window.__res("assets/brands/braze.svg") },
    { name:"Salesforce",    logo:window.__res("assets/brands/salesforce.svg") },
    { name:"HubSpot",       logo:window.__res("assets/brands/hubspot.svg") },
    { name:"Mercado Livre", logo:window.__res("assets/brands/mercado-livre.svg") },
    { name:"The Led",       logo:window.__res("assets/brands/the-led.png") },
    { name:"Cortex",        logo:window.__res("assets/brands/cortex.svg") },
    { name:"Eletromidia",   logo:window.__res("assets/brands/eletromidia.svg") },
    { name:"Zoho",          logo:window.__res("assets/brands/zoho.svg") },
    { name:"Montoya",       logo:window.__res("assets/brands/group-5652.svg") },
    { name:"Replit",        logo:window.__res("assets/brands/replit.svg") },
  ];
  const loopBrands = [...brands, ...brands];
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);
  const pendingRef = useRef(0);

  React.useEffect(() => {
    const el = trackRef.current; if (!el) return;
    let raf;
    const speed = 0.55;
    const step = () => {
      if (el) {
        const half = el.scrollWidth / 2 || 1;
        let move = 0;
        if (!pausedRef.current) move += speed;
        if (pendingRef.current !== 0) {
          const ease = pendingRef.current * 0.16;
          move += ease;
          pendingRef.current -= ease;
          if (Math.abs(pendingRef.current) < 0.5) pendingRef.current = 0;
        }
        let pos = posRef.current + move;
        if (pos >= half) pos -= half;
        if (pos < 0)     pos += half;
        posRef.current = pos;
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const scroll = (dir) => { pendingRef.current += dir * 360; };
  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  return (
    <section id="marcas" style={{ background:"#fff", padding:"80px 32px 90px" }}>
      <div className="container">
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:32, gap:32, flexWrap:"wrap" }}>
          <div>
            <div className="eyebrow" style={{ color:"#9836F8", marginBottom:14 }}>Marcas que confiam na gente</div>
            <h2 className="display" style={{ fontSize:"clamp(34px,4vw,52px)", margin:0, color:"#291059", lineHeight:1.05 }}>
              Quem já constrói audiência<br/>com o Mundo do Marketing.
            </h2>
          </div>
          <div style={{ display:"flex", gap:8 }}>
            <button onClick={()=>scroll(-1)} aria-label="Anterior" style={carouselBtnStyle}>←</button>
            <button onClick={()=>scroll(1)}  aria-label="Próximo"  style={carouselBtnStyle}>→</button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="strip"
          onMouseEnter={pause} onMouseLeave={resume}
          style={{
            display:"flex", gap:14, overflowX:"auto",
            paddingBottom:6, scrollbarWidth:"none",
          }}
        >
          {loopBrands.map((b,i) => (
            <div key={i} aria-hidden={i>=brands.length} style={{
              flex:"0 0 200px", height:120,
              background:"#FBFBFB",
              border:"1px solid rgba(47,19,89,.08)",
              borderRadius:14,
              display:"grid", placeItems:"center",
              transition:"border-color .2s, transform .2s",
            }}
            onMouseEnter={(e)=>{ e.currentTarget.style.borderColor="rgba(152,54,248,.4)"; e.currentTarget.style.transform="translateY(-2px)"; }}
            onMouseLeave={(e)=>{ e.currentTarget.style.borderColor="rgba(47,19,89,.08)"; e.currentTarget.style.transform="none"; }}
            >
              <img src={b.logo} alt={b.name} loading="lazy" style={{ maxWidth:124, maxHeight:48, width:"auto", height:"auto", objectFit:"contain" }}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const carouselBtnStyle = {
  width:44, height:44, borderRadius:99,
  background:"#fff", color:"#291059",
  border:"1px solid rgba(47,19,89,.16)",
  fontSize:18, fontWeight:700, cursor:"pointer",
  fontFamily:"var(--font-body)",
};

/* ============================ ECOSSISTEMA ============================ */
const FrontIcon = ({ name, color }) => {
  const c = color || "#9836F8";
  const props = { width:28, height:28, viewBox:"0 0 24 24", fill:"none", stroke:c, strokeWidth:"1.7", strokeLinecap:"round", strokeLinejoin:"round" };
  switch (name) {
    case "portal":    return <svg {...props}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M7 6.5h.01"/><path d="M10 6.5h.01"/><path d="M7 13h7"/><path d="M7 16h10"/></svg>;
    case "newsletter":return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></svg>;
    case "social":    return <svg {...props}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill={c} stroke="none"/></svg>;
    case "columns":   return <svg {...props}><rect x="4" y="3" width="6" height="18" rx="1"/><rect x="14" y="3" width="6" height="18" rx="1"/></svg>;
    case "research":  return <svg {...props}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>;
    case "podcast":   return <svg {...props}><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>;
    case "cmo":       return <svg {...props}><path d="M4 20V14"/><path d="M9 20V8"/><path d="M14 20V11"/><path d="M19 20V4"/><path d="M2 20h20"/></svg>;
    case "greenroom": return <svg {...props}><rect x="3" y="6" width="14" height="12" rx="2"/><path d="M17 10l4-2v8l-4-2z"/></svg>;
    case "summit":    return <svg {...props}><polyline points="3 17 8 11 13 14 18 7"/><path d="M3 20h18"/><path d="M21 7h-4v4"/></svg>;
    case "b2b": return (
      <svg {...props} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v1.5M12 15.5V17"/>
        <path d="M9.5 10a2.5 2 0 1 1 5 0c0 1.5-1 2-2.5 2s-2.5.8-2.5 2a2.5 2 0 1 0 5 0"/>
      </svg>
    );
    default: return null;
  }
};

function QuemSomos() {
  const fronts = [
    { icon:"portal",     title:"Portal editorial",           sub:"Reportagens, artigos, colunas e editoriais",       tag:"250 mil/mês" },
    { icon:"newsletter", title:"Newsletter",                 sub:"Pauta diária para CMOs e líderes de marketing",     tag:"254 mil assinantes" },
    { icon:"social",     title:"Redes sociais",              sub:"Instagram, LinkedIn, TikTok, YouTube, Facebook",    tag:"1 mi+ impactos/mês" },
    { icon:"columns",    title:"Colunas autorais",           sub:"Customer Engagement, Branding, Performance, CX",    tag:"12 verticais" },
    { icon:"research",   title:"Pesquisas e estudos",        sub:"Guia Salarial, panoramas setoriais",                tag:"Anuais" },
    { icon:"podcast",    title:"Podcast Mundo do Marketing", sub:"Bate-papo com CMOs e fundadores do mercado",        tag:"Semanal" },
    { icon:"cmo",        title:"Podcast CMO Agenda",         sub:"A agenda estratégica de quem lidera marketing",     tag:"Quinzenal" },
    { icon:"greenroom",  title:"Podcast Green Room",         sub:"Os bastidores das marcas que moldam o mercado",     tag:"Quinzenal" },
    { icon:"summit",     title:"CMO Summit",                 sub:"O encontro presencial dos CMOs do Brasil",          tag:"Anual · SP" },
    { icon:"b2b",        title:"B2B Summit",                 sub:"O palco do marketing B2B brasileiro",               tag:"Anual · SP" },
  ];
  return (
    <section id="ecossistema" style={{ background:"#FBFBFB", padding:"110px 32px" }}>
      <div className="container">
        <div className="intro-2col" style={{ display:"grid", gridTemplateColumns:"1fr 1.5fr", gap:60, alignItems:"end", marginBottom:56 }}>
          <div>
            <div className="eyebrow" style={{ color:"#9836F8", marginBottom:16 }}>Quem somos</div>
            <h2 className="display" style={{ fontSize:"clamp(40px,5vw,68px)", margin:0, color:"#291059", lineHeight:1.05 }}>
              Uma plataforma <span style={{ fontStyle:"italic" }}>editorial</span> inteira.
            </h2>
          </div>
          <p style={{ fontSize:18, lineHeight:1.55, color:"#3A2F4D", maxWidth:620, fontFamily:"var(--font-body)" }}>
            Há mais de uma década, o <strong>Mundo do Marketing</strong> opera o ecossistema de conteúdo mais completo do marketing brasileiro. Dez frentes editoriais integradas, construindo narrativas longas com a mesma audiência qualificada em vários pontos de contato.
          </p>
        </div>

        <img src={window.__res("assets/event/ecossistema-constelacao.png")} alt="Ecossistema Mundo do Marketing" className="fronts-constellation" style={{ display:"none", width:"100%", height:"auto", borderRadius:20 }}/>

        <div className="fronts-grid" style={{ display:"grid", gridTemplateColumns:"repeat(5, 1fr)", gap:14 }}>
          {fronts.map((f) => (
            <article key={f.title} style={{
              background:"linear-gradient(135deg,#2F1359,#5F34A5)", borderRadius:16, padding:"22px 20px 20px",
              border:"1px solid rgba(255,255,255,.12)",
              display:"flex", flexDirection:"column", gap:12,
              transition:"border-color .2s, transform .2s, box-shadow .2s",
            }}
            onMouseEnter={(e)=>{ e.currentTarget.style.borderColor="rgba(239,126,241,.5)"; e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 12px 30px rgba(47,19,89,.25)"; }}
            onMouseLeave={(e)=>{ e.currentTarget.style.borderColor="rgba(255,255,255,.12)"; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}
            >
              <div style={{ width:48, height:48, borderRadius:12, background:"rgba(255,255,255,.15)", display:"grid", placeItems:"center" }}>
                <FrontIcon name={f.icon} color="#fff"/>
              </div>
              <div style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:17, color:"#fff", letterSpacing:"-.02em", lineHeight:1.15 }}>{f.title}</div>
              <div style={{ fontFamily:"var(--font-body)", fontSize:12.5, color:"rgba(255,255,255,.72)", lineHeight:1.45, flex:1 }}>{f.sub}</div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ BIG NUMBERS — night mode ============================ */
function BigNumbers() {
  const stats = [
    { num:"1 mi+",   label:"pessoas impactadas por mês",   sub:"Instagram, WhatsApp, LinkedIn, YouTube" },
    { num:"254 mil", label:"assinantes da newsletter",     sub:<>profissionais de marketing<br/>que se informam aqui</> },
    { num:"250 mil", label:"visitantes únicos/mês",        sub:"No portal mundodomarketing.com.br. Base recorrente e qualificada." },
    { num:"48%",     label:"perfil de tomador de decisão", sub:"CMOs, diretores, founders e heads compõem mais da metade da audiência." },
  ];
  return (
    <section style={{
      background:"#1B0A3C",
      padding:"110px 32px 120px", position:"relative", overflow:"hidden",
    }}>
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        background:"radial-gradient(at 52% 8%, rgba(152,54,248,.42), transparent 50%), radial-gradient(at 92% 46%, rgba(125,107,225,.34), transparent 55%), radial-gradient(at 8% 88%, rgba(239,126,241,.12), transparent 50%)",
      }}/>
      <div className="container" style={{ position:"relative" }}>
        <div className="eyebrow" style={{ color:"#EF7EF1", marginBottom:22 }}>Big Numbers</div>
        <h2 className="display bignum-heading" style={{ fontSize:"clamp(36px,5vw,76px)", margin:"0 0 64px", maxWidth:980, color:"#fff", lineHeight:1.04 }}>
          A escala que <span style={{ fontStyle:"italic", color:"#EF7EF1" }}>importa</span><br className="bignum-br"/>
          e a qualificação que faz diferença
        </h2>
        <div className="bignum-grid" style={{
          display:"grid",
          gridTemplateColumns:"repeat(4,minmax(0,1fr))",
          gap:0,
          borderTop:"1px solid rgba(255,255,255,.16)",
          borderBottom:"1px solid rgba(255,255,255,.16)",
        }}>
          {stats.map((s,i) => (
            <div key={i} className="bignum-cell" style={{
              padding:"44px 30px 46px",
              borderRight: i<3?"1px solid rgba(255,255,255,.16)":"none",
            }}>
              <div className="num" style={{ fontSize:"clamp(44px,3.9vw,64px)", color:"#E9B6F2", lineHeight:.92 }}>{s.num}</div>
              <div style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:17, marginTop:20, color:"#fff", letterSpacing:"-.015em", lineHeight:1.2 }}>
                {s.label}
              </div>
              <div style={{ fontFamily:"var(--font-body)", fontWeight:400, fontSize:13.5, color:"rgba(255,255,255,.62)", marginTop:8, lineHeight:1.45, overflowWrap:"anywhere" }}>{s.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop:52, textAlign:"center" }}>
          <button onClick={openForm} style={{ background:"linear-gradient(135deg,#C40E66,#EF7EF1)", color:"#fff", border:"none", padding:"16px 40px", borderRadius:10, fontFamily:"var(--font-body)", fontWeight:700, fontSize:16, cursor:"pointer", letterSpacing:"-.01em", boxShadow:"0 12px 30px rgba(196,14,102,.35)", minHeight:48 }}>Quero anunciar aqui →</button>
        </div>
      </div>
    </section>
  );
}

/* ============================ CLUSTERS ============================ */
function Clusters() {
  const data = [
    { k:"A", pct:29.4, label:"Tomadores de decisão",    roles:"Founder · Sócio · CEO · C-Level · Diretor", color:"#291059" },
    { k:"B", pct:18.3, label:"Liderança intermediária", roles:"Superintendente · Head · Gerente",           color:"#5F34A5" },
    { k:"C", pct:6.5,  label:"Coordenação",              roles:"Coordenador · Supervisor",                  color:"#9836F8" },
    { k:"D", pct:23.7, label:"Especialistas",            roles:"Especialista · Analista",                   color:"#AB6ED1" },
    { k:"E", pct:22.1, label:"Início de carreira",       roles:"Assistente · Estagiário · Estudante",       color:"#EF7EF1" },
  ];

  const total = data.reduce((s,d)=>s+d.pct,0);
  const C = 2 * Math.PI * 90;
  let acc = 0;
  const arcs = data.map(d => {
    const frac = d.pct/total;
    const len = frac*C;
    const seg = { ...d, len, off: -acc };
    acc += len;
    return seg;
  });
  const decisionMakers = Math.round(data[0].pct + data[1].pct);

  return (
    <section id="audiencia" style={{ background:"#fff", padding:"110px 32px" }}>
      <div className="container">
        <div style={{ marginBottom:60 }}>
          <div className="eyebrow" style={{ color:"#9836F8", marginBottom:16 }}>Qualificação da audiência</div>
          <h2 className="display" style={{ fontSize:"clamp(38px,4.6vw,64px)", margin:"0 0 18px", color:"#291059", maxWidth:1000, lineHeight:1.05 }}>
            <span style={{ color:"#9836F8" }}>{decisionMakers}%</span> da audiência decide<br/>ou pauta orçamento.
          </h2>
          <p style={{ fontSize:18, lineHeight:1.55, color:"#3A2F4D", maxWidth:680, margin:0 }}>
            Estratificação por nível hierárquico declarado pela base. Os dois clusters de liderança somam mais de <strong>47%</strong>, uma concentração rara em mídia editorial brasileira.
          </p>
        </div>

        <div className="clusters-grid" style={{ display:"grid", gridTemplateColumns:"440px 1fr", gap:60, alignItems:"center" }}>
          <div className="donut-wrap" style={{ position:"relative" }}>
            <svg viewBox="0 0 240 240" width="100%" height="100%">
              <circle cx="120" cy="120" r="90" fill="none" stroke="#ECECEC" strokeWidth="34"/>
              {arcs.map((a,i) => (
                <circle key={i} cx="120" cy="120" r="90" fill="none"
                  stroke={a.color} strokeWidth="34"
                  strokeDasharray={`${a.len} ${C-a.len}`}
                  strokeDashoffset={a.off}
                  transform="rotate(-90 120 120)"/>
              ))}
              <text x="120" y="116" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="700" fontSize="44" fill="#291059" letterSpacing="-.04em">{decisionMakers}%</text>
              <text x="120" y="138" textAnchor="middle" fontFamily="Syne, sans-serif" fontSize="11" fill="#5F34A5" letterSpacing=".14em">CLUSTERS A + B</text>
              <text x="120" y="156" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#555F70">tomadores e liderança</text>
            </svg>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
            {data.map((d) => (
              <div key={d.k} className="cluster-row" style={{ display:"grid", gridTemplateColumns:"54px 1fr 90px", gap:20, alignItems:"center" }}>
                <div style={{
                  width:54, height:54, borderRadius:14,
                  background:d.color, color:"#fff",
                  display:"grid", placeItems:"center",
                  fontFamily:"var(--font-display)", fontWeight:700, fontSize:24,
                  letterSpacing:"-.02em",
                }}>{d.k}</div>
                <div>
                  <div style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:19, color:"#291059", letterSpacing:"-.015em" }}>{d.label}</div>
                  <div style={{ fontSize:13.5, color:"#555F70", marginTop:3, fontFamily:"var(--font-body)" }}>{d.roles}</div>
                  <div style={{ height:5, background:"#ECECEC", borderRadius:99, marginTop:10, overflow:"hidden" }}>
                    <div style={{ width:`${d.pct*2.5}%`, height:"100%", background:d.color, borderRadius:99 }}/>
                  </div>
                </div>
                <div className="num" style={{ fontSize:30, color:d.color, textAlign:"right" }}>{d.pct}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ VOZES — portrait cards ============================ */
function Vozes() {
  const SPEAKER   = { background:"#1F0A47",  color:"#fff", label:"Speaker",   border:"none" };
  const COLUNISTA = { background:"#C40E66",  color:"#fff", label:"Colunista", border:"none" };
  const PODCAST   = { background:"#5F34A5",  color:"#fff", label:"Podcast",   border:"none" };

  const people = [
    { name:"Daniel Waks",      role:"VP de Marketing",        company:"Ambev",           logo:window.__res("assets/brands/ambev.svg"),       img:window.__res("assets/vozes/daniel-waks.png"),      badge:SPEAKER },
    { name:"Louise Rossetti",  role:"Diretora de Marketing",  company:"H&M",             logo:window.__res("assets/brands/hm.svg"),          img:window.__res("assets/vozes/louise-rossetti.png"),  badge:SPEAKER },
    { name:"Luís Justo",       role:"CMO",                    company:"Rock in Rio",     logo:window.__res("assets/brands/rock-in-rio.svg"), img:window.__res("assets/vozes/luis-justo.png"),       badge:SPEAKER },
    { name:"Giovanna Giroto",  role:"CMO",                    company:"Serasa Experian", logo:window.__res("assets/brands/serasa.svg"),      img:window.__res("assets/vozes/giovanna-giroto.png"),  badge:SPEAKER },
    { name:"Florence Scappini",role:"VP de Marketing",        company:"Grupo OLX",       logo:window.__res("assets/brands/grupo-olx.svg"),   img:window.__res("assets/vozes/florence-scappini.png"),badge:COLUNISTA },
    { name:"Henrique Duda",    role:"CMO",                    company:"Linelo",          logo:window.__res("assets/brands/livelo.svg"),      img:window.__res("assets/vozes/henrique-duda.png"),    badge:COLUNISTA },
    { name:"André Kliousoff",  role:"CMO",                    company:"BTG Pactual",     logo:window.__res("assets/brands/btg-pactual.svg"), logoH:27, img:window.__res("assets/vozes/andre-kliousoff.png"), badge:SPEAKER },
    { name:"André Britto",     role:"CMO",                    company:"Bauducco",        logo:window.__res("assets/brands/bauducco.png"),    img:window.__res("assets/vozes/andre-britto.png"),     badge:COLUNISTA },
    { name:"Aléxia Duffles",   role:"Diretora de Marketing",  company:"MRV",             logo:window.__res("assets/brands/mrv.svg"),         img:window.__res("assets/vozes/alexia-duffles.png"),   badge:SPEAKER },
    { name:"Ana Pugina",       role:"CMO",                    company:"Pluxee",          logo:window.__res("assets/brands/pluxee.svg"),      img:window.__res("assets/vozes/ana-pugina.png"),       badge:PODCAST },
    { name:"João Clark",       role:"CMO",                    company:"Sicredi",         logo:window.__res("assets/brands/sicredi.svg"),     img:window.__res("assets/vozes/joao-clark.png"),       badge:COLUNISTA },
    { name:"André Ramello",    role:"CMO",                    company:"Bimbo",           logo:window.__res("assets/brands/bimbo.svg"),       img:window.__res("assets/vozes/andre-ramello.png"),    badge:COLUNISTA },
    { name:"Bárbara Toscano",  role:"Diretora de Marketing",  company:"Lenovo",          logo:window.__res("assets/brands/lenovo.svg"),      img:window.__res("assets/vozes/barbara-toscano.png"),  badge:SPEAKER },
    { name:"Fernando Migrone", role:"VP de Marketing",        company:"Zendesk",         logo:window.__res("assets/brands/zendesk.svg"),     img:window.__res("assets/vozes/fernando-migrone.png"), badge:PODCAST },
    { name:"Carlos Scappini",  role:"CMO",                    company:"Mynd",            logo:window.__res("assets/brands/mynd.svg"),        img:window.__res("assets/vozes/carlos-scappini.png"),  badge:PODCAST },
    { name:"Claudine Bayma",   role:"Diretora de Marketing",  company:"Kwai",            logo:window.__res("assets/brands/kwai.svg"),        img:window.__res("assets/vozes/claudine-bayma.png"),   badge:PODCAST },
  ];

  const loopPeople = [...people, ...people];
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);
  const pendingRef = useRef(0);

  useEffect(() => {
    const el = trackRef.current; if (!el) return;
    let raf;
    const speed = 0.45;
    const step = () => {
      if (el) {
        const half = el.scrollWidth / 2 || 1;
        let move = 0;
        if (!pausedRef.current) move += speed;
        if (pendingRef.current !== 0) {
          const ease = pendingRef.current * 0.14;
          move += ease;
          pendingRef.current -= ease;
          if (Math.abs(pendingRef.current) < 0.5) pendingRef.current = 0;
        }
        let pos = posRef.current + move;
        if (pos >= half) pos -= half;
        if (pos < 0) pos += half;
        posRef.current = pos;
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const scroll = (dir) => { pendingRef.current += dir * 320; };

  const PersonCard = ({ p, i }) => (
    <article aria-hidden={i >= people.length} style={{
      position:"relative", borderRadius:18, overflow:"hidden", background:"#fff",
      width:220, flexShrink:0, aspectRatio:"4/5",
      border:"1px solid rgba(47,19,89,.08)",
      transition:"transform .25s, box-shadow .25s", cursor:"pointer",
    }}
    onMouseEnter={(e)=>{ pausedRef.current=true; e.currentTarget.style.boxShadow="0 24px 50px rgba(47,19,89,.20)"; e.currentTarget.style.transform="translateY(-4px)"; }}
    onMouseLeave={(e)=>{ pausedRef.current=false; e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="none"; }}
    >
      <img src={p.img} alt={p.name} loading="lazy" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }}/>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(20,8,46,0) 42%, rgba(20,8,46,.55) 66%, rgba(20,8,46,.92))" }}/>
      <div style={{
        position:"absolute", top:12, left:12,
        background:p.badge.background, color:p.badge.color,
        padding:"5px 11px", borderRadius:999,
        fontFamily:"var(--font-accent)", fontSize:10, letterSpacing:".12em",
        textTransform:"uppercase", fontWeight:700, whiteSpace:"nowrap",
        border:p.badge.border,
        boxShadow:"0 2px 10px rgba(20,8,46,.45)",
      }}>{p.badge.label}</div>
      <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"16px 14px 16px" }}>
        <div style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:19, lineHeight:1.05, letterSpacing:"-.02em", color:"#fff", textShadow:"0 1px 8px rgba(0,0,0,.4)" }}>{p.name}</div>
        <div style={{ fontFamily:"var(--font-body)", fontWeight:600, fontSize:12.5, color:"#EBD9FF", marginTop:5 }}>{p.role}</div>
        {p.logo
          ? <img src={p.logo} alt={p.company} style={{ height:p.logoH || 20, width:"auto", maxWidth:120, display:"block", marginTop:8, filter:"drop-shadow(0 1px 4px rgba(0,0,0,.45))" }}/>
          : (p.company && <div style={{ fontFamily:"var(--font-body)", fontWeight:400, fontSize:12.5, color:"rgba(255,255,255,.8)", marginTop:1 }}>{p.company}</div>)
        }
      </div>
    </article>
  );

  return (
    <section id="vozes" style={{ background:"#1F0A47", padding:"110px 32px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(at 80% 20%, rgba(152,54,248,.28), transparent 55%), radial-gradient(at 10% 80%, rgba(95,52,165,.32), transparent 55%)", pointerEvents:"none" }}/>
      <div className="container" style={{ position:"relative" }}>
        <div style={{ marginBottom:32 }}>
          <div className="eyebrow" style={{ color:"#C5A8F5", marginBottom:18 }}>Vozes do Mundo do Marketing</div>
          <h2 className="display" style={{ fontSize:"clamp(38px,4.6vw,64px)", margin:"0 0 24px", color:"#fff", lineHeight:1.05 }}>
            CMOs e líderes <span style={{ fontStyle:"italic", color:"#EF7EF1" }}>palestram,</span><br/>
            escrevem, gravam.
          </h2>
          <p style={{ fontSize:18, lineHeight:1.55, color:"rgba(255,255,255,.76)", maxWidth:620, margin:"0 0 28px" }}>
            Quem move o marketing brasileiro publica com a gente. Sua marca se posiciona na mesma vizinhança editorial dos executivos que ela quer alcançar.
          </p>
          <div style={{ display:"flex", gap:8 }}>
            <button onClick={()=>scroll(-1)} aria-label="Anterior" style={{ width:44, height:44, borderRadius:99, background:"rgba(255,255,255,.12)", color:"#fff", border:"1px solid rgba(255,255,255,.22)", fontSize:18, fontWeight:700, cursor:"pointer", fontFamily:"var(--font-body)" }}>←</button>
            <button onClick={()=>scroll(1)}  aria-label="Próximo"  style={{ width:44, height:44, borderRadius:99, background:"rgba(255,255,255,.12)", color:"#fff", border:"1px solid rgba(255,255,255,.22)", fontSize:18, fontWeight:700, cursor:"pointer", fontFamily:"var(--font-body)" }}>→</button>
          </div>
        </div>

        <div
          ref={trackRef}
          style={{
            display:"flex", gap:16, overflowX:"auto",
            paddingBottom:6, scrollbarWidth:"none",
            cursor:"grab",
          }}
        >
          {loopPeople.map((p,i) => <PersonCard key={i} p={p} i={i}/>)}
        </div>

        <div style={{ marginTop:36, textAlign:"center", fontFamily:"var(--font-body)", fontSize:14, color:"rgba(255,255,255,.5)" }}>
          + de <strong style={{ color:"#EF7EF1" }}>200</strong> executivos publicam ou participam de conteúdos do Mundo do Marketing por ano.
        </div>
        <div style={{ marginTop:36, textAlign:"center" }}>
          <button onClick={openForm} style={{ background:"linear-gradient(135deg,#5F34A5,#9836F8)", color:"#fff", border:"none", padding:"16px 40px", borderRadius:10, fontFamily:"var(--font-body)", fontWeight:700, fontSize:16, cursor:"pointer", letterSpacing:"-.01em", boxShadow:"0 12px 30px rgba(152,54,248,.45)", minHeight:48 }}>Falar com o time →</button>
        </div>
      </div>
    </section>
  );
}

/* ============================ CASE BRAZE ============================ */
function CaseBraze() {
  return (
    <section id="case" style={{ background:"#fff", padding:"110px 32px" }}>
      <div className="container">
        <div className="case-head" style={{ display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:60, alignItems:"end", marginBottom:54 }}>
          <div>
            <img src={window.__res("assets/brands/braze-wordmark.svg")} alt="Braze" style={{ height:44, width:"auto", display:"block", marginBottom:20 }}/>
            <h2 className="display" style={{ fontSize:"clamp(36px,4vw,56px)", margin:0, lineHeight:1.15 }}>
              <span style={{ color:"#9836F8", display:"block", fontStyle:"normal" }}>CASE DE SUCESSO:</span>
              <span style={{ color:"#291059" }}>Estratégia ABM</span>
            </h2>
          </div>
          <p style={{ fontSize:18, lineHeight:1.55, color:"#3A2F4D", maxWidth:680 }}>
            A Braze não comprou mídia. Construiu, com a gente, uma estratégia editorial de 12 meses combinando coluna, podcast, eventos presenciais e cobertura jornalística usando o ecossistema do Mundo do Marketing como infraestrutura de ABM.
          </p>
        </div>

        <BrazeCase/>

        {/* Painel de resultado — 3 Big Numbers */}
        <div className="case-result-panel" style={{
          marginTop:48, padding:"40px 44px",
          background:"#1F0A47", color:"#fff",
          borderRadius:24, position:"relative", overflow:"hidden",
        }}>
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(at 90% 50%, rgba(152,54,248,.45), transparent 60%)" }}/>
          <div style={{ position:"relative" }}>
            <div className="eyebrow" style={{ color:"#C5A8F5", marginBottom:10 }}>Resultados da estratégia ABM</div>
            <h3 className="headline" style={{ fontSize:24, margin:"0 0 32px", lineHeight:1.15, color:"#fff" }}>
              12 meses de estratégia integrada. Estes são os resultados.
            </h3>
            <div className="case-bignums" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
              {[
                ["44", "contas tocadas"],
                ["1,05 mi", "de impressões na mídia"],
                ["+80", "artigos publicados"],
              ].map(([n,l],idx) => (
                <div key={idx} style={{ padding:"26px 22px", background:"rgba(255,255,255,.06)", borderRadius:16, border:"1px solid rgba(255,255,255,.1)" }}>
                  <div className="num case-num" style={{ fontSize:"clamp(40px,4.5vw,64px)", fontWeight:900, color:"#EF7EF1", lineHeight:.9 }}>{n}</div>
                  <div style={{ fontFamily:"var(--font-body)", fontSize:14, marginTop:12, color:"rgba(255,255,255,.72)", fontWeight:500 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop:40, textAlign:"center" }}>
          <button onClick={openForm} style={{ background:"linear-gradient(135deg,#5F34A5,#9836F8)", color:"#fff", border:"none", padding:"16px 40px", borderRadius:10, fontFamily:"var(--font-body)", fontWeight:700, fontSize:16, cursor:"pointer", letterSpacing:"-.01em", boxShadow:"0 12px 30px rgba(152,54,248,.35)", minHeight:48 }}>Quero uma estratégia assim →</button>
        </div>
      </div>
    </section>
  );
}

/* ============================ FINAL CTA ============================ */
function FinalCTA() {
  return (
    <section style={{ background:"#fff", padding:"90px 32px 110px" }}>
      <div className="container">
        <div className="cta-card" style={{
          borderRadius:24, padding:"60px 56px",
          background:"linear-gradient(135deg,#2F1359 0%, #5F34A5 50%, #9836F8 100%)",
          color:"#fff", position:"relative", overflow:"hidden",
        }}>
          <div style={{
            position:"absolute", inset:0,
            background:"url(assets/textures/textura-logos-multiplos-sem-fundo.png) right center/contain no-repeat",
            opacity:.06, filter:"invert(1)"
          }}/>
          <div className="cta-grid" style={{ position:"relative", display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:48, alignItems:"center" }}>
            <div>
              <div className="eyebrow" style={{ color:"#EF7EF1", marginBottom:18 }}>Próximo passo</div>
              <h2 className="display" style={{ fontSize:"clamp(38px,4.6vw,64px)", margin:"0 0 18px", lineHeight:1.05, color:"#fff" }}>
                Vamos desenhar<br/>a sua <span style={{ fontStyle:"italic", color:"#EF7EF1" }}>estratégia</span>.
              </h2>
              <p style={{ fontSize:17, lineHeight:1.5, maxWidth:520, color:"#fff" }}>
                Um projeto editorial de 6 a 12 meses ou mais… pensado para a sua marca, usando as frentes certas do nosso ecossistema. Conte para a gente seu objetivo.
              </p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              <button onClick={openForm} style={{
                display:"block", textAlign:"center", width:"100%",
                background:"#fff", color:"#291059", border:"none",
                padding:"20px 28px", borderRadius:12,
                fontFamily:"var(--font-body)", fontWeight:700, fontSize:16,
                boxShadow:"0 12px 34px rgba(0,0,0,.25)",
                cursor:"pointer",
                transition:"transform .2s, box-shadow .2s, background .2s, color .2s",
                minHeight:48,
              }}
              onMouseEnter={(e)=>{ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 18px 44px rgba(0,0,0,.32)"; e.currentTarget.style.background="#EBD9FF"; }}
              onMouseLeave={(e)=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 12px 34px rgba(0,0,0,.25)"; e.currentTarget.style.background="#fff"; }}
              >Quero falar com o time →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ FOOTER ============================ */
function Footer() {
  return (
    <footer style={{ background:"#1F0A47", color:"#fff", padding:"56px 32px 36px" }}>
      <div className="container footer-grid" style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:40 }}>
        <div className="footer-brand">
          <img src={window.__res("assets/logos/logo-extenso-branco.svg")} alt="" style={{ height:24, marginBottom:18 }}/>
          <p style={{ fontSize:14, color:"#fff", opacity:.95, lineHeight:1.55, maxWidth:340 }}>
            O principal canal de insights para profissionais de marketing no Brasil. Editorial, podcasts, eventos e inteligência.
          </p>
        </div>
        {[
          ["Conteúdo", ["Portal","Newsletter","Colunas","Pesquisas"]],
          ["Podcasts", ["Mundo do Marketing","CMO Agenda","Green Room"]],
          ["Eventos",  ["CMO Summit","B2B Summit","CMO Meetup","Pasta Experience"]],
        ].map(([t,ls]) => (
          <div key={t}>
            <div style={{ fontFamily:"var(--font-accent)", textTransform:"uppercase", letterSpacing:".12em", fontSize:11.5, opacity:.85, marginBottom:14, color:"#C5A8F5" }}>{t}</div>
            <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:10 }}>
              {ls.map(l => <li key={l}><a href="#" style={{ color:"#fff", opacity:.92, textDecoration:"none", fontSize:14 }}>{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="container footer-bottom" style={{ marginTop:40, paddingTop:24, borderTop:"1px solid rgba(255,255,255,.22)", display:"flex", justifyContent:"space-between", fontSize:12, fontFamily:"var(--font-accent)", letterSpacing:"-.02em", color:"#fff", opacity:.95 }}>
        <span>www.mundodomarketing.com.br</span>
        <span>© 2026 Mundo do Marketing · Anuncie</span>
      </div>
    </footer>
  );
}

/* ============================ APP ============================ */
function App() {
  return (
    <div data-screen-label="Anuncie · Landing">
      <FormModal/>
      <TopBar/>
      <Hero/>
      <LogosCarousel/>
      <QuemSomos/>
      <BigNumbers/>
      <Clusters/>
      <Vozes/>
      <CaseBraze/>
      <Produtos/>
      <FinalCTA/>
      <Footer/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

