import { FlaskConical, Search, Target, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const phases = [
  {
    phase: "Phase I",
    title: "Early Feasibility & Pilot Studies",
    icon: FlaskConical,
    color: "bg-blue-100 text-blue-600",
    description:
      "Initial studies confirm basic safety and functionality of the device in a controlled setting.",
    points: [
      "Laboratory testing (biocompatibility, mechanical properties)",
      "Preclinical studies (animal models or simulations)",
      "First-in-human or pilot clinical studies with a small number of participants",
      "Evaluation of usability, ergonomics, and device handling",
    ],
    note: "Crucial for Class III devices and high-risk technologies before broader trials.",
  },
  {
    phase: "Phase II",
    title: "Exploratory Clinical Investigation",
    icon: Search,
    color: "bg-green-100 text-green-600",
    description:
      "Device is tested in a targeted patient population to evaluate preliminary effectiveness and safety in real-world settings.",
    points: [
      "Identify clinically relevant endpoints",
      "Refine protocols for pivotal trials",
      "Collect feedback from users (clinicians and patients)",
      "Provide essential data for regulatory strategy",
    ],
  },
  {
    phase: "Phase III",
    title: "Pivotal (Confirmatory) Study",
    icon: Target,
    color: "bg-purple-100 text-purple-600",
    description:
      "Main regulatory trial required to support CE marking or market approval.",
    points: [
      "Larger patient population across multiple clinical sites",
      "Comparison with standard care or control solutions",
      "Forms basis of the Clinical Evaluation Report (CER)",
      "Demonstrates clinical benefit under intended use",
    ],
  },
  {
    phase: "Phase IV",
    title: "Post-Market Clinical Follow-Up (PMCF)",
    icon: BarChart3,
    color: "bg-orange-100 text-orange-600",
    description:
      "After approval, manufacturers must collect clinical data to confirm long-term performance and detect rare or delayed adverse effects.",
    points: [
      "Required for Class IIb and III devices",
      "Includes patient registries, observational studies, real-world usage data",
      "Supports continuous improvement and MDR post-market surveillance",
    ],
  },
];

export function PhasesClinicalResearchPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2 text-primary">
          Phases of Clinical Investigations for Medical Devices
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Clinical investigations progress through distinct phases, each
          tailored to the device's development and regulatory needs. Medical
          device studies focus on unique design, goals, and endpoints.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {phases.map((phase, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div
                  className={`w-14 h-14 rounded-lg ${phase.color} flex items-center justify-center flex-shrink-0`}
                >
                  <phase.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge variant="outline" className="text-sm">
                      {phase.phase}
                    </Badge>
                    <CardTitle className="text-xl">{phase.title}</CardTitle>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pl-2">
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                {phase.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
              {phase.note && (
                <div className="mt-4 p-3 bg-orange-50 border-l-4 border-orange-400 rounded">
                  <p className="text-sm text-orange-800 italic">{phase.note}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
