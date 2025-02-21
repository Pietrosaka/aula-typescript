interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
  }
  
  class RepositorioGenerico<T> implements Repositorio<T> {
    private dados: T[] = [];
  
    salvar(dado: T): void {
      this.dados.push(dado);
    }
  
    obterTodos(): T[] {
      return this.dados;
    }
  }
  
  interface Usuario {
    nome: string;
    email: string;
  }
  
  const usuarioRepo = new RepositorioGenerico<Usuario>();
  usuarioRepo.salvar({ nome: "João", email: "joao@example.com" });
  usuarioRepo.salvar({ nome: "Maria", email: "maria@example.com" });
  
  console.log(usuarioRepo.obterTodos());
  