"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getCarById } from "@/data/cars";
import { useFavorites } from "@/hooks/useFavorites";
import { formatCurrency } from "@/lib/formatters";
import { Heart, Mail, Phone } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { CarGallery } from "@/components/car/car-gallery";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";

export default function CarDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  const car = getCarById(id);
  const { isFavorite, toggleFavorite } = useFavorites();
  
  if (!car) {
    notFound();
  }
  
  const isCarFavorite = isFavorite(car.id);
  
  return (
    <Container className="py-8">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mb-6"
      >
        &larr; Retour
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CarGallery images={car.images} make={car.make} model={car.model} />
          
          <div className="mt-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-muted-foreground whitespace-pre-line">{car.description}</p>
            </div>
            
            {car.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Caractéristiques</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {car.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h1 className="text-3xl font-bold mb-2">
                {car.make} {car.model}
              </h1>
              <p className="text-3xl font-bold text-primary mb-6">
                {formatCurrency(car.price)}
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4 border-b pb-4">
                  <div>
                    <p className="text-muted-foreground">Année</p>
                    <p className="font-medium">{car.year}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Kilométrage</p>
                    <p className="font-medium">{car.mileage.toLocaleString()} km</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 border-b pb-4">
                  <div>
                    <p className="text-muted-foreground">Transmission</p>
                    <p className="font-medium">{car.transmission}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Carburant</p>
                    <p className="font-medium">{car.fuelType}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 border-b pb-4">
                  <div>
                    <p className="text-muted-foreground">Couleur</p>
                    <p className="font-medium">{car.color}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Premier propriétaire</p>
                    <p className="font-medium">{car.firstOwner ? "Oui" : "Non"}</p>
                  </div>
                </div>
                
                {(car.bodyType || car.engineSize || car.power) && (
                  <div className="grid grid-cols-2 gap-4 border-b pb-4">
                    {car.bodyType && (
                      <div>
                        <p className="text-muted-foreground">Carrosserie</p>
                        <p className="font-medium">{car.bodyType}</p>
                      </div>
                    )}
                    {car.engineSize && (
                      <div>
                        <p className="text-muted-foreground">Moteur</p>
                        <p className="font-medium">{car.engineSize}</p>
                      </div>
                    )}
                    {car.power && (
                      <div>
                        <p className="text-muted-foreground">Puissance</p>
                        <p className="font-medium">{car.power}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <div className="flex flex-col space-y-3">
                <Button asChild>
                  <Link href={`tel:087480379`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Appeler: 087 48 03 79
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={`mailto:info@vkautomobile.be?subject=Intérêt pour ${car.make} ${car.model}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Envoyer un message
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className={cn(
                    isCarFavorite && "text-destructive"
                  )}
                  onClick={() => toggleFavorite(car.id)}
                >
                  <Heart className={cn("mr-2 h-4 w-4", isCarFavorite && "fill-destructive")} />
                  {isCarFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}