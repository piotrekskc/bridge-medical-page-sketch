import { MapPin, Users, Globe, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function AboutPage() {
  const locations = [
    { country: "Poland", city: "Warsaw", status: "Headquarters" },
    { country: "Czech Republic", city: "Prague", status: "Cooperating Staff" },
    { country: "Slovakia", city: "Bratislava", status: "Cooperating Staff" }
  ];

  const teamExpertise = [
    "Medical Device Product Development",
    "Program Management",
    "Regulatory Submissions",
    "Clinical Research",
    "Anesthesiology",
    "Cardiology", 
    "General Surgery",
    "Pharmacology",
    "Urology"
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Bridge Medical</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner for medical device development and market entry across Europe, 
          with deep expertise and an extensive professional network.
        </p>
      </section>

      {/* Company Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Headquartered in Warsaw, Poland, with cooperating staff in Poland, Czech Republic, 
                and Slovakia, our reach extends across Europe and into Russia. We are experienced 
                in clinical submissions and study management across Europe.
              </p>
              <p>
                The mission and strategy of Bridge Medical is to bring technology, research, and 
                capabilities to the medical community we serve. Our operations are based strongly 
                on our relationships with professionals across Europe.
              </p>
              <p>
                We come from a wide background within medical technology, with people actively 
                involved in our operations including MDs and engineers experienced in medical 
                device product development, program management, and submission.
              </p>
            </div>
          </div>
          
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Our Promise</h3>
              <blockquote className="text-blue-800 italic text-lg">
                "Long distance relationships are complex. You will feel we are in the adjacent office."
              </blockquote>
              <p className="text-blue-700 mt-4">
                Your success is our success. Please consider Bridge Medical to be part of your organization.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-lg text-gray-600">
              Strategically positioned across Central and Eastern Europe to serve your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{location.city}</h3>
                  <p className="text-gray-600 mb-3">{location.country}</p>
                  <Badge variant={location.status === "Headquarters" ? "default" : "secondary"}>
                    {location.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <p className="text-gray-700 mb-6">
              The clinical and technological experience of Bridge Medical members spans multiple 
              medical specialties and includes comprehensive knowledge of European regulatory requirements.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {teamExpertise.map((expertise, index) => (
                <Badge key={index} variant="outline" className="py-1 px-3">
                  {expertise}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Professional Network</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our network includes physicians, reimbursement specialists, clinical research 
                  professionals, Key Opinion Leaders (KOLs), and Country Consultants – Government 
                  appointed Professors/KOLs.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>24/7 Operations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Based in Warsaw, Poland, with a warehouse facility in Łomianki (just north of Warsaw), 
                  we have shipping and receiving personnel available around the clock.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span>Continuous Development</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We are continuously developing our activities and knowledge base, strengthening 
                  our involvement in Urology and building on our network of specialists across 
                  multiple therapeutic areas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Stand Ready to Offer</h2>
            <p className="text-xl text-blue-100">
              Comprehensive support for your European market entry and clinical development needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Investigator identification, recruitment, and communication",
              "Legal and Regulatory strategy", 
              "Study submission and communication",
              "Data transfer authorization",
              "EU representation",
              "Study staffing and management",
              "Trial master file",
              "Database development and management",
              "Reimbursement strategy and submission"
            ].map((service, index) => (
              <div key={index} className="bg-blue-700 rounded-lg p-4">
                <p className="text-blue-100">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}