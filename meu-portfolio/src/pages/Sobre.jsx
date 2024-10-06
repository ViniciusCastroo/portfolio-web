// src/components/Sobre.js
const Sobre = () => {
  return (
    <section className="bg-gray-800 text-gray-300 min-h-screen flex flex-col justify-center items-center p-6">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Quem sou eu?
        </h2>
        <h3 className="text-2xl font-semibold mb-6 text-white">
          Estudante de Engenharia de Software apaixonado por Tecnologia
        </h3>
        <p className="text-lg mb-6">
          Atualmente, sou bacharelando em <span className="text-white font-semibold">Engenharia de Software (2/8) na FIAP</span>. 
          Aqui, vivo uma jornada repleta de empolgação e dedicação para aprender mais sobre o 
          <span className="text-white font-semibold"> mundo da tecnologia</span>.
        </p>
        <p className="text-lg mb-6">
          Além disso, atuo como <span className="text-white font-semibold">Estagiário de TI na FIAP</span>, oferecendo suporte técnico e contribuindo para a melhoria da infraestrutura tecnológica da instituição.
        </p>
        <p className="text-lg mb-6">
          Fora do ambiente acadêmico e profissional, gosto de <span className="text-white font-semibold">explorar novas tecnologias</span>, 
          desenvolver projetos desafiadores e me manter atualizado com as <span className="text-white font-semibold">últimas tendências</span> do mercado de tecnologia.
        </p>
      </div>
    </section>
  );
};

export default Sobre;
