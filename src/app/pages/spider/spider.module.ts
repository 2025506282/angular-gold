import { NgModule } from '@angular/core';
import { SpiderComponent } from './components/spider/spider.component';
import { SharedModule } from '../../shared/shared.module';
import { SpiderRoutes } from './spider.routing';
import { NewsComponent } from './news/news.component';
import { GoldComponent } from './gold/gold.component';
import { MultipleComponent } from './multiple/multiple.component';
import { SingleComponent } from './single/single.component';
import { MultipleEditComponent } from './multiple/edit/edit.component';
import { MultipleNewComponent } from './multiple/new/new.component';
import { Step1Component } from './multiple/components/step1/step1.component';
import { Step2Component } from './multiple/components/step2/step2.component';
import { SpiderGuard } from './spider.guard';
import { Step3Component } from './multiple/components/step3/step3.component';
const COMPONENTS  = [
  SpiderComponent,
  NewsComponent,
  GoldComponent,
  MultipleComponent,
  SingleComponent,
  MultipleEditComponent,
  MultipleNewComponent,
  Step1Component,
  Step2Component,
  Step3Component,
];
@NgModule({
  imports: [
    SharedModule,
    SpiderRoutes,
  ],
  providers: [ SpiderGuard ],
  declarations: [...COMPONENTS],
})
export class SpiderModule { }
