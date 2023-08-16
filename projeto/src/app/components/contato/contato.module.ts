import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "../../app.routing.module";
import { CommonModule } from "@angular/common";
import { ContatoComponent } from "./contato.component";

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  exports: [
    ContatoComponent
  ],
})
export class ContatoModule { }
