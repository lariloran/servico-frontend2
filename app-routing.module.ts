import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { MainComponent } from "./app/components/main/main.component";
import { CursoComponent } from "./app/components/curso/curso.component";
import { FormaingressoComponent } from "./app/components/forma-ingresso/formaingresso.component";
import { ModalidadeensinoComponent } from "./app/components/modalidade-ensino/modalidadeensino.component";
import { VestibularComponent } from "./app/components/vestibular/vestibular.component";

const routes : Routes = [
    {path:'', component: MainComponent},
    {path:'cursos', component: CursoComponent},
    {path:'formas-ingresso', component: FormaingressoComponent},
    {path:'modalidades-ensino', component: ModalidadeensinoComponent},
    {path:'vestibulares', component: VestibularComponent},
]


@NgModule({
    declarations:[],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule{}