import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { MainComponent } from "./app/components/main/main.component";
import { CursoComponent } from "./app/components/curso/curso.component";
import { FormaingressoComponent } from "./app/components/forma-ingresso/formaingresso.component";
import { ModalidadeEnsinoComponent } from "./app/components/modalidade-ensino/modalidadeensino.component";
import { VestibularComponent } from "./app/components/vestibular/vestibular.component";
import { LoginComponent } from "./app/components/login/login.component";

const routes : Routes = [
    {path:'', component: MainComponent},
    {path:'cursos', component: CursoComponent},
    {path:'formas-ingresso', component: FormaingressoComponent},
    {path:'modalidades-ensino', component: ModalidadeEnsinoComponent},
    {path:'vestibulares', component: VestibularComponent},
    {path:'login', component: LoginComponent},
]


@NgModule({
    declarations:[],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule{}