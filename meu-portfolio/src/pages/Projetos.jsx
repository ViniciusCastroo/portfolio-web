import { Link } from 'react-router-dom';
import { useState } from 'react';

const Projetos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const projects = [
    { id: 1, title: 'Turbo', date: 'Em andamento', category: 'Front-end', imgSrc: '/assets/HomeSprint.jpeg' },
    { id: 2, title: 'OceanSur', date: '24 de Junho de 2024', category: 'Front-end', imgSrc: '/assets/HomeGS.jpeg' },
    { id: 3, title: 'Vinharia Agnelo', date: 'Abril de 2024', category: 'Front-end', imgSrc: '/assets/HomeAgnelo.jpeg' },
    { id: 4, title: 'Grafico Dos Oceanos', date: '22 de Junho de 2024', category: 'Internet of Things (IoT)', imgSrc: '/assets/DashGS.jpeg' },
    { id: 5, title: 'Analise Da Temperatura do Motor', date: '24 de Junho de 2024', category: 'Internet of Things (IoT)', imgSrc: '/assets/SprintEdge.jpeg' },
    { id: 6, title: '', date: '', category: '', imgSrc: '/assets/Load.jpg' },
  ];

  // Filtrar os projetos com base na pesquisa e na categoria selecionada
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || project.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Meus Projetos</h1>

        {/* Barra de pesquisa e filtro */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <input
            type="text"
            placeholder="Buscar projetos..."
            className="w-full sm:w-1/2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="w-full sm:w-1/4 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="All">Todas as Categorias</option>
            <option value="Front-end">Front-end</option>
            <option value="Internet of Things (IoT)">Internet of Things (IoT)</option>
            {/* Adicione outras categorias conforme necessário */}
          </select>
        </div>

        {/* Lista de projetos filtrados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
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

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-400 mt-8">Nenhum projeto encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Projetos;
