import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Usuario, UsuarioCadastrar } from "../login/login.model";
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = `${environment.api}/usuario`;

  constructor(private httpClient: HttpClient,private router: Router){
  }

  obterUsuarios(){
    return this.httpClient.get<Usuario[]>(this.url);
  }

  cadastrarUsuario(Usuario: UsuarioCadastrar){
    return this.httpClient.post<Usuario>(this.url , Usuario);
  }


  obterUsuario(email: string, senha: string): Observable<boolean> {
    const body = { email, senha };
    return this.httpClient.post<boolean>(this.url + "/valida", body);
  }
}