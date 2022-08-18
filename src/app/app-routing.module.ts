import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CANADIANComponent } from './canadian/canadian.component';
import { EUROComponent } from './euro/euro.component';
import { USDComponent } from './usd/usd.component';

const routes: Routes = [
  {
    path:"usd",
    component:USDComponent
  },
  {
    path:"euro",
    component:EUROComponent
  },
  {
    path:"canadian",
    component:CANADIANComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
