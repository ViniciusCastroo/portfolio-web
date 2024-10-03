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
              color: {
                value: "#000D21",
              },
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 20,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "bubble",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  size: 10,
                },
              },
            },
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

        {/* Footer fixado no final da página */}
        <Footer />
      </div>
    </>
  );
}

export default App;
