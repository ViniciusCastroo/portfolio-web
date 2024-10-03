

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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                  
                    <div className="md:w-1/2 mb-8 md:mb-0 text-white">
                        <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
                        <p className="text-lg text-gray-400">
                            Sou um desenvolvedor apaixonado por tecnologia e design. Adoro criar interfaces intuitivas e funcionais,
                            e sempre busco aprender novas linguagens e frameworks para aprimorar minhas habilidades.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img 
                            src="/assets/sobre-mim.png" 
                            alt="Sobre Mim" 
                            className="rounded-lg shadow-lg w-1/3 md:w-1/2"
                        />
                    </div>
                </div>

               
                <div className="mt-12"></div>

                <h3 className="text-2xl font-bold text-white mb-4 text-center">Linguagens de Programação</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {/* Card 1 */}
                    <div className="bg-gray-700 rounded-lg p-4 mx-2">
                        <img src="/assets/js.svg" alt="JavaScript" className="h-16 w-16 mb-2 mx-auto" />
                        <h4 className="text-lg font-semibold text-center text-white">JavaScript</h4>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-700 rounded-lg p-4 mx-2">
                        <img src="/assets/python.svg" alt="Python" className="h-16 w-16 mb-2 mx-auto" />
                        <h4 className="text-lg font-semibold text-center text-white">Python</h4>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-700 rounded-lg p-4 mx-2">
                        <img src="/assets/react.svg" alt="react" className="h-16 w-16 mb-2 mx-auto" />
                        <h4 className="text-lg font-semibold text-center text-white">React</h4>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-gray-700 rounded-lg p-4 mx-2">
                        <img src="/assets/html5.svg" alt="html" className="h-16 w-16 mb-2 mx-auto" />
                        <h4 className="text-lg font-semibold text-center text-white">Html</h4>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-gray-700 rounded-lg p-4 mx-2">
                        <img src="/assets/css3.svg" alt="css" className="h-16 w-16 mb-2 mx-auto" />
                        <h4 className="text-lg font-semibold text-center text-white">CSS</h4>
                    </div>
                </div>

                <div className="mt-12"></div>

                {/* Seção Projetos */}
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Projetos</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-gray-700 rounded-lg p-4">
                        <img src="/path/to/first-project-image.png" alt="UI/UX Design Project" className="h-40 w-full object-cover mb-2 rounded-lg" />
                        <h4 className="text-lg font-semibold text-white">UI/UX Design</h4>
                        <p className="text-gray-400">Design Unraveled: Behind the Scenes of UI/UX Magic</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-700 rounded-lg p-4">
                        <img src="/path/to/second-project-image.png" alt="Sugee App" className="h-40 w-full object-cover mb-2 rounded-lg" />
                        <h4 className="text-lg font-semibold text-white">App Design</h4>
                        <p className="text-gray-400">Sugee: Loan Management System for Rural Sector</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-700 rounded-lg p-4">
                        <img src="/path/to/third-project-image.png" alt="Cinetrade App" className="h-40 w-full object-cover mb-2 rounded-lg" />
                        <h4 className="text-lg font-semibold text-white">App Design</h4>
                        <p className="text-gray-400">Cinetrade: Innovative way to invest in Digital Media</p>
                    </div>
                </div>
            </section>

              
               {/* Formulário de contato */}
               <section id="contato" className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Entre em Contato</h2>
                <p className="text-gray-400 mb-8">Gostaria de discutir um projeto ou simplesmente dizer oi? Preencha o formulário abaixo!</p>
            </div>

            <div className="max-w-xl mx-auto">
                <form action="#" method="POST" className="space-y-6">
                    {/* Nome */}
                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-200">Seu Nome</label>
                        <div className="mt-1">
                            <input
                                id="nome"
                                name="nome"
                                type="text"
                                required
                                className="w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Seu nome"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200">Seu Email</label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="seuemail@exemplo.com"
                            />
                        </div>
                    </div>

                    {/* Mensagem */}
                    <div>
                        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-200">Sua Mensagem</label>
                        <div className="mt-1">
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                rows="4"
                                required
                                className="w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Escreva sua mensagem aqui..."
                            ></textarea>
                        </div>
                    </div>

                    {/* Botão de Enviar */}
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </section>

        </div>
    );
}

export default Home;
