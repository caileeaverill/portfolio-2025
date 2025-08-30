"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => { },
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [0, 0, 0],
  glowColor: [1, 1, 1],
  markers: [
    // 🇺🇸 USA
    { location: [40.7128, -74.0060], size: 0.1 },   // New York
    { location: [34.0522, -118.2437], size: 0.08 }, // Los Angeles
    { location: [41.8781, -87.6298], size: 0.07 },  // Chicago
    { location: [29.7604, -95.3698], size: 0.06 },  // Houston
    { location: [47.6062, -122.3321], size: 0.05 }, // Seattle

    // 🇨🇦 Canada
    { location: [43.6532, -79.3832], size: 0.08 },  // Toronto
    { location: [45.5019, -73.5674], size: 0.06 },  // Montreal
    { location: [49.2827, -123.1207], size: 0.07 }, // Vancouver
    { location: [51.0447, -114.0719], size: 0.05 }, // Calgary
    { location: [53.5461, -113.4938], size: 0.05 }, // Edmonton

    // 🇪🇺 Europe
    { location: [51.5074, -0.1278], size: 0.1 },    // London
    { location: [48.8566, 2.3522], size: 0.08 },    // Paris
    { location: [52.5200, 13.4050], size: 0.07 },   // Berlin
    { location: [41.9028, 12.4964], size: 0.06 },   // Rome
    { location: [40.4168, -3.7038], size: 0.07 },   // Madrid
    { location: [52.3676, 4.9041], size: 0.05 },    // Amsterdam
    { location: [59.3293, 18.0686], size: 0.05 },   // Stockholm

    // 🇦🇺 Australia
    { location: [-33.8688, 151.2093], size: 0.1 },  // Sydney
    { location: [-37.8136, 144.9631], size: 0.08 }, // Melbourne
    { location: [-27.4698, 153.0251], size: 0.06 }, // Brisbane
    { location: [-31.9505, 115.8605], size: 0.06 }, // Perth
  ],

};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (pointerInteracting.current === null) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    // fade in
    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    }, 0);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "inset-0 mx-auto aspect-[1/1] w-full max-w-[225px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  );
}

export default Globe;
