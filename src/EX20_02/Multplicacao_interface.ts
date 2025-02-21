interface Multiplicacao {
    (a: number, b: number): number;
  }
  
  const multiplicar: Multiplicacao = (a, b) => a * b;
  
  console.log(multiplicar(5, 3));
  console.log(multiplicar(7, 2));
  console.log(multiplicar(10, 4));