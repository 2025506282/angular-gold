import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import axios  from "axios";
@Injectable({
  providedIn: "root"
})
export class SpiderService {
  constructor(private _http: HttpClient) {}
  public spiderGold(body: any): Observable<any> {
    return this._http.post("/spider/gold", body);
  }
}
