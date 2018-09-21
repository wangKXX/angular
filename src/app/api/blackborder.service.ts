import { Injectable } from '@angular/core';

@Injectable()
export class BlackborderService {
  private ctx = this.canvas.getContext("2d")
  private canvasData
  private pattrenArr: Array<object> = []

  constructor(private canvas) {
    let width = canvas.offsetWidth
    let height = canvas.offsetHeight
    canvas.width = width
    canvas.height = height
  }

  // 清除canvas数据
  clearCanvas(obj = this.ctx.drow_obj): void {
    if (obj) {
      this.ctx.clearRect(obj.x - 1, obj.y -1, obj.w + 2, obj.h + 2)
    }
  }
  // 保存canvas数据
  saveCanvasData(): void {
    this.canvasData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
  }

  // 判断鼠标是否在图像上
  isInPattren(x: number, y: number, sx: number, sy: number): void {
    this.pattrenArr.map((val, index) => {
      let retData: any = {}
      retData = val
      let ret = retData.isPointInPath(x, y)
      if (ret) {
        const drow_obj = retData.drow_obj
        let obj = {
          x: drow_obj.x + (x - sx),
          y: drow_obj.y + (y - sy),
          w: drow_obj.w,
          h: drow_obj.h,
          type: 'm_clear'
        }
        this.drawRect(obj)
      }
    })
  }

  // 渲染canvas数据
  drawCanvas() :void {
    this.ctx.putImageData(this.canvasData, 0, 0, 0, 0, this.canvas.width, this.canvas.height, )
  }

  // 矩形
  drawRect(obj): void {
    this.drawCanvas()
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.rect(obj.x, obj.y, obj.w, obj.h)
    this.ctx.closePath();
    this.ctx.lineWidth = 2
    this.ctx.strokeStyle = '#fff'
    this.ctx.stroke()
    this.ctx.restore()
    if (obj.type === 'm_up' || obj.type === 'm_clear') {
      this.ctx.drow_obj = obj
      this.pattrenArr.push(this.ctx)
    }
  }

  // 铅笔
  drawPen (obj): void {
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.moveTo(+obj.x + 0.5, +obj.y + 0.5)
    this.ctx.lineTo(+obj.ex + 0.5, +obj.ey + 0.5)
    this.ctx.lineWidth = 2
    this.ctx.strokeStyle = '#ffff'
    this.ctx.stroke()
    this.ctx.restore()
  }

  // 直线
  drawLine(obj): void {
    this.drawCanvas()
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.moveTo(+obj.x + 0.5, +obj.y + 0.5)
    this.ctx.lineTo(+obj.ex + 0.5, +obj.ey + 0.5)
    this.ctx.lineWidth = 2
    this.ctx.strokeStyle = '#ffff'
    this.ctx.stroke()
    this.ctx.restore()
  }

  // 圆
  drawCire(obj): void {
    this.drawCanvas()
    this.ctx.save()
    this.ctx.beginPath()
    let r = Math.abs(obj.r)
    this.ctx.arc(obj.x, obj.y, r, 0, 2 * Math.PI)
    this.ctx.lineWidth = 2
    this.ctx.strokeStyle = '#ffff'
    this.ctx.stroke()
    this.ctx.restore()
    // if (obj.type === 'm_up' || obj.type === 'm_clear') {
    //   this.ctx.drow_obj = obj
    //   this.pattrenArr.push(this.ctx)
    // }
  }

  // 橡皮
  clear(obj): void {
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.clearRect(obj.ex, obj.ey, 20, 20)
    this.ctx.stroke()
    this.ctx.restore()
  }

  // 清屏
  clearAll(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  // 文字
  drawTxt(obj): void {
    this.drawCanvas()
    this.ctx.fillStyle = '#fff'
    this.ctx.font = "40px serif"
    this.ctx.fillText(obj.txt, obj.x, obj.y)
  }

  // 光标
  drawMouse(x:number, y: number) {
    this.drawCanvas()
    this.ctx.save()
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(x - 40, y - 40, 2, 40);
    this.ctx.restore()
  }
}
