import { useState } from 'react'
import menu from './assets/menu.jpeg'
import flyingburguer from './assets/flyingburguer.png'
import Equipa from './components/Equipa'
import Historia from './components/Historia'
import Passos from './components/Passos'
import Niveis from './components/Niveis'
import Trailer from './components/Trailer'

function Cloud({ className, style }) {
  return <div className={`cloud ${className}`} style={style}></div>
}

export default function App() {
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
            <img src={flyingburguer} alt="Flying Burguer" style={{ height: 45 }} />
          </a>
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <nav className="nav d-none d-lg-flex align-items-center gap-3">
              <a className="nav-link px-2 text-dark" href="#inicio">Início</a>
              <a className="nav-link px-2 text-dark" href="#historia">Sobre o Jogo</a>
              <a className="nav-link px-2 text-dark" href="#passos">Como Jogar</a>
              <a className="nav-link px-2 text-dark" href="#trailer">Vídeo</a>
              <a className="nav-link px-2 text-dark" href="#equipa">Equipa</a>
            </nav>
            <a href="#historia" className="btn btn-warning btn-sm text-dark px-4">Jogar Agora</a>
          </div>
        </div>
      </header>

      <section id="inicio" className="hero position-relative overflow-hidden">
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
                <a href="https://inessaraiva.itch.io/flyingburgueer" className="btn btn-warning btn-lg px-4 text-dark">Jogar Agora</a>
                <a href="#trailer" className="btn btn-warning btn-light px-4 text-dark">Ver Trailer</a>
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

     <Historia />
     <Passos />
     <Niveis />
     <Trailer />
     <Equipa />

<section id="footer">
      <footer className="py-5">
        <div className="container-xl">
          <div className="footer-grid">
            <div>
              <div className="d-flex align-items-center gap-3 mb-3 text-white fw-bold fs-5">
                <span className="badge rounded-3 bg-warning text-dark">🍔</span>
                Flying Burguer
              </div>
              <p className="text-secondary" style={{ maxWidth: 260 }}>
                Uma rulote, quatro espécies de clientes e nenhuma paciência para perder. Feito para jogar em qualquer tempo livre.
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
              <h4>Equipa</h4>
              <ul className="list-unstyled">
                <li><a  className="text-secondary text-decoration-none">Ana Oliveira | pv27649</a></li>
                <li><a  className="text-secondary text-decoration-none">Inês Saraiva | pv25412</a></li>
                <li><a  className="text-secondary text-decoration-none">Gustavo Nunes | pv28693</a></li>
                <li><a  className="text-secondary text-decoration-none">Ivan Marques | pv27643</a></li>
                <li><a  className="text-secondary text-decoration-none">João Lopes | pv27637</a></li>
                <li><a  className="text-secondary text-decoration-none">Miguel Pereira | pv27634</a></li>
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
      </section>
    </>
  )
}
