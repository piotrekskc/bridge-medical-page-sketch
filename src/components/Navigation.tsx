import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact Us" },
    { id: "blog", label: "Blog" },
    { id: "partner-login", label: "Partner Login" },
  ];

  const learnMoreItems = [
    { id: "faq", label: "FAQ" },
    { id: "clinical-research-poland", label: "Clinical Research Poland" },
    { id: "phases-clinical-research", label: "Phases of Clinical Research" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => onPageChange("home")}
          >
            <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {/* Learn More Dropdown */}
              <div className="relative">
                <button
                  className={`px-3 py-2 text-sm font-medium flex items-center transition-colors ${
                    learnMoreItems.some((i) => i.id === currentPage)
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-300"
                  }`}
                  onClick={() => setIsLearnMoreOpen((open) => !open)}
                  tabIndex={0}
                >
                  Learn More <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isLearnMoreOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg z-10">
                    {learnMoreItems.map((item) => (
                      <button
                        key={item.id}
                        onMouseDown={() => {
                          onPageChange(item.id);
                          setIsLearnMoreOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                          currentPage === item.id
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors ${
                    currentPage === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {/* Learn More in Mobile */}
              <div className="border-t pt-2">
                <span className="block px-3 py-2 text-base font-semibold text-gray-700">
                  Learn More
                </span>
                {learnMoreItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors ${
                      currentPage === item.id
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
