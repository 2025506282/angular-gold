import { Component, OnInit } from '@angular/core';
import { ISpider } from 'src/app/shared/interfaces/spider';
import { SpiderService } from '../spider.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  private spiderHeader: Array<ISpider> = [
    {
      id: '1',
      name: '爬取网址',
      selector: 'http://www.dyhjw.com/jinjiaosuo.html',
      value: null
    }
  ]
  private spiders: Array<ISpider> = [];
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
  public send(): void {
    const body = {
      url: this.spiderHeader[0].selector,
      data: this.spiders
    }
    this._spiderService.spiderGold(body).subscribe(res => {
      this.spiders = [...res];
    })
  }
  public deleteRow(id: string): void {
    this.spiders = this.spiders.filter(d => d.id !== id);
  }
  constructor(public _spiderService: SpiderService){}
  ngOnInit(): void {
    // const socket = io('http://localhost');
    // socket.on('connect', function(socket){
    //   console.log('connect', socket);
    // });
    // socket.on('event', function(data){
    //   console.log(data);
    // });
    // socket.on('disconnect', function(){
    //   console.log('disconnect');
    // });
  }
}
