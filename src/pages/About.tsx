import { Award, Users, Truck, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Truck, label: "Deliveries Completed", value: "50,000+" },
    { icon: Award, label: "Years of Experience", value: "25+" },
    { icon: Clock, label: "Average Delivery Time", value: "24hrs" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About BuildFlow</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over 25 years, BuildFlow has been the trusted partner for contractors, 
              builders, and construction professionals across the region. We're committed 
              to providing the highest quality materials and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6">
                  <stat.icon className="h-12 w-12 construction-orange mx-auto mb-4" />
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                BuildFlow was founded in 1998 with a simple mission: to provide construction 
                professionals with reliable access to high-quality materials and exceptional service. 
                What started as a small local supplier has grown into one of the region's most 
                trusted construction material providers.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our founder, John Rodriguez, was a contractor himself who understood the frustrations 
                of dealing with unreliable suppliers, inconsistent quality, and delayed deliveries. 
                He set out to create a company that would solve these problems and support the 
                construction industry with the reliability it deserves.
              </p>
              <p className="text-lg leading-relaxed">
                Today, BuildFlow continues to operate with those same core values: quality, 
                reliability, and customer service. We've helped build thousands of projects, 
                from residential homes to major commercial developments, and we're proud to 
                be part of our community's growth and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-construction-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We source only the highest quality materials from trusted manufacturers. 
                  Every product meets or exceeds industry standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-construction-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Reliable Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We understand that time is money in construction. Our reliable delivery 
                  and responsive service keep your projects on schedule.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-construction-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Customer Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We're not just a supplier - we're your partner. Our expert team provides 
                  guidance and support throughout your project.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="John Rodriguez"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">John Rodriguez</h3>
                <p className="text-construction-orange font-medium mb-2">Founder & CEO</p>
                <p className="text-sm text-muted-foreground">
                  25+ years in construction and materials supply. Licensed contractor 
                  and industry advocate.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Sarah Chen"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Sarah Chen</h3>
                <p className="text-construction-orange font-medium mb-2">Operations Director</p>
                <p className="text-sm text-muted-foreground">
                  Expert in logistics and supply chain management. Ensures reliable 
                  delivery and inventory management.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Mike Thompson"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Mike Thompson</h3>
                <p className="text-construction-orange font-medium mb-2">Sales Director</p>
                <p className="text-sm text-muted-foreground">
                  20+ years in construction sales. Specializes in helping customers 
                  find the right materials for their projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};