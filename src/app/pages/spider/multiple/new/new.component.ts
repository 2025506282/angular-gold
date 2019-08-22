// tslint:disable-next-line: max-line-length
import { Component, OnInit, OnChanges, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy, DoCheck } from '@angular/core';
import { SpiderService } from '../../spider.service';
import { ISpiderUrlForm, ISpiderUrlsForm } from 'src/app/shared/interfaces/spider';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
// tslint:disable-next-line: max-line-length
export class MultipleNewComponent implements OnInit {
  public ngOnInit(): void {
    console.log('ngOnInit');
  }
  // public ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }
  // public ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
  // }
  // public ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked');
  // }
  // public ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }
  // public ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');
  // }
  // public ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');
  // }
  // public ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
  //   console.log('ngOnChanges');
  // }
  public resultUrls: string[] = [];
  public resultPages: ISpiderUrlForm[] = [];
  public current: number = 0;
  constructor(
    private _spiderService: SpiderService,
  ) { }
  public onSpiderUrlForm(spiderUrlForm: ISpiderUrlForm): void {
    this._spiderService.spiderUrl(spiderUrlForm).subscribe(res => {
      this.resultUrls = res.element.value;
      this.current++;
    });
  }
  public onSpiderUrlsForm(spiderUrlsForm: ISpiderUrlsForm): void {
    this._spiderService.spiderNewsAndInsert(spiderUrlsForm).subscribe(res => {
      this.resultPages = res;
      this.current++;
    });
  }

  public pre(): void {
    this.current -= 1;
  }

  public next(): void {
    this.current += 1;
  }

  public done(): void {
    console.log('done');
  }
}
