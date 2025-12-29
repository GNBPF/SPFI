import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingNav from './components/FloatingNav';
import ScrollToTop from './components/ScrollToTop';
import ConciergeChat from './components/ConciergeChat';
import Home from './components/Home';
import InvestmentInsights from './components/InvestmentInsights';
import Concierge from './components/Concierge';
import JournalistRegistration from './components/JournalistRegistration';
import ExhibitorRegistration from './components/ExhibitorRegistration';
import VisitorRegistration from './components/VisitorRegistration';

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <ScrollToTop />
        <FloatingNav />
        <ConciergeChat />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/investment-insights" element={<InvestmentInsights />} />
          <Route path="/concierge" element={<Concierge />} />
          <Route path="/concierge/journalist" element={<JournalistRegistration />} />
          <Route path="/concierge/exhibitor" element={<ExhibitorRegistration />} />
          <Route path="/concierge/visitor" element={<VisitorRegistration />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;