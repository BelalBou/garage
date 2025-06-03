import { Container } from "@/components/ui/container";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="bg-muted py-12">
        <Container>
          <h1 className="text-3xl font-bold mb-2">À propos de VK Automobile</h1>
          <p className="text-muted-foreground">
            Votre concessionnaire automobile de confiance à Verviers depuis plus de 15 ans.
          </p>
        </Container>
      </section>
      
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Notre Histoire</h2>
            <p className="text-muted-foreground mb-4">
              Fondée en 2008, VK Automobile s'est rapidement imposée comme l'un des concessionnaires automobiles les plus fiables de la région de Verviers. Notre objectif a toujours été de fournir des véhicules d'occasion de qualité à des prix compétitifs, en mettant l'accent sur la satisfaction client.
            </p>
            <p className="text-muted-foreground mb-4">
              Au fil des années, nous avons développé une expertise approfondie dans la sélection et la préparation des véhicules d'occasion, garantissant à nos clients des véhicules fiables et en parfait état.
            </p>
            <p className="text-muted-foreground">
              Aujourd'hui, VK Automobile est fière de servir des clients de Verviers et des environs, en offrant un service personnalisé et des véhicules soigneusement sélectionnés pour répondre aux besoins variés de notre clientèle.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/4480998/pexels-photo-4480998.jpeg"
              alt="Notre concession"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Notre Équipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg"
                  alt="Michel Dupont"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Michel Dupont</h3>
              <p className="text-primary">Directeur</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src="https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg"
                  alt="Sophie Laurent"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sophie Laurent</h3>
              <p className="text-primary">Conseillère commerciale</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                  alt="Jean Mercier"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Jean Mercier</h3>
              <p className="text-primary">Technicien automobile</p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Notre Engagement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Qualité</h3>
              <p className="text-muted-foreground">
                Nous sélectionnons rigoureusement chaque véhicule et effectuons des contrôles techniques complets pour garantir leur qualité et leur fiabilité.
              </p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Transparence</h3>
              <p className="text-muted-foreground">
                Nous fournissons l'historique complet et détaillé de chaque véhicule, sans aucune mauvaise surprise pour nos clients.
              </p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Service</h3>
              <p className="text-muted-foreground">
                Nous offrons un service personnalisé et un suivi après-vente pour assurer votre satisfaction à long terme.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Visitez Notre Concession</h2>
          <div className="overflow-hidden rounded-lg h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.8057464466684!2d5.8481245!3d50.5902495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c087e7d5fbcf95%3A0x6e45bd9e5f1c9baf!2sRue%20de%20Mangombroux%20175%2C%204800%20Verviers!5e0!3m2!1sfr!2sbe!4v1650000000000!5m2!1sfr!2sbe" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </>
  );
}