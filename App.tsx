import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingNav from './components/FloatingNav';
import Home from './components/Home';
import InvestmentInsights from './components/InvestmentInsights';

const App: React.FC = () => {
  return (
    <Router>
      <FloatingNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/investment-insights" element={<InvestmentInsights />} />
      </Routes>
    </Router>
  );
};

export default App;