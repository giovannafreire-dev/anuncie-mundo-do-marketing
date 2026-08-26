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
