import {
  BrushCleaning,
  Coffee,
  Clock4,
  Hotel,
  Wifi,
  User,
  Lock,
  Users,
  CheckCircle2,
} from "lucide-react";

const UsageExamples = () => {
  const examples = [
    {
      icon: Clock4,
      title: "Flexibilidade de uso",
      description: "Diárias, pacotes de horas ou mensalidade.",
    },
    {
      icon: Hotel,
      title: "Espaços privativos e compartilhados",
      description:
        "Salas, estações de trabalho e auditórios para todos os tamanhos de equipe.",
    },
    {
      icon: Wifi,
      title: "Internet de alta velocidade",
      description:
        "Conexão rápida e estável para reuniões e videoconferências.",
    },
    {
      icon: User,
      title: "Recepção profissional",
      description:
        "Atendimento personalizado e suporte para receber clientes.",
    },
    {
      icon: BrushCleaning,
      title: "Limpeza recorrente",
      description:
        "Espaços sempre organizados e higienizados.",
    },
    {
      icon: Coffee,
      title: "Café e conveniências inclusas",
      description:
        "Para tornar o dia de trabalho mais agradável.",
    },
    {
      icon: Lock,
      title: "Segurança e privacidade",
      description:
        "Ambientes controlados, fechaduras individuais e monitoramento discreto.",
    },
    {
      icon: Users,
      title: "Networking e comunidade",
      description:
        "Conexão com outros profissionais e oportunidades de parcerias.",
    },
  ];

  return (
    <section id="beneficios" className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-impulse-light/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-impulse-dark/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-semibold">
            Benefícios Impulse
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Muito mais que um espaço.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-impulse-dark to-impulse-light">
              Uma estrutura completa.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Ao escolher a Impulse, você não está alugando apenas um espaço,
            está entrando em um ambiente pensado para produtividade,
            credibilidade e crescimento.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {examples.map((example, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <example.icon className="w-6 h-6" />
                </div>

                <CheckCircle2 className="w-5 h-5 text-impulse-light opacity-70 group-hover:opacity-100 transition" />
              </div>

              <h3 className="mt-5 text-lg font-extrabold text-slate-900 leading-tight">
                {example.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {example.description}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-impulse-dark to-impulse-light opacity-60 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-slate-900 text-white px-6 py-5 rounded-3xl shadow-lg">
            <span className="text-sm sm:text-base font-semibold">
              Quer trabalhar com mais profissionalismo e estrutura?
            </span>
            <a
              href="https://wa.me/5585991413326"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-slate-900 font-extrabold px-5 py-2.5 rounded-full hover:shadow-md transition"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageExamples;
