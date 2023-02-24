import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from '../fake.login/canActivate';
import { CanDeativateGuard } from '../fake.login/canDeactivate';

const routes: Routes = [
  { path: '', component: , canActivate: [CanActivateGuard] },
  { path: 'form', component: FormComponent, canDeactivate: [CanDeactivateGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
