import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import GoogleMap from "@/components/ui/google-map";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { AGENCIES } from "@/lib/constants";

export default function Locations() {
  const [selectedAgency, setSelectedAgency] = useState<string | undefined>(undefined);
  const [selectedCountry, setSelectedCountry] = useState("Tous");

  const countries = ["Tous", "Bénin", "Côte d'Ivoire", "Togo"];
  
  const filteredAgencies = selectedCountry === "Tous" 
    ? AGENCIES 
    : AGENCIES.filter(agency => agency.country === selectedCountry);

  const handleAgencySelect = (agencyId: string) => {
    setSelectedAgency(agencyId);
  };

  return (
    <main className="min-h-screen" data-testid="page-locations">
      <Helmet>
        <title>Nos Agences - COMATRA FISH MARINE | Cotonou, Abidjan, Lomé</title>
        <meta name="description" content="Trouvez nos agences COMATRA FISH MARINE: Cotonou (Bénin), Abidjan (Côte d'Ivoire), Lomé (Togo). Contacts, horaires et services dans chaque pays." />
        <meta property="og:title" content="Nos Agences - COMATRA FISH MARINE" />
        <meta property="og:description" content="Présence stratégique dans trois pays pour vous servir au mieux" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-ocean-very-dark to-ocean-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl md:text-6xl font-montserrat font-800 mb-6"
            data-testid="text-locations-title"
          >
            Nos agences
          </h1>
          <p 
            className="text-xl md:text-2xl font-roboto max-w-3xl mx-auto"
            data-testid="text-locations-subtitle"
          >
            Trouvez l'agence COMATRA FISH MARINE la plus proche de vous
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-ocean-pastel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-montserrat font-700 text-ocean-very-dark mb-4"
              data-testid="text-map-title"
            >
              Localisation de nos agences
            </h2>
            <p 
              className="text-lg font-roboto text-gray-700"
              data-testid="text-map-description"
            >
              Cliquez sur un marqueur pour plus d'informations
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <GoogleMap
              selectedAgency={selectedAgency}
              onAgencySelect={handleAgencySelect}
              className="shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Agencies List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-montserrat font-700 text-ocean-very-dark text-center mb-12"
            data-testid="text-agencies-list-title"
          >
            Informations détaillées
          </h2>

          {/* Country Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {countries.map((country) => (
              <Button
                key={country}
                variant={selectedCountry === country ? "default" : "outline"}
                onClick={() => setSelectedCountry(country)}
                className={selectedCountry === country 
                  ? "bg-ocean-medium hover:bg-ocean-bright" 
                  : "border-ocean-medium text-ocean-medium hover:bg-ocean-medium hover:text-white"
                }
                data-testid={`button-filter-${country.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {country}
              </Button>
            ))}
          </div>

          {/* Agencies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAgencies.map((agency) => (
              <div 
                key={agency.id}
                className={`bg-white rounded-xl border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  selectedAgency === agency.id ? 'border-ocean-bright bg-ocean-light' : 'border-gray-200'
                }`}
                data-testid={`card-agency-${agency.id}`}
              >
                <img 
                  src={agency.image}
                  alt={`Agence ${agency.name}`}
                  className="w-full h-48 object-cover rounded-t-xl"
                  data-testid={`img-agency-${agency.id}`}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 
                      className="text-xl font-montserrat font-700 text-ocean-very-dark"
                      data-testid={`text-agency-name-${agency.id}`}
                    >
                      {agency.name}
                    </h3>
                    <Badge variant="secondary" className="bg-ocean-pastel text-ocean-very-dark">
                      {agency.country}
                    </Badge>
                  </div>
                  
                  <p 
                    className="text-gray-700 font-roboto mb-4"
                    data-testid={`text-agency-description-${agency.id}`}
                  >
                    {agency.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-ocean-medium mr-3 flex-shrink-0" />
                      <span 
                        className="font-roboto text-gray-700 text-sm"
                        data-testid={`text-agency-address-${agency.id}`}
                      >
                        {agency.address}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-ocean-medium mr-3 flex-shrink-0" />
                      <span 
                        className="font-roboto text-gray-700 text-sm"
                        data-testid={`text-agency-phone-${agency.id}`}
                      >
                        {agency.phone}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-ocean-medium mr-3 flex-shrink-0" />
                      <span 
                        className="font-roboto text-gray-700 text-sm"
                        data-testid={`text-agency-email-${agency.id}`}
                      >
                        {agency.email}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-ocean-medium mr-3 flex-shrink-0" />
                      <span className="font-roboto text-gray-700 text-sm">
                        Lun-Ven: 8h-18h, Sam: 8h-12h
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1 bg-ocean-medium hover:bg-ocean-bright text-white text-sm"
                      onClick={() => window.open(`https://maps.google.com/?q=${agency.coordinates.lat},${agency.coordinates.lng}`, '_blank')}
                      data-testid={`button-directions-${agency.id}`}
                    >
                      Itinéraire
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-ocean-dark text-ocean-dark hover:bg-ocean-dark hover:text-white text-sm"
                      onClick={() => window.location.href = `tel:${agency.phone}`}
                      data-testid={`button-call-${agency.id}`}
                    >
                      Appeler
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
