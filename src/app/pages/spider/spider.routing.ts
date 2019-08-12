import { Routes, RouterModule } from '@angular/router';
import { SpiderComponent } from './components/spider/spider.component';
import { NewsComponent } from './news/news.component';
import { SingleComponent } from './single/single.component';
import { MultipleComponent } from './multiple/multiple.component';
import { MultipleEditComponent } from './multiple/edit/edit.component';
import { MultipleNewComponent } from './multiple/new/new.component';

const routes: Routes = [
  {
    path: 'single',
    component: SingleComponent
  },
  {
    path: 'multiple',
    component: MultipleComponent,
    children: [
      {
        path: 'edit',
        component: MultipleEditComponent,
      },
      {
        path: 'new',
        component: MultipleNewComponent,
      },
    ]
  },
  {
    path: 'news',
    component: NewsComponent
  },
];

export const SpiderRoutes = RouterModule.forChild(routes);
