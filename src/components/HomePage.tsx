import {
  ArrowRight,
  Globe,
  Users,
  Linkedin,
  Target,
  FileText,
  FlaskConical,
  Gavel,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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
      <header className="text-center space-y-6 pt-12">
        <div className="inline-block bg-primary/10 p-4 rounded-full">
          <FlaskConical className="text-primary" size={48} />
        </div>
        <h1 className="text-5xl font-extrabold text-primary tracking-tight">
          Clinical Research of Medical Devices
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your comprehensive guide to understanding the process, potential, and
          pathways to success in the European market.
        </p>
      </header>

      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center gap-4 bg-muted/30">
          <Gavel className="text-blue-600" size={32} />
          <CardTitle className="text-2xl font-bold">
            What is Clinical Research?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg text-muted-foreground pt-6">
          <p>
            Clinical research of medical devices are carefully planned
            scientific studies conducted to evaluate the safety, performance,
            and clinical benefit of a medical device when used as intended.
            These studies are a fundamental step in the regulatory approval
            process and help ensure that devices placed on the market are safe
            for patients and effective in clinical use.
          </p>
          <p>
            Unlike pharmaceuticals, medical devices often operate through
            physical, mechanical, or software-based mechanisms, requiring a
            different approach to clinical validation. Each study is tailored to
            the device’s risk class, design, and intended purpose.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center gap-4 bg-muted/30">
          <FileText className="text-green-600" size={32} />
          <CardTitle className="text-2xl font-bold">
            Classification and Regulatory Context
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg text-muted-foreground pt-6">
          <p>
            Under the EU Medical Device Regulation (MDR) 2017/745, clinical
            investigations must comply with strict legal, scientific, and
            ethical requirements. Devices are classified by risk level (Class I,
            IIa, IIb, III), which determines the extent of required clinical
            evidence and oversight.
          </p>
        </CardContent>
      </Card>
      {/* PhasesClinicalResearch */}
      <PhasesClinicalResearchPage />

      {/* Clinical Research Poland Page */}
      <ClinicalResearchPolandPage />
    </div>
  );
}
