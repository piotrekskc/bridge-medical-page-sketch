import {
  ArrowRight,
  Globe,
  Users,
  Shield,
  Target,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

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
      icon: Shield,
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Bridge to European Medical Markets
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Bridge Medical is your foundation in Eastern and
              Western Europe which will enable you to achieve
              your goals of clinical evaluation, legal
              compliance, reimbursement, and market
              introduction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => onPageChange("services")}
              >
                Our Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-blue-600"
                onClick={() => onPageChange("contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Bridge Medical?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We bring technology, research, and capabilities to
            the medical communities we serve across Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Vision, Mission, Goal Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  A cooperative environment of medical industry,
                  regulatory authorities, and medical
                  professionals across Europe. We all have the
                  ultimate goal of advanced, effective, and safe
                  medical capabilities to better care for our
                  corner of the world.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To bring technology, research, and
                  capabilities to the medical communities we
                  serve. You strive to develop, physicians
                  strive to explore, we will bring you both
                  together.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  Our Goal
                </h3>
                <p className="text-gray-700">
                  To be the eastern pillar of the bridge to
                  Europe, to enable a cooperative environment of
                  clinical research for the mutual benefit of
                  medical development companies, investigators,
                  and the medical community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            The opportunities are vast, and this is where we
            live.
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Your success is our success. Please consider Bridge
            Medical to be part of your organization.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => onPageChange("contact")}
          >
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}