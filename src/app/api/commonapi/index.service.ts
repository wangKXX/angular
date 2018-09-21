import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class IndexService {
  constructor(private http: HttpClient) {}

  getNewsList() {
    return this.http.get('https://www.apiopen.top/satinGodApi?type=1&page=1')
  }

}
