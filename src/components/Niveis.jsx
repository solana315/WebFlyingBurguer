
import n1 from '../assets/n1.png'
import n2 from '../assets/n2.png'
import Wow from '../assets/Wow.png'

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
    icon: <img src={Wow} alt="Nivel1 icon" className="feature-icon-img" />,
    level: 'NÍVEL 3',
    title: 'A Verdade Revelada',
    text: 'Velocidade máxima. Paciência mínima. E quando chegas ao fim... descobre-se o ingrediente secreto dos hambúrgueres. Será que as aves vão gostar de saber o que andaram a comer?',
    progress: 3,
    tierClass: 'level-3'
  }
]

export default function Niveis() {
  return (
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
  )
} 
