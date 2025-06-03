"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Car } from "@/types";
import { cars as initialCars } from "@/data/cars";
import { PenLine, Plus, Trash2 } from "lucide-react";
import { CarForm } from "@/components/admin/car-form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { formatCurrency } from "@/lib/formatters";

export default function AdminPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [carToDelete, setCarToDelete] = useState<Car | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/admin/login");
    } else {
      // In a real application, we would fetch from an API
      setCars(initialCars);
    }
  }, [user, loading, router]);

  const handleAddCar = () => {
    setSelectedCar(null);
    setIsFormOpen(true);
  };

  const handleEditCar = (car: Car) => {
    setSelectedCar(car);
    setIsFormOpen(true);
  };

  const handleDeletePrompt = (car: Car) => {
    setCarToDelete(car);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (carToDelete) {
      // In a real application, this would make an API call
      setCars(cars.filter(car => car.id !== carToDelete.id));
      setIsDeleteDialogOpen(false);
      setCarToDelete(null);
    }
  };

  const handleSaveCar = (carData: Car) => {
    if (selectedCar) {
      // Update existing car
      setCars(cars.map(car => car.id === selectedCar.id ? carData : car));
    } else {
      // Add new car
      setCars([...cars, carData]);
    }
    setIsFormOpen(false);
  };

  if (loading) {
    return (
      <Container className="py-12">
        <p>Chargement...</p>
      </Container>
    );
  }

  return (
    <Container className="py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Administration des véhicules</h1>
        <Button onClick={handleAddCar}>
          <Plus className="mr-2 h-4 w-4" /> Ajouter un véhicule
        </Button>
      </div>

      {cars.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground mb-4">Aucun véhicule trouvé</p>
            <Button onClick={handleAddCar}>
              <Plus className="mr-2 h-4 w-4" /> Ajouter votre premier véhicule
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Liste des véhicules ({cars.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Véhicule</th>
                    <th className="text-left py-3 px-4 font-medium">Prix</th>
                    <th className="text-left py-3 px-4 font-medium">Année</th>
                    <th className="text-left py-3 px-4 font-medium">Kilométrage</th>
                    <th className="text-right py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cars.map((car) => (
                    <tr key={car.id} className="border-b">
                      <td className="py-3 px-4">
                        <div className="font-medium">{car.make} {car.model}</div>
                        <div className="text-sm text-muted-foreground">{car.transmission} • {car.fuelType}</div>
                      </td>
                      <td className="py-3 px-4">{formatCurrency(car.price)}</td>
                      <td className="py-3 px-4">{car.year}</td>
                      <td className="py-3 px-4">{car.mileage.toLocaleString()} km</td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditCar(car)}
                          >
                            <PenLine className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeletePrompt(car)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add/Edit Car Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <CarForm
            car={selectedCar || undefined}
            onSave={handleSaveCar}
            onCancel={() => setIsFormOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Êtes-vous sûr de vouloir supprimer ce véhicule ?</AlertDialogTitle>
            <AlertDialogDescription>
              {carToDelete && `${carToDelete.make} ${carToDelete.model} (${carToDelete.year})`}
              <br />
              Cette action est irréversible et supprimera définitivement ce véhicule.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Container>
  );
}