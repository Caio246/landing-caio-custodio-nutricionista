import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from "./home.component";
import { AppRoutingModule } from "../../app.routing.module";
import { CommonModule } from "@angular/common";
import {BeneficiosComponent} from "../beneficios/beneficios.component";
import {ContentComponent} from "../content/content.component";
import {MetodoCaioCustodioComponent} from "../metodo-caio-custodio/metodo-caio-custodio.component";

@NgModule({
    declarations: [
        HomeComponent,
        BeneficiosComponent,
        ContentComponent,
        MetodoCaioCustodioComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AppModule,
  ],
  providers: [],
  exports: [
    HomeComponent,
    BeneficiosComponent
  ],
})
export class AppModule { }
