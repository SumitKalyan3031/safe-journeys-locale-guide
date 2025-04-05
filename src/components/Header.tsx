
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-coastal to-mountain flex items-center justify-center">
            <span className="text-white font-bold text-xl">SJ</span>
          </div>
          <h1 className="text-2xl font-bold">Safe Journeys</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#mountain" className="font-medium hover:text-mountain transition-colors">Mountain Safety</a>
          <a href="#coastal" className="font-medium hover:text-coastal transition-colors">Coastal Safety</a>
          <a href="#emergency" className="font-medium hover:text-emergency transition-colors">Emergency Contacts</a>
          <a href="#phrases" className="font-medium hover:text-primary transition-colors">Helpful Phrases</a>
        </nav>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
