import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { ServicesPage } from "./components/ServicesPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { ClinicalResearchPolandPage } from "./components/ClinicalResearchPolandPage";
import { PhasesClinicalResearchPage } from "./components/PhasesClinicalResearchPage";
import { FAQPage } from "./components/FAQPage";
import { BlogPage } from "./components/BlogPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onPageChange={setCurrentPage} />;
      case "services":
        return <ServicesPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "blog":
        return <BlogPage />;
      case "partner-login":
        return <HomePage onPageChange={setCurrentPage} />;
      case "clinical-research-poland":
        return <ClinicalResearchPolandPage />;
      case "phases-clinical-research":
        return <PhasesClinicalResearchPage />;
      case "faq":
        return <FAQPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

      <main className="flex-1">{renderPage()}</main>

      <Footer />
    </div>
  );
}
