import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './index.css';

function App() {
  // Inicializa as partículas com tsparticles
  const particlesInit = async (main) => {
    // Carrega o pacote completo do tsparticles
    await loadFull(main);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#000D21' }}>
      {/* Partículas com configuração */}
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
              value: 50, // Número de partículas
              density: {
                enable: true,
                value_area: 800, // Densidade na área
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
              random: false, // Opacidade fixa
            },
            size: {
              value: 5, // Tamanho das partículas
              random: true, // Tamanho aleatório
            },
            line_linked: {
              enable: true, // Linhas conectando partículas
              distance: 150, // Distância entre as partículas para conexão
              color: "#ffffff", // Cor das linhas
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true, // Habilita o movimento
              speed: 6, // Velocidade das partículas
              direction: "none", // Direção do movimento
              out_mode: "out", // Saída do contêiner
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab", // Interação ao passar o mouse
              },
              onclick: {
                enable: true,
                mode: "push", // Adiciona partículas ao clicar
              },
              resize: true, // Redimensiona partículas ao redimensionar a tela
            },
            modes: {
              grab: {
                distance: 140, // Distância para o modo de 'grab'
                line_linked: {
                  opacity: 1,
                },
              },
              push: {
                particles_nb: 4, // Número de partículas adicionadas ao clicar
              },
            },
          },
          retina_detect: true, // Detecta telas de alta densidade de pixels
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

      {/* Conteúdo da página */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <NavBar />
        <div style={{ paddingBottom: '4rem' }}>
          <Outlet />
        </div>
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default App;
