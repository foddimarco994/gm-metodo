import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './module/angular-material';
import { CardsComponent } from './@component/cards/cards.component';
import { ContattiComponent } from './@component/contatti/contatti.component';
import { CorsoComponent } from './@component/corso/corso.component';
import { FooterComponent } from './@component/footer/footer.component';
import { HeroContentComponent } from './@component/hero-content/hero-content.component';
import { HomePageComponent } from './@component/home-page/home-page.component';
import { MetodoGmComponent } from './@component/metodo-gm/metodo-gm.component';
import { NavbarComponent } from './@component/navbar/navbar.component';
import { PageComponent } from './@component/page/page.component';
import { PageSectionComponent } from './@component/page-section/page-section.component';
import { RecensioneComponent } from './@component/recensione/recensione.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ContattiComponent,
    CorsoComponent,
    FooterComponent,
    HeroContentComponent,
    HomePageComponent,
    MetodoGmComponent,
    NavbarComponent,
    PageComponent,
    PageSectionComponent,
    RecensioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
