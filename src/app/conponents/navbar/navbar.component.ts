import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NavbarChildrenComponent } from '../navbar-children/navbar-children.component'
import { ListdataService } from '../../api/navlist/listdata.service'
import { Router } from '@angular/router'
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [ListdataService],
  animations: [
    trigger('isShow', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  constructor(listdataService: ListdataService, private router: Router) {
    this.navData = listdataService.getData()
  }

  @ViewChild(NavbarChildrenComponent)
  private NavbarChildrenComponent: NavbarChildrenComponent

  private navData = []
  private isNeedShow = false
  private selectIndex = 1
  private user_input = ''
  private state = 'inactive'

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  itemClickHanlder(index: number): void {
    this.selectIndex === index ? '' : this.isNeedShow = false
    this.selectIndex = index
    this.isNeedShow = this.isNeedShow ? false : true
  }

  print(val): void {
    console.log(val)
  }

  onVoted(str: string): void{
    this.router.navigate([str])
  }

  getChildrenMethod(): void {
    this.NavbarChildrenComponent.tstMethod()
    this.state = this.state === 'active' ? 'inactive' : 'active'
  }
}
