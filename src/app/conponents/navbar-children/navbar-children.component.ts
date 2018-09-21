import { Component, OnInit, OnChanges, AfterViewInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-children',
  templateUrl: './navbar-children.component.html',
  styleUrls: ['./navbar-children.component.scss']
})
export class NavbarChildrenComponent implements OnInit, OnChanges, AfterViewInit {

  constructor() {}
  @Input() selectIndex: number
  @Input() item: object

  @Output() voted = new EventEmitter<string>()
  private _isNeedShow = false
  private testNumber = 10
  private color = '#1976d2'

  ngOnInit() {
    console.log('-------init-------')
  }
  ngOnChanges() {
    console.log('-----change-----')
  }
  ngAfterViewInit() {
    console.log('-----afterviewinit------')
  }

  @Input()
  set isNeedShow(isNeedShow: boolean) {
    console.log(isNeedShow)
    this._isNeedShow = isNeedShow
  }

  get isNeedShow(): boolean {
    return this._isNeedShow
  }

  linkTo(str: string): void {
    this.voted.emit(str)
  }

  tstMethod(): void {
    alert(this.testNumber)
  }
}
