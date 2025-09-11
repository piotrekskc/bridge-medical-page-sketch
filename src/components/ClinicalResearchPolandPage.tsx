import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  Users,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Database,
  Clock,
  Stethoscope,
  Building2,
  Award,
  Target,
  Brain,
  Heart,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";

const keyAdvantages = [
  {
    icon: Users,
    color: "bg-blue-100 text-blue-600",
    title: "Large, Diverse Patient Population",
    description:
      "Over 38 million people with exceptional recruitment potential and high willingness to participate in clinical trials.",
    stats: [
      "38+ million population",
      "30-50% faster recruitment vs Western Europe",
      "Lower dropout rates than Germany/France",
    ],
  },
  {
    icon: Database,
    color: "bg-green-100 text-green-600",
    title: "High-Quality Data & Compliance",
    description:
      "ICH-GCP compliant sites with advanced data management infrastructure and ALCOA+ standards.",
    stats: [
      "ICH-GCP regulated operations",
      "ALCOA+ compliant data integrity",
      "FDA and EMA collaboration ready",
    ],
  },
  {
    icon: TrendingUp,
    color: "bg-purple-100 text-purple-600",
    title: "Competitive European Rates",
    description:
      "European-level pricing with consistently high performance and reliability for Phase I and II trials.",
    stats: [
      "GLP and GCP aligned centers",
      "Early-phase drug development hub",
      "40% reduction in monitoring visits",
    ],
  },
  {
    icon: Clock,
    color: "bg-orange-100 text-orange-600",
    title: "Efficient Regulatory Processes",
    description:
      "Streamlined approval processes with CTIS compliance and support from Medical Research Agency (ABM).",
    stats: [
      "Under 60 days CTIS approval",
      "First to align with EU CTR",
      "Outperforms many Western countries",
    ],
  },
];

const therapeuticAreas = [
  {
    icon: Stethoscope,
    title: "Oncology Excellence",
    description:
      "Regional leader in oncology trials with specialized centers in major cities",
    details: [
      "Breast cancer, lung cancer, melanoma studies",
      "Reference centers in Warsaw, Krakow, Poznan, Bydgoszcz",
      "CAR-T therapy and molecular oncology expertise",
    ],
  },
  {
    icon: Brain,
    title: "Rare Diseases & Gene Therapy",
    description:
      "Specialized expertise in neurodegeneration and genetic disorders",
    details: [
      "SMA, ALS, mitochondrial diseases",
      "Gene therapy clinical trials",
      "Universities in Wroclaw, Lodz, Gdansk leading research",
    ],
  },
  {
    icon: Heart,
    title: "Cardiology & Metabolic Diseases",
    description:
      "Advanced capabilities in cardiovascular and endocrine research",
    details: [
      "Ahead-of-schedule recruitment",
      "Lower dropout rates vs Western Europe",
      "Diabetology Institute in Warsaw",
    ],
  },
];

const infrastructure = [
  {
    title: "Polish Clinical Research Network (PSBK)",
    description:
      "Certified clinical sites network ensuring fast study startup and harmonized SOPs",
    features: [
      "Dozens of certified sites",
      "Central coordination",
      "Efficient CRO communication",
    ],
  },
  {
    title: "Centers of Therapeutic Excellence",
    description: "Specialized centers attracting global sponsors",
    features: [
      "Neurology Clinic in Katowice",
      "Diabetology Institute in Warsaw",
      "Medical University of Wroclaw (rare diseases)",
    ],
  },
  {
    title: "Advanced Technology Integration",
    description:
      "Leading implementation of eClinical solutions and digitalization",
    features: [
      "eConsent, ePRO, DCT capabilities",
      "Remote monitoring systems",
      "EHR integration and eSource tools",
    ],
  },
];

