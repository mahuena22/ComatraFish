import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PRODUCTS } from "@/lib/constants";

const DETAILED_PRODUCTS = [
  {
    id: "tilapia",
    name: "Tilapia",
    category: "Poissons nobles",
    description: "Poisson d'élevage de qualité supérieure, riche en protéines et faible en matières grasses",
    sizes: ["200-300g", "300-500g", "500g+"],
    packaging: "Entier, filets, portions",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "silure",
    name: "Silure",
    category: "Poissons nobles",
    description: "Poisson d'eau douce robuste, chair ferme et savoureuse, excellent pour diverses préparations",
    sizes: ["500g-1kg", "1-2kg", "2kg+"],
    packaging: "Entier, darnes, filets",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "maigre",
    name: "Maigre",
    category: "Poissons nobles",
    description: "Poisson marin de qualité premium, chair délicate et texture fine",
    sizes: ["1-2kg", "2-3kg", "3kg+"],
    packaging: "Entier, filets sans peau",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "gambas",
    name: "Gambas",
    category: "Crustacés",
    description: "Crevettes de grande taille, pêche responsable, fraîcheur garantie",
    sizes: ["20/30", "15/20", "10/15"],
    packaging: "Entières, décortiquées, cuites",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "langouste",
    name: "Langouste",
    category: "Crustacés",
    description: "Crustacé de luxe, capture saisonnière, conditionnement optimal",
    sizes: ["300-500g", "500-800g", "800g+"],
    packaging: "Entière, queue, chair",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "coquillages",
    name: "Coquillages variés",
    category: "Coquillages",
    description: "Sélection de mollusques frais, traçabilité complète",
    sizes: ["Variées selon espèces"],
    packaging: "Vivants, cuits, décoquillés",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  }
];

const SERVICES = [
  {
    id: "logistics",
    name: "Logistique et distribution",
    description: "Transport sous température contrôlée (cold chain) pour garantir la fraîcheur",
    features: ["Camions frigorifiques", "Traçabilité GPS", "Respect de la chaîne du froid"]
  },
  {
    id: "packaging",
    name: "Conditionnement sur mesure",
    description: "Emballage adapté selon les besoins clients et les destinations",
    features: ["Emballage sous vide", "Portions individuelles", "Étiquetage personnalisé"]
  },
  {
    id: "consulting",
    name: "Conseils techniques",
    description: "Accompagnement dans la mise en place de projets aquacoles",
    features: ["Étude de faisabilité", "Formation technique", "Suivi de projets"]
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const categories = ["Tous", "Poissons nobles", "Crustacés", "Coquillages"];

  const filteredProducts = selectedCategory === "Tous" 
    ? DETAILED_PRODUCTS 
    : DETAILED_PRODUCTS.filter(product => product.category === selectedCategory);

  return (
    <main className="min-h-screen" data-testid="page-products">
      <Helmet>
        <title>Produits & Services - COMATRA FISH MARINE | Catalogue Aquacole</title>
        <meta name="description" content="Découvrez nos produits aquatiques de qualité: poissons nobles, crustacés, coquillages. Services de logistique, conditionnement et conseils techniques." />
        <meta property="og:title" content="Produits & Services - COMATRA FISH MARINE" />
        <meta property="og:description" content="Qualité supérieure et traçabilité complète pour tous nos produits aquatiques" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-ocean-very-dark to-ocean-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl md:text-6xl font-montserrat font-800 mb-6"
            data-testid="text-products-title"
          >
            Nos produits & services
          </h1>
          <p 
            className="text-xl md:text-2xl font-roboto max-w-3xl mx-auto"
            data-testid="text-products-subtitle"
          >
            Qualité supérieure et traçabilité complète pour tous nos produits aquatiques
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-montserrat font-700 text-ocean-very-dark text-center mb-12"
            data-testid="text-product-catalog-title"
          >
            Notre catalogue de produits
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-ocean-medium hover:bg-ocean-bright" 
                  : "border-ocean-medium text-ocean-medium hover:bg-ocean-medium hover:text-white"
                }
                data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl border shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-testid={`card-product-${product.id}`}
              >
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                  data-testid={`img-product-${product.id}`}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 
                      className="text-xl font-montserrat font-700 text-ocean-very-dark"
                      data-testid={`text-product-name-${product.id}`}
                    >
                      {product.name}
                    </h3>
                    <Badge variant="secondary" className="bg-ocean-pastel text-ocean-very-dark">
                      {product.category}
                    </Badge>
                  </div>
                  <p 
                    className="text-gray-700 font-roboto mb-4"
                    data-testid={`text-product-description-${product.id}`}
                  >
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div>
                      <span className="font-medium text-sm text-ocean-dark">Tailles: </span>
                      <span className="text-sm text-gray-600">{product.sizes.join(", ")}</span>
                    </div>
                    <div>
                      <span className="font-medium text-sm text-ocean-dark">Conditionnement: </span>
                      <span className="text-sm text-gray-600">{product.packaging}</span>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-ocean-medium hover:bg-ocean-bright text-white"
                        data-testid={`button-quote-${product.id}`}
                      >
                        Demander un devis
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Demande de devis - {product.name}</DialogTitle>
                        <DialogDescription>
                          Contactez-nous pour obtenir un devis personnalisé pour ce produit.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="text-center py-4">
                        <p className="text-gray-600 mb-4">
                          Fonctionnalité de devis en cours de développement.
                        </p>
                        <p className="text-sm text-gray-500">
                          Contactez-nous directement au +229 XX XX XX XX
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-ocean-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-montserrat font-700 text-ocean-very-dark text-center mb-12"
            data-testid="text-services-title"
          >
            Nos services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl p-8 shadow-lg"
                data-testid={`card-service-${service.id}`}
              >
                <h3 
                  className="text-xl font-montserrat font-700 text-ocean-very-dark mb-4"
                  data-testid={`text-service-name-${service.id}`}
                >
                  {service.name}
                </h3>
                <p 
                  className="text-gray-700 font-roboto mb-6"
                  data-testid={`text-service-description-${service.id}`}
                >
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                      data-testid={`text-service-feature-${service.id}-${index}`}
                    >
                      <div className="w-2 h-2 bg-ocean-medium rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
