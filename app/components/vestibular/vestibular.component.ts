import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VestibularService } from './vestibular.service';
import { Vestibular } from './vestibular.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vestibular',
  templateUrl: './vestibular.component.html',
  styleUrls: ['./vestibular.component.scss']
})
export class VestibularComponent {
  title = 'Vestibulares';

  // vestibular: Vestibular[] = []
  vestibulares$ = new Observable<Vestibular[]>();

  // form
    id= '';
    nome= '';
    sigla= '';
    dataInicio= '';
    dataFim= ' ';
    numeroEdital= '';
    semestre= 0;
    ano= 0;
    dataCadastro= '';
    ativo= false;

  constructor(private vestibularService: VestibularService){
    this.obterVestibularesCadastrados();
  }

  obterVestibularesCadastrados(){
    // this.vestibularService.obternomes()
    //   .subscribe(vestibular => this.vestibular = vestibular)

    this.vestibulares$ = this.vestibularService.obterVestibulares();
  }

  buttonClick(){
    // || !this.sigla || !this.dataInicio || !this.dataFim || !this.numeroEdital || !this.semestre || !this.ano || !this.dataCadastro || !this.ativo
    if (!this.nome)
      return;

    if (this.id) {
      this.atualizar();
      return;
    }

    this.vestibularService.cadastrarVestibular({ nome: this.nome, sigla: this.sigla, dataInicio: 
      this.dataInicio, dataFim: this.dataFim, numeroEdital: this.numeroEdital,semestre: this.semestre,ano: this.ano,dataCadastro: this.dataCadastro,ativo: this.ativo})
      .subscribe(_ => this.obterVestibularesCadastrados())
  }

  atualizar(){
    this.vestibularService.editarVestibular({ 
      id: parseInt(this.id), nome: this.nome, sigla: this.sigla, dataInicio: 
      this.dataInicio, dataFim: this.dataFim, numeroEdital: this.numeroEdital,semestre: this.semestre,ano: this.ano,dataCadastro: this.dataCadastro,ativo: this.ativo })
    .subscribe(_ => this.obterVestibularesCadastrados());
  }

  preencherCampos(vestibular: Vestibular){
    this.id = vestibular.id!.toString();
    this.nome = vestibular.nome;
    this.sigla = vestibular.sigla;
    this.dataInicio = vestibular.dataInicio;
    this.dataFim = vestibular.dataFim;
    this.numeroEdital = vestibular.numeroEdital;
    this.semestre = vestibular.semestre;
    this.ano = vestibular.ano;
    this.dataCadastro = vestibular.dataCadastro;
    this.ativo = vestibular.ativo;
    
  }

  remover(id: number){
    this.vestibularService.remover(id)
      .subscribe(_ => this.obterVestibularesCadastrados());
  }
}
