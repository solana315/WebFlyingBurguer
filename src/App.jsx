import { useState } from 'react'

const features = [
  {
    icon: '🧭',
    title: 'A rulote é tua',
    text: 'Escolhe o balcão, organiza a bancada e decide como recebes cada cliente que pousa.'
  },
  {
    icon: '🍞',
    title: '12 receitas base',
    text: 'Do burger simples ao especial voador — cada pedido é uma combinação diferente de ingredientes.'
  },
  {
    icon: '⏱️',
    title: 'A paciência conta',
    text: 'Cada ave tem o seu próprio limite. Demoraste demais? Vai-se embora e leva pontos contigo.'
  },
  {
    icon: '🛎️',
    title: 'Menus e extras',
    text: 'Batatas, bebida ou os dois — serve o tabuleiro completo para os clientes mais exigentes.'
  }
]

const steps = [
  {
    icon: '🐦',
    title: 'Recebe a pedida',
    text: 'O cliente pousa no balcão e mostra o pedido acima da cabeça. Lê bem antes de correr para a bancada.'
  },
  {
    icon: '🥬',
    title: 'Prepara o hambúrguer',
    text: 'Empilha pão, carne e os extras certos. A ordem dos ingredientes é o que separa um cliente feliz de um faminto.'
  },
  {
    icon: '✈️',
    title: 'Entrega e vê-o partir',
    text: 'Serve o tabuleiro certo antes do tempo acabar. Acertaste? Ele come, comenta e levanta voo satisfeito.'
  }
]

const tiers = [
  {
    medal: '🥉',
    title: 'O Começo Tranquilo',
    text: 'Um cliente de cada vez, tempo de sobra e receitas simples. Aqui aprendes a bancada de olhos fechados.',
    highlight: false
  },
  {
    medal: '🥈',
    title: 'A Pressão Aumenta',
    text: 'Bandos maiores, menus completos e clientes que já não perdoam hesitações. É aqui que a rotina se prova.',
    highlight: false
  },
  {
    medal: '🏆',
    title: 'A Rulote Lendária',
    text: 'Fila constante, todas as combinações possíveis e zero margem de erro. Chega aqui e o teu nome fica no balcão.',
    highlight: true
  }
]

