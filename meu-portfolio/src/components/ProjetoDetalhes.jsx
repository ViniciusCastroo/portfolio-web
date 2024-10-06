import { useParams } from 'react-router-dom';

const ProjetoDetalhes = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      title: 'Turbo',
      date: 'Em andamento',
      category: 'Front-end',
      imgSrc: '/assets/HomeSprint.jpeg',
      description: `Entre na experiência eletrizante da Fórmula E com nossa plataforma gamificada! Aqui, você se conecta ao universo das corridas elétricas de uma forma inédita.

      Destaques:
      - Double Points: Dobre seus pontos e acelere rumo aos prêmios.
      - Transmissão Ao Vivo: Assista a todas as corridas em tempo real, direto da nossa plataforma.
      - Pontos por Logar: Ganhe pontos diariamente apenas por acessar sua conta.
      - Quiz Interativo: Mostre seus conhecimentos sobre Fórmula E e ganhe ainda mais pontos.
      - Recompensas Exclusivas: Troque seus pontos por prêmios incríveis, desde itens colecionáveis a experiências VIP.

      Prepare-se para correr, ganhar e viver a Fórmula E como nunca antes!`,
      technologies: ['HTML', 'CSS', 'React JS', 'Tailwind CSS', 'JavaScript'],
      images: [
        '/assets/GeralSprint.jpeg',
        '/assets/LojaSprint.jpeg',
        '/assets/DoubleSprint.jpeg',
      ],
    },
    {
      id: 2,
      title: 'OceanSur',
      date: '14 de Junho de 2024',
      category: 'Front-end',
      description: 'O site da Océan Sûr visa informar como estão as situações dos oceanos ao redor do mundo. Fazendo com que pessoas que não tenham conhecimento na área ou até mesmo pessoas que possuam conhecimento na área consigam entender o que estamos passando para o site com isso fizemos um site que conta com 6 seções e em cada seção iremos abordar cada passo do nosso processo.',
      imgSrc: '/assets/HomeGS.jpeg',
      technologies: ['JavaScript','CSS', 'HTML', 'C++', 'IoT Devices'],
      images: [
        '/assets/HomeGS.jpeg',  
        '/assets/DesafioGS.jpeg',
        '/assets/ObjGS.jpeg',
      ],
    },
    {
      id: 3,
      title: 'Vinharia Agnelo',
      date: 'Abril de 2024',
      category: 'Front-end',
      description: 'O site da Vinharia Agnelo é uma plataforma online projetada para fornecer informações sobre os produtos. Nosso objetivo é criar uma experiência envolvente para os visitantes, transmitindo a paixão e a qualidade dos nossos vinhos.',
      imgSrc: '/assets/HomeGS.jpeg',
      technologies: ['JavaScript','CSS', 'HTML'],
      images: [
        '/assets/HomeAgnelo.jpeg',  
        '/assets/VinhosAgnelo.jpeg',
      ],
    },
    {
      id: 4,
      title: 'Grafico Dos Oceanos',
      category: 'Front-end',
      description: 'Océan Sûr é uma plataforma desenvolvida em Python utilizando o framework Dash. Esta plataforma tem como objetivo permitir a visualização e análise das condições dos principais oceanos do mundo: Pacífico, Atlântico, Índico e Ártico. O projeto gera dados simulados de pH, temperatura e turbidez dos oceanos, atualizando-os periodicamente para fornecer uma experiência próxima da realidade.',
      imgSrc: '/assets/HomeGS.jpeg',
      technologies: ['Python'],
      images: [
        '/assets/DashGS.jpeg',  
        '/assets/Dash2GS.jpeg',
      ],
    },
    // outros projetos...
    {
      id: 0,
      title: '',
      category: 'Front-end',
      description: 'A análise da temperatura do motor é um projeto que visa monitorar parâmetros críticos de temperatura utilizando a tecnologia Arduino. Ele fornece dados em tempo real, essenciais para preservar o motor, evitando sobreaquecimentos. O sistema utiliza um Arduino Uno, juntamente com um sensor DHT22 para medir a temperatura, LEDs de três cores (vermelho, verde e amarelo) para indicar diferentes níveis de alerta, um buzzer para alarmes sonoros em caso de temperatura crítica, e um display LCD I2C para exibir as leituras. Além disso, resistores e jumpers são utilizados para completar a montagem do circuito.',
      imgSrc: '/assets/HomeGS.jpeg',
      technologies: ['IoT Devices'],
      images: [
        '/assets/SprintEdge.jpeg',  
      ],
    },
  ];

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Projeto não encontrado!</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-5xl font-bold text-white mb-6">{project.title}</h1>

        <section className="mb-8">
          <h3 className="text-3xl font-semibold mb-2">Tecnologias Utilizadas</h3>
          <div className="flex gap-4 flex-wrap">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-black px-3 py-2 rounded-lg text-gray-300 shadow-md">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-3xl font-semibold mb-2">Descrição</h3>
          <p className="text-lg leading-relaxed">{project.description}</p>
        </section>

        {/* Galeria de Imagens */}
        <section className="mb-8">
          <h3 className="text-3xl font-semibold mb-4">Galeria de Imagens</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="bg-black rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`Imagem ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProjetoDetalhes;
