import { useState } from 'react'
import menu from './assets/menu.jpeg'
import montagem from './assets/montagem.jpeg'
import incio from './assets/incio.jpeg'
import SearchAlt from './assets/Search_alt.png'
import Vector from './assets/Vector.png'
import burger from './assets/burger.png'
import Angry from './assets/Angry.png'
import n1 from './assets/n1.png'
import n2 from './assets/n2.png'
import n3 from './assets/n3.png'

const features = [
  {
    icon: <img src={burger} alt="Cozinha Caótica icon" className="feature-icon-img" />,
    title: 'Cozinha Caótica',
    text: 'Prepara hambúrgueres em tempo real numa cozinha 3D totalmente interativa. Cada ingrediente conta!'
  },
  {
    icon: <img src={Angry} alt="Clientes Alados icon" className="feature-icon-img" />,
    title: 'Clientes Alados',
    text: 'As aves chegam ao balcão com pedidos específicos. A sua paciência diminui a cada nível — não as faças esperar!'
  },
  {
    icon: <img src={Vector} alt="Velocidade icon" className="feature-icon-img" />,
    title: 'Velocidade Crescente',
    text: 'Cada nível é mais frenético que o anterior. Consegues sobreviver ao caos do Nível 3?'
  },
  {
    icon: <img src={SearchAlt} alt="Search icon" className="feature-icon-img" />,
    title: 'Um Segredo Sombrio',
    text: 'Há algo nos ingredientes que as aves não sabem... Chega ao nível final para descobrires a verdade.'
  }
]

const steps = [
  {
    icon: '🐦',
    title: 'Recebe o Pedido',
    text: 'Olha para o painel de PEDIDOS no canto superior direito. A ave cliente mostra o que quer — pão, hambúrguer, alface, tomate e muito mais.',
    img: menu
  },
  {
    icon: '🍔',
    title: 'Prepara na Cozinha',
    text: 'Usa os equipamentos da cozinha para grelhar a carne, montar o hambúrguer na ordem certa e preparar os ingredientes a tempo. Cada segundo conta!',
    img: montagem
  },
  {
    icon: '🕊️',
    title: 'Entrega à Ave',
    text: 'Serve o hambúrguer ao cliente antes que a paciência dele acabe! No Nível 3 as aves ficam extremamente impacientes... e a verdade vem à tona.',
    img: incio
  }
]

const tiers = [
  {
    icon: <img src={n1} alt="Nivel1 icon" className="feature-icon-img" />,
    level: 'NÍVEL 1',
    title: 'O Começo Tranquilo',
    text: 'As aves chegam com calma e os pedidos são simples. Aprende os controlos, ganha confiança na cozinha e começa a entregar hambúrgueres aos clientes. Tudo parece normal por aqui...',
    progress: 1,
    tierClass: 'level-1'
  },
  {
    icon: <img src={n2} alt="Nivel1 icon" className="feature-icon-img" />,
    level: 'NÍVEL 2',
    title: 'A Pressão Aumenta',
    text: 'Os pedidos ficam mais complexos e as aves já não têm tanta paciência. A cozinha acelera — tens de ser mais rápido e mais preciso para sobreviver ao rush.',
    progress: 2,
    tierClass: 'level-2'
  },
  {
    icon: <img src={n3} alt="Nivel1 icon" className="feature-icon-img" />,
    level: 'NÍVEL 3',
    title: 'A Verdade Revelada',
    text: 'Velocidade máxima. Paciência mínima. E quando chegas ao fim... descobre-se o ingrediente secreto dos hambúrgueres. Será que as aves vão gostar de saber o que andaram a comer?',
    progress: 3,
    tierClass: 'level-3'
  }
]

