import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Garbo e Ferrarini | Psicologia Clínica</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:ital,wght@0,600;1,400&display=swap" rel="stylesheet" />
      </Head>

      <header>
        <div className="brand">
          <h1>Garbo e Ferrarini</h1>
          <span>Psicologia Clínica, um espaço de escuta e acolhimento</span>
        </div>
      </header>

      <div className="main-grid">
        
        {/* --- ÁREA ESQUERDA: PERFIS --- */}
        <div className="area-profissionais">
          <div className="frase-destaque">
            "A escuta é o primeiro passo para o encontro consigo mesmo."
          </div>

          <div className="perfis-container">
            {/* Card 1 - Igor Garbo */}
            <div className="perfil-card">
              <div className="foto-redonda foto-garbo"></div>
              <h3>Igor Garbo</h3>
              <p className="crp">Psicólogo | CRP 08/XXXX</p>
              <p className="descricao">
                Atendimento com abordagem psicanalítica para crianças, adolescentes e adultos.
              </p>
            </div>

            {/* Card 2 - Erikson Ferrarini */}
            <div className="perfil-card">
              <div className="foto-redonda foto-ferrarini"></div>
              <h3>Erikson Ferrarini</h3>
              <p className="crp">Psicólogo | CRP 08/XXXX</p>
              <p className="descricao">
                Atendimento com abordagem humanista existencial para crianças e adultos.
              </p>
            </div>
          </div>
        </div>

        {/* --- ÁREA DIREITA SUPERIOR: TEXTOS --- */}
        <div className="area-textos">
          <div className="bloco-texto">
            <h2>O que é Psicoterapia?</h2>
            <p>É um espaço seguro de fala e escuta, onde trabalhamos juntos para compreender suas emoções e construir novos caminhos.</p>
          </div>

          <div className="bloco-texto">
            <h2>Para quem é indicado?</h2>
            <p>Para todos que desejam autoconhecimento, ou que buscam auxílio para lidar com ansiedade, conflitos, luto e mudanças de vida.</p>
          </div>
        </div>

        {/* --- ÁREA DIREITA INFERIOR: MAPA E WHATSAPP --- */}
        <div className="area-contato">
          <div className="info-local">
            <div>
              <h3 style={{ color: '#2F4F4F', marginBottom: '10px' }}>Atendimento</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '5px' }}>✅ Presencial e Online</p>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>📍 Rua 24 de Maio, 135 - Centro<br/>Curitiba/PR</p>
            </div>
            
            <a href="https://wa.me/5544999126957" target="_blank" rel="noreferrer" className="btn-whatsapp">
              Agendar via WhatsApp
            </a>
          
          </div>
          
          <a 
            href="https://www.google.com/maps/search/?api=1&query=FAE+Centro+Universitário+Curitiba" 
            target="_blank" 
            rel="noreferrer" 
            className="mapa-fake"
          >
            <span className="mapa-label">Ver no Mapa</span>
          </a>
        </div>
