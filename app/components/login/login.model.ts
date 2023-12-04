export type Usuario = {
    id: number,
    nome: string,
    email: string,
    senha: string
  }
  
  export type UsuarioCadastrar = Omit<Usuario, 'id'>;