import { useState } from "react";
import {
  MapPin,
  Users,
  Globe,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";

import PaulBarrattImg from "../assets/PaulBarratt.png";
import JoannaMietenImg from "../assets/JoannaMieten.png";
import BeataDrzewieckaImg from "../assets/BeataDrzewiecka1.png";
export function AboutPage() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const toggleMember = (memberId: string) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  const teamMembers = [
    {
      id: "paul",
      name: "Paul Barratt",
      title: "CEO of Bridge Medical and Founding Partner of The VICR Group",
      initials: "PB",
      bio: `Paul brings over 25 years of experience in engineering project management and clinical research, with expertise spanning multiple medical fields, including cardiology, urology, general surgery, neurology, and neurostimulation. After relocating to Warsaw in 2006, he leveraged his international background and strong connections within the Polish medical community to establish Bridge Medical and co-found the VICR Group.

Earlier in his career, Paul played a pivotal role in the launch of Application Engineering at the General Electric R&D Center in Warsaw. There, he focused on enhancing cross-border collaboration between teams in the United States, Italy, and Poland, while promoting the Warsaw office's capabilities within GE's global innovation framework.

Paul is the holder of five patents related to cardiac implants and minimally invasive surgical devices. His academic contributions include publications in the fields of biophysics and aerospace mechanics. In addition to his work with Bridge Medical, Paul serves as a strategic advisor in MedTech and BioTech for the Anderton Venture Capital Group.

He holds a Master of Science degree in Mechanical and Biomedical Engineering from the University of Minnesota, as well as an MBA jointly awarded by the University of Quebec in Montreal and the Warsaw School of Economics. He is also a licensed Professional Engineer (PE) in the State of Minnesota.`,
    },
    {
      id: "joanna",
      name: "Joanna Mieteń",
      title: "Research Manager, Principal Consultant",
      initials: "JM",
      bio: `Joanna holds a Ph.D. in Biotechnology and has over 7 years of experience in non-clinical research and innovation management. Her professional background includes successful collaborations with public institutions—such as Warsaw University of Technology, Mossakowski Medical Research Institute, National Institute of Public Health - National Institute of Hygiene, Cardinal Stefan Wyszynski Institute of Cardiology, as well as hospitals and private companies operating in the field of medical research and development. Team leader of Scienceporium, two-time winner of the "Engineers for Medicine" award in the diagnostics of infectious diseases.

She specializes in the design, coordination, and implementation of medical experiments, with a strong focus on clinical trials of medical devices. Her work bridges the gap between scientific approach and practical application, ensuring that innovative technologies meet both regulatory requirements and real-world clinical needs. With a keen understanding of both academic and industrial environments, she brings a strategic perspective to multidisciplinary projects and supports clients throughout the entire product development lifecycle.`,
    },
    {
      id: "beata",
      name: "Beata Drzewiecka",
      title: "Project Manager, Consultant",
      initials: "BD",
      bio: `Beata holds a Master of Science in Biotechnology and is currently pursuing a Ph.D. in Veterinary Science. Her professional focus lies in the management of clinical research projects, with particular emphasis on regulatory compliance, transparent communication, and efficient project coordination across all phases—from concept to final reporting. She has over four years of experience working with research and development projects, both in academic and industry settings.

She has extensive experience in academic research and is actively involved in the biomedical, veterinary, and biomaterials communities. Her scientific work includes the authorship of peer-reviewed publications and ongoing contributions to interdisciplinary research initiatives.

Beata has participated in international research programs and completed internships at the University of Barcelona and the Polytechnic University of Catalonia, where she deepened her expertise in translational science and biomedical innovation. She collaborates with both public institutions and private R&D-driven companies, supporting the development of novel medical technologies, particularly in the area of medical devices.

Her approach is grounded in precision, collaboration, and scientific integrity, with a clear commitment to advancing therapies that address real clinical needs.`,
    },
    {
      id: "marek",
      name: "Marek Sawicki MD",
      title: "CEO & Medical Director at Global Medical Services Polska (GMS)",
      initials: "MS",
      bio: `Marek has 27 years of experience in clinical research services in the areas including: Cardiology, Cardio Surgery, Oncology, Vascular Surgery, Psychiatry, Endocrinology, Infection Diseases, Neurology, Dermatology, Nephrology, Gastroenterology. He also has clinical research experience in medical device trials in areas including Vascular Surgery, Cardiology, Neurology, Ophthalmology, Oncology.

Marek gained his professional clinical research experience at CRO and Pharma industry working for: P&G Pharmaceuticals/UK, IMFORM/Germany, Premier Research Group/UK, Medifacts/US, GRS/US, Theravance/US, and GMS Poland holding the position of CEO and MD. He published several articles in area of cardiology during gaining medical experience at National Institute of Cardiology in Warsaw.

Marek received an MD from Warsaw Medical University, following 1st and 2nd degrees in internal medicine and 2nd degree in cardiology, and has 23 years of experience as MD and cardiologist. During his physician work, Marek was involved as investigator in many clinical trials in the field of Cardiology.`,
    },
  ];

  const specialties = [
    "Anesthesiology",
    "Cardiology",
    "General Surgery",
    "Pharmacology",
    "Urology",
    "Orthopedics",
    "Wound Care",
    "Diabetes",
    "Clinical Research",
    "Neurology",
    "Neurostimulation",
    "Medical Devices",
  ];

  return (
    <div className="space-y-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet the team dedicated to advancing clinical research and medical
            innovation.
          </p>
        </div>
      </section>
      {/* About Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Mission and Vision
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Based in Warsaw, Poland, with an active presence across Central
                Europe, we are a full-service Clinical Research Organization
                (CRO) uniquely positioned to support your clinical development
                strategy across Central and Eastern Europe. Our in-depth
                regional insight, combined with international quality standards,
                makes us the ideal partner for companies looking to expand or
                optimize their clinical operations in Europe.
              </p>
              <p>
                We believe that the success of a clinical trial depends on more
                than just protocol execution. It requires precision, agility,
                and deep knowledge of local regulatory landscapes. That's
                exactly what we bring to the table. With a dedicated team of
                experts and a proven track record in clinical submissions,
                regulatory navigation, and operational management, we provide
                customized solutions that accelerate your timelines, reduce
                risk, and ensure data integrity every step of the way.
              </p>
            </div>
          </div>

          <Card className="border-primary/20">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold text-foreground mb-4">
                What Sets Us Apart
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're planning a single-country Phase I study or a
                multi-site Phase III trial, we deliver seamless coordination and
                responsive support, acting as a true extension of your team.
              </p>
              <p className="text-muted-foreground italic">
                Long-distance relationships can be complex. With us, you'll feel
                like we're just one office away.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Our Team Section */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Meet our team
            </h2>
            <p className="text-lg text-muted-foreground">
              Our experienced professionals bring decades of expertise in
              clinical research and medical device development
            </p>
          </div>

          <div className="space-y-8">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="overflow-hidden cursor-pointer"
                onClick={() => toggleMember(member.id)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    toggleMember(member.id);
                  }
                }}
                aria-expanded={expandedMember === member.id}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <Avatar className="w-20 h-20 flex items-center justify-center overflow-hidden">
                        {member.id === "paul" ? (
                          <img
                            src={PaulBarrattImg}
                            alt="Paul Barratt"
                            style={{
                              width: "80px",
                              height: "80px",
                              objectFit: "cover",
                              borderRadius: "50%",
                            }}
                          />
                        ) : member.id === "joanna" ? (
                          <img
                            src={JoannaMietenImg}
                            alt="Joanna Mieteń"
                            style={{
                              width: "80px",
                              height: "80px",
                              objectFit: "cover",
                              borderRadius: "50%",
                            }}
                          />
                        ) : member.id === "beata" ? (
                          <img
                            src={BeataDrzewieckaImg}
                            alt="Beata Drzewiecka"
                            style={{
                              width: "80px",
                              height: "80px",
                              objectFit: "cover",
                              borderRadius: "50%",
                            }}
                          />
                        ) : (
                          <AvatarFallback className="text-xl font-bold bg-primary/10 text-primary">
                            {member.initials}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <CardTitle className="text-2xl mb-2">
                          {member.name}
                        </CardTitle>
                        <p className="text-muted-foreground">{member.title}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      // Remove onClick from button, handled by card
                      className="ml-4 flex-shrink-0 pointer-events-none"
                      tabIndex={-1}
                    >
                      {expandedMember === member.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                </CardHeader>

                {expandedMember === member.id && (
                  <CardContent className="pt-0">
                    <div className="border-l-4 border-primary/20 pl-6">
                      {member.bio.split("\n\n").map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-muted-foreground leading-relaxed mb-4"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Area of Operation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Area of Operation
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Bridge Medical, our area of operation goes far beyond
              geography. We combine deep regional insight across Central and
              Eastern Europe with strong therapeutic specialization and hands-on
              clinical expertise. This unique combination allows us to deliver
              clinical trial support that is agile, compliant, and deeply
              aligned with both scientific and regulatory expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our experience spans a wide range of therapeutic areas, with a
              particular focus on medical devices. The Bridge Medical team
              includes clinicians and engineers with backgrounds in
              anesthesiology, cardiology, general surgery, pharmacology, and
              urology, as well as specialists in product development, regulatory
              submissions, and device lifecycle management.
            </p>
          </div>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-primary" />
                <span>Our Commitment</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're launching a first-in-human study or navigating CE
                marking under the MDR, we act as a seamless extension of your
                team, ready to guide, support, and accelerate your clinical
                pathway from concept to market.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Specialties Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Our Therapeutic Specialties
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="text-center p-4 bg-card rounded-lg border hover:shadow-md transition-shadow"
              >
                <p className="font-medium text-foreground">{specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
