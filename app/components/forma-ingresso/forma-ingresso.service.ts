import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { FormaIngresso, FormaIngressoCadastrar } from "../forma-ingresso/forma-ingresso.model";

@Injectable({
  providedIn: 'root'
})
export class FormaIngressoService {

  private url = `${environment.api}/forma-ingresso`;

  constructor(private httpClient: HttpClient){
  }

  obterFormasIngressos(){
    return this.httpClient.get<FormaIngresso[]>(this.url);
  }

  cadastrarFormaIngresso(FormaIngresso: FormaIngressoCadastrar){
    return this.httpClient.post<FormaIngresso>(this.url, FormaIngresso);
  }

  editarFormaIngresso(FormaIngresso: FormaIngresso){
    return this.httpClient.put<FormaIngresso>(`${this.url}/${FormaIngresso.id}`, FormaIngresso);
  }

  remover(id: number){
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}