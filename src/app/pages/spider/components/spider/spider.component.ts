import { Component, OnInit, ElementRef, ViewChild, HostListener, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd';
// import io from 'socket.io-client';
import { SpiderService } from '../../spider.service';
import { ISpider } from 'src/app/shared/interfaces/spider';


@Component({
  selector: 'app-spider',
  templateUrl: './spider.component.html',
  styleUrls: ['./spider.component.scss']
})

export class SpiderComponent implements OnInit {
  @Input() isHideSpiderHeader:boolean | undefined;
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
