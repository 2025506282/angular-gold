import { Routes, RouterModule } from '@angular/router';
import { SpiderComponent } from './spider.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {  
    path: '',
    component: SpiderComponent
  },
  {  
    path: 'news',
    component: NewsComponent
  },
];

export const SpiderRoutes = RouterModule.forChild(routes);
