import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './index.css';

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#000D21' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          particles: {
            number: {
              value: 50, // Ajuste o número de partículas conforme necessário
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff", // Cor das partículas
            },
            shape: {
              type: "circle", // Forma das partículas
            },
            opacity: {
              value: 0.5,
              random: false,
            },
            size: {
              value: 5,
              random: true,
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff", // Cor das linhas
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              out_mode: "out",
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              push: {
                particles_nb: 4,
              },
            },
          },
          retina_detect: true,
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
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Certifique-se de que esta linha está presente
export default App;
