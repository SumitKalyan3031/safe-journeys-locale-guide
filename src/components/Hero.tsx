
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Travel Safely in Hilly & Coastal Regions</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Your comprehensive guide to staying safe while exploring beautiful mountains and coasts around the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-mountain hover:bg-mountain-dark text-white" size="lg">
              <a href="#mountain">Mountain Safety</a>
            </Button>
            <Button className="bg-coastal hover:bg-coastal-dark text-white" size="lg">
              <a href="#coastal">Coastal Safety</a>
            </Button>
            <Button className="bg-emergency hover:bg-emergency-dark text-white" size="lg">
              <a href="#emergency">Emergency Help</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
