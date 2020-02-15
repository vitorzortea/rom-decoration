import { Component, OnInit } from '@angular/core';
import { EstruturaService } from 'src/app/shared/services/estrutura.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.styl']
})
export class MenuComponent implements OnInit {

  constructor(
    public estruturas: EstruturaService
  ) { }

  ngOnInit() {
  }

}
