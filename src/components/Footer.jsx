import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const phone = '5585998210894';
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    'Olá! Gostaria de mais informações sobre os espaços da Impulse.'
  )}`;

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/impulsecoworking', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/impulsecoworking', icon: Instagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/impulsecoworking', icon: Linkedin },
  ];

  const quickLinks = [
    { name: 'Sobre Nós', to: '#sobre', type: 'anchor' },
    { name: 'Serviços', to: '#servicos', type: 'anchor' },
    { name: 'Benefícios', to: '#beneficios', type: 'anchor' },
    { name: 'Whatsapp', href: waLink, type: 'external' },
  ];

  return (
    <footer className="bg-impulse-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-impulse-light mb-4">Impulse Coworking</h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Espaços privativos, compartilhados e auditórios projetados para oferecer praticidade, 
              conforto e produtividade para empresas e profissionais.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map(({ name, href, icon: Icon }, idx) => (
                <a
                  key={idx}
                  href={href}
                  aria-label={name}
                  className="w-10 h-10 bg-impulse-light/20 rounded-full flex items-center justify-center hover:bg-impulse-light transition-colors duration-300"
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.type === 'route' ? (
                    <Link
                      to={link.to}
                      className="text-gray-300 hover:text-impulse-light transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  ) : link.type === 'external' ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-impulse-light transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <a
                      href={link.to || '#'}
                      className="text-gray-300 hover:text-impulse-light transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <p>📧 <a href="mailto:impulsecoworking@gmail.com" className="hover:text-impulse-light">impulsecoworking@gmail.com</a></p>
              <p>📱 <a href="tel:+5585998210894" className="hover:text-impulse-light">(85) 99821-0894</a></p>
              <p>📍 Fortaleza, CE</p>
              <p>⏰ Seg-Sex: 8h-18h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 Impulse Coworking. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
