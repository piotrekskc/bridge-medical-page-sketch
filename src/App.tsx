import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { BlogPage } from './components/BlogPage';
import { PartnerLoginPage } from './components/PartnerLoginPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'services':
        return <ServicesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'blog':
        return <BlogPage />;
      case 'partner-login':
        return <PartnerLoginPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  // Partner login page has its own layout
  if (currentPage === 'partner-login') {
    return <PartnerLoginPage />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-1">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}