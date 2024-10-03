import React from 'react';

export default function Formulario() {
    return (
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
    );
}
