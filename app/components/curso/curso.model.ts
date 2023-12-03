export type Curso = {
    id: number,
    nome: string,
    descricao: string
  }
  
  export type CursoCadastrar = Omit<Curso, 'id'>;