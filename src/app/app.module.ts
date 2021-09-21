import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewRoutingModule } from './views/view-routing.module';
import { ViewModule } from './views/view.module';
import { AppRoutingModule } from './app-routing.module';
import { ComponentModule } from './components/component.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ViewRoutingModule,
    AppRoutingModule,
    ViewModule,
    RouterModule,
    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
