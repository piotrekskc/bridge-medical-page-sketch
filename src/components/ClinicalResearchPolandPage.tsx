import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, MapPin, CheckCircle2, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    color: "bg-blue-100 text-blue-600",
    title: "Strategic Location",
    description:
      "Poland is a leading destination for clinical research in Europe, offering access to a large and diverse patient population, modern infrastructure, and experienced investigators.",
    points: [
      "Central European location with excellent transport links",
      "Large population (38M) with varied disease profiles",
      "High recruitment rates and low dropout rates",
    ],
  },
  {
    icon: Users,
    color: "bg-green-100 text-green-600",
    title: "Experienced Investigators & Sites",
    description:
      "Polish clinical sites and investigators have extensive experience in international trials, ensuring high-quality data and compliance with global standards.",
    points: [
      "Over 1,000 active clinical trial sites",
      "Strong academic and hospital networks",
      "Multilingual staff familiar with GCP and ICH guidelines",
    ],
  },
  {
    icon: CheckCircle2,
    color: "bg-purple-100 text-purple-600",
    title: "Regulatory Efficiency",
    description:
      "Poland offers streamlined regulatory processes and fast ethics approvals, helping sponsors launch studies quickly and efficiently.",
    points: [
      "Short timelines for regulatory and ethics approvals",
      "Supportive authorities and clear requirements",
      "EU MDR and IVDR compliance",
    ],
  },
  {
    icon: ShieldCheck,
    color: "bg-orange-100 text-orange-600",
    title: "Quality & Safety",
    description:
      "Polish sites maintain high standards for patient safety, data integrity, and monitoring, making Poland a trusted partner for global clinical research.",
    points: [
      "Robust monitoring and auditing systems",
      "Strong patient protection and informed consent",
      "High data quality and reliability",
    ],
  },
];

export function ClinicalResearchPolandPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2 text-primary">
          Clinical Research in Poland
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Poland is a top European destination for clinical trials, offering
          strategic advantages for sponsors, CROs, and medical device companies
          seeking quality, speed, and patient access.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {highlights.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div
                  className={`w-14 h-14 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0`}
                >
                  <item.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-1">{item.title}</CardTitle>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pl-2">
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
