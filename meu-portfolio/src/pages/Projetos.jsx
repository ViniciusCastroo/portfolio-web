import { Link } from 'react-router-dom';

const Projetos = () => {
  const projects = [
    { id: 1, title: 'Turbo', date: 'Em andamento', category: 'Front-end', imgSrc: '/assets/HomeSprint.jpeg' },
    { id: 2, title: 'OceanSur', date: '24 de Junho de 2024', category: 'Internet of Things (IoT)', imgSrc: '/assets/HomeGS.jpeg' },
    // Outros projetos...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Meus Projetos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link to={`/projetos/${project.id}`} key={project.id}>
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-400">{project.date}</p>
                  <p className="text-gray-500">{project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projetos;
