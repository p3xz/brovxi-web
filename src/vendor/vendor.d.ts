// Type declarations for vendored third-party scripts (no npm types shipped).
declare module "*.min.js" {
  const factory: (canvas: HTMLCanvasElement, options?: Record<string, unknown>) => any;
  export default factory;
}
