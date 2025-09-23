import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { COMPANY_INFO } from "@/lib/constants";

export default function About() {
  const expertise = [
    {
      title: "Expertise pêche industrielle responsable",
      description: "Techniques avancées respectueuses de l'environnement marin"
    },
    {
      title: "Réseau d'armateurs fiables",
      description: "Partenariats stratégiques pour un approvisionnement constant"
    },
    {
      title: "Techniques RAS bio-sécurisées",
      description: "Systèmes de recirculation innovants pour l'aquaculture durable"
    }
  ];

  const timeline = [
    { year: 2013, event: "Création de COMATRA FISH MARINE par Mr Roméo David" },
    { year: 2015, event: "Expansion vers la Côte d'Ivoire et le Togo" },
    { year: 2018, event: "Implémentation des systèmes RAS durables" },
    { year: 2020, event: "Certification ISO pour la qualité" },
    { year: 2023, event: "50+ projets aquaculture réalisés" }
  ];

  return (
    <main className="min-h-screen" data-testid="page-about">
      <Helmet>
        <title>À propos - COMATRA FISH MARINE | Histoire & Expertise</title>
        <meta name="description" content="Découvrez l'histoire de COMATRA FISH MARINE, fondée en 2013 par Mr Roméo David. Expert en pêche durable et aquaculture innovante en Afrique de l'Ouest." />
        <meta property="og:title" content="À propos - COMATRA FISH MARINE | Histoire & Expertise" />
        <meta property="og:description" content="Découvrez l'histoire de COMATRA FISH MARINE, fondée en 2013 par Mr Roméo David. Expert en pêche durable et aquaculture innovante en Afrique de l'Ouest." />
      </Helmet>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-ocean-very-dark to-ocean-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl md:text-6xl font-montserrat font-800 mb-6"
            data-testid="text-about-title"
          >
            Notre histoire depuis {COMPANY_INFO.foundedYear}
          </h1>
          <p 
            className="text-xl md:text-2xl font-roboto max-w-3xl mx-auto"
            data-testid="text-about-subtitle"
          >
            Une vision claire pour une alimentation halieutique durable et de qualité
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-3xl md:text-4xl font-montserrat font-700 text-ocean-very-dark mb-6"
                data-testid="text-company-story-title"
              >
                L'expertise au service de la durabilité
              </h2>
              <p 
                className="text-lg font-roboto text-gray-700 mb-6"
                data-testid="text-company-story"
              >
                Fondée en {COMPANY_INFO.foundedYear} par {COMPANY_INFO.founder}, expert reconnu en pêche durable et aquaculture, COMATRA FISH MARINE s'est imposée comme un acteur incontournable du secteur halieutique en Afrique de l'Ouest.
              </p>
              
              <div className="space-y-6 mb-8">
                <h3 
                  className="text-xl font-montserrat font-600 text-ocean-very-dark mb-4"
                  data-testid="text-expertise-title"
                >
                  Pourquoi choisir COMATRA FISH MARINE ?
                </h3>
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start" data-testid={`expertise-item-${index}`}>
                    <div className="flex-shrink-0 w-6 h-6 bg-ocean-medium rounded-full flex items-center justify-center mr-4 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-600 text-ocean-very-dark mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 font-roboto">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-ocean-medium hover:bg-ocean-bright text-white font-roboto font-500"
                  data-testid="button-join-partners"
                >
                  Rejoignez nos partenaires
                </Button>
              </Link>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Installation aquacole moderne avec systèmes RAS durables"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="img-aquaculture-facility"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-ocean-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl md:text-4xl font-montserrat font-700 text-ocean-very-dark mb-6"
            data-testid="text-vision-title"
          >
            Notre vision
          </h2>
          <p 
            className="text-xl font-roboto text-gray-700 max-w-4xl mx-auto mb-12"
            data-testid="text-vision-content"
          >
            Assurer une alimentation de qualité via des produits halieutiques issus d'une pêche responsable et d'une aquaculture durable, tout en préservant les écosystèmes marins pour les générations futures.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-montserrat font-700 text-ocean-very-dark text-center mb-12"
            data-testid="text-timeline-title"
          >
            Notre parcours
          </h2>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-8"
                data-testid={`timeline-item-${index}`}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-ocean-medium rounded-full flex items-center justify-center">
                  <span className="text-white font-montserrat font-700 text-lg">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 bg-ocean-pastel rounded-lg p-6">
                  <p className="font-roboto text-ocean-very-dark text-lg">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
