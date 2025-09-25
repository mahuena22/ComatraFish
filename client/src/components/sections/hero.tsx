import { Button } from '@/components/ui/button'
import { Link } from 'wouter'
import { ChevronDown } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export default function Hero() {
    const scrollToNext = () => {
        const nextSection = document.querySelector('#company-presentation')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section
            className="relative h-screen flex items-center justify-center"
            style={{
                backgroundImage: "url('/hero-bg.jpeg')", // Placez votre image dans client/public/hero-bg.jpg
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            data-testid="hero-section">
            <div className="absolute inset-0 hero-gradient000"></div>

            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <h1
                    className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-800 mb-6 leading-tight"
                    data-testid="text-hero-title">
                    {COMPANY_INFO.tagline}
                </h1>
                <p
                    className="text-xl md:text-2xl font-roboto font-400 mb-8 max-w-3xl mx-auto leading-relaxed"
                    data-testid="text-hero-subtitle">
                    {COMPANY_INFO.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                        <Button
                            size="lg"
                            className="bg-ocean-medium hover:bg-ocean-bright text-white font-roboto font-500 py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                            data-testid="button-quote-request">
                            Demander un devis
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="bg-ocean-dark hover:bg-ocean-medium text-white font-roboto font-500 py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                            data-testid="button-contact-us">
                            Nous contacter
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={scrollToNext}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
                data-testid="button-scroll-indicator"
                aria-label="Défiler vers le bas">
                <ChevronDown className="w-6 h-6" />
            </button>
        </section>
    )
}
