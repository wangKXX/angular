import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './conponents/navbar/navbar.component';
import { FooterbarComponent } from './conponents/footerbar/footerbar.component';
import { SlidlistComponent } from './conponents/slidlist/slidlist.component';
import { SlidcardComponent } from './conponents/slidcard/slidcard.component';
import { NavbarChildrenComponent } from './conponents/navbar-children/navbar-children.component';
import { CssHighlightDirective } from './directive/css-highlight.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { appRoutes } from '../router/index';
import { LoadingComponent } from './conponents/loading/loading.component';
import { BlackborderComponent } from './conponents/blackborder/blackborder.component';
import { EaselJSComponent } from './conponents/easel-js/easel-js.component';
import { FacecheckComponent } from './conponents/facecheck/facecheck.component'
import { FacecheckService } from './api/facecheck.service'
@NgModule({
  declarations: [
    LoadingComponent,
    AppComponent,
    NavbarComponent,
    FooterbarComponent,
    SlidlistComponent,
    SlidcardComponent,
    NavbarChildrenComponent,
    CssHighlightDirective,
    BlackborderComponent,
    EaselJSComponent,
    FacecheckComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [FacecheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
