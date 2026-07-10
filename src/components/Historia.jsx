import burger from '../assets/burger.png'
import Angry from '../assets/Angry.png'
import Vector from '../assets/Vector.png'
import SearchAlt from '../assets/Search_alt.png'

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

export default function Historia() {
  return (
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
  )
}