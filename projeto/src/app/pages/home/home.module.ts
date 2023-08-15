import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from "./home.component";
import { AppRoutingModule } from "../../app.routing.module";
import { CommonModule } from "@angular/common";
import {NavbarComponent} from "../navbar/navbar.component";

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  exports: [
    NavbarComponent,
    HomeComponent,
  ],
})
export class AppModule { }
