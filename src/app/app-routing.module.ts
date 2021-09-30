import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ManageEntitiesComponent } from "./manage-entities/manage-entities.component";
import { SetupSemComponent } from "./setup-sem/setup-sem.component";
import { SchedulesComponent } from "./schedules/schedules.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'manage',
    component: ManageEntitiesComponent
  },
  {
    path: 'setup',
    component: SetupSemComponent
  },
  {
    path: 'schedules',
    component: SchedulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
