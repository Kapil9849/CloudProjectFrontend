import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MonthlydeathsComponent } from './monthlydeaths/monthlydeaths.component';
import { YearlydeathsComponent } from './yearlydeaths/yearlydeaths.component';
import { AgedataComponent } from './agedata/agedata.component';
import { PolicedataComponent } from './policedata/policedata.component';
import { TopstatesComponent } from './topstates/topstates.component';
import { DeathtypesComponent } from './deathtypes/deathtypes.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"monthlydata",
    component: MonthlydeathsComponent
  },
  {
    path: "yearlydata",
    component: YearlydeathsComponent
  },
  {
    path: "agedata",
    component: AgedataComponent
  },
  {
    path: "policedata",
    component: PolicedataComponent
  },
  {
    path: "topstates",
    component:TopstatesComponent
  },
  {
    path: "deathdata",
    component: DeathtypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
