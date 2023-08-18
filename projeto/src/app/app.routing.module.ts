import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ContatoComponent } from "./components/contato/contato.component";
import { CalculaNutriComponent } from "./components/calcula-nutri/calcula-nutri.component";
import { QuemsoueuComponent } from "./components/quemsoueu/quemsoueu.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contatos', component: ContatoComponent},
  { path: 'calculanutri', component: CalculaNutriComponent},
  { path: 'quemsoueu', component: QuemsoueuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
