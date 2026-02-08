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
            
            {/* === Card 1: Igor Garbo === */}
            <div className="perfil-card">
              <div className="foto-redonda foto-garbo"></div>
              <h3>Igor Garbo</h3>
              <p className="crp">Psicólogo | CRP 08/XXXX</p>
              
              {/* Ícones Sociais - Igor */}
              <div className="social-links">
                {/* WhatsApp */}
                <a href="https://wa.me/5541999999999" target="_blank" rel="noreferrer" title="WhatsApp">
                  <svg className="icon" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c.93.513 1.733.709 2.806.709 3.183 0 5.768-2.586 5.769-5.766.001-3.186-2.585-5.771-5.769-5.771zm0 0m0 10.43c-.866 0-1.615-.246-2.493-.72l-1.636.43.435-1.594c-.588-.891-.904-1.649-.903-2.75.001-2.571 2.092-4.661 4.665-4.661 2.569.001 4.66 2.089 4.66 4.66 0 2.572-2.09 4.662-4.66 4.662zm0 0M17.409 24h-10.818C2.949 24 0 21.051 0 17.409V6.591C0 2.949 2.949 0 6.591 0h10.818C21.051 0 24 2.949 24 6.591v10.818C24 21.051 21.051 24 17.409 24zm0-21.818H6.591c-2.313 0-4.182 1.869-4.182 4.182v10.818c0 2.313 1.869 4.182 4.182 4.182h10.818c2.313 0 4.182-1.869 4.182-4.182V6.591c0-2.313-1.869-4.182-4.182-4.182zm0 0"/></svg>
                </a>
                {/* Email */}
                <a href="mailto:emaildoigor@exemplo.com" title="E-mail">
                  <svg className="icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com/seuinsta" target="_blank" rel="noreferrer" title="Instagram">
                  <svg className="icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>

              <p className="descricao">
                Atendimento com abordagem psicanalítica para crianças, adolescentes e adultos.
              </p>
            </div>

            {/* === Card 2: Erikson Ferrarini === */}
            <div className="perfil-card">
              <div className="foto-redonda foto-ferrarini"></div>
              <h3>Erikson Ferrarini</h3>
              <p className="crp">Psicólogo | CRP 08/XXXX</p>
              
              {/* Ícones Sociais - Erikson */}
              <div className="social-links">
                {/* WhatsApp */}
                <a href="https://wa.me/5544999126957" target="_blank" rel="noreferrer" title="WhatsApp">
                  <svg className="icon" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c.93.513 1.733.709 2.806.709 3.183 0 5.768-2.586 5.769-5.766.001-3.186-2.585-5.771-5.769-5.771zm0 0m0 10.43c-.866 0-1.615-.246-2.493-.72l-1.636.43.435-1.594c-.588-.891-.904-1.649-.903-2.75.001-2.571 2.092-4.661 4.665-4.661 2.569.001 4.66 2.089 4.66 4.66 0 2.572-2.09 4.662-4.66 4.662zm0 0M17.409 24h-10.818C2.949 24 0 21.051 0 17.409V6.591C0 2.949 2.949 0 6.591 0h10.818C21.051 0 24 2.949 24 6.591v10.818C24 21.051 21.051 24 17.409 24zm0-21.818H6.591c-2.313 0-4.182 1.869-4.182 4.182v10.818c0 2.313 1.869 4.182 4.182 4.182h10.818c2.313 0 4.182-1.869 4.182-4.182V6.591c0-2.313-1.869-4.182-4.182-4.182zm0 0"/></svg>
                </a>
                {/* Email */}
                <a href="mailto:emaildoerikson@exemplo.com" title="E-mail">
                  <svg className="icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com/seuinsta" target="_blank" rel="noreferrer" title="Instagram">
                  <svg className="icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>

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
            <p>
              Compreendemos a psicoterapia para além do tratamento de sintomas ou de diagnósticos. Para nós ela é, antes de tudo, um encontro humano transformador. Oferecemos um espaço de escuta empática, autêntica e livre de julgamentos, criando as condições seguras para que você possa entrar em contato consigo mesmo. É através desse relacionamento genuíno e acolhedor que o desenvolvimento pessoal acontece, permitindo que você assuma o protagonismo da sua própria mudança e encontre sentidos para as suas vivências.
            </p>
          </div>

          <div className="bloco-texto">
            <h2>Para quem é indicado?</h2>
            <p>
              A psicoterapia é indicada para quem busca não apenas o alívio de sofrimentos, mas a oportunidade de se encontrar consigo mesmo e desenvolver sua autonomia. É um espaço para quem deseja ressignificar suas experiências e assumir um papel ativo e consciente na própria vida.
            </p>
          </div>
        </div>

        {/* --- ÁREA DIREITA INFERIOR: MAPA E WHATSAPP GERAL --- */}
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

      </div>

      {/* --- ESTILOS CSS --- */}
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
          margin-top: 4px;
        }

        .main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          height: 100%;
          padding: 40px 50px;
          gap: 40px;
        }

        .area-profissionais {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-bottom: 20px;
        }

        .frase-destaque {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: #2F4F4F;
          margin-bottom: 40px;
          line-height: 1.3;
          font-style: italic;
        }

        .perfis-container { display: flex; gap: 30px; }

        .perfil-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          text-align: center;
          flex: 1;
          border-top: 4px solid #8FBC8F;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .foto-redonda {
          width: 100px;
          height: 100px;
          background-color: #333;
          border-radius: 50%;
          margin: 0 auto 15px auto;
          background-size: cover;
          background-position: center;
          border: 3px solid #f4f7f6;
        }
        
        .foto-garbo { background-image: url('/foto-garbo.jpg'); }
        .foto-ferrarini { background-image: url('/foto-ferrarini.jpeg'); }

        .perfil-card h3 { font-size: 1.1rem; color: #333; margin-bottom: 5px; }
        .crp { font-size: 0.8rem; color: #8FBC8F; font-weight: bold; text-transform: uppercase; margin-bottom: 10px; }
        .descricao { font-size: 0.9rem; color: #555; line-height: 1.4; font-style: italic; }

        /* --- REDES SOCIAIS (NOVO) --- */
        .social-links {
          display: flex;
          gap: 15px;
          margin-bottom: 15px;
          justify-content: center;
        }
        
        .icon {
          width: 20px;
          height: 20px;
          fill: #2F4F4F; /* Cor dos ícones */
          transition: transform 0.2s, fill 0.2s;
        }
        
        .icon:hover {
          transform: scale(1.15);
          fill: #25D366; /* Verde ao passar o mouse */
        }

        /* --- FIM REDES SOCIAIS --- */

        .area-textos {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 30px;
        }

        .bloco-texto h2 {
          font-family: 'Playfair Display', serif;
          color: #2F4F4F;
          font-size: 1.5rem;
          margin-bottom: 10px;
          border-left: 3px solid #8FBC8F;
          padding-left: 15px;
        }
        
        .bloco-texto p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #555;
          padding-left: 18px;
          text-align: justify;
        }

        .area-contato {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
          background: white;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          display: flex;
          gap: 20px;
        }

        .info-local { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
        
        .btn-whatsapp {
          background-color: #25D366;
          color: white;
          padding: 15px;
          text-align: center;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          display: block;
          margin-top: 10px;
          transition: background 0.3s;
        }
        .btn-whatsapp:hover { background-color: #128C7E; }

        .mapa-fake {
          flex: 1.2;
          background: #eee url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Map_marker_icon_%E2%80%93_Nicolas_Mollet_%E2%80%93_Home_%E2%80%93_Maps_Media_%E2%80%93_Default.png') no-repeat center;
          background-size: 60px;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 10px;
          text-decoration: none;
          transition: border-color 0.3s;
        }
        .mapa-fake:hover { border-color: #25D366; }
        
        .mapa-label {
          background: white;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: bold;
          color: #333;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
            body { height: auto; overflow-y: auto; }
            .main-grid { display: flex; flex-direction: column; padding: 20px; }
            .area-contato { flex-direction: column; height: 400px; }
            .perfis-container { flex-direction: row; }
        }
      `}</style>
    </div>
  );
}
