import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  UserIcon,
  BuildingOfficeIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

const CertificateTypes = () => {
  const items = useMemo(
    () => [
      {
        icon: UserIcon,
        title: "Salas Privativas",
        subtitle: "Ambientes exclusivos para foco e produtividade",
        description:
          "Ideais para trabalho em grupo, atendimentos e reuniões, garantindo foco e conforto.",
        features: [
          "Espaço exclusivo e silencioso",
          "Mesa e cadeira ergonômica",
          "Wi-Fi de alta velocidade",
          "Limpeza e manutenção inclusas",
        ],
        to: "/SalasPrivativas",
        badge: "Para atender",
      },
      {
        icon: BuildingOfficeIcon,
        title: "Domicílio Fiscal",
        subtitle: "Endereço legal e seguro para sua empresa",
        description:
          "Utilize o endereço da Impulse como sede legal da sua empresa, garantindo credibilidade, segurança e economia.",
        features: [
          "Endereço legalizado",
          "Privacidade e segurança",
          "Gestão de correspondência",
          "Suporte especializado",
        ],
        to: "/DomicilioFiscal",
        badge: "Mais procurado",
      },
      {
        icon: DocumentIcon,
        title: "Auditórios",
        subtitle: "Espaços amplos para eventos corporativos",
        description:
          "Auditórios preparados para palestras, workshops e treinamentos, com infraestrutura para eventos profissionais.",
        features: [
          "Espaço amplo",
          "Equipamentos de áudio e vídeo",
          "Conforto e praticidade",
          "Suporte dedicado",
        ],
        to: "/Auditorios",
        badge: "Eventos",
      },
      {
        icon: DocumentIcon,
        title: "Estações de Trabalho",
        subtitle: "Flexibilidade e produtividade em ambiente compartilhado",
        description:
          "Estações individuais em coworking moderno, ideais para quem busca praticidade, networking e foco.",
        features: [
          "Ambiente compartilhado",
          "Wi-Fi de alta velocidade",
          "Custo acessível",
          "Estrutura completa",
        ],
        to: "/EstacoesDeTrabalho",
        badge: "Coworking",
      },
    ],
    []
  );

  return (
    <section id="servicos" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-semibold">
            Conheça os serviços
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tudo que você precisa para trabalhar com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulse-dark to-impulse-light">
              estrutura
            </span>
            .
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            A Impulse oferece domicílio fiscal e espaços modernos para reuniões,
            atendimentos, eventos e rotina de trabalho, com praticidade,
            segurança e profissionalismo.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition overflow-hidden"
            >
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                    <it.icon className="w-6 h-6" />
                  </div>

                  <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-extrabold text-slate-700">
                    {it.badge}
                  </div>
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-slate-900 leading-tight">
                  {it.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  {it.subtitle}
                </p>

                <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                  {it.description}
                </p>

                <div className="mt-5 grid grid-cols-1 gap-2">
                  {it.features.map((f) => (
                    <div
                      key={f}
                      className="rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2"
                    >
                      <div className="flex items-start gap-2">
                        <span className="mt-1 inline-block w-2 h-2 rounded-full bg-impulse-light" />
                        <span className="text-sm text-slate-700 leading-snug">
                          {f}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex gap-2">
                  <Link
                    to={it.to}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-impulse-dark hover:bg-impulse-blue text-white font-extrabold px-5 py-3 transition shadow-sm hover:shadow-lg"
                  >
                    Ver detalhes
                    <span className="translate-y-[1px]">→</span>
                  </Link>
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-impulse-dark to-impulse-light opacity-70 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateTypes;
