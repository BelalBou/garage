"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { getUniqueMakes, getUniqueModels } from "@/data/cars";
import { FilterState } from "@/types";
import { useState } from "react";

interface CarFilterProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export function CarFilter({ filters, onFilterChange }: CarFilterProps) {
  const makes = getUniqueMakes();
  const [models, setModels] = useState<string[]>(getUniqueModels(filters.make));

  // Handle make change and update models accordingly
  const handleMakeChange = (make: string) => {
    const newFilters = { ...filters, make: make === "all-makes" ? "" : make, model: "" };
    setModels(getUniqueModels(newFilters.make));
    onFilterChange(newFilters);
  };

  const handleModelChange = (model: string) => {
    onFilterChange({ ...filters, model: model === "all-models" ? "" : model });
  };

  const handleTransmissionChange = (transmission: string) => {
    onFilterChange({ ...filters, transmission: transmission === "all-transmissions" ? "" : transmission });
  };

  const handleReset = () => {
    const defaultFilters: FilterState = {
      make: "",
      model: "",
      minPrice: "",
      maxPrice: "",
      minMileage: "",
      maxMileage: "",
      transmission: "",
      firstOwner: null,
      sortBy: "price-asc",
    };
    
    setModels(getUniqueModels());
    onFilterChange(defaultFilters);
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="make">Marque</Label>
            <Select
              value={filters.make || "all-makes"}
              onValueChange={handleMakeChange}
            >
              <SelectTrigger id="make">
                <SelectValue placeholder="Toutes les marques" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-makes">Toutes les marques</SelectItem>
                {makes.map((make) => (
                  <SelectItem key={make} value={make}>{make}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="model">Modèle</Label>
            <Select
              value={filters.model || "all-models"}
              onValueChange={handleModelChange}
              disabled={!filters.make}
            >
              <SelectTrigger id="model">
                <SelectValue placeholder="Tous les modèles" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-models">Tous les modèles</SelectItem>
                {models.map((model) => (
                  <SelectItem key={model} value={model}>{model}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="transmission">Transmission</Label>
            <Select
              value={filters.transmission || "all-transmissions"}
              onValueChange={handleTransmissionChange}
            >
              <SelectTrigger id="transmission">
                <SelectValue placeholder="Toutes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-transmissions">Toutes</SelectItem>
                <SelectItem value="Automatic">Automatique</SelectItem>
                <SelectItem value="Manual">Manuelle</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="sortBy">Trier par</Label>
            <Select
              value={filters.sortBy}
              onValueChange={(sortBy: FilterState["sortBy"]) => onFilterChange({ ...filters, sortBy })}
            >
              <SelectTrigger id="sortBy">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-asc">Prix (croissant)</SelectItem>
                <SelectItem value="price-desc">Prix (décroissant)</SelectItem>
                <SelectItem value="mileage-asc">Kilométrage (croissant)</SelectItem>
                <SelectItem value="mileage-desc">Kilométrage (décroissant)</SelectItem>
                <SelectItem value="year-desc">Année (récent en premier)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Prix (€)</Label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="Min"
                value={filters.minPrice}
                onChange={(e) => onFilterChange({ ...filters, minPrice: e.target.value ? parseInt(e.target.value) : "" })}
                className="w-full"
              />
              <span className="text-muted-foreground">-</span>
              <Input
                type="number"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={(e) => onFilterChange({ ...filters, maxPrice: e.target.value ? parseInt(e.target.value) : "" })}
                className="w-full"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Kilométrage (km)</Label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="Min"
                value={filters.minMileage}
                onChange={(e) => onFilterChange({ ...filters, minMileage: e.target.value ? parseInt(e.target.value) : "" })}
                className="w-full"
              />
              <span className="text-muted-foreground">-</span>
              <Input
                type="number"
                placeholder="Max"
                value={filters.maxMileage}
                onChange={(e) => onFilterChange({ ...filters, maxMileage: e.target.value ? parseInt(e.target.value) : "" })}
                className="w-full"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              id="first-owner"
              checked={filters.firstOwner === true}
              onCheckedChange={(checked) => {
                const firstOwner = checked ? true : null;
                onFilterChange({ ...filters, firstOwner });
              }}
            />
            <Label htmlFor="first-owner" className="cursor-pointer">Premier propriétaire</Label>
          </div>
          
          <div className="flex items-end">
            <Button
              variant="outline"
              onClick={handleReset}
              className="w-full"
            >
              Réinitialiser les filtres
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}