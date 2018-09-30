import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class FacecheckService {
  private appKey = 'WkwT8fMa55uF53ifahLeDskfYmr9nflY'
  private apiSecret ='x44JGb5-g7FGJnJT-u-pEX4rBEDd4pOY'
  constructor(private http: Http) {
  }

  getFaceCheckData (img: string) {
    let obj: any = {}
    obj.params = {
      api_key: 'WkwT8fMa55uF53ifahLeDskfYmr9nflY',
      api_secret: this.apiSecret,
    }
    return this.http.post("/apidata", {
      // api_key: 'WkwT8fMa55uF53ifahLeDskfYmr9nflY',
      // api_secret: this.apiSecret,
      image_base64: img
    }, obj)
  }
}
