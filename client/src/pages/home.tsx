import { Helmet } from 'react-helmet-async'
import Hero from '@/components/sections/hero'
import StatsSection from '@/components/sections/stats'
import AgencyPreview from '@/components/sections/agency-preview'
import FeaturedProducts from '@/components/sections/featured-products'

export default function Home() {
    return (
        <main data-testid="page-home">
            <Helmet>
                <title>
                    COMATRA FISH MARINE, acteur clé de la pêche durable,
                    aquaculture innovante et distribution de produits aquatiques
                    en Côte d’Ivoire, Bénin, Togo
                </title>
                <meta
                    name="description"
                    content="COMATRA FISH MARINE - Leader en pêche durable, aquaculture innovante et distribution de produits aquatiques en Côte d'Ivoire, Bénin et Togo depuis 2013."
                />
                <meta
                    property="og:title"
                    content="COMATRA FISH MARINE - Pêche Durable & Aquaculture"
                />
                <meta
                    property="og:description"
                    content="Qualité, durabilité et innovation pour une alimentation halieutique saine"
                />
            </Helmet>
            <Hero />
            <StatsSection />
            <AgencyPreview />
            <FeaturedProducts />
        </main>
    )
}
