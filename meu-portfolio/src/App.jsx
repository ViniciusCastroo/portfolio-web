import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: { value: "#000D21" },
            },
            // Outras opções de partículas...
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <NavBar />
          <div style={{ paddingBottom: '4rem' }}>
            <Outlet /> {/* Este é o ponto onde os componentes de rota serão renderizados */}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
