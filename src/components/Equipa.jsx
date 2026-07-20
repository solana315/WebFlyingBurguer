import Ana from '../assets/Ana.jpg'
import saraiva from '../assets/saraiva.jpg'
import Amarante from '../assets/Amarante.jpg'
import Gustavo from '../assets/Gustavo.jpg'
import Iban from '../assets/Iban.jpg'
import Miguel from '../assets/Miguel.jpg'

const team = [
  {
    name: 'Ana Oliveira',
    role: 'Desenvolvimento Web, Unity 3D e Modelação 3D',
    description: 'Responsável pela criação do website publicitário do Jogo, desenvolvimento das animações e movimentos 3D de alguns personagens no blender e a sua implementação no Unity 3D',
    photo: Ana
  },
  {
    name: 'Inês Saraiva',
    role: 'Unity 3D, Efeitos e Implementação',
    description: 'Criação visual do jogo funcional, tanto como os efeitos sonoros e visuais do mesmo e pela implementação no Unity 3D.',
    photo: saraiva
  },
  {
    name: 'Gustavo Nunes',
    role: 'Modelação 3D',
    description: 'Desenvolvimento das animações e movimentos 3D de alguns personagens no blender.',
    photo: Gustavo
  },
  {
    name: 'Ivan Marques',
    role: 'Pesquisa, Cut Scenes e Implementação 3D no Unity',
    description: 'Responsável pela procura de assets usados para a criação do cenário e para o som do jogo, pela criação das cutscenes e pela implementação de elementos no Unity 3D.',
    photo: Iban
  },
  {
    name: 'João Lopes',
    role: 'Cut Scenes e Trailer',
    description: 'Responsável pela criação das cutscenes e do trailer do jogo que contam a história do jogo.',
    photo: Amarante
  },
  {
    name: 'Miguel Pereira',
    role: 'Pesquisa e modelação 3D',
    description: 'Responsável pela procura de assets e pela modelação 3D de alguns personagens no blender.',
    photo: Miguel
  }
]

export default function Equipa() {
  return (
    <section id="equipa" className="py-5 bg-light">
      <div className="container-xl">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Conhece nossa Equipa</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: '720px' }}>
            A nossa equipa é movida pela dedicação pelo que faz e pela vontade constante de evoluir.
            Trabalhámos imensos dias com dedicação, empenho e espírito de união para garantir a melhor
            experiência possível a quem nos escolhe. Acreditamos que o sucesso nasce do esforço coletivo,
            da atenção ao detalhe e da vontade de fazer sempre mais e melhor. Juntos, damos o nosso máximo
            para levar qualidade, sabor e confiança a cada cliente.
          </p>
        </div>

        <div className="row row-cols-2 row-cols-md-3 g-4">
          {team.map((member) => (
            <div className="col" key={member.name}>
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body">
                  {/* Foto */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="rounded-circle img-fluid mb-3 border border-4 border-warning"
                    style={{ width: '140px', height: '140px', objectFit: 'cover' }}
                  />

                  {/* Nome */}
                  <h5 className="fw-bold mb-1">{member.name}</h5>

                  {/* Cargo */}
                  <p className="text-warning text-uppercase small fw-bold mb-2">
                    {member.role}
                  </p>

                  {/* Texto */}
                  <p className="text-secondary small">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}