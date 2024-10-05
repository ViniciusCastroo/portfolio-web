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
      date: '24 de Junho de 2024',
      category: 'Internet of Things (IoT)',
      description: 'Um projeto inovador no mundo de IoT.',
      imgSrc: '/assets/HomeGS.jpeg',
      technologies: ['Node.js', 'MongoDB', 'Express', 'IoT Devices'],
      images: [
        '/assets/HomeGS.jpeg',
        '/assets/DesafiosGS.jpeg',
        '/assets/ObjGS.jpeg',
      ],
    },
    // outros projetos...
  ];

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Projeto não encontrado!</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-5xl font-bold text-white-500 mb-6">{project.title}</h1>

        <section className="mb-8">
          <h3 className="text-3xl font-semibold text-white-500 mb-2">Tecnologias Utilizadas</h3>
          <div className="flex gap-4 flex-wrap">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-800 px-3 py-2 rounded-lg text-gray-300 shadow-md">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-3xl font-semibold text-white-500 mb-2">Descrição</h3>
          <p className="text-lg leading-relaxed">{project.description}</p>
        </section>

        {/* Galeria de Imagens */}
        <section className="mb-8">
          <h3 className="text-3xl font-semibold text-white-500 mb-4">Galeria de Imagens</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
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
