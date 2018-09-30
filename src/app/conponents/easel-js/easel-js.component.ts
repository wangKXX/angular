import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-easel-js',
  templateUrl: './easel-js.component.html',
  styleUrls: ['./easel-js.component.scss']
})
export class EaselJSComponent implements OnInit {
  constructor() { }
  private canvas
  private startPostion: any
  private movePostion: any
  private upPostion: any
  private stage: any
  private canDraw: boolean
  private isEdit: boolean = false
  private prevCon

  ngOnInit() {
    this.canvas = document.getElementById('mycanvas')
    let width = this.canvas.offsetWidth
    let height = this.canvas.offsetHeight
    this.canvas.width = width
    this.canvas.height = height

    let createjs = (<any>window).createjs
    let stage = new createjs.Stage("mycanvas");
    createjs.Touch.enable(stage)
    stage.enableMouseOver(10)
    stage.mouseMoveOutside = true
    this.stage = stage
  }
  mouseDownEvent(event) {
    if (this.isEdit) {
      return
    }
    this.startPostion = {x: event.layerX, y: event.layerY}
    this.canDraw = true
  }

  mouseMoveEvent(event) {
    if (this.isEdit) {
      return
    }
    if (!this.canDraw) {
      return false
    }
    this.movePostion = {x: event.layerX, y: event.layerY}
    let width =  event.layerX - this.startPostion.x
    let height =  event.layerY -this.startPostion.y
    let obj = {
      x: this.startPostion.x,
      y: this.startPostion.y,
      w: width,
      h: height,
      type: 'm-move'
    }
    this.drawRect(obj)
  }

  mouseUpEvent(event) {
    if (this.isEdit) {
      return
    }
    this.canDraw = false
    this.upPostion = {x: event.layerX, y: event.layerY}
    let width =  event.layerX - this.startPostion.x
    let height =  event.layerY -this.startPostion.y
    let obj = {
      x: this.startPostion.x,
      y: this.startPostion.y,
      w: width,
      h: height,
      type: 'm-up'
    }
    this.drawRect(obj)
  }

  // mean
  triggerEdit() {
    this.isEdit = !this.isEdit
  }

  // canvas
  drawRect(obj) {
    let createjs = (<any>window).createjs
    let shape = new createjs.Shape()
    shape.graphics.setStrokeStyle(4,"round").beginStroke("red").drawRect(obj.x, obj.y, obj.w, obj.h)
    let con = new createjs.Container()
    con.cursor = "pointer"
    con.addChild(shape)
    this.stage.addChild(con)
    if (obj.type === 'm-up') {
      this.stage.removeChild(this.prevCon)
    } else {
      this.stage.removeChild(this.prevCon)
      this.prevCon = con
    }
    this.stage.update()
    let _that = this
    // 设置con的操作区
    con.addEventListener("mousedown", (event) => {
      if (!_that.isEdit) {
        return
      }
      event.target.parent.addChild(event.target)
			event.target.offset = {x: event.target.x - event.stageX, y: event.target.y - event.stageY}
    })
    con.on("pressmove", (event) => {
      if (!_that.isEdit) {
        return
      }
      event.target.x = event.stageX + event.target.offset.x
      event.target.y = event.stageY + event.target.offset.y
      this.stage.update()
    })
  }
}
