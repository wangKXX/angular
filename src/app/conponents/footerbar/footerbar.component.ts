import { Component, OnInit } from '@angular/core';
import { Book } from '../../../moudles/book'

@Component({
  selector: 'app-footerbar',
  templateUrl: './footerbar.component.html',
  styleUrls: ['./footerbar.component.scss']
})
export class FooterbarComponent implements OnInit {

  constructor() { }
  book: Book = {
    name: '网络小数',
    price: 10
  }
  ngOnInit() {
  }

  tirrgerClose() {
    alert(0)
  }
}
