import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './module/angular-material';
import { CardsComponent } from './@component/cards/cards.component';
import { ContattiComponent } from './@component/contatti/contatti.component';
import { CorsoComponent } from './@component/corso/corso.component';
import { FooterComponent } from './@component/footer/footer.component';
import { HeroContentComponent } from './@component/hero-content/hero-content.component';
import { MetodoGmComponent } from './@component/metodo-gm/metodo-gm.component';
import { NavbarComponent } from './@component/navbar/navbar.component';
import { PageComponent } from './@component/page/page.component';
import { PageSectionComponent } from './@component/page-section/page-section.component';
import { RecensioneComponent } from './@component/recensione/recensione.component';
import { HeroImgComponent } from './@component/hero-img/hero-img.component';
import { FormComponent } from './@component/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormService } from './@service/contactForm.service';
import { PrivacyPolicyComponent } from './@component/privacy-policy/privacy-policy.component';
import { CookieBannerComponent } from './@component/cookie-banner/cookie-banner.component';
import { TerminiCondizioniComponent } from './@component/termini-condizioni/termini-condizioni.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ContattiComponent,
    CorsoComponent,
    FooterComponent,
    HeroContentComponent,
    MetodoGmComponent,
    NavbarComponent,
    PageComponent,
    PageSectionComponent,
    RecensioneComponent,
    HeroImgComponent,
    FormComponent,
    PrivacyPolicyComponent,
    CookieBannerComponent,
    TerminiCondizioniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
