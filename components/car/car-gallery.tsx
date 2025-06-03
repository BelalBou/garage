"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CarGalleryProps {
  images: string[];
  make: string;
  model: string;
}

export function CarGallery({ images, make, model }: CarGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="space-y-4">
      <Card className="overflow-hidden">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image 
            src={images[activeIndex] || '/placeholder-car.jpg'} 
            alt={`${make} ${model}`}
            fill
            className="object-cover"
          />
        </div>
      </Card>
      
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all",
                activeIndex === index
                  ? "border-primary"
                  : "border-transparent hover:border-muted-foreground/50"
              )}
            >
              <Image
                src={image}
                alt={`${make} ${model} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}