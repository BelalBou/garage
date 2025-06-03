import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CarList } from "@/components/car/car-list";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1236807/pexels-photo-1236807.jpeg"
            alt="VK Automobile Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            VK Automobile
          </h1>
          <p className="text-xl text-white max-w-2xl mb-8">
            Découvrez notre sélection de véhicules d'occasion de qualité à Verviers
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/vehicles">
                Voir nos véhicules
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20">
              <Link href="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pourquoi Choisir VK Automobile ?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous nous engageons à vous offrir des véhicules d'occasion de qualité et un service client exceptionnel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Véhicules Garantis</h3>
              <p className="text-muted-foreground">
                Tous nos véhicules sont soigneusement inspectés et livrés avec une garantie pour votre tranquillité d'esprit.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Prix Compétitifs</h3>
              <p className="text-muted-foreground">
                Nous offrons les meilleurs tarifs du marché et des options de financement flexibles adaptées à votre budget.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Service Personnalisé</h3>
              <p className="text-muted-foreground">
                Notre équipe expérimentée est à votre écoute pour vous conseiller et vous accompagner dans votre achat.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Cars */}
      <section className="py-16">
        <Container>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Nos Véhicules Vedettes</h2>
            <Button asChild variant="outline">
              <Link href="/vehicles">Voir tout</Link>
            </Button>
          </div>
          
          <CarList showFilters={false} />
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                Vous cherchez un véhicule spécifique ?
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                N'hésitez pas à nous contacter. Nous pouvons vous aider à trouver le véhicule qui correspond exactement à vos besoins et à votre budget.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contactez-nous</Link>
              </Button>
            </div>
            <div className="hidden md:block relative w-64 h-64 lg:w-80 lg:h-80">
              <Image
                src="https://images.pexels.com/photos/4173184/pexels-photo-4173184.jpeg"
                alt="Contact us"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}