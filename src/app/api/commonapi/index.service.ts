import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class IndexService {
  constructor(private http: Http) {}

  getNewsList() {
    return this.http.get('https://www.apiopen.top/satinGodApi?type=1&page=1')
  }

}
