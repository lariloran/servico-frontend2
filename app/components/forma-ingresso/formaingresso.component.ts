import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormaIngressoService } from './forma-ingresso.service';
import { FormaIngresso } from './forma-ingresso.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formaingresso',
  templateUrl: './formaingresso.component.html',
  styleUrls: ['./formaingresso.component.scss']
})
export class FormaingressoComponent {
  title = 'Formas de Ingresso';

  // curso: FormaIngresso[] = []
  formasIngresso$ = new Observable<FormaIngresso[]>();

  // form
  id = '';
  nome = 'eu sou uma forma ingresso';

  constructor(private formaIngressoService: FormaIngressoService){
    this.obterFormasIngressosCadastrados();
  }

  obterFormasIngressosCadastrados(){
    // this.formaIngressoService.obternomes()
    //   .subscribe(curso => this.curso = curso)

    this.formasIngresso$ = this.formaIngressoService.obterFormasIngressos();
  }

  buttonClick(){
    if (!this.nome)
      return;

    if (this.id) {
      this.atualizar();
      return;
    }

    this.formaIngressoService.cadastrarFormaIngresso({ nome: this.nome})
      .subscribe(_ => this.obterFormasIngressosCadastrados())
  }

  atualizar(){
    this.formaIngressoService.editarFormaIngresso({ 
      id: parseInt(this.id), nome: this.nome})
    .subscribe(_ => this.obterFormasIngressosCadastrados());
  }

  preencherCampos(curso: FormaIngresso){
    this.id = curso.id!.toString();
    this.nome = curso.nome;
  }

  remover(id: number){
    this.formaIngressoService.remover(id)
      .subscribe(_ => this.obterFormasIngressosCadastrados());
  }
}