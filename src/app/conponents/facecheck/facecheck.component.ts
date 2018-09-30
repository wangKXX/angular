import { Component, OnInit } from '@angular/core'
import { FacecheckService } from '../../api/facecheck.service'
import { Observable } from 'rxjs'
import { Response } from '@angular/http'

@Component({
  selector: 'app-facecheck',
  templateUrl: './facecheck.component.html',
  styleUrls: ['./facecheck.component.scss']
})
export class FacecheckComponent implements OnInit {
  private canvas: any
  private ctx: any
  private localWidth
  private localHeight
  constructor(private api: FacecheckService) { }

  ngOnInit() {
    this.canvas = document.getElementById('canvas')
    let width = this.canvas.offsetWidth
    let height = this.canvas.offsetHeight
    console.log(width, height)
    this.canvas.width = width
    this.canvas.height = height
    let canvas = this.canvas
    this.ctx = canvas.getContext('2d')
  }

  fileChange(event) {
    let file = event.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    let imgDate = new Observable(observer => {
      fileReader.onload = (event) => {
        observer.next(event.target.result)
      }
    })
    let _that = this
    imgDate.subscribe({
      next(data) {
        _that.drawImage(data)
        _that.api.getFaceCheckData(data + '').subscribe({
          next(res: Response) {
            let data = res.json()
            _that.drawRect(data)
          },
          error(err) {}
        })
      },
      error(err) {
        console.log(err)
      }
    })
  }

  drawImage(img) {
    let canvas = this.canvas
    let image = new Image()
    image.src = img
    let _that = this
    image.onload = function(){
      _that.localWidth = (<any>this).width
      _that.localHeight = (<any>this).height
      _that.ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
    }
  }

  drawRect(obj) {
    let faces = obj.faces
    console.log(faces)
    if (faces && faces.length > 0) {
      faces.map((item , index) => {
        this.getRealface(item)
      })
    }

  }

  getRealface(obj) {
    let top = obj.face_rectangle.top
    let left = obj.face_rectangle.left
    let canvasW = this.canvas.width
    let canvasH = this.canvas.height
    let localHeight = this.localHeight
    let localWidth = this.localWidth
    let realTop = canvasH / localHeight * top
    let realLeft = canvasW / localWidth * left
    let realH = canvasH / localHeight * obj.face_rectangle.height
    let realW = canvasW / localWidth * obj.face_rectangle.width
    let ctx = this.ctx
    ctx.save()
    ctx.beginPath()
    ctx.rect(realLeft, realTop, realH, realW)
    ctx.closePath();
    ctx.lineWidth = 2
    ctx.strokeStyle = 'red'
    ctx.stroke()
    ctx.restore()
  }
}
