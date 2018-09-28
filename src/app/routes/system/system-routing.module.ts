import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemMenuComponent } from './menu/menu.component';
import { SystemUserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'menu', component: SystemMenuComponent },
  { path: 'user', component: SystemUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
