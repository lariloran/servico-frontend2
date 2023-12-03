// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http"
// import { environment } from "src/environments/environment";
// import { Curso, CursoCadastrar } from "../curso/curso.model";

// @Injectable({
//   providedIn: 'root'
// })
// export class CursoService {

//   private url = `${environment.api}/curso`;

//   constructor(private httpClient: HttpClient){
//   }

//   obterCursos(){
//     return this.httpClient.get<Curso[]>(this.url);
//   }

//   cadastrarCurso(Curso: CursoCadastrar){
//     return this.httpClient.post<Curso>(this.url, Curso);
//   }

//   editarCurso(Curso: Curso){
//     return this.httpClient.put<Curso>(`${this.url}/${Curso.id}`, Curso);
//   }

//   remover(id: number){
//     return this.httpClient.delete<void>(`${this.url}/${id}`);
//   }
// }