export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: "Automatic" | "Manual";
  fuelType: string;
  color: string;
  description: string;
  firstOwner: boolean;
  images: string[];
  features: string[];
  bodyType: string;
  engineSize: string;
  power: string;
}

export interface FilterState {
  make: string;
  model: string;
  minPrice: number | "";
  maxPrice: number | "";
  minMileage: number | "";
  maxMileage: number | "";
  transmission: string;
  firstOwner: boolean | null;
  sortBy: "price-asc" | "price-desc" | "mileage-asc" | "mileage-desc" | "year-desc";
}