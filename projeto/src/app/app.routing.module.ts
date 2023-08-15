import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { BeneficiosComponent } from "./pages/beneficios/beneficios.component";
import { ParceriasComponent } from "./pages/parcerias/parcerias.component";
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { ResultadosComponent } from "./pages/resultados/resultados.component";
import {  FooterComponent } from "./pages/footer/footer.component";

const routes: Routes = [
  { path: '**', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent},
  { path: 'beneficios', component: BeneficiosComponent},
  { path: 'parcerias', component: ParceriasComponent},
  { path: 'resultados', component: ResultadosComponent},
  { path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