function Cloud({ className, style }) {
  return <div className={`cloud ${className}`} style={style}></div>
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <>
      <header>
        <nav className="nav">
          <div className="logo">
            <span className="badge">🍔</span> Flying Burguer
          </div>
          <div className="nav-links">
            <a href="#historia">Sobre o jogo</a>
            <a href="#passos">Como se joga</a>
            <a href="#progressao">Progressão</a>
            <a href="#trailer">Trailer</a>
          </div>
          <div className="nav-actions">
            <a href="#" className="btn btn-ghost">Entrar</a>
            <a href="#" className="btn btn-solid">Criar conta</a>
          </div>
        </nav>
      </header>

      <section className="hero">
        <Cloud className="cloud1" />
        <Cloud className="cloud2" />
        <Cloud className="cloud3" />
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">🐦 Novo — modo Bando Faminto</span>
            <h1>Serve rápido.<br />Voa mais <span>alto</span>.</h1>
            <p className="lede">
              Gere a rulote mais movimentada da baía. Clientes com asas — tucanos, araras e
              gaivotas — pousam com fome e pouca paciência. Monta o hambúrguer certo antes que
              levantem voo outra vez.
            </p>
            <div className="hero-ctas">
              <a href="#" className="btn btn-solid large">▶ Jogar agora</a>
              <a href="#trailer" className="btn btn-outline-light">Ver trailer</a>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-card">
              <div className="art-frame">
                🦜
                <span className="tag">Cheeseburger pronto!</span>
              </div>
            </div>
            <div className="art-badge">
              <strong>+250</strong>
              <span>pontos</span>
            </div>
          </div>
        </div>
      </section>

      <section id="historia">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">A premissa</span>
            <h2>Uma história servida com hambúrguer</h2>
            <p>
              A rulote da baía nunca fechou — só mudou de clientela. Cada dia traz um bando
              novo, uma fila mais comprida e uma razão para não deixares ninguém de bico
              fechado.
            </p>
          </div>
          <div className="grid-4">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="passos" style={{ background: 'var(--cream-deep)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">O ciclo de jogo</span>
            <h2>3 passos para o hambúrguer perfeito</h2>
            <p>
              Cada cliente segue a mesma rota — do céu ao balcão e de volta. O que muda é o
              que lhe entregas a meio do caminho.
            </p>
          </div>
          <div className="steps-wrap">
            <svg
              className="flight-path"
              viewBox="0 0 1000 40"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M60,20 Q500,-30 940,20"
                fill="none"
                stroke="#eda33b"
                strokeWidth="3"
                strokeDasharray="2 14"
                strokeLinecap="round"
              />
            </svg>
            <div className="grid-3">
              {steps.map((s, i) => (
                <div className="step-card" key={s.title}>
                  <div className="step-shot">
                    {s.icon}
                    <span className="step-num">{i + 1}</span>
                  </div>
                  <div className="step-body">
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="controls-bar">
            <span>🎮 Comandos:</span>
            <span><span className="key">WASD</span> mover-se</span>
            <span><span className="key">E</span> apanhar / colocar</span>
            <span><span className="key">Space</span> entregar tabuleiro</span>
          </div>
        </div>
      </section>

      <section id="progressao" className="progress-band">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Progressão</span>
            <h2>Até onde chegas?</h2>
            <p>
              A fila cresce a cada dia servido. Estes são os três marcos que separam quem
              sobrevive de quem domina a rulote.
            </p>
          </div>
          <div className="tier-grid">
            {tiers.map((t) => (
              <div
                className={`tier-card${t.highlight ? ' highlight' : ''}`}
                key={t.title}
              >
                <div className="tier-medal">{t.medal}</div>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trailer" className="video-section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Vê antes de jogar</span>
            <h2>Vê o jogo em ação</h2>
            <p>Dois minutos de fila cheia, pedidos trocados e um final por segundos.</p>
          </div>
          <div className="video-frame">
            {isPlaying ? (
              <video
                className="video-el"
                controls
                autoPlay
                src="/trailer.mp4"
                poster="/trailer-poster.jpg"
              >
                O teu navegador não suporta vídeo HTML5.
              </video>
            ) : (
              <>
                <Cloud className="cloud3" style={{ top: '10%', left: '8%' }} />
                <Cloud className="cloud3" style={{ top: '65%', right: '10%' }} />
                <button
                  className="play-btn"
                  aria-label="Reproduzir trailer"
                  onClick={() => setIsPlaying(true)}
                >
                  ▶
                </button>
                <span className="video-caption">Trailer oficial · 2:04</span>
              </>
            )}
          </div>
          <p className="video-hint">
            Substitui <code>/public/trailer.mp4</code> e <code>/public/trailer-poster.jpg</code>{' '}
            pelo teu vídeo real.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="cta-strip">
          <div>
            <h2>A fila já está a formar-se.</h2>
            <p>Joga grátis no browser — sem downloads, sem esperar.</p>
          </div>
          <a
            href="#"
            className="btn btn-outline-light"
            style={{ background: '#fff', color: 'var(--toast)', borderColor: '#fff' }}
          >
            Jogar agora
          </a>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="logo" style={{ color: '#fff', marginBottom: 14 }}>
                <span className="badge">🍔</span> Flying Burguer
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 260 }}>
                Uma rulote, três espécies de clientes e nenhuma paciência a perder. Feito
                para jogar em qualquer pausa.
              </p>
            </div>
            <div>
              <h4>Jogo</h4>
              <ul>
                <li><a href="#historia">Sobre o jogo</a></li>
                <li><a href="#passos">Como se joga</a></li>
                <li><a href="#progressao">Progressão</a></li>
              </ul>
            </div>
            <div>
              <h4>Comunidade</h4>
              <ul>
                <li><a href="#">Discord</a></li>
                <li><a href="#">Novidades</a></li>
                <li><a href="#">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Termos</a></li>
                <li><a href="#">Privacidade</a></li>
                <li><a href="#">Contactos</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Flying Burguer. Todos os direitos reservados.</span>
            <span>Feito com 🍞 e muita paciência (a nossa, não a dos clientes).</span>
          </div>
        </div>
      </footer>
    </>
  )
}
