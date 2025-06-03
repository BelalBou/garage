import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">VK Automobile</h3>
            <p className="text-muted-foreground mb-4">
              Votre concessionnaire automobile de confiance à Verviers. Nous proposons une large sélection de véhicules d'occasion de qualité.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Accueil
              </Link>
              <Link href="/vehicles" className="text-muted-foreground hover:text-primary">
                Véhicules
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                À propos
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link href="/admin/login" className="text-muted-foreground hover:text-primary">
                Administration
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary mt-0.5" />
                <span>RUE DE MANGOMBROUX 175, 4800 VERVIERS</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <Link href="tel:087480379" className="hover:text-primary">087 48 03 79</Link>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <Link href="mailto:info@vkautomobile.be" className="hover:text-primary">info@vkautomobile.be</Link>
              </div>
              <div>
                <h4 className="font-medium mt-2 mb-1">Heures d'ouverture:</h4>
                <p className="text-muted-foreground">Lun-Ven: 9h-18h</p>
                <p className="text-muted-foreground">Sam: 10h-17h</p>
                <p className="text-muted-foreground">Dim: Fermé</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VK Automobile. Tous droits réservés.</p>
        </div>
      </Container>
    </footer>
  );
}