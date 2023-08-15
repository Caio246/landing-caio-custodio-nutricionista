import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";
import {NavbarComponent} from "./pages/navbar/navbar.component";
import {BeneficiosComponent} from "./pages/beneficios/beneficios.component";
import {ParceriasComponent} from "./pages/parcerias/parcerias.component";
import {FooterComponent} from "./pages/footer/footer.component";
import {ResultadosComponent} from "./pages/resultados/resultados.component";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./pages/home/home.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BeneficiosComponent,
    ParceriasComponent,
    ResultadosComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
