import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold">
                LA
              </div>
              <div>
                <h3 className="text-xl font-bold">Little Angel</h3>
                <p className="text-sm opacity-90">Public School</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Nurturing young minds with quality education and holistic
              development in the heart of Jharkhand.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 hover:opacity-75 cursor-pointer" />
              <Twitter className="h-5 w-5 hover:opacity-75 cursor-pointer" />
              <Instagram className="h-5 w-5 hover:opacity-75 cursor-pointer" />
              <Youtube className="h-5 w-5 hover:opacity-75 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick("#about")}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#academics")}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity text-left"
                >
                  Academics
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#facilities")}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity text-left"
                >
                  Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#gallery")}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm opacity-90">Nursery</span>
              </li>
              <li>
                <span className="text-sm opacity-90">Kindergarten</span>
              </li>
              <li>
                <span className="text-sm opacity-90">Primary (I-V)</span>
              </li>
              <li>
                <span className="text-sm opacity-90">Middle (VI-VIII)</span>
              </li>
              <li>
                <span className="text-sm opacity-90">Library</span>
              </li>
              <li>
                <span className="text-sm opacity-90">Art & Music</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm opacity-90">Narhi Nagar, Untari</p>
                  <p className="text-sm opacity-90">Garhwa, Jharkhand</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm opacity-90">+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm opacity-90">info@littleangel.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Little Angel Public School. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
