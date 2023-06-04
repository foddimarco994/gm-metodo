import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './@component/home-page/home-page.component';
import { PageComponent } from './@component/page/page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'page', component: PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
