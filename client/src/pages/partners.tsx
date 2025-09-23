import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Quote } from "lucide-react";
import { PARTNERS } from "@/lib/constants";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "COMATRA FISH MARINE a démontré une expertise remarquable dans l'implémentation de systèmes RAS durables. Leur approche scientifique et leur engagement pour la durabilité font d'eux un partenaire de choix.",
    author: "Dr. Marie Dubois",
    position: "Directrice de recherche",
    institution: "Université de Montpellier"
  },
  {
    id: 2,
    quote: "La qualité constante des produits et le respect des standards de durabilité de COMATRA FISH MARINE ont révolutionné notre approche de l'aquaculture en Afrique de l'Ouest.",
    author: "Prof. Jean-Baptiste Koné",
    position: "Professeur d'aquaculture",
    institution: "Université d'Abidjan"
  },
  {
    id: 3,
    quote: "Les collaborations avec COMATRA FISH MARINE ont permis d'avancer significativement dans nos recherches sur les techniques de recirculation bio-sécurisées.",
    author: "Dr. Aminata Traoré",
    position: "Chercheuse senior",
    institution: "IRD Montpellier"
  }
];

const COLLABORATIONS = [
  {
    year: "2022",
    title: "Projet de recherche sur les systèmes RAS",
    partner: "Université de Montpellier",
    description: "Développement de techniques d'aquaculture durable avec systèmes de recirculation avancés"
  },
  {
    year: "2023",
    title: "Programme de formation aquacole",
    partner: "IRD Montpellier",
    description: "Formation de techniciens spécialisés en aquaculture durable en Afrique de l'Ouest"
  },
  {
    year: "2024",
    title: "Étude d'impact environnemental",
    partner: "INRA",
    description: "Évaluation de l'impact des pratiques de pêche durable sur l'écosystème marin"
  }
];

export default function Partners() {
  return (
    <main className="min-h-screen" data-testid="page-partners">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-ocean-very-dark to-ocean-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl md:text-6xl font-montserrat font-800 mb-6"
            data-testid="text-partners-title"
          >
            Nos partenaires & références
          </h1>
          <p 
            className="text-xl md:text-2xl font-roboto max-w-3xl mx-auto"
            data-testid="text-partners-subtitle"
          >
            Collaborations avec les institutions de recherche et partenaires industriels de premier plan
          </p>
        </div>
      </section>

      {/* Partners Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-montserrat font-700 text-ocean-very-dark text-center mb-12"
            data-testid="text-partner-logos-title"
          >
            Nos partenaires institutionnels
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {PARTNERS.map((partner, index) => (
              <div 
                key={index}
                className="bg-ocean-light rounded-lg p-6 flex items-center justify-center h-32 hover:shadow-lg transition-shadow duration-300"
                data-testid={`card-partner-${index}`}
              >
                <span 
                  className="font-montserrat font-600 text-ocean-very-dark text-sm text-center"
                  data-testid={`text-partner-name-${index}`}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16 bg-ocean-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-montserrat font-700 text-ocean-very-dark text-center mb-12"
            data-testid="text-collaborations-title"
          >
            Nos collaborations récentes
          </h2>
          
          <div className="space-y-8">
            {COLLABORATIONS.map((collab, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-testid={`card-collaboration-${index}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <span 
                        className="bg-ocean-medium text-white px-3 py-1 rounded-full text-sm font-montserrat font-600 mr-4"
                        data-testid={`text-collaboration-year-${index}`}
                      >
                        {collab.year}
                      </span>
                      <span 
                        className="text-sm text-ocean-dark font-roboto font-500"
                        data-testid={`text-collaboration-partner-${index}`}
                      >
                        {collab.partner}
                      </span>
                    </div>
                    <h3 
                      className="text-xl font-montserrat font-700 text-ocean-very-dark mb-3"
                      data-testid={`text-collaboration-title-${index}`}
                    >
                      {collab.title}
                    </h3>
                    <p 
                      className="text-gray-700 font-roboto"
                      data-testid={`text-collaboration-description-${index}`}
                    >
                      {collab.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-montserrat font-700 text-ocean-very-dark text-center mb-12"
            data-testid="text-testimonials-title"
          >
            Témoignages de nos partenaires
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-ocean-pastel rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                data-testid={`card-testimonial-${testimonial.id}`}
              >
                <div className="flex items-start mb-4">
                  <Quote className="w-8 h-8 text-ocean-medium mr-4 flex-shrink-0" />
                  <div>
                    <p 
                      className="font-roboto text-gray-700 italic mb-4"
                      data-testid={`text-testimonial-quote-${testimonial.id}`}
                    >
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p 
                        className="font-montserrat font-600 text-ocean-very-dark"
                        data-testid={`text-testimonial-author-${testimonial.id}`}
                      >
                        {testimonial.author}
                      </p>
                      <p 
                        className="text-sm text-gray-600"
                        data-testid={`text-testimonial-position-${testimonial.id}`}
                      >
                        {testimonial.position}
                      </p>
                      <p 
                        className="text-sm text-gray-600"
                        data-testid={`text-testimonial-institution-${testimonial.id}`}
                      >
                        {testimonial.institution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ocean-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl md:text-4xl font-montserrat font-700 text-ocean-very-dark mb-6"
            data-testid="text-partnership-cta-title"
          >
            Rejoignez nos partenaires
          </h2>
          <p 
            className="text-lg font-roboto text-gray-700 mb-8 max-w-2xl mx-auto"
            data-testid="text-partnership-cta-description"
          >
            Intéressé par une collaboration ? Contactez-nous pour explorer les opportunités de partenariat dans le domaine de la pêche durable et de l'aquaculture.
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-ocean-medium hover:bg-ocean-bright text-white font-roboto font-500"
              data-testid="button-request-partnership"
            >
              Demander un partenariat
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
