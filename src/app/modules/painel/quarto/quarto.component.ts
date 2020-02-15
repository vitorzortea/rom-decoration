import { Component, OnInit } from '@angular/core';
import { EstruturaService } from 'src/app/shared/services/estrutura.service';

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.component.html',
  styleUrls: ['./quarto.component.styl']
})
export class QuartoComponent implements OnInit {

  constructor(
    public estruturas: EstruturaService
  ) { }

  ngOnInit() {
    console.log(this.estruturas);
  }

}
