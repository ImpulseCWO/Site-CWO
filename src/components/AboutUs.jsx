import { Building2, Target, Eye, HeartHandshake, BadgeCheck } from "lucide-react";

const AboutUs = () => {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-gradient-to-br from-impulse-dark via-slate-900 to-impulse-dark text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-impulse-light/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur border border-white/15">
            Sobre a Impulse
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Estrutura moderna.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulse-light to-white">
              Credibilidade real.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            A{" "}
            <span className="font-extrabold text-white">
              Impulse Cowork & Office
            </span>{" "}
            (CNPJ 21.920.948/0001-35), fundada em 2015 e sediada em
            Fortaleza/CE, oferece espaços modernos e soluções administrativas
            que facilitam a rotina de empreendedores.
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            Aqui você encontra{" "}
            <span className="font-extrabold text-white">domicílio fiscal</span>,
            salas privativas, auditórios e estações de trabalho, tudo em um
            ambiente que une profissionalismo, conforto e praticidade.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group rounded-3xl bg-white text-slate-900 p-6 sm:p-8 shadow-xl hover:shadow-2xl transition">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>

            <h3 className="mt-5 text-xl font-extrabold">
              Nossa Missão
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Fornecer um ambiente de trabalho inovador, flexível e colaborativo
              que impulsione o crescimento dos nossos clientes.
            </p>
          </div>

          <div className="group rounded-3xl bg-white text-slate-900 p-6 sm:p-8 shadow-xl hover:shadow-2xl transition">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>

            <h3 className="mt-5 text-xl font-extrabold">
              Nossa Visão
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Ser referência em coworking e serviços de escritório no Brasil,
              com presença nacional, inovação constante e excelência em
              atendimento.
            </p>
          </div>

          <div className="group rounded-3xl bg-white text-slate-900 p-6 sm:p-8 shadow-xl hover:shadow-2xl transition">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>

            <h3 className="mt-5 text-xl font-extrabold">
              Nossos Valores
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Inovação, flexibilidade, colaboração, comunidade e excelência,
              valores que guiam nossas soluções e fortalecem o sucesso dos
              nossos clientes.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-white/10 backdrop-blur border border-white/15 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>

            <div className="flex-1">
              <p className="text-sm sm:text-base font-semibold text-white/80">
                Desde 2015 em Fortaleza
              </p>
              <p className="mt-1 text-sm sm:text-base text-white/90">
                Estrutura sólida, CNPJ ativo e operação consolidada para dar
                segurança e credibilidade ao seu negócio.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 bg-white text-slate-900 font-extrabold px-5 py-2.5 rounded-full shadow">
              <BadgeCheck className="w-4 h-4" />
              Empresa Regularizada
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
