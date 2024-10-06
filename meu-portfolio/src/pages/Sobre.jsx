import { FaGamepad, FaPenNib, FaPlane } from 'react-icons/fa'; // Adicionei ícones para hobbies
import { SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si'; // Corrigi o nome do ícone de Node.js

const Sobre = () => {
  return (
    <section className="bg-gray-900 text-gray-300 min-h-screen flex flex-col justify-center items-center p-6">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Saiba Quem <span className="text-purple-500">Sou</span>
        </h2>
        <h3 className="text-2xl font-semibold mb-6 text-white">
          Estudante de Engenharia de Software apaixonado por <span className="text-purple-500">Tecnologia</span>
        </h3>
        <p className="text-lg mb-6">
          Olá! Sou Vinicius, bacharelando em <span className="text-white font-semibold">Engenharia de Software (2/8) na FIAP</span>. 
          Atuo como <span className="text-white font-semibold">Estagiário de TI</span> e estou sempre em busca de novos desafios no <span className="text-white font-semibold">mundo da tecnologia</span>.
        </p>
        
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-4 text-white">Atividades que eu amo fazer:</h4>
          <ul className="flex justify-center space-x-6 text-lg">
            <li className="flex items-center">
              <FaGamepad className="text-purple-500 mr-2" /> Jogar
            </li>
            <li className="flex items-center">
              <FaPenNib className="text-purple-500 mr-2" /> Escrever sobre Tech
            </li>
            <li className="flex items-center">
              <FaPlane className="text-purple-500 mr-2" /> Viajar
            </li>
          </ul>
        </div>

        <blockquote className="text-xl italic font-light text-purple-400 mb-8">
          "Busco sempre criar coisas que fazem a diferença!"
        </blockquote>

        <div>
          <h4 className="text-2xl font-semibold text-white mb-4">Habilidades Técnicas</h4>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <SiJavascript className="text-4xl text-purple-500 mb-2" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiReact className="text-4xl text-purple-500 mb-2" />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-4xl text-purple-500 mb-2" />
              <span>TailwindCSS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNodedotjs className="text-4xl text-purple-500 mb-2" />
              <span>Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-4xl text-purple-500 mb-2" />
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
