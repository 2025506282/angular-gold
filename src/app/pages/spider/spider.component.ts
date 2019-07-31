import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd';
// import io from 'socket.io-client';
import { SpiderService } from './spider.service';

interface ISpider {
  id: string,
  name: string,
  selector: string,
  value?: string
}
@Component({
  selector: 'app-spider',
  templateUrl: './spider.component.html',
  styleUrls: ['./spider.component.scss']
})

export class SpiderComponent implements OnInit {
  spiderHeader: Array<ISpider> = [
    {
      id: '1',
      name: '爬取网址',
      selector: 'http://www.dyhjw.com/jinjiaosuo.html'
    }
  ]
  spiders: Array<ISpider> = this.spiderHeader;
  listOfData: any[] = [];
  private addRow(): void {
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
  private send(): void {
    const body = {
      url: this.spiders[0].selector,
      data: this.spiders.slice(1)
    }
    this._spiderService.spiderGold(body).subscribe(res => {
      this.spiders = [...this.spiderHeader, ...res];
      console.log(res);
    })
  }
  deleteRow(id: string): void {
    this.spiders = this.spiders.filter(d => d.id !== id);
  }
  constructor(private _spiderService: SpiderService){}
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
