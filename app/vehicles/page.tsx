"use client";

import { Container } from "@/components/ui/container";
import { CarList } from "@/components/car/car-list";

export default function VehiclesPage() {
  return (
    <>
      <section className="bg-muted py-12">
        <Container>
          <h1 className="text-3xl font-bold mb-2">Nos Véhicules</h1>
          <p className="text-muted-foreground">
            Découvrez notre sélection de véhicules d'occasion de qualité. Utilisez les filtres ci-dessous pour trouver le véhicule parfait pour vous.
          </p>
        </Container>
      </section>
      
      <section className="py-8">
        <CarList />
      </section>
    </>
  );
}