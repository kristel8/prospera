import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { AboutComponent } from './about/about.component';
import { DescriptionComponent } from './description/description.component';
import { InvestComponent } from './invest/invest.component';
import { LoginComponent } from '../components/login/login.component';
import { InvestpropertiesComponent } from './investproperties/investproperties.component';
import { MainComponent } from './main/main.component';
import { QuestionsComponent } from './questions/questions.component';
import { SearchingComponent } from './searching/searching.component';
import { SimulationComponent } from './simulation/simulation.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'inicio', component: MainComponent },
  { path: 'nuestro-equipo', component: TeamComponent },
  { path: 'porque-invertir', component: InvestComponent },
  { path: 'preguntas-frecuentes', component: QuestionsComponent },
  { path: 'simulacion', component: SimulationComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'buscar', component: SearchingComponent },
  { path: 'descripcion', component: DescriptionComponent },
  { path: 'invertirpropiedades', component: InvestpropertiesComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class ViewRoutingModule { }
