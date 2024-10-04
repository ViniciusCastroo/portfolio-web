function Home() {
    return (
      <div className="bg-dark-blue min-h-screen">
        <section className="flex items-center justify-center min-h-screen text-center">
          <div className="text-white px-4">
            <p className="text-lg md:text-xl text-gray-400 mb-4">👋 Olá, visitante!</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              Meu nome é <span className="text-blue-500 italic">Vinicius</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-400">
              Trabalho com pessoas de todo o mundo para criar experiências personalizadas.
            </p>
          </div>
        </section>
  
        <section className="py-12 bg-dark-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 text-white">
              <h2 className="text-3xl font-bold mb-4">✨ Um Pouco Mais Sobre Mim ✨</h2>
              <p className="text-lg text-gray-400 mb-2">Conteúdo sobre você...</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/assets/sobre-mim.png" 
                alt="Sobre Mim" 
                className="rounded-lg shadow-lg w-1/3 md:w-1/2 border border-white" 
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Home;
  