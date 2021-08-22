import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AppModule } from '../app.module';
import { ComponentModule } from '../components/component.module';
import { TeamComponent } from './team/team.component';
import { InvestComponent } from './invest/invest.component';
import { QuestionsComponent } from './questions/questions.component';
import { SimulationComponent } from './simulation/simulation.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { InvestpropertiesComponent } from './investproperties/investproperties.component';


@NgModule({
  declarations: [
    LoginComponent,
    MainComponent,
    TeamComponent,
    InvestComponent,
    QuestionsComponent,
    SimulationComponent,
    AboutComponent,
    DescriptionComponent,
    InvestpropertiesComponent
    
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    ComponentModule,
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ViewModule { }
