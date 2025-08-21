import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  Music, 
  Palette,
  ArrowRight,
  Star,
  Trophy,
  Heart,
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  Baby,
  Smile,
  Gamepad2,
  FileText,
  Calendar
} from "lucide-react";

export default function Index() {
  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
                  Welcome to Little Angels
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Little Angel
                  <span className="text-primary block">Public School</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Nurturing young minds from Nursery to Class VIII with love, care, and quality education 
                  in the heart of Garhwa, Jharkhand.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => handleNavClick('#admissions')}>
                  Apply for Admission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <button onClick={() => handleNavClick('#contact')}>Contact Us</button>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">Years of Care</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">300+</div>
                  <div className="text-sm text-gray-600">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600">Love & Care</div>
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
                    <h3 className="text-2xl font-bold text-gray-900">Growing with Care</h3>
                    <p className="text-gray-600">Where every child learns, plays, and grows in a loving environment.</p>
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

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Little Angel Public School
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Since our establishment, we have been dedicated to providing quality early childhood education 
              and primary schooling. Our school serves children from Nursery to Class VIII, creating a 
              foundation for lifelong learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide a safe, nurturing, and stimulating environment where young minds can explore, 
                learn, and develop their full potential. We believe in fostering creativity, critical thinking, 
                and character development from an early age.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the premier educational institution in Garhwa, known for our commitment to excellence 
                in early childhood and primary education, preparing students for their future academic journey.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary">Play-Based Learning</Badge>
                <Badge variant="secondary">Individual Attention</Badge>
                <Badge variant="secondary">Creative Development</Badge>
                <Badge variant="secondary">Value Education</Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-4">
                <CardContent className="space-y-2">
                  <Baby className="h-12 w-12 text-primary mx-auto" />
                  <h4 className="font-semibold">Nursery Care</h4>
                  <p className="text-sm text-gray-600">Gentle introduction to learning</p>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="space-y-2">
                  <Smile className="h-12 w-12 text-primary mx-auto" />
                  <h4 className="font-semibold">Happy Learning</h4>
                  <p className="text-sm text-gray-600">Joyful educational experience</p>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="space-y-2">
                  <Gamepad2 className="h-12 w-12 text-primary mx-auto" />
                  <h4 className="font-semibold">Play & Learn</h4>
                  <p className="text-sm text-gray-600">Learning through play activities</p>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="space-y-2">
                  <Heart className="h-12 w-12 text-primary mx-auto" />
                  <h4 className="font-semibold">Caring Environment</h4>
                  <p className="text-sm text-gray-600">Love and support for every child</p>
                </CardContent>
              </Card>
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
              We provide a nurturing environment where every child can grow, learn, and thrive with love and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Age-Appropriate Learning</h3>
                <p className="text-gray-600">Curriculum designed specifically for children from nursery to class VIII.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Caring Teachers</h3>
                <p className="text-gray-600">Loving and patient teachers who understand young minds.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Safe Environment</h3>
                <p className="text-gray-600">Secure and child-friendly campus for safe learning and play.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Holistic Development</h3>
                <p className="text-gray-600">Focus on academic, creative, and social development.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Academic Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive education from early childhood to primary school, designed to build strong foundations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center mx-auto">
                  <Baby className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Early Years (Nursery - KG)</h3>
                <p className="text-gray-600">Play-based learning, basic motor skills, social interaction, and introduction to letters and numbers.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Primary School (I - V)</h3>
                <p className="text-gray-600">Foundation subjects including English, Hindi, Mathematics, EVS, and co-curricular activities.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Middle School (VI - VIII)</h3>
                <p className="text-gray-600">Advanced curriculum with Science, Social Studies, and preparation for higher secondary education.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Child-friendly facilities designed to enhance learning and overall development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Library</h3>
                  <p className="text-gray-600">Age-appropriate books, story sessions, and reading programs for young learners.</p>
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
                  <p className="text-gray-600">Musical instruments, singing sessions, and rhythm activities for creative expression.</p>
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
                  <p className="text-gray-600">Creative space for drawing, painting, crafts, and hands-on art activities.</p>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <Gamepad2 className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Play Area</h3>
                  <p className="text-gray-600">Safe outdoor playground with swings, slides, and recreational equipment.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              School Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Glimpses of our vibrant school life, activities, and happy moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-gray-600">School Photo {item}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">
                    {item === 1 && "Classroom Activities"}
                    {item === 2 && "Annual Day Celebration"}
                    {item === 3 && "Sports Day"}
                    {item === 4 && "Art & Craft Workshop"}
                    {item === 5 && "Music Session"}
                    {item === 6 && "Playground Fun"}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {item === 1 && "Students engaged in interactive learning sessions"}
                    {item === 2 && "Celebrating achievements and talents"}
                    {item === 3 && "Physical activities and team building"}
                    {item === 4 && "Creative expression through arts and crafts"}
                    {item === 5 && "Musical learning and expression"}
                    {item === 6 && "Outdoor play and recreational activities"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our school family! Fill out the admission form below to start the enrollment process for your child.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Admission Application Form</h3>
                  <p className="text-gray-600 mt-2">Please fill in all the required information about your child</p>
                </div>

                <form className="space-y-6">
                  {/* Student Information */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary">Student Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="studentName">Student's Full Name *</Label>
                        <Input id="studentName" placeholder="Enter student's full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input id="dateOfBirth" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="admissionClass">Class Applying For *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nursery">Nursery</SelectItem>
                            <SelectItem value="kg">Kindergarten (KG)</SelectItem>
                            <SelectItem value="class1">Class I</SelectItem>
                            <SelectItem value="class2">Class II</SelectItem>
                            <SelectItem value="class3">Class III</SelectItem>
                            <SelectItem value="class4">Class IV</SelectItem>
                            <SelectItem value="class5">Class V</SelectItem>
                            <SelectItem value="class6">Class VI</SelectItem>
                            <SelectItem value="class7">Class VII</SelectItem>
                            <SelectItem value="class8">Class VIII</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Parent Information */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary">Parent/Guardian Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fatherName">Father's Name *</Label>
                        <Input id="fatherName" placeholder="Enter father's full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="motherName">Mother's Name *</Label>
                        <Input id="motherName" placeholder="Enter mother's full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fatherOccupation">Father's Occupation</Label>
                        <Input id="fatherOccupation" placeholder="Enter father's occupation" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="motherOccupation">Mother's Occupation</Label>
                        <Input id="motherOccupation" placeholder="Enter mother's occupation" />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary">Contact Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="primaryPhone">Primary Phone Number *</Label>
                        <Input id="primaryPhone" type="tel" placeholder="Enter primary phone number" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="alternatePhone">Alternate Phone Number</Label>
                        <Input id="alternatePhone" type="tel" placeholder="Enter alternate phone number" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="Enter email address" required />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Complete Address *</Label>
                        <Textarea 
                          id="address" 
                          placeholder="Enter complete address including city, state, and pin code" 
                          className="min-h-[80px]"
                          required 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Previous School Information */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary">Previous School Information (if applicable)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="previousSchool">Previous School Name</Label>
                        <Input id="previousSchool" placeholder="Enter previous school name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastClass">Last Class Attended</Label>
                        <Input id="lastClass" placeholder="Enter last class attended" />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary">Additional Information</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="specialNeeds">Does your child have any special needs or medical conditions?</Label>
                        <Textarea 
                          id="specialNeeds" 
                          placeholder="Please describe any special needs, allergies, or medical conditions we should be aware of" 
                          className="min-h-[80px]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo">Additional Comments</Label>
                        <Textarea 
                          id="additionalInfo" 
                          placeholder="Any additional information you would like to share about your child" 
                          className="min-h-[80px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="text-center space-y-4">
                      <p className="text-sm text-gray-600">
                        By submitting this form, you agree to our admission terms and conditions.
                        Our admission team will contact you within 2-3 working days.
                      </p>
                      <Button size="lg" className="px-12">
                        Submit Admission Form
                        <FileText className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our school? We'd love to hear from you and provide any information you need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-semibold">Get in Touch</h3>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-gray-600">
                        Narhi Nagar, Untari<br />
                        Garhwa, Jharkhand<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-600">info@littleangel.edu</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">School Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 2:00 PM</p>
                      <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">Visit Our School</h4>
                  <p className="text-gray-600 mb-6">
                    We welcome parents to visit our campus and see our learning environment.
                  </p>
                  <p className="text-sm text-gray-500">
                    Please call us to schedule an appointment for a campus visit.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* School Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Quick Information</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-primary">Admission Enquiries</h4>
                      <p className="text-gray-600">Contact us for admission process, requirements, and available seats.</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold text-primary">Academic Information</h4>
                      <p className="text-gray-600">Learn about our curriculum, teaching methods, and academic programs.</p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-primary">School Events</h4>
                      <p className="text-gray-600">Stay updated about school activities, celebrations, and important dates.</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold text-primary">General Queries</h4>
                      <p className="text-gray-600">Any other questions about our school, facilities, or policies.</p>
                    </div>
                  </div>
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
            Join Our School Family
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Give your child the best start in their educational journey. Apply for admission today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => handleNavClick('#admissions')}>
              Apply for Admission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              <button onClick={() => handleNavClick('#contact')}>Contact Us</button>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
