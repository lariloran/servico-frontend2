export type Vestibular = {
    id: number,
    nome: string,
    sigla: string,
    dataInicio: string,
    dataFim: string,
    numeroEdital: string,
    semestre: number,
    ano: number,
    dataCadastro: string,
    ativo: boolean,

  }
  
  export type VestibularCadastrar = Omit<Vestibular, 'id'>;