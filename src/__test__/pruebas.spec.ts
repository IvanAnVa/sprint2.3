import { sumaMemoize } from '../pruebas'

describe('sumaMemoize', () => {
    it('la funcion sumaMemoize es una funcion', () => {
        expect(typeof sumaMemoize).toBe('function');
    });
    // it('la funcion sumaMemoize contiene una funcion suma', () => {
    //     expect(sumaMemoize).toHaveProperty('suma');
    // });
    it('la funcion memoiza resultados', () => {
        const memoSuma = sumaMemoize();
        const resultado1 = memoSuma(3, 4);
        const resultado2 = memoSuma(3, 4);
        expect(resultado1).toBe(7);
        expect(resultado2).toBe(7);
    });
    it('debe memoizar los resultados', () => {
        const memoSuma = sumaMemoize();
  
        const resultado1 = memoSuma(3, 4);
        const resultado2 = memoSuma(3, 4);
        const resultado3 = memoSuma(2, 1);
        const resultado4 = memoSuma(2, 1);
  
        expect(resultado1).toBe(7); // Aqui calcula el resultado
        expect(resultado2).toBe(7); // Aqui muestra el resultado memoizado
        expect(resultado3).toBe(3); // Aqui calcula el resultado de nuevo
        expect(resultado4).toBe(3); // Aqui muestra el resultado memoizado
      })
});

