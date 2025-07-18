
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, Clock, Users, Shield, BookOpen, FileText } from 'lucide-react';

const BestAssignmentHelp = () => {
  const experts = [
    {
      name: "Dr. Sarah Johnson",
      expertise: "Literature & English",
      experience: "10+ Years",
      rating: "4.9",
      image: "👩‍🎓"
    },
    {
      name: "Prof. Michael Chen",
      expertise: "Business & Management",
      experience: "12+ Years", 
      rating: "4.8",
      image: "👨‍💼"
    },
    {
      name: "Dr. Emily Rodriguez",
      expertise: "Science & Engineering",
      experience: "8+ Years",
      rating: "4.9",
      image: "👩‍🔬"
    }
  ];

  return (
    <section className="py-20 rainbow-bg-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
            <span className="text-purple-700 font-medium">Expert Assignment Help</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get The Best <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Assignment Help Online</span>
            <br />From Our Assignment Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team of PhD-qualified experts provides comprehensive assignment assistance across all subjects and academic levels.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Writers</h3>
              <p className="text-gray-600">PhD qualified professionals</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <Clock className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plagiarism Free</h3>
              <p className="text-gray-600">100% original content</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">Money-back guarantee</p>
            </CardContent>
          </Card>
        </div>

        {/* Expert Profiles */}
        <div className="grid md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">{expert.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{expert.name}</h3>
                <p className="text-purple-600 font-medium mb-2">{expert.expertise}</p>
                <p className="text-gray-600 mb-4">{expert.experience} Experience</p>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="text-gray-600">({expert.rating})</span>
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Hire Expert
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4">
            Get Expert Help Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestAssignmentHelp;
