import { Heart, Users, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#E8A94B] mb-4">Our Story</h2>
          <p className="text-[#1E3A3A] max-w-3xl mx-auto">
            Viet Iconic was founded with a passion for sharing authentic Vietnamese cuisine. 
            Our family recipes have been passed down through generations, and we're proud to serve 
            dishes that celebrate the rich culinary heritage of Vietnam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764175760456-7d7cb1b7e1c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2NDU1Njk2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Restaurant Interior"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#E8A94B]/20 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#E8A94B]" />
              </div>
              <div>
                <h3 className="mb-2 text-[#1E3A3A]">Made with Love</h3>
                <p className="text-[#1E3A3A]/70">
                  Every dish is prepared with care using fresh ingredients and traditional methods.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#E8A94B]/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-[#E8A94B]" />
              </div>
              <div>
                <h3 className="mb-2 text-[#1E3A3A]">Family Recipes</h3>
                <p className="text-[#1E3A3A]/70">
                  Our recipes have been treasured and refined over generations of Vietnamese cooking.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#E8A94B]/20 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-[#E8A94B]" />
              </div>
              <div>
                <h3 className="mb-2 text-[#1E3A3A]">Quality Ingredients</h3>
                <p className="text-[#1E3A3A]/70">
                  We source the finest ingredients to ensure authentic flavors in every bite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}