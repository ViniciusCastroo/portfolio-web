import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contato = () => {
  return (
    <section className="bg-dark-blue text-gray-300 min-h-screen flex justify-center items-center p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lado esquerdo - Informações de contato */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-blue-600">Vamos conversar</h2>
          <p className="mb-4">Tem alguma dúvida? Envie-me uma mensagem aqui! Eu respondo rapidamente (dentro de 48 horas).</p>
          <p className="font-bold mb-4">Maneiras adicionais de entrar em contato:</p>
          
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaLinkedin className="text-blue-600 mr-2" /> 
              <a href="https://linkedin.com/in/prasad-chavan2003" target="_blank" className="text-blue-600 hover:underline">/in/prasad-chavan2003/</a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-red-600 mr-2" /> 
              <a href="mailto:vi230206@gmail.com" className="text-red-600 hover:underline">Vi230206@gmail.com</a>
            </li>
            <li className="flex items-center">
              <FaInstagram className="text-white-600 mr-2" /> 
              <a href="https://instagram.com/pranshufeels_" target="_blank" className="text-white-600 hover:underline">@pranshufeels_</a>
            </li>
          </ul>
        </div>

        {/* Lado direito - Formulário de contato */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Nome</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Nome" 
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Endereço eletrônico</label>
              <input 
                type="email" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Endereço eletrônico" 
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Mensagem</label>
              <textarea 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Mensagem" 
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Enviar <span className="ml-2">✉️</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;
