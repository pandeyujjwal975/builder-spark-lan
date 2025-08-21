import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span>info@littleangel.edu</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Narhi Nagar, Untari, Garhwa, Jharkhand</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and School Name */}
          <button onClick={() => handleNavClick('#home')} className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              LA
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Little Angel</h1>
              <p className="text-sm text-muted-foreground">Public School</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('#home')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('#about')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('#academics')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Academics
            </button>
            <button 
              onClick={() => handleNavClick('#facilities')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Facilities
            </button>
            <button 
              onClick={() => handleNavClick('#gallery')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => handleNavClick('#admissions')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Admissions
            </button>
            <button 
              onClick={() => handleNavClick('#contact')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button onClick={() => handleNavClick('#admissions')}>Apply Now</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => handleNavClick('#home')} 
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('#about')} 
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('#academics')} 
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Academics
              </button>
              <button 
                onClick={() => handleNavClick('#facilities')} 
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Facilities
              </button>
              <button 
                onClick={() => handleNavClick('#gallery')} 
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Gallery
              </button>
              <button 
                onClick={() => handleNavClick('#admissions')} 
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Admissions
              </button>
              <button 
                onClick={() => handleNavClick('#contact')} 
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
              <Button className="w-fit" onClick={() => handleNavClick('#admissions')}>Apply Now</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
