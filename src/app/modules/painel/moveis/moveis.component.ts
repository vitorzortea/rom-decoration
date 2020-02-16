import { MoveisService } from './../../../shared/services/moveis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moveis',
  templateUrl: './moveis.component.html',
  styleUrls: ['./moveis.component.styl']
})
export class MoveisComponent implements OnInit {

  constructor(
    public moveis: MoveisService
  ) { }

  ngOnInit() {
  }

  sanfona(index) {
    const allList = document.querySelectorAll(`.list-menu>li`);
    const selectList = document.querySelector(`.list-menu>li:nth-child(${index + 1}n)`);
    console.log(selectList)

    allList.forEach((e, index2) => {
      if (index != index2) {
        e.classList.remove('active')
      }
    });
    selectList.classList.toggle('active')
  }

  teste(movel) {
    console.log(movel)
  }

}
