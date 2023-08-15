import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {RouterModule} from "@angular/router";
import {LoginRotass} from "./beneficios.routes";

@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    RouterModule.forChild(LoginRotass)
  ]
})
export class HomeModule {}
