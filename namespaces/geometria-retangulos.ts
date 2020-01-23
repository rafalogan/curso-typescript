namespace Geometria {
  export namespace Area {
    export function retangolo(base: number, altura: number): number {
      return base * altura;
    }

    export function quadrado(lado: number): number {
      return Math.pow(lado, 2);
    }
  }
}