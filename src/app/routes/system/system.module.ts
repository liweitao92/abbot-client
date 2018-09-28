import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { SystemMenuComponent } from './menu/menu.component';
import { SystemUserComponent } from './user/user.component';
import { SystemUserEditComponent } from './user/edit/edit.component';
import { SystemUserViewComponent } from './user/view/view.component';

const COMPONENTS = [
  SystemMenuComponent,
  SystemUserComponent];
const COMPONENTS_NOROUNT = [
  SystemUserEditComponent,
  SystemUserViewComponent];

@NgModule({
  imports: [
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class SystemModule { }
