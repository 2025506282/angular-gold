import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: 'new',
    component: NewComponent,
  },
];

export const UserRoutes = RouterModule.forChild(routes);
