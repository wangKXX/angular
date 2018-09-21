import { Routes } from '@angular/router';
import { SlidcardComponent } from '../app/conponents/slidcard/slidcard.component'
import { BlackborderComponent } from '../app/conponents/blackborder/blackborder.component'

export const appRoutes: Routes = [
  {
    path: 'index',
    component: SlidcardComponent
  },
  {
    path: 'blackborder',
    component: BlackborderComponent
  }
]
