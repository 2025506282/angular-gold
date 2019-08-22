import { NgModule } from '@angular/core';
import { NewsComponent } from './news.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsRoutes } from './news.routing';
const COMPONENTS  = [
  NewsComponent,
];
@NgModule({
  imports: [
    SharedModule,
    NewsRoutes,
  ],
  declarations: [COMPONENTS],
})
export class NewsModule { }
