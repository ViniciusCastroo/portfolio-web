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

            <section className="py-12 bg-dark-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center bg-transparent">
                    <div className="md:w-1/2 mb-8 md:mb-0 text-white">
                        <h2 className="text-3xl font-bold mb-4">✨ Um Pouco Mais Sobre Mim ✨</h2>
                        <p className="text-lg text-gray-400 mb-2">
                            Desde que comecei a programar, me apaixonei pelo universo da tecnologia 🚀 e estou sempre aprendendo coisas novas, ou pelo menos tentando... 😅
                        </p>
                        <p className="text-lg text-gray-400 mb-2">
                            Atualmente, estou aprendendo um pouco mais sobre <strong>Python</strong>, <strong>React JS</strong> 💻.
                        </p>
                        <p className="text-lg text-gray-400 mb-2">
                            Um dos meus maiores interesses é o <strong>Desenvolvimento de Sistemas IoT</strong> (Internet of Things) 🌐, pois acredito que essa tecnologia pode transformar o modo como interagimos com o mundo à nossa volta 💡.
                        </p>
                        <p className="text-lg text-gray-400">
                            Além da programação, adoro ouvir <strong>rock</strong> 🎸 e jogar <strong>videogame</strong> 🎮 nas horas vagas, o que sempre me inspira a ser criativo e focado nos projetos que estou desenvolvendo. ✨
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img 
                            src="/assets/sobre-mim.png" 
                            alt="Sobre Mim" 
                            className="rounded-lg shadow-lg w-1/3 md:w-1/2 border border-white" // Adicionando borda e sombra
                        />
                    </div>
                </div>
            </section>
        </div>
    );
  }
  
  export default Home;
  