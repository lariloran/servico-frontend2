import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ModalidadeEnsinoService } from './modalidade-ensino.service';
import { ModalidadeEnsino } from './modalidade-ensino.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modalidadeensino',
  templateUrl: './modalidadeensino.component.html',
  styleUrls: ['./modalidadeensino.component.scss']
})
export class ModalidadeEnsinoComponent {
  title = 'Modalides de Ensino';

  showForm3: boolean = false;

  toggleForm() {
    this.showForm3 = !this.showForm3;
  }

  voltar(){
    this.toggleForm();
    this.router.navigate(['/modalidades-ensino']); // Substitua '/cursos' pela rota desejada
  }

  // modalidadeEnsino: ModalidadeEnsino[] = []
  modalidadesEnsino$ = new Observable<ModalidadeEnsino[]>();

  // form
  id = '';
  nome = 'eu sou uma modalidade de ensino';

  constructor(private ModalidadeEnsinoService: ModalidadeEnsinoService,private router: Router){
    this.obterModalidadesEnsinoCadastrados();
  }

  obterModalidadesEnsinoCadastrados(){
    // this.formaIngressoService.obternomes()
    //   .subscribe(modalidadeEnsino => this.modalidadeEnsino = modalidadeEnsino)

    this.modalidadesEnsino$ = this.ModalidadeEnsinoService.obterModalidadesEnsino();
  }

  buttonClick(){
    if (!this.nome)
      return;

    if (this.id) {
      this.atualizar();
      // this.toggleForm();
      // this.router.navigate(['/modalidades-ensino']); // Substitua '/cursos' pela rota desejada
      return;
    }

    this.ModalidadeEnsinoService.cadastrarModalidadeEnsino({ nome: this.nome})
      .subscribe(_ => this.obterModalidadesEnsinoCadastrados())
      this.toggleForm();
      this.router.navigate(['/modalidades-ensino']); // Substitua '/cursos' pela rota desejada
  }

  atualizar(){
    this.ModalidadeEnsinoService.editarModalidadeEnsino({ 
      id: parseInt(this.id), nome: this.nome})
    .subscribe(_ => this.obterModalidadesEnsinoCadastrados());
  }

  preencherCampos(modalidadeEnsino: ModalidadeEnsino){
    this.id = modalidadeEnsino.id!.toString();
    this.nome = modalidadeEnsino.nome;
  }

  remover(id: number){
    // const resposta = window.confirm('Tem certeza que deseja remover a Modalidade de Ensino com  ID ' + id + ' ?');
    // if(resposta){
    this.ModalidadeEnsinoService.remover(id)
    .subscribe(_ => this.obterModalidadesEnsinoCadastrados());
    // }else{
    //   this.router.navigate(['/modalidades-ensino']); // Substitua '/cursos' pela rota desejada
    // }
  }
}
