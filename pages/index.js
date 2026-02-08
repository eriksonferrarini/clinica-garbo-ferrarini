import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Garbo e Ferrarini | Psicologia Clínica</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,600;1,400&display=swap" rel="stylesheet" />
      </Head>

      <header>
        <div className="brand">
          <h1>Garbo e Ferrarini</h1>
          <span>Psicologia Clínica, um espaço de escuta e acolhimento</span>
        </div>
      </header>

      <div className="main-grid">
        
        {/* --- COLUNA ESQUERDA: PERFIS --- */}
        <div className="coluna-esquerda">
          <div className="frase-destaque">
            "A escuta é o primeiro passo para o encontro consigo mesmo."
          </div>

          <div className="perfis-container">
            
            {/* === Card 1: Igor Garbo === */}
            <div className="perfil-card">
              <div className="foto-redonda foto-garbo"></div>
              <h3>Igor Garbo</h3>
              <p className="crp">PSICÓLOGO | CRP 08/XXXX</p>
              
              <p className="descricao">
                Atendimento com abordagem psicanalítica para crianças, adolescentes e adultos.
              </p>

              {/* Ícones Sociais */}
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">
                  <svg className="icon" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">
                  <svg className="icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://wa.me/5541999999999" target="_blank" rel="noreferrer" title="WhatsApp">
                  <svg className="icon" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </a>
                <a href="mailto:igor@exemplo.com" title="E-mail">
                  <svg className="icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM20 8l-8 5-8-5v10h16V8zm-8 3L4 6h16l-8 5z"/></svg>
                </a>
              </div>
            </div>

            {/* === Card 2: Erikson Ferrarini === */}
            <div className="perfil-card">
              <div className="foto-redonda foto-ferrarini"></div>
              <h3>Erikson Ferrarini</h3>
              <p className="crp">PSICÓLOGO | CRP 08/XXXX</p>
              
              <p className="descricao">
                Atendimento com abordagem humanista existencial para crianças e adultos.
              </p>

              {/* Ícones Sociais */}
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <svg className="icon" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <svg className="icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://wa.me/5544999126957" target="_blank" rel="noreferrer">
                  <svg className="icon" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </a>
                <a href="mailto:erikson@exemplo.com">
                  <svg className="icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM20 8l-8 5-8-5v10h16V8zm-8 3L4 6h16l-8 5z"/></svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* --- COLUNA DIREITA: TEXTOS E MAPA --- */}
        <div className="coluna-direita">
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

          {/* ÁREA DIREITA INFERIOR: MAPA */}
          <div className="area-contato">
            <div className="info-local">
              <div>
                <h3 style={{ color: '#2F4F4F', marginBottom: '10px' }}>Atendimento</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '5px' }}>✅ Presencial e Online</p>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>📍 Rua 24 de Maio, 135 - Centro<br/>Curitiba/PR</p>
              </div>
            </div>
            
            <a 
              href="https://www.google.com/maps/search/?api=1&query=FAE+Centro+Universitário+Curitiba" 
              target="_blank" 
              rel="noreferrer" 
              className="mapa-fake"
              title="Abrir no Google Maps"
            >
              <span className="mapa-label">Ver no Mapa</span>
            </a>
          </div>
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
          margin-top: 4px;
        }

        .main-grid {
          display: grid;
          /* Duas colunas iguais */
          grid-template-columns: 1fr 1fr;
          height: 100%;
          padding: 40px 50px;
          gap: 40px;
          overflow-y: auto; /* Permite rolar se o conteúdo crescer muito */
        }

        /* --- COLUNA ESQUERDA --- */
        .coluna-esquerda {
          display: flex;
          flex-direction: column;
          /* Justifica o conteúdo para ficar visualmente agradável */
          justify-content: flex-start;
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

        .perfis-container { 
          display: flex; 
          gap: 30px; 
          /* Flex wrap se quiser que quebre, mas aqui queremos lado a lado */
        }

        .perfil-card {
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          text-align: center;
          flex: 1;
          border-top: 4px solid #3b82f6; /* TOPO AZUL */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }

        .foto-redonda {
          width: 100px;
          height: 100px;
          background-color: #333;
          border-radius: 50%;
          margin: 0 auto 10px auto;
          background-size: cover;
          background-position: center;
          border: 3px solid #f4f7f6;
        }
        
        .foto-garbo { background-image: url('/foto-garbo.jpg'); }
        .foto-ferrarini { background-image: url('/foto-ferrarini.jpeg'); }

        .perfil-card h3 { 
            font-size: 1.4rem; 
            color: #0f172a; 
            margin-bottom: 5px; 
            font-weight: 700;
        }
        
        .crp { 
            font-size: 0.7rem; 
            color: #64748b; 
            font-weight: 600; 
            text-transform: uppercase; 
            letter-spacing: 2px;
            margin-bottom: 15px; 
        }

        .descricao { 
            font-size: 0.9rem; 
            color: #555; 
            line-height: 1.4; 
            margin-bottom: 20px;
        }

        /* REDES SOCIAIS (EMBAIXO) */
        .social-links {
          display: flex;
          gap: 15px;
          margin-top: auto; 
          padding-top: 15px;
          justify-content: center;
          border-top: 1px solid #f0f0f0; 
          width: 100%;
        }
        
        .icon {
          width: 24px;
          height: 24px;
          fill: #475569;
          transition: transform 0.2s, fill 0.2s;
        }
        .icon:hover { transform: scale(1.15); fill: #3b82f6; }


        /* --- COLUNA DIREITA (FLEX PARA ALINHAMENTO) --- */
        .coluna-direita {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .area-textos {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .bloco-texto h2 {
          font-family: 'Playfair Display', serif;
          color: #2F4F4F;
          font-size: 1.5rem;
          margin-bottom: 10px;
          border-left: 3px solid #3b82f6;
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
          background: white;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          display: flex;
          gap: 20px;
          /* O SEGREDO DO ALINHAMENTO: */
          flex: 1; /* Ocupa todo o espaço vertical restante */
          min-height: 200px;
        }

        .info-local { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
        
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
        .mapa-fake:hover { border-color: #3b82f6; }
        
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
            .area-contato { flex-direction: column; height: 400px; flex: none; }
            .perfis-container { flex-direction: row; }
            
            @media (max-width: 500px) {
                .perfis-container { flex-direction: column; }
            }
        }
      `}</style>
    </div>
  );
}
