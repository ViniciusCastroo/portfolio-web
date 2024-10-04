import { useState } from 'react';

const Projetos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos os Projetos');

  const projects = [
    {
      title: 'E-WAY',
      date: 'Em andamento',
      category: 'Front-end',
      imgSrc: '/path-to-image-eway',
    },
    {
      title: 'Blean',
      date: '24 de Junho de 2024',
      category: 'Internet of Things (IoT)',
      imgSrc: '/path-to-image-blean',
    },
    {
      title: 'ESP32 Mahindra',
      date: '30 de Setembro de 2024',
      category: 'Internet of Things (IoT)',
      imgSrc: '/path-to-image-mahindra',
    },
    {
      title: 'Curso em Video Python',
      date: 'Em andamento',
      category: 'Back-end',
      imgSrc: '/path-to-image-python',
    },
    {
      title: 'Portfólio',
      date: '6 de Outubro de 2024',
      category: 'Front-end',
      imgSrc: '/path-to-image-portfolio',
    },
  ];

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'Todos os Projetos' || project.category === selectedCategory)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto py-12 px-6">
        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-8">Meus Projetos</h1>
        <p className="text-center mb-4 text-lg">Aqui estão alguns dos meus projetos mais recentes! 😊</p>
        
        {/* Barra de pesquisa e filtro */}
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Pesquisar por título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="ml-4 bg-gray-800 border-2 border-gray-700 rounded-lg px-4 py-2"
          >
            <option>Todos os Projetos</option>
            <option>Front-end</option>
            <option>Back-end</option>
            <option>Internet of Things (IoT)</option>
          </select>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projetos;
