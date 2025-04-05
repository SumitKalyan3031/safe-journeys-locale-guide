
import { Waves, Droplets, Sunrise, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CoastalSafety = () => {
  const hazards = [
    {
      icon: <Waves className="h-8 w-8 text-emergency" />,
      title: "Rip Currents",
      description: "Strong, narrow currents that flow away from shore. If caught, swim parallel to the shore until free, then swim back."
    },
    {
      icon: <Droplets className="h-8 w-8 text-emergency" />,
      title: "High Tides",
      description: "Be aware of tide schedules. Rising tides can trap visitors against cliffs or cut off escape routes."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-emergency" />,
      title: "Cliff Erosion",
      description: "Stay away from cliff edges and bases. They can collapse without warning, especially after rainfall."
    },
    {
      icon: <Sunrise className="h-8 w-8 text-emergency" />,
      title: "UV Exposure",
      description: "Reflections from water intensify UV rays. Use high SPF sunscreen, wear a hat and sunglasses."
    },
    {
      icon: <Clock className="h-8 w-8 text-emergency" />,
      title: "Weather Changes",
      description: "Coastal weather can change quickly. Check forecasts and be prepared for wind, rain, and temperature changes."
    }
  ];

  const tips = [
    "Swim only at beaches with lifeguards present",
    "Learn to identify rip currents before entering the water",
    "Check tide times and weather conditions before coastal walks",
    "Keep a safe distance from cliff edges (at least 5 meters)",
    "Carry a fully charged phone in a waterproof case"
  ];

  return (
    <section id="coastal" className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-12 w-12 rounded-full bg-coastal flex items-center justify-center">
            <span className="text-white text-2xl">🌊</span>
          </div>
          <h2 className="text-3xl font-bold text-center">Coastal Safety</h2>
        </div>
        
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Coastal areas offer stunning views but come with their own set of risks. 
          Here's what to watch for and how to enjoy coastal regions safely.
        </p>
        
        <h3 className="text-xl font-bold mb-6">Common Coastal Hazards</h3>
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
            <span className="text-coastal mr-2">✓</span> Coastal Safety Tips
          </h3>
          <ul className="space-y-3">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-coastal font-bold mr-2">{index + 1}.</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CoastalSafety;
