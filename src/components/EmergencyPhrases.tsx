
import React, { useState } from "react";
import { Languages, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EmergencyPhrases = () => {
  const languages = ["Hindi", "Punjabi","Spanish", "French", "Italian", "German", "Japanese"];
  
  const phrases = [
    {
      english: "Help! Emergency!",
      translations: {
        Spanish: "¡Ayuda! ¡Emergencia!",
        French: "Au secours ! Urgence !",
        Italian: "Aiuto! Emergenza!",
        German: "Hilfe! Notfall!",
        Japanese: "Tasukete! Kinkyū jitai!",
        Hindi: "मेरी मदद करो!",
        Punjabi: "ਮੇਰੀ ਮਦਦ ਕਰੋ!"
      }
    },
    {
      english: "I need a doctor",
      translations: {
        Spanish: "Necesito un médico",
        French: "J'ai besoin d'un médecin",
        Italian: "Ho bisogno di un medico",
        German: "Ich brauche einen Arzt",
        Japanese: "Isha ga hitsuyō desu",
        Hindi: "मुझे डॉक्टर की जरूरत है!",
        Punjabi: "ਮੈਨੂੰ ਡਾਕਟਰ ਦੀ ਲੋੜ ਹੈ।"
      }
    },
    {
      english: "Call an ambulance",
      translations: {
        Spanish: "Llame a una ambulancia",
        French: "Appelez une ambulance",
        Italian: "Chiamate un'ambulanza",
        German: "Rufen Sie einen Krankenwagen",
        Japanese: "Kyūkyūsha o yonde kudasai",
        Hindi: "ऐम्बुलेंस बुलाएं!",
        Punjabi: "ਐੰਬੁਲੇਂਸ ਨੂੰ ਬੁਲਾਓ!"
      }
    },
    {
      english: "I'm lost",
      translations: {
        Spanish: "Estoy perdido/a",
        French: "Je suis perdu(e)",
        Italian: "Mi sono perso/a",
        German: "Ich habe mich verirrt",
        Japanese: "Michi ni mayotte imasu",
        Hindi: "मैं नहीं जानता कि मैं कहां हूं!",
        Punjabi: "ਮੈਨੂੰ ਨਹੀਂ ਪਤਾ ਕਿ ਮੈਂ ਕਿੱਥੇ ਹਾਂ।"
      }
    },
    {
      english: "I need water",
      translations: {
        Spanish: "Necesito agua",
        French: "J'ai besoin d'eau",
        Italian: "Ho bisogno di acqua",
        German: "Ich brauche Wasser",
        Japanese: "Mizu ga hitsuyō desu",
        Hindi: "मुझे प्यास लगी है!",
        Punjabi: "ਮੈਨੂੰ ਪਿਆਸ ਲਗੀ ਹੈ!"
      }
    }
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("Spanish");

  return (
    <section id="phrases" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
            <Languages className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-center">Emergency Phrases</h2>
        </div>
        
        <p className="text-lg text-center max-w-3xl mx-auto mb-8">
          Knowing a few emergency phrases can be lifesaving. Here are essential phrases in common languages.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {languages.map((language) => (
            <Button 
              key={language}
              variant={selectedLanguage === language ? "default" : "outline"}
              onClick={() => setSelectedLanguage(language)}
            >
              {language}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phrases.map((phrase, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-primary">{phrase.english}</CardTitle>
                <CardDescription>Common emergency phrase</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-medium mt-2">{phrase.translations[selectedLanguage]}</p>
                    <p className="text-xs text-gray-500 mt-1">({selectedLanguage})</p>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Volume2 className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyPhrases;
