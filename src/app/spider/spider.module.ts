import { NgModule } from '@angular/core';
import { SpiderComponent } from './spider.component';
import { SharedModule } from '../shared/shared.module';
import { SpiderRoutes } from './spider.routing';

@NgModule({
  imports: [
    SharedModule,
    SpiderRoutes
  ],
  declarations: [SpiderComponent]
})
export class SpiderModule { }
