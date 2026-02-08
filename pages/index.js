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
            "Uma frase de abertura aqui."
          </div>

          <div className="perfis-container">
            {/* Card 1 - Garbo */}
            <div className="perfil-card">
              <div className="foto-redonda foto-garbo"></div>
              <h3>Psicólogo Garbo</h3>
              <p>CRP 08/XXXX</p>
            </div>

            {/* Card 2 - Ferrarini */}
            <div className="perfil-card">
              <div className="foto-redonda foto-ferrarini"></div>
              <h3>Psicólogo Ferrarini</h3>
              <p>CRP 08/XXXX</p>
            </div>
          </div>
        </div>

        {/* --- ÁREA DIREITA SUPERIOR: TEXTOS --- */}
        <div className="area-textos">
          <div className="bloco-texto">
            <h2>O que é Psicoterapia?</h2>
            <p>Compreendemos a psicoterapia para além do tratamento de sintomas ou de diagnósticos. Para nós ela é, antes de tudo, um encontro humano transformador. Oferecemos um espaço de escuta empática, autêntica e livre de julgamentos, criando as condições seguras para que você possa entrar em contato consigo mesmo. É através desse relacionamento genuíno e acolhedor que o desenvolvimento pessoal acontece, permitindo que você assuma o protagonismo da sua própria mudança e encontre sentidos para as suas vivências.</p>
          </div>

          <div className="bloco-texto">
            <h2>Para quem é indicado?</h2>
            <p>A psicoterapia é indicada para quem busca não apenas o alívio de sofrimentos, mas a oportunidade de se encontrar consigo mesmo e desenvolver sua autonomia. É um espaço para quem deseja ressignificar suas experiências e assumir um papel  ativo e consciente na própria vida.</p>
          </div>
        </div>

        {/* --- ÁREA DIREITA INFERIOR: MAPA E WHATSAPP --- */}
        <div className="area-contato">
          <div className="info-local">
            <div>
              <h3 style={{ color: '#2F4F4F', marginBottom: '10px' }}>Atendimento</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '5px' }}>✅ Presencial e Online</p>
              
              {/* ENDEREÇO DA FAE ATUALIZADO */}
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                📍 Rua 24 de Maio, 135 - Centro<br/>Curitiba/PR
              </p>
            </div>
            
            <a href="https://wa.me/5544999126957" target="_blank" rel="noreferrer" className="btn-whatsapp">
              Agendar via WhatsApp
            </a>
          
          </div>

          {/* MAPA CLICÁVEL - Abre o Google Maps no endereço da FAE */}
          <a 
            href="https://www.google.com/maps/search/?api=1&query=FAE+Centro+Universitario+Curitiba" 
            target="_blank" 
            rel="noreferrer" 
            className="mapa-fake"
            title="Abrir no Google Maps"
          >
            <span className="mapa-label">Ver no Mapa</span>
          </a>
        </div>

      </div>

      {/* --- ESTILOS CSS (Global Style) --- */}
      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
          font-family: 'Inter', sans-serif;
          background-color: #f4f7f6;
          color: #333;
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        header {
          padding: 20px 50px;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(8px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ddd;
        }

        .brand h1 {
          font-family: 'Playfair Display', serif;
          color: #2F4F4F;
          font-size: 1.6rem;
        }
        .brand span {
          display: block;
          font-size: 0.85rem;
          color: #666;
          letter-spacing: 0.5px;
