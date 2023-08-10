import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MidContentComponent } from './mid-content/mid-content.component';
import { ParceriasComponent } from './parcerias/parcerias.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FooterComponent } from './footer/footer.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MidContentComponent,
    ParceriasComponent,
    ResultadosComponent,
    FooterComponent,
    BeneficiosComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
