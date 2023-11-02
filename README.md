Funcion Memoize
-> Es una tecnica de programacion que intenta aumentar el rendimiento de una funcion, almacenando en cache sus resultados previamente calculados.


Commmands:
  -> tsc => compilacion
  -> node pruebas.cli.mjs => CLI
  -> npm run test => TDD
  

Test:
=>La funcion 'sumaMemoize' deberia usar cache si tiene el valor almacenado.
=>La funcion sumaMemoize es una funcion.
=>La Funcion sumaMemoize contiene una funcion suma.


CLI
=>La funcionalidad del CLI esta basado en la utilizacion de funciones asincronas.


Front-end (con explicacion de la funcion)
  =>Explicacion de que es una funcion memoize (sumaMemoize).
    ->Variable de almacenamiento (cache) del resultado de la funcion anidada.
    ->Funcion anidada(suma): verifica si los parametros han sido introducios previamente.
    ->En el caso de no estar en la cache, se calculan.
    ->En el caso de estar en la cache, se obtienen directamente de ella, y no se calculan.
  =>Creamos una nueva variable (memoSuma), a la cual se le asigna el resultado de la funcion previamente descrita.
  =>Para comprobar que los resultados son 'memoizados', se asigan cuatro variables (iguales dos a dos); de cada par, el primero es calculado, y el segundo es memoizado.
    

