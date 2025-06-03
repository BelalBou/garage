"use client";

import { Container } from "@/components/ui/container";
import { CarList } from "@/components/car/car-list";

export default function FavoritesPage() {
  return (
    <>
      <section className="bg-muted py-12">
        <Container>
          <h1 className="text-3xl font-bold mb-2">Mes Favoris</h1>
          <p className="text-muted-foreground">
            Consultez les véhicules que vous avez ajoutés à vos favoris.
          </p>
        </Container>
      </section>
      
      <section className="py-8">
        <CarList favoritesOnly={true} />
      </section>
    </>
  );
}