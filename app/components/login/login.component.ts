import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario, UsuarioCadastrar } from './login.model';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  usuarios$ = new Observable<Usuario[]>();
  email = '';
    senha = '';
  

     usuarioACadastrar: UsuarioCadastrar = {
      nome: this.email,
      email: 'seu-email-padrao@example.com', // Pode ser um email padrão ou lógica específica do seu aplicativo
      senha: this.senha
    };

    constructor(private usuarioService: LoginService,private router: Router){
    }

    buttonClick(){
      if (!this.email || !this.senha)
        return;
  
 
        
      this.usuarioService.cadastrarUsuario(this.usuarioACadastrar)
        .subscribe(_ => this.obterUsuariosCadastrados())
    }
    

    obterUsuariosCadastrados(){
      // this.cursoService.obternomes()
      //   .subscribe(curso => this.curso = curso)
  
      this.usuarios$ = this.usuarioService.obterUsuarios();
      debugger
    }

   fazerLogin() {
      // Chamando o método do serviço para fazer a requisição POS
        const retorno = this.usuarioService.obterUsuario(this.email, this.senha);
    
        retorno.subscribe(
          (data) => {
            console.log('Valor booleano da API:', data);
    
            // Faça qualquer coisa com o valor booleano recebido
            if (data) {
              // Se for verdadeiro
              alert('Login Bem-Sucedido');
              this.router.navigate(['/']); // Substitua '/cursos' pela rota desejada


            } else {
              // Se for falso
              alert('Usuário inválido');
              this.email =''
              this.senha =''
              this.router.navigate(['/login']); // Substitua '/cursos' pela rota desejada

            }
          },
          (error) => {
            console.error('Erro na chamada da API:', error);
          }
        );
      }

    
}
