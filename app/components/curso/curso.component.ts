import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CursoService } from './curso.service';
import { Curso } from './curso.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent {
  title = 'Cursos';
  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  voltar(){
  }
  // curso: Curso[] = []
  cursos$ = new Observable<Curso[]>();

  // form
  id = '';
  nome = 'eu sou um curso';
  descricao = '';

  constructor(private cursoService: CursoService){
    this.obterCursosCadastrados();
  }

  obterCursosCadastrados(){
    // this.cursoService.obternomes()
    //   .subscribe(curso => this.curso = curso)

    this.cursos$ = this.cursoService.obterCursos();
  }

  buttonClick(){
    if (!this.nome || !this.descricao)
      return;

    if (this.id) {
      this.atualizar();
      return;
    }

    this.cursoService.cadastrarCurso({ nome: this.nome, descricao: this.descricao })
      .subscribe(_ => this.obterCursosCadastrados())
  }

  atualizar(){
    this.cursoService.editarCurso({ 
      id: parseInt(this.id), nome: this.nome, descricao: this.descricao })
    .subscribe(_ => this.obterCursosCadastrados());
  }

  preencherCampos(curso: Curso){
    this.id = curso.id!.toString();
    this.nome = curso.nome;
    this.descricao = curso.descricao;
  }

  remover(id: number){
    this.cursoService.remover(id)
      .subscribe(_ => this.obterCursosCadastrados());
  }
}
