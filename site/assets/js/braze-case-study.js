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
