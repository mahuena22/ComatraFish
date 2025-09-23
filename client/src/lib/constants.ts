export const COMPANY_INFO = {
  name: "COMATRA FISH MARINE",
  tagline: "Qualité, durabilité et innovation pour une alimentation halieutique saine",
  description: "COMATRA FISH MARINE — pêche durable, aquaculture innovante et distribution en Côte d'Ivoire, Bénin, Togo",
  foundedYear: 2013,
  founder: "Mr Roméo David",
  email: "contact@comatra.com",
  phone: "+229 XX XX XX XX"
};

export const AGENCIES = [
  {
    id: "cotonou",
    name: "Cotonou",
    country: "Bénin",
    address: "Zone Portuaire, Cotonou",
    phone: "+229 XX XX XX XX",
    email: "cotonou@comatra.com",
    description: "Siège régional et centre de distribution principal",
    coordinates: { lat: 6.3703, lng: 2.3912 },
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "abidjan",
    name: "Abidjan",
    country: "Côte d'Ivoire",
    address: "Plateau, Abidjan",
    phone: "+225 XX XX XX XX",
    email: "abidjan@comatra.com",
    description: "Hub commercial et centre logistique",
    coordinates: { lat: 5.3364, lng: -4.0267 },
    image: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "lome",
    name: "Lomé",
    country: "Togo",
    address: "Zone Portuaire, Lomé",
    phone: "+228 XX XX XX XX",
    email: "lome@comatra.com",
    description: "Centre de développement aquacole",
    coordinates: { lat: 6.1319, lng: 1.2228 },
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  }
];

export const PRODUCTS = [
  {
    id: "noble-fish",
    name: "Poissons nobles",
    description: "Tilapia, silures, maigre, daurade, carangue - élevage durable et pêche responsable",
    details: "Différentes tailles disponibles",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    category: "Poissons"
  },
  {
    id: "crustaceans",
    name: "Crustacés",
    description: "Gambas, langoustes de qualité premium - capture saisonnière et conditionnement optimal",
    details: "Selon saison et disponibilité",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    category: "Crustacés"
  },
  {
    id: "shellfish",
    name: "Coquillages",
    description: "Variété de mollusques et coquillages - fraîcheur garantie et traçabilité complète",
    details: "Conditionnement adapté",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    category: "Coquillages"
  }
];

export const STATS = [
  { value: 10, label: "Années d'expérience", suffix: "+" },
  { value: 3, label: "Pays de présence", suffix: "" },
  { value: 50, label: "Projets aquaculture", suffix: "+" }
];

export const PARTNERS = [
  { name: "Université Montpellier", type: "université" },
  { name: "IRD Montpellier", type: "recherche" },
  { name: "INRA", type: "recherche" },
  { name: "Universités CI", type: "université" }
];

export const NAVIGATION_ITEMS = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/products", label: "Produits" },
  { href: "/locations", label: "Agences" },
  { href: "/partners", label: "Partenaires" },
  { href: "/contact", label: "Contact" }
];
