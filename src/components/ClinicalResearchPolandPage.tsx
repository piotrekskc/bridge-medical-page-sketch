import { useState } from "react";
import {
  CheckCircle,
  MapPin,
  TrendingUp,
  Users,
  Shield,
  Clock,
  Award,
  Globe,
  FileText,
  Lightbulb,
  Building,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function ClinicalResearchPolandPage() {
  const [expanded, setExpanded] = useState(false);
  const keyAdvantages = [
    {
      icon: Users,
      title: "Access to a Large, Diverse, and Engaged Patient Population",
      description:
        "Poland offers exceptional recruitment potential – not only due to the size of its population (over 38 million people) but also because of the structure of the healthcare system and increasing public awareness of clinical research.",
      details:
        "Compared to Western Europe, patients in Poland often have limited access to the latest therapies through reimbursement schemes, which makes them more willing to participate in clinical trials. Oncology and Rare Diseases: Poland is a regional leader in the number of oncology trials. Indications such as breast cancer, lung cancer, and melanoma attract significant interest from sponsors. Due to the concentration of reference centers in cities like Warsaw, Krakow, Poznan, and Bydgoszcz, recruitment is effective and timely.",
    },
    {
      icon: Shield,
      title: "High-Quality Clinical Data and Compliance with Global Standards",
      description:
        "Polish sites operate in accordance with international ICH-GCP regulations, and medical personnel have experience working on trials sponsored by leading pharmaceutical and biotech companies.",
      details:
        "Medical Data Research: Poland has one of the most advanced data management infrastructures in the region. Projects in collaboration with academic centers and tech companies (e.g., National Oncology Institute, Medical University of Warsaw, AI-driven health startups) have led to increasing use of EHRs, data integration, and eSource tools in clinical trials. Data Integrity Practices: Sites in Poland implement ALCOA+ compliant standards, which is critical for collaboration with agencies like the FDA and EMA. Use of ePRO, eConsent, and CTMS solutions is increasingly common.",
    },
    {
      icon: TrendingUp,
      title: "High Quality at Competitive European Rates",
      description:
        "Clinical trials conducted in Poland offer cost levels comparable to those in Western European countries such as Germany, France, or the UK—covering areas like research staff remuneration, facility access, consumables, and analytical services.",
      details:
        "What distinguishes Poland, however, is the exceptional quality driven by highly qualified personnel and well-developed infrastructure. Phase I and II trials managed by international CROs increasingly take place in Poland, which is gaining recognition as a prime location for early-phase drug development. Clinical centers in the country provide comprehensive clinical and laboratory capabilities aligned with GLP and GCP standards—combining European-level pricing with consistently high performance and reliability.",
    },
    {
      icon: Clock,
      title: "Efficient and Predictable Regulatory Processes",
      description:
        "Modernized pharmaceutical laws and improved efficiency of institutions such as URPL and Bioethics Committees have positioned Poland favorably in terms of clinical trial approval timelines.",
      details:
        "EU Clinical Trials Regulation (CTR) Compliance: Poland was one of the first countries in the region to fully align its procedures with the EU CTIS portal. In 2023, the average time from submission to approval in the CTIS system was under 60 days – outperforming many Western countries. Support from the Medical Research Agency (ABM): This institution funds non-commercial research and supports infrastructure development across Poland, increasing national participation in both scientific and commercial projects.",
    },
    {
      icon: Building,
      title: "Advanced and Modern Clinical Infrastructure",
      description:
        "Poland boasts numerous well-equipped clinical centers with experienced research teams. Years of involvement in international projects have fostered high levels of organization and operational readiness.",
      details:
        "Polish Clinical Research Network (PSBK): A network of dozens of certified clinical sites across the country. PSBK's central coordination ensures fast study startup, harmonized SOPs, and efficient communication between CROs and sites. Centers of Therapeutic Excellence – e.g., in neurology (Neurology Clinic in Katowice), diabetology (Diabetology Institute in Warsaw), rare diseases, and gene therapy (Medical University of Wroclaw) – attract global sponsors.",
    },
    {
      icon: Globe,
      title:
        "Competitiveness Against Western Europe – Poland as an Efficient Alternative",
      description:
        "Compared to mature Western European markets such as Germany, France, or the UK, Poland and the CEE region offer a better cost-to-quality ratio and greater organizational flexibility.",
      details:
        "This makes them especially attractive to biotech firms and sponsors looking for fast, efficient solutions.",
    },
    {
      icon: Award,
      title: "Faster Recruitment and Less Competition for Patients",
      description:
        "In Western Europe, patient recruitment is often slower due to a high number of active studies, site overload, and patient skepticism.",
      details:
        "In Poland, recruitment is often 30–50% faster, significantly reducing overall study duration. Cardiology and Metabolic Disease Trials: Sponsors regularly report that Polish sites reach recruitment targets ahead of schedule with lower dropout rates than sites in Germany or France.",
    },
    {
      icon: CheckCircle,
      title: "Predictability, Flexibility, and Collaborative Partnership",
      description:
        "Poland is known for its collaborative approach by research sites and CRO teams, who are often able to tailor processes to sponsor needs.",
      details:
        "The environment is less formalized than in Western countries, enabling quicker actions and fewer delays. Flexible protocol amendment management, faster budget negotiations, and genuine team engagement are frequently praised by non-regional sponsors.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Approach to Development and Digitalization",
      description:
        "Polish CROs and research sites are increasingly implementing eClinical solutions such as remote monitoring, eConsent, ePRO, and DCTs (Decentralized Clinical Trials).",
      details:
        "In 2024, several large Polish sites launched fully hybrid trial models using remote oversight systems and e-diaries, reducing monitoring visits by 40% for the sponsor.",
    },
  ];

  const additionalAdvantages = [
    "Integration with European Structures and Growing Influence of Polish CROs",
    "Clinical Trials of Medical Devices – Poland as a Central European Leader",
  ];

  return (
    <div className="space-y-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Clinical Research in Poland - A Strategic Advantage in the Heart of
            Europe
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Poland has been steadily strengthening its position as one of the
            most attractive countries in Europe for conducting clinical trials.
            A dynamically growing market, high regulatory standards, a
            well-educated medical workforce, and competitive costs make Poland –
            along with neighboring Central and Eastern European countries like
            the Czech Republic and Lithuania – a top choice for sponsors and
            CROs seeking optimal conditions for their research projects.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              className="border-white text-blue-600 hover:bg-blue-50 font-semibold shadow-md flex items-center justify-center gap-2"
              size="lg"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? "Hide Details" : "Learn More"}
              {expanded ? (
                <ChevronUp className="ml-2" />
              ) : (
                <ChevronDown className="ml-2" />
              )}
            </Button>
          </div>
        </div>
      </section>

      {expanded && (
        <>
          {/* Key Advantages */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {keyAdvantages.map((advantage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <advantage.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <Badge className="mb-2">{index + 1}</Badge>
                        <CardTitle className="text-xl mb-3">
                          {advantage.title}
                        </CardTitle>
                        <p className="text-muted-foreground leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  {advantage.details && (
                    <CardContent className="pt-0 pl-16">
                      <div className="border-l-4 border-primary/20 pl-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {advantage.details}
                        </p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </section>

          {/* Development and Modernization */}
          <section className="bg-muted py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Development of the Clinical Trials Sector in Poland
                </h2>
                <p className="text-lg text-muted-foreground">
                  Direction: Modernization, Specialization, Global Role
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Building className="w-6 h-6 text-primary" />
                      <span>Investment in Infrastructure and Competence</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Programs by the Medical Research Agency (ABM) and the
                      National Centre for Research and Development (NCBR) have
                      enabled Polish sites to receive tens of millions of PLN
                      for infrastructure modernization, staff training, and new
                      technology implementation. The "Development of the Polish
                      Clinical Research Network" program has built
                      infrastructure in over 40 institutions across the country,
                      including early-phase labs, eCRF systems, and local
                      quality teams.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-primary" />
                      <span>
                        Specialization in Niche and Advanced Therapeutic Areas
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Polish sites increasingly serve as specialized reference
                      centers for rare diseases, gene therapies, molecular
                      oncology, and neurodegeneration. Medical universities in
                      Wroclaw, Lodz, and Gdansk participate in international
                      projects on CAR-T therapies, mitochondrial diseases, SMA,
                      and ALS, offering expert knowledge and access to selected
                      patient populations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
