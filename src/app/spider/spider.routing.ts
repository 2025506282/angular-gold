import { Routes, RouterModule } from '@angular/router';
import { SpiderComponent } from './spider.component';

const routes: Routes = [
  {  
    path: '',
    component: SpiderComponent
  },
];

export const SpiderRoutes = RouterModule.forChild(routes);
