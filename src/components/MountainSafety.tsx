
import { Cloud, Droplet, Thermometer, Wind, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MountainSafety = () => {
  const hazards = [
    {
      icon: <Thermometer className="h-8 w-8 text-emergency" />,
      title: "Hypothermia",
      description: "Temperature drops approximately 3.5°F for every 1,000 feet of elevation. Always carry layers and be prepared for sudden weather changes."
    },
    {
      icon: <Wind className="h-8 w-8 text-emergency" />,
      title: "Altitude Sickness",
      description: "Can occur above 8,000 feet. Symptoms include headache, nausea, and fatigue. Descend immediately if symptoms are severe."
    },
    {
      icon: <Cloud className="h-8 w-8 text-emergency" />,
      title: "Sudden Weather Changes",
      description: "Mountain weather can change rapidly. Check forecasts before heading out and watch for developing storm clouds."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-emergency" />,
      title: "Landslides & Rockfalls",
      description: "Be cautious during and after heavy rainfall. Avoid steep slopes and areas with loose rocks."
    },
    {
      icon: <Droplet className="h-8 w-8 text-emergency" />,
      title: "Dehydration",
      description: "Even in cold environments, dehydration is common. Drink plenty of water and avoid alcohol."
    }
  ];

  const tips = [
    "Always tell someone where you're going and when you expect to return",
    "Carry a map, compass, and fully charged phone",
    "Bring enough food and water plus emergency supplies",
    "Wear appropriate footwear with good traction",
    "Start early to avoid getting caught in darkness"
  ];

  return (
    <section id="mountain" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-12 w-12 rounded-full bg-mountain flex items-center justify-center">
            <span className="text-white text-2xl">⛰️</span>
          </div>
          <h2 className="text-3xl font-bold text-center">Mountain & Hill Safety</h2>
        </div>
        
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Mountains and hills present unique challenges that require preparation and awareness. 
          Here are key hazards to watch for and how to stay safe.
        </p>
        
        <h3 className="text-xl font-bold mb-6">Common Mountain Hazards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hazards.map((hazard, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {hazard.icon}
                <CardTitle>{hazard.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-sm">
                  {hazard.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <span className="text-mountain mr-2">✓</span> Mountain Safety Tips
          </h3>
          <ul className="space-y-3">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-mountain font-bold mr-2">{index + 1}.</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MountainSafety;
