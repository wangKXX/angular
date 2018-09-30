import { Routes } from '@angular/router';
import { SlidcardComponent } from '../app/conponents/slidcard/slidcard.component'
import { BlackborderComponent } from '../app/conponents/blackborder/blackborder.component'
import { EaselJSComponent } from '../app/conponents/easel-js/easel-js.component'
import { FacecheckComponent } from '../app/conponents/facecheck/facecheck.component'

export const appRoutes: Routes = [
  {
    path: 'index',
    component: SlidcardComponent
  },
  {
    path: 'blackborder',
    component: BlackborderComponent
  },
  {
    path: 'EaselJS',
    component: EaselJSComponent
  },
  {
    path: 'facecheck',
    component: FacecheckComponent
  }
]
