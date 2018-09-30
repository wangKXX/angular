import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonServiceService } from '../../common-service/common-service.service'
import { Subscription }   from 'rxjs';
import { IndexService } from '../../api/commonapi/index.service'

@Component({
  selector: 'app-slidcard',
  templateUrl: './slidcard.component.html',
  styleUrls: ['./slidcard.component.scss'],
  providers: [IndexService]
})
export class SlidcardComponent implements OnDestroy, OnInit {
  subscription: Subscription
  private newsListData = null
  constructor(private commonServiceService: CommonServiceService, private indexService: IndexService) {
    this.subscription = commonServiceService.missionConfirmed$.subscribe(num => {
      alert(num)
    })
  }

  hanlderClick() {
    this.commonServiceService.announceMission('success')
  }

  ngOnInit() {
    this.indexService.getNewsList().subscribe(data => {
      let retData: any = {}
      retData = data
      retData = JSON.parse(retData._body)
      if (retData.code === 200) {
        this.newsListData = retData.data
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
