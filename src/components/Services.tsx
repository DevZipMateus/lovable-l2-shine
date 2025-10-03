import { Droplets, Wrench, Building2, Sparkles, Package, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Produtos de limpeza concentrados",
      description: "Soluções concentradas de alta performance para todos os tipos de superfícies",
    },
    {
      icon: Sparkles,
      title: "Produtos de limpeza industriais",
      description: "Linha completa para higienização industrial e profissional",
    },
    {
      icon: Wrench,
      title: "Ferramentas e utensílios",
      description: "Equipamentos e ferramentas de qualidade para trabalhos de limpeza",
    },
    {
      icon: Package,
      title: "Materiais de higiene",
      description: "Papel higiênico, toalhas, sabonetes e todos os itens essenciais",
    },
    {
      icon: Building2,
      title: "Soluções para empresas",
      description: "Atendimento especializado para condomínios, escolas e empresas",
    },
    {
      icon: Shield,
      title: "Marcas reconhecidas",
      description: "Trabalhamos apenas com fabricantes de confiança e qualidade comprovada",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nossos serviços
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma linha completa de produtos e serviços para atender todas as necessidades de limpeza do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
