import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import { ViewModule } from '../views/view.module';
import { LoginComponent } from './login/login.component';
import { SearcherComponent } from './searcher/searcher.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    LoginComponent,
    SearcherComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    SearcherComponent
  ]
})
export class ComponentModule { }
