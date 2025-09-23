import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { COMPANY_INFO, NAVIGATION_ITEMS } from "@/lib/constants";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  const NavLink = ({ href, label, mobile = false }: { href: string; label: string; mobile?: boolean }) => (
    <Link href={href}>
      <a
        className={`${
          mobile ? "block px-3 py-2 text-base" : "px-3 py-2 text-sm"
        } font-medium transition-colors duration-200 ${
          isActive(href)
            ? "text-ocean-bright border-b-2 border-ocean-bright"
            : "text-ocean-very-dark hover:text-ocean-bright"
        }`}
        onClick={() => mobile && setIsOpen(false)}
        data-testid={`nav-link-${label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {label}
      </a>
    </Link>
  );

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-2xl font-montserrat font-800 text-ocean-very-dark" data-testid="brand-logo">
                {COMPANY_INFO.name}
              </a>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAVIGATION_ITEMS.slice(0, -1).map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
              <Link href="/contact">
                <Button 
                  className="bg-ocean-medium hover:bg-ocean-bright text-white"
                  data-testid="button-contact-nav"
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-ocean-very-dark hover:text-ocean-bright"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Ouvrir le menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {NAVIGATION_ITEMS.map((item) => (
                    <NavLink key={item.href} href={item.href} label={item.label} mobile />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
