import { Car } from "@/types";

// Sample car data - in a real app, this would come from a database
export const cars: Car[] = [
  {
    id: "1",
    make: "Audi",
    model: "A4",
    year: 2020,
    price: 28500,
    mileage: 45000,
    transmission: "Automatic",
    fuelType: "Diesel",
    color: "Noir",
    description: "Audi A4 en excellent état avec faible kilométrage. Carnet d'entretien complet, intérieur cuir, GPS, sièges chauffants.",
    firstOwner: true,
    images: [
      "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg",
      "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg"
    ],
    features: ["Navigation", "Bluetooth", "Climatisation", "Cuir", "Caméra de recul"],
    bodyType: "Berline",
    engineSize: "2.0L",
    power: "150 CV"
  },
  {
    id: "2",
    make: "BMW",
    model: "Série 3",
    year: 2019,
    price: 27900,
    mileage: 59000,
    transmission: "Automatic",
    fuelType: "Essence",
    color: "Blanc",
    description: "BMW Série 3 avec pack M Sport. Véhicule parfaitement entretenu avec options premium.",
    firstOwner: false,
    images: [
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg"
    ],
    features: ["Pack Sport", "Jantes 18\"", "Toit ouvrant", "Système audio premium"],
    bodyType: "Berline",
    engineSize: "2.0L",
    power: "184 CV"
  },
  {
    id: "3",
    make: "Mercedes",
    model: "Classe C",
    year: 2021,
    price: 32900,
    mileage: 35000,
    transmission: "Automatic",
    fuelType: "Diesel",
    color: "Gris",
    description: "Mercedes Classe C récente avec faible kilométrage et nombreuses options de confort.",
    firstOwner: true,
    images: [
      "https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg",
      "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg"
    ],
    features: ["Assistance au stationnement", "Sièges électriques", "Navigation", "LED Intelligent Light"],
    bodyType: "Berline",
    engineSize: "2.0L",
    power: "160 CV"
  },
  {
    id: "4",
    make: "Volkswagen",
    model: "Golf",
    year: 2018,
    price: 17500,
    mileage: 78000,
    transmission: "Manual",
    fuelType: "Essence",
    color: "Bleu",
    description: "Volkswagen Golf en parfait état technique. Véhicule économique et fiable.",
    firstOwner: false,
    images: [
      "https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg",
      "https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg"
    ],
    features: ["Bluetooth", "Climatisation", "Régulateur de vitesse", "Écran tactile"],
    bodyType: "Hatchback",
    engineSize: "1.4L",
    power: "125 CV"
  },
  {
    id: "5",
    make: "Renault",
    model: "Clio",
    year: 2020,
    price: 14900,
    mileage: 42000,
    transmission: "Manual",
    fuelType: "Essence",
    color: "Rouge",
    description: "Renault Clio récente et économique. Idéale pour la ville avec sa faible consommation.",
    firstOwner: true,
    images: [
      "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg",
      "https://images.pexels.com/photos/248704/pexels-photo-248704.jpeg"
    ],
    features: ["Écran tactile", "Bluetooth", "Régulateur de vitesse", "Capteurs de stationnement"],
    bodyType: "Hatchback",
    engineSize: "1.0L",
    power: "90 CV"
  },
  {
    id: "6",
    make: "Peugeot",
    model: "3008",
    year: 2019,
    price: 23900,
    mileage: 68000,
    transmission: "Automatic",
    fuelType: "Diesel",
    color: "Gris",
    description: "Peugeot 3008 spacieux et confortable. Parfait pour les familles avec son grand espace de chargement.",
    firstOwner: false,
    images: [
      "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
      "https://images.pexels.com/photos/5168515/pexels-photo-5168515.jpeg"
    ],
    features: ["Navigation", "Caméra 360°", "Hayon électrique", "Sièges chauffants"],
    bodyType: "SUV",
    engineSize: "1.6L",
    power: "130 CV"
  }
];

// Get unique makes from cars
export function getUniqueMakes(): string[] {
  return [...new Set(cars.map(car => car.make))].sort();
}

// Get unique models for a specific make
export function getUniqueModels(make?: string): string[] {
  if (!make) return [...new Set(cars.map(car => car.model))].sort();
  return [...new Set(cars.filter(car => car.make === make).map(car => car.model))].sort();
}

// Get car by ID
export function getCarById(id: string): Car | undefined {
  return cars.find(car => car.id === id);
}