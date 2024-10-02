function Home() {
    return (
      <div className="bg-gray-900 min-h-screen">
        {/* Hero Section */}
        <section className="flex items-center justify-center min-h-screen text-center">
          <div className="text-white px-4">
            {/* Frase de boas-vindas com emoji */}
            <p className="text-lg md:text-xl text-gray-400 mb-4">
              👋 Olá, visitante!
            </p>
            <h1 className="text-5xl md:text-7xl font-bold">
           Meu nome é <span className="text-blue-500 italic">Vinicius</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-400">
              Trabalho com pessoas de todo o mundo para criar experiências personalizadas no Webflow.
            </p>
  
            {/* Social Links */}
            <div className="flex justify-center mt-8 space-x-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin-white.svg" alt="LinkedIn" className="h-8 w-8 text-white hover:text-blue-500" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/github-white.svg" alt="GitHub" className="h-8 w-8 text-white hover:text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/instagram-white.svg" alt="Instagram" className="h-8 w-8 text-white hover:text-pink-500" />
              </a>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-dark-blue py-4">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Meu Nome. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Home;
  