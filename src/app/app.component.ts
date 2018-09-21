import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonServiceService } from './common-service/common-service.service'
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router'
import { Subscription }   from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommonServiceService]
})
export class AppComponent implements OnDestroy, OnInit{
  title = 'angular'
  mission = '12323'
  color = ''
  subscription: Subscription
  constructor(private service: CommonServiceService, private router: Router) {
    this.subscription = service.missionAnnounced$.subscribe(
      mission => {
        alert('儿子触发的')
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.service.tirggerLoading(true)
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.service.tirggerLoading(false)
        }, 1500)
      }
    })
  }

  handlerClick() {
    this.service.confirmMission('我是你爸爸')
  }
}
