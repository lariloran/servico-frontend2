import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CursoService } from './curso.service';
import { Curso } from './curso.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent {
  title = 'Cursos';
  showForm1: boolean = false;

  toggleForm() {
    this.showForm1 = !this.showForm1;
  }

  voltar(){
    this.toggleForm();
    this.router.navigate(['/cursos']); // Substitua '/cursos' pela rota desejada
  }
  // curso: Curso[] = []
  cursos$ = new Observable<Curso[]>();

  // form
  id = '';
  nome = 'eu sou um curso';
  descricao = '';

  constructor(private cursoService: CursoService,private router: Router){
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
      this.toggleForm();
      this.router.navigate(['/cursos']); // Substitua '/cursos' pela rota desejada
      return;
    }

    this.cursoService.cadastrarCurso({ nome: this.nome, descricao: this.descricao })
      .subscribe(_ => this.obterCursosCadastrados())
      this.toggleForm();
      this.router.navigate(['/cursos']); // Substitua '/cursos' pela rota desejada

  }

  atualizar(){
    this.cursoService.editarCurso({ 
      id: parseInt(this.id), nome: this.nome, descricao: this.descricao })
    .subscribe(_ => this.obterCursosCadastrados());
  }

  

  preencherCampos(curso: Curso){
    this.toggleForm();
    this.id = curso.id!.toString();
    this.nome = curso.nome;
    this.descricao = curso.descricao;
  }

  remover(id: number){
    const resposta = window.confirm('Tem certeza que deseja remover o curso de ID ' + id + ' ?');
    if(resposta){
    this.cursoService.remover(id)
    .subscribe(_ => this.obterCursosCadastrados());
    }else{
      this.router.navigate(['/cursos']); // Substitua '/cursos' pela rota desejada
    }
  }
}
