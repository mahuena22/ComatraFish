import AnimatedCounter from "@/components/ui/animated-counter";
import { STATS } from "@/lib/constants";

export default function StatsSection() {
  return (
    <section id="company-presentation" className="py-16 bg-ocean-light" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-montserrat font-700 text-ocean-very-dark mb-4"
            data-testid="text-stats-title"
          >
            Acteur clé de la pêche durable
          </h2>
          <p 
            className="text-lg font-roboto text-gray-700 max-w-3xl mx-auto"
            data-testid="text-stats-description"
          >
            COMATRA FISH MARINE est un leader reconnu dans la pêche durable, l'aquaculture innovante et la distribution de produits aquatiques de qualité supérieure en Côte d'Ivoire, Bénin et Togo.
          </p>
        </div>
        
        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white rounded-xl p-8 shadow-lg"
              data-testid={`card-stat-${index}`}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="text-4xl md:text-5xl font-montserrat font-800 text-ocean-medium mb-2"
              />
              <div 
                className="text-lg font-roboto font-500 text-ocean-very-dark"
                data-testid={`text-stat-label-${index}`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
