export enum ESize {
  TALL,
  GRANDE,
  VENTI
}

export interface IBeverage {
  description: string,
  size: number,

  cost(): number,
  getDescription(): string,
  getSize(): ESize,
  setSize(size: ESize): void,
}
