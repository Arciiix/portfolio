declare module "threejs-components/build/cursors/tubes1.min.js" {
  export interface TubesApp {
    tubes: {
      setColors: (colors: string[]) => void;
      setLightsColors: (colors: string[]) => void;
      setLightsIntensity: (intensity: number) => void;
    };
    three?: {
      minPixelRatio?: number;
      maxPixelRatio?: number;
      resize?: () => void;
    };
    dispose: () => void;
  }

  export interface TubesOptions {
    tubes?: {
      colors?: string[];
      lights?: {
        intensity?: number;
        colors?: string[];
      };
    };
    bloom?:
      | boolean
      | {
          threshold?: number;
          strength?: number;
          radius?: number;
        };
  }

  export type TubesFactory = (
    canvas: HTMLCanvasElement,
    options?: TubesOptions
  ) => TubesApp;

  const factory: TubesFactory;
  export default factory;
}