function Cloud({ className, style }) {
  return <div className={`cloud ${className}`} style={style}></div>
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [headerImage, setHeaderImage] = useState(() => {
    try {
      return localStorage.getItem('headerImage') || menu
    } catch (e) {
      return menu
    }
  })

  function handleFileChange(e) {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const dataUrl = ev.target.result
      try {
        localStorage.setItem('headerImage', dataUrl)
      } catch (err) {
        console.warn('Could not save image to localStorage', err)
      }
      setHeaderImage(dataUrl)
    }
    reader.readAsDataURL(file)
  }

  function resetHeaderImage() {
    try {
      localStorage.removeItem('headerImage')
    } catch (e) {}
    setHeaderImage(menu)
  }

  return (
    <>
      <header className="sticky-top bg-white shadow-sm border-bottom">
        <div className="container-xl d-flex align-items-center justify-content-between py-3">
          <a href="#historia" className="d-flex align-items-center gap-3 navbar-brand mb-0 text-warning fw-bold fs-4">
            <span className="badge rounded-3 bg-warning text-dark border border-2 border-dark">🍔</span>
            Flying Burguer
          </a>
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <nav className="nav d-none d-lg-flex align-items-center gap-3">
              <a className="nav-link px-2 text-dark" href="#historia">Início</a>
              <a className="nav-link px-2 text-dark" href="#historia">Sobre o Jogo</a>
              <a className="nav-link px-2 text-dark" href="#passos">Como Jogar</a>
              <a className="nav-link px-2 text-dark" href="#trailer">Vídeo</a>
              <a className="nav-link px-2 text-dark" href="#equipa">Equipa</a>
            </nav>
            <a href="#historia" className="btn btn-warning btn-sm text-dark px-4">Jogar Agora</a>
          </div>
        </div>
      </header>

      <section className="hero position-relative overflow-hidden">
        <Cloud className="cloud1" />
        <Cloud className="cloud2" />
        <Cloud className="cloud3" />
        <div className="container-xl py-5">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <span className="badge rounded-pill bg-warning text-dark px-3 py-2 mb-4">Demo</span>
              <h1 className="display-1 fw-bold text-white lh-sm">FLYING<br />BURGUER</h1>
              <p className="lead text-white-75 mb-4">Faz os hambúrgueres mais deliciosos dos céus e entrega-os aos clientes mais exigentes — as aves! Mas atenção: há um segredo escondido nos ingredientes que só será revelado no último nível...</p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#historia" className="btn btn-warning btn-lg px-4 text-dark">Jogar Agora</a>
                <a href="#historia" className="btn btn-warning btn-light px-4 text-dark">Ver Trailer</a>
              </div>
            </div>
              <div className="art-card mx-auto">
                <div className="art-frame position-relative" style={{ backgroundImage: `url(${headerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="art-content text-start text-white">
                    <div className="d-flex flex-wrap gap-2">
                        <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="historia" className="py-5">
        <div className="container-xl">
          <div className="text-center mb-5">
            <span className="badge rounded-pill bg-warning text-dark mb-3">SOBRE O JOGO</span>
            <h2 className="fw-bold">Uma história servida com hambúrguer</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: '660px' }}>
              Flying Burguer é um jogo de culinária acelerado onde trabalhas como cozinheiro num food truck voador. Os teus únicos clientes? Aves que pousam no balcão com pedidos na mão. Tudo parece normal... até ao Nível 3.
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
            {features.map((f) => (
              <div className="col" key={f.title}>
                <div className="card h-100 shadow-sm border-0 rounded-4">
                  <div className="card-body">
                    <div className="d-inline-flex align-items-center justify-content-center mb-3 rounded-3 feature-icon">
                      {f.icon}
                    </div>
                    <h3 className="h5 fw-bold">{f.title}</h3>
                    <p className="text-secondary mb-0">{f.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="passos" className="py-5 bg-sky position-relative overflow-hidden">
        <div className="container-xl">
          <div className="text-center mb-5">
            <span className="badge rounded-pill bg-info bg-opacity-75 text-dark mb-3">COMO JOGAR?</span>
            <h2 className="fw-bold">3 passos para o hambúrguer perfeito</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: '680px' }}>
              Cada cliente segue a mesma rota — do céu ao balcão e de volta. O que muda é o que lhe entregas a meio do caminho.
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 position-relative">
            <svg className="flight-path position-absolute" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true">
              <path d="M60,20 Q500,-30 940,20" fill="none" stroke="#eda33b" strokeWidth="3" strokeDasharray="2 14" strokeLinecap="round" />
            </svg>
            {steps.map((s, i) => (
              <div className="col" key={s.title}>
                <div className="card h-100 rounded-4 shadow-sm border-0 step-card overflow-hidden">
                  <div className="step-shot position-relative">
                    <img src={s.img} alt={s.title} className="w-100 h-100" />
                    <span className="step-num">{i + 1}</span>
                  </div>
                  <div className="card-body">
                    <h3 className="h5 fw-bold">{s.title}</h3>
                    <p className="text-secondary mb-0">{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="controls-bar mt-5 p-4 rounded-5 bg-white shadow-sm">
            <div className="d-flex flex-column flex-md-row align-items-center gap-3">
              <div className="d-flex align-items-center gap-3">
                <span className="fs-4">🎮</span>
                <div>
                  <h6 className="mb-1 fw-bold">Controles</h6>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-2 text-secondary">
                <span className="badge rounded-pill bg-light text-dark py-2 px-3">WASD</span>
                <span className="badge rounded-pill bg-light text-dark py-2 px-3">Mouse</span>
                <span className="badge rounded-pill bg-light text-dark py-2 px-3">E</span>
              </div>
              <div className="text-secondary">Mover o personagem · Olhar à volta · Interagir com objetos</div>
            </div>
          </div>
        </div>
      </section>

      <section id="progressao" className="py-5 bg-light">
        <div className="container-xl">
          <div className="text-center mb-5">
            <span className="badge rounded-pill bg-warning text-dark mb-3">OS NÍVEIS</span>
            <h2 className="fw-bold">Até onde chegas? 🏆</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: '720px' }}>
              A fila cresce a cada dia servido. Estes são os três marcos que separam quem sobrevive de quem domina a rulote.
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {tiers.map((t) => (
              <div className="col" key={t.title}>
                <div className={`card h-100 rounded-4 shadow-sm border-4 ${t.tierClass}`}>
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-3 tier-header mb-3">
                      <div className="tier-icon">{t.icon}</div>
                      <span className="text-uppercase fw-bold small text-warning">{t.level}</span>
                    </div>
                    <h3 className="h5 fw-bold">{t.title}</h3>
                    <p className="text-secondary mb-4">{t.text}</p>
                    <div className="patience-group">
                      <span className="text-uppercase small fw-bold text-secondary">Paciência das aves</span>
                      <div className="patience-bar mt-2">
                        {[1, 2, 3].map((step) => (
                          <span key={step} className={`patience-step${step <= t.progress ? ' filled' : ''}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trailer" className="py-5">
        <div className="container-xl">
          <div className="text-center mb-5">
            <span className="badge rounded-pill bg-warning text-dark mb-3">VÍDEO</span>
            <h2 className="fw-bold">Vê o jogo em ação 🎬</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: '680px' }}>
              Vê o trailer oficial de Flying Burguer e descobre o caos delicioso que te espera nos céus!
            </p>
          </div>
          <div className="video-frame mx-auto">
            {isPlaying ? (
              <video className="video-el" controls autoPlay src="/trailer.mp4" poster="/trailer-poster.jpg">
                O teu navegador não suporta vídeo HTML5.
              </video>
            ) : (
              <button className="play-btn" aria-label="Reproduzir trailer" onClick={() => setIsPlaying(true)}>
                ▶
              </button>
            )}
          </div>
        </div>
      </section>

      <footer className="py-5">
        <div className="container-xl">
          <div className="footer-grid">
            <div>
              <div className="d-flex align-items-center gap-3 mb-3 text-white fw-bold fs-5">
                <span className="badge rounded-3 bg-warning text-dark">🍔</span>
                Flying Burguer
              </div>
              <p className="text-secondary" style={{ maxWidth: 260 }}>
                Uma rulote, três espécies de clientes e nenhuma paciência a perder. Feito para jogar em qualquer tempo livre.
              </p>
            </div>
            <div>
              <h4>Jogo</h4>
              <ul className="list-unstyled">
                <li><a href="#historia" className="text-secondary text-decoration-none">Sobre o jogo</a></li>
                <li><a href="#passos" className="text-secondary text-decoration-none">Como se joga</a></li>
                <li><a href="#progressao" className="text-secondary text-decoration-none">Progressão</a></li>
              </ul>
            </div>
            <div>
              <h4>Comunidade</h4>
              <ul className="list-unstyled">
                <li><a  className="text-secondary text-decoration-none">Ana Oliveira | pv25412</a></li>
                <li><a  className="text-secondary text-decoration-none">Inês Saraiva | pv27649</a></li>
                <li><a  className="text-secondary text-decoration-none">Gustavo Nunes | pv28693</a></li>
                <li><a  className="text-secondary text-decoration-none">Ivan Marques | pv27643</a></li>
                <li><a  className="text-secondary text-decoration-none">João Lopes | pv27637</a></li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul className="list-unstyled">
                <li><a href="#" className="text-secondary text-decoration-none">Termos</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Privacidade</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Contactos</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between gap-3 mt-4 pt-4 border-top border-secondary">
            <span className="text-secondary">© 2026 Flying Burguer. Todos os direitos reservados.</span>
            <span className="text-secondary">Feito com 🍞 e muita paciência (a nossa, não a dos clientes).</span>
          </div>
        </div>
      </footer>
    </>
  )
}
