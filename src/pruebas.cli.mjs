import inquirer from 'inquirer';

function sumaMemoize() {
  const cache = {};
  return function suma(a, b) {
      const clave = `${a}_${b}`;
      if (cache.hasOwnProperty(clave)) {
          console.log('Devuelve resultado almacenado en el cache');
          return cache[clave];
      }
      console.log(`Calcula la suma de ${a} y ${b}`);
      cache[clave] = a + b;
      return cache[clave];
  };
}
// const memoSuma = sumaMemoize();
// const resultado1 = memoSuma(3, 4);
// const resultado2 = memoSuma(3, 4);
// const resultado3 = memoSuma(2, 1);
// const resultado4 = memoSuma(2, 1);
// console.log('resultado 1: ' + resultado1);
// console.log('resultado 2: ' + resultado2);
// console.log('resultado 3: ' + resultado3);
// console.log('resultado 4: ' + resultado4);

const memoSuma = sumaMemoize();

const preguntas = [
  {
    type: 'number',
    name: 'numero1',
    message: 'Introduce el primer número:',
  },
  {
    type: 'number',
    name: 'numero2',
    message: 'Introduce el segundo número:',
  },
];

const memo = async () => {
  const respuestas1 = await inquirer.prompt(preguntas);
  const resultado1 = memoSuma(respuestas1.numero1, respuestas1.numero2);

  console.log('El resultado es:', resultado1);

  // Pregunta   para verificar la memoización
  const respuestas2 = await inquirer.prompt(preguntas);
  const resultado2 = memoSuma(respuestas2.numero1, respuestas2.numero2);

  console.log('El resultado memoizado es:', resultado2);
};

memo();
