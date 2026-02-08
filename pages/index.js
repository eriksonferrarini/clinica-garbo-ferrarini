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
        
        {/* --- ÁREA ESQUERDA: PERFIS (Agora em lista vertical) --- */}
        <div className="area-profissionais">
          
          <div className="perfis-container">
            
            {/* === Card 1: Igor Garbo === */}
            <div className="perfil-card">
              <div className="info-container">
                <h3>Igor Garbo</h3>
                <p className="crp">PSICÓLOGO | CRP 08/XXXX</p>
                
                {/* Ícones Sociais */}
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer"><svg className="icon" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer"><svg className="icon" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></a>
                  <a href="https://wa.me/5541999999999" target="_blank" rel="noreferrer"><svg className="icon" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></a>
                  <a href="mailto:email@exemplo.com"><svg className="icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM20 8l-8 5-8-5v10h16V8zm-8 3L4 6h16l-8 5z"/></svg></a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer"><svg className="icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
                </div>

                <p className="descricao">
                  Atendimento com abordagem psicanalítica para crianças, adolescentes e adultos.
                </p>
                
                {/* BOTÃO NOVO (IGOR) */}
                <a href="https://wa.me/5541999999999" target="_blank" rel="noreferrer" className="btn-agendar">
                  Agende Uma Consulta
                </a>
              </div>
              
              <div className="foto-redonda foto-garbo"></div>
            </div>

            {/* === Card 2: Erikson Ferrarini === */}
            <div className="perfil-card">
              <div className="info-container">
                <h3>Erikson Ferrarini</h3>
                <p className="crp">PSICÓLOGO | CRP 08/XXXX</p>
                
                {/* Ícones Sociais */}
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer"><svg className="icon" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer"><svg className="icon" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></a>
                  <a href="https://wa.me/5544999126957" target="_blank" rel="noreferrer"><svg className="icon" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></a>
                  <a href="mailto:email@exemplo.com"><svg className="icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM20 8l-8 5-8-5v10h16V8zm-8 3L4 6h16l-8 5z"/></svg></a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer"><svg className="icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
                </div>

                <p className="descricao">
                  Atendimento com abordagem humanista existencial para crianças e adultos.
                </p>

                {/* BOTÃO NOVO (ERIKSON) */}
                <a href="https://wa.me/5544999126957" target="_blank" rel="noreferrer" className="btn-agendar">
                  Agende Uma Consulta
                </a>
              </div>

              <div className="foto-redonda foto-ferrarini"></div>
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

        {/* --- ÁREA DIREITA INFERIOR: MAPA (SEM O BOTÃO ANTIGO) --- */}
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
          background-color: #f8fafc; /* Fundo levemente azulado/branco */
          color: #333;
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        header {
          padding: 20px 50px;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(8px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e2e8f0;
        }

        .brand h1 {
          font-family: 'Playfair Display', serif;
          color: #1e293b;
          font-size: 1.6rem;
        }
        .brand span {
          display: block;
          font-size: 0.85rem;
          color: #64748b;
          letter-spacing: 0.5px;
          margin-top: 4px;
        }

        .main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          height: 100%;
          padding: 30px 50px;
          gap: 30px;
        }

        /* --- ÁREA PROFISSIONAIS (LISTA VERTICAL) --- */
        .area-profissionais {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
          display: flex;
          flex-direction: column;
          justify-content: center; /* Centraliza na altura */
        }

        /* Container vira coluna para empilhar os cards */
        .perfis-container { 
          display: flex; 
          flex-direction: column; 
          gap: 40px; 
        }

        /* === ESTILO NOVO DO CARD (HORIZONTAL) === */
        .perfil-card {
          background: transparent; /* Remove fundo branco quadrado se quiser, ou mantenha white */
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          text-align: left;
        }

        .info-container {
          flex: 1; /* Ocupa o espaço que sobrar */
        }

        .perfil-card h3 { 
          font-size: 2.2rem; /* Bem grande como na foto */
          color: #0f172a; /* Azul bem escuro */
          margin-bottom: 5px;
          font-weight: 700;
        }
        
        .crp { 
          font-size: 0.75rem; 
          color: #64748b; 
          font-weight: 600; 
          text-transform: uppercase; 
          letter-spacing: 3px; /* Espaçamento chique */
          margin-bottom: 15px; 
        }
        
        .descricao { 
          font-size: 0.95rem; 
          color: #475569; 
          line-height: 1.5; 
          margin-bottom: 20px;
          max-width: 400px; /* Segura o texto para não esticar demais */
        }

        /* FOTOS */
        .foto-redonda {
          width: 150px; /* Foto maior */
          height: 150px;
          background-color: #ddd;
          border-radius: 50%;
          flex-shrink: 0; /* Não deixa a foto esmagar */
          background-size: cover;
          background-position: center;
          border: 4px solid white;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .foto-garbo { background-image: url('/foto-garbo.jpg'); }
        .foto-ferrarini { background-image: url('/foto-ferrarini.jpeg'); }

        /* --- REDES SOCIAIS --- */
        .social-links {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .icon {
          width: 20px;
          height: 20px;
          fill: #334155;
          transition: transform 0.2s, fill 0.2s;
        }
        .icon:hover { transform: scale(1.1); fill: #2563eb; }

        /* --- NOVO BOTÃO AZUL --- */
        .btn-agendar {
          display: inline-block;
          background-color: #3b82f6; /* Azul vibrante */
          color: white;
          padding: 12px 30px;
          border-radius: 50px; /* Redondo igual a foto */
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: background 0.3s, transform 0.2s;
          box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.5);
        }
        .btn-agendar:hover {
          background-color: #2563eb;
          transform: translateY(-2px);
        }

        /* --- DIREITA --- */
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
          color: #1e293b;
          font-size: 1.5rem;
          margin-bottom: 10px;
          border-left: 3px solid #3b82f6;
          padding-left: 15px;
        }
        .bloco-texto p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #475569;
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

        @media (max-width: 900px) {
            body { height: auto; overflow-y: auto; }
            .main-grid { display: flex; flex-direction: column; padding: 20px; }
            .area-profissionais { margin-bottom: 40px; }
            .perfil-card { flex-direction: column-reverse; text-align: center; } /* Mobile: Foto em cima, texto embaixo */
            .info-container { display: flex; flex-direction: column; align-items: center; }
            .area-contato { flex-direction: column; height: 300px; }
        }
      `}</style>
    </div>
  );
}
