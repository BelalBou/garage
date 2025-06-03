"use client";

import { useFavorites } from "@/hooks/useFavorites";
import { Car, FilterState } from "@/types";
import { CarCard } from "./car-card";
import { useEffect, useMemo, useState } from "react";
import { CarFilter } from "./car-filter";
import { cars } from "@/data/cars";
import { Container } from "../ui/container";

interface CarListProps {
  initialCars?: Car[];
  showFilters?: boolean;
  favoritesOnly?: boolean;
}

export function CarList({ initialCars = cars, showFilters = true, favoritesOnly = false }: CarListProps) {
  const { favorites } = useFavorites();
  
  const [filters, setFilters] = useState<FilterState>({
    make: "",
    model: "",
    minPrice: "",
    maxPrice: "",
    minMileage: "",
    maxMileage: "",
    transmission: "",
    firstOwner: null,
    sortBy: "price-asc"
  });
  
  // Filter cars based on the current filters
  const filteredCars = useMemo(() => {
    let results = initialCars;
    
    // Filter by favorites if needed
    if (favoritesOnly) {
      results = results.filter(car => favorites.includes(car.id));
    }
    
    // Apply filters
    if (filters.make) {
      results = results.filter(car => car.make === filters.make);
    }
    
    if (filters.model) {
      results = results.filter(car => car.model === filters.model);
    }
    
    if (filters.transmission) {
      results = results.filter(car => car.transmission === filters.transmission);
    }
    
    if (filters.minPrice !== "") {
      results = results.filter(car => car.price >= filters.minPrice);
    }
    
    if (filters.maxPrice !== "") {
      results = results.filter(car => car.price <= filters.maxPrice);
    }
    
    if (filters.minMileage !== "") {
      results = results.filter(car => car.mileage >= filters.minMileage);
    }
    
    if (filters.maxMileage !== "") {
      results = results.filter(car => car.mileage <= filters.maxMileage);
    }
    
    if (filters.firstOwner !== null) {
      results = results.filter(car => car.firstOwner === filters.firstOwner);
    }
    
    // Apply sorting
    return results.sort((a, b) => {
      switch (filters.sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "mileage-asc":
          return a.mileage - b.mileage;
        case "mileage-desc":
          return b.mileage - a.mileage;
        case "year-desc":
          return b.year - a.year;
        default:
          return a.price - b.price;
      }
    });
  }, [initialCars, filters, favorites, favoritesOnly]);

  return (
    <Container>
      {showFilters && (
        <CarFilter 
          filters={filters} 
          onFilterChange={setFilters} 
        />
      )}
      
      {filteredCars.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">Aucun véhicule trouvé</h3>
          <p className="text-muted-foreground">
            Aucun véhicule ne correspond à vos critères de recherche. Veuillez essayer d'autres filtres.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </Container>
  );
}