import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IElement, ISpiderUrlsForm } from 'src/app/shared/interfaces/spider';
import { SpiderService } from '../../../spider.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  @Input() public resultUrls: string[] = [];
  @Output() private spiderUrlsForm: EventEmitter<ISpiderUrlsForm> = new EventEmitter();
  public selectedTypes: string[];
  public selectedType: string;
  public elements: IElement[] = [
    {
      id: '1',
      name: '标题',
      selector: '.zbt',
    },
    {
      id: '2',
      name: '摘要',
      selector: '.zhaiyao_word',
    },
    {
      id: '3',
      name: '发布时间',
      selector: '#pushtime',
    },
    {
      id: '4',
      name: '作者',
      selector: '.zrbj',
    },
    {
      id: '5',
      name: '内容',
      selector: '.section_wrap',
    },
  ];
  constructor(
    private _spiderService: SpiderService,
  ) { }
  public addRow(): void {
    this.elements = [
      ...this.elements,
      {
        id: `${++this.elements.length}`,
        name: null,
        selector: null,
        value: null,
      },
    ];
  }
  public deleteRow(id: string): void {
    this.elements = this.elements.filter(d => d.name !== name);
  }
  public send(): void {
    this.spiderUrlsForm.emit({
      urls: this.resultUrls,
      elements: this.elements,
    });
  }
  public onSelectTypeChange($event: number): void {
    this._spiderService.getSpiderForm({id: $event}).subscribe(res => {
      this.elements = [...res];
    });

  }
  public ngOnInit(): void {
    this._spiderService.getSpiderTypes().subscribe(res => {
      this.selectedTypes = res;
    });
    this.onSelectTypeChange(1);
  }

}
