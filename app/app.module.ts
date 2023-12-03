import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormaingressoComponent } from './components/forma-ingresso/formaingresso.component';
import { ModalidadeensinoComponent } from './components/modalidade-ensino/modalidadeensino.component';
import { VestibularComponent } from './components/vestibular/vestibular.component';
import { CursoComponent } from './components/curso/curso.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    FormaingressoComponent,
    ModalidadeensinoComponent,
    VestibularComponent, MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
