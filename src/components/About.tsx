import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sobre a L2 Distribuidora
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A L2 Distribuidora é uma empresa especializada no fornecimento de materiais de limpeza para empresas, condomínios, escolas, restaurantes e bares em Ribeirão Preto e região.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Oferecemos uma linha completa de produtos, que vai desde ferramentas e utensílios até soluções de limpeza concentradas e industriais, sempre prezando pela excelência em qualidade.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabalhamos com marcas reconhecidas no mercado, garantindo alta performance e segurança na higienização dos ambientes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Qualidade</h3>
                <p className="text-sm text-muted-foreground">Marcas reconhecidas</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Atendimento</h3>
                <p className="text-sm text-muted-foreground">Suporte especializado</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Eficiência</h3>
                <p className="text-sm text-muted-foreground">Soluções completas</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Segurança</h3>
                <p className="text-sm text-muted-foreground">Alta performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
