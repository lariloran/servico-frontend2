import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Vestibular, VestibularCadastrar } from "../vestibular/vestibular.model";

@Injectable({
  providedIn: 'root'
})
export class VestibularService {

  private url = `${environment.api}/vestibular`;

  constructor(private httpClient: HttpClient){
  }

  obterVestibulares(){
    return this.httpClient.get<Vestibular[]>(this.url);
  }

  cadastrarVestibular(Vestibular: VestibularCadastrar){
    return this.httpClient.post<Vestibular>(this.url, Vestibular);
  }

  editarVestibular(Vestibular: Vestibular){
    return this.httpClient.put<Vestibular>(`${this.url}/${Vestibular.id}`, Vestibular);
  }

  remover(id: number){
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}