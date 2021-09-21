import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import { ViewModule } from '../views/view.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LoadingComponent
  ]
})
export class ComponentModule { }
