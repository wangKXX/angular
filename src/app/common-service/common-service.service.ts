import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable()
export class CommonServiceService {
  private missionAnnouncedSource = new Subject<string>()
  private missionConfirmedSource = new Subject<string>()
  private isNeedShowLoading = new Subject<boolean>()

  missionAnnounced$ = this.missionAnnouncedSource.asObservable()
  missionConfirmed$ = this.missionConfirmedSource.asObservable()
  isNeedShowLoading$ = this.isNeedShowLoading.asObservable()

  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission)
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut)
  }

  tirggerLoading(isShow: boolean) {
    this.isNeedShowLoading.next(isShow)
  }

}
