import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  Microscope, 
  Computer, 
  Music, 
  Palette,
  ArrowRight,
  Star,
  Trophy,
  Heart,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
                  Welcome to Excellence
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Little Angel
                  <span className="text-primary block">Public School</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Nurturing young minds with quality education, moral values, and holistic development 
                  in the heart of Garhwa, Jharkhand.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Apply for Admission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Take Virtual Tour
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto">
                      LA
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Excellence in Education</h3>
                    <p className="text-gray-600">Empowering students with knowledge, skills, and values for a bright future.</p>
                    <div className="flex justify-center">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Little Angel Public School?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a nurturing environment where every child can grow, learn, and thrive with excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Quality Education</h3>
                <p className="text-gray-600">Modern curriculum with traditional values for holistic development.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Expert Faculty</h3>
                <p className="text-gray-600">Dedicated and experienced teachers committed to student success.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Safe Environment</h3>
                <p className="text-gray-600">Secure and caring environment for optimal learning and growth.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Excellence Record</h3>
                <p className="text-gray-600">Proven track record of academic achievements and student success.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art infrastructure designed to enhance learning and overall development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Microscope className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Science Laboratory</h3>
                  <p className="text-gray-600">Well-equipped labs for physics, chemistry, and biology experiments.</p>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <Computer className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Computer Lab</h3>
                  <p className="text-gray-600">Modern computers with internet access for digital learning.</p>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Library</h3>
                  <p className="text-gray-600">Extensive collection of books and digital resources for research.</p>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <Music className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Music Room</h3>
                  <p className="text-gray-600">Dedicated space for musical instruments and vocal training.</p>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                  <Palette className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Art Studio</h3>
                  <p className="text-gray-600">Creative space for painting, drawing, and craft activities.</p>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <Heart className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Sports Complex</h3>
                  <p className="text-gray-600">Indoor and outdoor sports facilities for physical development.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our School Family?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step towards your child's bright future. Contact us today to learn more about our admission process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              Schedule Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
