import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bridge Medical</h3>
            <p className="text-gray-300 mb-4">
              Your foundation in Eastern and Western Europe for clinical
              evaluation, legal compliance, reimbursement, and market
              introduction.
            </p>
            <p className="text-gray-300 text-sm">NIP: 5213428629</p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                <span className="text-sm">
                  Willowa 8/10 Ste 18
                  <br />
                  00-790 Warsaw, Poland
                </span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@bridgemedical.pl"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  info@bridgemedical.pl
                </a>
              </div>
              <Button
                size="md"
                variant="link"
                className="rounded-full border border-gray-700 bg-gray-800 text-white hover:bg-blue-600 hover:text-white font-semibold shadow-none flex items-center justify-center gap-2 transition-colors duration-200"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/bridge-medical-paul-barratt/",
                    "_blank"
                  )
                }
              >
                <Linkedin className="mr-2" size={20} />
                Find us on LinkedIn
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Trial Management</li>
              <li>Data Management</li>
              <li>CE Marking and Commercialization Support</li>
              <li>Trial Material and Records</li>
              <li>Regulatory Support and Legal EU Representation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © Bridge Medical • Emerging Technologies • Emerging
            Markets
          </p>
        </div>
      </div>
    </footer>
  );
}
