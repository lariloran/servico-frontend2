import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormaingressoComponent } from './components/forma-ingresso/formaingresso.component';
import { ModalidadeEnsinoComponent } from './components/modalidade-ensino/modalidadeensino.component';
import { VestibularComponent } from './components/vestibular/vestibular.component';
import { CursoComponent } from './components/curso/curso.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    FormaingressoComponent,
    ModalidadeEnsinoComponent,
    VestibularComponent, MainComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
