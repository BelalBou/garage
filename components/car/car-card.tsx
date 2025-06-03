"use client";

import { Car } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useFavorites } from "@/hooks/useFavorites";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/formatters";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isCarFavorite = isFavorite(car.id);

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg group">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Link href={`/vehicles/${car.id}`}>
          <div className="h-full w-full overflow-hidden">
            <Image 
              src={car.images[0] || '/placeholder-car.jpg'} 
              alt={`${car.make} ${car.model}`} 
              width={400} 
              height={300}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(car.id);
          }}
          className="absolute right-3 top-3 z-10 rounded-full bg-white p-1.5 shadow-md transition-all hover:bg-gray-100"
        >
          <Heart className={cn("h-5 w-5", isCarFavorite ? "fill-destructive text-destructive" : "text-muted-foreground")} />
        </button>
      </div>
      <CardContent className="p-4">
        <Link href={`/vehicles/${car.id}`}>
          <div className="mb-2">
            <h3 className="text-lg font-bold">{car.make} {car.model}</h3>
            <p className="text-xl font-semibold text-primary mt-1">
              {formatCurrency(car.price)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>Année:</span>
              <span className="text-foreground font-medium">{car.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Kilométrage:</span>
              <span className="text-foreground font-medium">{car.mileage.toLocaleString()} km</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Transmission:</span>
              <span className="text-foreground font-medium">{car.transmission}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Carburant:</span>
              <span className="text-foreground font-medium">{car.fuelType}</span>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}