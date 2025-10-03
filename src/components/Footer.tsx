import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={logo} alt="L2 Distribuidora" className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="text-secondary-foreground/80 text-sm">
                A solução para o seu negócio!
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-sm text-secondary-foreground/80">
                <p>(16) 99799-7029</p>
                <p>l2distribuidora@outlook.com.br</p>
                <p>R Doutor Antonio Carlos Tinoco, 287</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Horário</h3>
              <p className="text-sm text-secondary-foreground/80">
                Segunda a sexta<br />
                Das 8h às 18h
              </p>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8 text-center">
            <p className="text-sm text-secondary-foreground/60">
              © {currentYear} L2 Distribuidora. CNPJ: 61.400.320/0001-23. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
