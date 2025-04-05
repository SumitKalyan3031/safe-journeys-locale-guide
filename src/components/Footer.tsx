
import { Heart, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-coastal to-mountain flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Safe Journeys</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your comprehensive guide to staying safe while exploring beautiful mountains and coasts around the world.
            </p>
            <div className="flex items-center text-gray-400">
              <span>Made with </span> 
              <Heart className="h-4 w-4 mx-1 text-emergency" fill="currentColor" /> 
              <span>for adventurers worldwide</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#mountain" className="text-gray-400 hover:text-white transition-colors">Mountain Safety</a></li>
              <li><a href="#coastal" className="text-gray-400 hover:text-white transition-colors">Coastal Safety</a></li>
              <li><a href="#emergency" className="text-gray-400 hover:text-white transition-colors">Emergency Contacts</a></li>
              <li><a href="#phrases" className="text-gray-400 hover:text-white transition-colors">Emergency Phrases</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Important Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">World Health Organization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">International Mountain Safety</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Global Coastal Awareness</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Traveler's Health Guide</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Safe Journeys Guide. All rights reserved.</p>
          <p className="mt-2">This guide is for informational purposes only. Always follow local safety instructions and guidelines.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
