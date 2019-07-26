import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutes
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
