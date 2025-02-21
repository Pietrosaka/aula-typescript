interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
  }
  
  const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    motor: "1.8 Hybrid"
  };
  
  console.log(meuCarro);