const medicalDevices = [
  {
    title: "MDR Compliance Leadership",
    description:
      "Shortest device trial approval times in the region with transparent procedures",
  },
  {
    title: "Specialized Device Experience",
    description:
      "Nerve stimulation devices, CGM monitors, advanced vascular stents",
  },
  {
    title: "Comprehensive CRO Services",
    description:
      "Protocol design to MDR compliance oversight and notified body documentation",
  },
];

export function ClinicalResearchPolandPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Section */}
      <div className="mb-20 text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">
          Clinical Research in Poland
        </h1>
        <p className="text-xl text-muted-foreground mb-2">
          A Strategic Advantage in the Heart of Europe
        </p>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Poland has steadily strengthened its position as one of the most
          attractive countries in Europe for conducting clinical trials. A
          dynamically growing market, high regulatory standards, well-educated
          medical workforce, and competitive costs make Poland a top choice for
          sponsors and CROs seeking optimal conditions for their research
          projects.
        </p>
      </div>

      {/* Key Advantages */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Poland? Key Advantages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {keyAdvantages.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-16 h-16 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      {item.stats.map((stat, statIndex) => (
                        <Badge
                          key={statIndex}
                          variant="secondary"
                          className="mr-2 mb-2"
                        >
                          {stat}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Therapeutic Areas */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Specialized Therapeutic Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {therapeuticAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <area.icon className="w-8 h-8 text-primary" />
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {area.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {area.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Infrastructure */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Advanced Clinical Infrastructure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infrastructure.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Building2 className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Competitive Advantages */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Competitive Advantages vs Western Europe
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-3">
                <Target className="w-8 h-8 text-green-600" />
                <CardTitle className="text-xl">
                  Faster Recruitment & Less Competition
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>
                    30-50% faster recruitment compared to Western Europe
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>
                    Lower patient competition due to fewer active studies
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>
                    Higher patient willingness to participate in trials
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Sites reach recruitment targets ahead of schedule</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="w-8 h-8 text-purple-600" />
                <CardTitle className="text-xl">
                  Flexibility & Innovation
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Collaborative approach tailored to sponsor needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Flexible protocol amendment management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Faster budget negotiations and team engagement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>
                    Leading implementation of DCT and eClinical solutions
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Medical Devices */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Medical Device Trials - Central European Leader
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {medicalDevices.map((device, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg mb-2">{device.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {device.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Investment & Growth */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Sector Development & Investment
        </h2>
        <div className="max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl mb-4 text-center">
                Modernization, Specialization, Global Role
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Award className="w-5 h-5 text-yellow-500 mr-2" />
                    Infrastructure Investment
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • Medical Research Agency (ABM) and NCBR funding programs
                    </li>
                    <li>
                      • Tens of millions PLN for infrastructure modernization
                    </li>
                    <li>• Over 40 institutions with enhanced capabilities</li>
                    <li>• Early-phase labs, eCRF systems, quality teams</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                    International Integration
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • Strategic partnerships with US and Israeli biotech
                    </li>
                    <li>• Polish CROs managing full CEE region projects</li>
                    <li>
                      • Participation in international tenders and consortia
                    </li>
                    <li>• Growing influence in global clinical research</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-primary/5 rounded-lg p-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Poland - Your Strategic Partner in Clinical Research
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
          Thanks to favorable regulatory conditions, high-quality data,
          experienced staff, and modern infrastructure, Poland is emerging as a
          CEE leader and strong competitor to Western markets. The ideal
          location for conducting clinical trials efficiently, in line with
          international standards, and with competitive time and cost
          advantages.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Badge variant="secondary" className="text-sm py-2 px-4">
            ICH-GCP Compliant
          </Badge>
          <Badge variant="secondary" className="text-sm py-2 px-4">
            FDA & EMA Ready
          </Badge>
          <Badge variant="secondary" className="text-sm py-2 px-4">
            EU CTR Aligned
          </Badge>
          <Badge variant="secondary" className="text-sm py-2 px-4">
            MDR Expert
          </Badge>
        </div>
      </div>
    </section>
  );
}
