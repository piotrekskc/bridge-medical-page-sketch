import { FlaskConical, Search, Target, BarChart3 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function PhasesClinicalResearchPage() {
  const [expanded, setExpanded] = useState(false);
  const phases = [
    {
      phase: "Phase I",
      title: "Early feasibility and pilot studies",
      icon: FlaskConical,
      color: "bg-blue-100 text-blue-600",
      description:
        "This initial phase focuses on confirming the basic safety and functionality of the device in a controlled setting.",
      points: [
        "Laboratory testing (e.g., biocompatibility, mechanical properties)",
        "Preclinical studies (animal models or simulations)",
        "First-in-human or pilot clinical studies with a small number of participants",
        "Evaluation of usability, ergonomics, and device handling",
      ],
      note: "These studies are crucial for Class III devices and high-risk technologies before moving into broader trials.",
    },
    {
      phase: "Phase II",
      title: "Exploratory clinical investigation",
      icon: Search,
      color: "bg-green-100 text-green-600",
      description:
        "In this phase, the device is tested in a targeted patient population to evaluate its preliminary effectiveness and safety in real-world clinical settings.",
      points: [
        "Designed to identify clinically relevant endpoints",
        "Helps refine protocols for pivotal trials",
        "Collects feedback from users (clinicians and patients)",
        "Provides essential data to support regulatory strategy",
      ],
    },
    {
      phase: "Phase III",
      title: "Pivotal (confirmatory) study",
      icon: Target,
      color: "bg-purple-100 text-purple-600",
      description:
        "Phase III represents the main regulatory trial required to support CE marking or market approval.",
      points: [
        "Involves a larger patient population across multiple clinical sites",
        "Compares the new device with standard care or control solutions",
        "Data from this phase forms the basis of the Clinical Evaluation Report (CER)",
        "Demonstrates clinical benefit under intended conditions of use",
      ],
    },
    {
      phase: "Phase IV",
      title: "Post-market clinical follow-up (PMCF)",
      icon: BarChart3,
      color: "bg-orange-100 text-orange-600",
      description:
        "Once the device is approved and on the market, manufacturers must continue collecting clinical data to confirm long-term performance and detect any rare or delayed adverse effects.",
      points: [
        "Required especially for Class IIb and III devices",
        "Can include patient registries, observational studies, real-world usage data",
        "Supports continuous improvement and compliance with MDR's post-market surveillance requirements",
      ],
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Phases of Clinical Investigations for Medical Devices
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Clinical investigations can be divided into several stages,
            depending on the development phase of the device and its regulatory
            needs. While they share some similarities with pharmaceutical
            trials, the design, goals, and endpoints are typically adapted for
            the specific nature of the medical device.
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-16 h-16 rounded-lg ${phase.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <phase.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge variant="outline" className="text-sm">
                          {phase.phase}
                        </Badge>
                        <CardTitle className="text-2xl">
                          {phase.title}
                        </CardTitle>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pl-20">
                  <div className="space-y-3">
                    {phase.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                  {phase.note && (
                    <div className="mt-4 p-4 bg-orange-50 border-l-4 border-orange-400 rounded">
                      <p className="text-sm text-orange-800 italic">
                        {phase.note}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
