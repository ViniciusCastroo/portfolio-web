import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-black py-4" style={{ position: 'relative', width: '100%', bottom: 0 }}>
      <div className="flex justify-between items-center text-gray-400 max-w-4xl mx-auto">
        {/* Texto de Copyright */}
        <p>&copy; 2024 Vinicius Castro. Todos os direitos reservados.</p>
        
        {/* Ícones Sociais */}
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/vinicius-castro-44a66924a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-500 hover:text-blue-600 w-6 h-6" />
          </a>
          <a href="https://github.com/ViniciusCastroo" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-500 hover:text-black w-6 h-6" />
          </a>
          <a href="https://wa.me/5511971392933" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-gray-500 hover:text-green-500 w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};
