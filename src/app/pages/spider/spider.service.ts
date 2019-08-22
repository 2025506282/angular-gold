import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ISpiderUrlForm } from 'src/app/shared/interfaces/spider';
@Injectable({
  providedIn: 'root',
})
export class SpiderService {
  constructor(private _http: HttpClient) {}

  public getSpiderTypes(): Observable<any> {
    return this._http.post('/config/get-spider-types', null);
  }
  public getSpiderForm(body: any): Observable<any> {
    return this._http.post('/config/get-spider-form', body);
  }
  public getSpiderList(body: any): Observable<any> {
    return this._http.post('/spider/list', body);
  }
  public spiderGold(body: any): Observable<any> {
    return this._http.post('/spider/gold', body);
  }
  public spiderNews(body: ISpiderUrlForm): Observable<any> {
    return this._http.post('/spider/news', body);
  }
  public spiderUrl(body: ISpiderUrlForm): Observable<any> {
    return this._http.post('/spider/url', body);
  }
  public spiderUrls(body: any): Observable<any> {
    return this._http.post('/spider/urls', body);
  }
  public spiderNewsAndInsert(body: any): Observable<any> {
    return this._http.post('/spider/spider-news-and-insert', body);
  }
}
