import { EstruturaService } from './../../shared/services/estrutura.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.styl']
})
export class PainelComponent implements OnInit {

  constructor(
    public estrutura: EstruturaService
  ) { }

  ngOnInit() {
  }

}
