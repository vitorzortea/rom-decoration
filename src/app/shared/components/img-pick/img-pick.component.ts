import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-pick',
  templateUrl: './img-pick.component.html',
  styleUrls: ['./img-pick.component.styl']
})
export class ImgPickComponent implements OnInit {
  @Input() local;
  @Input() opcoes;
  @Input() defaultPath;

  constructor() { }

  ngOnInit() {
  }

  selectImg(path) {
    this.local.url = path;
    console.log(this.local)
  }
  pathGeneration(path) {
    if (path) {
      return `${this.defaultPath}${path}`
    }
    return ''
  }

}
