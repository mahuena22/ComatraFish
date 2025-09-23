import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin } from "lucide-react";
import { AGENCIES } from "@/lib/constants";

export default function AgencyPreview() {
  return (
    <section className="py-16 bg-white" data-testid="agency-preview-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-montserrat font-700 text-ocean-very-dark mb-4"
            data-testid="text-agencies-title"
          >
            Nos agences en Afrique de l'Ouest
          </h2>
          <p 
            className="text-lg font-roboto text-gray-700"
            data-testid="text-agencies-description"
          >
            Présence stratégique dans trois pays pour vous servir au mieux
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AGENCIES.map((agency) => (
            <div 
              key={agency.id}
              className="bg-ocean-pastel rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              data-testid={`card-agency-${agency.id}`}
            >
              <img 
                src={agency.image}
                alt={`${agency.name} - ${agency.description}`}
                className="w-full h-48 object-cover rounded-lg mb-4"
                data-testid={`img-agency-${agency.id}`}
              />
              <h3 
                className="text-xl font-montserrat font-700 text-ocean-very-dark mb-2"
                data-testid={`text-agency-name-${agency.id}`}
              >
                {agency.name}, {agency.country}
              </h3>
              <p 
                className="text-gray-700 font-roboto mb-4"
                data-testid={`text-agency-description-${agency.id}`}
              >
                {agency.description}
              </p>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span data-testid={`text-agency-address-${agency.id}`}>{agency.address}</span>
              </div>
              <Link href="/locations">
                <Button 
                  className="w-full bg-ocean-medium hover:bg-ocean-bright text-white transition-colors duration-200"
                  data-testid={`button-view-agency-${agency.id}`}
                >
                  Voir agence
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
