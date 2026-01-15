import Header from '../components/Header';
import Hero from '../components/Hero';
// import AboutCertificates from '../components/AboutCertificates';
import Servicos from '../components/ConhecaServicos';
import Beneficios from '../components/Beneficios';
import Galeria from '../components/GaleriaImpulse';
import CallToAction from '../components/CTAFooter';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Servicos />
      <AboutUs />
      <Beneficios />
      <CallToAction />
      <Footer />
    </div>
  );
}
