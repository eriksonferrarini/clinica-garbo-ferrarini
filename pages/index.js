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
            {/* Igor Garbo */}
            <div className="perfil-card">
              <div className="foto-redonda foto-garbo"></div>
              <h3>Igor Garbo</h3>
              <p className="crp">PSICÓLOGO | CRP 08/XXXX</p>
              <p className="descricao">Atendimento com abordagem psicanalítica para crianças, adolescentes e adultos.</p>
              <div className="social-links">
                <a href="#"><svg className="icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
                <a href="#"><svg className="icon" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></a>
              </div>
            </div>

            {/* Erikson Ferrarini */}
            <div className="perfil-card">
              <div className="foto-redonda foto-ferrarini"></div>
              <h3>Erikson Ferrarini</h3>
              <p className="crp">PSICÓLOGO | CRP 08/XXXX</p>
              <p className="descricao">Atendimento com abordagem humanista existencial para crianças e adultos.</p>
              <div className="social-links">
                <a href="#"><svg className="icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
                <a href="#"><svg className="icon" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></a>
              </div>
            </div>
          </div>
        </div>

        {/* --- COLUNA DIREITA --- */}
        <div className="coluna-direita">
          <div className="bloco-texto">
            <h2>O que é Psicoterapia?</h2>
            <p>É um espaço seguro de fala e escuta, onde trabalhamos juntos para compreender suas emoções e construir novos caminhos.</p>
          </div>

          <div className="bloco-texto">
            <h2>Para quem é indicado?</h2>
            <p>Para todos que desejam autoconhecimento, ou que buscam auxílio para lidar com ansiedade, conflitos, luto e mudanças de vida.</p>
          </div>

          <div className="container-contato-mapa">
            <div className="info-texto-contato">
              <h3>Atendimento Curitiba</h3>
              <p>📍 Rua 24 de Maio, 135 - Centro</p>
              <p>✅ Presencial e Online</p>
            </div>
            
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Rua+24+de+Maio+135+Curitiba" 
              target="_blank" 
              className="mapa-wrapper"
              rel="noreferrer"
            >
               <div className="placeholder-mapa">
                  <span className="pin">📍</span>
                  <p>Clique para ver no Google Maps</p>
               </div>
            </a>
          </div>
        </div>

      </div>

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background: #f8fafc; color: #1e293b; height: 100vh; overflow: hidden; }
        
        header { padding: 1.5rem 3rem; background: white; border-bottom: 1px solid #e2e8f0; }
        .brand h1 { font-family: 'Playfair Display', serif; color: #2F4F4F; font-size: 1.5rem; }
        .brand span { font-size: 0.8rem; color: #64748b; }

        .main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          padding: 3rem;
          height: calc(100vh - 80px);
        }

        .coluna-esquerda, .coluna-direita {
          display: flex;
          flex-direction: column;
        }

        .frase-destaque {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          line-height: 1.2;
          margin-bottom: 2rem;
          font-style: italic;
          color: #2F4F4F;
        }

        .perfis-container {
          display: flex;
          gap: 1.5rem;
          flex-grow: 1;
        }

        .perfil-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
          border-top: 5px solid #556b2f; /* VERDE MILITAR */
        }

        .foto-redonda { width: 90px; height: 90px; border-radius: 50%; background: #e2e8f0; margin-bottom: 1rem; border: 2px solid #f1f5f9; }
        .foto-garbo { background-image: url('/foto-garbo.jpg'); background-size: cover; }
        .foto-ferrarini { background-image: url('/foto-ferrarini.jpeg'); background-size: cover; }
        
        .perfil-card h3 { margin-bottom: 0.2rem; color: #2F4F4F; }
        .crp { font-size: 0.65rem; color: #64748b; letter-spacing: 1px; margin-bottom: 1rem; }
        .descricao { font-size: 0.85rem; text-align: center; color: #475569; }

        .social-links { margin-top: auto; display: flex; gap: 1rem; padding-top: 1rem; }
        .icon { width: 22px; height: 22px; fill: #556b2f; transition: transform 0.2s; }
        .icon:hover { transform: scale(1.1); }

        /* DIREITA */
        .bloco-texto { margin-bottom: 1.5rem; }
        .bloco-texto h2 { font-family: 'Playfair Display', serif; font-size: 1.3rem; margin-bottom: 0.5rem; color: #2F4F4F; border-left: 3px solid #556b2f; padding-left: 10px; }
        .bloco-texto p { font-size: 0.9rem; line-height: 1.5; color: #64748b; padding-left: 13px; }

        .container-contato-mapa {
          background: white;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
          flex-grow: 1; 
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .info-texto-contato h3 { font-size: 1rem; color: #2F4F4F; }
        .info-texto-contato p { font-size: 0.85rem; color: #64748b; }

        .mapa-wrapper {
          flex-grow: 1;
          background: #f1f5f9;
          border-radius: 0.5rem;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px dashed #cbd5e1;
          transition: background 0.3s;
        }
        .mapa-wrapper:hover { background: #e2e8f0; }

        .placeholder-mapa { text-align: center; color: #94a3b8; }
        .pin { font-size: 2rem; display: block; margin-bottom: 0.5rem; }
        .placeholder-mapa p { font-size: 0.75rem; font-weight: 600; }

        @media (max-width: 1024px) {
          body { overflow-y: auto; height: auto; }
          .main-grid { grid-template-columns: 1fr; height: auto; padding: 1.5rem; gap: 2rem; }
          .container-contato-mapa { min-height: 300px; }
        }
      `}</style>
    </div>
  );
}
