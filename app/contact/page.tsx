"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé",
        description: "Nous vous contacterons dès que possible.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };
  
  return (
    <>
      <section className="bg-muted py-12">
        <Container>
          <h1 className="text-3xl font-bold mb-2">Contactez-nous</h1>
          <p className="text-muted-foreground">
            Besoin d'informations sur un véhicule ou d'un rendez-vous ? N'hésitez pas à nous contacter.
          </p>
        </Container>
      </section>
      
      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstname">Prénom</Label>
                      <Input id="firstname" name="firstname" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname">Nom</Label>
                      <Input id="lastname" name="lastname" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input id="subject" name="subject" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" rows={5} required />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
            <Card className="mb-6">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p className="text-muted-foreground">RUE DE MANGOMBROUX 175, 4800 VERVIERS</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:087480379" className="hover:text-primary">
                        087 48 03 79
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@vkautomobile.be" className="hover:text-primary">
                        info@vkautomobile.be
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Heures d'ouverture</h3>
                    <div className="text-muted-foreground">
                      <p>Lundi - Vendredi: 9h - 18h</p>
                      <p>Samedi: 10h - 17h</p>
                      <p>Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="overflow-hidden rounded-lg h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.8057464466684!2d5.8481245!3d50.5902495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c087e7d5fbcf95%3A0x6e45bd9e5f1c9baf!2sRue%20de%20Mangombroux%20175%2C%204800%20Verviers!5e0!3m2!1sfr!2sbe!4v1650000000000!5m2!1sfr!2sbe" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}