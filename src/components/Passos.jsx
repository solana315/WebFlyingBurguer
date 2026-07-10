import montagem from '../assets/montagem.jpeg'
import incio from '../assets/incio.jpeg'
import menu from '../assets/menu.jpeg'


const steps = [
  {
    title: 'Recebe o Pedido',
    text: 'Olha para o painel de PEDIDOS no canto superior direito. A ave cliente mostra o que quer — pão, hambúrguer, alface, tomate e muito mais.',
    img: menu
  },
  {
    title: 'Prepara na Cozinha',
    text: 'Usa os equipamentos da cozinha para grelhar a carne, montar o hambúrguer na ordem certa e preparar os ingredientes a tempo. Cada segundo conta!',
    img: montagem
  },
  {
    title: 'Entrega à Ave',
    text: 'Serve o hambúrguer ao cliente antes que a paciência dele acabe! No Nível 3 as aves ficam extremamente impacientes... e a verdade vem à tona.',
    img: incio
  }
]




export default function Passos() {
  return (
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
              </div>
              <div className="text-secondary">Mover o personagem · Olhar à volta · Interagir com objetos</div>
            </div>
          </div>
        </div>
      </section>
  )
}