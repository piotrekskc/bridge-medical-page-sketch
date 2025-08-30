import { CheckCircle, FileText, Database, Globe, Shield, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function ServicesPage() {
  const serviceCategories = [
    {
      icon: Users,
      title: "Trial Management",
      color: "bg-blue-100 text-blue-600",
      services: [
        "Center Selection Through Start Up",
        "Site Management and Communication", 
        "Monitoring: On Site and Remote",
        "Product Accountability",
        "Procedural Support"
      ]
    },
    {
      icon: Database,
      title: "Data Management",
      color: "bg-green-100 text-green-600",
      services: [
        "Data Collection and Entry",
        "Data and File Management",
        "Secure File Server",
        "Study Document tracking and Revision Control",
        "Database development and support"
      ]
    },
    {
      icon: Shield,
      title: "CE Marking and Commercialization Support",
      color: "bg-purple-100 text-purple-600",
      services: [
        "Notified Body Communication and Planning",
        "Commercialization Support",
        "Reimbursement",
        "Product Registration",
        "User Communication and Recruitment"
      ]
    },
    {
      icon: FileText,
      title: "Trial Material and Records",
      color: "bg-orange-100 text-orange-600",
      services: [
        "Study design",
        "Protocol and Informed Consent Development",
        "Site Selection and Qualification",
        "Trial Master File Management",
        "Study Report Development",
        "Publication Management"
      ]
    },
    {
      icon: Globe,
      title: "Regulatory Support",
      color: "bg-red-100 text-red-600",
      services: [
        "Legal EU Representation",
        "Regulatory Submission and Communication",
        "Ethics Committee Tracking and Communication",
        "CA Audit Support",
        "EU Representation",
        "AE Reporting and Follow-up"
      ]
    }
  ];

  const capabilities = [
    "Clinical Study Management",
    "Regulatory Support", 
    "Legal EU Representation",
    "Documentation and Records Management",
    "Data Management",
    "CE Marking and Commercialization Support"
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          With our network of physicians, we are two phone calls away from any physician in Poland, 
          three from any in the rest of the EU. We provide comprehensive support across all aspects 
          of medical device development and market entry.
        </p>
      </section>

      {/* Service Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
            <p className="text-lg text-gray-600">
              Our comprehensive suite of services designed to support your success in European markets.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {capabilities.map((capability, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {capability}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Network Advantage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Extensive Professional Network
              </h3>
              <p className="text-blue-800 mb-6">
                Our operations are based strongly on our relationships with professionals across Europe. 
                This network includes physicians, reimbursement specialists, and clinical research professionals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Key Opinion Leaders</h4>
                  <p className="text-sm text-blue-700">Access to leading medical experts across specialties</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Country Consultants</h4>
                  <p className="text-sm text-blue-700">Government appointed Professors and KOLs</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Specialists</h4>
                  <p className="text-sm text-blue-700">Cardiologists, Orthopedics, Wound Care, Diabetes, and more</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Medical Specialties */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Specialties</h3>
          <p className="text-gray-600">
            Our team includes MDs and engineers with extensive experience across multiple medical specialties.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {['Anesthesiology', 'Cardiology', 'General Surgery', 'Pharmacology', 'Urology', 'Orthopedics', 'Wound Care', 'Diabetes', 'Clinical Research'].map((specialty, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">{specialty}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}