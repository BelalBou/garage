"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Car } from "@/types";
import { useState } from "react";
import { cars } from "@/data/cars";

interface CarFormProps {
  car?: Car;
  onSave: (car: Car) => void;
  onCancel: () => void;
}

export function CarForm({ car, onSave, onCancel }: CarFormProps) {
  const { toast } = useToast();
  const isEditing = !!car;

  const [formData, setFormData] = useState<Car>(
    car || {
      id: String(Date.now()),
      make: "",
      model: "",
      year: new Date().getFullYear(),
      price: 0,
      mileage: 0,
      transmission: "Automatic",
      fuelType: "",
      color: "",
      description: "",
      firstOwner: false,
      images: ["https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"],
      features: [],
      bodyType: "",
      engineSize: "",
      power: ""
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "year" || name === "price" || name === "mileage" 
        ? parseInt(value) 
        : value
    }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, firstOwner: checked }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.make || !formData.model || !formData.price) {
      toast({
        title: "Erreur de validation",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would be handled by a backend service
    onSave(formData);
    
    toast({
      title: isEditing ? "Véhicule mis à jour" : "Véhicule ajouté",
      description: `${formData.make} ${formData.model} a été ${isEditing ? "mis à jour" : "ajouté"} avec succès.`
    });
  };

  const handleFeaturesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const featuresText = e.target.value;
    const featuresArray = featuresText.split(',').map(feature => feature.trim()).filter(Boolean);
    setFormData(prev => ({ ...prev, features: featuresArray }));
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const imagesText = e.target.value;
    const imagesArray = imagesText.split(',').map(url => url.trim()).filter(Boolean);
    setFormData(prev => ({ ...prev, images: imagesArray }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? 'Modifier le véhicule' : 'Ajouter un véhicule'}</CardTitle>
          <CardDescription>
            {isEditing 
              ? 'Mettez à jour les informations du véhicule' 
              : 'Remplissez les informations pour ajouter un nouveau véhicule'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="make">Marque *</Label>
              <Input
                id="make"
                name="make"
                value={formData.make}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="model">Modèle *</Label>
              <Input
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="year">Année *</Label>
              <Input
                id="year"
                name="year"
                type="number"
                value={formData.year}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="price">Prix (€) *</Label>
              <Input
                id="price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mileage">Kilométrage (km) *</Label>
              <Input
                id="mileage"
                name="mileage"
                type="number"
                value={formData.mileage}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="transmission">Transmission *</Label>
              <Select 
                value={formData.transmission} 
                onValueChange={(value) => handleSelectChange("transmission", value)}
              >
                <SelectTrigger id="transmission">
                  <SelectValue placeholder="Sélectionnez" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Automatic">Automatique</SelectItem>
                  <SelectItem value="Manual">Manuelle</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fuelType">Carburant</Label>
              <Input
                id="fuelType"
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="color">Couleur</Label>
              <Input
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bodyType">Type de carrosserie</Label>
              <Input
                id="bodyType"
                name="bodyType"
                value={formData.bodyType}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="engineSize">Cylindrée</Label>
              <Input
                id="engineSize"
                name="engineSize"
                value={formData.engineSize}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="power">Puissance</Label>
              <Input
                id="power"
                name="power"
                value={formData.power}
                onChange={handleChange}
              />
            </div>
            
            <div className="flex items-center space-x-2 pt-6">
              <Switch
                id="firstOwner"
                checked={formData.firstOwner}
                onCheckedChange={handleSwitchChange}
              />
              <Label htmlFor="firstOwner">Premier propriétaire</Label>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="features">Caractéristiques (séparées par des virgules)</Label>
            <Textarea
              id="features"
              value={formData.features.join(", ")}
              onChange={handleFeaturesChange}
              rows={3}
              placeholder="Navigation, Bluetooth, Climatisation, etc."
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="images">Images URLs (séparées par des virgules)</Label>
            <Textarea
              id="images"
              value={formData.images.join(", ")}
              onChange={handleImagesChange}
              rows={3}
              placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onCancel}>
            Annuler
          </Button>
          <Button type="submit">
            {isEditing ? 'Mettre à jour' : 'Ajouter le véhicule'}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}