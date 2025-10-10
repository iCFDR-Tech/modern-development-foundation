"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const images = ["/one.jpg", "/two.jpg", "/three.jpg"];

export default function Slider() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) return;

    // update selected index when slide changes
    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });

    // set initial index
    setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        className="w-full mx-auto"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image, idx) => (
            <CarouselItem key={idx}>
              <Image
                alt={`Slide image ${idx + 1}`}
                src={`/carousel${image}`}
                width={2560}
                height={998}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => api && api.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              selectedIndex === index ? "bg-[#16163f]" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
