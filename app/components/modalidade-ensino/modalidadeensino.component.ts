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
export class ModalidadeensinoComponent {
  title = 'Modalides de Ensino';

  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
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

  constructor(private formaIngressoService: ModalidadeEnsinoService,private router: Router){
    this.obterModalidadesEnsinoCadastrados();
  }

  obterModalidadesEnsinoCadastrados(){
    // this.formaIngressoService.obternomes()
    //   .subscribe(modalidadeEnsino => this.modalidadeEnsino = modalidadeEnsino)

    this.modalidadesEnsino$ = this.formaIngressoService.obterModalidadesEnsino();
  }

  buttonClick(){
    if (!this.nome)
      return;

    if (this.id) {
      this.atualizar();
      return;
    }

    this.formaIngressoService.cadastrarModalidadeEnsino({ nome: this.nome})
      .subscribe(_ => this.obterModalidadesEnsinoCadastrados())
      this.toggleForm();
      this.router.navigate(['/modalidades-ensino']); // Substitua '/cursos' pela rota desejada
  }

  atualizar(){
    this.formaIngressoService.editarModalidadeEnsino({ 
      id: parseInt(this.id), nome: this.nome})
    .subscribe(_ => this.obterModalidadesEnsinoCadastrados());
  }

  preencherCampos(modalidadeEnsino: ModalidadeEnsino){
    this.id = modalidadeEnsino.id!.toString();
    this.nome = modalidadeEnsino.nome;
  }

  remover(id: number){
    this.formaIngressoService.remover(id)
      .subscribe(_ => this.obterModalidadesEnsinoCadastrados());
  }
}
