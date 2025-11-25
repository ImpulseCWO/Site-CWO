
import { Link } from 'react-router-dom';

export default function ECNPJ() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-impulse-dark to-impulse-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Domicílio Fiscal</h1>
          <p className="text-lg text-white/90 mt-4 max-w-3xl">
O domicílio fiscal é a utilização do endereço da Impulse como sede oficial do seu CNPJ. Ele garante credibilidade, legalidade e praticidade para o seu negócio, sem a necessidade de manter um escritório físico próprio.
          </p>
          <div className="mt-6">
            <Link to="/" className="underline underline-offset-4">← Voltar para o início</Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-impulse-dark">O que é domicílio fiscal?</h2>
            <p>O domicílio fiscal é o endereço oficial da sua empresa junto aos órgãos públicos. Ele é usado em registros legais, emissão de notas fiscais e recebimento de correspondências oficiais. Com ele, sua empresa mantém conformidade legal sem precisar de uma sede própria.</p>

            <h2 className="text-2xl font-semibold text-impulse-dark">Como funciona?</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Você contrata o serviço.</li>
              <li>Sua empresa utiliza o endereço da Impulse como sede fiscal.</li>
              <li>Recebemos e gerenciamos sua correspondência oficial.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-impulse-dark">Benefícios</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><span className="text-impulse-dark font-bold">Credibilidade:</span> endereço profissional para clientes e fornecedores.</li>
              <li><span className="text-impulse-dark font-bold">Regularidade jurídica:</span> mantenha seu CNPJ sempre em conformidade.</li>
              <li><span className="text-impulse-dark font-bold">Economia:</span> reduza custos fixos sem precisar alugar uma sala comercial.</li>
              <li><span className="text-impulse-dark font-bold">Gestão de correspondências:</span> receba documentos e notificações com segurança.</li>
              <li><span className="text-impulse-dark font-bold">Flexibilidade:</span> ideal para MEIs, autônomos e pequenas empresas.</li>
            </ul>
          </div>

          <aside className="bg-gray-50 rounded-2xl p-6 h-fit shadow">
            <h3 className="text-lg font-semibold text-impulse-dark">Conheça nossos planos</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li><span className="text-impulse-dark font-bold">EASY: 59,90</span> <br /> Pagamento anual.
              <br /> Mais economia. <br /> Fidelidade de 2 anos.</li>
              <li><span className="text-impulse-dark font-bold">TOP: 79,90</span> <br /> Pagamento mensal. <br />Mais flexibilidade. <br />Fidelidade de 1 ano.</li>
              <li><span className="text-impulse-dark font-bold">PREMIUM: 99,90</span> <br />Pagamento mensal. <br />Inclui 1h de sala/mês. <br />Sem fidelidade.</li>
            </ul>
            <a
              href="https://wa.me/5585998210894?text=Quero%20saber%20mais%20sobre%20e-CNPJ"
              target="_blank" rel="noopener noreferrer"
              className="mt-4 inline-block bg-impulse-dark hover:bg-impulse-blue hover:scale-105 hover:shadow-xl text-white font-semibold px-6 py-3 rounded-full"
            >
              Falar no WhatsApp
            </a>
            <p className='mt-3 text-xs font-light'>Acesso à Sala Executive mediante agendamento prévio. Não cumulativo.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
