import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedComponent } from './pages/shared/shared.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { BreadCrumbsComponent } from './pages/shared/bread-crumbs/bread-crumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    DashboardComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    BreadCrumbsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
