import { Mail, Phone, MapPin, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function ContactPage() {
  return (
    <div className="space-y-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact our team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to start your clinical research project? Get in touch with our
            experts.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            {/* General Contact */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>General Contact</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <a
                      href="mailto:info@bridgemedical.pl"
                      className="text-primary hover:underline"
                    >
                      info@bridgemedical.pl
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Warsaw, Poland
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Manager Contact */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <User className="w-6 h-6 text-primary" />
                  <span>Project Manager</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">
                    Joanna Mieteń
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-muted-foreground" />
                      <a
                        href="tel:+48731854458"
                        className="text-primary hover:underline"
                      >
                        PL (+48) 731-854-458
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-muted-foreground" />
                      <a
                        href="mailto:jmieten@bridgemedical.pl"
                        className="text-primary hover:underline"
                      >
                        jmieten@bridgemedical.pl
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Info */}
            <Card className="bg-muted border-none">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">
                  Our Location
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Based in Warsaw, Poland, with an active presence across
                  Central and Eastern Europe. Our strategic location allows us
                  to provide comprehensive support for clinical trials
                  throughout the region while maintaining close connections to
                  European regulatory bodies.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <p className="text-muted-foreground">
                Let us know about your project and how we can help you achieve
                your clinical research goals.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" placeholder="+48 123 456 789" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your clinical research project, timeline, and how we can help..."
                    rows={6}
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Response Promise */}
      <section className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                We respond quickly
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our team typically responds to inquiries within 24 hours. For
                urgent matters, please contact our Project Manager directly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Initial Response
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Within 24 hours
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Project Consultation
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    2-3 business days
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Proposal Delivery
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    5-7 business days
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
