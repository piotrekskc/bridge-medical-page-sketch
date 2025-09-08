import { ArrowRight, Globe, Users, Linkedin, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ClinicalResearchPolandPage } from "./ClinicalResearchPolandPage";
import { PhasesClinicalResearchPage } from "./PhasesClinicalResearchPage";

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const features = [
    {
      icon: Globe,
      title: "Europe-Wide Network",
      description:
        "Two phone calls away from any physician in Poland, three from any in the rest of the EU",
    },
    {
      icon: Linkedin,
      title: "Regulatory Expertise",
      description:
        "Complete support for legal compliance, CE marking, and EU representation",
    },
    {
      icon: Users,
      title: "Clinical Excellence",
      description:
        "Experienced network of physicians, KOLs, and clinical research professionals",
    },
    {
      icon: Target,
      title: "Market Success",
      description:
        "From clinical evaluation to market introduction and reimbursement strategy",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-3xl font-bold mb-6">
            Your Bridge to European Medical Markets
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-600 hover:bg-blue-50 font-semibold shadow-md flex items-center justify-center gap-2"
              onClick={() => onPageChange("contact")}
            >
              <Users className="mr-2" size={20} />
              Contact Us
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-600 hover:bg-blue-50 font-semibold shadow-md flex items-center justify-center gap-2"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/bridge-medical-paul-barratt/",
                  "_blank"
                )
              }
            >
              <Linkedin className="mr-2" size={20} />
              Find us on LinkedIn
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
      {/* PhasesClinicalResearch */}
      <PhasesClinicalResearchPage />

      {/* Clinical Research Poland Page */}
      <ClinicalResearchPolandPage />
    </div>
  );
}
