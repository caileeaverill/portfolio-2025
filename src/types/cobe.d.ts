// types/cobe.d.ts
declare module "cobe" {
    export type RGB = [number, number, number];
    export type LatLng = [number, number];

    export interface COBEMarker {
        location: LatLng; // [lat, lng]
        size: number;
    }

    // What your onRender callback mutates each frame
    export interface COBERenderState {
        phi?: number;
        theta?: number;
        width?: number;
        height?: number;
        // allow other engine keys without TS errors
        [key: string]: unknown;
    }

    // Matches your usage in src/components/ui/globe.tsx
    export interface COBEOptions {
        // required by createGlobe
        width: number;
        height: number;
        onRender: (state: COBERenderState) => void;

        // fields you actually use
        devicePixelRatio?: number;
        phi?: number;
        theta?: number;
        dark?: number;
        diffuse?: number;
        mapSamples?: number;
        mapBrightness?: number;
        baseColor?: RGB;
        markerColor?: RGB;
        glowColor?: RGB;
        markers?: COBEMarker[];

        // permit extra options if you add them later
        [key: string]: unknown;
    }

    export interface COBEGlobe {
        destroy(): void;
        toggle?(): void;
    }

    export default function createGlobe(
        canvas: HTMLCanvasElement,
        options: COBEOptions
    ): COBEGlobe;
}
