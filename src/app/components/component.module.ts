import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { SimulationComponent } from '../views/simulation/simulation.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LoadingComponent
  ]
})
export class ComponentModule { }
