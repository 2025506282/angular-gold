import { Routes, RouterModule } from '@angular/router';
import { SpiderComponent } from './components/spider/spider.component';
import { NewsComponent } from './news/news.component';
import { SingleComponent } from './single/single.component';
import { MultipleComponent } from './multiple/multiple.component';
import { MultipleEditComponent } from './multiple/edit/edit.component';
import { MultipleNewComponent } from './multiple/new/new.component';
import { SpiderGuard } from './spider.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/multiple',
  },
  {
    path: 'single',
    component: SingleComponent,
  },
  {
    path: 'multiple',
    component: MultipleComponent,
    canActivate: [SpiderGuard],
    children: [
      {
        path: 'edit',
        component: MultipleEditComponent,
      },
      {
        path: 'new',
        component: MultipleNewComponent,
        canActivateChild: [SpiderGuard],
      },
    ],
  },
  {
    path: 'news',
    component: NewsComponent,
  },

];

export const SpiderRoutes = RouterModule.forChild(routes);
