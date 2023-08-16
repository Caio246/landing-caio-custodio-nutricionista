import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from "./home.component";
import { AppRoutingModule } from "../../app.routing.module";
import { CommonModule } from "@angular/common";
import {BeneficiosComponent} from "../beneficios/beneficios.component";
import {AppModule} from "../../app.module";

@NgModule({
  declarations: [
    HomeComponent,
    BeneficiosComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        AppModule,
        AppModule,
        AppModule,
        AppModule,
        AppModule,
        AppModule,
        AppModule,
        AppModule,
        AppModule,
        AppModule
    ],
  providers: [],
  exports: [
    HomeComponent,
    BeneficiosComponent
  ],
})
export class AppModule { }
