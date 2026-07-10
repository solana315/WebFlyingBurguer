import { useState } from 'react'

export default function Trailer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="trailer" className="py-5">
      <div className="container-xl">
        <div className="text-center mb-5">
          <span className="badge rounded-pill bg-warning text-dark mb-3">VÍDEO</span>
          <h2 className="fw-bold">Vê o jogo em ação...</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: '680px' }}>
            Vê o trailer oficial de Flying Burguer e descobre o caos que te espera nos céus!
          </p>
        </div>
        <div className="video-frame mx-auto">
          {isPlaying ? (
            <video className="video-el" controls autoPlay src="/trailer.mp4" poster="/trailer-poster.jpg">
              
            </video>
          ) : (
            <button className="play-btn" aria-label="Reproduzir trailer" onClick={() => setIsPlaying(true)}>
              ▶
            </button>
          )}
        </div>
      </div>
    </section>
  )
}