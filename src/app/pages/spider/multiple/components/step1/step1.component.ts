import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IElement, ISpiderUrlForm } from 'src/app/shared/interfaces/spider';
import { SpiderService } from '../../../spider.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {
  public locations: string[] = [];
  public selectedType: string = 'gold';
  private url: string = 'http://www.dyhjw.com/gold/jjsj.html';
  private element: IElement = {
    name: 'urls',
    selector: '.news_list_pic>a',
  };
  @Output()  public spiderUrlForm: EventEmitter<ISpiderUrlForm> = new EventEmitter();
  public ngOnInit(): void { }
  constructor(private _spiderService: SpiderService) { }
  public spiderUrl(): void {
    this.spiderUrlForm.emit({
        url: this.url,
        elements: [this.element],
    });
  }
}
