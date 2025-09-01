import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function FAQPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const faqs = [
    {
      category: "Clinical Trials Basics",
      questions: [
        {
          question: "What are clinical trials?",
          answer:
            'Clinical trials are structured scientific studies designed to evaluate the safety, effectiveness, and overall performance of new medical treatments, diagnostic procedures, medical devices, or lifestyle interventions—such as changes in diet or physical activity. Their primary goal is to determine whether a particular solution can improve health outcomes or help prevent diseases.\n\nParticipation in clinical trials is entirely voluntary. Individuals who take part are often referred to as "participants", "subjects" or "volunteers". Each trial follows strict ethical and regulatory standards and is conducted by qualified professionals, including physicians, nurses, and representatives of Contract Research Organizations (CROs).\n\nIn the case of medical devices, clinical trials are a critical step in the regulatory approval process. They provide essential evidence to demonstrate that the device performs as intended and is safe for use in real-world conditions.',
        },
        {
          question: "What are the phases of clinical trials?",
          answer:
            "Clinical trials are typically conducted in a series of phases, each designed to answer specific research questions and build a comprehensive understanding of a product's safety, performance, and effectiveness. While the overall structure of these phases is similar for pharmaceuticals and medical devices, certain aspects—such as the endpoints, evaluation methods, and regulatory requirements—can differ.\n\n• Phase I: In this initial phase, a new drug, medical device, or other intervention is tested in a small group of participants (usually 20 to 80). The primary goals are to assess safety, understand how the product behaves in the human body (e.g. absorption, interaction, mechanical performance), and identify any early side effects. For medical devices, this may also include first-in-human (FIH) studies that focus on device usability, tolerability, and basic functionality in a controlled clinical setting.\n\n• Phase II: This phase involves a larger group of participants (typically 100 to 300) and aims to further evaluate the treatment's safety and begin assessing its effectiveness. In the case of medical devices, the focus is often on performance outcomes and device optimization, confirming that the device functions as intended in the target population.\n\n• Phase III: These trials are expanded to include a broader patient population (often 1,000 to 3,000 individuals or more) and are designed to compare the new treatment or device against existing standards of care or placebo controls. The goal is to provide robust data on safety, clinical efficacy (or performance for devices), and overall benefit-risk ratio. For medical devices, Phase III may also involve multicenter studies to assess consistency across various healthcare environments.\n\n• Phase IV: Conducted after regulatory approval and market launch, Phase IV trials—also known as post-market clinical follow-up (PMCF) for medical devices—are used to gather long-term data on real-world use. These studies monitor safety, identify rare or long-term adverse events, evaluate user experience, and confirm that the device continues to perform as expected under routine clinical conditions.",
        },
        {
          question: "What is a protocol?",
          answer:
            "A protocol is the foundational document of a clinical trial—it serves as a comprehensive, pre-defined plan that outlines every aspect of how the study will be conducted. It is developed by clinical researchers and reviewed by regulatory authorities and ethics committees to ensure that the study is scientifically sound and ethically responsible. The protocol is designed not only to answer specific research questions but also to protect the rights, safety, and well-being of the participants throughout the course of the trial.\n\nKey elements typically included in a clinical trial protocol are:\n• Objectives of the study, including the primary and secondary endpoints being measured\n• Eligibility criteria, specifying who can or cannot participate based on factors such as age, health status, medical history, or diagnosis\n• Detailed study procedures, such as the schedule of clinical visits, types of medical tests or assessments, interventions being tested (e.g., drugs, medical devices, or behavioral strategies), and dosage regimens\n• Monitoring and safety measures, including how adverse events will be recorded, reported, and managed\n• Statistical methods used to analyze the data and determine whether the research questions are answered reliably\n• Study duration and estimated timelines for recruitment, treatment, follow-up, and analysis\n\nIn the case of medical device trials, the protocol may also include technical specifications of the device, instructions for use, training requirements for clinical staff, and performance metrics tailored to the device's intended function.\n\nOverall, the protocol acts as a roadmap for all stakeholders involved in the trial—from investigators and coordinators to regulatory bodies—ensuring consistency, compliance, and high-quality data collection across all study sites.",
        },
        {
          question: "What are eligibility criteria?",
          answer:
            "Eligibility criteria are the predefined rules that determine who can—and who cannot—take part in a clinical trial. These criteria, often divided into inclusion and exclusion criteria, are essential for ensuring the scientific validity of the study and protecting the safety of participants.\n\nInclusion criteria specify the characteristics that a participant must have to be eligible for the study such as a specific diagnosis, age range, or health status. Exclusion criteria, on the other hand, list the conditions or factors that would prevent someone from participating such as certain coexisting medical conditions, medications, or prior treatments that could interfere with the study outcomes or pose additional risks.\n\nEligibility criteria are based on a variety of factors, including:\n• Age and gender\n• Type and stage of the disease or condition being studied\n• Overall health and medical history\n• Previous or ongoing treatments\n• Presence of other health conditions or risk factors\n• Lifestyle considerations (e.g. smoking, alcohol use, pregnancy)\n\nThese rules help researchers define a consistent and appropriate patient population so that the data collected is reliable and relevant. At the same time, they help minimize potential risks to participants by ensuring that only those for whom the intervention is considered safe and appropriate are enrolled. In the case of medical device trials, eligibility criteria may also account for anatomical or functional factors that relate specifically to the device's intended use (e.g. implant size compatibility or mobility levels for rehabilitation devices).\n\nIt's important to note that not everyone who applies to participate in a clinical trial will qualify, even if they are motivated and willing. This is not a reflection of personal health, but rather a necessary part of responsible study design.",
        },
      ],
    },
    {
      category: "Medical Device Classification & Planning",
      questions: [
        {
          question: "Does my product qualify as a medical device?",
          answer:
            "To determine if your product qualifies as a medical device, refer to the definition under the EU Medical Device Regulation (MDR 2017/745). A medical device is defined as a product intended by the manufacturer to be used for medical purposes, such as diagnosis, monitoring, treatment, or prevention of disease or injury. It is crucial to formally declare the intended purpose and analyze the mechanism of action.",
        },
        {
          question: "How do I determine the risk class of my medical device?",
          answer:
            "Determining the correct risk class of your medical device is a critical first step in planning your regulatory and clinical strategy. The risk classification dictates the level of clinical evidence required, the conformity assessment route, and whether a clinical investigation is necessary. Risk classification in the European Union is governed by Annex VIII of the Medical Device Regulation (MDR 2017/745).\n\nSeveral factors influence the classification:\n\n• Site of use\nDevices used externally (e.g., thermometers, bandages) tend to be lower risk. Devices used internally (e.g., catheters, surgical tools) or implantable (e.g., pacemakers, orthopedic implants) generally fall into higher risk classes due to potential for harm if they fail.\n\n• Duration of use\nTransient: Normally intended for continuous use for less than 60 minutes. Short-term: Intended for continuous use of between 60 minutes and 30 days. Long-term: Intended for continuous use for more than 30 days. Longer use typically increases risk, especially for implantable or invasive devices.\n\n• Degree of invasiveness / interaction with the human body\nDevices that interact with critical body systems (e.g., central circulatory system, central nervous system) are classified higher. Non-invasive devices (e.g., those that do not penetrate the body or contact mucous membranes) are often lower risk.\n\n• Intended purpose\nDevices intended for diagnosis, monitoring, treatment, surgical support, or life support are classified according to the potential impact on patient safety and clinical condition. Devices used to prevent disease or compensate for injury/disability also follow stricter classification criteria.\n\n• Level of risk to the patient and user\nDevices that could cause serious harm or death in case of failure are placed in Class III. Risk is evaluated not just based on probability, but also severity of potential outcomes.\n\nRisk classification levels under MDR:\nClass I – Low risk (e.g., surgical gloves, bandages, stethoscopes)\nClass IIa – Medium risk (e.g., dental fillings, hearing aids)\nClass IIb – Higher risk (e.g., ventilators, infusion pumps)\nClass III – Highest risk (e.g., heart valves, deep brain stimulators)\n\nPractical steps to determine your device class:\nDefine the intended purpose as clearly as possible in writing. Review the classification rules in MDR Annex VIII (22 rules in total). Identify which rules apply based on your device's characteristics and use. If multiple rules apply, always assign the highest applicable class. When in doubt, consult with a regulatory expert or a notified body.\n\nCorrect classification is essential for planning your conformity assessment, required documentation, and clinical investigation strategy. Misclassification can lead to regulatory delays or product recalls.",
        },
        {
          question:
            "Where should I start when planning a clinical investigation?",
          answer:
            "Key steps include:\n• Assessing clinical and user needs\n• Defining hypotheses and study objectives\n• Developing the Clinical Investigation Plan (CIP)\n• Selecting sites and investigators\n• Reviewing regulatory requirements for each country\n• Consulting regulatory and clinical experts\n• Preparing a timeline and budget\n• Initiating regulatory submissions",
        },
      ],
    },
    {
      category: "Documentation & Approvals",
      questions: [
        {
          question:
            "What approvals and documents are required before starting a clinical investigation?",
          answer:
            "You will need:\n\n• Approval from an Ethics Committee (EC)\n• Notification or approval from the Competent Authority (e.g., URPL in Poland)\n• Liability insurance policy\n• Tripartite agreements with sites and investigators\n• Technical documentation of the device\n• Patient-facing documents: informed consent forms, leaflets, questionnaires\n• Registration in EUDAMED or other public databases",
        },
        {
          question: "What is a Clinical Investigation Plan (CIP)?",
          answer:
            "A Clinical Investigation Plan (CIP) is the foundational document for any clinical investigation involving a medical device. It outlines all critical aspects of the planned study and ensures consistency, transparency, and regulatory compliance throughout the investigation. A well-developed CIP serves as a roadmap for investigators, sponsors, monitors, and regulators.\n\nA complete CIP should include:\n\n• Scientific background and study rationale: Describes the medical need, theoretical basis, and evidence supporting the investigation. Justifies why the study is necessary and what gaps in knowledge it aims to address.\n• Detailed study design: Specifies the type of study (e.g., prospective, randomized, blinded), number of arms or cohorts, control group strategy (if applicable), and overall methodology.\n• Inclusion and exclusion criteria: Clearly defines which subjects are eligible to participate in the study and which are not, based on clinical, demographic, or safety factors.\n• Description of study procedures: Outlines all assessments, interventions, follow-up visits, device usage steps, and data collection methods. Ensures standardization across all study sites.\n• Defined endpoints: States the primary and secondary endpoints, explaining how clinical performance and safety will be measured. These should be measurable, specific, and clinically meaningful.\n• Statistical analysis plan: Provides the statistical methods for evaluating study outcomes, including sample size calculation, interim analysis (if planned), and criteria for statistical significance.\n• Data management and safety monitoring plans: Details how data will be recorded, stored, validated, and protected, along with procedures for monitoring patient safety (e.g., handling of adverse events).\n• Monitoring and audit strategy: Describes how the study will be monitored (e.g., frequency and type of site visits) and how compliance with the CIP and regulations will be verified. May also define the role of external audits.\n\nThe CIP must be version-controlled and approved before study initiation. It is often reviewed by Ethics Committees and Competent Authorities as part of the regulatory approval process.",
        },
        {
          question:
            "What is the Investigator's Brochure (IB), and do I need one?",
          answer:
            "Yes, the Investigator's Brochure (IB) is a vital document required for any clinical investigation. It serves as the primary source of technical and safety information for investigators and study personnel. The IB contains a detailed description of the medical device, including its design, intended purpose, mode of action, preclinical testing results, and known or potential risks. It also includes detailed instructions for use and safety precautions. The document helps ensure that all investigators operate with the same level of understanding and that patient safety is consistently maintained across study sites. The IB must be reviewed and updated throughout the study as new data emerge.",
        },
        {
          question:
            "What are the insurance requirements for a clinical investigation?",
          answer:
            "Liability insurance is a legal and ethical requirement in most countries for any clinical investigation involving human subjects. It provides financial protection in case the investigational device or study procedures result in harm to a participant. The insurance must typically cover the sponsor, investigators, and clinical sites for the full duration of the study, and in many jurisdictions, a minimum level of coverage is prescribed by law. Some countries also require that the insurance be provided by a company licensed in that country. The policy must be submitted as part of the Ethics Committee and Competent Authority approval processes. Failing to secure adequate insurance can delay study initiation or even prevent approval altogether.",
        },
      ],
    },
    {
      category: "Study Management & Operations",
      questions: [
        {
          question:
            "What are the benefits of working with a CRO (Contract Research Organization)?",
          answer:
            "While not legally required, engaging a CRO can significantly improve the efficiency, quality, and compliance of your clinical investigation. CROs specialize in managing the operational, regulatory, and scientific aspects of clinical research. Their involvement offers several key advantages:\n\n• Regulatory expertise: CROs have in-depth knowledge of national and international regulations (e.g. MDR, ISO 14155, FDA), which helps avoid delays and ensures proper documentation and approvals.\n• Time and resource efficiency: Delegating complex tasks—such as regulatory submissions, study monitoring, data management, and safety reporting—frees the sponsor to focus on product development and strategic decisions.\n• Access to qualified investigators and sites: CROs often have established relationships with research centers and experienced investigators, which can accelerate site selection and patient recruitment.\n• Standardized processes and tools: Professional CROs work with validated systems for electronic data capture (EDC), trial master files (TMF), and adverse event reporting, reducing errors and improving traceability.\n• Quality assurance and compliance monitoring: CROs provide independent oversight, including monitoring visits and audit support, ensuring adherence to the protocol, Good Clinical Practice (GCP), and applicable laws.\n• Risk mitigation: Through project planning, forecasting, and continuous oversight, CROs help identify and mitigate potential issues before they escalate.\n• Scalability for multicenter or international studies: An experienced CRO can manage global logistics, translations, and local submissions, making multinational trials feasible even for small sponsors.\n\nFor sponsors with limited clinical research experience or internal resources, partnering with a CRO can significantly increase the chances of a successful and timely investigation.",
        },
        {
          question: "Can I run a multi-center or international study?",
          answer:
            "Yes, you can — and in many cases, multi-center or international studies are essential for collecting robust, generalizable clinical evidence. However, these types of investigations come with increased complexity in terms of planning, execution, and regulatory compliance. To succeed, you must ensure alignment across all participating countries and sites.\n\nKey considerations for multi-center or international clinical investigations:\n• Harmonized protocol across sites: The Clinical Investigation Plan (CIP) must be consistent across all locations. All investigators must follow the same study design, procedures, inclusion/exclusion criteria, and endpoints. Any deviation across sites could compromise data comparability and the scientific validity of your results.\n• Translation and localization of documents: All patient-facing documents (e.g., Informed Consent Forms, instructions for use, patient diaries) and often investigator documents must be professionally translated into the local languages. Some countries also require validation of these translations or certified back-translations.\n\nCommonly translated materials include: CIP synopsis, Informed Consent Forms, Patient Information Leaflets, Adverse event reporting forms\n\n• Submissions to each country's Competent Authority and Ethics Committee: Each country has its own regulatory and ethical approval process. You must: Submit your documentation to the Competent Authority (e.g., BfArM in Germany, ANSM in France, URPL in Poland). Obtain approval from local or national Ethics Committees in each jurisdiction. Address country-specific requirements (e.g., post-approval reporting, fees, insurance coverage levels).\n• Data privacy and GDPR compliance: If the investigation involves the EU or other jurisdictions with strict data privacy rules, ensure full GDPR compliance, including: Patient consent forms with proper data use statements, Data anonymization or pseudonymization procedures, Data transfer agreements for cross-border sharing\n• Site contracts and legal representation: You'll need to establish contracts with each participating site, often governed by local law. In many EU countries, non-EU sponsors are required to appoint a Legal Representative within the EU for regulatory responsibility.\n• Coordinated operational and logistical planning: Managing logistics across countries involves: Shipping and customs clearance of investigational devices, Training investigators across languages and cultures, Coordinating monitoring visits and data collection across time zones, Standardizing data management systems and procedures across sites\n\n• Strong recommendation: Collaborate with an international CRO: An experienced international Contract Research Organization (CRO) can be a gamechanger. They: Navigate local regulatory landscapes, Handle translations and submissions, Coordinate monitoring and reporting activities, Ensure harmonization across all centers, Reduce the burden on your internal team",
        },
        {
          question:
            "What data must be collected during the clinical investigation?",
          answer:
            "Depending on the study objectives, typically:\n• Adverse events (AEs, SAEs)\n• Efficacy endpoints\n• Functional and usability assessments\n• Subjective feedback from patients and investigators\n• Device monitoring data (if applicable)",
        },
        {
          question: "Can I modify my device or protocol during the study?",
          answer:
            "Yes, but with significant restrictions. If any substantial modification is made to the device, its intended use, or the clinical protocol during the study, the change must be formally documented, assessed for its impact on patient safety and data integrity, and submitted for review and approval by both the Ethics Committee and the Competent Authority. Examples of substantial modifications include changes to inclusion/exclusion criteria, endpoints, dosage or delivery mechanism, or major updates to device software or hardware. Minor administrative changes may not require formal notification, but each case must be evaluated individually. It's essential to have a robust change control process in place to manage and track all modifications.",
        },
      ],
    },
    {
      category: "Regulatory & Compliance",
      questions: [
        {
          question:
            "Do I need CE marking before starting a clinical investigation?",
          answer:
            'No. Clinical investigations can be conducted on prototypes or non-CE-marked devices if the goal is to collect clinical data for CE certification. However, the product must be clearly labeled as "for investigational use only" and comply with safety requirements.',
        },
        {
          question:
            "What is the difference between a clinical investigation and a clinical evaluation?",
          answer:
            'While often used interchangeably in casual discussion, "clinical investigation" and "clinical evaluation" refer to distinct regulatory processes. A clinical investigation is a prospective study involving human subjects, conducted under a predefined protocol, with the goal of generating new clinical data on the safety or performance of a medical device. This is often needed when no sufficient clinical evidence exists for a particular device or indication.\n\nIn contrast, a clinical evaluation is a broader, ongoing assessment process in which all available clinical data, including data from literature, equivalent devices, past investigations, and post-market surveillance, is systematically analyzed to demonstrate that the device performs as intended and is safe for its intended purpose. Every medical device must undergo a clinical evaluation to support CE marking, but not every device requires a new clinical investigation if sufficient evidence can be drawn from existing data sources.',
        },
        {
          question:
            "Do I need a Unique Device Identifier (UDI) before conducting a clinical investigation?",
          answer:
            'Devices used solely for clinical investigations are generally exempt from having a Unique Device Identifier (UDI) under MDR. However, this does not mean that device traceability is optional. Investigational devices must still be clearly identified by name, model, lot or serial number, and labeled with a statement such as "For Clinical Investigation Use Only." These details must also be captured in the clinical investigation documentation and labeling. While UDI assignment is not required at this stage, it will become mandatory once the device is CE-marked and enters the commercial market, so sponsors are encouraged to plan UDI strategies in advance, especially if transitioning from investigational use to commercialization.',
        },
        {
          question: "How do I prepare for inspections or audits?",
          answer:
            "Regulatory authorities may conduct inspections or audits at any time during or after a clinical investigation. To prepare, sponsors must ensure that a complete and up-to-date Trial Master File (TMF) is maintained, containing all essential documents such as the protocol, consent forms, monitoring reports, deviation logs, correspondence, and version-controlled study materials. Investigators and study personnel should be trained and available to explain study procedures and roles. All deviations from the protocol must be well-documented and justified. A proactive quality assurance (QA) approach, including internal audits and periodic TMF reviews, can ensure that the study is always inspection-ready and compliant with Good Clinical Practice (GCP) and ISO 14155.",
        },
        {
          question:
            "When should I involve regulatory experts in the development process?",
          answer:
            "Regulatory experts should be involved as early as possible. Ideally during the conceptual and prototyping phase of device development. Their role at this stage is not only to help classify the device appropriately under MDR or FDA regulations but also to guide strategic decisions related to design validation, biocompatibility testing, and risk management documentation. Early consultation with a regulatory advisor reduces the likelihood of late-stage compliance issues, ensures alignment with required standards, and can significantly shorten the pathway to clinical trials and CE/FDA approval. In many cases, this early collaboration also helps define the scope and objectives of the clinical investigation itself, avoiding delays and unnecessary rework later in the project.",
        },
      ],
    },
    {
      category: "Timeline & Budget",
      questions: [
        {
          question:
            "What are the typical costs involved in a clinical investigation?",
          answer:
            "Cost categories include:\n• Documentation and regulatory consulting\n• Ethics and authority submission fees\n• Clinical investigation liability insurance\n• Site and investigator fees\n• CRO services and monitoring\n• Data management and statistical analysis\n• Device production or customization\n• Final reports and publications\n\nTotal budgets can range from tens of thousands to several hundred thousand euros.",
        },
        {
          question: "How long does it take to launch a clinical investigation?",
          answer:
            "The preparation and approval phase can take 6–18 months, covering:\n• Concept development\n• Document preparation\n• Approvals from authorities and ethics committees\n• Site initiation\n• First patient enrolment\n\nTimelines can be shortened with experienced partners.",
        },
      ],
    },
    {
      category: "Common Issues & Best Practices",
      questions: [
        {
          question:
            "What are common mistakes in planning clinical investigations?",
          answer:
            "• Underestimating costs and timelines\n• Incorrect classification of the device\n• Incomplete documentation\n• Lack of clinical trial management experience\n• Inadequate preparation of the investigational device\n• Missing or insufficient insurance coverage",
        },
        {
          question: "What happens after the study ends?",
          answer:
            "At the conclusion of the clinical investigation, the sponsor is responsible for compiling a Final Clinical Investigation Report, which should summarize the methodology, results, safety observations, deviations, and conclusions in a clear and structured format. This report must be compliant with ISO 14155 standards and integrated into the overall clinical evaluation of the device. All essential documents must be archived securely for a minimum of 10 years, as required by MDR. Additionally, sponsors are encouraged and, in some cases, required to publish or register the study results in public databases. Transparent reporting is not only a regulatory expectation but also enhances scientific credibility and supports future market access strategies.",
        },
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
            Frequently Asked Questions
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive answers to questions about clinical investigations and
            medical device research
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center bg-muted py-3 px-6 rounded-lg">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const uniqueId = `${categoryIndex}-${faqIndex}`;
                  return (
                    <Card key={uniqueId} className="overflow-hidden">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg pr-4">
                            {faq.question}
                          </CardTitle>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleFAQ(uniqueId)}
                            className="flex-shrink-0"
                          >
                            {expandedFAQ === uniqueId ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </Button>
                        </div>
                      </CardHeader>

                      {expandedFAQ === uniqueId && (
                        <CardContent className="pt-0">
                          <div className="border-l-4 border-primary/20 pl-6">
                            <div className="text-muted-foreground leading-relaxed">
                              {faq.answer
                                .split("\n\n")
                                .map((paragraph, pIndex) => (
                                  <p key={pIndex} className="mb-4 last:mb-0">
                                    {paragraph}
                                  </p>
                                ))}
                            </div>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-muted py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our team of clinical research experts is here to help. Contact
                us for personalized answers to your specific clinical
                investigation questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Our Team
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
