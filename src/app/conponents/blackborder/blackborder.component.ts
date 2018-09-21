import { Component, OnInit } from '@angular/core';
import { BlackborderService } from '../../api/blackborder.service'

@Component({
  selector: 'app-blackborder',
  templateUrl: './blackborder.component.html',
  styleUrls: ['./blackborder.component.scss']
})
export class BlackborderComponent implements OnInit {
  private canvasUtils;
  private start_draw_x: number = 0
  private start_draw_y: number = 0
  private end_draw_x: number = 0
  private end_draw_y: number = 0
  private can_draw: boolean = false
  private isEdit: boolean = false
  private canvas
  private _input
  private inputTxt
  private timer

  // 类型枚举
  private PEN_DRAW: number = 0 // 铅笔
  private RECT_DRAW: number = 1 // 矩形
  private LINE_DRAW: number = 2 // 线条
  private CIRE_DRAW: number = 3 // 圆
  private CLEAR_DRAW: number = 4 // 橡皮
  private CLEARALL: number = 5 // 清除全部

  // 用户选择类型
  private USER_SELECT_TYPE: number = 0
  ngOnInit() {
    this._input = document.getElementById('canvasuserinput')
    this.canvas = document.getElementById('canvas')
    this.canvasUtils = new BlackborderService(document.getElementById('canvas'))
  }

  inputValChange(val) {
    let obj = {
      x: this.start_draw_x,
      y: this.start_draw_y,
      txt: val
    }
    // this.canvasUtils.saveCanvasData()
    this.canvasUtils.drawTxt(obj)
  }
  edit() {
    this.isEdit = !this.isEdit
  }

  drawComm(type: number) {
    this.USER_SELECT_TYPE = type
    if (type === 5) {
      this.canvasUtils.clearAll() // 清屏完成后将选择设置为铅笔类型
      this.USER_SELECT_TYPE = 0
    } else if (type === 6) {
      this.canvas.style.cursor = 'text'
    }
  }

  inputBlur() {
    this.canvas.style.cursor = 'default'
    clearInterval(this.timer)
  }

  getLocation (x, y) {
    let canvas = this.canvas
    var bbox = canvas.getBoundingClientRect()
    return {
      x: (x - bbox.left) * (canvas.width / bbox.width),
      y: (y - bbox.top) * (canvas.height / bbox.height)
    }
  }

  mouseDownEvent($event) {
    let drawX = $event.clientX
    let drawY = $event.clientY
    let location = this.getLocation(drawX, drawY)
    drawX = location.x
    drawY = location.y
    if (!this.isEdit) {
      this.start_draw_x = drawX
      this.start_draw_y = drawY
      this.can_draw = true
      this.canvasUtils.saveCanvasData()
      console.log(this.USER_SELECT_TYPE)
      if (this.USER_SELECT_TYPE === 6) {
        this.canvasUtils.drawMouse(drawX, drawY)
        setTimeout(() => {
          this._input.focus()
        }, 250)
      }
    } else {
      // 编辑状态逻辑
      this.start_draw_x = drawX
      this.start_draw_y = drawY
      this.can_draw = true
      this.canvasUtils.clearCanvas()
      this.canvasUtils.saveCanvasData()
      //this.canvasUtils.isInPattren(drawX, drawY)
    }
  }

  mouseUpEvent($event) {
    this.can_draw = false
    let drawX = $event.clientX
    let drawY = $event.clientY
    let location = this.getLocation(drawX, drawY)
    drawX = location.x
    drawY = location.y
    if (this.isEdit) {
      // 编辑逻辑
      this.canvasUtils.isInPattren(drawX, drawY, this.start_draw_x, this.start_draw_y)
      this.USER_SELECT_TYPE = 0
    } else {
      this.end_draw_x = drawX
      this.end_draw_y = drawY
      let obj: any = {}
      switch (this.USER_SELECT_TYPE) {
        case 0:
          obj = {
            x: this.start_draw_x,
            y: this.start_draw_y,
            ex: drawX,
            ey: drawY,
            type: 'm_up'
          }
          this.canvasUtils.drawPen(obj)
          break
        case 1:
          obj = {
            x: this.start_draw_x,
            y: this.start_draw_y,
            w: drawX - this.start_draw_x,
            h: drawY - this.start_draw_y,
            type: 'm_up'
          }
          this.canvasUtils.drawRect(obj)
          break
        case 2:
          obj = {
            x: this.start_draw_x,
            y: this.start_draw_y,
            ex: drawX,
            ey: drawY,
            type: 'm_up'
          }
          this.canvasUtils.drawLine(obj)
          break
        case 3:
          let x = this.start_draw_x + (drawX - this.start_draw_x) / 2
          let y = this.start_draw_y + (drawY - this.start_draw_y) / 2
          let r = (drawY - this.start_draw_y) / 2
          obj = {
            x, y, r
          }
          this.canvasUtils.drawCire(obj)
          break
        case 4:
          obj = {
            ex: drawX,
            ey: drawY,
            type: 'm_up'
          }
          this.canvasUtils.clear(obj)
          this.start_draw_x = drawX
          this.start_draw_y = drawY
          break
      }
    }
  }

  mouseMoveEvent($event) {
    let drawX = $event.clientX
    let drawY = $event.clientY
    let location = this.getLocation(drawX, drawY)
    drawX = location.x
    drawY = location.y
    if (this.isEdit) {
      // 鼠标移动编辑中逻辑
      if (this.can_draw) {
        setTimeout(() => {
          this.canvasUtils.isInPattren(drawX, drawY, this.start_draw_x, this.start_draw_y)
        }, 250)
      }
    } else {
      if (!this.can_draw) {
        return false
      }
      this.end_draw_x = drawX
      this.end_draw_y = drawY
      let obj: any = {}
      switch (this.USER_SELECT_TYPE) {
        case 0:
          obj = {
            x: this.start_draw_x,
            y: this.start_draw_y,
            ex: drawX,
            ey: drawY,
            type: 'm_move'
          }
          this.canvasUtils.drawPen(obj)
          this.start_draw_x = drawX
          this.start_draw_y = drawY
          break
        case 1:
          obj = {
            x: this.start_draw_x,
            y: this.start_draw_y,
            w: drawX - this.start_draw_x,
            h: drawY - this.start_draw_y,
            type: 'm_move'
          }
          this.canvasUtils.drawRect(obj)
          break
        case 2:
          obj = {
            x: this.start_draw_x,
            y: this.start_draw_y,
            ex: drawX,
            ey: drawY,
            type: 'm_move'
          }
          this.canvasUtils.drawLine(obj)
          break
        case 3:
          let x = this.start_draw_x + (drawX - this.start_draw_x) / 2
          let y = this.start_draw_y + (drawY - this.start_draw_y) / 2
          let r = (drawY - this.start_draw_y) / 2
          obj = {
            x, y, r
          }
          this.canvasUtils.drawCire(obj)
          break
        case 4:
          obj = {
            ex: drawX,
            ey: drawY,
            type: 'm_move'
          }
          this.canvasUtils.clear(obj)
          this.start_draw_x = drawX
          this.start_draw_y = drawY
          break
      }
    }
  }
}
