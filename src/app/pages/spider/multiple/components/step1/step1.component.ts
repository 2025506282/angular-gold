import { Component, OnInit } from "@angular/core";
import { IElement } from "src/app/shared/interfaces/spider";
import { SpiderService } from "../../../spider.service";

@Component({
  selector: "app-step1",
  templateUrl: "./step1.component.html",
  styleUrls: ["./step1.component.css"]
})
export class Step1Component implements OnInit {
  private url: string = "http://www.dyhjw.com/gold/jjsj.html";
  private element: IElement = {
    name: "urls",
    selector: ".news_list_pic>a"
  };
  private locations: string[] = [];

  constructor(private _spiderService: SpiderService) {}
  public spiderUrl(): void {
    this._spiderService.getSpiderUrls({
      url: this.url,
      elements: [this.element]
    });
    // this._spiderService
    //   .spiderUrl({
    //     url: this.url,
    //     elements: [this.element]
    //   })
    //   .subscribe(res => {
    //     this.locations = res.element.value;
    //     // this.current++;
    //   });
  }
  ngOnInit() {}
}
