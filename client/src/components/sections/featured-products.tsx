import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { PRODUCTS } from "@/lib/constants";

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-ocean-light" data-testid="featured-products-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-montserrat font-700 text-ocean-very-dark mb-4"
            data-testid="text-products-title"
          >
            Nos produits phares
          </h2>
          <p 
            className="text-lg font-roboto text-gray-700"
            data-testid="text-products-description"
          >
            Une sélection de produits aquatiques de qualité supérieure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-testid={`card-product-${product.id}`}
            >
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
                data-testid={`img-product-${product.id}`}
              />
              <div className="p-6">
                <h3 
                  className="text-xl font-montserrat font-700 text-ocean-very-dark mb-2"
                  data-testid={`text-product-name-${product.id}`}
                >
                  {product.name}
                </h3>
                <p 
                  className="text-gray-700 font-roboto mb-4"
                  data-testid={`text-product-description-${product.id}`}
                >
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span 
                    className="text-sm text-ocean-dark font-roboto font-500"
                    data-testid={`text-product-details-${product.id}`}
                  >
                    {product.details}
                  </span>
                  <Link href="/products">
                    <Button 
                      className="bg-ocean-medium hover:bg-ocean-bright text-white transition-colors duration-200"
                      data-testid={`button-learn-more-${product.id}`}
                    >
                      En savoir plus
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
