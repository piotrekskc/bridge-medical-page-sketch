import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Users,
  Database,
  Shield,
  FileText,
  Globe,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ServiceDetail {
  title: string;
  description: string;
}

interface ServiceCategory {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
  services: ServiceDetail[];
}

export function ServicesPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const serviceCategories: ServiceCategory[] = [
    {
      id: "trial-management",
      icon: Users,
      title: "Trial Management",
      description:
        "We offer comprehensive support throughout the lifecycle of clinical trials, tailored to the needs of sponsors and investigative sites. Our team ensures the efficient and compliant execution of studies at every stage. We oversee all aspects of clinical trial conduct - from planning and site activation to study close-out. Our approach ensures timelines are met, risks are mitigated, and regulatory requirements are fully adhered to.",
      color: "bg-primary/10 text-primary",
      services: [
        {
          title: "Center Selection Through Start Up",
          description:
            "We assist in selecting qualified research sites based on experience, patient recruitment potential, and infrastructure. Our team manages the start-up process, including contract negotiations, regulatory submissions, and site initiation.",
        },
        {
          title: "Site Management & Communication",
          description:
            "We maintain close collaboration with investigative sites to ensure smooth trial operations, proactive issue resolution, timely reporting, and transparent communication between all stakeholders.",
        },
        {
          title: "Monitoring: On-Site and Remote",
          description:
            "Our monitors perform both on-site visits and remote monitoring activities to ensure data quality, protocol compliance, and adherence to GCP and applicable regulations.",
        },
        {
          title: "Product Accountability",
          description:
            "We manage the distribution, storage and billing of the investigational product in accordance with regulatory requirements, ensuring full control and safety.",
        },
        {
          title: "Procedural Support",
          description:
            "We provide guidance in developing SOPs, documentation templates, and preparation for audits or regulatory inspections. Our team shares industry best practices to support consistent and compliant trial conduct.",
        },
      ],
    },
    {
      id: "data-management",
      icon: Database,
      title: "Data Management",
      description:
        "We provide reliable, compliant, and secure data management solutions to support clinical research from study setup through final data delivery. Our services ensure data integrity, traceability, and regulatory compliance at every step.",
      color: "bg-accent text-foreground",
      services: [
        {
          title: "Data Collection and Entry",
          description:
            "We manage accurate and timely data entry using validated tools and standardized processes. We provide high-quality data collection in accordance with protocol requirements.",
        },
        {
          title: "Data and File Management",
          description:
            "We organize, store, and maintain all trial-related data and documentation in a structured and accessible manner, supporting audit readiness and full traceability throughout the study lifecycle.",
        },
        {
          title: "Secure File Server",
          description:
            "Our secure, access-controlled file server provides a compliant environment for storing sensitive study data and documents, in accordance with data protection regulations and sponsor-specific requirements.",
        },
        {
          title: "Study Document Tracking and Revision Control",
          description:
            "We implement robust systems for tracking document versions and managing revisions, ensuring that teams always work with the most current, approved versions of study materials.",
        },
        {
          title: "Database Development and Support",
          description:
            "Our team designs and maintains customized clinical databases tailored to study-specific needs. We offer full support for CRF design, database validation, and ongoing maintenance to ensure reliable data capture and processing.",
        },
      ],
    },
    {
      id: "ce-marking",
      icon: Shield,
      title: "CE Marking and Commercialization Support",
      description:
        "We offer end-to-end support for medical device and diagnostic product commercialization, helping you navigate the complex regulatory and market landscape in Europe and beyond. Our services are designed to streamline CE marking, market access, and user engagement. We guide you through the entire CE marking process - from classification and conformity assessment strategy to compiling technical documentation and managing regulatory submissions.",
      color: "bg-destructive/10 text-destructive",
      services: [
        {
          title: "Notified Body Communication and Planning",
          description:
            "We support effective communication with Notified Bodies, helping you prepare for audits, manage timelines, and respond to questions efficiently, thereby reducing time to market.",
        },
        {
          title: "Commercialization Support",
          description:
            "We assist in developing and executing your go-to-market strategy, ensuring your product is not only compliant, but also ready for successful market entry and adoption.",
        },
        {
          title: "Reimbursement",
          description:
            "We provide guidance on reimbursement pathways across key markets, helping you understand payer expectations and build the evidence needed for pricing and reimbursement approvals.",
        },
        {
          title: "Product Registration",
          description:
            "We manage product registration processes in target markets, ensuring compliance with national regulations and requirements for market access.",
        },
        {
          title: "User Communication and Recruitment",
          description:
            "In order to support product testing, gathering feedback, and market readiness, we assist you in identifying, interacting with, and recruiting users, including patient groups and healthcare professionals.",
        },
      ],
    },
    {
      id: "trial-materials",
      icon: FileText,
      title: "Trial Material and Records",
      description:
        "We provide comprehensive support in the planning, documentation, and scientific communication of clinical trials. Our services help ensure your study is well-designed, regulatory-compliant, and publication-ready from the outset.",
      color: "bg-muted text-primary",
      services: [
        {
          title: "Study Design",
          description:
            "We collaborate with sponsors and clinical experts to develop robust, scientifically sound study designs that align with regulatory expectations and support meaningful outcomes.",
        },
        {
          title: "Protocol and Informed Consent Development",
          description:
            "Our team assists in drafting and reviewing clinical trial protocols and informed consent forms (ICFs), ensuring clarity, ethical compliance, and alignment with study objectives and local regulations.",
        },
        {
          title: "Site Selection and Qualification",
          description:
            "We evaluate and select investigative sites based on predefined criteria such as experience, infrastructure, regulatory readiness, and access to the target patient population.",
        },
        {
          title: "Trial Master File (TMF) Management",
          description:
            "We establish and maintain a complete and inspection-ready Trial Master File, ensuring all essential documents are properly tracked, version-controlled, and audit-compliant.",
        },
        {
          title: "Study Report Development",
          description:
            "Our medical writing experts prepare high-quality clinical study reports (CSRs) in accordance with ICH guidelines and sponsor requirements, delivering accurate and comprehensive documentation of study outcomes.",
        },
        {
          title: "Publication Management",
          description:
            "We support the planning, writing, submission, and follow-up of scientific publications and conference materials, ensuring timely and impactful dissemination of study results.",
        },
      ],
    },
    {
      id: "regulatory-support",
      icon: Globe,
      title: "Regulatory Support and Legal EU Representation",
      description:
        "We offer expert regulatory support to ensure your clinical trial or medical product meets all legal and ethical requirements within the EU and beyond. Our services cover submissions, representation, authority interactions, and safety reporting with full compliance and strategic insight.",
      color: "bg-secondary text-foreground",
      services: [
        {
          title: "Regulatory Support",
          description:
            "We provide guidance throughout the regulatory lifecycle, offering strategic advice and operational execution for clinical trials and product submissions.",
        },
        {
          title: "Legal EU Representation",
          description:
            "For non-EU sponsors, we are able to act as your EU legal representative, managing official communications and ensuring compliance with European regulations.",
        },
        {
          title: "Regulatory Submission and Communication",
          description:
            "We prepare and submit regulatory documentation to local Ethics Committees, Competent Authorities, and Notified Bodies, and manage all related correspondence to ensure clarity, consistency, and swift responses.",
        },
        {
          title: "Ethics Committee Tracking and Communication",
          description:
            "We handle submissions to Ethics Committees, monitor approval timelines, respond to queries, and ensure that ethical oversight is integrated seamlessly into the trial workflow.",
        },
        {
          title: "Competent Authority (CA) Audit Support",
          description:
            "Our team supports you in preparation for audits and inspections by Competent Authorities. We help ensure documentation, processes, and personnel are fully prepared and audit-ready.",
        },
        {
          title: "Adverse Event (AE) Reporting and Follow-up",
          description:
            "We manage adverse event reporting and follow-up procedures in compliance with regulatory requirements, ensuring timely submissions and complete documentation for safety oversight.",
        },
      ],
    },
  ];

  const capabilities = [
    "Clinical Study Management",
    "Regulatory Support",
    "Legal EU Representation",
    "Documentation and Records Management",
    "Data Management",
    "CE Marking and Commercialization Support",
  ];

  return (
    <div className="space-y-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <p className="text-xl max-w-4xl mx-auto">
            With our network of physicians, we are two phone calls away from any
            physician in Poland, three from any in the rest of the EU
          </p>
        </div>
      </section>

      {/* Bridge Medical Core Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-center mb-6">
              Bridge Medical
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Our core services include:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Investigator identification, recruitment, and site engagement",
                "Legal and regulatory consulting tailored to each market",
                "Study submission, communication, and follow-up",
                "Data transfer and EU representation",
                "Clinical study staffing and day-to-day management",
                "Trial Master File setup and maintenance",
                "Clinical database development and management",
                "Legal representation, CE marking submission and management",
              ].map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Service Categories - Detailed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {serviceCategories.map((category) => (
            <Card
              key={category.id}
              className={`overflow-hidden cursor-pointer border-5 border-primary/40 ${
                expandedSection === category.id
                  ? "shadow-xl border-primary"
                  : "shadow-sm"
              }`}
              onClick={() => toggleSection(category.id)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  toggleSection(category.id);
                }
              }}
              aria-expanded={expandedSection === category.id}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">
                        {category.title}
                      </CardTitle>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-4 flex-shrink-0 pointer-events-none"
                    tabIndex={-1}
                  >
                    {expandedSection === category.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </Button>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </CardHeader>

              {expandedSection === category.id && (
                <CardContent className="pt-0 bg-primary/5 rounded-b-lg">
                  <div className="space-y-6">
                    {category.services.map((service, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-primary pl-6 py-2 bg-white rounded shadow-sm"
                      >
                        <h4 className="font-semibold text-foreground mb-2">
                          {service.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Core Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive suite of services designed to support your
              success in European markets.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {capabilities.map((capability, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm py-2 px-4"
              >
                {capability}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Network Advantage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-accent border-primary/20">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Extensive Professional Network
              </h3>
              <p className="text-muted-foreground mb-6">
                Our operations are based strongly on our relationships with
                professionals across Europe. This network includes physicians,
                reimbursement specialists, and clinical research professionals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Key Opinion Leaders
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Access to leading medical experts across specialties
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Country Consultants
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Government appointed Professors and KOLs
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Specialists
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Cardiologists, Orthopedics, Wound Care, Diabetes, and more
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Medical Specialties */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Medical Specialties
          </h3>
          <p className="text-muted-foreground">
            Our team includes MDs and engineers with extensive experience across
            multiple medical specialties.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            "Anesthesiology",
            "Cardiology",
            "General Surgery",
            "Pharmacology",
            "Urology",
            "Orthopedics",
            "Wound Care",
            "Diabetes",
            "Clinical Research",
          ].map((specialty, index) => (
            <div
              key={index}
              className="text-center p-4 bg-card rounded-lg border hover:shadow-md transition-shadow"
            >
              <p className="font-medium text-foreground">{specialty}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
