function Home() {
    const floatingImages = [
        { src: "/assets/dino.svg", alt: "Floating Icon 1", size: "150px", position: { top: "-110px", left: "10%" } },
        { src: "/assets/paintbrush.svg", alt: "Floating Icon 1", size: "150px", position: { top: "25px", left: "-27%" } },
        { src: "/assets/yay.svg", alt: "Floating Icon 1", size: "150px", position: { top: "80px", left: "110%" } },
        { src: "/assets/coder.svg", alt: "Floating Icon 2", size: "250px", position: { bottom: "-250px", left: "-10%" } },
        { src: "/assets/code.svg", alt: "Floating Icon 3", size: "65px", position: { bottom: "-55px", left: "9%" } },
        { src: "/assets/html.svg", alt: "Floating Icon 3", size: "65px", position: { top: "-90px", left: "70%" } },
        { src: "/assets/js1.svg", alt: "Floating Icon 3", size: "100px", position: { bottom: "-180px", left: "92%" } },
        { src: "/assets/laptop.svg", alt: "Floating Icon 3", size: "120px", position: { bottom: "-95px", left: "63%" } },
        { src: "/assets/fillStar.svg", alt: "Floating Icon 3", size: "120px", position: {  bottom: "120px", left: "90%"  } },
      
    ];

    return (
        <div className="bg-gradient-to-b from-blue-900 to-black min-h-screen relative">
            <section className="flex items-center justify-center min-h-screen text-center relative">
                <div className="relative text-white px-4 flex flex-col items-center">
                    {/* Renderização dinâmica das imagens flutuantes */}
                    {floatingImages.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className="absolute opacity-70"
                            style={{
                                width: image.size,
                                height: image.size,
                                ...image.position
                            }}
                        />
                    ))}

                    <p className="text-lg md:text-xl text-gray-400 mb-4">👋 Olá, visitante!</p>
                    <h1 className="text-5xl md:text-7xl font-bold relative z-10">
                        Meu nome é <span className="text-blue-500 italic">Vinicius</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-400">
                        Trabalho com pessoas de todo o mundo para criar experiências personalizadas.
                    </p>

                    <div className="flex justify-center mt-8 space-x-6">
                        <a href="https://www.linkedin.com/in/vinicius-castro-44a66924a/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/linkedin-white.svg" alt="LinkedIn" className="h-8 w-8 text-white hover:text-blue-500" />
                        </a>
                        <a href="https://github.com/ViniciusCastroo" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/github-white.svg" alt="GitHub" className="h-8 w-8 text-white hover:text-blue-400" />
                        </a>
                        <a href="https://wa.me/5511971392933" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/whatsapp-white.svg" alt="WhatsApp" className="h-8 w-8 text-white hover:text-pink-500" />
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;
