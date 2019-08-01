import { Component, OnInit } from '@angular/core';
import { SpiderService } from '../spider.service';
import { ISpider } from 'src/app/shared/interfaces/spider';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss']
})
export class MultipleComponent implements OnInit {
  private current = 0;
  private url: string = 'http://www.dyhjw.com/gold/jjsj.html';
  private selector: string = '.news_list_pic>a';
  private locations: string[]  = [];
  private spiders: Array<ISpider> = [];
  public send(): void {
    this._spiderService.spiderUrl({
      url: this.url,
      selector: this.selector
    }).subscribe(res => {
      this.locations = res.locations;
      if(this.locations.length > 0) {
        this.current++;
      }
    })
  }
  public addRow(): void {
    this.spiders = [
      ...this.spiders,
      {
        id: `${++this.spiders.length}`,
        name: null,
        selector: null,
        value: null,
      }
    ];
  }
  public deleteRow(id: string): void {
    this.spiders = this.spiders.filter(d => d.id !== id);
  }
  constructor(private _spiderService: SpiderService) { }

  ngOnInit() {
  }

}
