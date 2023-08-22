import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BeneficiosComponent } from "./components/beneficios/beneficios.component";
import { ParceriasComponent } from "./components/parcerias/parcerias.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ResultadosComponent } from "./components/resultados/resultados.component";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { CalculaNutriComponent } from "./components/calcula-nutri/calcula-nutri.component";
import { ContatoComponent } from "./components/contato/contato.component";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { ReactiveFormsModule } from "@angular/forms";
import { QuemsoueuComponent } from "./components/quemsoueu/quemsoueu.component";
import { MetodoCaioCustodioComponent } from "./components/metodo-caio-custodio/metodo-caio-custodio.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BeneficiosComponent,
    ParceriasComponent,
    ResultadosComponent,
    FooterComponent,
    CalculaNutriComponent,
    ContatoComponent,
    QuemsoueuComponent,
    MetodoCaioCustodioComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        ButtonModule,
        ReactiveFormsModule
    ],
  providers: [],
  exports: [
    ResultadosComponent,
    NavbarComponent,
    ParceriasComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
