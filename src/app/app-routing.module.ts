import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { MedicineComponent } from './medicine/medicine.component';
import { PatientsComponent } from './patients/patients.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component'; //TODO: Create Sign Up Logic in Component
import { MenuComponent } from './menu/menu.component';

import { AuthGuard } from './authentication/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'log-in', component: SigninComponent},
  { path: 'sign-up', component: SignupComponent}, //TODO: Create Sign Up Logic in Component
  { path: 'home', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'medicine', component: MedicineComponent, canActivate: [AuthGuard] },
  { path: 'patients', component: PatientsComponent, canActivate: [AuthGuard] }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
