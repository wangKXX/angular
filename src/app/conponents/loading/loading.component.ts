import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../common-service/common-service.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  private subscription: Subscription
  private show: boolean = false
  constructor(private service: CommonServiceService) {
    this.subscription = service.isNeedShowLoading$.subscribe(isShow => {
        console.log(isShow)
        if (isShow) {
          this.show = true
        } else {
          this.show = false
        }
    })
  }

  ngOnInit() {
  }

}
