import { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-gradient-to-b from-blue-900 to-black text-gray-300 min-h-screen flex justify-center items-center p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-white-600">Vamos conversar</h2>
          <p className="mb-4">Tem alguma dúvida? Envie-me uma mensagem aqui!</p>
          <p className="font-bold mb-4">Maneiras adicionais de entrar em contato:</p>
          
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaLinkedin className="text-blue-600 mr-2" /> 
              <a href="https://www.linkedin.com/in/vinicius-castro-44a66924a/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">/in/vinicius-castro/</a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-red-600 mr-2" /> 
              <a href="mailto:vi230206@gmail.com" className="text-red-600 hover:underline">Vi230206@gmail.com</a>
            </li>
            <li className="flex items-center">
              <FaWhatsapp className="text-green-600 mr-2" />
              <a href="https://wa.me/5511971392933" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">+55 11 97139-2933</a>
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1">Nome</label>
              <input 
                type="text" 
                name="nome" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Nome" 
                value={formData.nome} 
                onChange={handleChange} 
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">E-mail</label>
              <input 
                type="email" 
                name="email" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="E-mail" 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Mensagem</label>
              <textarea 
                name="mensagem"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 text-gray-600"
                placeholder="Mensagem" 
                value={formData.mensagem} 
                onChange={handleChange} 
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
