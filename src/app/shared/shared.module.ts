import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ThirdLoginComponent } from './components/third-login/third-login.component';
const THIRDMODULES = [
  NgZorroAntdModule,
];
const THIRDCOMPONENTS = [
  ThirdLoginComponent,
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...THIRDMODULES,
  ],
  declarations: [
    ...THIRDCOMPONENTS,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...THIRDMODULES,
    ...THIRDCOMPONENTS,
  ],
})
export class SharedModule { }
