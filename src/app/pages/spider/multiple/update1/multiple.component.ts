import { Component, OnInit } from '@angular/core';
import { SpiderService } from '../../spider.service';
import { IElement } from 'src/app/shared/interfaces/spider';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss']
})
export class MultipleComponent implements OnInit {
  private current = 0;
  private url: string = 'http://www.dyhjw.com/gold/jjsj.html';
  private locations: string[] = [];
  private result: any[] = [{}];
  private isLoading: boolean = false;
  private elementsSingle: Array<IElement> = [
    {
      name: 'urls',
      selector: '.news_list_pic>a'
    }
  ];
  private elements: Array<IElement> = [];
  public spiderUrl(): void {
    this._spiderService
      .spiderUrl({
        url: this.url,
        elements: this.elementsSingle
      })
      .subscribe(res => {
          this.locations = res.element.value;
          this.current++;
      });
  }
  public spiderUrls(): void {
    this.isLoading = true;
    this._spiderService
      .spiderUrls({
        urls: this.locations,
        elements: this.elements
      })
      .subscribe(res => {
        this.isLoading = false;
        this.result = res;
        console.log(res);
        this.current++;
      });
  }
  public addRow(): void {
    this.elements = [
      ...this.elements,
      {
        id: `${++this.elements.length}`,
        name: null,
        selector: null,
        value: null
      }
    ];
  }
  public deleteRow(id: string): void {
    this.elements = this.elements.filter(d => d.id !== id);
  }
  constructor(private _spiderService: SpiderService) {}

  ngOnInit() {}
}
