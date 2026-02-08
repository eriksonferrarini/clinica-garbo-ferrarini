import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Garbo e Ferraini | Psicologia Clínica</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:ital,wght@0,600;1,400&display=swap" rel="stylesheet" />
      </Head>

      <header>
        <div className="brand">
          <h1>Garbo e Ferraini</h1>
          <span>Psicologia Clínica, um espaço de escuta e acolhimento</span>
        </div>
      </header>

      <div className="main-grid">
        
        {/* ÁREA ESQUERDA: PERFIS */}
        <div className="area-profissionais">
          <div className="frase-destaque">
            "A escuta é o primeiro passo para o encontro consigo mesmo."
          </div>

          <div className="perfis-container">
           {/* Card 1 */}
<div className="perfil-card">
  <div className="foto-redonda foto-garbo"></div>
  <h3>Nome Real Dele(a)</h3>  {/* <--- Mude aqui */}
  <p>CRP 08/XXXX</p>          {/* <--- Aproveite e ponha o CRP certo */}
</div>

{/* Card 2 */}
<div className="perfil-card">
  <div className="foto-redonda foto-ferraini"></div>
  <h3>Erikson Ferraini</h3>   {/* <--- Mude aqui */}
  <p>CRP 08/XXXX</p>
</div>
          </div>
        </div>

        {/* ÁREA DIREITA SUPERIOR: TEXTOS */}
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

        {/* ÁREA DIREITA INFERIOR: MAPA E WHATSAPP */}
        <div className="area-contato">
          <div className="info-local">
            <div>
              <h3 style={{ color: '#2F4F4F', marginBottom: '10px' }}>Atendimento</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '5px' }}>✅ Presencial e Online</p>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>📍 Curitiba, PR</p>
            </div>
            <a href="https://wa.me/5541999999999" target="_blank" rel="noreferrer" className="btn-whatsapp">
              Agendar via WhatsApp
            </a>
          </div>
          <div className="mapa-fake"></div>
        </div>

      </div>

      {/* ESTILOS CSS (Global Style) */}
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
        }

        .foto-redonda {
          width: 100px;
          height: 100px;
          background-color: #ddd;
          border-radius: 50%;
          margin: 0 auto 15px auto;
          background-size: cover;
          background-position: center;
          border: 3px solid #f4f7f6;
        }
        
        /* Placeholders de imagem */
.foto-garbo { background-image: url('/foto-garbo.jpg'); } 
.foto-ferraini { background-image: url('/foto-ferraini.jpg'); }

        .perfil-card h3 { font-size: 1.1rem; color: #333; margin-bottom: 5px; }
        .perfil-card p { font-size: 0.85rem; color: #777; }

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
          font-size: 1rem;
          line-height: 1.6;
          color: #555;
          padding-left: 18px;
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
        }

        @media (max-width: 768px) {
            body { height: auto; overflow-y: auto; }
            .main-grid { display: flex; flex-direction: column; padding: 20px; }
            .area-contato { flex-direction: column; height: 400px; }
        }
      `}</style>
    </div>
  );
}
