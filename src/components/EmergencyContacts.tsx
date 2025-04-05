
import { Phone, MessageSquare, Globe, MapPin, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmergencyContacts = () => {
  const globalEmergency = [
    { country: "United States", number: "911" },
    { country: "European Union", number: "112" },
    { country: "United Kingdom", number: "999" },
    { country: "Australia", number: "000" },
    { country: "New Zealand", number: "111" },
    { country: "Canada", number: "911" },
    { country: "China", number: "110" },
    { country: "India", number: "112" },
    { country: "Japan", number: "110" },
  ];

  return (
    <section id="emergency" className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-12 w-12 rounded-full bg-emergency flex items-center justify-center">
            <AlertCircle className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-center">Emergency Contacts</h2>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-lg max-w-3xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-emergency" />
                Universal Contacts
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Button className="bg-emergency w-full text-lg justify-center py-6">
                    <Phone className="h-5 w-5 mr-2" /> International SOS: 9XXXXXXX
                  </Button>
                </div>
                
                <div className="flex items-center">
                  <Button variant="outline" className="w-full text-base justify-center py-6 border-emergency text-emergency hover:bg-emergency/10">
                    <MessageSquare className="h-5 w-5 mr-2" /> SMS Emergency: 9XXXXXXXX
                  </Button>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-bold flex items-center mb-2">
                  <Globe className="h-4 w-4 mr-2 text-emergency" /> Global Emergency Apps
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• What3Words - Location sharing using 3 words</li>
                  <li>• Emergency+ - GPS coordinates for rescue services</li>
                  <li>• Red Cross First Aid - Emergency procedures</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-emergency" />
                Common Emergency Numbers
              </h3>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {globalEmergency.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{item.country}:</span>
                    <span className="font-bold">{item.number}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-3 bg-red-50 rounded-md">
                <p className="text-sm text-emergency-dark"><strong>Important:</strong> Research and save local emergency numbers before traveling to specific destinations.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg font-medium mb-4">Before traveling to any destination:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border-gray-300">
              Register with your embassy
            </Button>
            <Button variant="outline" className="border-gray-300">
              Save local emergency numbers
            </Button>
            <Button variant="outline" className="border-gray-300">
              Share itinerary with someone trusted
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContacts;
