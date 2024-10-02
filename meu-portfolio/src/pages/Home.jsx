function Home() {
    return (
        <div className="bg-gray-900 min-h-screen">
            {/* Hero Section */}
            <section className="flex items-center justify-center min-h-screen text-center">
                <div className="text-white px-4">
                    {/* Frase de boas-vindas com emoji */}
                    <p className="text-lg md:text-xl text-gray-400 mb-4">👋 Olá, visitante!</p>
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

            {/* Seção Sobre Mim */}
            <section className="py-12 bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                    {/* Texto sobre mim */}
                    <div className="md:w-1/2 mb-8 md:mb-0 text-white">
                        <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
                        <p className="text-lg text-gray-400">
                            Sou um desenvolvedor apaixonado por tecnologia e design. Adoro criar interfaces intuitivas e funcionais,
                            e sempre busco aprender novas linguagens e frameworks para aprimorar minhas habilidades.
                        </p>
                    </div>
                    {/* Imagem */}
                    <div className="md:w-1/2 flex justify-center">
                        <img src="/assets/sobre-mim.jpg" alt="Sobre Mim" className="rounded-lg shadow-lg w-full max-w-md" />
                    </div>
                </div>

                {/* Cards de Linguagens de Programação */}
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Linguagens de Programação</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {/* Card 1 */}
                    <div className="bg-gray-700 rounded-lg p-4 mx-2"> {/* Adicionado mx-2 */}
                        <img src="/assets/icons/javascript.svg" alt="JavaScript" className="h-16 w-16 mb-2 mx-auto" />
                        <h4 className="text-lg font-semibold text-center text-white">JavaScript</h4>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-700 rounded-lg p-4 mx-2"> {/* Adicionado mx-2 */}
                        <img src="/assets/icons/python.svg" alt="Python" className="h-16 w-16 mb-2 mx-auto" />
                        <h4 className="text-lg font-semibold text-center text-white">Python</h4>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-700 rounded-lg p-4 mx-2"> {/* Adicionado mx-2 */}
                        <img src="/assets/icons/java.svg" alt="Java" className="h-16 w-16 mb-2 mx-auto" />
                        <h4 className="text-lg font-semibold text-center text-white">Java</h4>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-gray-700 rounded-lg p-4 mx-2"> {/* Adicionado mx-2 */}
                        <img src="/assets/icons/csharp.svg" alt="C#" className="h-16 w-16 mb-2 mx-auto" />
                        <h4 className="text-lg font-semibold text-center text-white">C#</h4>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-gray-700 rounded-lg p-4 mx-2"> {/* Adicionado mx-2 */}
                        <img src="/assets/icons/ruby.svg" alt="Ruby" className="h-16 w-16 mb-2 mx-auto" />
                        <h4 className="text-lg font-semibold text-center text-white">Ruby</h4>
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
