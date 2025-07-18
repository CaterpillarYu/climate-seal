import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import ProductTrial1 from './components/ProductTrial1';
import ProductTrial2 from './components/ProductTrial2';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'solutions':
        return <Solutions />;
      case 'features':
        return <Features />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'pricing':
        return <Pricing />;
      case 'trial1':
        return <ProductTrial1 />;
      case 'trial2':
        return <ProductTrial2 />;
      default:
        return (
          <>
            <Hero />
            <Solutions />
            <Features />
            <About />
            <Contact />
          </>
        );
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;