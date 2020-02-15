import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstruturaService {

  constructor() { }

  private estrutura = [
    {
      local: 'Parede Frontal',
      slug: 'parede-f',
      cor: 'transparent',
      papel: ''
    },
    {
      local: 'Parede Lateral Direita',
      slug: 'parede-d',
      cor: 'transparent',
      papel: ''
    },
    {
      local: 'Parede Lateral Esquerda',
      slug: 'parede-e',
      cor: 'transparent',
      papel: ''
    },
    {
      local: 'Fundação',
      slug: 'piso',
      cor: 'transparent',
      papel: ''
    },
    {
      local: 'Teto',
      slug: 'teto',
      cor: 'transparent',
      papel: ''
    },
  ];

  get() {
    return this.estrutura;
  }
}
