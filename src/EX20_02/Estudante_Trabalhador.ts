interface Estudante {
    nome: string;
    curso: string;
  }
  
  interface Trabalhador {
    empresa: string;
    cargo: string;
  }
  
  type EstudanteTrabalhador = Estudante & Trabalhador;
  
  const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Carlos Silva",
    curso: "Análise e Desenvolvimento de Sistemas",
    empresa: "Tech Solutions",
    cargo: "Desenvolvedor Júnior"
  };
  
  console.log(estudanteTrabalhador);
  