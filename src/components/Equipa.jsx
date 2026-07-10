const team = [
  {
    name: 'Ana Oliveira',
    role: 'Game Design',
    description: 'Responsável pela mecânica de jogo e progressão de níveis.',
    photo: 'https://ui-avatars.com/api/?name=Ana+Oliveira&background=eda33b&color=fff&size=256'
  },
  {
    name: 'Inês Saraiva',
    role: 'Arte & UI',
    description: 'Criação visual dos personagens e interface do jogo.',
    photo: 'https://ui-avatars.com/api/?name=Ines+Saraiva&background=eda33b&color=fff&size=256'
  },
  {
    name: 'Gustavo Nunes',
    role: 'Programação',
    description: 'Desenvolvimento das mecânicas 3D e interações da cozinha.',
    photo: 'https://ui-avatars.com/api/?name=Gustavo+Nunes&background=eda33b&color=fff&size=256'
  },
  {
    name: 'Ivan Marques',
    role: 'Programação',
    description: 'Sistemas de pedidos e comportamento dos clientes.',
    photo: 'https://ui-avatars.com/api/?name=Ivan+Marques&background=eda33b&color=fff&size=256'
  },
  {
    name: 'João Lopes',
    role: 'Som & Efeitos',
    description: 'Banda sonora e efeitos sonoros do jogo.',
    photo: 'https://ui-avatars.com/api/?name=Joao+Lopes&background=eda33b&color=fff&size=256'
  },
  {
    name: 'Miguel Pereira',
    role: 'Produção',
    description: 'Coordenação da equipa e planeamento do projeto.',
    photo: 'https://ui-avatars.com/api/?name=Miguel+Pereira&background=eda33b&color=fff&size=256'
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