export function sumaMemoize(): (a: number, b: number) => number {
  const cache: { [clave: string]: number } = {};

  return function suma(a: number, b: number): number {
    const clave = `${a}_${b}`;

    if (cache.hasOwnProperty(clave)) {
      console.log('Devuelve resultado almacenado en la cache');
      return cache[clave]!;
    }

    console.log(`Calcula la suma de ${a} y ${b}`);
    cache[clave] = a + b;
    return cache[clave]!;
  };
}

const memoSuma = sumaMemoize();

const resultado1 = memoSuma(3, 4);
const resultado2 = memoSuma(3, 4);
const resultado3 = memoSuma(2, 1);
const resultado4 = memoSuma(2, 1);

console.log('El primer resultado sera calculado: ' + resultado1);
console.log('El segundo resultado es recogido de la cache: ' + resultado2);
console.log('El tercer resultado sera calculado: ' + resultado3);
console.log('El cuarto resultado es recogido de la cache: ' + resultado4);
  