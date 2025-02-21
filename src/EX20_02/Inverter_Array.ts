function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const strings = ["a", "b", "c", "d"];
  
  console.log(inverterArray(numeros));
  console.log(inverterArray(strings));
  