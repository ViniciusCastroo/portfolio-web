import { FaGamepad, FaPlane, FaMusic } from 'react-icons/fa'; // Ícones para hobbies
import { SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiHtml5, SiCss3, SiPython, SiArduino, SiBootstrap, SiFigma, SiCplusplus, SiGithub } from 'react-icons/si'; // Ícones das tecnologias

const Sobre = () => {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-black text-gray-300 min-h-screen flex flex-col justify-center items-center p-6">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Saiba Quem <span className="text-blue-500">Sou</span>
        </h2>

        <h3 className="text-lg mb-6">
          Olá! Sou Vinicius, bacharelando em <span className="text-white font-semibold">Engenharia de Software na FIAP</span>. 
          Estou sempre em busca de <span className="text-white font-semibold">desafios e conhecimentos</span> no <span className="text-white font-semibold">mundo da tecnologia</span>.
        </h3>
        
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-4 text-white">Atividades que eu amo fazer:</h4>
          <ul className="flex justify-center space-x-6 text-lg">
            <li className="flex items-center">
              <FaGamepad className="text-blue-500 mr-2" /> Jogar
            </li>
            <li className="flex items-center">
              <FaPlane className="text-blue-500 mr-2" /> Viajar
            </li>
            <li className="flex items-center">
              <FaMusic className="text-blue-500 mr-2" /> Ouvir Música
            </li>
          </ul>
        </div>


        <div>
          <h4 className="text-2xl font-semibold text-white mb-4">Habilidades Técnicas</h4>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <SiJavascript className="text-4xl text-blue-500 mb-2" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiReact className="text-4xl text-blue-500 mb-2" />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-4xl text-blue-500 mb-2" />
              <span>TailwindCSS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNodedotjs className="text-4xl text-blue-500 mb-2" />
              <span>Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiHtml5 className="text-4xl text-blue-500 mb-2" />
              <span>HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <SiCss3 className="text-4xl text-blue-500 mb-2" />
              <span>CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <SiPython className="text-4xl text-blue-500 mb-2" />
              <span>Python</span>
            </div>
            <div className="flex flex-col items-center">
              <SiArduino className="text-4xl text-blue-500 mb-2" />
              <span>Arduino</span>
            </div>
            <div className="flex flex-col items-center">
              <SiBootstrap className="text-4xl text-blue-500 mb-2" />
              <span>Bootstrap</span>
            </div>
            <div className="flex flex-col items-center">
              <SiFigma className="text-4xl text-blue-500 mb-2" />
              <span>Figma</span>
            </div>
            <div className="flex flex-col items-center">
              <SiCplusplus className="text-4xl text-blue-500 mb-2" />
              <span>C++</span>
            </div>
            <div className="flex flex-col items-center">
              <SiGithub className="text-4xl text-blue-500 mb-2" />
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
