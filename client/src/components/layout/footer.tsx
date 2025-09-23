import { Link } from "wouter";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { COMPANY_INFO, NAVIGATION_ITEMS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ocean-very-dark text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-montserrat font-700 mb-4" data-testid="text-company-name">
              {COMPANY_INFO.name}
            </h3>
            <p className="font-roboto text-gray-300 mb-6 max-w-md" data-testid="text-company-description">
              Leader en pêche durable, aquaculture innovante et distribution de produits aquatiques de qualité en Afrique de l'Ouest depuis {COMPANY_INFO.foundedYear}.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-ocean-bright transition-colors duration-200"
                data-testid="link-social-twitter"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-ocean-bright transition-colors duration-200"
                data-testid="link-social-linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-ocean-bright transition-colors duration-200"
                data-testid="link-social-instagram"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-600 text-lg mb-4" data-testid="text-quick-links-title">
              Liens rapides
            </h4>
            <ul className="space-y-2 font-roboto">
              {NAVIGATION_ITEMS.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <a 
                      className="text-gray-300 hover:text-ocean-bright transition-colors duration-200"
                      data-testid={`link-footer-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-600 text-lg mb-4" data-testid="text-contact-title">
              Contact
            </h4>
            <div className="space-y-2 font-roboto text-gray-300">
              <p data-testid="text-address-line1">Zone Portuaire, Cotonou</p>
              <p data-testid="text-address-line2">Bénin</p>
              <p data-testid="text-phone">{COMPANY_INFO.phone}</p>
              <p data-testid="text-email">{COMPANY_INFO.email}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-roboto text-gray-300" data-testid="text-copyright">
            © 2024 {COMPANY_INFO.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
