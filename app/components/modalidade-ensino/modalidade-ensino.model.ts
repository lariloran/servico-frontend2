export type ModalidadeEnsino = {
    id: number,
    nome: string
  }
  
  export type ModalidadeEnsinoCadastrar = Omit<ModalidadeEnsino, 'id'>;