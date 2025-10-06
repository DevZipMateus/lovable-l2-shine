import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-background via-background to-muted">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            L2 Distribuidora
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 leading-relaxed">
            Fornecimento completo de materiais de limpeza e higiene para empresas, condomínios, escolas, restaurantes e bares em Ribeirão Preto e região
          </h2>
          <p className="text-lg md:text-xl text-primary font-semibold mb-10">
            A solução para o seu negócio!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium shadow-lg hover:shadow-xl flex items-center gap-2 group"
            >
              Solicitar orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/5516997997029"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/10 text-secondary border-2 border-secondary/60 px-8 py-4 rounded-lg hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-200 font-medium"
            >
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
