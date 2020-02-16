import { Component, OnInit } from '@angular/core';
import { EstruturaService } from 'src/app/shared/services/estrutura.service';

@Component({
  selector: 'app-estrutura',
  templateUrl: './estrutura.component.html',
  styleUrls: ['./estrutura.component.styl']
})
export class EstruturaComponent implements OnInit {

  constructor(
    public estruturas: EstruturaService
  ) { }

  ngOnInit() {
  }

  sanfona(index) {
    const allList = document.querySelectorAll(`.list-menu>li`);
    const selectList = document.querySelector(`.list-menu>li:nth-child(${index + 1}n)`);

    allList.forEach((e, index2) => {
      if (index != index2) {
        e.classList.remove('active')
      }
    });
    selectList.classList.toggle('active')
  }

}
