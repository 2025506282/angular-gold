import { NgModule } from '@angular/core';
import { SpiderComponent } from './spider.component';
import { SharedModule } from '../../shared/shared.module';
import { SpiderRoutes } from './spider.routing';
import { NewsComponent } from './news/news.component';
import { GoldComponent } from './gold/gold.component';
const COMPONENTS  = [
  SpiderComponent,
  NewsComponent,
  GoldComponent
]
@NgModule({
  imports: [
    SharedModule,
    SpiderRoutes
  ],
  declarations: [...COMPONENTS]
})
export class SpiderModule { }
