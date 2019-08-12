import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpiderService {
  public current: number = 0; // 当前的步数
  public urls: string[] = []; // 爬取一个页面的所有urls
  public getSpiderUrls(body) {
    this.spiderUrl(body).subscribe(res => {
      this.urls = res.element.value;
      this.current++;
    });
  }
  constructor(private _http: HttpClient) {}

  public getSpiderList(body: any): Observable<any> {
    return this._http.post('/spider/list', body);
  }
  public spiderGold(body: any): Observable<any> {
    return this._http.post('/spider/gold', body);
  }
  public spiderUrl(body: any): Observable<any> {
    return this._http.post('/spider/url', body);
  }
  public spiderUrls(body: any): Observable<any> {
    return this._http.post('/spider/urls', body);
  }
}
