import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SalasPrivativas from './pages/SalasPrivativas';
import DomicilioFiscal from './pages/DomicilioFiscal';
import EstacoesDeTrabalho from './pages/EstacaoTrab';
import ArmarioPriv from './pages/ArmariosPriv';
import Auditorios from './pages/Auditorios';
import ScrollToTop from './components/ScrollToTop';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SalasPrivativas" element={<SalasPrivativas />} />
      <Route path="/DomicilioFiscal" element={<DomicilioFiscal />} />
      <Route path="/Auditorios" element={<Auditorios />} />
      <Route path="/ArmariosPrivativos" element={<ArmarioPriv />} />
      <Route path="/EstacoesDeTrabalho" element={<EstacoesDeTrabalho />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}
