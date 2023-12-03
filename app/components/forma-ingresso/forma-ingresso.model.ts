export type FormaIngresso = {
    id: number,
    nome: string
  }
  
  export type FormaIngressoCadastrar = Omit<FormaIngresso, 'id'>;