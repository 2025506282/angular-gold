import { Component, OnInit } from '@angular/core';
import { SpiderService } from '../spider.service';
import { IElement } from 'src/app/shared/interfaces/spider';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss'],
})
export class MultipleComponent implements OnInit {
  public isChildRouter = false;
  public validateForm: FormGroup;
  public spiderList: IElement[] = [];
  constructor(
    private _spiderService: SpiderService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.router.events.subscribe((events: NavigationEnd) => {
      this.isChildRouter = events.url !== '/spider/multiple';
    });
  }
  public submitForm(): void { }
  public getSpiderList(): void { }
  public ngOnInit(): void {
    this.validateForm = this.fb.group({
      url: [null],
      time: [null],
    });
  }
  public toNew(): void {
    this.isChildRouter = true;
    this.router.navigate(['/spider/multiple/new']);
  }
}
