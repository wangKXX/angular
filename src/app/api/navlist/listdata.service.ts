import { Injectable } from '@angular/core';

@Injectable()
export class ListdataService {

  constructor() { }
  private listData = [
    {title: '首页', index: 1, type: 'calendar',
    children: [
      {title: '笑话', url: '/index'},
      {title: '在线涂鸦', url: '/blackborder'}
    ]},
    {title: '新闻列表', index: 2,
    children: [
      {title: 'EaselJS', url: '/EaselJS'}
    ]},
    {title: '娱乐新潮', index: 3,
    children: [
      {title: '面部检测', url: '/facecheck'},
      {title: '子标题', url: '#'},
      {title: '子标题', url: '#'},
      {title: '子标题', url: '#'}
    ]},
    {title: '国际风云', index: 4},
    ]

  getData() {
    return this.listData
  }
}
