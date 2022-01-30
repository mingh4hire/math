import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgoodcompComponent } from './agoodcomp/agoodcomp.component';
import { FootComponent } from './foot/foot.component';
import { Guard1Guard } from './guard1.guard';
import { Guard2Guard } from './guard2.guard';
import { Guard3Guard } from './guard3.guard';
import { Guard4Guard } from './guard4.guard';
import { HandComponent } from './hand/hand.component';
import { ToeComponent } from './toe/toe.component';

const routes: Routes = [{path: 'agoodcomp', component: AgoodcompComponent},
{path: 'foot', component: FootComponent, canActivate:[Guard1Guard]},
{path: 'foot2', component: FootComponent, canActivate:[Guard2Guard, Guard3Guard] },
{path: 'hand', component: HandComponent, canActivate:[Guard1Guard]},
{path: 'toe', component: ToeComponent, canActivate:[Guard1Guard, Guard2Guard, Guard4Guard,Guard3Guard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
