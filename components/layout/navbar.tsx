"use client";

import { useAuth } from "@/context/auth-context";
import { useFavorites } from "@/hooks/useFavorites";
import { cn } from "@/lib/utils";
import { LogIn, Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favorites } = useFavorites();
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 mr-6" onClick={() => setIsMenuOpen(false)}>
              <span className="text-2xl font-bold">VK Automobile</span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="font-medium transition-colors hover:text-primary">
                Accueil
              </Link>
              <Link href="/vehicles" className="font-medium transition-colors hover:text-primary">
                Véhicules
              </Link>
              <Link href="/about" className="font-medium transition-colors hover:text-primary">
                À propos
              </Link>
              <Link href="/contact" className="font-medium transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/favorites" className="relative">
              <Button variant="ghost" size="icon">
                <Heart className={cn("h-5 w-5", favorites.length > 0 ? "fill-destructive text-destructive" : "")} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
                    {favorites.length}
                  </span>
                )}
              </Button>
            </Link>

            {user ? (
              <Link href="/admin">
                <Button variant="default" size="sm">
                  Administration
                </Button>
              </Link>
            ) : (
              <Link href="/admin/login">
                <Button variant="outline" size="sm">
                  <LogIn className="mr-2 h-4 w-4" />
                  Admin
                </Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <Container>
            <nav className="flex flex-col space-y-4 py-4">
              <Link
                href="/"
                className="font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/vehicles"
                className="font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Véhicules
              </Link>
              <Link
                href="/about"
                className="font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}