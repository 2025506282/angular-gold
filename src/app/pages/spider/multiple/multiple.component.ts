import { Component, OnInit } from '@angular/core';
import { SpiderService } from '../spider.service';
import { IElement } from 'src/app/shared/interfaces/spider';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss']
})
export class MultipleComponent implements OnInit {
  private isChildRouter = false;
  private validateForm: FormGroup;
  private spiderList: Array<IElement> = [];
  submitForm(): void { }
  constructor(
    private _spiderService: SpiderService,
    private fb: FormBuilder,
    private router: Router
  ) { }
  public getSpiderList() { }
  ngOnInit() {
    this.isChildRouter = this.router.url !== '/spider/multiple';
    this.validateForm = this.fb.group({
      url: [null],
      time: [null]
    });
  }
}
