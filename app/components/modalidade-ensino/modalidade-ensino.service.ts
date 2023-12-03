import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { ModalidadeEnsino, ModalidadeEnsinoCadastrar } from "../modalidade-ensino/modalidade-ensino.model";

@Injectable({
  providedIn: 'root'
})
export class ModalidadeEnsinoService {

  private url = `${environment.api}/modalidade-ensino`;

  constructor(private httpClient: HttpClient){
  }

  obterModalidadesEnsino(){
    return this.httpClient.get<ModalidadeEnsino[]>(this.url);
  }

  cadastrarModalidadeEnsino(ModalidadeEnsino: ModalidadeEnsinoCadastrar){
    return this.httpClient.post<ModalidadeEnsino>(this.url, ModalidadeEnsino);
  }

  editarModalidadeEnsino(ModalidadeEnsino: ModalidadeEnsino){
    return this.httpClient.put<ModalidadeEnsino>(`${this.url}/${ModalidadeEnsino.id}`, ModalidadeEnsino);
  }

  remover(id: number){
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}